import Head from 'next/head'
import Header from '../components/Header'

// BACKGROUND GREEN CIRCLE BLUR
function Bg () {
  return (
    <div className="block absolute w-[1200px] h-[1200px] rounded-[1200px] bg-[#19430D] left-[60%] bottom-[20%] blur-[300px]"></div>
  )
}

export default function Home() {
  return (
    <div className="h-screen relative overflow-hidden">
      <Head>
        <title>Clone ZRT TrackmaniaCup</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Bg />

      <Header />

      <div className="flex sm:justify-between">
        {/* TEXT */}
        <div className="sm:w-[50%] ml-[50px]">
          <div className="text-center text-white font-bold leading-tight">
            <h1 className="sm:text-[80px] outline hover:text-white hover:text-[95px] transition-all duration-500">TRACKMANIA CUP</h1>
            <h2 className="sm:text-[24px] tracking-[10px]">2022 EDITION</h2>
          </div>
          <div className="p-[30px] bg-info rounded-[5px] mt-5">
            <div className="leading-6">
              <p className="text-white">Les inscriptions sont terminées. A bientôt pour le tournoi. <br /> Vous pouvez nous rejoindre sur Discord : <span className="text-[#43E916] font-bold cursor-pointer">Discord Zerator Cup</span>
              </p>
              <p className="text-white text-2xl font-light">Planning des Samedi 14 et Dimanche 15 Mai</p>
            </div>
            <ul className="text-white text-lg list-disc ml-5 mt-5">
              <li>Sortie des brackets sur Discord Samedi 14 à 12h CEST</li>
              <li>Samedi 14 de 16h CEST à 23h CEST</li>
              <li>Dimanche 15 de 18h à 23h CEST</li>
            </ul>
            <div className="mt-5 space-x-[5px]">
              <button className="text-[#43E916] border border-[#43E916] px-[15px] py-[10px] text-[12.8px] font-bold rounded-[4px] hover:bg-[#43E916] hover:text-white transition-all duration-300">RÈGLEMENT FR</button>
              <button className="text-[#43E916] border border-[#43E916] px-[15px] py-[10px] text-[12.8px] font-bold rounded-[4px] hover:bg-[#43E916] hover:text-white transition-all duration-300">RÈGLEMENT EN</button>
              <button className="text-[#43E916] border border-[#43E916] px-[15px] py-[10px] text-[12.8px] font-bold rounded-[4px] hover:bg-[#43E916] hover:text-white transition-all duration-300">LISTE DES DUOS</button>
            </div>
          </div>
        </div>
        {/* VIDEO */}
        <div className="sm:w-[50%] mt-[-150px]">
          <video autoplay>
            <source src="car.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

    </div>
  )
}
