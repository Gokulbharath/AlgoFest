import { Code, Brain, Trophy, Globe, Zap, CheckCircle, Clock, Users, Award, Coffee } from 'lucide-react';

export default function About() {
  const highlights = [
    { icon: Code, title: 'Real-time Coding Challenges', color: 'text-blue-400' },
    { icon: Brain, title: 'Brainstorming & Problem Solving', color: 'text-cyan-400' },
    { icon: Trophy, title: 'Cash Prizes for Winners', color: 'text-yellow-400' },
    { icon: Globe, title: 'Open for All Colleges', color: 'text-blue-500' },
    { icon: Zap, title: '5 Hours of Non-stop Innovation', color: 'text-sky-400' },
  ];

  const schedule = [
    {
      time: '9:00 AM – 9:45 AM',
      title: 'Registration & Welcome',
      icon: Users,
      color: 'text-blue-400',
      borderColor: 'border-blue-500',
    },
    {
      time: '10:00 AM',
      title: 'Hackathon Begins',
      icon: Code,
      color: 'text-cyan-400',
      borderColor: 'border-cyan-500',
    },
    {
      time: '1:00 PM',
      title: 'Mid Break + Evaluation Round 1',
      icon: Coffee,
      color: 'text-yellow-400',
      borderColor: 'border-yellow-500',
    },
    {
      time: '2:45 PM',
      title: 'Final Submission',
      icon: Clock,
      color: 'text-orange-400',
      borderColor: 'border-orange-500',
    },
    {
      time: '3:00 PM',
      title: 'Prize Distribution & Closing',
      icon: Award,
      color: 'text-blue-400',
      borderColor: 'border-blue-500',
    },
  ];

  const rules = [
    'Teams can have a maximum of 2–3 members.',
    'The contest will be held on a competitive coding platform.',
    'Internet and required tools will be provided.',
    'Participants must bring their college ID card.',
    'Plagiarism is strictly prohibited.',
    "Judges' decision will be final.",
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 glow-text-blue">
          About ALGOFEST
        </h2>

        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6 text-center">
            ALGOFEST is a national-level hackathon designed to challenge and inspire the next generation of tech innovators.
            Hosted by the Department of Computer Science and Business Systems in association with LearnLogicify Technologies,
            this 5-hour coding competition welcomes participants from colleges across the country.
          </p>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center">
            Our goal is to encourage problem-solving, algorithmic thinking, and real-world innovation through competitive programming.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-gray-900/50 border border-gray-700 rounded-lg p-6 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm group"
              >
                <Icon className={`${item.color} mb-4 group-hover:scale-110 transition-transform duration-300`} size={48} />
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              </div>
            );
          })}
        </div>

        <div className="max-w-6xl mx-auto mt-20">
          <h3 className="text-3xl md:text-5xl font-bold text-center mb-12 text-blue-400">
            Event Schedule
          </h3>

          <div className="relative max-w-4xl mx-auto mb-20">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-500 to-blue-500 hidden md:block"></div>

            {schedule.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="relative mb-12 md:ml-16 animate-fadeInUp"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute -left-12 top-1/2 transform -translate-y-1/2 hidden md:block">
                    <div className={`w-8 h-8 rounded-full ${item.color.replace('text', 'bg')} flex items-center justify-center border-4 border-black`}>
                      <Icon size={16} className="text-black" />
                    </div>
                  </div>

                  <div className={`bg-gray-900/50 border ${item.borderColor} rounded-lg p-6 hover:scale-105 transition-all duration-300 backdrop-blur-sm`}>
                    <div className="flex items-start gap-4">
                      <div className="md:hidden">
                        <Icon className={item.color} size={32} />
                      </div>
                      <div className="flex-1">
                        <div className={`text-sm font-mono ${item.color} mb-2`}>{item.time}</div>
                        <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <h3 className="text-3xl md:text-5xl font-bold text-center mb-12 text-blue-400">
            Rules & Guidelines
          </h3>

          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-blue-500/30 rounded-xl p-8 md:p-12 backdrop-blur-sm">
              <div className="space-y-6">
                {rules.map((rule, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 group animate-fadeInUp"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CheckCircle className="text-blue-400 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" size={24} />
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
      </div>
    </section>
  );
}
