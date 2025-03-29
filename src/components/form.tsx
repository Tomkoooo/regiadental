import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { employees, kezelesek, contact } from '../assets/utils';

// Define types for treatments, districts, and doctors
const korzetek: string[] = ["Mór 1", "Mór 3", "Mór 4", "Bakonycsernye"];

const orvosok = employees.filter((empl) => empl.role === 'doctor');

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
          <span className="text-red-500 text-2xl font-bold">Időpontfoglalás - Magán rendelés</span>
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
            <label className="text-sm text-gray-600">Magán telefonszám: <a href={`tel:${contact.magantel}`} className='text-blue-600 hover:underline'>{contact.magantel}</a></label>
          </form>
        </div>

        {/* Körzeti Időpontfoglalás */}
        <div
          className="min-w-92 p-10 flex flex-col rounded-xl border border-slate-100 gap-3"
          style={{ boxShadow: '10px 10px 0px rgba(239,68,68,1)' }}
        >
          <span className="text-red-500 text-2xl font-bold">Időpontfoglalás - Körzeti rendelés</span>
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
            <label className="text-sm text-gray-600">Körzeti telefonszám: <a href={`tel:${contact.korzetitel}`} className='text-blue-600 hover:underline'>{contact.korzetitel}</a></label>
          </form>
        </div>
      </div>

      {/* Kapcsolati Elérhetőség és Google Maps */}
      <div className="w-full flex flex-col items-center gap-6 px-4">
        <div className="text-center bg-gray-50 p-6 rounded-lg shadow-md max-w-lg w-full">
          <h3 className="text-red-500 text-2xl font-bold mb-4">Kapcsolati Elérhetőség</h3>
          <div className="flex flex-col gap-3 text-gray-800">
            <p>
              <span className="font-semibold">Cím: </span>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.telephely)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {contact.telephely}
              </a>
            </p>
            <p>
              <span className="font-semibold ">Telefon (magán rendelés): </span>
              <a href={`tel:${contact.magantel}`} className='text-blue-600 hover:underline'>{contact.magantel}</a>
            </p>
            <p>
              <span className="font-semibold">Telefon (körzeti rendelés): </span>
              <a href={`tel:${contact.korzetitel}`} className='text-blue-600 hover:underline'>{contact.korzetitel}</a>
            </p>
            <p>
              <span className="font-semibold">Email: </span>
              <a href={`mailto:${contact.email}`} className="text-blue-600 hover:underline">
                {contact.email}
              </a>
            </p>
          </div>
        </div>
        <div className="w-full max-w-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2702.196698458447!2d18.212226775645657!3d47.36907930435036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476a247b6bf2b6f1%3A0x4b263640fcb2e9e6!2sRegia%20Dental%20Fog%C3%A1szati%20K%C3%B6zpont!5e0!3m2!1shu!2shu!4v1742915241410!5m2!1shu!2shu"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Form;