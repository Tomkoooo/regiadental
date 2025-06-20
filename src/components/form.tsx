import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { employees, kezelesek, contact } from '../assets/utils';

const orvosok = employees.filter((empl) => empl.role === 'doctor');

// Form data interfaces
interface PrivateFormData {
  name: string;
  email: string;
  date: string;
  treatment: string;
  doctor: string;
}

interface FormProps {
  selectedType: string | null;
}

const Form: React.FC<FormProps> = ({ selectedType }) => {
  const [privateFormData, setPrivateFormData] = useState<PrivateFormData>({
    name: '',
    email: '',
    date: '',
    treatment: '',
    doctor: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setPrivateFormData({
      ...privateFormData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('https://regiadental.hu/sendMail.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(privateFormData),
      });

      const result = await response.json();

      if (result.success) {
        toast.success(
          'Sikeres foglalás! Kérjük, ellenőrizze email fiókját, valamint a spam mappát is!',
          {
            position: 'top-center',
            autoClose: 5000,
          }
        );
      } else {
        toast.error('Hiba történt! Próbálja újra később.', {
          position: 'top-center',
          autoClose: 5000,
        });
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Hálózati hiba! Kérjük, próbálja újra.', {
        position: 'top-center',
        autoClose: 5000,
      });
    }
  };

  if (selectedType !== 'magán') {
    return null;
  }

  return (
    <div
      className="min-w-92 p-10 flex flex-col rounded-xl border border-slate-100 gap-3"
      style={{ boxShadow: '10px 10px 0px rgba(239,68,68,1)' }}
    >
      <span className="text-red-500 text-2xl font-bold">
        Időpontfoglalás - Magán rendelés
      </span>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Név"
          value={privateFormData.name}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={privateFormData.email}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="date"
          name="date"
          value={privateFormData.date}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded"
          required
        />
        <select
          name="treatment"
          value={privateFormData.treatment}
          onChange={handleChange}
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
          onChange={handleChange}
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
        <label className="text-sm text-gray-600">
          Magán telefonszám:{' '}
          <a
            href={`tel:${contact.magantel}`}
            className="text-blue-600 hover:underline"
          >
            {contact.magantel}
          </a>
        </label>
      </form>
    </div>
  );
};

export default Form;