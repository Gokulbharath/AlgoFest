import { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const eventDate = new Date('2025-10-27T10:00:00').getTime();
      const now = new Date().getTime();
      const difference = eventDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, []);

  const scrollToRegistration = () => {
    const element = document.getElementById('registration');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(0, 212, 255, 0.15) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, rgba(0, 150, 255, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 40% 20%, rgba(0, 200, 255, 0.1) 0%, transparent 50%)`
        }}></div>

        <div className="absolute inset-0 opacity-20">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-blue-400 rounded-full"
              style={{
                width: Math.random() * 4 + 1 + 'px',
                height: Math.random() * 4 + 1 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                animation: `float ${Math.random() * 3 + 2}s ease-in-out infinite`,
                animationDelay: Math.random() * 2 + 's',
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <div className="animate-fadeInUp">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 glow-text-blue font-mono">
            ALGOFEST
          </h1>
          <div className="text-4xl md:text-6xl font-bold mb-6 text-blue-400">
            Season 3
          </div>
          <p className="text-xl md:text-3xl mb-8 text-gray-300 font-light">
            Join the ALGOFEST • Code the Future
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12 text-lg">
            <div className="flex items-center gap-2 bg-gray-900/50 px-6 py-3 rounded-lg border border-blue-500/30">
              <Calendar className="text-blue-400" size={24} />
              <span>27th October 2025</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-900/50 px-6 py-3 rounded-lg border border-blue-500/30">
              <Clock className="text-blue-400" size={24} />
              <span>10:00 AM – 3:00 PM</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-900/50 px-6 py-3 rounded-lg border border-red-500/30">
              <MapPin className="text-red-400" size={24} />
              <span>KIT, Coimbatore</span>
            </div>
          </div>

          <div className="mb-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {[
                { label: 'Days', value: timeLeft.days },
                { label: 'Hours', value: timeLeft.hours },
                { label: 'Minutes', value: timeLeft.minutes },
                { label: 'Seconds', value: timeLeft.seconds },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-900/70 border border-blue-500/30 rounded-lg p-4 backdrop-blur-sm"
                >
                  <div className="text-3xl md:text-4xl font-bold text-blue-400 font-mono">
                    {item.value.toString().padStart(2, '0')}
                  </div>
                  <div className="text-sm text-gray-400 mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollToRegistration}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold text-xl px-12 py-4 rounded-full transition-all duration-300 glow-border-blue hover:scale-105 animate-pulse"
          >
            Register Now
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-blue-400 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
