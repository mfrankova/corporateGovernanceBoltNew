import React from 'react';
import { Building2, Users, Target, HelpCircle, Settings } from 'lucide-react';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange }) => {
  const navItems = [
    {
      id: 'goals',
      title: 'Cíle projektu',
      icon: Target,
      description: 'Hlavní cíle a přínosy řešení'
    },
    {
      id: 'processes',
      title: 'Procesní diagramy',
      icon: Building2,
      description: 'Workflow SR a VH'
    },
    {
      id: 'stories',
      title: 'Kroky implementace',
      icon: Users,
      description: 'Detailní kroky a wireframy'
    },
   
    {
      id: 'technical',
      title: 'Technické specifikace',
      icon: Settings,
      description: 'Integrace, pravidla, datové entity'
    },
     {
      id: 'questions',
      title: 'Otevřené otázky',
      icon: HelpCircle,
      description: 'K doplnění před implementací'
    }
  ];

  return (
    <nav className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`flex flex-col items-center space-y-2 p-4 rounded-lg transition-all duration-200 hover:shadow-md ${
                activeTab === item.id
                  ? 'bg-blue-50 border-2 border-blue-200 text-blue-800'
                  : 'bg-gray-50 border-2 border-transparent text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Icon className="w-8 h-8" />
              <div className="text-center">
                <div className="font-semibold text-sm">{item.title}</div>
                <div className="text-xs opacity-75 mt-1">{item.description}</div>
              </div>
            </button>
          );
        })}
      </div>
    </nav>
  );
};