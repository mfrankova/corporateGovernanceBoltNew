import { OpenQuestion } from '../types';

export const openQuestions: OpenQuestion[] = [
  {
    id: 'eta-slovakia-board',
    question: 'Existuje ještě správní rada společnosti ETA Slovakia. Je nutné řešit také správní radu této společnosti nebo půjde do zániku a není nutné řešit?',
    context: 'Potřebujeme objasnit, zda má ETA Slovakia vlastní správní radu a zda ji zahrnout do systému, nebo zda společnost půjde do likvidace.',
    priority: 'critical'
  },
  {
    id: 'exception-voting',
    question: 'Občas nastávají mimořádné situace, kdy je povolena výjimka. Pro přijetí rozhodnutí postačuje 55 %, případně 87 % hlasů. Je nutno i tento typ hlasování řešit systémově?',
    context: 'Standardní kvórum je 70%, ale existují výjimky s 55% a 87%. Potřebujeme definovat, kdy se tyto výjimky aplikují a jak je systémově implementovat.',
    priority: 'important'
  },
  {
    id: 'supervisory-board',
    question: 'Budeme řešit hlasování ohledně "dozorčí rady"? (M. Kupcová - předseda, K. Čejka - podpředseda, L. Kleinová - člen)',
    context: 'Je potřeba objasnit, zda dozorčí rada bude také používat systém elektronického hlasování a jaké jsou její specifické požadavky.',
    priority: 'important'
  },
  {
    id: 'strategic-board',
    question: 'Budeme řešit hlasování ohledně "strategického boardu"?',
    context: 'Je potřeba definovat, zda strategický board bude součástí systému a jaké má specifické požadavky na hlasování a schvalování.',
    priority: 'clarification'
  }
];