export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-900/20 via-transparent to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary-500/10 blur-[100px] rounded-full" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface rounded-full text-sm text-muted mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Professional Script Management
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 animate-slide-up">
          Video Script
          <span className="gradient-text"> Studio</span>
        </h1>

        <p className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-10 animate-slide-up">
          Create, manage, and visualize your video scripts with a timeline-based editor. 
          Perfect for short-form content creators and video producers.
        </p>

        <div className="flex flex-wrap justify-center gap-4 animate-slide-up">
          <a
            href="#scripts"
            className="px-6 py-3 text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25"
          >
            Browse Scripts
          </a>
          <a
            href="https://app.cosmicjs.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-sm font-medium text-white bg-surface-light hover:bg-surface border border-white/10 rounded-lg transition-colors"
          >
            Create New Script
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-md mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold gradient-text">4</div>
            <div className="text-sm text-muted">Durations</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold gradient-text">6</div>
            <div className="text-sm text-muted">Sections</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold gradient-text">∞</div>
            <div className="text-sm text-muted">Scripts</div>
          </div>
        </div>
      </div>
    </section>
  );
}