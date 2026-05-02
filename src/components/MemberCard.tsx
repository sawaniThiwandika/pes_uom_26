/*
interface MemberCardProps {
  name: string;
  role: string;
  image: string;
}

export default function MemberCard({name,role,image}: MemberCardProps){

return(

<div className="member-card">

<img src={image} alt={name} />

<h3>{name}</h3>

<p>{role}</p>

</div>

)

}*/


interface MemberCardProps {
  name: string;
  role: string;
  image: string;
}

export default function MemberCard({ name, role, image }: MemberCardProps) {
  return (
      <div className="w-full max-w-xs h-80 bg-gradient-to-br from-white to-gray-100 rounded-3xl flex flex-col items-center justify-center p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-350 relative overflow-hidden group hover:-translate-y-1.5 hover:shadow-[0_10px_25px_rgba(0,0,0,0.15)]">
        {/* Glow Border Effect on Hover */}
        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
             style={{
               background: 'linear-gradient(120deg, #2E7D32, transparent, #2E7D32)',
               padding: '2px',
               WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
               WebkitMaskComposite: 'xor',
               maskComposite: 'exclude',
             }}>
        </div>

        {/* Image */}
        <img
            src={image}
            alt={name}
            className="w-32 h-32 rounded-full object-cover border-4 border-[#2E7D32] mb-4 transition-transform duration-400 group-hover:scale-110"
        />

        {/* Name */}
        <h3 className="text-lg font-semibold text-gray-900 my-1">
          {name}
        </h3>

        {/* Role */}
        <p className="text-sm text-gray-600">
          {role}
        </p>
      </div>
  );
}