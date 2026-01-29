import { DurationOption, DurationKey, DURATION_COLORS } from '@/types';

interface DurationBadgeProps {
  duration: DurationOption;
}

export default function DurationBadge({ duration }: DurationBadgeProps) {
  const durationKey = duration.key as DurationKey;
  const bgColor = DURATION_COLORS[durationKey] || 'bg-gray-500';

  return (
    <span
      className={`inline-flex items-center gap-1 px-3 py-1 text-xs font-medium rounded-full text-white ${bgColor}`}
    >
      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
      </svg>
      {duration.value}
    </span>
  );
}