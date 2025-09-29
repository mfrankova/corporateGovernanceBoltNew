# Systém hlasování a schvalování Správní rady
*Dokumentace procesů pro Správní radu a Valnou hromadu*

---

## CÍLE PROJEKTU

### Hlavní cíl řešení
Cílem je zavést elektronické hlasování a schvalování správní radou i valnou hromadou, rozšířit proces schvalování smluv o kroky rady a sjednotit vše do jednoho přehledného digitálního prostředí.

### Klíčové funkce systému

**Elektronické hlasování**
Bezpečný a transparentní systém pro hlasování správní rady i valné hromady s možností vzdálené účasti.

**Ověření identity**
Zajištění důvěryhodného hlasování díky ověření uživatele a uchování záznamu o průběhu.

**Schvalování smluv**
Rozšíření existujícího workflow o krok schválení správní radou, pokud je to vyžadováno.

**Jednotné schvalování**
Jednotné elektronické schvalovani spravni radou.

**Propojení procesů**
Zajištění návaznosti a přehlednosti vůči stávajícímu systému schvalování.

**Archivace**
Dlouhodobé uložení všech dokumentů a rozhodnutí.

### Přínosy
- Zrychlení schvalování a hlasování správní radou díky elektronizaci.
- Online dostupnost historie schvalování a hlasování správní radou.
- Přehlednost a jednoznačnost hlasování.

### Očekávaný dopad
- **75%** Zrychlení schvalování
- **100%** Digitální dostupnost
- **90%** Snížení chyb

---

## PROCESNÍ DIAGRAMY

### 1. Elektronické hlasování správní rady a hlasování valné hromady
*Kompletní workflow elektronického hlasování*

**Popis procesu:**
Detailní proces hlasování správní rady od vytvoření tématu až po archivaci zápisnice

**Klíčové charakteristiky:**
- Elektronické hlasování s váženými podíly členů
- Povinné schválení předsedou a místopředsedou
- Integrace s Obelisk pro elektronický podpis
- Kompletní auditní trail všech akcí
- Přístup k archivovaným dokumentům pro všechny členy

**Detailní kroky procesu:**

**Krok 1: Téma pro hlasování SR**
Řešitel vytvoří téma pro hlasování zadáním názvu tématu, stručného popisu a přiložením potřebných podkladů
- Zadání názvu tématu
- Stručný popis problematiky
- Přiložení potřebných podkladů
- Výběr příslušné správní rady

**Krok 2: Autorizace**
Tajemník SR bude notifikován o založení nové tématu pro hlasování SR a je vyžadována autorizace
- Kontrola relevantnosti tématu pro hlasování správní radou
- Kontrola kompletnosti všech potřebných informací
- Možné akce tajemníka:
  • Vyžádat si doplnění údajů (proces se vrací k řešiteli)
  • Zamítnout celé téma jako irelevantní
  • Potvrdit autorizaci tématu a vyvolat proces hlasování

**Krok 3: Vyvolání hlasování SR**
Tajemník vyvolá příslušné hlasování SR s automatickým doplněním schvalovatelů podle společnosti
- Rozlišení hlasování podle společnosti
- Automatické doplnění potřebných schvalovatelů
- Nastavení parametrů hlasování
- Spuštění hlasovacího procesu

**Krok 4: Hlasování**
Hlasovatelé jsou notifikováni pro vykonání hlasování s 7denní lhůtou a 4 možnostmi hlasování
- Notifikace hlasovatelů o novém hlasování
- Lhůta pro hlasování: 7 dní
- Notifikace 7. den: poslední možnost hlasování
- Notifikace tajemníka pro urgenci (telefonicky/osobně)
- Možnosti hlasování:
  • Souhlasím
  • Nesouhlasím
  • Zdržím se hlasování
  • Vrátit na doplnění
- Při volbě "Vrátit na doplnění":
  • Notifikace řešiteli o požadavku na doplnění
  • Informování ostatních hlasujících o požadavku

**Krok 5: Doplnění**
Řešitel doplní požadované informace, hlasování se vynuluje a spustí znovu
- Notifikace řešiteli o žádosti o doplnění informací
- Povinnost řešitele doplnit potřebné informace
- Po doplnění se hlasování vynuluje
- Proces hlasování se spustí od znovu
- Všichni hlasovatelé musí hlasovat znovu (i ti, kteří již hlasovali)

**Krok 6: Vyhodnocení**
Systém automaticky vyhodnotí hlasování po odevzdání všech hlasů
- Automatické vyhodnocení po odevzdání všech hlasů
- Výpočet výsledků podle vah hlasů
- Kontrola kvóra (70%, výjimky 55%/87%)
- Určení výsledku: SCHVÁLENO/NESCHVÁLENO

**Krok 7: Výsledek hlasování PDF**
Systém vytvoří PDF dokument s výsledky hlasování a notifikuje tajemníka
- Vytvoření PDF dokumentu s obsahem:
  • Název tématu
  • Popis tématu
  • Výsledek hlasování jednotlivých hlasovatelů (procenta i počty bodů)
  • Zesumarizovaný výsledek s vyhodnocením SCHVÁLENO/NESCHVÁLENO
- Notifikace tajemníka o výsledku hlasování

**Krok 8: Tvorba zápisnice z průběhu zasedání SR**
Tajemník vytváří zápisnici a vkládá výsledky hlasování z období mezi zasedáními
- Vytvoření zápisnice z průběhu zasedání SR
- Vložení výsledků hlasování z období od poslední SR do aktuální SR
- Konkrétní výsledky jednotlivých témat
- Po vytvoření jde zápisnice na schválení všem členům správní rady

**Krok 9: Schválení zápisnice**
Všichni členové správní rady schvalují znění zápisnice bez rozlišení vah hlasů
- Schválení znění zápisnice všemi členy správní rady
- Nerozlišuje se váha jednotlivých hlasů
- Podmínkou je schválení všech členů SR
- Jednomyslné schválení zápisnice

**Krok 10: Podpis zápisnice SR**
Systém pošle schválenou zápisnici do Obelisk Signing Portal na podepsání předsednictvem
- Odeslání schválené zápisnice do Obelisk Signing Portal
- Podepsání předsednictvem správní rady:
  • D. Večeřa - předseda
  • P. Zálesák - podpředseda
- Elektronický podpis s právní platností

**Krok 11: Archivace**
Po podepsání se zápisnice uloží do archivu Obelisk Trusted Archive
- Uložení podepsané zápisnice do Obelisk Trusted Archive
- Dlouhodobá archivace s právní platností
- Přístup k archivovaným dokumentům
- Kompletní auditní stopa procesu

### 2. Rozšíření schvalování smluv o schvalování správní radou
*Proces schvalování smluv s TreeInfo integrací*

**Popis procesu:**
Rozšíření TreeInfo systému o nové knihovny a procesy pro schvalování správní radou

**Klíčové charakteristiky:**
- Rozšíření stávajícího workflow o krok schválení správní radou
- Integrace s TreeInfo systémem
- Automatické přiřazení schvalovatelů podle společnosti
- Propojení s Obelisk pro elektronický podpis smluv
- Archivace v dokumentových knihovnách

**Detailní kroky procesu:**

**Krok 1: Vytvoření nových dokumentových knihoven**
Vzniknou nové dokumentové knihovny - Správní rada a Archiv správní rada
- Vytvoření nové dokumentové knihovny "Správní rada"
- Vytvoření nové dokumentové knihovny "Archiv správní rada"
- Nastavení oprávnění pro přístup k novým knihovnám
- Konfigurace metadat a sloupců podle požadavků
- Propojení s existujícími číselníky

**Krok 2: Rozšíření vyhledávání na HomePage**
Vyhledávání na HomePage bude rozšířeno o záložku pro tento proces
- Přidání nové záložky pro proces schvalování správní radou
- Rozšíření vyhledávacích funkcí o nové knihovny
- Integrace vyhledávání s novými dokumentovými knihovnami
- Testování funkcionality vyhledávání

**Krok 3: Nové tlačítko a formulář**
Oprávněný uživatel novým tlačítkem "Schválení správní radou" založí nový spis
- Přidání tlačítka "Schválení správní radou"
- Oprávněný uživatel může založit nový spis
- Formulář pro vyplnění dat nového spisu
- Nastavení oprávnění pro přístup k funkcionalitě
- Testování procesu vytváření nových spisů

**Krok 4: Úprava polí formuláře**
Formulář bude totožný s aktuálním formulářem s následujícími změnami
- Formulář totožný s aktuálním formulářem u ostatních spisů
- Změny názvů polí:
  • Číslo smlouvy → Číslo
  • Předmět smlouvy → Předmět
  • Kategorie smlouvy → Kategorie (výchozí "Správní rada")
  • Instrukce pro právníka → Instrukce pro právníka/tajemníka
  • Instrukce pro účtárnu → zrušit toto pole
- Obsah polí zůstává beze změny včetně napojení na stejné číselníky

**Krok 5: Nastavení typů obsahu**
Definice typů obsahu pro dokumenty správní rady
- Typy obsahu:
  • Návrh smlouvy
  • Smlouva k podpisu
  • Ostatní přílohy smlouvy
- Nastavení metadat pro každý typ obsahu
- Konfigurace workflow pro jednotlivé typy

**Krok 6: Proces schvalování a archivace**
Proces schvalování, připomínkování a podepisování bude stejný, archivace do nové knihovny
- Stejný proces schvalování jako u ostatních spisů
- Stejný proces připomínkování
- Stejný proces podepisování
- Archivace do nové knihovny "Archiv správní rada"
- Export do ASD - stejná DB tabulka jako pro spisy
- Prověření se Sefirou aktuálního stavu prostředí

**Krok 7: Testování a dokumentace**
Testování celého procesu OSP i OTA a vytvoření technické dokumentace
- Testování celého procesu OSP (Obelisk Signing Portal)
- Testování celého procesu OTA (Obelisk Trusted Archive)
- Funkční testování všech nových funkcionalit
- Dokumentace pouze technického popisu integrací
- Samotný proces není potřeba dokumentovat (je totožný)
- Předpokládaná pracnost:
  • Vývoj a testování: 60 MHs
  • Dokumentace a režie: 15 MHs
  • Celkem: 75 MHs

### 3. Schvalování jakékoliv agendy správní radou
*Univerzální proces pro všechny typy agend*

**Popis procesu:**
Detto ako bod I. ovsem moznost zalozeni samostatne typu dokumentu pro schvalovani spravni radou pres Treeinfo

**Klíčové charakteristiky:**
- Univerzální systém pro všechny typy agend
- Automatická kategorizace podle typu rozhodnutí
- Různá kvóra podle priority (55%, 70%, 87%)
- Flexibilní workflow pro různé typy rozhodnutí
- Monitoring implementace schválených rozhodnutí

**Detailní kroky procesu:**

**Univerzální schvalování správní radou**
Stejný proces jako elektronické hlasování (Point1-Point11) s možností založení samostatného typu dokumentu přes TreeInfo

Proces je totožný s elektronickým hlasováním (Krok1-Krok11):

Krok1: Téma pro hlasování SR
Krok2: Autorizace
Krok3: Vyvolání hlasování SR
Krok4: Hlasování
Krok5: Doplnění
Krok6: Vyhodnocení
Krok7: Výsledek hlasování PDF
Krok8: Tvorba zápisnice z průběhu zasedání SR
Krok9: Schválení zápisnice
Krok10: Podpis zápisnice SR
Krok11: Archivace

**ROZŠÍŘENÍ:**
Možnost založení samostatného typu dokumentu pro schvalování správní radou přes TreeInfo:
• Nový typ dokumentu v TreeInfo systému
• Formulář pro univerzální agendy
• Automatické přiřazení schvalovatelů
• Integrace s hlasovacím procesem
• Archivace do příslušných knihoven

---

## KROKY IMPLEMENTACE

### Téma 1: Hlasování představenstva/valné hromady
*Implementace elektronického hlasovacího systému pro správní rady a valné hromady*

**Krok 1: Analýza možností**
Analýza technických možností a požadavků pro hlasovací systém
• Analýza současného stavu procesů
• Definice funkčních požadavků
• Analýza integračních bodů
• Výběr technologické platformy (Dataverse vs SharePoint)
• Analýza licenčních nákladů

**Krok 2: Prezentace procesu**
Prezentace navrženého řešení stakeholderům
• Příprava prezentace pro vedení
• Prezentace procesních diagramů
• Schválení konceptu řešení
• Definice projektového týmu

**Krok 3: Vytvoření prostředí v PowerApps**
Nastavení vývojového a produkčního prostředí
• Vytvoření Dataverse prostředí
• Nastavení bezpečnostních rolí
• Konfigurace SharePoint knihoven
• Nastavení Power Automate flows

**Krok 4: Kódování procesu**
Vývoj aplikací a automatizace procesů
• Vývoj Canvas aplikace pro členy
• Vývoj administrátorské aplikace
• Implementace hlasovací logiky
• Vývoj výpočtů kvóra a vah hlasů
• Implementace notifikací

**Krok 5: Vytvoření uživatelských příruček**
Dokumentace pro koncové uživatele
• Příručka pro členy správní rady
• Příručka pro tajemníka
• Příručka pro předsedu/místopředsedu
• Video návody pro klíčové procesy

**Krok 6: Vytvoření technické dokumentace**
Technická dokumentace systému
• Architektura řešení
• Datový model
• API dokumentace
• Bezpečnostní model
• Provozní dokumentace

**Krok 7: Nákup licencí**
Zajištění potřebných licencí
• Vyhodnocení licenčních potřeb
• Nákup Dataverse per-app licencí
• Konfigurace licencí pro uživatele
• Monitoring využití kapacit

**Krok 8: Vytvoření konektoru pro export do Obelisku**
Integrace s Obelisk Signing Portal
• Analýza Obelisk API
• Vývoj integračního konektoru
• Testování elektronického podpisu
• Implementace archivace do OTA

**Krok 9: Testování**
Komplexní testování systému
• Unit testy jednotlivých komponent
• Integrační testování
• User Acceptance Testing (UAT)
• Zátěžové testování
• Bezpečnostní testování

**Krok 10: Nasazení do produkce**
Spuštění systému v produkčním prostředí
• Migrace dat do produkce
• Školení uživatelů
• Postupné nasazení (soft launch)
• Monitoring a podpora
• Vyhodnocení úspěšnosti

### Téma 2: Rozšíření TreeInfo o schválení představenstvem
*Integrace schvalovacího procesu do stávajícího TreeInfo systému*

**Krok 1: Analýza možností**
Analýza současného TreeInfo systému a možností rozšíření
• Analýza současného workflow v TreeInfo
• Identifikace integračních bodů
• Analýza datového modelu
• Definice nových požadavků

**Krok 2: Zadání pro dodavatele Aricoma**
Příprava specifikace pro externí dodavatele
• Vytvoření detailní specifikace
• Definice akceptačních kritérií
• Příprava testovacích scénářů
• Výběrové řízení dodavatele

**Krok 3: Harmonogram implementace Aricoma**
Plánování implementace s externím dodavatelem
• Vytvoření projektového plánu
• Definice milníků a deliverables
• Nastavení komunikačních kanálů
• Řízení rizik projektu

**Krok 4: Implementace**
Realizace rozšíření TreeInfo systému
• Vývoj nových funkcionalit
• Integrace s hlasovacím systémem
• Úprava uživatelského rozhraní
• Implementace workflow změn

**Krok 5: Testování**
Testování rozšířeného TreeInfo systému
• Funkční testování nových features
• Regresní testování stávajících funkcí
• Integrační testování s hlasovacím systémem
• User Acceptance Testing

**Krok 6: Nasazení a předání**
Nasazení do produkce a předání provozu
• Nasazení do produkčního prostředí
• Migrace dat a nastavení
• Školení administrátorů
• Předání dokumentace a podpory

### Téma 3: Schválení jakéhokoli jiného bodu programu představenstvem
*Univerzální schvalovací systém pro všechny typy agend správní rady*

**Krok 1: Analýza možností**
Analýza požadavků na univerzální schvalovací systém
• Kategorizace typů agend
• Analýza různých schvalovacích procesů
• Definice univerzálních pravidel
• Identifikace výjimek a specifik

**Krok 2: Prezentace procesu**
Prezentace univerzálního schvalovacího modelu
• Prezentace kategorizace agend
• Schválení univerzálních pravidel
• Definice výjimečných kvór
• Schválení implementačního plánu

**Krok 3: Rozšíření PowerApps prostředí**
Rozšíření stávajícího systému o univerzální funkcionalitu
• Rozšíření datového modelu
• Implementace kategorizační logiky
• Vývoj univerzálních workflow
• Konfigurace různých typů kvór

**Krok 4: Implementace univerzální logiky**
Vývoj flexibilního schvalovacího systému
• Implementace dynamických workflow
• Vývoj konfigurovatelných pravidel
• Implementace eskalačních procesů
• Vývoj reportingu a dashboardů

**Krok 5: Aktualizace dokumentace**
Rozšíření dokumentace o univerzální funkcionalitu
• Aktualizace uživatelských příruček
• Rozšíření technické dokumentace
• Vytvoření konfiguračních manuálů
• Příprava školících materiálů

**Krok 6: Pilotní testování**
Testování univerzálního systému na vybraných agenách
• Výběr pilotních agend
• Testování různých typů schvalování
• Validace konfigurovatelnosti
• Sběr zpětné vazby od uživatelů

**Krok 7: Postupné nasazení**
Postupné rozšíření na všechny typy agend
• Fázové nasazení podle kategorií
• Monitoring výkonnosti systému
• Průběžné optimalizace
• Kompletní nasazení univerzálního systému

---

## TECHNICKÉ SPECIFIKACE

### SPRÁVNÍ RADA

Existují následující (4) správní rady:
- správní rada mateřské společnosti NAY-DATART
- správní rada významné dceřské společnosti HPTronic Zlín
- správní rada významné dceřské společnosti NAY
- správní rada významné dceřské společnosti ETA

*Ostatní nevýznamné dceřské společnosti nemají správní rady.*

Členové správní rady pro mateřskou a významní dceřské společnosti jsou stejní s následující vahou hlasu:

| Člen | Procenta | Počet hlasů |
|------|----------|-------------|
| D. Večeřa | 14 % | 21.000 hlasů |
| P. Zálešák | 20 % | 30.000 hlasů |
| J. Tomáš | 13,34 % | 20.010 hlasů |
| K. Čejka | 6,66 % | 9.990 hlasů |
| P. Reš | 12 % | 18.000 hlasů |
| L. Kleinová | 34 % | 51.000 hlasů |
| **Celkem:** | **100 %** | **150.000 hlasů** |

**Usnášení schopné při 70% hlasů.**
**Přijetí rozhodnutí při schválení min. 70% hlasů.**

### VALNÁ HROMADA

Existují následující (4) valné hromady:
- valná hromada NAY
- valná hromada HPTronic Zlín
- valná hromada ETA
- valná hromada NAY-DATART

**Valné hromady NAY, HPTronic Zlín a ETA nemají hlasování.**
Mají jen schvalování rozhodnutí akcionářem, čiže představenstvem NAY-DATART (D. Večeřa + P. Zálešák).

Valná hromada NAY-DATART hlasuje následovně:

| Společnost | Procenta | Zastoupení |
|------------|----------|------------|
| HP Invest | 50,23 % | D. Večeřa |
| Internet Retail | 16,43 % | D. Večeřa + (P. Res nebo K. Čejka) |
| Telus Holding | 20,004 % | P. Zálešák |
| Jtcc Holding | 13,336 % | J. Tomáš |

**Usnášení schopné při 80% hlasů.**
**Rozhodování vyhrazených záležitostí I. kvórum - 70% hlasů**
**Rozhodování vyhrazených záležitostí II. kvórum - 87% hlasů**

### Volba platformy pro elektronické hlasování a schvalování (SR/VH)

**Nejde jen o to, kam data uložit.** U hlasování (SR/VH) potřebujeme bezpečnost, auditovatelnost, spolehlivost výpočtů a škálování. Dataverse je podniková datová platforma Power Platform (cloud, low-code). Umožní nám stavět řešení, která jsou právně obhajitelná a dlouhodobě udržitelná. SharePoint Lists je skvělý pro jednodušší týmové scénáře a soubory – ale jako „jádro" hlasování má limity (delegace, výkon, granularita práv).

#### Volba jádra: dvě cesty

**Cesta A: SharePoint Lists + Power Apps/Automate**
- Hlavní výhoda: Nízké vstupní náklady (v rámci M365), rychlý start
- Hlavní riziko/limit: Workaroundy (složitější výpočty přes Flow/klienta), limity delegace/škálování, zabezpečení a audit je nutné „dostavět"

**Cesta B: Dataverse + Power Apps/Automate**
- Hlavní výhoda: Server-side logika, relační model, row/field-level security, audit out-of-the-box, lepší výkon a integrace
- Hlavní riziko/limit: Prémiové licence (per-app „from $5"/uživatel/app/prostředí), základní kapacitní plánování

**Pointa:** Dataverse není jen „databáze". Je to „table as a service" s pravidly, výpočty, metadaty, bezpečností a auditem „z krabice". To je pro hlasování klíčové.

#### Strategie s nejnižším TCO (Total Cost of Ownership)

**Doporučujeme „model 2 aplikací"** – podnikové schapnosti tam, kde jsou nutné, a nízké licence pro většinu uživatelů:

**Aplikace pro členy (SharePoint, bez Premium)**
• Založení tématu
• Odevzdání hlasu
• Zobrazení historie a výsledků
• Dokumenty v SP knihovnách

**Aplikace pro tajemníka/administrátora (Dataverse, Premium)**
• Autorizace a vyvolání hlasování
• Výpočty kvora/vah
• Auditní stopa
• Seznamy členů a rad
• Premium licence pro 2–3 osoby
• Synchronizace SP ↔ DV (GUID klíče)

**Výsledek:** Kritické výpočty a audit běží na Dataverse, většina uživatelů zůstává bez prémiových licencí. Dlouhodobě nižší provozní riziko i technický dluh.

#### PDF výstupy

Pro formální, archivovatelné dokumenty jsou důležité správné hlavičky/patičky, stránkování a spolehlivost.

**Word šablona → PDF (prémiový konektor)**
Nejkvalitnější výstup, plná kontrola layoutu; Premium se spotřebuje jen na servisní/tajemnický účet.

**Alternativy bez Premium (použitelné jen pro neformální/rychlé výstupy):**
A) HTML → OneDrive „Convert file" → PDF (může selhávat u složitých layoutů)
B) Tisk obrazovky z Power Apps (rychlé, ale slabé vícestránkování, bez pevných hlaviček/patiček)
C) Spuštění prémiového konektoru pro tvorbu PDF mimo aplikaci (přes prémiový účet vývojáře) - trvá přibližně 1–2 minuty

*Přílohy a PDF soubory ukládáme do SharePoint knihoven (levné úložiště); Dataverse drží metadata a odkazy.*

#### Licencování a kapacita

**Licencování**
Per-app licence: uváděno „from $5" / uživatel / app / prostředí (např.: produční). Cenu a alokaci ověříme s naším partnerem (Aricoma).

**Kapacita**
Kapacita Dataverse (DB/File/Log): při několika hlasováních ročně a „nižších tisících" záznamů jsme bez rizika; velké soubory držíme v SharePointu.

#### Co přesně získáme s Dataverse

**Bezpečnost:** role, row/field-level oprávnění
**Audit:** kdo-co-kdy
**Spolehlivost výpočtů:** kvóra, váhy na serveru (ne v klientovi)
**Škálování a výkon:** složitější dotazy bez workaroudy
**ALM & integrace:** Solutions, prostředí Dev/Prod, nativní Power Platform konektor

**Závěr:** Chceme-li právně obhajitelné hlasování s auditní stopou a spolehlivými výpočty, volíme Dataverse jako datové jádro. Díky chytrému licencování a SharePointu pro soubory držíme náklady nízko a zároveň budujeme podnikové řešení bez technického dluhu.

---

## OTEVŘENÉ OTÁZKY

### 1. ETA Slovakia správní rada
**Otázka:** Existuje ještě správní rada společnosti ETA Slovakia. Je nutné řešit také správní radu této společnosti nebo půjde do zániku a není nutné řešit?

**Kontext:** Potřebujeme objasnit, zda má ETA Slovakia vlastní správní radu a zda ji zahrnout do systému, nebo zda společnost půjde do likvidace.

**Priorita:** KRITICKÁ

### 2. Výjimečné hlasování
**Otázka:** Občas nastávají mimořádné situace, kdy je povolena výjimka. Pro přijetí rozhodnutí postačuje 55 %, případně 87 % hlasů. Je nutno i tento typ hlasování řešit systémově?

**Kontext:** Standardní kvórum je 70%, ale existují výjimky s 55% a 87%. Potřebujeme definovat, kdy se tyto výjimky aplikují a jak je systémově implementovat.

**Priorita:** DŮLEŽITÁ

### 3. Dozorčí rada
**Otázka:** Budeme řešit hlasování ohledně "dozorčí rady"? (M. Kupcová - předseda, K. Čejka - podpředseda, L. Kleinová - člen)

**Kontext:** Je potřeba objasnit, zda dozorčí rada bude také používat systém elektronického hlasování a jaké jsou její specifické požadavky.

**Priorita:** DŮLEŽITÁ

### 4. Strategický board
**Otázka:** Budeme řešit hlasování ohledně "strategického boardu"?

**Kontext:** Je potřeba definovat, zda strategický board bude součástí systému a jaké má specifické požadavky na hlasování a schvalování.

**Priorita:** CLARIFIKACE

**Poznámka:** Tyto otázky je potřeba vyřešit před finální implementací systému. Kritické otázky blokují vývoj, důležité ovlivňují funkcionalitu, clarifikace pomohou s optimalizací.

---

*Dokument vytvořen pro úpravu textů webu. Po úpravách prosím předejte zpět pro implementaci změn.*