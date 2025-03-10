
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
    ],
  },
  {
    name: "Dentálhigiénia",
    services: [
      { name: "Ultrahangos fogkőeltávolítás polírozással", price: "30 000 Ft" },
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
    ],
  },
];

const PricesPage = () => {
  return (
    <>
    <Navbar/>
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
            <div className="bg-white shadow-md rounded-lg overflow-hidden mt-2">
              <table className="w-full border-collapse">
                <tbody>
                  {category.services.map((service, i) => (
                    <tr
                      key={i}
                      className={`border-b ${
                        i % 2 === 0 ? "bg-gray-50" : "bg-white"
                      }`}
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
    <Footer/>
    </>
  );
};

export default PricesPage;