export default function Sponsors() {
  const sponsors = ["TechCorp", "EduBuild", "NextGen", "FutureDev"];

  return (
    <section className="w-full max-w-6xl mx-auto mt-24 p-6">
      <h2 className="text-4xl font-bold mb-8 border-b border-gray-800 pb-4">Our Sponsors</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {sponsors.map((sponsor, index) => (
          <div key={index} className="h-24 bg-gray-900 border border-gray-800 rounded-xl flex items-center justify-center text-gray-500 font-bold text-xl">
            {sponsor} Logo
          </div>
        ))}
      </div>
    </section>
  );
}