export default function FaqContact() {
  const faqs = [
    { q: "Who can participate?", a: "Any undergraduate or postgraduate student with a valid college ID card." },
    { q: "Is accommodation provided?", a: "Accommodation is available on a first-come, first-serve basis for outstation participants." },
    { q: "How do I pay the registration fee?", a: "Registration fees can be paid via UPI at the physical registration desk on Day 1." }
  ];

  return (
    <section className="w-full max-w-6xl mx-auto mt-24 p-6 mb-24">
      <h2 className="text-4xl font-bold mb-8 border-b border-gray-800 pb-4">FAQs & Contact</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* FAQ Column */}
        <div className="flex flex-col gap-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
              <h4 className="text-lg font-bold mb-2">{faq.q}</h4>
              <p className="text-gray-400 text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
        
        {/* Contact Column */}
        <div className="bg-gray-900 border border-gray-800 p-8 rounded-xl flex flex-col justify-center">
          <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
          <p className="text-gray-400 mb-6 text-sm">Have a specific question? Reach out to our core team directly.</p>
          
          <div className="flex flex-col gap-4 text-gray-300">
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
              <span className="font-bold text-white w-32">Email:</span> 
              <a href="mailto:yesm2025@gmail.com" className="hover:text-green-400 transition-colors">yesm2025@gmail.com</a>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
              <span className="font-bold text-white w-32">Sagnik:</span> 
              <span>+91 xxxxx xxxxx</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
              <span className="font-bold text-white w-32">Arya:</span> 
              <span>+91 xxxxx xxxxx</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}