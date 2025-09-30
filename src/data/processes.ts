import { ProcessDiagram } from '../types';

export const electronicVotingProcess: ProcessDiagram = {
  id: 'electronic-voting',
  name: 'Elektronické hlasování správní rady a hlasování valné hromady',
  description: 'Detailní proces hlasování správní rady od vytvoření tématu až po archivaci zápisnice',
  steps: [
    {
      id: 'krok1-tema',
      title: 'Téma pro hlasování SR',
      description: 'Řešitel vytvoří téma pro hlasování zadáním názvu tématu, stručného popisu a přiložením potřebných podkladů',
      role: 'participant',
      type: 'task',
      next: ['krok2-autorizace'],
      details: [
        'Zadání názvu tématu',
        'Stručný popis problematiky',
        'Přiložení potřebných podkladů',
        'Výběr příslušné správní rady'
      ]
    },
    {
      id: 'krok2-autorizace',
      title: 'Autorizace',
      description: 'Tajemník SR bude notifikován o založení nové tématu pro hlasování SR a je vyžadována autorizace',
      role: 'secretary',
      type: 'decision',
      next: ['krok3-vyvolani', 'krok5-doplneni'],
      details: [
        'Kontrola relevantnosti tématu pro hlasování správní radou',
        'Kontrola kompletnosti všech potřebných informací',
        'Možné akce tajemníka:',
        '• Vyžádat si doplnění údajů (proces se vrací k řešiteli)',
        '• Zamítnout celé téma jako irelevantní',
        '• Potvrdit autorizaci tématu a vyvolat proces hlasování'
      ]
    },
    {
      id: 'krok3-vyvolani',
      title: 'Vyvolání hlasování SR',
      description: 'Tajemník vyvolá příslušné hlasování SR s automatickým doplněním schvalovatelů podle společnosti',
      role: 'secretary',
      type: 'task',
      next: ['krok4-hlasovani'],
      details: [
        'Rozlišení hlasování podle společnosti',
        'Automatické doplnění potřebných schvalovatelů',
        'Nastavení parametrů hlasování',
        'Spuštění hlasovacího procesu'
      ]
    },
    {
      id: 'krok4-hlasovani',
      title: 'Hlasování',
      description: 'Hlasovatelé jsou notifikováni pro vykonání hlasování s 7denní lhůtou a 4 možnostmi hlasování',
      role: 'board_member',
      type: 'task',
      next: ['krok5-doplneni', 'krok6-vyhodnoceni'],
      details: [
        'Notifikace hlasovatelů o novém hlasování',
        'Lhůta pro hlasování: 7 dní',
        'Notifikace 7. den: poslední možnost hlasování',
        'Notifikace tajemníka pro urgenci (telefonicky/osobně)',
        'Možnosti hlasování:',
        '• Souhlasím',
        '• Nesouhlasím', 
        '• Zdržím se hlasování',
        '• Vrátit na doplnění',
        'Při volbě "Vrátit na doplnění":',
        '• Notifikace řešiteli o požadavku na doplnění',
        '• Informování ostatních hlasujících o požadavku'
      ]
    },
    {
      id: 'krok5-doplneni',
      title: 'Doplnění',
      description: 'Řešitel doplní požadované informace, hlasování se vynuluje a spustí znovu',
      role: 'participant',
      type: 'task',
      next: ['krok3-vyvolani'],
      details: [
        'Notifikace řešiteli o žádosti o doplnění informací',
        'Povinnost řešitele doplnit potřebné informace',
        'Po doplnění se hlasování vynuluje',
        'Proces hlasování se spustí od znovu',
        'Všichni hlasovatelé musí hlasovat znovu (i ti, kteří již hlasovali)'
      ]
    },
    {
      id: 'krok6-vyhodnoceni',
      title: 'Vyhodnocení',
      description: 'Systém automaticky vyhodnotí hlasování po odevzdání všech hlasů',
      role: 'system',
      type: 'task',
      next: ['krok7-pdf'],
      details: [
        'Automatické vyhodnocení po odevzdání všech hlasů',
        'Výpočet výsledků podle vah hlasů',
        'Kontrola kvóra (70%, výjimky 55%/87%)',
        'Určení výsledku: SCHVÁLENO/NESCHVÁLENO'
      ]
    },
    {
      id: 'krok7-pdf',
      title: 'Výsledek hlasování PDF',
      description: 'Systém vytvoří PDF dokument s výsledky hlasování a notifikuje tajemníka',
      role: 'system',
      type: 'task',
      next: ['krok8-zapisnice'],
      details: [
        'Vytvoření PDF dokumentu s obsahem:',
        '• Název tématu',
        '• Popis tématu',
        '• Výsledek hlasování jednotlivých hlasovatelů (procenta i počty bodů)',
        '• Zesumarizovaný výsledek s vyhodnocením SCHVÁLENO/NESCHVÁLENO',
        'Notifikace tajemníka o výsledku hlasování'
      ]
    },
    {
      id: 'krok8-zapisnice',
      title: 'Tvorba zápisnice z průběhu zasedání SR',
      description: 'Tajemník vytváří zápisnici a vkládá výsledky hlasování z období mezi zasedáními',
      role: 'secretary',
      type: 'task',
      next: ['krok9-schvaleni'],
      details: [
        'Vytvoření zápisnice z průběhu zasedání SR',
        'Vložení výsledků hlasování z období od poslední SR do aktuální SR',
        'Konkrétní výsledky jednotlivých témat',
        'Po vytvoření jde zápisnice na schválení všem členům správní rady'
      ]
    },
    {
      id: 'krok9-schvaleni',
      title: 'Schválení zápisnice',
      description: 'Všichni členové správní rady schvalují znění zápisnice bez rozlišení vah hlasů',
      role: 'board_member',
      type: 'task',
      next: ['krok10-podpis'],
      details: [
        'Schválení znění zápisnice všemi členy správní rady',
        'Nerozlišuje se váha jednotlivých hlasů',
        'Podmínkou je schválení všech členů SR',
        'Jednomyslné schválení zápisnice'
      ]
    },
    {
      id: 'krok10-podpis',
      title: 'Podpis zápisnice SR',
      description: 'Systém pošle schválenou zápisnici do Obelisk Signing Portal na podepsání předsednictvem',
      role: 'system',
      type: 'task',
      next: ['krok11-archivace'],
      details: [
        'Odeslání schválené zápisnice do Obelisk Signing Portal',
        'Podepsání předsednictvem správní rady:',
        '• D. Večeřa - předseda',
        '• P. Zálesák - podpředseda',
        'Elektronický podpis s právní platností'
      ]
    },
    {
      id: 'krok11-archivace',
      title: 'Archivace',
      description: 'Po podepsání se zápisnice uloží do archivu Obelisk Trusted Archive',
      role: 'system',
      type: 'end_event',
      next: [],
      details: [
        'Uložení podepsané zápisnice do Obelisk Trusted Archive',
        'Dlouhodobá archivace s právní platností',
        'Přístup k archivovaným dokumentům',
        'Kompletní auditní stopa procesu'
      ]
    }
  ]
};

export const contractApprovalProcess: ProcessDiagram = {
  id: 'contract-approval',
  name: 'Rozšíření TreeInfo o nové funkce',
  description: 'Rozšíření TreeInfo systému o nové knihovny a procesy pro schvalování správní radou',
  steps: [
    {
      id: 'step1-libraries',
      title: 'Vytvoření nových dokumentových knihoven',
      description: 'Vzniknou nové dokumentové knihovny - Správní rada a Archiv správní rada',
      role: 'system',
      type: 'task',
      next: ['step2-homepage'],
      details: [
        'Vytvoření nové dokumentové knihovny "Správní rada"',
        'Vytvoření nové dokumentové knihovny "Archiv správní rada"',
        'Nastavení oprávnění pro přístup k novým knihovnám',
        'Konfigurace metadat a sloupců podle požadavků',
        'Propojení s existujícími číselníky'
      ]
    },
    {
      id: 'step2-homepage',
      title: 'Rozšíření vyhledávání na HomePage',
      description: 'Vyhledávání na HomePage bude rozšířeno o záložku pro tento proces',
      role: 'system',
      type: 'task',
      next: ['step3-button-form'],
      details: [
        'Přidání nové záložky pro proces schvalování správní radou',
        'Rozšíření vyhledávacích funkcí o nové knihovny',
        'Integrace vyhledávání s novými dokumentovými knihovnami',
        'Testování funkcionality vyhledávání'
      ]
    },
    {
      id: 'step3-button-form',
      title: 'Nové tlačítko a formulář',
      description: 'Oprávněný uživatel novým tlačítkem "Schválení správní radou" založí nový spis',
      role: 'participant',
      type: 'task',
      next: ['step4-form-fields'],
      details: [
        'Přidání tlačítka "Schválení správní radou"',
        'Oprávněný uživatel může založit nový spis',
        'Formulář pro vyplnění dat nového spisu',
        'Nastavení oprávnění pro přístup k funkcionalitě',
        'Testování procesu vytváření nových spisů'
      ]
    },
    {
      id: 'step4-form-fields',
      title: 'Úprava polí formuláře',
      description: 'Formulář bude totožný s aktuálním formulářem s následujícími změnami',
      role: 'system',
      type: 'task',
      next: ['step5-content-types'],
      details: [
        'Formulář totožný s aktuálním formulářem u ostatních spisů',
        'Změny názvů polí:',
        '• Číslo smlouvy → Číslo',
        '• Předmět smlouvy → Předmět',
        '• Kategorie smlouvy → Kategorie (výchozí "Správní rada")',
        '• Instrukce pro právníka → Instrukce pro právníka/tajemníka',
        '• Instrukce pro účtárnu → zrušit toto pole',
        'Obsah polí zůstává beze změny včetně napojení na stejné číselníky'
      ]
    },
    {
      id: 'step5-content-types',
      title: 'Nastavení typů obsahu',
      description: 'Definice typů obsahu pro dokumenty správní rady',
      role: 'system',
      type: 'task',
      next: ['step6-approval-process'],
      details: [
        'Typy obsahu:',
        '• Návrh smlouvy',
        '• Smlouva k podpisu',
        '• Ostatní přílohy smlouvy',
        'Nastavení metadat pro každý typ obsahu',
        'Konfigurace workflow pro jednotlivé typy'
      ]
    },
    {
      id: 'step6-approval-process',
      title: 'Proces schvalování a archivace',
      description: 'Proces schvalování, připomínkování a podepisování bude stejný, archivace do nové knihovny',
      role: 'system',
      type: 'task',
      next: ['step7-testing-documentation'],
      details: [
        'Stejný proces schvalování jako u ostatních spisů',
        'Stejný proces připomínkování',
        'Stejný proces podepisování',
        'Archivace do nové knihovny "Archiv správní rada"',
        'Export do ASD - stejná DB tabulka jako pro spisy',
        'Prověření se Sefirou aktuálního stavu prostředí'
      ]
    },
    {
      id: 'step7-testing-documentation',
      title: 'Testování a dokumentace',
      description: 'Testování celého procesu OSP i OTA a vytvoření technické dokumentace',
      role: 'system',
      type: 'end_event',
      next: [],
      details: [
        'Testování celého procesu OSP (Obelisk Signing Portal)',
        'Testování celého procesu OTA (Obelisk Trusted Archive)',
        'Funkční testování všech nových funkcionalit',
        'Dokumentace pouze technického popisu integrací',
        'Samotný proces není potřeba dokumentovat (je totožný)',
        'Předpokládaná pracnost:',
        '• Vývoj a testování: 60 MHs',
        '• Dokumentace a režie: 15 MHs',
        '• Celkem: 75 MHs'
      ]
    }
  ]
};

export const universalApprovalProcess: ProcessDiagram = {
  id: 'universal-approval',
  name: 'Schvalování jakékoliv agendy správní radou',
  description: 'Detto ako bod I. ovsem moznost zalozeni samostatne typu dokumentu pro schvalovani spravni radou pres Treeinfo',
  steps: [
    {
      id: 'universal-step',
      title: 'Univerzální schvalování správní radou',
      description: 'Stejný proces jako elektronické hlasování (Point1-Point11) s možností založení samostatného typu dokumentu přes TreeInfo',
      role: 'participant',
      type: 'task',
      next: [],
      details: [
        'Proces je totožný s elektronickým hlasováním (Krok1-Krok11):',
        'Proces je totožný s elektronickým hlasováním (Krok1-Krok11):',
        '',
        'Krok1: Téma pro hlasování SR',
        'Krok2: Autorizace',
        'Krok3: Vyvolání hlasování SR',
        'Krok4: Hlasování',
        'Krok5: Doplnění',
        'Krok6: Vyhodnocení',
        'Krok7: Výsledek hlasování PDF',
        'Krok8: Tvorba zápisnice z průběhu zasedání SR',
        'Krok9: Schválení zápisnice',
        'Krok10: Podpis zápisnice SR',
        'Krok11: Archivace',
        '',
        'ROZŠÍŘENÍ:',
        'Možnost založení samostatného typu dokumentu pro schvalování správní radou přes TreeInfo:',
        '• Nový typ dokumentu v TreeInfo systému',
        '• Formulář pro univerzální agendy',
        '• Automatické přiřazení schvalovatelů',
        '• Integrace s hlasovacím procesem',
        '• Archivace do příslušných knihoven'
      ]
    }
  ]
};

export const processes = [electronicVotingProcess, contractApprovalProcess, universalApprovalProcess];