import React from 'react';
import { Server, CheckCircle, XCircle, AlertTriangle, DollarSign, Shield, Clock } from 'lucide-react';

export const TechnicalSpecs: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Správní rada a Valná hromada - celá šířka */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Správní rada */}
        <div className="bg-white rounded-xl shadow-lg p-6 h-full">
          <h4 className="font-semibold text-gray-800 mb-4 text-lg">SPRÁVNÍ RADA:</h4>
          
          <div className="mb-4">
            <p className="text-gray-700 mb-2">Existují následující (4) správní rady:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>správní rada mateřské společnosti NAY-DATART</li>
              <li>správní rada významné dceřské společnosti HPTronic Zlín</li>
              <li>správní rada významné dceřské společnosti NAY</li>
              <li>správní rada významné dceřské společnosti ETA</li>
            </ul>
            <p className="text-gray-600 text-sm mt-2 italic">
              Ostatní nevýznamné dceřské společnosti nemají správní rady.
            </p>
          </div>

          <div className="mb-4">
            <p className="text-gray-700 mb-3">
              Členové správní rady pro mateřskou a významní dceřské společnosti jsou stejní s následující vahou hlasu:
            </p>
            
            <div className="bg-gray-50 rounded-lg p-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="text-left py-2 font-semibold">Člen</th>
                    <th className="text-right py-2 font-semibold">Procenta</th>
                    <th className="text-right py-2 font-semibold">Počet hlasů</th>
                  </tr>
                </thead>
                <tbody className="space-y-1">
                  <tr className="border-b border-gray-200">
                    <td className="py-2">D. Večeřa</td>
                    <td className="text-right py-2">14 %</td>
                    <td className="text-right py-2">21.000 hlasů</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2">P. Zálešák</td>
                    <td className="text-right py-2">20 %</td>
                    <td className="text-right py-2">30.000 hlasů</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2">J. Tomáš</td>
                    <td className="text-right py-2">13,34 %</td>
                    <td className="text-right py-2">20.010 hlasů</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2">K. Čejka</td>
                    <td className="text-right py-2">6,66 %</td>
                    <td className="text-right py-2">9.990 hlasů</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2">P. Reš</td>
                    <td className="text-right py-2">12 %</td>
                    <td className="text-right py-2">18.000 hlasů</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2">L. Kleinová</td>
                    <td className="text-right py-2">34 %</td>
                    <td className="text-right py-2">51.000 hlasů</td>
                  </tr>
                  <tr className="border-t-2 border-gray-400 font-semibold">
                    <td className="py-2">Celkem:</td>
                    <td className="text-right py-2">100 %</td>
                    <td className="text-right py-2">150.000 hlasů</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
            <p className="text-blue-800 text-sm">
              <strong>Usnášení schopné při 70% hlasů.</strong><br />
              <strong>Přijetí rozhodnutí při schválení min. 70% hlasů.</strong>
            </p>
          </div>
        </div>

        {/* Valná hromada */}
        <div className="bg-white rounded-xl shadow-lg p-6 h-full">
          <h4 className="font-semibold text-gray-800 mb-4 text-lg">VALNÁ HROMADA:</h4>
          
          <div className="mb-4">
            <p className="text-gray-700 mb-2">Existují následující (4) valné hromady:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>valná hromada NAY</li>
              <li>valná hromada HPTronic Zlín</li>
              <li>valná hromada ETA</li>
              <li>valná hromada NAY-DATART</li>
            </ul>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
            <p className="text-yellow-800 text-sm">
              <strong>Valné hromady NAY, HPTronic Zlín a ETA nemají hlasování.</strong><br />
              Mají jen schvalování rozhodnutí akcionářem, čiže představenstvem NAY-DATART (D. Večeřa + P. Zálešák).
            </p>
          </div>

          <div className="mb-4">
            <p className="text-gray-700 mb-3">Valná hromada NAY-DATART hlasuje následovně:</p>
            
            <div className="bg-gray-50 rounded-lg p-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="text-left py-2 font-semibold">Společnost</th>
                    <th className="text-right py-2 font-semibold">Procenta</th>
                    <th className="text-right py-2 font-semibold">Zastoupení</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-2">HP Invest</td>
                    <td className="text-right py-2">50,23 %</td>
                    <td className="text-right py-2">D. Večeřa</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2">Internet Retail</td>
                    <td className="text-right py-2">16,43 %</td>
                    <td className="text-right py-2">D. Večeřa + (P. Res nebo K. Čejka)</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2">Telus Holding</td>
                    <td className="text-right py-2">20,004 %</td>
                    <td className="text-right py-2">P. Zálešák</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2">Jtcc Holding</td>
                    <td className="text-right py-2">13,336 %</td>
                    <td className="text-right py-2">J. Tomáš</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
            <p className="text-purple-800 text-sm">
              <strong>Usnášení schopné při 80% hlasů.</strong><br />
              <strong>Rozhodování vyhrazených záležitostí I. kvórum - 70% hlasů</strong><br />
              <strong>Rozhodování vyhrazených záležitostí II. kvórum - 87% hlasů</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};