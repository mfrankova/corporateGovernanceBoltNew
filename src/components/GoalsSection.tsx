import React from 'react';
import { Target, Vote, UserCheck, FileSignature, GitMerge, FolderArchive, BarChart3 } from 'lucide-react';

const SolutionOverview = () => {
  return (
    <div className="space-y-8">
      {/* Hlavní cíl */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200">
        <div className="flex items-center space-x-2 mb-6">
          <Target className="w-6 h-6 text-blue-600" />
          <h3 className="text-xl font-semibold text-blue-800">Hlavní cíl řešení .</h3>
        </div>
        <p className="text-blue-700 text-lg leading-relaxed">
          Cílem je zavést elektronické hlasování a schvalování správní radou i valnou hromadou, rozšířit proces schvalování smluv o kroky rady a sjednotit vše do jednoho přehledného digitálního prostředí.
        </p>
      </div>

      {/* Klíčové funkce */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-6">Klíčové funkce systému</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex items-start space-x-3">
            <Vote className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-gray-800">Elektronické hlasování</h4>
              <p className="text-sm text-gray-600 mt-1">
                Bezpečný a transparentní systém pro hlasování správní rady i valné hromady s možností vzdálené účasti.
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <UserCheck className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-gray-800">Ověření identity</h4>
              <p className="text-sm text-gray-600 mt-1">
               Zajištění důvěryhodného hlasování díky ověření uživatele a uchování záznamu o průběhu.
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <FileSignature className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-gray-800">Schvalování smluv</h4>
              <p className="text-sm text-gray-600 mt-1">
              Rozšíření existujícího workflow o krok schválení správní radou, pokud je to vyžadováno.
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <GitMerge className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-gray-800">Jednotné schvalování</h4>
              <p className="text-sm text-gray-600 mt-1">
                Jednotné elektronické schvalovani spravni radou.
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <GitMerge className="w-5 h-5 text-indigo-500 mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-gray-800">Propojení procesů</h4>
              <p className="text-sm text-gray-600 mt-1">
                Zajištění návaznosti a přehlednosti vůči stávajícímu systému schvalování.
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <FolderArchive className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-gray-800">Archivace</h4>
              <p className="text-sm text-gray-600 mt-1">
                Dlouhodobé uložení všech dokumentů a rozhodnutí.
              </p>
            </div>
          </div>
        </div>
      </div>
       {/* Přínosy */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-center space-x-2 mb-6">
          <Target className="w-6 h-6 text-blue-600" />
          <h3 className="text-xl font-semibold text-gray-800">Přínosy</h3>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <p className="text-gray-700 leading-relaxed">
              Zrychlení schvalování a hlasování správní radou díky elektronizaci.
            </p>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <p className="text-gray-700 leading-relaxed">
              Online dostupnost historie schvalování a hlasování správní radou.
            </p>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <p className="text-gray-700 leading-relaxed">
              Přehlednost a jednoznačnost hlasování.
            </p>
          </div>
        </div>
      </div>

      {/* Očekávaný dopad */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 border border-green-200">
        <div className="flex items-center space-x-2 mb-6">
          <BarChart3 className="w-6 h-6 text-green-600" />
          <h3 className="text-xl font-semibold text-green-800">Očekávaný dopad</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">75%</div>
            <div className="text-sm text-green-700">Zrychlení schvalování</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
            <div className="text-sm text-blue-700">Digitální dostupnost</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">90%</div>
            <div className="text-sm text-purple-700">Snížení chyb</div>
          </div>
        </div>
      </div>

     
      {/* Procesní diagram */}
    </div>
  );
};

export default SolutionOverview;