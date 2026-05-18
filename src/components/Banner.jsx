import Image from 'next/image';
import { ChevronRight, PawPrint, Heart, Shield, Clock } from 'lucide-react';

const Banner = () => {
  return (
      <div className="relative overflow-hidden bg-gradient-to-r from-teal-50 via-green-50 to-teal-50">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 bg-amber-200 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-rose-200 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-200 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <div className="space-y-6 text-center lg:text-left">
            {/* Paw Prints Decoration */}
            <div className="flex justify-center lg:justify-start gap-2 text-teal-500">
              <PawPrint className="w-5 h-5 fill-teal-500" />
              <PawPrint className="w-5 h-5 fill-teal-500" />
              <PawPrint className="w-5 h-5 fill-teal-500" />
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
              Best Pals for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-200">
                Your Paw Pals
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Your Trusted Partner in Pet Care, Offering Tailored Services to Ensure the Health, 
              Happiness, and Well-Being of Your Beloved Furry Companions.
            </p>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-teal-500 to-green-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 overflow-hidden cursor-pointer">
                <span>Adopt Now</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity rounded-full -z-10" />
              </button>
              
              <button className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 border border-gray-200 cursor-pointer">
                Learn More
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start pt-4">
              <div className="flex items-center gap-2 text-gray-600">
                <Heart className="w-5 h-5 text-teal-500 fill-green-200" />
                <span className="text-sm">Loving Care</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Shield className="w-5 h-5 text-teal-500" />
                <span className="text-sm">Trusted Since 2015</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Clock className="w-5 h-5 text-teal-500" />
                <span className="text-sm">24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Right Column - Dog Image */}
          <div className="relative flex justify-center items-center">
            {/* Decorative Circle */}
            <div className="absolute w-80 h-80 bg-gradient-to-r from-amber-200 to-teal-200 rounded-full opacity-50 blur-2xl animate-pulse" />
            
            {/* Dog Image Container */}
            <div className="relative z-10">
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=800&h=800&fit=crop"
                  alt="Happy dog with tongue out"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
              {/* Floating paw prints */}
              <div className="absolute -top-4 -right-4 opacity-60">
                <PawPrint className="w-8 h-8 text-teal-400 fill-green-400" />
              </div>
              <div className="absolute -bottom-2 -left-6 opacity-60">
                <PawPrint className="w-6 h-6 text-green-400 fill-teal-400" />
              </div>
            </div>

            {/* Testimonial Card */}
            <div className="absolute -bottom-6 left-0 md:left-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-3 md:p-4 max-w-[200px] md:max-w-xs">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-teal-400 to-green-400 flex items-center justify-center text-white font-bold">
                  🐾
                </div>
                <div>
                  <p className="text-xs md:text-sm font-semibold text-gray-700">Happy Pet Parents</p>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3 h-3 text-green-400 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Decoration at Bottom */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg className="w-full h-12 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                fill="currentColor" />
        </svg>
      </div>
    </div>
  )
}

export default Banner
