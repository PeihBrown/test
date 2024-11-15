import { FC } from 'react';
import RecordCategorySection from './components/RecordCategorySection';
import BodyRecordSection from './components/BodyRecordSection';
import ExerciseSection from './components/ExerciseSection';
import DiarySection from './components/DiarySection';

const RecordPage: FC = () => {
  return (
    <div className="container mx-auto main-container px-4 py-8 space-y-12">
      <RecordCategorySection />

      <section 
        id="body-record-section"
        className="scroll-mt-16"
      >
        <BodyRecordSection />
      </section>

      <section 
        id="exercise-section"
        className="scroll-mt-16"
      >
        <ExerciseSection />
      </section>

      <section 
        id="diary-section"
        className="scroll-mt-16"
      >
        <DiarySection />
      </section>
    </div>
  );
};

export default RecordPage;