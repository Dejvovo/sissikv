'use client'
import Link from 'next/link'


export default function Home() {
  return (

    <div className="bg-customWhite scroll-smooth">
      <nav class=" border-gray-200">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div class="w-full block" id="navbar-default">
            <ul class="font-medium flex p-0  border-gray-100 rounded-lg flex-row space-x-8 rtl:space-x-reverse mt-0 border-0   dark:border-gray-700">
              <li>
                <a href="#">Petice</a>
              </li>
              <li>
                <a href="#mista-k-podpisu">Podpisová místa</a>
              </li>
              <li>
                <a href="/vysvetlujici-dopis">Vysvětlující text</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[url('/alzbetiny-lazne.jpg')] bg-no-repeat bg-contain">
        <section className="min-h-screen flex flex-col w-screen md:w-full justify-normal items-center gap-5">
          <div className="bg-red-500 items-center text-center py-5 opacity-90 text-customWhite font-semibold rounded-md">
            <div className="text-3xl">Podepište prosím petici</div>
            <div className="">
              Podepište prosím petici na podporu zachování Alžbětiných lázní v Karlových Varech. Chcete, aby tento objekt zůstal ve vlastnictví a správě města jako veřejné lázeňské a rehabilitační zařízení, aniž by byl prodán nebo pronajat jiným subjektům? Pokud ano, připojte svůj podpis a podpořte zachování této cenné služby pro veřejnost.
            </div>
          </div>
          <a className="bg-red-500 flex content-center items-center text-center  opacity-90 rounded-md w-[250px] h-[50px]" href="#mista-k-podpisu"><span className="inline-block w-full text-customWhite font-semibold">Podepsat fyzicky</span></a>
          <Link className="bg-customBlue flex items-center justify-center text-center opacity-90 rounded-md w-[250px] h-[50px] text-customWhite font-semibold" href={'/vysvetlujici-dopis'}>Vysvětlující text
            <svg class="w-4 h-4 ms-2 rtl:rotate-180 inline-block" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </Link>
        </section>
        <section className="flex flex-col justify-center items-center gap-7">
          <div id="mista-k-podpisu" className="text-3xl">Podpisová místa</div>

          <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <iframe className={"w-screen sm:w-[400px]"} style={{ border: 'none' }} src="https://en.frame.mapy.cz/s/purolofohu" height="280" frameborder="0"></iframe>
            <div class="flex flex-col justify-between p-4 leading-normal w-screen sm:w-[400px]">
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-right sm:text-left">
                Gastrocentrum Karlovy Vary s.r.o. <br />
                Gastroenterologická ordinace<br />
                Smetanovy sady 1145/1<br />
                Karlovy Vary <br />
                Každý den mezi 7:00-15:00
              </p>
            </div>
          </div>


          <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <iframe className={"w-screen sm:w-[400px]"} style={{ border: 'none' }} src="https://en.frame.mapy.cz/s/purolofohu" height="280" frameborder="0"></iframe>

            <div class="flex flex-col justify-between p-4 leading-normal w-screen sm:w-[400px]">
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-right sm:text-left">
                Mgr. Petr Šťastný - rehabilitace Alžbětiny lázně<br />
                Smetanovy sady 1145/1<br />
                Karlovy Vary <br />
              </p>
            </div>
          </div>


          <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <iframe className={"w-screen sm:w-[400px]"} style={{ border: 'none' }} src="https://en.frame.mapy.cz/s/davucozero" height="280" frameborder="0"></iframe>
            <div class="flex flex-col justify-between p-4 leading-normal w-screen sm:w-[400px]">
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-right sm:text-left">
                Nail Shop<br />
                Bulharská 743/11<br />
                Karlovy Vary <br />
              </p>
            </div>
          </div>


          <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <iframe className={"w-screen sm:w-[400px]"} style={{ border: 'none' }} src="https://en.frame.mapy.cz/s/logugeneda" height="280" frameborder="0"></iframe>
            <div class="flex flex-col justify-between p-4 leading-normal w-screen sm:w-[400px]">
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-right sm:text-left">
                Vinotéka Dobré víno<br />
                Vítězná 8<br />
                Karlovy Vary <br />
              </p>
            </div>
          </div>

          <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <iframe style={{ border: 'none' }} src="https://en.frame.mapy.cz/s/mabakesuka" width="400" height="280" frameborder="0"></iframe>
            <div class="flex flex-col justify-between p-4 leading-normal w-screen sm:w-[400px]">
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-right sm:text-left">
                KV Medic s.r.o. - MUDr. Milena Skuhravá<br />
                Dělnická 932/5<br />
                Karlovy Vary, Rybáře<br />
              </p>
            </div>
          </div>


          <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <iframe style={{ border: 'none' }} src="https://en.frame.mapy.cz/s/cofoforubu" width="400" height="280" frameborder="0"></iframe>
            <div class="flex flex-col justify-between p-4 leading-normal w-screen sm:w-[400px]">
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-right sm:text-left">
                MUDr. Linda Davidová<br />
                Májová 196/1<br />
                Dalovice<br />
              </p>
            </div>
          </div>

        </section>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 David Goliard</span>
      </main>
    </div>
  );
}
