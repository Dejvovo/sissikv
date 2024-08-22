'use client'
import Link from 'next/link'


export default function Home() {
  return (

    <div className="bg-customWhite scroll-smooth">
      <nav class=" border-gray-200">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
          </a> */}
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0   dark:border-gray-700">
              <li>
                <a href="#">Petice</a>
              </li>
              <li>
                <a href="#sberna-mista">Sběrná místa</a>
              </li>
              <li>
                <a href="/vysvetlujici-dopis">Vysvětlující text</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[url('/alzbetiny-lazne.png')] bg-no-repeat bg-contain">

        {/* <section class="grid-cols-2 min-h-full relative">
          <Image
            src={'/alzbetiny-lazne.png'}
            alt="ALžbětiny lázně"
            layout="fill"
            className="blur-sm"
          />
      </section> */}

        <section className="min-h-screen flex flex-col w-[1000px] justify-normal items-center gap-5">
          <div className="bg-red-500 items-center text-center py-5 opacity-90 text-customWhite font-semibold rounded-md">
            <div className="text-3xl">Podepište prosím petici</div>
            <div className="">
              Jste pro zachování objektu Alžbětiných lázní jako veřejného lázeňského a rehabilitačního zařízení v majetku a provozu Statutárního města Karlovy Vary bez jejich prodeje nebo pronájmu jiným subjektům?
            </div>
          </div>
          <button className="bg-red-500 opacity-90 rounded-md inline-block w-[250px] h-[50px]" onClick={() => window.open('https://portal.gov.cz/e-petice/819-alzbetiny-lazne-karlovy-vary-navrh-na-konani-mistniho-referenda', '_blank')}><span className="m-10 text-customWhite font-semibold">Chci podepsat</span></button>
          <Link className="bg-customBlue flex items-center justify-center text-center opacity-90 rounded-md w-[250px] h-[50px] text-customWhite font-semibold" href={'/vysvetlujici-dopis'}>Vysvětlující text
            <svg class="w-4 h-4 ms-2 rtl:rotate-180 inline-block" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </Link>
        </section>
        <section className="flex flex-col justify-center items-center gap-2">
          <div id="sberna-mista" className="text-3xl">Sběrná místa</div>

          <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <iframe style={{ border: 'none' }} src="https://en.frame.mapy.cz/s/purolofohu" width="400" height="280" frameborder="0"></iframe>
            <div class="flex flex-col justify-between p-4 leading-normal w-[400px]">
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Gastrocentrum Karlovy Vary s.r.o. <br />
                Gastroenterologická ordinace<br />
                Smetanovy sady 1145/1<br />
                Karlovy Vary <br />
                Každý den mezi 7:00-15:00
              </p>
            </div>
          </div>


          <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <iframe style={{ border: 'none' }} src="https://en.frame.mapy.cz/s/purolofohu" width="400" height="280" frameborder="0"></iframe>

            <div class="flex flex-col justify-between p-4 leading-normal w-[400px]">
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Mgr. Petr Šťastný - rehabilitace Alžbětiny lázně<br />
                Smetanovy sady 1145/1<br />
                Karlovy Vary <br />
              </p>
            </div>
          </div>


          <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">

            <iframe style={{ border: 'none' }} src="https://en.frame.mapy.cz/s/davucozero" width="400" height="280" frameborder="0"></iframe>

            <div class="flex flex-col justify-between p-4 leading-normal w-[400px]">
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Nail Shop<br />
                Bulharská 743/11<br />
                Karlovy Vary <br />
              </p>
            </div>
          </div>


        </section>
        {/* <hr class="h-px w-5/6 my-8 bg-customGrey border-0"/>
        <footer>
          asdfsf
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
          </div>
        </footer> */}
      </main>
    </div>
  );
}
