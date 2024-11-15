import { FC } from 'react';
import { RecordCategory } from '../types';
import { useScrollToSection } from '../../../hooks/useScrollToSection';
import { Text } from '@/components/text';

type RecordCategoryCardProps = RecordCategory;

export const RecordCategoryCard: FC<RecordCategoryCardProps> = ({
  title,
  subtitle,
  image,
  targetId
}) => {
  const scrollToSection = useScrollToSection();

  return (
    <button
      onClick={() => scrollToSection(targetId)}
      className="group relative aspect-square w-full overflow-hidden bg-primary-300 transition-transform hover:scale-[1.02] p-5"
    >
      <img
        src={image}
        alt={title}
        className="inset-0 h-full w-full object-cover brightness-[0.3]"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center p-[48px]">
        <Text 
          as="h3"
          size="title"
          className="font-normal text-primary-300"
        >
          {title}
        </Text>
        <Text
          as="span"
          size="caption"
          variant="neutral-white"
          className="mt-[11px] bg-primary-400 px-[22px] py-[3px]"
        >
          {subtitle}
        </Text>
      </div>
    </button>
  );
}; 