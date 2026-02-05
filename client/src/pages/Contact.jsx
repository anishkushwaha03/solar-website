import { useState } from 'react';
import axios from 'axios';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); // null, 'loading', 'success', 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      // Make sure your backend server is running!
      await axios.post('http://localhost:5000/api/contact', formData);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-10 rounded-2xl shadow-2xl mt-8">
      <h2 className="text-3xl font-bold mb-2 text-center text-blue-900">Get in Touch</h2>
      <p className="text-center text-gray-500 mb-8">We'd love to hear from you!</p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input 
            type="text" name="name" value={formData.name} onChange={handleChange} required 
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
          <input 
            type="email" name="email" value={formData.email} onChange={handleChange} required 
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            placeholder="john@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <textarea 
            name="message" value={formData.message} onChange={handleChange} required rows="4"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            placeholder="Tell us about your project..."
          ></textarea>
        </div>
        
        <button 
          type="submit" 
          disabled={status === 'loading'}
          className={`w-full text-white py-3 rounded-lg font-bold text-lg transition shadow-md ${
            status === 'loading' ? 'bg-gray-400 cursor-not-allowed' : 'bg-orange-500 hover:bg-orange-600'
          }`}
        >
          {status === 'loading' ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      {status === 'success' && (
        <div className="mt-4 p-3 bg-green-100 text-green-700 text-center rounded-lg">
          ✅ Message sent successfully! We'll get back to you soon.
        </div>
      )}
      {status === 'error' && (
        <div className="mt-4 p-3 bg-red-100 text-red-700 text-center rounded-lg">
          ❌ Something went wrong. Please try again later.
        </div>
      )}
    </div>
  );
}