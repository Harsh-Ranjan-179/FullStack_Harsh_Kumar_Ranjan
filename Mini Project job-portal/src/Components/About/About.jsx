import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12 flex items-center">
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        <div className="flex justify-center">
          <img 
            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png" 
            alt="About"
            className="w-72 md:w-96 object-contain"
          />
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            About Our Platform
          </h2>

          <p className="text-gray-600 mb-4 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit perspiciatis rerum tempore officiis dicta.
          </p>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis consequatur porro perferendis ratione placeat.
          </p>

          <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>

      </div>

    </div>
  )
}

export default About