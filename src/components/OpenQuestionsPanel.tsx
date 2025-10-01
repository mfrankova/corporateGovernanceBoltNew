import React from 'react';
import { openQuestions } from '../data/userStories';
import { HelpCircle, AlertTriangle, Info } from 'lucide-react';

export const OpenQuestionsPanel: React.FC = () => {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'text-red-700 bg-red-50 border-red-300';
      case 'important': return 'text-orange-700 bg-orange-50 border-orange-300';
      case 'upřesnění': return 'text-blue-700 bg-blue-50 border-blue-300';
      default: return 'text-gray-700 bg-gray-50 border-gray-300';
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'critical': return <AlertTriangle className="w-5 h-5" />;
      case 'important': return <HelpCircle className="w-5 h-5" />;
      case 'upřesnění': return <Info className="w-5 h-5" />;
      default: return <HelpCircle className="w-5 h-5" />;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center space-x-2 mb-6">
        <HelpCircle className="w-6 h-6 text-orange-600" />
        <h3 className="text-xl font-semibold text-gray-800">Otázky k doplnění implementace</h3>
      </div>

      <div className="space-y-4">
        {openQuestions.map((question, index) => (
          <div 
            key={question.id} 
            className={`border rounded-lg p-4 ${getPriorityColor(question.priority)}`}
          >
            <div className="flex items-start space-x-3">
              <div className="flex items-center space-x-2 flex-shrink-0">
                <span className="bg-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">
                  {index + 1}
                </span>
                {getPriorityIcon(question.priority)}
              </div>
              
              <div className="flex-1">
                <h4 className="font-semibold mb-2">{question.question}</h4>
                <p className="text-sm opacity-90 leading-relaxed">{question.context}</p>
                
                <div className="mt-2">
                  <span className="inline-block px-2 py-1 bg-white bg-opacity-50 rounded text-xs font-medium uppercase tracking-wide">
                    {question.priority}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
        <p className="text-sm text-amber-800">
          <strong>Poznámka:</strong> Tyto otázky je potřeba vyřešit před finální implementací systému. 
          Kritické otázky blokují vývoj, důležité ovlivňují funkcionalitu, clarifikace pomohou s optimalizací.
        </p>
      </div>
    </div>
  );
};