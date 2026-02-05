export default function About() {
  return (
    <div className="max-w-4xl mx-auto py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">About Techno Solar</h1>
        <div className="w-24 h-1 bg-orange-500 mx-auto rounded"></div>
      </div>
      
      <div className="bg-white p-8 rounded-2xl shadow-xl">
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Founded in 2024, <strong>Techno Solar Power</strong> is a team of certified energy experts dedicated to accelerating the world's transition to sustainable energy. 
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          We believe that solar power shouldn't just be an "alternative"—it should be the standard. We have successfully installed over <strong>500+ systems</strong> across residential and commercial properties, reducing carbon footprints one roof at a time.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mt-10 text-center">
          <div className="p-4">
            <h3 className="text-3xl font-bold text-blue-600">500+</h3>
            <p className="text-gray-500">Installations</p>
          </div>
          <div className="p-4">
            <h3 className="text-3xl font-bold text-blue-600">100%</h3>
            <p className="text-gray-500">Satisfaction</p>
          </div>
          <div className="p-4">
            <h3 className="text-3xl font-bold text-blue-600">24/7</h3>
            <p className="text-gray-500">Support</p>
          </div>
        </div>
      </div>
    </div>
  );
}