import MemberCard from "../components/MemberCard";
import "../styles/pages.css";

export default function Committees(){

  const executive = [

    {
      name:"Ushan Muditha",
      role:"Chairman",
      image:"/members/ushan.jpg"
    },

    {
      name:"Avishka Rajapaksha",
      role:"Vice Chairman",
      image:"/members/avishka.jpg"
    },

    {
      name:"Sandaru Dias",
      role:"Secretary",
      image:"/members/sandaru.jpg"
    },

    {
      name:"Nimesh Dilhara",
      role:"Treasurer",
      image:"/members/nimesh.jpg"
    }

  ]

  return(

    <div className="committee-page">

      <h1>Executive Committee</h1>

      <div className="committee-grid">

        {executive.map((member,index)=>(
          <MemberCard
            key={index}
            name={member.name}
            role={member.role}
            image={member.image}
          />
        ))}

      </div>

    </div>

  )

}