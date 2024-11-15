import { FC } from 'react';
import { DiaryEntry } from '../types';

interface DiaryCardProps {
  entry: DiaryEntry;
}

const DiaryCard: FC<DiaryCardProps> = ({ entry }) => {
  return (
    <div className="p-4 border border-[#707070] bg-white">
      <div className="mb-2">
        <time className="block text-lg">{entry.date}</time>
      </div>
      <p className="text-sm leading-relaxed">
        {entry.content}
      </p>
    </div>
  );
};

export default DiaryCard;