import { useState } from 'react';

type Period = '日' | '週' | '月' | '年';

const mockData = {
  day: [
    { name: '6月', value: 80, value2: 75 },
    { name: '7月', value: 75, value2: 70 },
    { name: '8月', value: 85, value2: 80 },
    { name: '9月', value: 82, value2: 77 },
    { name: '10月', value: 78, value2: 73 },
    { name: '11月', value: 88, value2: 83 },
    { name: '12月', value: 85, value2: 80 },
    { name: '1月', value: 80, value2: 75 },
    { name: '2月', value: 87, value2: 82 },
    { name: '3月', value: 83, value2: 78 },
    { name: '4月', value: 85, value2: 80 },
    { name: '5月', value: 82, value2: 77 },
  ],
  week: [
    { name: '月', value: 78, value2: 73 },
    { name: '火', value: 82, value2: 77 },
    { name: '水', value: 85, value2: 80 },
    { name: '木', value: 83, value2: 78 },
    { name: '金', value: 80, value2: 75 },
    { name: '土', value: 87, value2: 82 },
    { name: '日', value: 84, value2: 79 },
  ],
  month: [
    { name: '1日', value: 82, value2: 77 },
    { name: '5日', value: 85, value2: 80 },
    { name: '10日', value: 78, value2: 73 },
    { name: '15日', value: 83, value2: 78 },
    { name: '20日', value: 80, value2: 75 },
    { name: '25日', value: 87, value2: 82 },
    { name: '30日', value: 84, value2: 79 },
  ],
  year: [
    { name: '1月', value: 82, value2: 77 },
    { name: '2月', value: 85, value2: 80 },
    { name: '3月', value: 78, value2: 73 },
    { name: '4月', value: 83, value2: 78 },
    { name: '5月', value: 80, value2: 75 },
    { name: '6月', value: 87, value2: 82 },
    { name: '7月', value: 84, value2: 79 },
    { name: '8月', value: 86, value2: 81 },
    { name: '9月', value: 82, value2: 77 },
    { name: '10月', value: 85, value2: 80 },
    { name: '11月', value: 88, value2: 83 },
    { name: '12月', value: 83, value2: 78 },
  ],
};

const periodMap = {
  '日': 'day',
  '週': 'week',
  '月': 'month',
  '年': 'year',
} as const;

const DATE = '2021.05.21';

export const useBodyRecord = () => {
  const [activePeriod, setActivePeriod] = useState<Period>('日');

  const chartData = mockData[periodMap[activePeriod]];
  const periods = ['日', '週', '月', '年'] as const;

  return {
    activePeriod,
    setActivePeriod,
    chartData,
    periods,
    date: DATE,
  };
}; 