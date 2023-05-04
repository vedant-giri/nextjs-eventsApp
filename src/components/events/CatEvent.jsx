
import Link from 'next/link'


const CatEvent = ({ pageName, data }) => {
  

  return (
    <div className='cat_events'>
      <h1>Events In {pageName}</h1>
      <div className="content">
        {data.map((env) => (
          <Link key={env.id} href={`/events/${env.city}/${env.id}`} className='link_card' passHref={true}>
            <div className="card">
              
              <img className='image' src={env.image} width={330} height={260} alt={env.title} />
               <h2>{env.title}</h2>
              <p>{env.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CatEvent
