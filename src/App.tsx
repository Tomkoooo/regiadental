import { IconPhoneCall, IconPhone, IconMail, IconGlobe, IconClock, IconBrandFacebook } from '@tabler/icons-react'
import './App.css'

function App() {

  return (
    <>
      <header className='flex justify-between w-full h-16 bg-white items-center text-red-500 '>
        <span className='flex gap-2 p-2 cursor-pointer ease-in-out transition hover:bg-red-500 hover:text-white rounded-2xl'><IconPhoneCall/>22/419-405</span>
        <span className='flex gap-2 p-2 cursor-pointer ease-in-out transition hover:bg-red-500 hover:text-white rounded-2xl'><IconPhone/>20/244-8888</span>
        <span className='flex gap-2 p-2 cursor-pointer ease-in-out transition hover:bg-red-500 hover:text-white rounded-2xl'><IconGlobe/>Székesfehérvár Szekfű Gy. u. 12.</span>
        <span className='flex gap-2 p-2 cursor-pointer ease-in-out transition hover:bg-red-500 hover:text-white rounded-2xl'><IconClock/>Hétfő - Péntek 8.00 - 18.00</span>
        <span className='flex gap-3 p-2 cursor-pointer ease-in-out transition hover:bg-red-500 hover:text-white rounded-2xl'><IconMail/><IconBrandFacebook/></span>
      </header>
      <section>
      <div
    className="hero h-[24rem] bg-cover bg-no-repeat bg-center flex items-center"
    style={{
      backgroundImage: "url('./image 4537.jpg')",
    }}>
    <div className="hero-content text-neutral-content text-center">
      <div className="max-w-md">
        <p className="text-3xl">
          A legjobb választás, ha <span className='text-blue-500'>észrevétlen, hatékony ls kényelmes</span> fogszabályozást szeretne.
        </p>
        <button className='p-4 text-white font-bold rounded-md bg-green-500 hover:bg-green-600 hover:rounded-3xl border transition ease-in-out'>Tudjon meg többet!</button>
          </div>
        </div>
      </div>
      </section>
      <nav className='w-full h-[8rem] flex bg-red-500 text-black sticky top-0 z-50 shadow-xl rounded-b-xl'>
        <div className='h-full w-1/3 rounded-tr-[7rem] rounded-br-[7rem] bg-red-400 flex items-center justify-center'>
            <span className='text-3xl uppercase text-white'>
                Regia Dentál
            </span>
        </div>
        <div className='h-full w-2/3 flex justify-around items-center uppercase text-xl text-white'>
            <a className='cursor-pointer hover:scale-105 transition ease-in-out'>rólunk</a>
            <a className='cursor-pointer hover:scale-105 transition ease-in-out'>szolgáltatás</a>
            <a className='cursor-pointer hover:scale-105 transition ease-in-out'>orvosaink</a>
            <a className='cursor-pointer hover:scale-105 transition ease-in-out'>időpontfoglalás</a>
        </div>
    </nav>
    <section className='w-full flex flex-wrap justify-center gap-6 p-10'>
        {[
            { img: "image 4539.jpg", text: "ClearSmile a láthatatlan fogszabályzó!" },
            { img: "image 4540.jpg", text: "Gyakori kérdések" },
            { img: "image 4541.jpg", text: "Legyen fogorvos partnerünk" },
            { img: "image 4542.jpg", text: "Referencia fogászat" },
            { img: "image 4543.jpg", text: "Minket választottak" }
        ].map((card, index) => (
            <div key={index} className="w-64 h-80 bg-white rounded-xl overflow-hidden drop-shadow-[10px_10px_0px_rgba(239,68,68,1)] hover:scale-105 transition ease-in-out">
                <figure className="h-40">
                    <img src={card.img} alt={card.text} className="w-full h-full object-cover rounded-t-xl" />
                </figure>
                <div className="h-40 flex items-center justify-center p-4 text-center text-red-600 text-2xl font-semibold">
                    <p>{card.text}</p>
                </div>
            </div>
        ))}
    </section>
    
    </>
  )
}

export default App
