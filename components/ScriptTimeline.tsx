import ReactMarkdown from 'react-markdown';
import { VideoScript } from '@/types';

interface ScriptTimelineProps {
  script: VideoScript;
}

interface TimelineSection {
  id: string;
  title: string;
  timing: string;
  content?: string;
  icon: string;
  color: string;
}

export default function ScriptTimeline({ script }: ScriptTimelineProps) {
  const sections: TimelineSection[] = [
    {
      id: 'hook',
      title: 'Hook',
      timing: '0-3 sec',
      content: script.metadata?.hook,
      icon: '🎯',
      color: 'from-red-500 to-orange-500',
    },
    {
      id: 'setup',
      title: 'Setup',
      timing: '3-8 sec',
      content: script.metadata?.setup,
      icon: '🎬',
      color: 'from-orange-500 to-yellow-500',
    },
    {
      id: 'main',
      title: 'Main Content',
      timing: '8-22 sec',
      content: script.metadata?.main_content,
      icon: '📝',
      color: 'from-yellow-500 to-green-500',
    },
    {
      id: 'resolution',
      title: 'Resolution',
      timing: '22-27 sec',
      content: script.metadata?.resolution,
      icon: '✨',
      color: 'from-green-500 to-blue-500',
    },
    {
      id: 'cta',
      title: 'Call to Action',
      timing: '27-30 sec',
      content: script.metadata?.cta,
      icon: '🚀',
      color: 'from-blue-500 to-purple-500',
    },
  ];

  const filteredSections = sections.filter((section) => section.content);

  if (filteredSections.length === 0) {
    return (
      <div className="gradient-border p-8 text-center">
        <p className="text-muted">No script content available.</p>
      </div>
    );
  }

  return (
    <div className="gradient-border p-8">
      <h2 className="text-xl font-bold text-white mb-8 flex items-center gap-2">
        <span>📜</span>
        Script Timeline
      </h2>

      <div className="relative space-y-8">
        {filteredSections.map((section, index) => (
          <div key={section.id} className="relative pl-8">
            {/* Timeline Connector */}
            {index < filteredSections.length - 1 && (
              <div className="timeline-line" />
            )}

            {/* Timeline Dot */}
            <div
              className={`absolute left-0 top-1 w-4 h-4 rounded-full bg-gradient-to-r ${section.color} shadow-lg`}
            />

            {/* Section Content */}
            <div className="bg-surface-light rounded-xl p-6 hover:bg-surface transition-colors">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{section.icon}</span>
                  <h3 className="text-lg font-semibold text-white">
                    {section.title}
                  </h3>
                </div>
                <span
                  className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${section.color} text-white`}
                >
                  {section.timing}
                </span>
              </div>

              <div className="prose-dark text-sm leading-relaxed">
                {section.id === 'main' ? (
                  <ReactMarkdown>{section.content || ''}</ReactMarkdown>
                ) : (
                  <p className="whitespace-pre-wrap">{section.content}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}