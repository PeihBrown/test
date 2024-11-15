import { Text } from '@/components/text';
import { FC } from 'react';
import { ColumnCategory } from '../types';

type ColumnCategoryCardProps = ColumnCategory;

export const ColumnCategoryCard: FC<ColumnCategoryCardProps> = ({
  title,
  subtitle,
  backgroundColor,
}) => {
  return (
    <a 
      href="/coming-soon"
      className="block transition-opacity hover:opacity-80"
    >
      <div 
        className="aspect-video w-full flex flex-col items-center justify-center p-2 sm:p-4 py-3 sm:py-5 text-center"
        style={{ backgroundColor }}
      >
        <Text 
          as="h4"
          className="font-normal text-primary-300 uppercase"
        >
          {title.split(' ').map((word, index) => (
            <Text 
              as="span" 
              size='h4' 
              key={index} 
              className="block"
            >
              {word}
            </Text>
          ))}
        </Text>
        <div className="w-10 sm:w-14 h-px bg-white my-1 sm:my-2" />
        <Text
          as="p"
          size="body2"
          variant="neutral-white"
        >
          {subtitle}
        </Text>
      </div>
    </a>
  );
}; 