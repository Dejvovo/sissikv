import Image from "next/image";

export default function Home() {
  return (

    <div>
      <nav class="bg-white border-gray-200">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
          </a> */}
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white   dark:border-gray-700">
              <li>
                <a href="/">Petice</a>
              </li>
              <li>
                <a href="/">Kde podepsat</a>
              </li>
              <li>
                <a href="#">Otevřený dopis</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {/* !!!! Původní text !!!  */}
        {/* <section>
          Otevřený dopis - Město Karlovy Vary zvažuje prodej Alžbětiných lázní
          Na podzim 2023 na zasedání Zastupitelstva Města Karlovy Vary paní primátorka
          ing.Andrea Pfeffer Ferklová,MBA přednesla svůj návrh prodat či pronajmout
          Alžbětiny lázně investorovi, kterým má být hotelový řetězec HILTON se záměrem
          vybudovat hotelové zařízení.
          Tento záměr je místními občany i veřejností v rámci Karlovarského kraje vnímán
          velmi negativně.
          Alžbětiny Lázně a.s. jsou poslední veřejné lázně v majetku města, kde je
          poskytována péče balneologická , specializovaná péče rehabilitační , specializovaná
          lékařská odborná péče a to především pro občany Karlovarského kraje. Ambulance
          tu mají lékař balneolog, gastroenterolog, neurolog, gynekolog pro dospělé, dětský
          gynekolog , lékař ultrazvukové diagnostiky a lékař estetické mediciny. To vše utváří
          charakter zdravotnického zařízení jakožto lázeňské polikliniky dostupné pro českou
          a zahraniční klientelu . Prodejem Alžbětiných lázní zanikne jakákoliv možnost ovlivnit
          nabízené služby. Veřejné lázně v Karlových Varech již nebudou , vše bude
          privatizováno. Host,který přijede do Karlových Varů aby „okusil“ klasickou
          karlovarskou lázeňskou proceduru nebude mít možnost kam jít, leda by se ubytoval
          v několika drahých lázeňských hotelech, kde tyto služby nabízejí. Ostatní hotely, kde
          tyto lázeňské služby nemají, budou mít smůlu.
          Hlavním argumentem Města Karlovy Vary je , že do Alžbětinek musí ročně
          investovat peníze a proto se musí prodat . Klademe si otázku proč město Karlovy
          Vary neprodá KV Arenu kam ročně investuje i přes sto miliónů z rozpočtu
          města. Příkladů by bylo více.
          Existují ekonomické rozvahy a projekt jak zajistit , aby provoz Alžbětiných lázní byl
          anebo by se alespoň blížil k černým číslům. Dlouhá desetiletí až do roku 2006
          v černých číslech byl, kdy Alžbětiny lázně odevzdávaly peníze městu. Bohužel přišel
          covid, pak energetická krize spojená s válkou na Ukrajině a z původních 5 miliónů
          ,které muselo město do Alžbětinek každý rok investovat ( provozní náklady, náklady
          na mzdy zaměstnanců apod ) je z toho 15-20 miliónů především kvůli nárůstu cen
          energií.
          Ale poslední rok se náklady opět snižují, jednak došlo ke kompletní rekonstrukci a
          výměně všech oken, čímž se dosáhlo snížení energetické náročnosti budovy o
          bezmála 40 % . Dochází opět k nárůstu  zisku z procedur v řádech statisíců. Denně
          je recepce obležená cizinci a českou klientelou, která má hrazené procedury se
          slevou 30% ze strany plátců veřejného zdravotního pojištění ( jako bonus ),
          popřípadě je má zcela hrazeny pokud je léčba nebo procedura indikována
          praktickým lékařem nebo ambulantním specialistou.
          Navíc není v provozu vodoléčba, kde existuje ekonomická rozvaha návratnosti
          rekonstrukce během 3 let. I zde leží nevyužitý potenciální zdroj zisku . Čili chybí
          politická vůle.

          Namísto návrhu postupné obnovy Alžbětinek, klidně v řádu desítek let ( od revoluce
          uplynulo 35 let a jen se látaly díry ) tak se mluví o prodeji. Žádné firmě se to nemůže
          ekonomicky vrátit. Lze provést změnu Alžbětinek z akciovky na příspěvkovou
          organizaci, tím lze dosáhnout na evropské dotace a postupně krok za krokem
          provést opravu a předat majetek příštím generacím.
          Paradoxem zůstává, že se Karlovy Vary honosí členstvím v UNESCO a jsou členem
          tzv. lázeňského trojúhelníku kam spadají Františkovy Lázně a Mariánské Lázně. A
          nyní je primátorkou přednesen návrh zbavit se posledních veřejných lázní
          v Karlových Varech.
          Wellness pobyty umí nabídnout kde kdo, ale Karlovy Vary jsou lázně celosvětového
          významu anebo ne ? Quo Vadis lázeňské město Karlovy Vary ?

          MUDr.Maulenová MUDr.Štuksa Mgr. Šťastný ( bude-li souhlasit )
        </section> */}
        <div class="flex items-center justify-center min-h-screen bg-gray-100">
          <div class="max-w-3xl bg-white p-8 shadow-lg rounded-lg">
            <div class="font-serif text-gray-800 leading-relaxed">
              <p class="text-right mb-8">15.8.2024</p>

              <p class="mb-4">Otevřený dopis - Město Karlovy Vary,</p>

              <p class="mb-4">
                Město Karlovy Vary zvažuje prodej Alžbětiných lázní.
                Na podzim 2023 na zasedání Zastupitelstva Města Karlovy Vary paní primátorka
                ing.Andrea Pfeffer Ferklová, MBA přednesla svůj návrh prodat či pronajmout
                Alžbětiny lázně investorovi, kterým má být hotelový řetězec HILTON se záměrem
                vybudovat hotelové zařízení.
              </p>

              <p class="mb-4">
                Tento záměr je místními občany i veřejností v rámci Karlovarského kraje vnímán
                velmi negativně.
              </p>

              <p class="mb-4">

                Alžbětiny Lázně a.s. jsou poslední veřejné lázně v majetku města, kde je
                poskytována péče balneologická, specializovaná péče rehabilitační, specializovaná
                lékařská odborná péče a to především pro občany Karlovarského kraje. Ambulance
                tu mají lékař balneolog, gastroenterolog, neurolog, gynekolog pro dospělé, dětský
                gynekolog, lékař ultrazvukové diagnostiky a lékař estetické mediciny. To vše utváří
                charakter zdravotnického zařízení jakožto lázeňské polikliniky dostupné pro českou
                a zahraniční klientelu. Prodejem Alžbětiných lázní zanikne jakákoliv možnost ovlivnit
                nabízené služby. Veřejné lázně v Karlových Varech již nebudou, vše bude
                privatizováno. Host,který přijede do Karlových Varů aby „okusil“ klasickou
                karlovarskou lázeňskou proceduru nebude mít možnost kam jít, leda by se ubytoval
                v několika drahých lázeňských hotelech, kde tyto služby nabízejí. Ostatní hotely, kde
                tyto lázeňské služby nemají, budou mít smůlu.
              </p>

              <p class="mb-4">
                Hlavním argumentem Města Karlovy Vary je, že do Alžbětinek musí ročně
                investovat peníze a proto se musí prodat. Klademe si otázku proč město Karlovy
                Vary neprodá KV Arenu kam ročně investuje i přes sto miliónů z rozpočtu
                města. Příkladů by bylo více.
              </p>
              <p class="mb-4">
                Existují ekonomické rozvahy a projekt jak zajistit, aby provoz Alžbětiných lázní byl
                anebo by se alespoň blížil k černým číslům. Dlouhá desetiletí až do roku 2006
                v černých číslech byl, kdy Alžbětiny lázně odevzdávaly peníze městu. Bohužel přišel
                covid, pak energetická krize spojená s válkou na Ukrajině a z původních 5 miliónů,
                které muselo město do Alžbětinek každý rok investovat ( provozní náklady, náklady
                na mzdy zaměstnanců apod ) je z toho 15-20 miliónů především kvůli nárůstu cen
                energií.
              </p>
              <p class="mb-4">
                Ale poslední rok se náklady opět snižují, jednak došlo ke kompletní rekonstrukci a
                výměně všech oken, čímž se dosáhlo snížení energetické náročnosti budovy o
                bezmála 40 %. Dochází opět k nárůstu  zisku z procedur v řádech statisíců. Denně
                je recepce obležená cizinci a českou klientelou, která má hrazené procedury se
                slevou 30% ze strany plátců veřejného zdravotního pojištění ( jako bonus ),
                popřípadě je má zcela hrazeny pokud je léčba nebo procedura indikována
                praktickým lékařem nebo ambulantním specialistou.
              </p>
              <p class="mb-4">
                Navíc není v provozu vodoléčba, kde existuje ekonomická rozvaha návratnosti
                rekonstrukce během 3 let. I zde leží nevyužitý potenciální zdroj zisku. Čili chybí
                politická vůle.
              </p>
              <p class="mb-4">
                Namísto návrhu postupné obnovy Alžbětinek, klidně v řádu desítek let ( od revoluce
                uplynulo 35 let a jen se látaly díry ) tak se mluví o prodeji. Žádné firmě se to nemůže
                ekonomicky vrátit. Lze provést změnu Alžbětinek z akciovky na příspěvkovou
                organizaci, tím lze dosáhnout na evropské dotace a postupně krok za krokem
                provést opravu a předat majetek příštím generacím.
                Paradoxem zůstává, že se Karlovy Vary honosí členstvím v UNESCO a jsou členem
                tzv. lázeňského trojúhelníku kam spadají Františkovy Lázně a Mariánské Lázně. A
                nyní je primátorkou přednesen návrh zbavit se posledních veřejných lázní
                v Karlových Varech.
              </p>
              <p class="mb-4">
                Wellness pobyty umí nabídnout kde kdo, ale Karlovy Vary jsou lázně celosvětového
                významu anebo ne ? Quo Vadis lázeňské město Karlovy Vary ?
              </p>

              <p class="mt-8">Podepsáni: </p>
              <p>MUDr.Maulenová, MUDr.Štuksa</p>
            </div>
          </div>
        </div>

        <footer>
          <div className="flex justify-between">
            <button
              type="button"
              data-twe-ripple-init
              data-twe-ripple-color="light"
              class="mb-2 inline-block rounded bg-[#1877f2] px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
              <span class="[&>svg]:h-4 [&>svg]:w-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 320 512">
                  <path
                    d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                </svg>
              </span>
            </button>

            <button
              type="button"
              data-twe-ripple-init
              data-twe-ripple-color="light"
              class="mb-2 inline-block rounded bg-[#c13584] px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
              <span class="[&>svg]:h-4 [&>svg]:w-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 448 512">
                  <path
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </span>
            </button>
          </div>
        </footer>
      </main>
    </div>
  );
}
