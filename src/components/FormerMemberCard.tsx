import { FaEnvelope, FaLinkedinIn } from "react-icons/fa";

export interface FormerMemberCardProps {
    name: string;
    role: string;
    image: string;
    email: string;
    linkedin: string;
}

export default function FormerMemberCard({
                                             name,
                                             role,
                                             image,
                                             email,
                                             linkedin,
                                         }: FormerMemberCardProps) {
    return (
        <div className="flex items-center gap-3 bg-white rounded-2xl p-3.5 shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_24px_rgba(27,107,37,0.13)] transition-all duration-300 hover:-translate-y-0.5 group border border-transparent hover:border-[#2E7D32]/10">
            {/* Avatar */}
            <div className="relative flex-shrink-0">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#2E7D32]/25 group-hover:border-[#2E7D32]/60 transition-colors duration-300">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400"
                    />
                </div>
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-[#0f1f12] leading-tight mb-0.5 truncate">
                    {name}
                </h4>
                <p className="text-xs font-medium text-[#1b6b25] mb-2 truncate">{role}</p>

                {/* Action icons */}
                <div className="flex items-center gap-1.5">
                    <a
                        href={`mailto:${email}`}
                        className="flex items-center justify-center w-6 h-6 rounded-full bg-[#e9f0e6] text-[#1b6b25] hover:bg-[#1b6b25] hover:text-white transition-all duration-200"
                        title={email}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <FaEnvelope size={10} />
                    </a>
                    {linkedin && (
                        <a
                            href={linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-6 h-6 rounded-full bg-[#e9f0e6] text-[#1b6b25] hover:bg-[#0a66c2] hover:text-white transition-all duration-200"
                            title="LinkedIn Profile"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <FaLinkedinIn size={10} />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}