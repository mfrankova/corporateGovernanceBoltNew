import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { ProcessNavigation } from './components/ProcessNavigation';
import { ProcessDiagram } from './components/ProcessDiagram';
import { RoleLegend } from './components/RoleLegend';
import { ImplementationSteps } from './components/ImplementationSteps';
import { OpenQuestionsPanel } from './components/OpenQuestionsPanel';
import { TechnicalSpecs } from './components/TechnicalSpecs';
import GoalsSection from './components/GoalsSection';
import { processes } from './data/processes';
import { Settings } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('processes');
  const [activeProcess, setActiveProcess] = useState('electronic-voting');

  const currentProcess = processes.find(p => p.id === activeProcess);

  const renderContent = () => {
    switch (activeTab) {
      case 'goals':
        return <GoalsSection />;
      
      case 'processes':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <ProcessNavigation 
                activeProcess={activeProcess} 
                onProcessChange={setActiveProcess} 
              />
              {currentProcess && (
                <ProcessDiagram process={currentProcess} />
              )}
            </div>
            <div className="lg:col-span-1">
              <RoleLegend />
            </div>
          </div>
        );
      
      case 'stories':
        return (
          <div className="max-w-full">
              <ImplementationSteps />
          </div>
        );
      
      case 'questions':
        return (
          <div className="max-w-4xl mx-auto">
            <OpenQuestionsPanel />
          </div>
        );
      
      case 'technical':
        return (
          <div className="max-w-full">
            <TechnicalSpecs />
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Settings className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Systém hlasování a schvalování Správní rady
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                Dokumentace procesů pro Správní radu a Valnou hromadu
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Navigation 
          activeTab={activeTab} 
          onTabChange={setActiveTab} 
        />

        {renderContent()}

        
      </main>
    </div>
  );
}

export default App;