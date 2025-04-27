import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const TermsOfService = () => {
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display">Terms of Service</h1>
              <p className="text-lg md:text-xl max-w-3xl mx-auto text-slate-600 dark:text-slate-300 leading-relaxed">
                Last Updated: June 2023
              </p>
            </div>

            <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert prose-headings:font-display prose-headings:font-bold prose-p:text-base prose-p:leading-relaxed prose-p:font-normal prose-li:text-base prose-li:leading-relaxed">
              <p>
                Please read these Terms of Service ("Terms") carefully before using the Ask FlowChart website and AI-powered flowchart generation service. These Terms constitute a legally binding agreement between you and Ask FlowChart governing your access to and use of the website and services.
              </p>

              <h2 className="text-2xl md:text-3xl mb-6 mt-10 text-slate-800 dark:text-slate-100">Acceptance of Terms</h2>
              <p>
                By accessing or using our services, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you may not access or use our services.
              </p>

              <h2 className="text-2xl md:text-3xl mb-6 mt-10 text-slate-800 dark:text-slate-100">Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. We will provide notice of significant changes by posting the updated Terms on our website and updating the "Last Updated" date. Your continued use of our services after such changes constitutes your acceptance of the new Terms.
              </p>

              <h2 className="text-2xl md:text-3xl mb-6 mt-10 text-slate-800 dark:text-slate-100">Eligibility</h2>
              <p>
                You must be at least 16 years old to use our services. By using our services, you represent and warrant that you meet this requirement and that you have the legal authority to enter into these Terms.
              </p>

              <h2 className="text-2xl md:text-3xl mb-6 mt-10 text-slate-800 dark:text-slate-100">Account Registration</h2>
              <p>
                To access certain features of our services, you may need to create an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete. You are responsible for safeguarding your password and for all activities that occur under your account.
              </p>

              <h2 className="text-2xl md:text-3xl mb-6 mt-10 text-slate-800 dark:text-slate-100">Service Description</h2>
              <p>
                Ask FlowChart provides AI-powered tools for creating flowcharts, diagrams, and visual representations based on text input. Our services may include:
              </p>
              <ul className="space-y-3 mb-8">
                <li>Creation of flowcharts from natural language descriptions</li>
                <li>Saving, editing, and sharing of generated flowcharts</li>
                <li>Various customization and export options</li>
                <li>Collaboration features (for premium plans)</li>
              </ul>

              <h2 className="text-2xl md:text-3xl mb-6 mt-10 text-slate-800 dark:text-slate-100">Subscription and Payment</h2>
              <p>
                We offer various subscription plans, including free and premium options. By selecting a premium plan, you agree to pay the applicable fees as described at the time of purchase. Unless otherwise stated:
              </p>
              <ul className="space-y-3 mb-8">
                <li>Subscription fees are charged in advance</li>
                <li>Subscriptions automatically renew until canceled</li>
                <li>You may cancel your subscription at any time</li>
                <li>Refunds are provided in accordance with our refund policy</li>
              </ul>

              <h2 className="text-2xl md:text-3xl mb-6 mt-10 text-slate-800 dark:text-slate-100">User Content</h2>
              <p>
                You retain ownership of any content you input into our services ("User Content"). By using our services, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, and display your User Content solely for the purpose of providing and improving our services.
              </p>
              <p>
                You represent and warrant that your User Content does not violate any third-party rights, including intellectual property rights and privacy rights, and complies with our content guidelines and all applicable laws.
              </p>

              <h2 className="text-2xl md:text-3xl mb-6 mt-10 text-slate-800 dark:text-slate-100">Prohibited Conduct</h2>
              <p>
                You agree not to:
              </p>
              <ul className="space-y-3 mb-8">
                <li>Use our services for any illegal purpose or in violation of any laws</li>
                <li>Violate the intellectual property or other rights of third parties</li>
                <li>Upload, transmit, or distribute any content that is harmful, offensive, or inappropriate</li>
                <li>Attempt to gain unauthorized access to our systems or networks</li>
                <li>Interfere with or disrupt the integrity or performance of our services</li>
                <li>Engage in any activity that could damage, disable, or impair our services</li>
                <li>Scrape, data mine, or extract data from our services using automated means</li>
                <li>Create multiple accounts or share your account credentials</li>
              </ul>

              <h2 className="text-2xl md:text-3xl mb-6 mt-10 text-slate-800 dark:text-slate-100">Intellectual Property</h2>
              <p>
                All content, features, and functionality of our services, including but not limited to text, graphics, logos, icons, images, audio clips, software, and the design, selection, and arrangement thereof, are owned by Ask FlowChart, our licensors, or other providers and are protected by copyright, trademark, and other intellectual property laws.
              </p>
              <p>
                You may not copy, modify, distribute, sell, or lease any part of our services or included software, nor may you reverse engineer or attempt to extract the source code of that software, unless laws prohibit these restrictions or you have our written permission.
              </p>

              <h2 className="text-2xl md:text-3xl mb-6 mt-10 text-slate-800 dark:text-slate-100">Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Ask FlowChart and its affiliates, officers, employees, agents, partners, and licensors shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, or goodwill, arising out of or in connection with your access to or use of our services.
              </p>
              <p>
                In no event shall our total liability to you for all claims arising from or relating to these Terms or your use of our services exceed the amount paid by you, if any, for accessing our services during the twelve (12) months immediately preceding the date of the claim.
              </p>

              <h2 className="text-2xl md:text-3xl mb-6 mt-10 text-slate-800 dark:text-slate-100">Disclaimers</h2>
              <p>
                Our services are provided "as is" and "as available" without warranties of any kind, either express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not guarantee that our services will be uninterrupted, secure, or error-free.
              </p>
              <p>
                While we strive to provide accurate and helpful information, we make no warranty that the flowcharts and diagrams generated by our AI will be error-free, complete, or suitable for your specific needs. You are responsible for reviewing and verifying all content generated by our services.
              </p>

              <h2 className="text-2xl md:text-3xl mb-6 mt-10 text-slate-800 dark:text-slate-100">Indemnification</h2>
              <p>
                You agree to indemnify, defend, and hold harmless Ask FlowChart and its affiliates, officers, directors, employees, agents, and licensors from and against all claims, liabilities, expenses, damages, and losses, including reasonable attorneys' fees, arising out of or in connection with your violation of these Terms or your use of our services.
              </p>

              <h2 className="text-2xl md:text-3xl mb-6 mt-10 text-slate-800 dark:text-slate-100">Termination</h2>
              <p>
                We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason, including if you breach these Terms. Upon termination, your right to use our services will immediately cease.
              </p>
              <p>
                All provisions of these Terms which by their nature should survive termination shall survive, including without limitation ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
              </p>

              <h2 className="text-2xl md:text-3xl mb-6 mt-10 text-slate-800 dark:text-slate-100">Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of [Jurisdiction], without regard to its conflict of law provisions. Any legal action or proceeding arising out of or relating to these Terms shall be brought exclusively in the courts of [Jurisdiction].
              </p>

              <h2 className="text-2xl md:text-3xl mb-6 mt-10 text-slate-800 dark:text-slate-100">Severability</h2>
              <p>
                If any provision of these Terms is found to be unenforceable or invalid under any applicable law, such unenforceability or invalidity shall not render these Terms unenforceable or invalid as a whole, and such provision shall be deleted without affecting the remaining provisions.
              </p>

              <h2 className="text-2xl md:text-3xl mb-6 mt-10 text-slate-800 dark:text-slate-100">Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at:
              </p>
              <p>
                Email: terms@askflowchart.com<br />
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

export default TermsOfService; 