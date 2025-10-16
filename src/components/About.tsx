import React from 'react';
import { Code, Brain, Trophy, Globe, Zap, CheckCircle } from 'lucide-react';

import KitLogo from '../assets/kit.jpg';
import LLKLogo from '../assets/llt.png'; // ensure this file exists (case-sensitive)

type Highlight = {
  icon: React.ComponentType<any>;
  title: string;
  color: string;
};

export default function About() {
  const highlights: Highlight[] = [
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

  const features = [
    'Access to Registered Contest',
    'Logic & Puzzle Challenges',
    'Real-World Problem Statements',
    'Onsite Grand Finale Qualification',
    'Certificate of Participation'
  ];

  const formUrl = 'https://forms.gle/aYaB37divYhcLCXLA';

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">

        {/* KIT logo centered */}
        <div className="flex justify-center mb-6">
          <img
            src={KitLogo}
            alt="KIT Logo"
            className="h-35 w-35 object-cover rounded-full shadow-lg"
          />
        </div>

        <h2 className="text-4xl md:text-6xl font-bold text-center mb-8 glow-text-blue">
          About
        </h2>

        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6 text-center max-w-4xl mx-auto">
            ALGOFEST Season 3 is a national-level hackathon designed to challenge and inspire the next generation of tech innovators.
            <br /><br />
            <strong>Center for Training and Placements</strong> in association with <strong> Computer Science and Business Systems</strong>, organize this event to foster innovation and
            problem-solving skills.
            <br /><br />
            This 6-hour coding competition welcomes participants from colleges across the country.
          </p>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center mb-12">
            Our goal is to encourage problem-solving, algorithmic thinking, and real-world innovation through competitive programming.
          </p>

          {/* Single centered partner logo */}
          <div className="flex flex-col items-center justify-center gap-4 mb-12">
            <img
              src={LLKLogo}
              alt="Platform Partner Logo"
              className="h-120 w-50 object-contain"
            />
            <div className="text-center">
              <p className="text-sm text-gray-400">Presented by</p>
              <p className="text-xl font-semibold text-white mt-1">LearnLogicify Technologies</p>
              <p className="text-sm text-blue-400 font-medium mt-1">Platform Partner</p>
            </div>
          </div>
        </div>

        {/* Highlights */}
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

        {/* Event Details card */}
        <div className="max-w-3xl mx-auto mb-10">
          <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 border border-blue-500/20 rounded-xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex-shrink-0 bg-gradient-to-br from-black/40 to-gray-900/40 border border-gray-700 rounded-xl p-6 w-full md:w-1/2">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-baseline gap-4">
                      <span className="text-4xl md:text-6xl font-extrabold text-blue-400">₹99</span>
                      <span className="text-2xl md:text-3xl font-semibold text-gray-400 line-through">₹200</span>
                    </div>
                    <div className="mt-2">
                      <span className="inline-block bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        50% OFF
                      </span>
                    </div>
                    <p className="mt-4 text-gray-300">Early Bird Special - <span className="font-semibold text-white">Save ₹101!</span></p>
                  </div>
                </div>

                <div className="mt-6">
                  <a href={formUrl} target="_blank" rel="noopener noreferrer" className="inline-block w-full md:w-auto">
                    <button type="button" className="w-full md:w-auto px-6 py-4 bg-gradient-to-r from-blue-500 to-blue-400 text-white rounded-2xl text-lg font-semibold shadow-lg hover:scale-105 transition-transform">
                      Register Now
                    </button>
                  </a>
                </div>
              </div>

              <div className="flex-1 w-full">
                <h4 className="text-2xl font-semibold text-white mb-4">Event Detail</h4>
                <ul className="space-y-4">
                  {features.map((f, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="flex-shrink-0 mt-1">
                        <div className="bg-blue-500 rounded-full p-2">
                          <CheckCircle className="text-white" size={18} />
                        </div>
                      </span>
                      <span className="text-lg text-gray-200">{f}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-6 text-sm text-gray-400">
                  Small note: Registrations are limited. Secure your spot to get the early bird benefits.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Rules */}
        <div className="max-w-6xl mx-auto mt-20">
          <h3 className="text-3xl md:text-5xl font-bold text-center mb-12 text-blue-400">
            Rules & Guidelines
          </h3>

          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-blue-500/30 rounded-xl p-8 md:p-12 backdrop-blur-sm">
              <div className="space-y-6">
                {rules.map((rule, index) => (
                  <div key={index} className="flex items-start gap-4 group animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
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
