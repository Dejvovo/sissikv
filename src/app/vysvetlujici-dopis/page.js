import Image from "next/image";

export default function Home() {
  return (

    <div>
      <nav class="bg-customWhite border-gray-200">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-customWhite md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0   dark:border-gray-700">
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
              Na podzim 2023 na zasedání zastupitelstva města Karlovy Vary paní primátorka 
              Ing. Andrea Pfeffer Ferklová, MBA přednesla svůj návrh prodat či pronajmout Alžbětiny
              lázně investorovi, kterým má být hotelový řetězec HILTON se záměrem vybudovat
              hotelové zařízení.
              </p>
              <p className="mb-4">
              Tento záměr je místními občany i veřejností v rámci Karlovarského kraje vnímán
              velmi negativně.
              </p>
              <p className="mb-4">
              Alžbětiny Lázně a.s. jsou poslední veřejné lázně v majetku města, kde je
              poskytována péče balneologická , specializovaná péče rehabilitační specializovaná
              lékařská odborná péče a to především pro občany Karlovarského kraje. Ambulance
              tu mají lékař balneolog, gastroenterolog, neurolog, gynekolog pro dospělé, dětský
              gynekolog , lékař ultrazvukové diagnostiky a lékař estetické medicíny. To vše utváří
              charakter zdravotnického zařízení jakožto lázeňské polikliniky dostupné pro českou
              a zahraniční klientelu . Prodejem Alžbětiných lázní zanikne jakákoliv možnost ovlivnit
              nabízené služby. Veřejné lázně v Karlových Varech již nebudou, vše bude
              privatizováno. Host,který přijede do Karlových Varů aby „okusil“ klasickou
              karlovarskou lázeňskou proceduru nebude mít možnost kam jít, leda by se ubytoval
              v několika drahých lázeňských hotelech, kde tyto služby nabízejí. Ostatní hotely, kde
              tyto lázeňské služby nemají, budou mít smůlu.
              </p>
              <p className="mb-4">
              Hlavním argumentem Města Karlovy Vary je, že do Alžbětinek musí ročně investovat
              peníze a proto se musí prodat. Klademe si otázku proč město Karlovy Vary neprodá
              KV Arenu kam ročně investuje i přes sto miliónů z rozpočtu města. Příkladů by bylo
              více.
              </p>
              <p className="mb-4">
              Ve spolupráci s VŠE byl vytvořen ekonomický koncept financování  Alžbětiných lázní,
              který ukázal, že provoz tohoto zařízení nemusí být prodělečný.  Dlouhá desetiletí
              až do roku 2006 Alžbětiny lázně odevzdávaly peníze městu. Bohužel následovaly
              zásadní komplikace provozu ( útlum klientů z Thermalu, v r. 2008 / do té doby 80%
              obratu/, následně pandemie Covid 19 , pak energetická krize spojená s válkou na
              Ukrajině a z původních 5 miliónů ,které muselo město do Alžbětinek každý rok
              investovat ( provozní náklady, náklady na mzdy zaměstnanců apod ) narostly na 15-
              20 miliónů (především z důvodu nárůstu cen energií.)
              </p>
              <p className="mb-4">
              V letošním roce se situace zlepšuje, náklady se snižují, také díky kompletní
              rekonstrukci a výměně všech oken, čímž se dosáhlo snížení energetické náročnosti
              budovy o bezmála 40 %. Dochází opět k výraznému nárůstu tržeb od samoplátců.
              Denně je recepce obležená cizinci i českou klientelou, samopláteckou a klienty
              zdravotních pojišťoven, kteří čerpají hrazenou rehabilitační léčbu.
              Namísto návrhu postupné obnovy Alžbětinek, klidně v řádu desítek let ( od revoluce
              uplynulo 35 let a jen se “látaly díry“ ), tak se mluví o prodeji. Žádné firmě se to
              nemůže ekonomicky vrátit.
              </p>
              <p className="mb-4">
              Bohužel se nerealizoval návrh provést změnu právní formy z akciovky na
              příspěvkovou organizaci, tím by se snadněji dosáhlo na evropské dotace a postupně
              krok za krokem by se mohla provést oprava a předat majetek příštím generacím.
              Navíc několik let není vyžit prostor bývalé vodoléčby, kde existuje ekonomická
              rozvaha návratnosti rekonstrukce během 3 let, tj. i zde leží nevyužitý potenciální
              zdroj zisku.
              </p>
              <p className="mb-4">
              Paradoxem zůstává, že se Karlovy Vary honosí členstvím v UNESCO a jsou členem
              tzv. lázeňského trojúhelníku, kam patří Františkovy Lázně a Mariánské Lázně.
              A přesto je primátorkou přednesen návrh zbavit se posledních veřejných lázní
              v Karlových Varech !
              </p>

              <p className="mb-4">
              Wellness pobyty umí nabídnout kde kdo, ale Karlovy Vary jsou lázně celosvětového
              významu anebo ne?
              Quo Vadis , lázeňské město Karlovy Vary?
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
