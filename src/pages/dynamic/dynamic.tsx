import React from 'react'
import { useParams } from 'react-router-dom'
import Form from '../../components/form' // Make sure to create and import your Form component
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'

//Minden oldal paragraphusába html-ként kell beragd a kontentet osztályokat használva amiket később az index.css-ben tudzs megírni.
//Pl. raksz egy fejlécet vagy van piros szöveg akkor az össszes prios szöveget span-ba vagy h1-be rakod méret függő és a css-be beállítod az osztályra hog piros legyen.
//a baj hogy a képek és videok elhelyezkedésését is html-be kell megadnod de chatgpt-nek screeneld be a tartalmat és ird meg neki h a kép alapján készitse el a tiszta html-t itt a szöveg az oldalről.
//de egyébként van lehetőség video beágazására az objektumból is de azt hagyjad
//Ha elkészültél commitolj és synceld le én meg gyors bedesignolom a diveket meg le csekkolom és készen is vagyunk.

const treatments = [
  {
    key: "diagnosztika-allapotfelmeres",
    name: "Diagnosztika, állapotfelmérés",
    paragraph: "<p>Detailed information about <strong>Diagnosztika, állapotfelmérés</strong>.</p>",
    videos: ["https://example.com/video1", "https://example.com/video2"]
  },
  {
    key: "professzionalis-fogtisztitas",
    name: "Professzionális fogtisztitás",
    paragraph: "<p>Detailed information about <strong>Professzionális fogtisztitás</strong>.</p>",
    videos: ["https://example.com/video3", "https://example.com/video4"]
  },
  // Add other treatments here
]

const Dynamic = () => {
  const { string } = useParams<{ string: string }>()
  const treatment = treatments.find(t => t.key === string)

  if (!treatment) {
    return <div>Treatment not found</div>
  }

  return (
    <div>
      <Navbar />
      <h1>{treatment.name}</h1>
      <div dangerouslySetInnerHTML={{ __html: treatment.paragraph }} />
      <div>
        {treatment.videos.map((video, index) => (
          <div key={index}>
            <iframe src={video} title={`Video ${index + 1}`} width="560" height="315" frameBorder="0" allowFullScreen></iframe>
          </div>
        ))}
      </div>
      <Form />
      <Footer />
    </div>
  )
}

export default Dynamic