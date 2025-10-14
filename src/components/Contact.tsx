import { Phone, Mail, Instagram, Linkedin, Youtube, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 glow-text-blue">
          Get in Touch
        </h2>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-blue-500/30 rounded-xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6 text-blue-400">Student Coordinator</h3>

            <div className="space-y-4">
              <div className="flex items-center gap-4 group">
                <Phone className="text-blue-400 group-hover:scale-110 transition-transform duration-300" size={24} />
                <div>
                  <p className="text-gray-400 text-sm">Call or WhatsApp</p>
                  <a href="tel:+919944699989" className="text-white text-lg hover:text-blue-400 transition-colors">
                    Gokul Bharath - 9944699989
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <Mail className="text-cyan-400 group-hover:scale-110 transition-transform duration-300" size={24} />
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a href="mailto:algofest@kit.edu.in" className="text-white hover:text-cyan-400 transition-colors">
                    algofest@kit.edu.in
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-700">
              <h4 className="text-lg font-semibold mb-4 text-gray-300">Follow Us</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-pink-600 p-3 rounded-full transition-all duration-300 hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-blue-600 p-3 rounded-full transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-red-600 p-3 rounded-full transition-all duration-300 hover:scale-110"
                  aria-label="YouTube"
                >
                  <Youtube size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-blue-500/30 rounded-xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6 text-blue-400">Venue</h3>

            <div className="flex items-start gap-4 mb-6">
              <MapPin className="text-blue-400 flex-shrink-0 mt-1" size={24} />
              <div>
                <p className="text-white font-semibold text-lg mb-2">
                  Kalaignarkarunanidhi Institute of Technology
                </p>
                <p className="text-gray-400">
                  NH-209, Kannampalayam,<br />
                  Coimbatore - 641 402,<br />
                  Tamil Nadu, India
                </p>
              </div>
            </div>

            <div className="w-full h-64 bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.5835!2d76.9945!3d11.0059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8586e5e5e5e5e%3A0x5e5e5e5e5e5e5e5e!2sKIT%20Coimbatore!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="KIT Coimbatore Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
