import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from '@/components/ui/resizable';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useIsMobile } from '@/hooks/use-mobile';
import { FlowChartPreview } from '@/components/FlowChartPreview';
import { Link } from 'react-router-dom';

const formSchema = z.object({
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
  apiKey: z.string().min(1, {
    message: "API key is required.",
  }),
  industry: z.string().min(1, {
    message: "Please select an industry.",
  }),
  theme: z.string().min(1, {
    message: "Please select a theme.",
  }),
  orientation: z.string().min(1, {
    message: "Please select an orientation.",
  }),
  includeIcons: z.boolean().default(false),
  includeDetails: z.boolean().default(true),
  cacheResults: z.boolean().default(true),
  debug: z.boolean().default(false),
});

type FormValues = z.infer<typeof formSchema>;

const industries = [
  { value: "technology", label: "Technology" },
  { value: "healthcare", label: "Healthcare" },
  { value: "finance", label: "Finance" },
  { value: "education", label: "Education" },
  { value: "marketing", label: "Marketing" },
  { value: "manufacturing", label: "Manufacturing" },
  { value: "retail", label: "Retail" },
];

const themes = [
  { value: "modern-minimal", label: "Modern Minimal" },
  { value: "corporate-professional", label: "Corporate Professional" },
  { value: "creative-colorful", label: "Creative Colorful" },
  { value: "tech-blueprint", label: "Tech Blueprint" },
  { value: "healthcare", label: "Healthcare" },
  { value: "finance-banking", label: "Finance & Banking" },
];

const orientations = [
  { value: "horizontal", label: "Horizontal (Landscape)" },
  { value: "vertical", label: "Vertical (Portrait)" },
];

// Define Mistral API interface
interface MistralAPIResponse {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: {
    index: number;
    message: {
      role: string;
      content: string;
    };
  }[];
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}

// Define flowchart node and edge types
interface FlowchartNode {
  id: string;
  position: { x: number; y: number };
  data: { label: string };
  type?: string;
}

interface FlowchartEdge {
  id: string;
  source: string;
  target: string;
  label?: string;
}

interface ParsedFlowchart {
  nodes: FlowchartNode[];
  edges: FlowchartEdge[];
}

const FlowChartGenerator = () => {
  const isMobile = useIsMobile();
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedChart, setGeneratedChart] = useState<any>(null);
  const [performanceMetrics, setPerformanceMetrics] = useState({
    executionTime: 0,
    apiTime: 0,
    renderTime: 0,
    promptTokens: 0,
    completionTokens: 0,
    totalTokens: 0,
  });

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: "",
      apiKey: "",
      industry: "technology",
      theme: "modern-minimal",
      orientation: "horizontal",
      includeIcons: false,
      includeDetails: true,
      cacheResults: true,
      debug: false,
    },
  });

  // Function to parse Mistral's text response into flowchart data
  const parseFlowchartResponse = (responseText: string): ParsedFlowchart => {
    try {
      // First try to find a JSON block in the response
      const jsonMatch = responseText.match(/```json\n([\s\S]*?)\n```/) || 
                         responseText.match(/```\n([\s\S]*?)\n```/) ||
                         responseText.match(/{[\s\S]*}/);
      
      if (jsonMatch) {
        // Extract JSON content and parse it
        const jsonContent = jsonMatch[0].replace(/```json\n|```\n|```/g, '');
        return JSON.parse(jsonContent);
      }
      
      // If no JSON block found, implement a fallback parser for text descriptions
      // This is a very basic parser - in a real app, this would be more sophisticated
      const nodes: FlowchartNode[] = [];
      const edges: FlowchartEdge[] = [];
      
      // Split by lines and find node descriptions
      const lines = responseText.split('\n');
      let currentY = 100;
      let previousNodeId: string | null = null;
      
      lines.forEach((line, index) => {
        // Skip empty lines
        if (!line.trim()) return;
        
        // Try to extract node information
        const nodeMatch = line.match(/(\d+|[A-Za-z]+)\.\s*(.*)/);
        if (nodeMatch) {
          const nodeId = `node-${index}`;
          const label = nodeMatch[2];
          
          // Create node
          nodes.push({
            id: nodeId,
            position: { x: 200, y: currentY },
            data: { label },
            type: index === 0 ? 'input' : (index === lines.length - 1 ? 'output' : undefined)
          });
          
          // Create edge if not the first node
          if (previousNodeId) {
            edges.push({
              id: `edge-${previousNodeId}-${nodeId}`,
              source: previousNodeId,
              target: nodeId
            });
          }
          
          previousNodeId = nodeId;
          currentY += 100;
        }
      });
      
      // Return fallback nodes and edges if we found any
      if (nodes.length > 0) {
        return { nodes, edges };
      }
      
      // Last resort - create basic start/end nodes
      return {
        nodes: [
          { id: '1', position: { x: 200, y: 100 }, data: { label: 'Start' }, type: 'input' },
          { id: '2', position: { x: 200, y: 200 }, data: { label: 'Process' } },
          { id: '3', position: { x: 200, y: 300 }, data: { label: 'End' }, type: 'output' },
        ],
        edges: [
          { id: 'e1-2', source: '1', target: '2' },
          { id: 'e2-3', source: '2', target: '3' },
        ]
      };
    } catch (error) {
      console.error("Error parsing flowchart response:", error);
      // Return a basic fallback flowchart
      return {
        nodes: [
          { id: '1', position: { x: 200, y: 100 }, data: { label: 'Start' }, type: 'input' },
          { id: '2', position: { x: 200, y: 200 }, data: { label: 'Error Parsing Response' } },
          { id: '3', position: { x: 200, y: 300 }, data: { label: 'End' }, type: 'output' },
        ],
        edges: [
          { id: 'e1-2', source: '1', target: '2' },
          { id: 'e2-3', source: '2', target: '3' },
        ]
      };
    }
  };

  const onSubmit = async (values: FormValues) => {
    if (!values.description) {
      toast.error("Please enter a flowchart description");
      return;
    }

    if (!values.apiKey) {
      toast.error("Please enter your Mistral API key");
      return;
    }

    setIsGenerating(true);
    const startTime = performance.now();

    try {
      toast.info("Generating flowchart with Mistral AI...");
      
      // Prepare prompt for Mistral API
      const prompt = `
Please create a flowchart based on the following description. 
Provide your response as a JSON object with "nodes" and "edges" arrays.

Description: ${values.description}

Industry Context: ${values.industry}
Include Icons: ${values.includeIcons ? "Yes" : "No"}
Include Detailed Descriptions: ${values.includeDetails ? "Yes" : "No"}

Each node should have:
- id (string)
- position (object with x and y coordinates)
- data (object with label property)
- type (optional - use "input" for start nodes and "output" for end nodes)

Each edge should have:
- id (string)
- source (id of source node)
- target (id of target node)
- label (optional - edge description)

Response format example:
{
  "nodes": [
    { "id": "1", "position": { "x": 100, "y": 100 }, "data": { "label": "Start" }, "type": "input" },
    { "id": "2", "position": { "x": 100, "y": 200 }, "data": { "label": "Process Data" } },
    { "id": "3", "position": { "x": 100, "y": 300 }, "data": { "label": "End" }, "type": "output" }
  ],
  "edges": [
    { "id": "e1-2", "source": "1", "target": "2" },
    { "id": "e2-3", "source": "2", "target": "3" }
  ]
}

Please place the nodes in a logical top-to-bottom layout with appropriate spacing (y-coordinates typically 100 units apart).
`;

      // Call Mistral API
      const apiStartTime = performance.now();
      const response = await fetch('https://api.mistral.ai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${values.apiKey}`
        },
        body: JSON.stringify({
          model: 'mistral-small-latest',
          messages: [
            { role: 'user', content: prompt }
          ],
          temperature: 0.3
        })
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Mistral API error: ${errorData.error?.message || response.statusText}`);
      }
      
      const data: MistralAPIResponse = await response.json();
      const apiEndTime = performance.now();
      
      // Extract text response
      const textResponse = data.choices[0].message.content;
      
      // Parse the response into flowchart data
      const flowchartData = parseFlowchartResponse(textResponse);
      
      // Add theme and orientation
      const fullFlowchartData = {
        ...flowchartData,
        theme: values.theme,
        orientation: values.orientation,
      };

      // Set the generated chart
      setGeneratedChart(fullFlowchartData);
      
      const renderEndTime = performance.now();
      
      // Update performance metrics
      setPerformanceMetrics({
        executionTime: Math.round(renderEndTime - startTime),
        apiTime: Math.round(apiEndTime - apiStartTime),
        renderTime: Math.round(renderEndTime - apiEndTime),
        promptTokens: data.usage.prompt_tokens,
        completionTokens: data.usage.completion_tokens,
        totalTokens: data.usage.total_tokens
      });

      toast.success("Flowchart generated successfully!");
    } catch (error) {
      console.error("Error generating flowchart:", error);
      toast.error(error instanceof Error ? error.message : "Failed to generate flowchart. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900">
      <header className="border-b border-border/40 dark:border-border/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-foreground flex items-center gap-2">
            <div className="size-10 rounded-md flex items-center justify-center">
              <img src="/lovable-uploads/ec4acbf6-e578-4249-8837-8cadaf699deb.png" alt="Ask FlowChart Logo" className="size-10 object-cover" />
            </div>
            <span>Ask FlowChart</span>
          </Link>
          <ThemeToggle />
        </div>
      </header>
      
      <main className="flex-grow flex">
        <ResizablePanelGroup 
          direction={isMobile ? "vertical" : "horizontal"}
          className="min-h-[calc(100vh-73px)] w-full"
        >
          {/* Flowchart Panel - left side */}
          <ResizablePanel defaultSize={60}>
            <div className="h-full relative">
              {generatedChart ? (
                <div className="absolute inset-0">
                  <FlowChartPreview flowchartData={generatedChart} />
                </div>
              ) : (
                <div className="h-full flex items-center justify-center bg-background/80 dark:bg-background/40">
                  <div className="text-center p-8 max-w-md">
                    <h3 className="text-xl font-semibold mb-3">Your Flowchart Will Appear Here</h3>
                    <p className="text-muted-foreground mb-6">
                      Enter your flow chart description and click "Generate Flowchart" to see the result here.
                    </p>
                    <Button 
                      variant="outline"
                      onClick={() => form.trigger("description")}
                      disabled={!form.getValues("description")}
                    >
                      Generate Sample
                    </Button>
                  </div>
                </div>
              )}
              
              {generatedChart && (
                <div className="absolute bottom-4 right-4 flex space-x-2">
                  <Button variant="outline" size="sm">
                    Export HTML
                  </Button>
                  <Button variant="outline" size="sm">
                    Export Image
                  </Button>
                </div>
              )}
            </div>
          </ResizablePanel>
          
          <ResizableHandle withHandle />
          
          {/* Form Panel - Right side */}
          <ResizablePanel defaultSize={40} minSize={25} maxSize={50}>
            <div className="p-6 h-full overflow-y-auto bg-card dark:bg-card/30">
              <h2 className="text-2xl font-bold mb-4">Generator Controls</h2>
              <Tabs defaultValue="input">
                <TabsList className="mb-4">
                  <TabsTrigger value="input">Input</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                  <TabsTrigger value="advanced">Advanced</TabsTrigger>
                </TabsList>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <TabsContent value="input" className="space-y-4 mt-0">
                      <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Flowchart Description</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Describe the flowchart you want to create..."
                                className="min-h-[200px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="apiKey"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Mistral API Key</FormLabel>
                            <FormControl>
                              <Input 
                                type="password" 
                                placeholder="Enter your Mistral API key" 
                                {...field} 
                              />
                            </FormControl>
                            <p className="text-xs text-muted-foreground mt-1">
                              Get an API key from <a href="https://console.mistral.ai/" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">Mistral AI Console</a>
                            </p>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="industry"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Industry Context</FormLabel>
                            <Select 
                              onValueChange={field.onChange} 
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select an industry" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {industries.map((industry) => (
                                  <SelectItem 
                                    key={industry.value} 
                                    value={industry.value}
                                  >
                                    {industry.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </TabsContent>
                    
                    <TabsContent value="settings" className="space-y-4 mt-0">
                      <FormField
                        control={form.control}
                        name="theme"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Theme</FormLabel>
                            <Select 
                              onValueChange={field.onChange} 
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a theme" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {themes.map((theme) => (
                                  <SelectItem 
                                    key={theme.value} 
                                    value={theme.value}
                                  >
                                    {theme.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="orientation"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Orientation</FormLabel>
                            <Select 
                              onValueChange={field.onChange} 
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select an orientation" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {orientations.map((orientation) => (
                                  <SelectItem 
                                    key={orientation.value} 
                                    value={orientation.value}
                                  >
                                    {orientation.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="includeIcons"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>
                                Include Icons in Nodes
                              </FormLabel>
                            </div>
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="includeDetails"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>
                                Include Detailed Node Descriptions
                              </FormLabel>
                            </div>
                          </FormItem>
                        )}
                      />
                    </TabsContent>
                    
                    <TabsContent value="advanced" className="space-y-4 mt-0">
                      <FormField
                        control={form.control}
                        name="cacheResults"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>
                                Cache Results
                              </FormLabel>
                              <p className="text-sm text-muted-foreground">
                                Save API costs by caching similar flowchart requests
                              </p>
                            </div>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="debug"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>
                                Debug Mode
                              </FormLabel>
                              <p className="text-sm text-muted-foreground">
                                Show performance metrics and technical details
                              </p>
                            </div>
                          </FormItem>
                        )}
                      />
                      
                      {form.watch("debug") && (
                        <div className="p-4 bg-muted rounded-md">
                          <h4 className="text-sm font-medium mb-2">Performance Metrics</h4>
                          <div className="space-y-1 text-xs">
                            <p>Total Execution Time: {performanceMetrics.executionTime}ms</p>
                            <p>API Call Time: {performanceMetrics.apiTime}ms</p>
                            <p>Render Time: {performanceMetrics.renderTime}ms</p>
                            {performanceMetrics.totalTokens > 0 && (
                              <>
                                <p>Prompt Tokens: {performanceMetrics.promptTokens}</p>
                                <p>Completion Tokens: {performanceMetrics.completionTokens}</p>
                                <p>Total Tokens: {performanceMetrics.totalTokens}</p>
                              </>
                            )}
                          </div>
                        </div>
                      )}
                    </TabsContent>
                    
                    <div className="pt-4 border-t border-border/20">
                      <Button 
                        type="submit" 
                        className="w-full"
                        variant="gradient"
                        size="lg"
                        disabled={isGenerating}
                      >
                        {isGenerating ? "Generating..." : "Generate Flowchart"}
                      </Button>
                    </div>
                  </form>
                </Form>
              </Tabs>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </main>
    </div>
  );
};

export default FlowChartGenerator;