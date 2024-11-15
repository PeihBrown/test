import { FC } from 'react';
import { Text } from '@/components/text';
import { ExerciseTable } from '@/components/exercise-table';
import { useExercises } from '../hooks/useExercises';
const ExerciseSection: FC = () => {
  const { exercises, date } = useExercises();

  return (
    <div className="bg-background-dark p-4 md:p-6 rounded">
      <div className="flex items-center gap-6 mb-4">
        <Text 
          as="h4"
          size="body2"
          variant="neutral-white"
          className="tracking-wider"
        >
          <span>MY</span> <br />
          <span>EXERCISE</span>
        </Text>
        <Text as="h4" size="h4" variant="neutral-white">
          {date}
        </Text>
      </div>

      <ExerciseTable 
        entries={exercises}
        maxHeight="192px"
      />
    </div>
  );
};

export default ExerciseSection;