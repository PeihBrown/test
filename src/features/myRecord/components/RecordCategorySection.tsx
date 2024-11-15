import { FC } from 'react';
import { RecordCategoryCard } from './RecordCategoryCard';
import { useRecordCategories } from '../hooks/useRecordCategories';

const RecordCategorySection: FC = () => {
  const { categories } = useRecordCategories();

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-[48px]">
      {categories.map((category) => (
        <RecordCategoryCard
          key={category.id}
          {...category}
        />
      ))}
    </section>
  );
};

export default RecordCategorySection;
