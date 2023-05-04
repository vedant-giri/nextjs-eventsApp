import Link from "next/link"
import React,{useState,useEffect} from 'react'


export const HomePage = ({ data }) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1145);
      
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return (
    <div className="home_body" >
      {data.map((env) => (
        <Link className="card" passHref={true} key={env.id} href={`/events/${env.id}`}>
          {isMobile && <h2>{env.title}</h2>}
          <div >
            <img className="image" src={env.image} alt={env.title} />
          </div>

          <div className="content">
            {!isMobile && <h2>{env.title}</h2>}
            <p>{env.description}</p>
          </div>
        </Link>
      ))}

    </div>
  )
}