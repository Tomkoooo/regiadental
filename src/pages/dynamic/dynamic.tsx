import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Form from '../../components/form'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import '../../components/bootstrap.css'

const Dynamic = () => {
  const { string } = useParams<{ string: string }>()
  const [treatmentData, setTreatmentData] = useState<{ slug: string; content: string } | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

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
        <div className='min-h-screen flex items-center justify-cetner w-full'><div className="loading spinner-loading spinner "></div></div>
        <Footer />
      </div>
    )
  }

  if (error || !treatmentData) {
    return (
      <div>
        <Navbar />
        <div >{error || 'Treatment not found'}</div>
        <Footer />
      </div>
    )
  }

  return (
    <div>
      <Navbar />
      <div className='w-full min-h-screen flex px-4' dangerouslySetInnerHTML={{ __html: treatmentData.content }} />
      <Form />
      <Footer />
    </div>
  )
}

export default Dynamic