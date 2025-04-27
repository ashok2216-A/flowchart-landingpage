import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32">
        <section className="py-12 overflow-hidden relative">
          {/* Background Elements */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-[10%] right-[5%] w-[40%] h-[40%] bg-brand-blue/5 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-[10%] left-[5%] w-[40%] h-[40%] bg-brand-purple/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }}></div>
          </div>

          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display">Privacy Policy</h1>
              <p className="text-lg md:text-xl max-w-3xl mx-auto text-slate-600 dark:text-slate-300 leading-relaxed">
                Last Updated: June 2023
              </p>
            </div>

            <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert prose-headings:font-display prose-headings:font-bold prose-p:text-base prose-p:leading-relaxed prose-p:font-normal prose-li:text-base prose-li:leading-relaxed">
              <p>
                At Ask FlowChart, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our AI-powered flowchart generation service.
              </p>

              <h2 className="text-2xl md:text-3xl mb-6 mt-10 text-slate-800 dark:text-slate-100">Information We Collect</h2>
              
              <h3 className="text-xl md:text-2xl mb-4 mt-8 text-slate-800 dark:text-slate-100">Personal Information</h3>
              <p>We may collect personal information that you voluntarily provide to us when you:</p>
              <ul className="space-y-3 mb-8">
                <li>Register for an account</li>
                <li>Subscribe to our newsletter</li>
                <li>Contact our support team</li>
                <li>Participate in surveys or promotions</li>
                <li>Make a purchase</li>
              </ul>
              
              <p>This information may include:</p>
              <ul className="space-y-3 mb-8">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Billing information</li>
                <li>Company information</li>
              </ul>

              <h3 className="text-xl md:text-2xl mb-4 mt-8 text-slate-800 dark:text-slate-100">Automatically Collected Information</h3>
              <p>When you visit our website or use our service, we may automatically collect certain information about your device and usage patterns, including:</p>
              <ul className="space-y-3 mb-8">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Referring website</li>
                <li>Pages viewed and time spent</li>
                <li>Clicks and interactions</li>
              </ul>

              <h3 className="text-xl md:text-2xl mb-4 mt-8 text-slate-800 dark:text-slate-100">User-Generated Content</h3>
              <p>
                When you use our AI-powered flowchart service, we collect the content you input (such as text descriptions, diagrams) to process your requests and improve our service. We may use anonymized versions of this data to train and enhance our AI models.
              </p>

              <h2 className="text-2xl md:text-3xl mb-6 mt-10 text-slate-800 dark:text-slate-100">How We Use Your Information</h2>
              <p>We use the information we collect for various purposes, including to:</p>
              <ul className="space-y-3 mb-8">
                <li>Provide, maintain, and improve our services</li>
                <li>Process and complete transactions</li>
                <li>Send administrative information, such as updates or security alerts</li>
                <li>Respond to inquiries and provide customer support</li>
                <li>Send marketing communications (with your consent)</li>
                <li>Monitor and analyze usage trends</li>
                <li>Detect, prevent, and address technical issues</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="text-2xl md:text-3xl mb-6 mt-10 text-slate-800 dark:text-slate-100">Sharing Your Information</h2>
              <p>We may share your information with:</p>
              <ul className="space-y-3 mb-8">
                <li><strong className="font-semibold">Service Providers:</strong> Third-party vendors who perform services on our behalf, such as payment processing, data analysis, email delivery, and customer service.</li>
                <li><strong className="font-semibold">Business Partners:</strong> With your consent, we may share your information with business partners to offer certain products, services, or promotions.</li>
                <li><strong className="font-semibold">Legal Requirements:</strong> If required by law or in response to legal process, to protect our rights, or to protect the safety of others.</li>
              </ul>

              <h2 className="text-2xl md:text-3xl mb-6 mt-10 text-slate-800 dark:text-slate-100">Your Privacy Rights</h2>
              <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
              <ul className="space-y-3 mb-8">
                <li>The right to access personal information we hold about you</li>
                <li>The right to request correction of inaccurate data</li>
                <li>The right to request deletion of your data</li>
                <li>The right to restrict or object to our processing of your data</li>
                <li>The right to data portability</li>
              </ul>
              <p>
                To exercise these rights, please contact us at privacy@askflowchart.com.
              </p>

              <h2 className="text-2xl md:text-3xl mb-6 mt-10 text-slate-800 dark:text-slate-100">Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, accidental loss, or damage. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>

              <h2 className="text-2xl md:text-3xl mb-6 mt-10 text-slate-800 dark:text-slate-100">Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>

              <h2 className="text-2xl md:text-3xl mb-6 mt-10 text-slate-800 dark:text-slate-100">Children's Privacy</h2>
              <p>
                Our services are not intended for individuals under the age of 16. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
              </p>

              <h2 className="text-2xl md:text-3xl mb-6 mt-10 text-slate-800 dark:text-slate-100">Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>

              <h2 className="text-2xl md:text-3xl mb-6 mt-10 text-slate-800 dark:text-slate-100">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p>
                Email: privacy@askflowchart.com<br />
                Address: 123 AI Boulevard, Tech City, TC 12345
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy; 