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
                <a href="#">Petice</a>
              </li>
              <li>
                <a href="#">Kde podepsat</a>
              </li>
              <li>
                <a href="/otevreny-dopis  ">Otevřený dopis</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main className="flex min-h-screen flex-col items-center justify-between p-24">

        {/* <section class="grid-cols-2 min-h-full relative">
          <Image
            src={'/alzbetiny-lazne.png'}
            alt="ALžbětiny lázně"
            layout="fill"
            className="blur-sm"
          />
      </section> */}

        <section className="h-50 py-10 flex flex-col w-[1000px] justify-center items-center gap-5">
          <div className="text-3xl">Podepište prosím petici</div>
          <div className="bg-gray text-center">
            Jste pro zachování objektu Alžbětiných lázní jako veřejného lázeňského a rehabilitačního zařízení v majetku a provozu Statutárního města Karlovy Vary bez jejich prodeje nebo pronájmu jiným subjektům?
          </div>
          <button className="bg-red-500 rounded-md inline-block w-[250px] h-[50px]"><span className="m-10 text-white font-semibold">Chci podepsat</span></button>
          <button className="bg-red-500 rounded-md inline-block w-[250px] h-[50px]"><span className="m-10 text-white font-semibold">Otevřený dopis
            <svg class="w-4 h-4 ms-2 rtl:rotate-180 inline-block" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </span></button>
        </section>
        <section className="flex flex-col justify-center items-center">
          <div className="text-3xl">Sběrná místa</div>
          {/* <div className="flex flex-row">
            <iframe style={{ border: 'none' }} src="https://en.frame.mapy.cz/s/purolofohu" width="400" height="280" frameborder="0"></iframe>
            Gastrocentrum Karlovy Vary s.r.o., gastroenterologická ordinace<br />
            Smetanovy sady 1145/1<br />
            Karlovy Vary <br />
            Každý den mezi 7:00-15:00
          </div> */}
          {/* <div className="flex flex-row">
            Ordinace praktického lékaře: MUDr.L Špidla <br />
            Nákladní 645/21<br />
            Karlovy Vary, Rybáře<br />
            <iframe style={{ border: 'none' }} src="https://en.frame.mapy.cz/s/cagusupero" width="400" height="280" frameborder="0"></iframe>
          </div>
          <div className="flex flex-row">
            <iframe style={{ border: 'none' }} src="https://en.frame.mapy.cz/s/hufarazehu" width="400" height="280" frameborder="0"></iframe>
            Ordinace praktického lékaře: MUDr. Alena Šimurdová <br />
            Vítězná 390/51<br />
            Karlovy Vary, Drahovice<br />
          </div>
          <div className="flex flex-row">
            Ordinace praktického lékaře: KV Medic s.r.o. - MUDr. Milena Skuhravá<br />
            Dělnická 932/5<br />
            Karlovy Vary, Rybáře<br />
            <iframe style={{ border: 'none' }} src="https://en.frame.mapy.cz/s/mabakesuka" width="400" height="280" frameborder="0"></iframe>
          </div> */}
{/* 
          <div className="flex flex-row">
            <iframe style={{ border: 'none' }} src="https://en.frame.mapy.cz/s/kobonefahu" width="400" height="280" frameborder="0"></iframe>
            Ordinace praktického lékaře: MUDr. Danuše Mikeschová<br />
            Školní 736/9<br />
            Karlovy Vary, Stará Role<br />
          </div>

          <div className="flex flex-row">
            Ordinace praktického lékaře: MUDr. Linda Davidová<br />
            Májová 196/1<br />
            Dalovice<br />
            <iframe style={{ border: 'none' }} src="https://en.frame.mapy.cz/s/cofoforubu" width="400" height="280" frameborder="0"></iframe>
          </div>

          <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <iframe style={{ border: 'none' }} src="https://en.frame.mapy.cz/s/hojufafage" width="400" height="280" frameborder="0"></iframe>

            <div class="flex flex-col justify-between p-4 leading-normal">
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Ordinace praktického lékaře: MUDr. Pavel Smutný<br />
                Vítězná 194/35<br />
                Karlovy Vary, Drahovice<br />
              </p>
            </div>
          </div>
          
           */}
          
          
          
          
          <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <iframe style={{ border: 'none' }} src="https://en.frame.mapy.cz/s/mabakesuka" width="400" height="280" frameborder="0"></iframe>

            <div class="flex flex-col justify-between p-4 leading-normal">
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Ordinace praktického lékaře: KV Medic s.r.o. - MUDr. Milena Skuhravá<br />
                Dělnická 932/5<br />
                Karlovy Vary, Rybáře<br />
              </p>
            </div>
          </div>

          <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <iframe style={{ border: 'none' }} src="https://en.frame.mapy.cz/s/kobonefahu" width="400" height="280" frameborder="0"></iframe>
            <div class="flex flex-col justify-between p-4 leading-normal">
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Ordinace praktického lékaře: MUDr. Danuše Mikeschová<br />
                Školní 736/9<br />
                Karlovy Vary, Stará Role<br />
              </p>
            </div>

          </div><div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <iframe style={{ border: 'none' }} src="https://en.frame.mapy.cz/s/cofoforubu" width="400" height="280" frameborder="0"></iframe>
            <div class="flex flex-col justify-between p-4 leading-normal">
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Ordinace praktického lékaře: MUDr. Linda Davidová<br />
                Májová 196/1<br />
                Dalovice<br />
              </p>
            </div>
          </div>
          <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <iframe style={{ border: 'none' }} src="https://en.frame.mapy.cz/s/hojufafage" width="400" height="280" frameborder="0"></iframe>

            <div class="flex flex-col justify-between p-4 leading-normal">
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Ordinace praktického lékaře: MUDr. Pavel Smutný<br />
                Vítězná 194/35<br />
                Karlovy Vary, Drahovice<br />
              </p>
            </div>
          </div>

          {/* <div>
            Na stáncích u následujících supermarketů:
            TODO
          </div> */}
        </section>
        {/* <section>
          Odkaz na peticni arch
        </section>
        <section>
          Město Karlovy Vary zvažuje prodej Alžbětiných lázní.
          Alžbětiny lázně jsou poslední veřejné lázně v majetku města. Jedná se o historickou budovu
          s neskutečným genius loci. Majestátní budova , která byla postavena našimi předky k poskytování
          lázeňských služeb. Budova, která si zaslouží být nadále opečovávaná a zvelebována městem pro příští
          generace. Bohužel do střetu se dostává historický význam Alžbětiných lázní a ekonomická realita
          dneška. Domnívám se , že spíše než snaha se Alžbětiných lázní zbavit jako ekonomické zátěže pro
          město je potřeba hledat její racionální využití. Karlovy Vary jsou lázněmi celosvětového významu,
          jsou zapsány v UNESCO a Alžbětiny lázně jsou poslední budovou v majetku města, kde město může
          nabídnout lázeňskou léčbu pro českou a zahraniční klientelu za přijatelných finančních podmínek.
          Prodejem této honosné budovy ztrácí město jakoukoliv možnost ovlivnit další využití této budovy.
          Historie nám ukázala, jak dopadly budovy lázní I, III, IV a VI, které ve své době fungovaly jako veřejné
          lázně. Namísto prodeje bych očekával od politické reprezentace předložit plán obnovy, klidně na
          mnoho let dopředu . Jistě to bude stát nesmírné úsilí a finanční prostředky, přesto je povinností
          občanů Karlových Varů majetek města zvelebovat a předat dalším generacím.
          Musíme mít vizi, jakou přidanou hodnotu jsme schopni předat příštím generacím ,byť to může stát i
          nemalé finanční prostředky. Čistě komerční pohled může být zhoubný pro celé Karlovy Vary a její
          lázeňský kredit.

          MUDr. Jiříí Štuksa
        </section>
        <section>
          Město Karlovy Vary zvažuje prodej Alžbětiných lázní
          Hlavním argumentem Města Karlovy Vary je , že do Alžbětinek musí ročně
          investovat peníze a proto se musí prodat .Proč neprodají KV Arenu kam ročně
          zahučí i přes sto miliónů z rozpočtu města,  a příkladů by bylo více.
          Alžbětiny lázně jsou poslední lázně v majetku města, které jsou veřejné , kde lze
          najít kompletní lázeňské procedury za přijatelnou cenu pro českou a zahraniční
          klientelu, kde je lékař balneolog, který procedury navrhne, kde  je rehabilitace,
          masáže, elektroléčba  atd. Vše pod jednou střechou, navíc specializace jako
          gastroenterolog, dětský gynekolog, neurolog,   atd.  Namísto hledání cesty jak zvýšit
          ziskovost ( např. obnovou balneoprovozu ) tak se hledá pravý opak.  Prodejem
          zanikne jakákoliv možnost ovlivnit nabízené služby. Zájem má prý Hilton,  k
          přestavbě na hotel  a hotel Pupp,který si z Alžbětinek chce udělat depandance pro
          svoji klientelu. Česká a zahraniční klientela bude mít útrum. Veřejné lázně
          v Karlových Varech již nebudou , vše bude privatizováno.
          Host,který přijede do Karlových Varů aby „okusil“ klasickou karlovarskou lázeňskou
          proceduru nebude mít možnost kam jít, leda by se ubytoval v drahých lázeňských
          hotelech, kde tyto služby nabízejí.
          Existují ekonomické rozvahy jak zajistit , aby provoz Alžbětiných lázní byl anebo by
          se alespoň blížil k černým číslům. Dlouhá desetiletí až do roku 2006 v černých
          číslech byl, kdy Alžbětiny lázně odevzdávaly peníze městu. Bohužel do toho přišel
          covid, pak energetická krize spojená s válkou na Ukrajině a z původních 5 miliónů
          ,které muselo město do toho každý rok investovat ( provozní náklady, náklady na
          mzdy zaměstnanců apod ) je z toho 15-20 miliónů především kvůli nárůstu cen
          energií.
          Ale poslední rok se náklady opět snižují, jednak došlo ke kompletní rekonstrukci a
          výměně všech oken, čímž se dosáhlo snížení energetické náročnosti o   bezmála 40
          % . Dochází opět k nárůstu  zisku z procedur v řádech statisíců, čili chybí vůle.
          Denně je recepce obležená cizinci a českou klientelou, která má procedury na
          pojišťovnu s 30% slevou. Namísto návrhu postupné obnovy Alžbětinek, klidně v řádu
          desítek let ( od revoluce uplynulo 35 let a jen se látaly díry ) tak se mluví o prodeji.
          Žádné firmě se to nemůže ekonomicky vrátit , lze provést změnu Alžbětinek z
          akciovky na příspěvkovou organizaci, tím lze dosáhnout na evropské dotace a
          postupně krok za krokem provést opravu a předat majetek příštím generacím.  Ale to
          je moc práce, úsilí, starostí a to bohužel v dnešní době moc nefrčí. Chceme jen za
          málo koupit a za draho prodat.
        </section>
        <section>
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
