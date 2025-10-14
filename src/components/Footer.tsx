export default function Footer() {
  const quickLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Registration', id: 'registration' },
    { label: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black border-t border-blue-500/30 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold font-mono mb-4 glow-text-blue">
              ALGOFEST<span className="text-blue-400">_3</span>
            </h3>
            <p className="text-gray-400 text-sm">
              A national-level coding hackathon organized by KIT-CSBS in association with LearnLogicify Technologies.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Organized By</h4>
            <p className="text-gray-400 text-sm mb-2">
              Department of Computer Science and Business Systems
            </p>
            <p className="text-gray-400 text-sm">
              Kalaignarkarunanidhi Institute of Technology, Coimbatore
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm mb-2">
            © 2025 KIT-CSBS | ALGOFEST Season 3 | All Rights Reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Designed by Tech Team - KIT CSBS
          </p>
        </div>
      </div>
    </footer>
  );
}
