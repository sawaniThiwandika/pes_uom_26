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

import { FaEnvelope, FaLinkedinIn } from "react-icons/fa";

interface MemberCardProps {
    name: string;
    role: string;
    image: string;
    linkedin: string;
    email: string;
}

export default function MemberCard({
                                       name,
                                       role,
                                       image,
                                       email,
                                       linkedin,
                                   }: MemberCardProps) {
    return (
        <div
            className="
      w-full max-w-[220px] sm:max-w-xs
      h-64 sm:h-72
      bg-gradient-to-br from-white to-gray-100
      rounded-2xl sm:rounded-3xl
      flex flex-col items-center justify-center
      p-3 sm:p-5
      shadow-[0_8px_20px_rgba(0,0,0,0.06)]
      sm:shadow-[0_10px_30px_rgba(0,0,0,0.08)]
      transition-all duration-300
      relative overflow-hidden group
      hover:-translate-y-1
    "
        >
            {/* Image */}
            <img
                src={image}
                alt={name}
                className="
        w-28 h-28 sm:w-28 sm:h-28
        rounded-full object-cover
        border-2 sm:border-4 border-[#2E7D32]
        mb-2 sm:mb-3
        transition-transform duration-300
        group-hover:scale-105
      "
            />

            {/* Name */}
            <h3 className="text-sm sm:text-base font-semibold text-gray-900 my-0.5 text-center">
                {name}
            </h3>

            {/* Role */}
            <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3 text-center">
                {role}
            </p>

            {/* Icons */}
            <div className="flex items-center gap-1.5">
                <a
                    href={`mailto:${email}`}
                    className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center rounded-full bg-[#e9f0e6] text-[#1b6b25] hover:bg-[#1b6b25] hover:text-white transition-all"
                >
                    <FaEnvelope size={9} />
                </a>

                {linkedin && (
                    <a
                        href={linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center rounded-full bg-[#e9f0e6] text-[#1b6b25] hover:bg-[#0a66c2] hover:text-white transition-all"
                    >
                        <FaLinkedinIn size={9} />
                    </a>
                )}
            </div>
        </div>
    );
}