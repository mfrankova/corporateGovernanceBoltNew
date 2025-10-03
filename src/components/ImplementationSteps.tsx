import React, { useState } from 'react';
import { ChevronDown, ChevronRight, FileText } from 'lucide-react';

interface Step {
  id: string;
  title: string;
  description?: string;
  details?: string[];
}

interface Theme {
  id: string;
  title: string;
  description: string;
  steps: Step[];
}

interface ThemeBlockProps {
  theme: Theme;
}

export const ThemeBlock: React.FC<ThemeBlockProps> = ({ theme }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="border border-gray-200 rounded-lg mt-6">
      <button
        onClick={toggleExpanded}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors rounded-lg"
      >
        <div className="flex-1">
          <h4 className="font-semibold text-gray-800 mb-1">{theme.title}</h4>
          <p className="text-sm text-gray-600">{theme.description}</p>
        </div>
        <div className="ml-4">
          {isExpanded ? (
            <ChevronDown className="w-5 h-5 text-gray-400" />
          ) : (
            <ChevronRight className="w-5 h-5 text-gray-400" />
          )}
        </div>
      </button>

      {isExpanded && (
        <div className="border-t border-gray-200 bg-gray-50">
          <div className="p-4 space-y-4">
            {theme.steps.map((step, index) => (
              <div key={step.id} className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">
                        Krok {index + 1}
                      </span>
                      <h5 className="font-semibold text-gray-800">{step.title}</h5>
                    </div>
                    {step.description && (
                      <p className="text-sm text-gray-600">{step.description}</p>
                    )}
                    {step.details && (
                      <div className="mt-3 space-y-1">
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
                          if (detail === 'nebo') {
                            return (
                              <p key={detailIndex} className="text-sm text-gray-500 italic ml-4">
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
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export const themes: Theme[] = [
  {
    id: 'theme-1',
    title: 'Hlasování představenstva/valné hromady',
    description: 'Implementace elektronického hlasovacího systému pro správní rady a valné hromady',
    steps: [
      { 
        id: 'step-1-1', 
        title: 'Analýza možností', 
        description: 'Analýza technických možností a požadavků pro hlasovací systém',
        details: [
          '• Analýza současného stavu procesů',
          '• Definice funkčních požadavků',
          '• Analýza integračních bodů',
          '• Výběr technologické platformy (Dataverse vs SharePoint)',
          '• Analýza licenčních nákladů'
        ]
      },
      { 
        id: 'step-1-2', 
        title: 'Prezentace procesu', 
        description: 'Prezentace navrženého řešení stakeholderům',
        details: [
          '• Příprava prezentace pro vedení',
          '• Prezentace procesních diagramů',
          '• Schválení konceptu řešení',
          '• Definice projektového týmu'
        ]
      },
      { 
        id: 'step-1-3', 
        title: 'Vytvoření prostředí v PowerApps', 
        description: 'Nastavení vývojového a produkčního prostředí',
        details: [
          '• Vytvoření Dataverse prostředí',
          '• Nastavení bezpečnostních rolí',
          '• Konfigurace SharePoint knihoven',
          '• Nastavení Power Automate flows'
        ]
      },
      { 
        id: 'step-1-4', 
        title: 'Kódování procesu', 
        description: 'Vývoj aplikací a automatizace procesů',
        details: [
          '• Vývoj Canvas aplikace pro členy',
          '• Vývoj administrátorské aplikace',
          '• Implementace hlasovací logiky',
          '• Vývoj výpočtů kvóra a vah hlasů',
          '• Implementace notifikací'
        ]
      },
      { 
        id: 'step-1-5', 
        title: 'Vytvoření uživatelských příruček', 
        description: 'Dokumentace pro koncové uživatele',
        details: [
          '• Příručka pro členy správní rady',
          '• Příručka pro tajemníka',
          '• Příručka pro předsedu/místopředsedu',
          '• Video návody pro klíčové procesy'
        ]
      },
      { 
        id: 'step-1-6', 
        title: 'Vytvoření technické dokumentace', 
        description: 'Technická dokumentace systému',
        details: [
          '• Architektura řešení',
          '• Datový model',
          '• API dokumentace',
          '• Bezpečnostní model',
          '• Provozní dokumentace'
        ]
      },
      { 
        id: 'step-1-7', 
        title: 'Nákup licencí', 
        description: 'Zajištění potřebných licencí',
        details: [
          '• Vyhodnocení licenčních potřeb',
          '• Nákup Dataverse per-app licencí',
          '• Konfigurace licencí pro uživatele',
          '• Monitoring využití kapacit'
        ]
      },
      { 
        id: 'step-1-8', 
        title: 'Vytvoření konektoru pro export do Obelisku', 
        description: 'Integrace s Obelisk Signing Portal',
        details: [
          '• Analýza Obelisk API',
          '• Vývoj integračního konektoru',
          '• Testování elektronického podpisu',
          '• Implementace archivace do OTA'
        ]
      },
      { 
        id: 'step-1-9', 
        title: 'Testování', 
        description: 'Komplexní testování systému',
        details: [
          '• Unit testy jednotlivých komponent',
          '• Integrační testování',
          '• User Acceptance Testing (UAT)',
          '• Zátěžové testování',
          '• Bezpečnostní testování'
        ]
      },
      { 
        id: 'step-1-10', 
        title: 'Nasazení do produkce', 
        description: 'Spuštění systému v produkčním prostředí',
        details: [
          '• Migrace dat do produkce',
          '• Školení uživatelů',
          '• Postupné nasazení (soft launch)',
          '• Monitoring a podpora',
          '• Vyhodnocení úspěšnosti'
        ]
      }
    ]
  },
  {
    id: 'theme-2',
    title: 'Rozsireni schvalovani smluv o nove funkce',
    description: 'Integrace schvalovacího procesu do stávajícího TreeInfo systému',
    steps: [
      { 
        id: 'step-2-1', 
        title: 'Analýza možností', 
        description: 'Analýza současného TreeInfo systému a možností rozšíření',
        details: [
          '• Analýza současného workflow v TreeInfo',
          '• Identifikace integračních bodů',
          '• Analýza datového modelu',
          '• Definice nových požadavků'
        ]
      },
      { 
        id: 'step-2-2', 
        title: 'Zadání pro dodavatele Aricoma', 
        description: 'Příprava specifikace pro externí dodavatele',
        details: [
          '• Vytvoření detailní specifikace',
          '• Definice akceptačních kritérií',
          '• Příprava testovacích scénářů',
          '• Výběrové řízení dodavatele'
        ]
      },
      { 
        id: 'step-2-3', 
        title: 'Harmonogram implementace Aricoma', 
        description: 'Plánování implementace s externím dodavatelem',
        details: [
          '• Vytvoření projektového plánu',
          '• Definice milníků a deliverables',
          '• Nastavení komunikačních kanálů',
          '• Řízení rizik projektu'
        ]
      },
      { 
        id: 'step-2-4', 
        title: 'Implementace', 
        description: 'Realizace rozšíření TreeInfo systému',
        details: [
          '• Vývoj nových funkcionalit',
          '• Integrace s hlasovacím systémem',
          '• Úprava uživatelského rozhraní',
          '• Implementace workflow změn'
        ]
      },
      { 
        id: 'step-2-5', 
        title: 'Testování', 
        description: 'Testování rozšířeného TreeInfo systému',
        details: [
          '• Funkční testování nových features',
          '• Regresní testování stávajících funkcí',
          '• Integrační testování s hlasovacím systémem',
          '• User Acceptance Testing'
        ]
      },
      { 
        id: 'step-2-6', 
        title: 'Nasazení a předání', 
        description: 'Nasazení do produkce a předání provozu',
        details: [
          '• Nasazení do produkčního prostředí',
          '• Migrace dat a nastavení',
          '• Školení administrátorů',
          '• Předání dokumentace a podpory'
        ]
      }
    ]
  },
  
];

export const ImplementationSteps: React.FC = () => {
  const [expandedThemes, setExpandedThemes] = useState<Set<string>>(new Set());
  const [expandedSteps, setExpandedSteps] = useState<Set<string>>(new Set());

  React.useEffect(() => {
    try {
      const savedExpandedThemes = localStorage.getItem('expandedThemes');
      const savedExpandedSteps = localStorage.getItem('expandedSteps');
      if (savedExpandedThemes) {
        setExpandedThemes(new Set(JSON.parse(savedExpandedThemes)));
      }
      if (savedExpandedSteps) {
        setExpandedSteps(new Set(JSON.parse(savedExpandedSteps)));
      }
    } catch (error) {
      console.error('Chyba při načítání dat z localStorage:', error);
    }
  }, []);

  React.useEffect(() => {
    try {
      localStorage.setItem('expandedThemes', JSON.stringify([...expandedThemes]));
      localStorage.setItem('expandedSteps', JSON.stringify([...expandedSteps]));
    } catch (error) {
      console.error('Chyba při ukládání rozbalených položek:', error);
    }
  }, [expandedThemes, expandedSteps]);

  const toggleTheme = (themeId: string) => {
    const newExpanded = new Set(expandedThemes);
    if (newExpanded.has(themeId)) {
      newExpanded.delete(themeId);
    } else {
      newExpanded.add(themeId);
    }
    setExpandedThemes(newExpanded);
  };

  const toggleStep = (stepId: string) => {
    const newExpanded = new Set(expandedSteps);
    if (newExpanded.has(stepId)) {
      newExpanded.delete(stepId);
    } else {
      newExpanded.add(stepId);
    }
    setExpandedSteps(newExpanded);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center space-x-2 mb-6">
        <FileText className="w-6 h-6 text-blue-600" />
        <h3 className="text-xl font-semibold text-gray-800">Kroky implementace</h3>
      </div>

      <div className="space-y-4">
        {themes.map((theme) => {
          const isExpanded = expandedThemes.has(theme.id);
          
          return (
            <div key={theme.id} className="border border-gray-200 rounded-lg">
              {/* Theme Header */}
              <button
                onClick={() => toggleTheme(theme.id)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors rounded-lg"
              >
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800 mb-1">{theme.title}</h4>
                  <p className="text-sm text-gray-600">{theme.description}</p>
                </div>
                <div className="ml-4">
                  {isExpanded ? (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>

              {/* Steps */}
              {isExpanded && (
                <div className="border-t border-gray-200 bg-gray-50">
                  <div className="p-4 space-y-4">
                    {theme.steps.map((step, index) => (
                      <div key={step.id} className="bg-white rounded-lg border border-gray-200">
                        <button
                          onClick={() => toggleStep(step.id)}
                          className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors rounded-lg"
                        >
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">
                                Krok {index + 1}
                              </span>
                              <h5 className="font-semibold text-gray-800">{step.title}</h5>
                            </div>
                            {step.description && (
                              <p className="text-sm text-gray-600">{step.description}</p>
                            )}
                          </div>
                          <div className="ml-4">
                            {expandedSteps.has(step.id) ? (
                              <ChevronDown className="w-5 h-5 text-gray-400" />
                            ) : (
                              <ChevronRight className="w-5 h-5 text-gray-400" />
                            )}
                          </div>
                        </button>

                        {expandedSteps.has(step.id) && step.details && (
                          <div className="border-t border-gray-200 bg-gray-50 p-4">
                            <div className="space-y-1">
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
                                if (detail === 'nebo') {
                                  return (
                                    <p key={detailIndex} className="text-sm text-gray-500 italic ml-4">
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
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Info Panel */}
      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <h4 className="font-semibold text-blue-800 mb-2">Informace o implementaci</h4>
        <div className="text-sm text-blue-700 space-y-1">
          <p>• Klikněte na téma pro rozbalení jednotlivých kroků</p>
          <p>• Klikněte na krok pro zobrazení detailních aktivit</p>
          <p>• Kroky jsou rozděleny do tematických celků podle typu implementace</p>
        </div>
      </div>
    </div>
  );
};