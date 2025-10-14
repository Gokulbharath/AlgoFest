export default function Department() {
  return (
    <section id="department" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 glow-text-blue">
          About KIT-CSBS
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-blue-500/30 rounded-xl p-8 md:p-12 backdrop-blur-sm">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
              The Department of Computer Science and Business Systems (CSBS) at KIT is dedicated to shaping students
              into technologically skilled and business-aware professionals. We focus on emerging technologies like
              Artificial Intelligence, Cloud Computing, IoT, and Business Analytics to prepare students for the future
              of tech and industry.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              ALGOFEST is one of our flagship events that bridges classroom learning with practical problem-solving.
            </p>

            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              {['AI', 'Cloud Computing', 'IoT', 'Business Analytics'].map((tech, index) => (
                <div
                  key={index}
                  className="bg-blue-500/10 border border-blue-500/30 rounded-lg px-4 py-3 text-center text-blue-400 font-semibold hover:bg-blue-500/20 transition-all duration-300"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
