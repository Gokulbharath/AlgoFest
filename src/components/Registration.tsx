import { QrCode } from 'lucide-react';

export default function Registration() {
  return (
    <section id="registration" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-8 glow-text-blue">
          Registration
        </h2>

        <p className="text-center text-xl text-gray-300 mb-12">
          Scan the QR code below to register for ALGOFEST Season 3
        </p>

        <div className="max-w-md mx-auto">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-blue-500/30 rounded-xl p-8 backdrop-blur-sm text-center">
            <div className="bg-white p-6 rounded-lg mb-6 inline-block">
              <div className="w-64 h-64 flex items-center justify-center">
                <div className="text-center">
                  <QrCode size={200} className="text-black mx-auto mb-4" />
                  <p className="text-black text-sm font-semibold">Scan to Register</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                <p className="text-blue-400 font-semibold mb-2">Registration Details:</p>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>Teams: 2-3 members</li>
                  <li>Early bird registration recommended</li>
                  <li>Limited slots available</li>
                </ul>
              </div>

              <p className="text-gray-400 text-sm italic">
                Alternatively, contact the coordinators for manual registration
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
