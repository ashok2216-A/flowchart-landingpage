import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ fullName, email, password, agreeToTerms });
    // Add registration logic here
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <section className="w-full relative overflow-hidden py-8">
          {/* Background Elements */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-[10%] right-[5%] w-[40%] h-[40%] bg-brand-blue/5 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-[10%] left-[5%] w-[40%] h-[40%] bg-brand-purple/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }}></div>
          </div>

          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto">
              <div className="text-center mb-8">
                <h1 className="text-3xl md:text-4xl font-bold mb-3 font-display">Create an Account</h1>
                <p className="text-slate-600 dark:text-slate-300">
                  Join thousands of users creating stunning flowcharts with AI
                </p>
              </div>

              <div className="bg-background/70 backdrop-blur-md border border-brand-blue/20 rounded-xl p-8 shadow-lg">
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="fullName" className="block text-sm font-medium">
                        Full Name
                      </label>
                      <Input
                        id="fullName"
                        type="text"
                        placeholder="John Doe"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                        className="w-full border-brand-blue/20 focus:border-brand-blue focus:ring-brand-blue/30"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full border-brand-blue/20 focus:border-brand-blue focus:ring-brand-blue/30"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="password" className="block text-sm font-medium">
                        Password
                      </label>
                      <Input
                        id="password"
                        type="password"
                        placeholder="Create a strong password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full border-brand-blue/20 focus:border-brand-blue focus:ring-brand-blue/30"
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        Must be at least 8 characters with 1 uppercase, 1 number, and 1 special character
                      </p>
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox 
                        id="terms" 
                        checked={agreeToTerms}
                        onCheckedChange={(checked) => setAgreeToTerms(checked as boolean)}
                        className="mt-1"
                      />
                      <label
                        htmlFor="terms"
                        className="text-sm leading-tight peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        I agree to the{" "}
                        <Link to="/terms-of-service" className="text-brand-blue hover:text-brand-blue/80 font-medium">
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link to="/privacy-policy" className="text-brand-blue hover:text-brand-blue/80 font-medium">
                          Privacy Policy
                        </Link>
                      </label>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white h-11"
                      disabled={!agreeToTerms}
                    >
                      Create Account
                    </Button>
                  </div>
                </form>
              </div>

              <div className="text-center mt-6">
                <p className="text-slate-600 dark:text-slate-300">
                  Already have an account?{" "}
                  <Link to="/sign-in" className="text-brand-blue hover:text-brand-blue/80 font-medium">
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SignUp; 