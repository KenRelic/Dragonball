import Image from 'next/image'

const Card  = (props) =>{
  return(
     <>         
        <Image src={props.image} width={450} height={600} />
        <div className="cardTitle">
             <h3>{props.name}</h3>
             <p><div className="statusColor"></div> {props.status}</p>
          </div>
     </>
  )
}
export default Card