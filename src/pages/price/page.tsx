import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

const categories = [
  {
    name: "Első Lépések",
    services: [
      { name: "Konzultáció, Állapotfelmérés, Kezelési terv", price: "15 000 Ft" },
      { name: "Sürgősségi díj (aznapi kezelés)", price: "15 000 Ft" },
      { name: "Góckutatás Panoráma RTG felvétellel", price: "20 000 Ft" },
      { name: "Góckutatás Panoráma CBCT felvétellel", price: "35 000 Ft" },
      { name: "Digitális panoráma RTG felvétel", price: "10 000 Ft" },
      { name: "3D teljes CBCT felvétel", price: "35 000 Ft" },
      { name: "3D Maxilla vagy Mandibula CBCT felvétel", price: "25 000 Ft" },
      { name: "Kis RTG felvétel", price: "4 000 Ft" },
    ],
  },
  {
    name: "Dentálhigiénia",
    services: [
      { name: "Professzionális fogkőeltávolítás polírozással", price: "30 000 Ft" },
      { name: "AirFlow homokfúvás, sópolírozás", price: "15 000 Ft" },
    ],
  },
  {
    name: "Fogkozmetika",
    services: [
      { name: "Rendelői fogfehérítés", price: "110 000 Ft" },
      { name: "Belső fogfehérítés", price: "35 000 Ft" },
      { name: "Swarowski fogékszer", price: "40 000 Ft" },
      { name: "Kerámia E-Max héj", price: "120 000 Ft" },
      { name: "Direkt héj (rendelői)", price: "70 000 Ft" },
      { name: "Élpótlás (rendelői)", price: "45 000 Ft" },
    ],
  },
  {
    name: "Gyökérkezelések",
    services: [
      { name: "1 csatornás gyökérkezelés (trepanálás)", price: "25 000 Ft" },
      { name: "2 csatornás gyökérkezelés (trepanálás)", price: "30 000 Ft" },
      { name: "3 csatornás gyökérkezelés (trepanálás)", price: "35 000 Ft" },
      { name: "4 csatornás gyökérkezelés (trepanálás)", price: "50 000 Ft" },
      { name: "Gyökértömés 1 csatorna", price: "25 000 Ft" },
      { name: "Gyökértömés 2 csatorna", price: "30 000 Ft" },
      { name: "Gyökértömés 3 csatorna", price: "35 000 Ft" },
      { name: "Gyökértömés 4 csatorna", price: "50 000 Ft" },
      { name: "Régi gyökértömés eltávolítása / csatorna", price: "15 000 Ft" },
    ],
  },
  {
    name: "Konzerváló Fogászat",
    services: [
      { name: "Nyaki tömés / fog", price: "25 000 Ft" },
      { name: "1 felszíni tömés", price: "25 000 Ft" },
      { name: "2 felszíni tömés", price: "30 000 Ft" },
      { name: "3 felszíni tömés", price: "35 000 Ft" },
      { name: "Direkt inlay, onlay", price: "50 000 Ft" },
      { name: "Kompozit inlay, onlay", price: "75 000 Ft" },
      { name: "Cirkon inlay, onlay", price: "85 000 Ft" },
      { name: "Kerámia E-max inlay, onlay", price: "95 000 Ft" },
      { name: "Arany inlay, onlay (aranyár nélkül)", price: "100 000 Ft" },
      { name: "Csaposfelépítés (rendelői)", price: "35 000 Ft" },
      { name: "Csapos műcsont (cirkon)", price: "40 000 Ft" },
      { name: "Csapos műcsont (fém)", price: "50 000 Ft" },
      { name: "Korona, híd visszaragasztása", price: "15 000 Ft" },
    ],
  },
  {
    name: "Rögzített Fogpótlások",
    services: [
      { name: "Hídeltávolítás/pillér (labor)", price: "5 000 Ft" },
      { name: "Ideiglenes műanyag korona (rendelői)", price: "8 000 Ft" },
      { name: "Ideiglenes műanyag korona (labor)", price: "12 000 Ft" },
      { name: "Hosszútávú PMMA CADCAM korona", price: "20 000 Ft" },
      { name: "Fémkerámia korona (hagyományos)", price: "80 000 Ft" },
      { name: "Fémkerámia korona (lézerszinterezett)", price: "90 000 Ft" },
      { name: "Cirkon kerámia korona (fémmentes)", price: "110 000 Ft" },
      { name: "Fémmentes kerámia E-max korona", price: "120 000 Ft" },
    ],
  },
  {
    name: "Kivehető Fogpótlások",
    services: [
      { name: "Műanyag hagyományos fogsor", price: "240 000 Ft" },
      { name: "Ruglmas TCS fogsor", price: "340 000 Ft" },
      { name: "Fémlemez fogsor", price: "300 000 Ft" },
      { name: "Teljes kivehető fogsor (CAD-CAM)", price: "300 000 Ft" },
      { name: "Csúsztatós rögzítés/db", price: "60 000 Ft" },
      { name: "Steg fogsorba", price: "60 000 Ft" },
      { name: "Műanyag 3-4 fogas klipsz drótprocessel", price: "60 000 Ft" },
      { name: "Műanyag fogsor javítása (labor ár)", price: "20 000 Ft" },
      { name: "Műanyag fogsor alábélelése (labor ár)", price: "30 000 Ft" },
    ],
  },
  {
    name: "Szájsebészet",
    services: [
      { name: "Fogeltávolítás", price: "25 000 Ft" },
      { name: "Fogeltávolítás feltárással", price: "30 000 Ft" },
      { name: "Bölcsességfog egyszerű eltávolítása", price: "40 000 Ft" },
      { name: "Bölcsességfog műtéti eltávolítása", price: "60 000 Ft" },
      { name: "Gyökércsúcs resectio", price: "60 000 Ft" },
      { name: "Csontorthorectio", price: "40 000 Ft" },
      { name: "Zárt arcüreg emelés (anyagár nélkül)", price: "90 000 Ft-tól" },
      { name: "Nyitott arcüreg emelés (anyagár nélkül)", price: "130 000 Ft-tól" },
    ],
  },
  {
    name: "Implantálás",
    services: [
      { name: "Konzultáció, Kezelési terv, Anyagjavaslat", price: "20 000 Ft" },
      { name: "CBCT felvétel", price: "25 000 Ft" },
      { name: "Csontpótlás (anyagár nélkül)", price: "90 000 Ft" },
      { name: "PRF vérplazma kezelés", price: "90 000 Ft-tól" },
      { name: "Implantációs műtéti sablon", price: "40 000 Ft-tól" },
      { name: "Implantátum-Fogbeültetés ár, reject költség nélkül", price: "170 000 Ft-tól" },
      { name: "4 féle rendszerből választható!", price: "Ingyenes" },
    ],
  },
  {
    name: "Parodontológia",
    services: [
      { name: "Zárt kürett / kvadráns", price: "16 000 Ft" },
      { name: "Soft lézerkezelés / kvadráns", price: "40 000 Ft-tól" },
    ],
  },
  {
    name: "Gingivektomia",
    services: [
      { name: "Gingivektomia", price: "20 000 Ft" },
    ],
  },
  {
    name: "Gyermekfogászat",
    services: [
      { name: "Tejfog tömés", price: "15 000 Ft" },
      { name: "Tejfog húzás", price: "15 000 Ft" },
      { name: "Tejfog gyökérkezelés", price: "20 000 Ft" },
      { name: "Fogszabályozás sin / db", price: "30 000 Ft" },
    ],
  },
  {
    name: "Egyéb Szakok Hozzáférése Ár, Reject Költség Nélkül",
    services: [
      { name: "Konzultáció, Állapotfelmérés, Anyagjavaslat", price: "Ingyenes" },
      { name: "Évente 4 féle rendszerből választható!", price: "Ingyenes" },
      { name: "ClearSmile láthatatlan sínes fogszabályozás", price: "Ingyenes" },
      { name: "Digitális fogszabályozás terv", price: "35 000 Ft" },
      { name: "Fogszabályozás sin / db", price: "30 000 Ft" },
    ],
  },
  {
    name: "ClearSmile Láthatatlan Sines Fogszabályozás",
    services: [
      { name: "ClearSmile láthatatlan sines fogszabályozás", price: "Ingyenes" },
    ],
  },
];

const PricesPage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen w-full flex flex-col items-center justify-center md:px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Áraink</h1>

        <div className="w-full max-w-4xl">
          {categories.map((category, index) => (
            <div key={index} className="mb-8">
              {/* Category Header */}
              <h2 className="text-2xl font-semibold text-gray-700 bg-gray-200 px-6 py-3 rounded-md">
                {category.name}
              </h2>

              {/* Services Table */}
              <div className="bg-white shadow-md rounded-lg mt-2">
                <table className="w-full border-collapse">
                  <tbody>
                    {category.services.map((service, i) => (
                      <tr
                        key={i}
                        className={`border-b ${i % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
                      >
                        <td className="py-3 px-6 w-1/4 text-gray-700">{service.name}</td>
                        <td className="py-3 md:px-6 text-right text-gray-900 font-medium">
                          {service.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PricesPage;