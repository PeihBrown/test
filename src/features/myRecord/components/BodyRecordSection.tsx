import { FC } from 'react';
import { Text } from '@/components/text';
import { LineChart } from '@/components/charts/line-chart';
import { useBodyRecord } from '../hooks/useBodyRecord';

const BodyRecordSection: FC = () => {
  const { activePeriod, setActivePeriod, chartData, periods, date } = useBodyRecord();

  return (
    <div className="bg-background-dark p-4 md:p-6 rounded">
      <div className="flex items-center gap-6 mb-4">
        <Text 
          as="h4"
          size="body2"
          variant="neutral-white"
          className="tracking-wider"
        >
          <span>BODY</span> <br />
          <span>RECORD</span>
        </Text>
        <Text as="h4" size="h4" variant="neutral-white">
          {date}
        </Text>
      </div>
      
      <div className="h-[200px] mb-4">
        <LineChart
          data={chartData}
          lines={['value', 'value2']}
          showLegend={false}
          className="bg-background-dark"
        />
      </div>

      <div className="flex flex-wrap sm:flex-nowrap justify-center sm:justify-start gap-2">
        {periods.map((period) => (
          <button
            key={period}
            onClick={() => setActivePeriod(period)}
            className={`
              min-w-[56px]
              px-2 sm:px-5 
              py-1 sm:py-1.5
              text-xs sm:text-sm
              rounded-full 
              transition-colors
              ${activePeriod === period 
                ? 'bg-primary-300 text-neutral-white' 
                : 'bg-white/25 text-neutral-white hover:bg-primary-300/80'
              }
            `}
          >
            {period}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BodyRecordSection;