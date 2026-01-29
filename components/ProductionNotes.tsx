import ReactMarkdown from 'react-markdown';

interface ProductionNotesProps {
  visualNotes?: string;
}

export default function ProductionNotes({ visualNotes }: ProductionNotesProps) {
  if (!visualNotes) {
    return null;
  }

  return (
    <div className="gradient-border p-6 sticky top-24">
      <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
        <span>🎥</span>
        Visual Notes
      </h2>

      <div className="prose-dark text-sm">
        <ReactMarkdown>{visualNotes}</ReactMarkdown>
      </div>
    </div>
  );
}