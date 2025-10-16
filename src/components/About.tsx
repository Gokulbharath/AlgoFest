import { Code, Brain, Trophy, Globe, Zap, CheckCircle } from 'lucide-react';

import KitLogo from '../assets/kit.jpg';
import LLLogo from '../assets/ll.jpg';

export default function About() {
  const highlights = [
    { icon: Code, title: 'Real-time Coding Challenges', color: 'text-blue-400' },
    { icon: Brain, title: 'Brainstorming & Problem Solving', color: 'text-cyan-400' },
    { icon: Trophy, title: 'E-Certificate of Participation', color: 'text-yellow-400' },
    { icon: Globe, title: 'Open for All Colleges', color: 'text-blue-500' },
    { icon: Zap, title: '5 Hours of Non-stop Innovation', color: 'text-sky-400' },
    { icon: Code, title: 'Competitive Programming Excellence', color: 'text-indigo-400' },
  ];

const rules = [
  'The hackathon is individual — no teams allowed.',
  'Register with a valid email and provide correct details.',
  'Participate online and submit your project via the official portal.',
  'Plagiarism or copying code will lead to disqualification.',
  'Be professional and follow the code of conduct.',
  'Judges’ and organizers’ decisions are final.'
];


  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 glow-text-blue">
          About
        </h2>

        <div className="max-w-4xl mx-auto mb-16">
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6 text-center max-w-4xl mx-auto">
  ALGOFEST Season 3 is a national-level hackathon designed to challenge and inspire the next generation of tech innovators.
  <br /><br />
  <strong>Center for Training and Placements</strong> and <strong>Computer Science and Business Systems</strong>,
  in association with <strong>LearnLogicify Technologies</strong>, organize this event to foster innovation and
  problem-solving skills.
  <br /><br />
  This 6-hour coding competition welcomes participants from colleges across the country.
</p>


          <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center mb-12">
            Our goal is to encourage problem-solving, algorithmic thinking, and real-world innovation through competitive programming.
          </p>

          {/* Event Details block */}
          
          <div className="flex items-center justify-center gap-8 mb-12">
            <div className="bg-white rounded-full p-2 hover:scale-105 transition-transform duration-300 flex items-center justify-center">
              <img
                src={KitLogo}
                alt="KIT Logo"
                className="h-40 w-40 object-cover rounded-full"
              />
              <p className="sr-only">KIT</p>
            </div>
            <div className="text-4xl text-blue-400 font-bold">X</div>
            <div className="bg-white rounded-full p-2 hover:scale-105 transition-transform duration-300 flex items-center justify-center">
              <img
                src={LLLogo}
                alt="LearnLogicify Logo"
                className="h-40 w-40 object-cover rounded-full"
              />
              <p className="sr-only">LearnLogicify</p>
            </div>
          </div>
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
  
        <div className="max-w-sm mx-auto mb-20 bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl border border-gray-700 shadow-lg p-8 text-center hover:scale-105 transition-transform duration-300">
  <div className="text-4xl font-bold text-orange-400 mb-2">
    ₹99 <span className="line-through text-gray-500 text-xl ml-2">₹198</span>
  </div>
  <div className="inline-block bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
    50% OFF
  </div>
  <p className="text-gray-300 mb-6 font-medium">
    Early Bird Special – Save ₹100!
  </p>

  <ul className="space-y-3 text-gray-200 text-left inline-block">
    <li className="flex items-center gap-2">
      <CheckCircle className="text-orange-400" size={20} />
      Access to Registered Contest
    </li>
    <li className="flex items-center gap-2">
      <CheckCircle className="text-orange-400" size={20} />
      Logic & Puzzle Challenges
    </li>
    <li className="flex items-center gap-2">
      <CheckCircle className="text-orange-400" size={20} />
      Real-World Problem Statements
    </li>
    <li className="flex items-center gap-2">
      <CheckCircle className="text-orange-400" size={20} />
      Onsite Grand Finale Qualification
    </li>
    <li className="flex items-center gap-2">
      <CheckCircle className="text-orange-400" size={20} />
      Certificate of Participation
    </li>
  </ul>

  <button className="mt-8 w-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-semibold py-3 rounded-lg hover:from-orange-600 hover:to-yellow-500 transition-all">
    Register Now
  </button>
</div>

        <div className="max-w-6xl mx-auto mt-20">
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
