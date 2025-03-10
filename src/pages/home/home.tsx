import { IconPhoneCall, IconPhone, IconMail, IconGlobe, IconClock, IconBrandFacebook, IconCircleCheckFilled, IconForms } from '@tabler/icons-react'
import '../../App.css'
import HeroSlider from '../../components/hero'
import About from '../../components/about'
import {  IconDental } from '@tabler/icons-react'
import DoctorsCarousel from '../../components/doctors'
import Form from '../../components/form'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

function Home() {

  const kezelesek = [
    {text: "Diagnosztika, állapotfelmérés", link: "/diagnosztika-allapotfelmeres/"},
    {text: "Professzionális fogtisztitás", link: "/professzionalis-fogtisztitas/"},
    {text: "Fogfehérítés", link: "/fogfeherites/"},
    {text: "Kerámia és direkt héjak", link: "/keramia-hejak/"},
    {text: "Gyökérkezelés", link: "/gyokerkezeles/"},
    {text: "Esztétikus tömés", link: "/esztetikus-tomes/"},
    {text: "Inlay, onlay betét", link: "/inlay-onlay-betet/"},
    {text: "Gyermekfogászat", link: "/gyermekfogaszat/"},
    {text: "Koronák, hidak", link: "/femkeramia-korona/"},
    {text: "Kivehető fogpótlások", link: "/hagyomanyos-fogsor/"},
  ]

  return (
    <div className='w-full flex flex-col overflow-x-hidden'>
    <ToastContainer/>
    {/* Fejléc szöveg ikonokkal */}
      <header className='flex justify-between w-full h-16 bg-white items-center text-red-500 md-text-md text-sm '>
        <span className='flex gap-2 p-2 cursor-pointer ease-in-out transition hover:bg-red-500 hover:text-white rounded-2xl'><IconPhoneCall className='hidden md:flex'/>22/419-405</span>
        <span className='flex gap-2 p-2 cursor-pointer ease-in-out transition hover:bg-red-500 hover:text-white rounded-2xl'><IconPhone className='hidden md:flex'/>20/244-8888</span>
        <span className='flex gap-2 p-2 cursor-pointer ease-in-out transition hover:bg-red-500 hover:text-white rounded-2xl'><IconGlobe className='hidden md:flex'/>Mór</span>
        <span className='flex gap-2 p-2 cursor-pointer ease-in-out transition hover:bg-red-500 hover:text-white rounded-2xl'><IconClock className='hidden md:flex'/>Hétfő - Péntek 8.00 - 18.00</span>
        <span className='gap-3 p-2 cursor-pointer ease-in-out transition hover:bg-red-500 hover:text-white rounded-2xl hidden md:flex'><IconMail /><IconBrandFacebook/></span>
      </header>

      <HeroSlider/>

      {/* Navbar */}
      <Navbar/>
    <section className='w-full flex flex-wrap justify-center gap-4 p-5'>
        {[
            { img: "https://www.keramiadental.hu/wp-content/uploads/2023/02/erzekeny-fog.png", text: "Érzékeny, fáj a fogam", link: "#időpontkéres" },
            { img: "https://www.keramiadental.hu/wp-content/uploads/2023/02/szebb-osoly.png", text: "Szebb mosolyt szeretnék", link: "#kapcsolatfelvétel" },
            { img: "https://www.keramiadental.hu/wp-content/uploads/2023/02/szuvas-fog.png", text: "Szuvas a fogam, töméseim cseréltetném" , link: "#időpontkérés"},
            { img: "https://www.keramiadental.hu/wp-content/uploads/2023/02/hianyzo-fog.png", text: "Hiányzó fogaimat pótolnám", link: "#időpontkérés" },
            { img: "https://www.keramiadental.hu/wp-content/uploads/2023/02/implantalas.png", text: "Implamentálás, fogbeültetés érdekelne", link: "#kapcsolatfelvétel" },
            { img: "https://www.keramiadental.hu/wp-content/uploads/2023/02/lathatatlan-fogszabalyozas.png", text: "Láthatatlan fogszabályózó érdekelne", link: "clearsmile.hu" }
        ].map((card, index) => (
            <div key={index} className="w-64 h-80 odd:bg-red-300 odd:drop-shadow-[10px_10px_0px_rgba(239,68,68,1) bg-red-400 rounded-xl overflow-hidden drop-shadow-[10px_10px_0px_rgba(255, 162, 162, 1)] hover:scale-105 transition ease-in-out">
                <figure className="h-40 flex items-center justify-center">
                    <img src={card.img} alt={card.text} className="w-1/3" />
                </figure>
                <div className="h-40 flex items-center justify-center p-4 text-center text-white text-2xl font-semibold">
                    <a href={card.link} className='hover:underline'>{card.text}</a>
                </div>
            </div>
        ))}
    </section>

    <About/>
    
    <section id='szolgaltatas'>
    <div className='w-full flex flex-col p-12 gap-2 text-xl'>
    <div className="flex  items-center gap-4 w-full">
            <div className="flex-1 border-t-2 border-red-500 border-info"></div>
            <IconDental color='oklch(0.637 0.237 25.331)' size={100}/>
            <div className="flex-1 border-t-2 border-info border-red-500"></div>
        </div>
        <h1 className='text-3xl uppercase w-full flex justify-center font-bold'>szolgáltatás</h1>
        <span className='w-full flex justify-center text-red-500 font-bold'>Ismerje meg fogászatunkat!</span>
        <div className='w-full flex justify-center items-center gap-[8rem] md:flex-row flex-col'>
          <div className='flex flex-col md:w-1/3 w-full items-center gap-4 text-justify'>
          <span>A fogorvos nem kell, hogy rémálom legyen! Nálunk profi és barátságos csapat vár, hogy minden kezelés a lehető legkényelmesebb legyen számodra. Egy alapos állapotfelmérés után megbeszéljük, mire van szükséged, és együtt tervezzük meg a kezelést – legyen szó fogtisztításról, fehérítésről vagy akár egy komolyabb beavatkozásról.</span>

          <span>Szeretnéd, ha a tömésed észrevehetetlen lenne? Az esztétikus tömések és kerámia héjak segítenek ebben! Ha gyökérkezelésre van szükséged, fájdalommentesen megoldjuk, hogy ne kelljen aggódnod. A kivehető fogpótlások, hidak és koronák pedig segítenek visszanyerni a kényelmes rágás és a magabiztos mosoly örömét.</span>

<span>A legkisebbekre is gondolunk! Gyermekfogászatunkon a picik barátságos légkörben ismerkedhetnek meg a fogorvosi szék világával.

Bízd ránk a mosolyod, mi pedig gondoskodunk róla, hogy az mindig ragyogó és egészséges maradjon!</span>
              
          </div>
          <div className='md:w-1/3 flex flex-col items-start gap-4 text-lg'>
            <span className='text-red-400 text-xl font-semibold text-center'>
              Kezeléseink
            </span>
            
            {kezelesek.map((kezeles, index) => (
              <div key={index} className='flex items-center gap-3 min-h-[40px]'>
              <IconCircleCheckFilled color='red' size={40} />
              <Link to={kezeles.link} className='hover:underline ease-in transition'>{kezeles.text}</Link>
            </div>
            ))}
          
          </div>

        </div>
    </div>
    </section>

        <DoctorsCarousel/>
        <div className="flex items-center gap-4 w-full mt-8">
            <div className="flex-1 border-t-2 border-red-500 border-info"></div>
            <IconForms color='oklch(0.637 0.237 25.331)' size={100}/>
            <div className="flex-1 border-t-2 border-info border-red-500"></div>
        </div>
        <h1 className='text-3xl flex items-center justify-center w-full font-bold'>KAPCSOLAT</h1>
            <Form/>
      <Footer/>
    </div>
  )
}

export default Home
