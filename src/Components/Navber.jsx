import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function AllService() {
    const [services, setServices] = useState([]);

    // AOS Initialization
    useEffect(() => {
        AOS.init({
            duration: 1500,
            easing: 'ease-in-out', 
            once: true, 
        });
    }, []);

    // Fetching Service Data
    useEffect(() => {
        fetch('/allService.json') 
            .then((res) => res.json())
            .then((data) => setServices(data))
            .catch((error) => console.error('Error fetching services:', error));
    }, []);

    // Array of animations to apply dynamically
    const animations = ['fade-up', 'fade-right', 'zoom-in', 'flip-left', 'fade-left', 'zoom-out'];

    return (
        <div>
            <h2 className="text-3xl font-bold text-center my-8">Explore Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                {services.length > 0 ? (
                    services.map((service, index) => (
                        <div
                            key={index}
                            className="border rounded-lg shadow-lg p-4 hover:shadow-2xl transition"
                            data-aos={animations[index % animations.length]}                        >
                            {/* Relevant Image */}
                            <img
                                src={service.image}
                                alt={service.name}
                                className="w-full h-40 object-cover rounded-md mb-4"
                            />
                            {/* Service Name */}
                            <h3 className="text-xl font-semibold text-gray-800">{service.name}</h3>
                            {/* Category */}
                            <p className="text-sm text-gray-500 mb-2">
                                Category: {service.category}
                            </p>
                            {/* Pricing */}
                            <p className="text-lg text-gray-700 font-bold">
                                Price: ${service.pricing}
                            </p>
                            {/* Counselor Name */}
                            <p className="text-sm text-gray-600">Counselor: {service.counselor}</p>
                            {/* Learn More Button */}
                            <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                                Learn More
                            </button>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500">Loading services...</p>
                )}
            </div>
        </div>
    );
}

export default AllService;
