import { CheckCircle } from 'lucide-react';

export default function Rules() {
  const rules = [
    'The event is conducted individually — team participation is not allowed.',
    'Participants must bring their valid college ID card for verification.',
    'The contest will be hosted on an online coding platform; system and internet access will be provided.',
    'Each participant must use only the assigned system during the event.',
    'Any form of plagiarism, code sharing, or unfair means will result in disqualification.',
    'Participants are expected to maintain discipline throughout the event.',
    "The judges' and organizers' decisions will be final and binding."
  ];

  return (
    <section id="rules" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 glow-text-blue">
          Rules & Guidelines
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-blue-500/30 rounded-xl p-8 md:p-12 backdrop-blur-sm">
            <div className="space-y-6">
              {rules.map((rule, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 group animate-fadeInUp"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle
                    className="text-green-400 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300"
                    size={24}
                  />
                  <p className="text-lg text-gray-300">{rule}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-gray-700">
              <p className="text-center text-gray-400 italic">
                For complete details or clarifications, please contact the event coordinators.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
