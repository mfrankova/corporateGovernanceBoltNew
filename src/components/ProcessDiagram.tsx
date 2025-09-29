import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { ProcessDiagram as ProcessDiagramType } from '../types';

import { themes, ThemeBlock } from './ImplementationSteps';

interface ProcessDiagramProps {
  process?: ProcessDiagramType;
}

export const ProcessDiagram: React.FC<ProcessDiagramProps> = ({ process }) => {
  const [expandedSteps, setExpandedSteps] = useState<Set<string>>(new Set());
  const [showDescription, setShowDescription] = useState(false);
  const [showSteps, setShowSteps] = useState(false);

  const toggleStep = (stepId: string) => {
    const newExpanded = new Set(expandedSteps);
    if (newExpanded.has(stepId)) {
      newExpanded.delete(stepId);
    } else {
      newExpanded.add(stepId);
    }
    setExpandedSteps(newExpanded);
  };

  if (!process) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6">
        <p className="text-gray-500">Vyberte proces pro zobrazení diagramu</p>
      </div>
    );
  }

  const getProcessImage = (processId: string) => {
    switch (processId) {
      case 'electronic-voting':
        return 'https://raw.githubusercontent.com/mfrankova/corporateGovernance/main/sr-diagram.jpg';
      case 'contract-approval':
        return 'https://raw.githubusercontent.com/mfrankova/corporateGovernance/main/ss-diagram.jpg';
      case 'universal-approval':
        return ''; // Zde bude třetí odkaz
      default:
        return '';
    }
  };

  const imageUrl = getProcessImage(process.id);
  

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{process.name}</h2>
        <p className="text-gray-600">{process.description}</p>
      </div>

      {imageUrl && (
        <div className="mb-6">
          <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 text-center">
            <a href={imageUrl} target="_blank" rel="noopener noreferrer">
              <img 
                src={imageUrl}
                alt={`Procesní diagram - ${process.name}`}
                className="w-full h-auto max-h-[800px] object-contain mx-auto rounded-lg shadow-sm cursor-pointer"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = `
                      <div class="text-center py-8">
                        <p class="text-gray-600 mb-2">Diagram se nepodařilo načíst</p>
                        <a href="${imageUrl}" target="_blank" rel="noopener noreferrer" 
                           class="text-blue-600 hover:text-blue-800 underline">
                          Zobrazit diagram v novém okně
                        </a>
                      </div>
                    `;
                  }
                }}
              />
            </a>
          </div>
        </div>
      )}
     
      {/* Popis procesu - rozklikávací */}
      <div className="border border-gray-200 rounded-lg">
        <button
          onClick={() => setShowDescription(!showDescription)}
          className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors rounded-lg"
        >
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-800">Popis procesu</h3>
            <p className="text-sm text-gray-600 mt-1">Klíčové charakteristiky a detaily procesu</p>
          </div>
          <div className="ml-4">
            {showDescription ? (
              <ChevronDown className="w-5 h-5 text-gray-400" />
            ) : (
              <ChevronRight className="w-5 h-5 text-gray-400" />
            )}
          </div>
        </button>

        {showDescription && (
          <div className="border-t border-gray-200 bg-gray-50 p-4">
            <div className="prose prose-sm max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">{process.description}</p>
              
              {process.id === 'electronic-voting' && (
                <div className="space-y-3">
                  <h4 className="font-medium text-gray-800">Klíčové charakteristiky:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Elektronické hlasování s váženými podíly členů</li>
                    <li>Povinné schválení předsedou a místopředsedou</li>
                    <li>Integrace s Obelisk pro elektronický podpis</li>
                    <li>Kompletní auditní trail všech akcí</li>
                    <li>Přístup k archivovaným dokumentům pro všechny členy</li>
                  </ul>
                </div>
              )}

              {process.id === 'contract-approval' && (
                <div className="space-y-3">
                  <h4 className="font-medium text-gray-800">Klíčové charakteristiky:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Rozšíření stávajícího workflow o krok schválení správní radou</li>
                    <li>Integrace s TreeInfo systémem</li>
                    <li>Automatické přiřazení schvalovatelů podle společnosti</li>
                    <li>Propojení s Obelisk pro elektronický podpis smluv</li>
                    <li>Archivace v dokumentových knihovnách</li>
                  </ul>
                </div>
              )}

              {process.id === 'universal-approval' && (
                <div className="space-y-3">
                  <h4 className="font-medium text-gray-800">Klíčové charakteristiky:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Univerzální systém pro všechny typy agend</li>
                    <li>Automatická kategorizace podle typu rozhodnutí</li>
                    <li>Různá kvóra podle priority (55%, 70%, 87%)</li>
                    <li>Flexibilní workflow pro různé typy rozhodnutí</li>
                    <li>Monitoring implementace schválených rozhodnutí</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      
      {/* Detailní kroky procesu - rozklikávací */}
      <div className="border border-gray-200 rounded-lg">
        <button
          onClick={() => setShowSteps(!showSteps)}
          className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors rounded-lg"
        >
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-800">Detailní kroky procesu</h3>
            <p className="text-sm text-gray-600 mt-1">
              {process.steps.length} {process.id === 'electronic-voting' ? 'kroků procesu' : 'kroků procesu'}
            </p>
          </div>
          <div className="ml-4">
            {showSteps ? (
              <ChevronDown className="w-5 h-5 text-gray-400" />
            ) : (
              <ChevronRight className="w-5 h-5 text-gray-400" />
            )}
          </div>
        </button>

        {showSteps && (
          <div className="border-t border-gray-200 bg-gray-50 p-4">
            {process.id === 'electronic-voting' && (
              <div className="space-y-3">
                {process.steps.map((step, index) => (
                  <div key={step.id} className="border border-gray-200 rounded-lg bg-white">
                    <button
                      onClick={() => toggleStep(step.id)}
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors rounded-lg"
                    >
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">
                            Krok {index + 1}
                          </span>
                          <h4 className="font-semibold text-gray-800">{step.title}</h4>
                        </div>
                      </div>
                      <div className="ml-4">
                        {expandedSteps.has(step.id) ? (
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        ) : (
                          <ChevronRight className="w-5 h-5 text-gray-400" />
                        )}
                      </div>
                    </button>

                    {expandedSteps.has(step.id) && (
                      <div className="border-t border-gray-200 bg-gray-50 p-4">
                        {step.description && (
                          <p className="text-sm text-gray-700 mb-3">{step.description}</p>
                        )}
                        {step.details && (
                          <div className="space-y-2">
                            {step.details.map((detail, detailIndex) => {
                              if (detail === '') {
                                return <div key={detailIndex} className="h-2" />;
                              }
                              if (detail.endsWith(':')) {
                                return (
                                  <p key={detailIndex} className="text-sm font-semibold text-gray-700 mt-3 mb-1">
                                    {detail}
                                  </p>
                                );
                              }
                              if (detail.startsWith('•')) {
                                return (
                                  <p key={detailIndex} className="text-sm text-gray-600 ml-4">
                                    {detail}
                                  </p>
                                );
                              }
                              return (
                                <p key={detailIndex} className="text-sm text-gray-600">
                                  {detail}
                                </p>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {process.id === 'contract-approval' && (
              <div className="space-y-3">
                {process.steps.map((step, index) => (
                  <div key={step.id} className="border border-gray-200 rounded-lg bg-white">
                    <button
                      onClick={() => toggleStep(step.id)}
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors rounded-lg"
                    >
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">
                            Krok {index + 1}
                          </span>
                          <h4 className="font-semibold text-gray-800">{step.title}</h4>
                        </div>
                      </div>
                      <div className="ml-4">
                        {expandedSteps.has(step.id) ? (
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        ) : (
                          <ChevronRight className="w-5 h-5 text-gray-400" />
                        )}
                      </div>
                    </button>

                    {expandedSteps.has(step.id) && (
                      <div className="border-t border-gray-200 bg-gray-50 p-4">
                        {step.description && (
                          <p className="text-sm text-gray-700 mb-3">{step.description}</p>
                        )}
                        {step.details && (
                          <div className="space-y-2">
                            {step.details.map((detail, detailIndex) => {
                              if (detail === '') {
                                return <div key={detailIndex} className="h-2" />;
                              }
                              if (detail.endsWith(':')) {
                                return (
                                  <p key={detailIndex} className="text-sm font-semibold text-gray-700 mt-3 mb-1">
                                    {detail}
                                  </p>
                                );
                              }
                              if (detail.startsWith('•')) {
                                return (
                                  <p key={detailIndex} className="text-sm text-gray-600 ml-4">
                                    {detail}
                                  </p>
                                );
                              }
                              return (
                                <p key={detailIndex} className="text-sm text-gray-600">
                                  {detail}
                                </p>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {process.id === 'universal-approval' && (
              <div className="space-y-3">
                {process.steps.map((step, index) => (
                  <div key={step.id} className="border border-gray-200 rounded-lg bg-white">
                    <button
                      onClick={() => toggleStep(step.id)}
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors rounded-lg"
                    >
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm font-medium">
                            Krok {index + 1}
                          </span>
                          <h4 className="font-semibold text-gray-800">{step.title}</h4>
                        </div>
                      </div>
                      <div className="ml-4">
                        {expandedSteps.has(step.id) ? (
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        ) : (
                          <ChevronRight className="w-5 h-5 text-gray-400" />
                        )}
                      </div>
                    </button>

                    {expandedSteps.has(step.id) && (
                      <div className="border-t border-gray-200 bg-gray-50 p-4">
                        {step.description && (
                          <p className="text-sm text-gray-700 mb-3">{step.description}</p>
                        )}
                        {step.details && (
                          <div className="space-y-2">
                            {step.details.map((detail, detailIndex) => {
                              if (detail === '') {
                                return <div key={detailIndex} className="h-2" />;
                              }
                              if (detail.endsWith(':')) {
                                return (
                                  <p key={detailIndex} className="text-sm font-semibold text-gray-700 mt-3 mb-1">
                                    {detail}
                                  </p>
                                );
                              }
                              if (detail.startsWith('•')) {
                                return (
                                  <p key={detailIndex} className="text-sm text-gray-600 ml-4">
                                    {detail}
                                  </p>
                                );
                              }
                              return (
                                <p key={detailIndex} className="text-sm text-gray-600">
                                  {detail}
                                </p>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
      
      
    
    </div>
  );
};