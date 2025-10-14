import { CheckCircle } from 'lucide-react';

export default function Rules() {
  const rules = [
    'Teams can have a maximum of 2–3 members.',
    'The contest will be held on a competitive coding platform.',
    'Internet and required tools will be provided.',
    'Participants must bring their college ID card.',
    'Plagiarism is strictly prohibited.',
    "Judges' decision will be final.",
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
                  <CheckCircle className="text-green-400 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" size={24} />
                  <p className="text-lg text-gray-300">{rule}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-gray-700">
              <p className="text-center text-gray-400 italic">
                For detailed rules and regulations, please contact the coordinators.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
