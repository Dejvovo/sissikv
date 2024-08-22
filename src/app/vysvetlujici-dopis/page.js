export default function Home() {
  return (


    <div className="bg-customWhite scroll-smooth">
      <nav class=" border-gray-200">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div class="w-full block" id="navbar-default">
            <ul class="font-medium flex p-0  border-gray-100 rounded-lg flex-row space-x-8 rtl:space-x-reverse mt-0 border-0   dark:border-gray-700">
              <li>
                <a href="/">Petice</a>
              </li>
              <li>
                <a href="/#mista-k-podpisu">Místa k podpisu</a>
              </li>
              <li>
                <a href="/vysvetlujici-dopis">Vysvětlující text</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-customWhite">
        <div class="flex items-center justify-center min-h-screen bg-gray-100">
          <div class="max-w-3xl bg-white p-8 shadow-lg rounded-lg">
            <div class="font-serif text-gray-800 leading-relaxed">
              <p class="text-right mb-8">Karlovy Vary, 20.8.2024</p>
              <p className="mb-4 text-center text-2xl">
                Město Karlovy Vary zvažuje prodej Alžbětiných lázní
              </p>

              <p className="mb-4">
                Na podzim 2023 na zasedání zastupitelstva města Karlovy Vary paní primátorka Ing. Andrea Pfeffer Ferklová, MBA, přednesla návrh prodat či pronajmout Alžbětiny lázně hotelovému řetězci HILTON, který by zde chtěl vybudovat hotelové zařízení. Tento záměr je mezi místními obyvateli a veřejností v Karlovarském kraji vnímán velmi negativně.
              </p>
              <p className="mb-4">
                Alžbětiny lázně, a.s., jsou poslední veřejné lázně ve vlastnictví města, které poskytují balneologickou péči, specializovanou rehabilitační péči a odbornou lékařskou péči, zejména pro občany Karlovarského kraje. V prostorách lázní působí lékaři specializovaní na balneologii, gastroenterologii, neurologii, gynekologii (pro dospělé i děti), ultrazvukovou diagnostiku a estetickou medicínu. Toto vše vytváří charakter lázeňské polikliniky, která je dostupná české i zahraniční klientele. Prodejem Alžbětiných lázní by město ztratilo možnost ovlivňovat nabízené služby. Veřejné lázně v Karlových Varech by přestaly existovat a všechny služby by byly privatizovány. Hosté, kteří by chtěli zažít tradiční karlovarské lázeňské procedury, by museli využít drahých lázeňských hotelů, které tyto služby nabízejí. Ostatní hotely, které takové služby nemají, by byly znevýhodněny.
              </p>
              <p className="mb-4">
                Hlavním argumentem města Karlovy Vary je, že roční investice do Alžbětiných lázní jsou příliš vysoké, a proto je nutné lázně prodat. Proč město neprodá KV Arenu, do které investuje ročně přes sto milionů korun? Podobných příkladů by se našlo více.
              </p>
              <p className="mb-4">
                Ve spolupráci s VŠE byl vytvořen ekonomický koncept financování Alžbětiných lázní, který ukázal, že provoz tohoto zařízení nemusí být ztrátový. Až do roku 2006 Alžbětiny lázně odevzdávaly městu peníze. Bohužel provozní podmínky se v následujících letech zásadně zhoršily (pokles klientely z hotelu Thermal v roce 2008, pandemie COVID-19, energetická krize spojená s válkou na Ukrajině), a náklady města na provoz lázní vzrostly z původních 5 milionů na 15–20 milionů korun ročně, především kvůli růstu cen energií.
              </p>

              <p className="mb-4">
                V letošním roce se situace zlepšuje, náklady klesají i díky kompletní rekonstrukci a výměně oken, což snížilo energetickou náročnost budovy o téměř 40 %. Rovněž dochází k výraznému nárůstu tržeb od samoplátců. Denně je recepce plná zahraničních i českých klientů, jak samoplátců, tak i těch, kteří čerpají služby hrazené zdravotními pojišťovnami.
              </p>
              <p className="mb-4">
                Místo návrhu na postupnou obnovu Alžbětiných lázní, i kdyby to trvalo desítky let (od revoluce uběhlo 35 let a dosud se jen „látaly díry“), se uvažuje o jejich prodeji. Ekonomická návratnost pro investora však není zaručena.
              </p>
              <p className="mb-4">
                Bohužel se nerealizoval návrh na změnu právní formy Alžbětiných lázní z akciové společnosti na příspěvkovou organizaci, což by usnadnilo přístup k evropským dotacím a umožnilo postupnou opravu objektu, aby mohl být předán dalším generacím. Navíc několik let zůstává nevyužitý prostor bývalé vodoléčby, přestože existuje ekonomická analýza, která předpokládá návratnost rekonstrukce během tří let. Tento potenciální zdroj zisku je tak nevyužitý.              </p>
              <p className="mb-4">
                Paradoxem je, že Karlovy Vary se pyšní členstvím v UNESCO a jsou součástí tzv. lázeňského trojúhelníku, kam patří také Františkovy Lázně a Mariánské Lázně. Přesto primátorka navrhuje zbavit se posledních veřejných lázní v Karlových Varech.              </p>
              <p className="mb-4">
                Wellness pobyty umí nabídnout mnoho míst, ale Karlovy Vary jsou lázně světového významu, nebo snad ne? Quo vadis, lázeňské město Karlovy Vary?
              </p>
              <p class="mt-8">Podepsáni: </p>
              <p>MUDr. Jiří Štuksa, MUDr. Stanislava Maulenová, Mgr. Petr Šťastný
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
