export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-secondary flex items-center justify-center">
                <span className="text-xl">🎬</span>
              </div>
              <span className="text-xl font-bold text-white">Script Studio</span>
            </div>
            <p className="text-muted text-sm">
              Professional video script management for content creators.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.cosmicjs.com/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-white text-sm transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://www.cosmicjs.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-white text-sm transition-colors"
                >
                  Cosmic Website
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.cosmicjs.com/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-white text-sm transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/cosmicjs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-white text-sm transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-8 pt-8 text-center text-muted text-sm">
          © {currentYear} Video Script Studio. Powered by Cosmic.
        </div>
      </div>
    </footer>
  );
}