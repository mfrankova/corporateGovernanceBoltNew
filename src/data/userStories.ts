import { OpenQuestion } from '../types';

export const openQuestions: OpenQuestion[] = [
  {
    id: 'agenda-approval-process',
    question: 'Jak má probíhat schvalování jakékoliv jiné agendy správní radou – preferujete kompletní proces s hlasováním všech členů, nebo postačí schválení předsedou a místopředsedou?',
    context: 'Je třeba vyjasnit nastavení způsobu schvalování agendy správní radou mimo standardní procesy.\n\n Cílem je rozhodnout, zda:\n\n 1. Bude vždy využíván plný proces hlasování všech členů správní rady, nebo\n2. Se zvolí zjednodušený model, kdy postačí souhlas předsedy a místopředsedy, a to s ohledem na efektivitu, úsporu času a snížení administrativních nákladů.',
    priority: 'kritické'
  },
  {
    id: 'voting-transparency',
    question: 'Chcete mít možnost vidět pouze potvrzení vašeho vlastního hlasu, nebo i to, zda a jak hlasovali ostatní členové?',
    context: 'Cílem této otázky je určit úroveň transparentnosti hlasování v rámci boardu – zda má být zobrazováno pouze potvrzení vlastního hlasu, nebo také informace o účasti a konkrétním způsobu hlasování ostatních členů.',
    priority: 'kritické'
  },
  {
    id: 'pre-approver-role',
    question: 'Jakým způsobem a kým bude při rozšíření schvalovacího procesu smluv určeno obsazení role Předschvalovatele 2?',
    context: 'Tato otázka se zaměřuje na určení kompetencí a odpovědnosti při obsazení role Předschvalovatele 2 v rámci nově rozšířeného schvalovacího procesu smluv. Cílem je vyjasnit, kdo rozhoduje o obsazení této funkce a podle jakých pravidel.',
    priority: 'kritické'
  },
  {
    id: 'eta-slovakia-board',
    question: 'Existuje ještě správní rada společnosti ETA Slovakia. Je nutné řešit také správní radu této společnosti nebo půjde do zániku a není nutné řešit?',
    context: 'Potřebujeme objasnit, zda má ETA Slovakia vlastní správní radu a zda ji zahrnout do systému, nebo zda společnost půjde do likvidace.',
    priority: 'kritické'
  },
  {
    id: 'exception-voting',
    question: 'Občas nastávají mimořádné situace, kdy je povolena výjimka. Pro přijetí rozhodnutí postačuje 55 %, případně 87 % hlasů. Je nutno i tento typ hlasování řešit systémově?',
    context: 'Standardní kvórum je 70%, ale existují výjimky s 55% a 87%. Potřebujeme definovat, kdy se tyto výjimky aplikují a jak je systémově implementovat.',
    priority: 'důležité'
  },
  {
    id: 'supervisory-board',
    question: 'Budeme řešit hlasování ohledně "dozorčí rady"? (M. Kupcová - předseda, K. Čejka - podpředseda, L. Kleinová - člen)',
    context: 'Je potřeba objasnit, zda dozorčí rada bude také používat systém elektronického hlasování a jaké jsou její specifické požadavky.',
    priority: 'důležité'
  },
  {
    id: 'strategic-board',
    question: 'Budeme řešit hlasování ohledně "strategického boardu"?',
    context: 'Je potřeba definovat, zda strategický board bude součástí systému a jaké má specifické požadavky na hlasování a schvalování.',
    priority: 'upřesnění'
  }
];