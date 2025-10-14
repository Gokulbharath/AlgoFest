import { Clock, Users, Code, Award, Coffee } from 'lucide-react';

export default function Timeline() {
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
      color: 'text-green-400',
      borderColor: 'border-green-500',
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
      color: 'text-red-400',
      borderColor: 'border-red-500',
    },
    {
      time: '3:00 PM',
      title: 'Prize Distribution & Closing',
      icon: Award,
      color: 'text-purple-400',
      borderColor: 'border-purple-500',
    },
  ];

  return (
    <section id="schedule" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 glow-text-green">
          Schedule
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 via-blue-500 to-purple-500 hidden md:block"></div>

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
        </div>
      </div>
    </section>
  );
}
