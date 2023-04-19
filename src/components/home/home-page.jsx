import Link from "next/link"


export const HomePage = ({ data }) => {
  return (
    <div className="home_body" >
      {data.map((env) => (
        <Link className="card" passHref={true} key={env.id} href={`/events/${env.id}`}>
          <div className="image">
            <img width={450} height={300} src={env.image} alt={env.title} />
          </div>

          <div className="content">
            <h2>{env.title}</h2><p>{env.description}</p>
          </div>
        </Link>
      ))}

    </div>
  )
}