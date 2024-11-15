import bodyRecordImage from '@/features/myRecord/assets/imgs/MyRecommend-1.webp';
import exerciseImage from '@/features/myRecord/assets/imgs/MyRecommend-2.webp';
import diaryImage from '@/features/myRecord/assets/imgs/MyRecommend-3.webp';
import { RecordCategory } from '../types';

export const RECORD_CATEGORIES: RecordCategory[] = [
  {
    id: 'body-record',
    title: 'BODY RECORD',
    subtitle: '自分のカラダの記録',
    image: bodyRecordImage,
    targetId: 'body-record-section'
  },
  {
    id: 'exercise',
    title: 'MY EXERCISE',
    subtitle: '自分の運動の記録',
    image: exerciseImage,
    targetId: 'exercise-section'
  },
  {
    id: 'diary',
    title: 'MY DIARY',
    subtitle: '自分の日記',
    image: diaryImage,
    targetId: 'diary-section'
  }
];

export const useRecordCategories = () => {
  return {
    categories: RECORD_CATEGORIES,
  };
}; 