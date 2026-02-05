export default function Services() {
  const services = [
    {
      title: "Residential Solar",
      price: "From ₹1,00,000",
      features: ["Rooftop Analysis", "High-Efficiency Panels", "25-Year Warranty"],
      color: "bg-blue-50"
    },
    {
      title: "Commercial EPC",
      price: "Custom Quote",
      features: ["Industrial Grid Tie", "Project Management", "Tax Credit Assistance"],
      color: "bg-orange-50"
    },
    {
      title: "Maintenance",
      price: "₹5000 / Year",
      features: ["Annual Cleaning", "Performance Check", "Inverter Health Status"],
      color: "bg-green-50"
    }
  ];

  return (
    <div className="py-12">
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-12">Our Premium Services</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((s, index) => (
          <div key={index} className={`${s.color} p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition-transform duration-300 border border-gray-100`}>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{s.title}</h2>
            <p className="text-xl text-blue-600 font-semibold mb-6">{s.price}</p>
            <ul className="space-y-3 mb-8">
              {s.features.map((f, i) => (
                <li key={i} className="flex items-center text-gray-600">
                  <span className="mr-2 text-green-500">✔</span> {f}
                </li>
              ))}
            </ul>
            <button className="w-full bg-white text-gray-800 font-bold py-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}