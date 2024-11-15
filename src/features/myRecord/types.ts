export interface RecordCategory {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  targetId: string;
}

export interface Exercise {
  id: string;
  name: string;
  kcal: number;
  duration: number;
}

export interface DiaryEntry {
  id: string;
  date: string;
  content: string;
} 