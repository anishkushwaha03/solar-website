import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20">
      <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 mb-6 leading-tight">
        Power Your Home <br/> With <span className="text-orange-500">Clean Energy</span>
      </h1>
      <p className="text-xl text-gray-600 mb-10 max-w-2xl">
        Join the green revolution. We provide world-class solar panel installations that save you money and save the planet.
      </p>
      <div className="space-x-4">
        <Link to="/services" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition shadow-lg">
          Our Services
        </Link>
        <Link to="/contact" className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition">
          Get a Quote
        </Link>
      </div>
    </div>
  );
}