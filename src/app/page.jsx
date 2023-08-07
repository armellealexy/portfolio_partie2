
import Liens from './components/Liens'

import Link from "next/link"

export default function Home() {


  return <>

    <main class="flex flex-col mb-4">

      <div class="flex flex-col justify-center items-center mt-16 sm:mt-32 mx-4 mb-4 md:flex-row gap-4 ">

        <div class="block text-left sm:w-2/3">

          <h2 class=" text-lg sm:text-6xl">Salut!</h2>
          <h2 class=" text-lg mb-4 sm:text-6xl sm:mb-8"> Moi c'est <span class="font-semibold text-3xl sm:text-8xl"> Armelle </span>
          </h2>
          {/* <span class="ml-2 sm:ml-4"><TextAnim /></span> */}
          <p class="leading-loose">
            Je suis une jeune étudiante camerounaise de vingt deux ans résidente au Canada. Je suis scolarisée au collège la cité où je suis une formation en programmation informatique, ce programme est pour moi une grande et bonne découverte et j espère approfondir mes connaissances dans cela. Étant une personne très curieuse et sociable j aime être en compagnie des gens faire de nouvelles rencontres, voyager. A mes temps perdus j aime danser chanter regarder des films et prendre soin de moi.
          </p>

        </div>


        <div class="flex justify-center m-0 h-64 w-72 ">
          <img src="/armelle.png" alt="Armelle Alexie" class=" h-72 w-auto rounded-full " />
        </div>

      </div>

      <div class="flex flex-col mt-16 ">

        <div className='flex justify-center'>
          <Link href="/contact">
            <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-base rounded-full text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Me Contacter</button>
          </Link>
        </div>

        <div >
          <Liens />
        </div>


      </div>

    </main>
  </>
}