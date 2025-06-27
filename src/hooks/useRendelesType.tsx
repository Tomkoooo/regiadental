// useRendelesType.tsx
import { useState } from 'react';
import { IconMail, IconMapPin, IconPhone } from '@tabler/icons-react';
import Form from '../components/form';
import { contact } from '../assets/utils';

const useRendelesType = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [selectedType, setSelectedType] = useState<null | string>(null);

  const closeModal = () => setIsModalOpen(false);
  const selectType = (type: string) => {
    setSelectedType(type);
    setIsModalOpen(false);
  };

  const Modal = () => (
    isModalOpen && (
      <div className="fixed inset-0 bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-[1000]">
        <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl max-w-[90vw] sm:max-w-lg w-full flex flex-col gap-4 sm:gap-6">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-red-500 text-center">
            Válasszon rendelési típust
          </h2>
          <div className="flex flex-col gap-4">
            {/* Magán Card */}
            <div
              className="p-4 sm:p-6 bg-red-100 rounded-lg cursor-pointer hover:bg-red-200 transition ease-in-out flex flex-col items-center"
              onClick={() => selectType('magán')}
            >
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-red-500">Magán rendelés</h3>
              <p className="text-gray-600 text-sm sm:text-base text-center">
                Teljes körű fogászati ellátás, egyedi időpontokkal.
              </p>
            </div>
            {/* Körzeti Card */}
            <div
              className="p-4 sm:p-6 bg-red-100 rounded-lg cursor-pointer hover:bg-red-200 transition ease-in-out flex flex-col items-center"
              onClick={() => selectType('körzeti')}
            >
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-red-500">Körzeti rendelés</h3>
              <p className="text-gray-600 text-sm sm:text-base text-center">
                Körzeti rendelés időpontfoglalás emailben vagy személyesen.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  );

  const Content = () => {
    if (selectedType === 'körzeti') {
      return (
        <section className="w-full flex flex-col items-center gap-10 min-h-screen justify-center" id="időpontkérés">
          <div
            className="min-w-92 p-10 flex flex-col rounded-xl border border-slate-100 gap-3"
            style={{ boxShadow: '10px 10px 0px rgba(239,68,68,1)' }}
          >
            <span className="text-red-500 text-2xl font-bold">Körzeti rendelés</span>
            <p className="text-gray-600 mb-4">
              Körzeti rendelés időpontfoglalása emailben, telefonon vagy személyesen lehetséges.
            </p>
            <div className="flex flex-col gap-3 text-gray-800">
              <p className="flex items-center gap-2">
                <IconMail className="text-red-500" />
                <span className="font-semibold">Email: </span>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-blue-600 hover:underline"
                >
                  {contact.email}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <IconMapPin className="text-red-500" />
                <span className="font-semibold">Cím: </span>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    contact.telephely
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {contact.telephely}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <IconPhone className="text-red-500" />
                <span className="font-semibold">Telefon: </span>
                <a
                  href={`tel:${contact.korzetitel}`}
                  className="text-blue-600 hover:underline"
                >
                  {contact.korzetitel}
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
        </section>
      );
    }

    if (selectedType === 'magán') {
      return (
        <section className="w-full flex flex-col items-center gap-10" id="időpontkérés">
          <div className="w-full flex md:flex-row flex-col justify-around gap-10">
            <Form selectedType={selectedType} />
          </div>
          <div className="w-full flex flex-col items-center gap-6 px-4">
            <div className="text-center bg-gray-50 p-6 rounded-lg shadow-md max-w-lg w-full">
              <h3 className="text-red-500 text-2xl font-bold mb-4">
                Kapcsolati Elérhetőség
              </h3>
              <div className="flex flex-col gap-3 text-gray-800">
                <p>
                  <span className="font-semibold">Cím: </span>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      contact.telephely
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {contact.telephely}
                  </a>
                </p>
                <p>
                  <span className="font-semibold">Telefon (magán rendelés): </span>
                  <a
                    href={`tel:${contact.magantel}`}
                    className="text-blue-600 hover:underline"
                  >
                    {contact.magantel}
                  </a>
                </p>
                <p>
                  <span className="font-semibold">Email: </span>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-blue-600 hover:underline"
                  >
                    {contact.email}
                  </a>
                </p>
              </div>
              <select
                onChange={(e) => selectType(e.target.value)}
                defaultValue=""
                className="select select-md mt-2"
              >
                <option value="" disabled>
                  Válasszon rendelési típust
                </option>
                <option value="magán">Magán rendelés</option>
                <option value="körzeti">Körzeti rendelés</option>
              </select>
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
    }

    return null; // When no type is selected, render nothing
  };

  return { Modal, Content, selectedType, closeModal, selectType };
};

export default useRendelesType;