import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    type: 'magán',
    district: '',
    treatment: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section className='w-full flex md:flex-row flex-col items-center justify-around gap-10' id="időpontkérés">
      <div className='min-w-92 p-10 flex flex-col rounded-xl border border-slate-100 gap-3' style={{ boxShadow: '10px 10px 0px rgba(239,68,68,1)' }}>
        <span className='text-red-500 text-2xl font-bold'>Időpont foglalás</span>
        <form onSubmit={handleSubmit} className='flex flex-col space-y-4'>
          <input
            type='text'
            name='name'
            placeholder='Név'
            value={formData.name}
            onChange={handleChange}
            className='p-2 border border-gray-300 rounded'
            required
          />
          <input
            type='email'
            name='email'
            placeholder='Email'
            value={formData.email}
            onChange={handleChange}
            className='p-2 border border-gray-300 rounded'
            required
          />
          <input
            type='date'
            name='date'
            value={formData.date}
            onChange={handleChange}
            className='p-2 border border-gray-300 rounded'
            required
          />
          <select
            name='type'
            value={formData.type}
            onChange={handleChange}
            className='p-2 border border-gray-300 rounded'
            required
          >
            <option value='magán'>Magán</option>
            <option value='körzeti'>Körzeti</option>
          </select>
          {formData.type === 'körzeti' && (
            <input
              type='text'
              name='district'
              placeholder='Körzet'
              value={formData.district}
              onChange={handleChange}
              className='p-2 border border-gray-300 rounded'
              required
            />
          )}
          <select
            name='treatment'
            value={formData.treatment}
            onChange={handleChange}
            className='p-2 border border-gray-300 rounded'
            required
          >
            <option value=''>Válasszon kezelést</option>
            <option value='kezelés1'>Kezelés 1</option>
            <option value='kezelés2'>Kezelés 2</option>
            <option value='kezelés3'>Kezelés 3</option>
          </select>
          <button type='submit' className='p-2 bg-red-500 text-white rounded'>
            Küldés
          </button>
        </form>
      </div>
      <div className='min-w-92 p-10 flex flex-col rounded-xl border border-slate-100 gap-3' style={{ boxShadow: '10px 10px 0px rgba(239,68,68,1)' }} id="kapcsolatfelvétel">
        <span className='text-red-500 text-2xl font-bold'>Kapcsolat</span>
        <form onSubmit={handleSubmit} className='flex flex-col space-y-4'>
          <input
            type='text'
            name='name'
            placeholder='Név'
            value={formData.name}
            onChange={handleChange}
            className='p-2 border border-gray-300 rounded'
            required
          />
          <input
            type='email'
            name='email'
            placeholder='Email'
            value={formData.email}
            onChange={handleChange}
            className='p-2 border border-gray-300 rounded'
            required
          />
          <textarea
            name='message'
            placeholder='Üzenet'
            value={formData.message}
            onChange={handleChange}
            className='p-2 border border-gray-300 rounded'
            rows={5}
            required
          />
          <button type='submit' className='p-2 bg-red-500 text-white rounded'>
            Küldés
          </button>
        </form>
      </div>

    </section>
  );
};

export default Form;