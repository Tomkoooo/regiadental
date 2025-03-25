import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Define types for treatments, districts, and doctors
interface Treatment {
  text: string;
  link: string;
}

interface Doctor {
  name: string;
  id: string;
}

// Predefined arrays
const kezelesek: Treatment[] = [
  { text: "Diagnosztika, állapotfelmérés", link: "/diagnosztika-allapotfelmeres/" },
  { text: "Professzionális fogtisztitás", link: "/professzionalis-fogtisztitas/" },
  { text: "Fogfehérítés", link: "/fogfeherites/" },
  { text: "Kerámia és direkt héjak", link: "/keramia-hejak/" },
  { text: "Gyökérkezelés", link: "/gyokerkezeles/" },
  { text: "Esztétikus tömés", link: "/esztetikus-tomes/" },
  { text: "Inlay, onlay betét", link: "/inlay-onlay-betet/" },
  { text: "Gyermekfogászat", link: "/gyermekfogaszat/" },
  { text: "Koronák, hidak", link: "/femkeramia-korona/" },
  { text: "Kivehető fogpótlások", link: "/hagyomanyos-fogsor/" },
];

const korzetek: string[] = [
  "Körzet 1",
  "Körzet 2",
  "Körzet 3",
  "Körzet 4",
];

const orvosok: Doctor[] = [
  { name: "Dr. Kovács Péter", id: "kovacs_peter" },
  { name: "Dr. Nagy Anna", id: "nagy_anna" },
  { name: "Dr. Szabó László", id: "szabo_laszlo" },
];

// Form data interfaces
interface PrivateFormData {
  name: string;
  email: string;
  date: string;
  treatment: string;
  doctor: string;
}

interface DistrictFormData {
  name: string;
  email: string;
  date: string;
  district: string;
  treatment: string;
}

const Form: React.FC = () => {
  const [privateFormData, setPrivateFormData] = useState<PrivateFormData>({
    name: '',
    email: '',
    date: '',
    treatment: '',
    doctor: '',
  });

  const [districtFormData, setDistrictFormData] = useState<DistrictFormData>({
    name: '',
    email: '',
    date: '',
    district: '',
    treatment: '',
  });

  const handleChange = <T extends PrivateFormData | DistrictFormData>(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    setFormData: React.Dispatch<React.SetStateAction<T>>,
    formData: T
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async <T extends PrivateFormData | DistrictFormData>(
    e: React.FormEvent<HTMLFormElement>,
    formData: T
  ) => {
    e.preventDefault();

    try {
      const response = await fetch('https://regiadental.hu/sendMail.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Sikeres foglalás! Kérjük, ellenőrizze email fiókját, valamint a spam mappát is!", {
          position: "top-center",
          autoClose: 5000,
        });
      } else {
        toast.error("Hiba történt! Próbálja újra később.", {
          position: "top-center",
          autoClose: 5000,
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Hálózati hiba! Kérjük, próbálja újra.", {
        position: "top-center",
        autoClose: 5000,
      });
    }
  };

  return (
    <section className="w-full flex flex-col items-center gap-10" id="időpontkérés">
      <div className="w-full flex md:flex-row flex-col justify-around gap-10">
        {/* Magán Időpontfoglalás */}
        <div
          className="min-w-92 p-10 flex flex-col rounded-xl border border-slate-100 gap-3"
          style={{ boxShadow: '10px 10px 0px rgba(239,68,68,1)' }}
        >
          <span className="text-red-500 text-2xl font-bold">Időpontfoglalás - Magán</span>
          <form onSubmit={(e) => handleSubmit(e, privateFormData)} className="flex flex-col space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Név"
              value={privateFormData.name}
              onChange={(e) => handleChange(e, setPrivateFormData, privateFormData)}
              className="p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={privateFormData.email}
              onChange={(e) => handleChange(e, setPrivateFormData, privateFormData)}
              className="p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="date"
              name="date"
              value={privateFormData.date}
              onChange={(e) => handleChange(e, setPrivateFormData, privateFormData)}
              className="p-2 border border-gray-300 rounded"
              required
            />
            <select
              name="treatment"
              value={privateFormData.treatment}
              onChange={(e) => handleChange(e, setPrivateFormData, privateFormData)}
              className="p-2 border border-gray-300 rounded"
              required
            >
              <option value="">Válasszon kezelést</option>
              {kezelesek.map((kezelés, index) => (
                <option key={index} value={kezelés.text}>
                  {kezelés.text}
                </option>
              ))}
            </select>
            <select
              name="doctor"
              value={privateFormData.doctor}
              onChange={(e) => handleChange(e, setPrivateFormData, privateFormData)}
              className="p-2 border border-gray-300 rounded"
              required
            >
              <option value="">Válasszon orvost</option>
              {orvosok.map((orvos, index) => (
                <option key={index} value={orvos.id}>
                  {orvos.name}
                </option>
              ))}
            </select>
            <button type="submit" className="p-2 bg-red-500 text-white rounded">
              Küldés
            </button>
          </form>
        </div>

        {/* Körzeti Időpontfoglalás */}
        <div
          className="min-w-92 p-10 flex flex-col rounded-xl border border-slate-100 gap-3"
          style={{ boxShadow: '10px 10px 0px rgba(239,68,68,1)' }}
        >
          <span className="text-red-500 text-2xl font-bold">Időpontfoglalás - Körzeti</span>
          <form onSubmit={(e) => handleSubmit(e, districtFormData)} className="flex flex-col space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Név"
              value={districtFormData.name}
              onChange={(e) => handleChange(e, setDistrictFormData, districtFormData)}
              className="p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={districtFormData.email}
              onChange={(e) => handleChange(e, setDistrictFormData, districtFormData)}
              className="p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="date"
              name="date"
              value={districtFormData.date}
              onChange={(e) => handleChange(e, setDistrictFormData, districtFormData)}
              className="p-2 border border-gray-300 rounded"
              required
            />
            <select
              name="district"
              value={districtFormData.district}
              onChange={(e) => handleChange(e, setDistrictFormData, districtFormData)}
              className="p-2 border border-gray-300 rounded"
              required
            >
              <option value="">Válasszon körzetet</option>
              {korzetek.map((korzet, index) => (
                <option key={index} value={korzet}>
                  {korzet}
                </option>
              ))}
            </select>
            <select
              name="treatment"
              value={districtFormData.treatment}
              onChange={(e) => handleChange(e, setDistrictFormData, districtFormData)}
              className="p-2 border border-gray-300 rounded"
              required
            >
              <option value="">Válasszon kezelést</option>
              {kezelesek.map((kezelés, index) => (
                <option key={index} value={kezelés.text}>
                  {kezelés.text}
                </option>
              ))}
            </select>
            <button type="submit" className="p-2 bg-red-500 text-white rounded">
              Küldés
            </button>
          </form>
        </div>
      </div>

      {/* Kapcsolati Elérhetőség és Google Maps */}
      <div className="w-full flex flex-col items-center gap-5">
        <div className="text-center">
          <h3 className="text-red-500 text-xl font-bold">Kapcsolati Elérhetőség</h3>
          <p>Cím: 1234 Budapest, Példa utca 1.</p>
          <p>Telefon: +36 1 234 5678</p>
          <p>Email: info@regiadental.hu</p>
        </div>
        <div className="w-full max-w-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2695.337647874944!2d19.040235315641!3d47.497912979177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDI5JzUyLjUiTiAxOcKwMDInMjQuOSJF!5e0!3m2!1shu!2shu!4v1634567890123!5m2!1shu!2shu"
            width="100%"
            height="300"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Form;