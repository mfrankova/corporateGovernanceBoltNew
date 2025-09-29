import React from 'react';
import { roleColors, roleLabels } from '../types';
import { Diamond, Square } from 'lucide-react';

export const RoleLegend: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Legenda rolí a procesů</h3>
      
      <div className="space-y-3">
        {Object.entries(roleLabels).map(([role, label]) => (
          <div key={role} className="flex items-center space-x-3">
            <div 
              className="w-4 h-4 rounded"
              style={{ backgroundColor: roleColors[role as keyof typeof roleColors] }}
            />
            <span className="text-sm text-gray-700">{label}</span>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <h4 className="text-md font-medium text-gray-800 mb-3">Typy kroků</h4>
        <div className="space-y-2">
          <div className="flex items-center space-x-3">
            <Square className="w-4 h-4 text-gray-600" />
            <span className="text-sm text-gray-700">Úkol/Aktivita</span>
          </div>
          <div className="flex items-center space-x-3">
            <Diamond className="w-4 h-4 text-gray-600" />
            <span className="text-sm text-gray-700">Rozhodnutí/Podmínka</span>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <h4 className="text-md font-medium text-gray-800 mb-4">Charakteristika rolí - Hlasovací proces</h4>
        <div className="space-y-4">
          <div>
            <h5 className="font-semibold text-green-700 mb-1">Řešitel</h5>
            <p className="text-sm text-gray-600 leading-relaxed">
              Osoba, která předkládá žádost o hlasovací proces, o kterém bude hlasovat představenstvo, 
              včetně všech nezbytných podpůrných dokumentů a podrobností.
            </p>
          </div>
          
          <div>
            <h5 className="font-semibold text-yellow-700 mb-1">Tajemník</h5>
            <p className="text-sm text-gray-600 leading-relaxed">
              Osoba, která kontroluje výsledky hlasování a v případě potřeby připomíná hlasujícím jejich 
              povinnost hlasovat. Shrnuje také výsledky hlasování a připojuje je k zápisu/usnesení.
            </p>
          </div>
          
          <div>
            <h5 className="font-semibold text-blue-700 mb-1">Hlasující</h5>
            <p className="text-sm text-gray-600 leading-relaxed">
              Osoba (osoby) oprávněná k hlasování.
            </p>
          </div>
          
          <div>
            <h5 className="font-semibold text-red-700 mb-1">Schvalovatel</h5>
            <p className="text-sm text-gray-600 leading-relaxed">
              Osoba (osoby) oprávněná ke schválení zápisu/usnesení představenstva. Obvykle se jedná 
              o předsedu a místopředsedu představenstva.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};