import React from 'react';
import { Vote, FileText, Settings } from 'lucide-react';

interface ProcessNavigationProps {
  activeProcess: string;
  onProcessChange: (processId: string) => void;
}

export const ProcessNavigation: React.FC<ProcessNavigationProps> = ({ activeProcess, onProcessChange }) => {
  const processes = [
    {
      id: 'electronic-voting',
      title: 'Elektronické hlasování správní rady a hlasování valné hromady',
      description: 'Kompletní workflow elektronického hlasování',
      icon: Vote,
      color: 'blue'
    },
    {
      id: 'contract-approval',
      title: 'Rozšíření schvalování smluv o nové funkce',
      description: 'Proces schvalování smluv s TreeInfo integrací',
      icon: FileText,
      color: 'green'
    }
   
  ];

  const getColorClasses = (color: string, isActive: boolean) => {
    const colors = {
      blue: isActive 
        ? 'bg-blue-50 border-blue-200 text-blue-800' 
        : 'bg-white border-gray-200 text-gray-700 hover:bg-blue-50 hover:border-blue-200',
      green: isActive 
        ? 'bg-green-50 border-green-200 text-green-800' 
        : 'bg-white border-gray-200 text-gray-700 hover:bg-green-50 hover:border-green-200',
      purple: isActive 
        ? 'bg-purple-50 border-purple-200 text-purple-800' 
        : 'bg-white border-gray-200 text-gray-700 hover:bg-purple-50 hover:border-purple-200'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {processes.map((process) => {
          const Icon = process.icon;
          const isActive = activeProcess === process.id;
          
          return (
            <button
              key={process.id}
              onClick={() => onProcessChange(process.id)}
              className={`p-8 rounded-xl border-2 transition-all duration-200 text-left w-full min-h-[200px] ${getColorClasses(process.color, isActive)}`}
            >
            <div className="flex items-center space-x-3">
                <Icon className="w-8 h-8 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-base leading-tight mb-3">
                  {process.title}
                </h3>
                <p className="text-sm opacity-75">
                  {process.description}
                </p>
              </div>
            </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};