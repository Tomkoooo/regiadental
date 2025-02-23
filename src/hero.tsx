import { useState, useEffect } from "react";

const slides = [
    { img: "https://keramiadental.hu/wp-content/uploads/2023/02/IMG-96fb19846937b03d863beeec3e806a0e-V.jpg", text: "<b style='font-size: xxx-large;'>Új Páciens akció</b> <br> Fogászati csomag <span style='text-decoration: line-through;'>41 000 Ft</span> helyett <b>20 000 Ft</b>-ért! A csomag tartalma: állapotfelmérés, konzultáció, professzionális fogkőeltávolítás,  panorámaröntgen, szájhigiénés tanácsadás. <br> <i>(Az ár csak internetes bejelentkezés esetén érvényes)</i>", link: "Időpontkérés" },
    {img: "	https://keramiadental.hu/wp-content/uploads/2023/04/close-up-happy-client-dental-clinic-scaled.jpg", text: "<b style='font-size: xx-large;'>Csúcstechnológiás fogászati röntgen a legapróbb részletekig!</b> <br> A Kerámia Dental székesfehérvári rendelőjének legújabb CBCT vizsgálatra is alkalmas készüléke alacsony sugárterhelés mellett készít tizedmilliméter pontosságú képeket. Mire derülhet fény a komplex felvételek segítségével?"},
    { img: "https://keramiadental.hu/wp-content/uploads/2022/12/94c0c6ae9099918e14797333f29dbadd.jpg", text: "<b style='font-size: xxx-large;'>Navigációs implantálás</b> <br> Válassza a legjobb minőségű implantátumot a legmodernebb digitális beültetési technikával!", link: "Időpontkérés" },
    { img: "https://keramiadental.hu/wp-content/uploads/2024/12/eu-hirdetes.jpg", text: "<b style='font-size: xxx-large;'>10% Kedvezmény</b> <br> 10% kedvezmény az egészségügyi dolgozók részére", link: "kapcsolatfelvétel" }
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const hasMultipleSlides = slides.length > 1;

  useEffect(() => {
    if (!hasMultipleSlides) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [hasMultipleSlides]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative">
      <div
        className="hero h-[28rem] bg-cover bg-no-repeat bg-center flex items-center"
        style={{ backgroundImage: `url("${slides[currentIndex].img}")` }}>
        <div className="hero-content text-neutral-content text-center flex items-center justify-center w-full flex-col bg-slate-600/40 h-full gap-2">
            <div className="max-w-1/2">
                <p className="text-white gap-4" dangerouslySetInnerHTML={{ __html: slides[currentIndex].text }}></p>
          </div>
          <a href={slides[currentIndex].link ? "#" + slides[currentIndex].link.toLowerCase() : "#rolunk"} className='p-4 text-white font-bold rounded-md bg-green-500 hover:bg-green-600 hover:rounded-3xl  transition ease-in-out'>{slides[currentIndex].link ? slides[currentIndex].link : "Tudjon meg többet!"}</a>
        </div>
      </div>

      {hasMultipleSlides && (
        <>
          <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 hover:bg-red-500 w-12 h-12 rounded-full cursor-pointer hover:text-white transition ease-in-out">❮</button>
          <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 btn hover:bg-red-500 w-12 h-12 rounded-full cursor-pointer hover:text-white transition ease-in-out">❯</button>
        </>
      )}
    </section>
  );
}