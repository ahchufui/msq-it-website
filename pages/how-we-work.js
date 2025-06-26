import Layout from '../components/Layout';
import Link from 'next/link';
import PageHeader from '../components/PageHeader';
import ContentSection from '../components/ContentSection';

export default function HowWeWork() {
  return (
    <Layout title="How We Work - MSQ IT">
      {/* Hero Section */}
      <PageHeader
        title="How We Work"
        subtitle="Our team works closely with clients to deliver tailored, value-driven IT solutions. From planning and implementation to support, our work is focused on your business outcomes."
        accentText="Our Approach"
      />

      {/* Our Process */}
      <ContentSection
        title="Our Process"
        titleGradient={true}
        accentText="How We Deliver"
        bgClass="bg-gradient-to-br from-white to-blue-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              step: 1,
              title: "Discovery",
              description: "We start by understanding your business goals, challenges, and current technology landscape.",
              gradient: "from-blue-500 to-indigo-500"
            },
            {
              step: 2,
              title: "Planning",
              description: "We develop a strategic plan that aligns technology solutions with your business objectives.",
              gradient: "from-indigo-500 to-purple-500"
            },
            {
              step: 3,
              title: "Implementation",
              description: "We execute the plan with precision, minimizing disruption to your business operations.",
              gradient: "from-purple-500 to-indigo-500"
            },
            {
              step: 4,
              title: "Ongoing Support",
              description: "We provide continuous support and optimization to ensure long-term success.",
              gradient: "from-indigo-500 to-blue-500"
            }
          ].map((process, index) => (
            <div key={index} className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-xl blur opacity-10 group-hover:opacity-30 transition duration-300"></div>
              <div className="relative bg-white p-6 rounded-xl border border-gray-200/50 shadow-lg backdrop-blur-sm text-center transition-all duration-300 hover:translate-y-[-5px]">
                <div className={`w-16 h-16 bg-gradient-to-br ${process.gradient} rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold shadow-glow`}>
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  {process.title}
                </h3>
                <p className="text-gray-600">
                  {process.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* Our Principles */}
      <ContentSection
        title="Our Guiding Principles"
        titleGradient={true}
        accentText="What Drives Us"
        bgClass="bg-gradient-to-br from-gray-50 to-indigo-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            {
              title: "Independent and Objective",
              description: [
                "We remain vendor-neutral and focus solely on finding the right solutions for your specific needs. Our recommendations are based on what will work best for your business, not on vendor relationships or commissions.",
                "This independence allows us to objectively evaluate options and select the most appropriate technology for each unique situation."
              ],
              icon: (
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              ),
              gradient: "from-blue-500 to-indigo-500"
            },
            {
              title: "Strategy-Aligned",
              description: [
                "Every IT decision should support your broader business strategy. We take the time to understand your business goals and ensure that technology investments directly contribute to achieving them.",
                "This alignment ensures that your IT spending delivers measurable business value and supports your growth objectives."
              ],
              icon: (
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              ),
              gradient: "from-indigo-500 to-purple-500"
            },
            {
              title: "Performance and Simplicity",
              description: [
                "We focus on solutions that enhance performance while simplifying your technology landscape. Complex systems often lead to inefficiencies and higher support costs.",
                "Our approach emphasizes streamlined solutions that are easier to manage and deliver better performance for your business."
              ],
              icon: (
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              ),
              gradient: "from-purple-500 to-indigo-500"
            },
            {
              title: "Best Practice Frameworks",
              description: [
                "Our work is guided by established frameworks like ITIL, PMI, and SMB1001. These proven methodologies ensure consistency, quality, and reliability in everything we do.",
                "By following these frameworks, we deliver predictable outcomes and minimize risks in your technology implementations."
              ],
              icon: (
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              ),
              gradient: "from-indigo-500 to-blue-500"
            }
          ].map((principle, index) => (
            <div key={index} className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-xl blur opacity-10 group-hover:opacity-30 transition duration-300"></div>
              <div className="relative bg-white p-6 rounded-xl border border-gray-200/50 shadow-lg backdrop-blur-sm transition-all duration-300 hover:translate-y-[-5px]">
                <div className="flex items-center mb-6">
                  <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${principle.gradient} flex items-center justify-center shadow-glow flex-shrink-0 mr-4`}>
                    {principle.icon}
                  </div>
                  <h3 className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    {principle.title}
                  </h3>
                </div>
                {principle.description.map((paragraph, pIndex) => (
                  <p key={pIndex} className={`text-lg ${pIndex < principle.description.length - 1 ? 'mb-4' : ''} text-gray-600`}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* Client Engagement Model */}
      <ContentSection
        title="Our Client Engagement Model"
        titleGradient={true}
        accentText="How We Work With You"
        bgClass="bg-gradient-to-br from-white to-blue-50"
      >
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-xl blur opacity-10"></div>
          <div className="relative bg-white p-8 rounded-xl border border-gray-200/50 shadow-lg backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Initial Consultation",
                  description: "We begin with a thorough discussion of your business needs, challenges, and objectives.",
                  items: ["Business goal alignment", "Current state assessment", "Pain point identification"],
                  gradient: "from-blue-500 to-indigo-500",
                  delay: "delay-0"
                },
                {
                  title: "Solution Development",
                  description: "We create a tailored plan that addresses your specific needs with practical, effective solutions.",
                  items: ["Strategic roadmapping", "Solution architecture", "Budget and timeline planning"],
                  gradient: "from-indigo-500 to-purple-500",
                  delay: "delay-100"
                },
                {
                  title: "Delivery & Support",
                  description: "We implement solutions with precision and provide ongoing support to ensure continued success.",
                  items: ["Controlled implementation", "Knowledge transfer", "Ongoing optimization"],
                  gradient: "from-purple-500 to-indigo-500",
                  delay: "delay-200"
                }
              ].map((phase, index) => (
                <div key={index} className={`group relative transform transition-all duration-300 hover:translate-y-[-5px] ${phase.delay} animate-fade-in-up`}>
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-300"></div>
                  <div className="relative bg-white p-6 rounded-lg border border-gray-200/50 shadow-md h-full">
                    <div className="mb-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${phase.gradient} text-white shadow-sm`}>
                        Phase {index + 1}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      {phase.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {phase.description}
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      {phase.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start group-hover:translate-x-1 transition-transform duration-300">
                          <div className={`h-5 w-5 mr-2 rounded-full bg-gradient-to-br ${phase.gradient} flex-shrink-0 flex items-center justify-center`}>
                            <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Call to Action */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark to-indigo-900 z-0"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 -right-24 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-32 left-1/4 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:20px_20px] z-0"></div>
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-6 text-white">
              <span className="inline-block">
                <span className="relative">
                  <span className="absolute -inset-1 w-full h-full bg-gradient-to-r from-blue-400 to-indigo-400 rounded-lg blur opacity-30"></span>
                  <span className="relative">Ready to Experience</span>
                </span>
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-200 to-indigo-100 bg-clip-text text-transparent">Our Approach?</span>
            </h2>
            <p className="text-xl mb-10 max-w-3xl mx-auto text-blue-50">
              Contact us today to discuss how our client-focused methodology can help your business achieve its technology goals.
            </p>
            <Link href="/contact" className="relative inline-flex group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-md blur opacity-70 group-hover:opacity-100 transition duration-500"></div>
              <span className="relative inline-flex items-center justify-center px-8 py-4 rounded-md text-base font-medium text-primary bg-white hover:bg-gray-50 transition duration-200">
                Contact Us
                <svg className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
