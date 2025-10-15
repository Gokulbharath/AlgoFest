import { Phone, Mail, Instagram, Linkedin, Youtube, User } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 glow-text-blue">
          Get in Touch
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Staff Coordinators */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-blue-500/30 rounded-xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6 text-blue-400">Staff Coordinators</h3>

            <div className="space-y-6">
              {/* Staff 1 */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 group">
                  <User className="text-blue-400 group-hover:scale-110 transition-transform duration-300" size={24} />
                  <div>
                    <p className="text-gray-400 text-sm">Faculty Advisor</p>
                    <p className="text-white text-lg font-semibold">Mr. Sandeep D</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <Phone className="text-cyan-400 group-hover:scale-110 transition-transform duration-300" size={24} />
                  <div>
                    <p className="text-gray-400 text-sm">Call or WhatsApp</p>
                    <a href="tel:+919688252414" className="text-white hover:text-cyan-400 transition-colors">
                      9688252414
                    </a>
                  </div>
                </div>
              </div>

              {/* Staff 2 */}
              <div className="space-y-4 border-t border-gray-700 pt-4">
                <div className="flex items-center gap-4 group">
                  <User className="text-blue-400 group-hover:scale-110 transition-transform duration-300" size={24} />
                  <div>
                    <p className="text-gray-400 text-sm">Faculty Advisor</p>
                    <p className="text-white text-lg font-semibold">Mr Arun akash R</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <Phone className="text-cyan-400 group-hover:scale-110 transition-transform duration-300" size={24} />
                  <div>
                    <p className="text-gray-400 text-sm">Call or WhatsApp</p>
                    <a href="tel:+916369111721" className="text-white hover:text-cyan-400 transition-colors">
                      6369111721
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Student Coordinators */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-blue-500/30 rounded-xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6 text-blue-400">Student Coordinators</h3>

            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-4 group mb-2">
                  <User className="text-blue-400 group-hover:scale-110 transition-transform duration-300" size={24} />
                  <p className="text-white text-lg font-semibold">Gokul Bharath V</p>
                </div>
                <div className="flex items-center gap-4 group ml-10">
                  <Phone className="text-cyan-400" size={20} />
                  <a href="tel:+919944699989" className="text-gray-300 hover:text-cyan-400 transition-colors">
                    9944699989
                  </a>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-4 group mb-2">
                  <User className="text-blue-400 group-hover:scale-110 transition-transform duration-300" size={24} />
                  <p className="text-white text-lg font-semibold">Mohammed Syfudeen S</p>
                </div>
                <div className="flex items-center gap-4 group ml-10">
                  <Phone className="text-cyan-400" size={20} />
                  <a href="tel:+919042649307" className="text-gray-300 hover:text-cyan-400 transition-colors">
                    9042649307
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-700">
              <div className="flex items-center gap-4 group">
                <Mail className="text-yellow-400 group-hover:scale-110 transition-transform duration-300" size={24} />
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a
                    href="mailto:algofest@kit.edu.in"
                    className="text-white hover:text-yellow-400 transition-colors text-sm"
                  >
                    algofest.kit@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Platform Partner */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-blue-500/30 rounded-xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6 text-blue-400">Platform Partner</h3>

            <p className="text-gray-300 mb-6">LearnLogicify Technologies</p>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-300">Follow Them</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/learnlogicify_official?igsh=MTdsZmd1NmZsejBuMw=="
                  className="bg-gray-800 hover:bg-pink-600 p-3 rounded-full transition-all duration-300 hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/company/learnlogicify-technologies-llp/"
                  className="bg-gray-800 hover:bg-blue-600 p-3 rounded-full transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://youtube.com/@sachinscodinguniverse?si=LJDpDDDaKqogPs10"
                  className="bg-gray-800 hover:bg-red-600 p-3 rounded-full transition-all duration-300 hover:scale-110"
                  aria-label="YouTube"
                >
                  <Youtube size={24} />
                </a>
              </div>

              {/* Follow Us - event/organizers social links */}
              <div className="mt-4">
                <h4 className="text-lg font-semibold text-gray-300">Follow Us</h4>
                <div className="flex gap-4 mt-2">
                  <a
                    href="https://www.instagram.com/kit_csbs?igsh=MWlvMzNieXl0N3BxdA=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-pink-600 p-3 rounded-full transition-all duration-300 hover:scale-110"
                    aria-label="Follow us on Instagram"
                  >
                    <Instagram size={24} />
                  </a>

                  <a
                    href="https://youtube.com/@techwitzkit?si=1CHBLDyJgSC7ZLlt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-red-600 p-3 rounded-full transition-all duration-300 hover:scale-110"
                    aria-label="Follow us on YouTube"
                  >
                    <Youtube size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
