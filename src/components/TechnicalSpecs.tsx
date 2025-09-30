import React from 'react';
import { Server, CheckCircle, XCircle, AlertTriangle, DollarSign, Shield, Clock } from 'lucide-react';

export const TechnicalSpecs: React.FC = () => {
  return (
    <>
      <div className="space-y-6">
      {/* Správní rada a Valná hromada - stejná výška */}
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

  {/* Volba platformy - pod kontejnery SR a VH - SKRYTO PRO UŽIVATELE */}
  {false && (
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center space-x-2 mb-6">
          <Server className="w-6 h-6 text-blue-600" />
          <h3 className="text-xl font-semibold text-gray-800">Volba platformy pro elektronické hlasování a schvalování (SR/VH)</h3>
        </div>

        {/* Úvod */}
        <div className="bg-grey-50 border border-blue-200 rounded-lg p-4 mb-6">
          <p className="text-sm text-gray-700 leading-relaxed">
            <strong>Nejde jen o to, kam data uložit.</strong> U hlasování (SR/VH) potřebujeme bezpečnost, auditovatelnost, spolehlivost výpočtů a škálování.
            Dataverse je podniková datová platforma Power Platform (cloud, low-code). Umožní nám stavět řešení, která jsou právně obhajitelná a dlouhodobě udržitelná. 
            SharePoint Lists je skvělý pro jednodušší týmové scénáře a soubory – ale jako „jádro" hlasování má limity (delegace, výkon, granularita práv).
          </p>
        </div>

        {/* Volba jádra: dvě cesty */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-gray-800 mb-4">Volba jádra: dvě cesty</h4>
          
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Cesta A - SharePoint */}
            <div className="border-2 border-orange-300 rounded-lg p-4 bg-orange-50">
              <div className="flex items-center space-x-2 mb-3">
                <AlertTriangle className="w-5 h-5 text-orange-600" />
                <h5 className="font-semibold text-orange-800">Cesta A: SharePoint Lists + Power Apps/Automate</h5>
              </div>
              
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-medium text-orange-800 mb-1">Hlavní výhoda:</p>
                  <p className="text-orange-700">Nízké vstupní náklady (v rámci M365), rychlý start</p>
                </div>
                
                <div>
                  <p className="font-medium text-orange-800 mb-1">Hlavní riziko/limit:</p>
                  <p className="text-orange-700">
                    Workaroundy (složitější výpočty přes Flow/klienta), limity delegace/škálování, 
                   zabezpečení a audit je nutné „dostavět"
                  </p>
                </div>
              </div>
            </div>

            {/* Cesta B - Dataverse */}
            <div className="border-2 border-green-300 rounded-lg p-4 bg-green-50">
              <div className="flex items-center space-x-2 mb-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <h5 className="font-semibold text-green-800">Cesta B: Dataverse + Power Apps/Automate</h5>
              </div>
              
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-medium text-green-800 mb-1">Hlavní výhoda:</p>
                  <p className="text-green-700">
                    Server-side logika, relační model, row/field-level security, audit out-of-the-box, 
                    lepší výkon a integrace
                  </p>
                </div>
                
                <div>
                  <p className="font-medium text-green-800 mb-1">Hlavní riziko/limit:</p>
                  <p className="text-green-700">
                    Prémiové licence (per-app „from $5"/uživatel/app/prostředí), základní kapacitní plánování
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
            <p className="text-sm text-purple-800">
              <strong>Pointa:</strong> Dataverse není jen „databáze". Je to „table as a service" s pravidly, výpočty, 
              metadaty, bezpečností a auditem „z krabice". To je pro hlasování klíčové.
            </p>
          </div>
        </div>

        {/* Strategie s nejnižším TCO */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-gray-800 mb-4">Strategie s nejnižším TCO (Total Cost of Ownership)</h4>
          
          <div className="bg-grey-50 border border-green-200 rounded-lg p-4 mb-4">
            <p className="text-sm text-gray-800 mb-3">
              <strong>Doporučujeme „model 2 aplikací"</strong> – podnikové schapnosti tam, kde jsou nutné, 
              a nízké licence pro většinu uživatelů:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="border border-blue-200 rounded-lg p-4 bg-grey-50">
              <h5 className="font-semibold text-grey-800 mb-2">Aplikace pro členy (SharePoint, bez Premium)</h5>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Založení tématu</li>
                <li>• Odevzdání hlasu</li>
                <li>• Zobrazení historie a výsledků</li>
                <li>• Dokumenty v SP knihovnách</li>
              </ul>
            </div>
            
            <div className="border border-purple-200 rounded-lg p-4 bg-grey-50">
              <h5 className="font-semibold text-grey-800 mb-2">Aplikace pro tajemníka/administrátora (Dataverse, Premium)</h5>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• Autorizace a vyvolání hlasování</li>
                <li>• Výpočty kvora/vah</li>
                <li>• Auditní stopa</li>
                <li>• Seznamy členů a rad</li>
                <li>• Premium licence pro 2–3 osoby</li>
                <li>• Synchronizace SP ↔ DV (GUID klíče)</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
            <p className="text-sm text-emerald-800">
              <strong>Výsledek:</strong> Kritické výpočty a audit běží na Dataverse, většina uživatelů zůstává bez prémiových licencí. 
              Dlouhodobě nižší provozní riziko i technický dluh.
            </p>
          </div>
        </div>

        {/* PDF výstupy */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-gray-800 mb-4">PDF výstupy</h4>
          
          <div className="bg-white-50 border border-gray-200 rounded-lg p-4 mb-4">
            <p className="text-sm text-gray-700 mb-3">
              Pro formální, archivovatelné dokumenty jsou důležité správné hlavičky/patičky, stránkování a spolehlivost.
            </p>
            
            <div className="space-y-3">
              <div className="bg-green-100 border border-green-300 rounded p-3">
                <p className="font-medium text-green-800 mb-1">Word šablona → PDF (prémiový konektor)</p>
                <p className="text-sm text-green-700">
                  Nejkvalitnější výstup, plná kontrola layoutu; Premium se spotřebuje jen na servisní/tajemnický účet.
                </p>
              </div>
              
              <div>
                <p className="font-medium text-gray-700 mb-2">Alternativy bez Premium (použitelné jen pro neformální/rychlé výstupy):</p>
                <ul className="text-sm text-gray-600 space-y-1 ml-4">
                  <li>A) HTML → OneDrive „Convert file" → PDF (může selhávat u složitých layoutů)</li>
                  <li>B) Tisk obrazovky z Power Apps (rychlé, ale slabé vícestránkování, bez pevných hlaviček/patiček)</li>
                  <li>C) Spuštění prémiového konektoru pro tvorbu PDF mimo aplikaci (přes prémiový účet vývojáře) - trvá přibližně 1–2 minuty </li>
                </ul>
              </div>
            </div>
            
            <p className="text-sm text-gray-600 mt-3 italic">
              Přílohy a PDF soubory ukládáme do SharePoint knihoven (levné úložiště); Dataverse drží metadata a odkazy.
            </p>
          </div>
        </div>

        {/* Licencování a kapacita */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-gray-800 mb-4">Licencování a kapacita</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-blue-200 rounded-lg p-4 bg-white-50">
              <div className="flex items-center space-x-2 mb-2">
                <DollarSign className="w-5 h-5 text-blue-600" />
                <h5 className="font-semibold text-blue-800">Licencování</h5>
              </div>
              <p className="text-sm text-blue-700">
                <strong>Per-app licence:</strong> uváděno „from $5" / uživatel / app / prostředí (např.: produční). 
                Cenu a alokaci ověříme s naším partnerem (Aricoma).
              </p>
            </div>
            
            <div className="border border-indigo-200 rounded-lg p-4 bg-white-50">
              <div className="flex items-center space-x-2 mb-2">
                <Server className="w-5 h-5 text-indigo-600" />
                <h5 className="font-semibold text-indigo-800">Kapacita</h5>
              </div>
              <p className="text-sm text-indigo-700">
                <strong>Kapacita Dataverse (DB/File/Log):</strong> při několika hlasováních ročně a „nižších tisících" 
                záznamů jsme bez rizika; velké soubory držíme v SharePointu.
              </p>
            </div>
          </div>
        </div>

        {/* Co přesně získáme s Dataverse */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-gray-800 mb-4">Co přesně získáme s Dataverse</h4>
          
          <div className="bg-white-50 border border-purple-200 rounded-lg p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-purple-600" />
                  <span className="font-medium text-purple-800">Bezpečnost:</span>
                  <span className="text-sm text-purple-700">role, row/field-level oprávnění</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-purple-600" />
                  <span className="font-medium text-purple-800">Audit:</span>
                  <span className="text-sm text-purple-700">kdo-co-kdy</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-purple-600" />
                  <span className="font-medium text-purple-800">Spolehlivost výpočtů:</span>
                  <span className="text-sm text-purple-700">kvóra, váhy na serveru (ne v klientovi)</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Server className="w-4 h-4 text-purple-600" />
                  <span className="font-medium text-purple-800">Škálování a výkon:</span>
                  <span className="text-sm text-purple-700">složitější dotazy bez workaroudy</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-purple-600" />
                  <span className="font-medium text-purple-800">ALM & integrace:</span>
                  <span className="text-sm text-purple-700">Solutions, prostředí Dev/Prod, nativní Power Platform konektor</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

        {/* Finální závěr */}
        <div className="mt-6 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-4">
          <p className="text-sm text-gray-700 font-medium">
            <strong>Závěr:</strong> Chceme-li právně obhajitelné hlasování s auditní stopou a spolehlivými výpočty, 
            volíme Dataverse jako datové jádro. Díky chytrému licencování a SharePointu pro soubory držíme náklady nízko 
            a zároveň budujeme podnikové řešení bez technického dluhu.
          </p>
        </div>
      </div>
      )}

      <div className="mt-6 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-4">
        {/* Finální závěr */}
        <p className="text-sm text-gray-700 font-medium">
          <strong>Závěr:</strong> Chceme-li právně obhajitelné hlasování s auditní stopou a spolehlivými výpočty, 
          volíme Dataverse jako datové jádro. Díky chytrému licencování a SharePointu pro soubory držíme náklady nízko 
          a zároveň budujeme podnikové řešení bez technického dluhu.
        </p>
      </div>
    </div>
    </>
  )
}