import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import '../../components/bootstrap.css'
import useRendelesType from '../../hooks/useRendelesType'
import { IconForms } from '@tabler/icons-react'

const Dynamic = () => {
  const { string } = useParams<{ string: string }>()
  const [treatmentData, setTreatmentData] = useState<{ slug: string; content: string } | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { Modal, Content } = useRendelesType()

  useEffect(() => {
    const fetchTreatmentData = async () => {
      try {
        setLoading(true)
        const response = await fetch(`https://www.regiadental.hu/dataFetch.php?slug=${string}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
        
        if (!response.ok) {
          throw new Error('Failed to fetch treatment data')
        }
        
        const data = await response.json()
        console.log(data)
        
        if (data.error) {
          throw new Error(data.error)
        }
        
        setTreatmentData(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchTreatmentData()
  }, [string])

  useEffect(() => {
    console.log(treatmentData)
  }, [treatmentData])

  if (loading) {
    return (
      <div>
        <Navbar />
        <div className='min-h-screen flex items-center justify-center w-full'>
          <div className="loading spinner-loading spinner"></div>
        </div>
        <Footer />
      </div>
    )
  }

  if (error || !treatmentData) {
    return (
      <div>
        <Navbar />
        <div className='min-h-screen flex items-center justify-center w-full'>
          {error || 'Treatment not found'}
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="w-full flex flex-col">
      <Navbar />
      <Modal />
      <div className="w-full min-h-screen flex flex-col px-4">
        <div dangerouslySetInnerHTML={{ __html: treatmentData.content }} />
        <div className="flex items-center gap-4 w-full mt-8">
          <div className="flex-1 border-t-2 border-red-500 border-info"></div>
          <IconForms color="oklch(0.637 0.237 25.331)" size={100} />
          <div className="flex-1 border-t-2 border-info border-red-500"></div>
        </div>
        <h1 className="text-3xl flex items-center justify-center w-full font-bold">KAPCSOLAT</h1>
        <Content />
      </div>
      <Footer />
    </div>
  )
}

export default Dynamic