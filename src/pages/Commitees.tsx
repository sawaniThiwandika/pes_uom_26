/*

import { useState } from "react";
import {
  FaBullhorn,
  FaCalendarAlt,
  FaChartLine,
  FaCode,
  FaFeatherAlt,
  FaPalette,
  FaShieldAlt,
} from "react-icons/fa";
import MemberCard from "../components/MemberCard";
import advisor from "../assets/Advisor.webp";
import kavishka from "../../public/committee/kavishka.webp";
import nadun from "../../public/committee/nadun.webp";
import saneru from "../../public/committee/saneru.webp";
import lasindu from "../../public/committee/lasindu.webp";
import ishan from "../../public/committee/ishan.webp";
import vidura from "../../public/committee/vidura.webp";
import dulsika from "../../public/committee/dulsika.webp";
import mahesha from "../../public/committee/mahesha.webp";
import pabasara from "../../public/committee/pabasara.webp";
import shakya from "../../public/committee/shakya.webp";
import seynath from "../../public/committee/seynath.webp";
import vihanga from "../../public/committee/vihanga.webp";
import hasitha from "../../public/committee/hasitha.webp";
import anupa from "../../public/committee/anupa.webp";
import kivira from "../../public/committee/kivira.webp";
import chamix from "../../public/committee/chamix.webp";
import easha from "../../public/committee/easha.webp";
import achintha from "../../public/committee/achintha.webp";
import dilini from "../../public/committee/dilni.webp";
import thuvarahan from "../../public/committee/thuvarahan.webp";
import thisul from "../../public/committee/thisul.webp";
import shalani from "../../public/committee/shalani.webp";
import vindya from "../../public/committee/vindya.webp";
import harshani from "../../public/committee/harshani.webp";
import dulasha from "../../public/committee/dulasha.webp";
import raveesha from "../../public/committee/raveesha.webp";
import charithma from "../../public/committee/charithma.webp";
import okindu from "../../public/committee/okindu.webp";
import sawani from "../../public/committee/sawani.webp";
import chanupa from "../../public/committee/chanupa.webp";
import madhuwantha from "../../public/committee/madhuwantha.webp";

export default function Committees() {
  const [activeTab, setActiveTab] = useState(0);

  const committees = [
    {
      title: "Executive Committee",
      Icon: FaShieldAlt,
      members: [
        { name: "Kavishka Lakshan", role: "Chairman", image: kavishka },
        { name: "Nadun Walaketiya", role: "Vice Chairman", image: nadun },
        { name: "Saneru Weerasinghe", role: "Secretary", image: saneru },
        { name: "Lasindu Shaluka", role: "Treasurer", image: lasindu },
        { name: "Ishan Sasnaka", role: "Webmaster", image: ishan },
      ],
    },
    {
      title: "Public Relations",
      Icon: FaBullhorn,
      members: [
        { name: "Vidura Jayawardhene", role: "Lead", image: vidura },
        { name: "Dulsika Mendis", role: "Member", image: dulsika },
        { name: "Mahesha Weerasinghe", role: "Member", image: mahesha },
      ],
    },
    {
      title: "Organizing",
      Icon: FaCalendarAlt,
      members: [
        { name: "Pabasara Piyumal", role: "Lead", image: pabasara },
        { name: "Shakya Marasingha", role: "Member", image: shakya },
        { name: "Seynath Chathwara Suraweera", role: "Member", image: seynath },
        { name: "Sembakuttige Vihanga Kaushal", role: "Member", image: vihanga },
        { name: "Hasitha Rupasinghe", role: "Member", image: hasitha },
        { name: "P.K. Anupa Minojitha", role: "Member", image: anupa },
        { name: "Kivira Vehan Gammaddegoda", role: "Member", image: kivira },
      ],
    },
    {
      title: "Creative Design",
      Icon: FaPalette,
      members: [
        { name: "Chamiru Gajasinghe", role: "Lead", image: chamix },
        { name: "Easha Wanniarachchi", role: "Member", image: easha },
        { name: "Achintha Niroshan", role: "Member", image: achintha },
        { name: "Dilni Nimanya Muthukuda", role: "Member", image: dilini },
        { name: "Thuvarahan Thayalan", role: "Member", image: thuvarahan },
        { name: "B.G. Thisul Dulneth", role: "Member", image: thisul },
      ],
    },
    {
      title: "Editorial",
      Icon: FaFeatherAlt,
      members: [
        { name: "Shalani Ambalangodage", role: "Lead", image: shalani },
        { name: "Vindya Nilushika", role: "Member", image: vindya },
        { name: "Harshani Lakmali", role: "Member", image: harshani },
        { name: "Dulasha Perera", role: "Member", image: dulasha },
        { name: "Raveesha Samarasinghe", role: "Member", image: raveesha },
      ],
    },
    {
      title: "Finance",
      Icon: FaChartLine,
      members: [
        { name: "Charithma Dewmi", role: "Lead", image: charithma },
        { name: "Okindu Fernando", role: "Member", image: okindu },
      ],
    },
    {
      title: "Web Development",
      Icon: FaCode,
      members: [
        { name: "Sawani Thiwandika", role: "Lead", image: sawani },
        { name: "Chanupa Hansaja Vithanage", role: "Member", image: chanupa },
        { name: "Madhuwantha Dissanayaka", role: "Member", image: madhuwantha },
      ],
    },
  ];

  const current = committees[activeTab];
  const lead = current.members.find((member) => member.role === "Lead");
  const members = current.members.filter((member) => member.role !== "Lead");

  return (
      <div className="relative w-full overflow-hidden bg-gradient-to-b from-[#f8fbf7] to-[#eef5ef] px-4 sm:px-8 lg:px-28 py-24 md:py-32">
        {/!* Background Gradient Decorations *!/}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-[15%] w-96 h-96 rounded-full bg-[radial-gradient(circle,rgba(46,125,50,0.08)_0%,transparent_70%)] blur-3xl"></div>
          <div className="absolute top-20 right-[15%] w-80 h-80 rounded-full bg-[radial-gradient(circle,rgba(27,94,32,0.06)_0%,transparent_70%)] blur-3xl"></div>
        </div>

        {/!* Main Content *!/}
        <div className="relative z-10 max-w-6xl mx-auto">
          {/!* Page Title *!/}
          <h1 className="text-center text-3xl sm:text-4xl lg:text-6xl font-serif text-[#0f1f12] mb-6 lg:mb-8">
            Committees
          </h1>
          <div
              className="flex flex-wrap justify-center gap-2 lg:gap-2.5 w-full max-w-4xl mx-auto mb-12 lg:mb-14 md:flex-wrap">
            {/!* Desktop layout: flex wrap *!/}
            <div className="hidden md:flex flex-wrap justify-center gap-2.5 w-full">
              {committees.map((committee, index) => (
                  <button
                      key={committee.title}
                      onClick={() => setActiveTab(index)}
                      className={`flex items-center justify-center gap-2 min-h-11 px-3.5 py-2.5 border-0 rounded-full font-semibold text-sm transition-all duration-300 whitespace-nowrap ${
                          activeTab === index
                              ? "bg-[#1b6b25] text-white shadow-[0_18px_38px_rgba(27,107,37,0.28)]"
                              : "bg-white text-[#172017] shadow-[0_10px_24px_rgba(15,23,42,0.1)] hover:-translate-y-1 hover:shadow-[0_14px_28px_rgba(15,23,42,0.14)]"
                      }`}
                      type="button"
                  >
                <span
                    className={`flex items-center justify-center w-7 h-7 rounded-full text-sm ${
                        activeTab === index
                            ? "bg-white/18 text-white"
                            : "bg-[#e9f0e6] text-[#172017]"
                    }`}
                >
                  <committee.Icon/>
                </span>
                    <span>{committee.title}</span>
                  </button>
              ))}
            </div>

            <div className="md:hidden grid grid-cols-2 gap-2 w-full max-w-xs mx-auto">
              {committees.map((committee, index) => (
                  <button
                      key={committee.title}
                      onClick={() => setActiveTab(index)}
                      className={`
                  ${index === 0 ? "col-span-2" : ""}
                  flex items-center justify-center gap-1.5 min-h-9 px-2 py-1.5 border-0 rounded-full font-semibold text-xs transition-all duration-300 whitespace-normal
                  ${
                          activeTab === index
                              ? "bg-[#1b6b25] text-white shadow-[0_18px_38px_rgba(27,107,37,0.28)]"
                              : "bg-white text-[#172017] shadow-[0_10px_24px_rgba(15,23,42,0.1)]"
                      }
                `}
                      type="button"
                  >
                <span
                    className={`flex items-center justify-center w-5 h-5 rounded-full text-xs flex-shrink-0 ${
                        activeTab === index
                            ? "bg-white/18 text-white"
                            : "bg-[#e9f0e6] text-[#172017]"
                    }`}
                >
                  <committee.Icon/>
                </span>
                    <span className="text-center text-xs">{committee.title}</span>
                  </button>
              ))}
            </div>
          </div>

          {activeTab === 0 && (
              <section className="text-center mb-16 lg:mb-20">
                <div
                    className="w-full max-w-xs h-80 bg-gradient-to-br from-white to-gray-100 rounded-3xl flex flex-col items-center justify-center p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-350 relative overflow-hidden group hover:-translate-y-1.5 hover:shadow-[0_10px_25px_rgba(0,0,0,0.15)] mx-auto">

                  <div
                      className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                      style={{
                        background: 'linear-gradient(120deg, #2E7D32, transparent, #2E7D32)',
                        padding: '2px',
                        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        WebkitMaskComposite: 'xor',
                        maskComposite: 'exclude',
                      }}
                  />

                  <div className="flex flex-col items-center gap-4">
                    {/!* Advisor Image Container *!/}
                    <div className="relative">
                      <div
                          className="relative w-40 h-52 rounded-3xl overflow-hidden shadow-[0_15px_40px_rgba(46,125,50,0.2)] transition-transform duration-300 group-hover:scale-105">
                        <img
                            src={advisor}
                            alt="Advisor"
                            className="w-full h-full object-cover"
                        />

                        {/!* Enhanced Overlay *!/}
                        <div
                            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                          <div className="space-y-1.5">
                            <p className="text-xs text-white leading-relaxed font-medium">
                              B.Sc (Moratuwa), M.Eng. (Canada)
                            </p>
                            <p className="text-xs text-white leading-relaxed font-medium">
                              P.Eng. (ON, Canada)
                            </p>
                            <hr className="border-white/30 my-1.5"/>
                            <p className="text-xs text-white leading-relaxed">
                              Senior Lecturer Gr. II
                            </p>
                            <p className="text-xs text-white/90 leading-relaxed">
                              Department of Electrical Engineering
                            </p>
                            <p className="text-xs text-white/90 leading-relaxed">
                              University of Moratuwa
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/!* Advisor Information *!/}
                  <div className="text-center space-y-1.5">
                    <h3 className="text-lg lg:text-xl font-bold text-[#0f1f12]">
                      Mrs. K.A.T. Lasagani
                    </h3>
                    <p className="text-xs lg:text-sm font-semibold text-[#1b6b25] tracking-wide">
                      IEEE PES CHAPTER ADVISOR
                    </p>
                  </div>

                </div>
              </section>
          )}

          {/!* Member Cards Section *!/}
          {current.title === "Executive Committee" ? (
              <>
                {/!* First Row - Chair & Vice Chair *!/}
                <div className="flex flex-wrap justify-center gap-8 mb-8 lg:mb-10">
                  <MemberCard {...current.members[0]} />
                  <MemberCard {...current.members[1]} />
                </div>

                {/!* Second Row - Remaining Members *!/}
                <div className="flex flex-wrap justify-center gap-8">
                  {current.members.slice(2).map((member) => (
                      <MemberCard key={member.name} {...member} />
                  ))}
                </div>
              </>
          ) : (
              <>
                {/!* Lead Member - Centered alone *!/}
                {lead && (
                    <div className="flex flex-wrap justify-center gap-8 mb-8 lg:mb-10">
                      <MemberCard {...lead} />
                    </div>
                )}

                {/!* Other Members *!/}
                <div className="flex flex-wrap justify-center gap-8">
                  {members.map((member) => (
                      <MemberCard key={member.name} {...member} />
                  ))}
                </div>
              </>
          )}
        </div>
      </div>
  );
}*/

/*
import { useState } from "react";
import {
  FaBullhorn,
  FaCalendarAlt,
  FaChartLine,
  FaCode,
  FaFeatherAlt,
  FaPalette,
  FaShieldAlt,
} from "react-icons/fa";
import MemberCard from "../components/MemberCard";
import "../styles/pages.css";
import advisor from "../assets/Advisor.webp";
import kavishka from "../../public/committee/kavishka.webp";
import nadun from "../../public/committee/nadun.webp";
import saneru from "../../public/committee/saneru.webp";
import lasindu from "../../public/committee/lasindu.webp";
import ishan from "../../public/committee/ishan.webp";
import vidura from "../../public/committee/vidura.webp";
import dulsika from "../../public/committee/dulsika.webp";
import mahesha from "../../public/committee/mahesha.webp";
import pabasara from "../../public/committee/pabasara.webp";
import shakya from "../../public/committee/shakya.webp";
import seynath from "../../public/committee/seynath.webp";
import vihanga from "../../public/committee/vihanga.webp";
import hasitha from "../../public/committee/hasitha.webp";
import anupa from "../../public/committee/anupa.webp";
import kivira from "../../public/committee/kivira.webp";
import chamix from "../../public/committee/chamix.webp";
import easha from "../../public/committee/easha.webp";
import achintha from "../../public/committee/achintha.webp";
import dilini from "../../public/committee/dilni.webp";
import thuvarahan from "../../public/committee/thuvarahan.webp";
import thisul from "../../public/committee/thisul.webp";
import shalani from "../../public/committee/shalani.webp";
import vindya from "../../public/committee/vindya.webp";
import harshani from "../../public/committee/harshani.webp";
import dulasha from "../../public/committee/dulasha.webp";
import raveesha from "../../public/committee/raveesha.webp";
import charithma from "../../public/committee/charithma.webp";
import okindu from "../../public/committee/okindu.webp";
import sawani from "../../public/committee/sawani.webp";
import chanupa from "../../public/committee/chanupa.webp";
import madhuwantha from "../../public/committee/madhuwantha.webp";

export default function Committees() {
  const [activeTab, setActiveTab] = useState(0);

  const committees = [
    {
      title: "Executive Committee",
      Icon: FaShieldAlt,
      members: [
        { name: "Kavishka Lakshan", role: "Chairman", image: kavishka },
        { name: "Nadun Walaketiya", role: "Vice Chairman", image: nadun },
        { name: "Saneru Weerasinghe", role: "Secretary", image: saneru },
        { name: "Lasindu Shaluka", role: "Treasurer", image: lasindu },
        { name: "Ishan Sasnaka", role: "Webmaster", image: ishan },
      ],
    },
    {
      title: "Public Relations",
      Icon: FaBullhorn,
      members: [
        { name: "Vidura Jayawardhene", role: "Lead", image: vidura },
        { name: "Dulsika Mendis", role: "Member", image: dulsika },
        { name: "Mahesha Weerasinghe", role: "Member", image: mahesha },
      ],
    },
    {
      title: "Organizing",
      Icon: FaCalendarAlt,
      members: [
        { name: "Pabasara Piyumal", role: "Lead", image: pabasara },
        { name: "Shakya Marasingha", role: "Member", image: shakya },
        { name: "Seynath Chathwara Suraweera", role: "Member", image: seynath },
        { name: "Sembakuttige Vihanga Kaushal", role: "Member", image: vihanga },
        { name: "Hasitha Rupasinghe", role: "Member", image: hasitha },
        { name: "P.K. Anupa Minojitha", role: "Member", image: anupa },
        { name: "Kivira Vehan Gammaddegoda", role: "Member", image: kivira },
      ],
    },
    {
      title: "Creative Design",
      Icon: FaPalette,
      members: [
        { name: "Chamiru Gajasinghe", role: "Lead", image: chamix },
        { name: "Easha Wanniarachchi", role: "Member", image: easha },
        { name: "Achintha Niroshan", role: "Member", image: achintha },
        { name: "Dilni Nimanya Muthukuda", role: "Member", image: dilini },
        { name: "Thuvarahan Thayalan", role: "Member", image: thuvarahan },
        { name: "B.G. Thisul Dulneth", role: "Member", image: thisul },
      ],
    },
    {
      title: "Editorial",
      Icon: FaFeatherAlt,
      members: [
        { name: "Shalani Ambalangodage", role: "Lead", image: shalani },
        { name: "Vindya Nilushika", role: "Member", image: vindya },
        { name: "Harshani Lakmali", role: "Member", image: harshani },
        { name: "Dulasha Perera", role: "Member", image: dulasha },
        { name: "Raveesha Samarasinghe", role: "Member", image: raveesha },
      ],
    },
    {
      title: "Finance",
      Icon: FaChartLine,
      members: [
        { name: "Charithma Dewmi", role: "Lead", image: charithma },
        { name: "Okindu Fernando", role: "Member", image: okindu },
      ],
    },
    {
      title: "Web Development",
      Icon: FaCode,
      members: [
        { name: "Sawani Thiwandika", role: "Lead", image: sawani },
        { name: "Chanupa Hansaja Vithanage", role: "Member", image: chanupa },
        { name: "Madhuwantha Dissanayaka", role: "Member", image: madhuwantha },
      ],
    },
  ];

  const current = committees[activeTab];
  const lead = current.members.find((member) => member.role === "Lead");
  const members = current.members.filter((member) => member.role !== "Lead");

  return (
    <div className="committee-page">
      <h1 className="committee-main-title">Committees</h1>

      <div className="committee-tabs">
        {committees.map((committee, index) => (
          <button
            key={committee.title}
            className={activeTab === index ? "tab active" : "tab"}
            onClick={() => setActiveTab(index)}
            type="button"
          >
            <span className="tab-icon">
              <committee.Icon />
            </span>
            <span>{committee.title}</span>
          </button>
        ))}
      </div>

      {activeTab === 0 && (
        <section className="advisor-section committee-advisor">
          <h2 className="advisor-title">Advisor</h2>

          <div className="advisor-card">
            <div className="advisor-image-container">
              <img src={advisor} alt="Advisor" className="advisor-img" />

              <div className="advisor-overlay">
                <p>B.Sc (Moratuwa), M.Eng. (Canada), P.Eng. (ON, Canada)</p>
                <p>Senior Lecturer Gr. II</p>
                <p>Department of Electrical Engineering</p>
                <p>University of Moratuwa</p>
              </div>
            </div>

            <h3>Mrs. K.A.T. Lasagani</h3>
            <p className="advisor-role">IEEE PES Chapter Advisor</p>
          </div>
        </section>
      )}

      {current.title === "Executive Committee" ? (
        <>
          <div className="committee-row">
            <MemberCard {...current.members[0]} />
            <MemberCard {...current.members[1]} />
          </div>

          <div className="committee-row">
            {current.members.slice(2).map((member) => (
              <MemberCard key={member.name} {...member} />
            ))}
          </div>
        </>
      ) : (
        <>
          {lead && (
            <div className="committee-row">
              <MemberCard {...lead} />
            </div>
          )}

          <div className="committee-row">
            {members.map((member) => (
              <MemberCard key={member.name} {...member} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
*/


import { useState } from "react";
import {
  FaBullhorn,
  FaCalendarAlt,
  FaChartLine,
  FaCode,
  FaFeatherAlt,
  FaPalette,
  FaShieldAlt,
  FaChevronDown,
  FaHistory,
} from "react-icons/fa";
import MemberCard from "../components/MemberCard";
import FormerMemberCard, { type FormerMemberCardProps } from "../components/FormerMemberCard";
import advisor from "../assets/Advisor.webp";
import kavishka from "../../public/committee/kavishka.webp";
import nadun from "../../public/committee/nadun.webp";
import saneru from "../../public/committee/saneru.webp";
import lasindu from "../../public/committee/lasindu.webp";
import ishan from "../../public/committee/ishan.webp";
import vidura from "../../public/committee/vidura.webp";
import dulsika from "../../public/committee/dulsika.webp";
import mahesha from "../../public/committee/mahesha.webp";
import pabasara from "../../public/committee/pabasara.webp";
import shakya from "../../public/committee/shakya.webp";
import seynath from "../../public/committee/seynath.webp";
import vihanga from "../../public/committee/vihanga.webp";
import hasitha from "../../public/committee/hasitha.webp";
import anupa from "../../public/committee/anupa.webp";
import kivira from "../../public/committee/kivira.webp";
import chamix from "../../public/committee/chamix.webp";
import easha from "../../public/committee/easha.webp";
import achintha from "../../public/committee/achintha.webp";
import dilini from "../../public/committee/dilni.webp";
import thuvarahan from "../../public/committee/thuvarahan.webp";
import thisul from "../../public/committee/thisul.webp";
import shalani from "../../public/committee/shalani.webp";
import vindya from "../../public/committee/vindya.webp";
import harshani from "../../public/committee/harshani.webp";
import dulasha from "../../public/committee/dulasha.webp";
import raveesha from "../../public/committee/raveesha.webp";
import charithma from "../../public/committee/charithma.webp";
import okindu from "../../public/committee/okindu.webp";
import sawani from "../../public/committee/sawani.webp";
import chanupa from "../../public/committee/chanupa.webp";
import madhuwantha from "../../public/committee/madhuwantha.webp";

// ─── Former Committee Data ────────────────────────────────────────────────────
// TODO: Replace placeholder images with actual photos for each former member.
// Import the actual images at the top of this file and update the `image` fields.

interface FormerYear {
  year: string;
  members: FormerMemberCardProps[];
}

const formerCommittees: FormerYear[] = [
  {
    year: "2024/25",
    members: [
      {
        name: "Former Chairman",           // TODO: Replace with actual name
        role: "Chairman",
        image: kavishka,                   // TODO: Replace with actual image import
        email: "chairman2425@ieee.org",    // TODO: Replace with actual email
        linkedin: "https://linkedin.com",  // TODO: Replace with actual LinkedIn URL
      },
      {
        name: "Former Vice Chairman",
        role: "Vice Chairman",
        image: nadun,
        email: "vicechairman2425@ieee.org",
        linkedin: "https://linkedin.com",
      },
      {
        name: "Former Secretary",
        role: "Secretary",
        image: saneru,
        email: "secretary2425@ieee.org",
        linkedin: "https://linkedin.com",
      },
      {
        name: "Former Treasurer",
        role: "Treasurer",
        image: lasindu,
        email: "treasurer2425@ieee.org",
        linkedin: "https://linkedin.com",
      },
      {
        name: "Former Webmaster",
        role: "Webmaster",
        image: ishan,
        email: "webmaster2425@ieee.org",
        linkedin: "https://linkedin.com",
      },
    ],
  },
  {
    year: "2023/24",
    members: [
      {
        name: "Former Chairman",
        role: "Chairman",
        image: kavishka,
        email: "chairman2324@ieee.org",
        linkedin: "https://linkedin.com",
      },
      {
        name: "Former Vice Chairman",
        role: "Vice Chairman",
        image: nadun,
        email: "vicechairman2324@ieee.org",
        linkedin: "https://linkedin.com",
      },
      {
        name: "Former Secretary",
        role: "Secretary",
        image: saneru,
        email: "secretary2324@ieee.org",
        linkedin: "https://linkedin.com",
      },
      {
        name: "Former Treasurer",
        role: "Treasurer",
        image: lasindu,
        email: "treasurer2324@ieee.org",
        linkedin: "https://linkedin.com",
      },
      {
        name: "Former Webmaster",
        role: "Webmaster",
        image: ishan,
        email: "webmaster2324@ieee.org",
        linkedin: "https://linkedin.com",
      },
    ],
  },
  {
    year: "2022/23",
    members: [
      {
        name: "Former Chairman",
        role: "Chairman",
        image: kavishka,
        email: "chairman2223@ieee.org",
        linkedin: "https://linkedin.com",
      },
      {
        name: "Former Vice Chairman",
        role: "Vice Chairman",
        image: nadun,
        email: "vicechairman2223@ieee.org",
        linkedin: "https://linkedin.com",
      },
      {
        name: "Former Secretary",
        role: "Secretary",
        image: saneru,
        email: "secretary2223@ieee.org",
        linkedin: "https://linkedin.com",
      },
      {
        name: "Former Treasurer",
        role: "Treasurer",
        image: lasindu,
        email: "treasurer2223@ieee.org",
        linkedin: "https://linkedin.com",
      },
      {
        name: "Former Webmaster",
        role: "Webmaster",
        image: ishan,
        email: "webmaster2223@ieee.org",
        linkedin: "https://linkedin.com",
      },
    ],
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function Committees() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeFormerYear, setActiveFormerYear] = useState(0);
  const [showFormerCommittee, setShowFormerCommittee] = useState(false);

  const committees = [
    {
      title: "Executive Committee",
      Icon: FaShieldAlt,
      members: [
        { name: "Kavishka Lakshan", role: "Chairman", image: kavishka,email:"ieeepessbcuniversityofmoratuwa@gmail.com",linkedin: "https://linkedin.com", },
        { name: "Nadun Walaketiya", role: "Vice Chairman", image: nadun,email:"ieeepessbcuniversityofmoratuwa@gmail.com",linkedin: "https://linkedin.com", },
        { name: "Saneru Weerasinghe", role: "Secretary", image: saneru,email:"ieeepessbcuniversityofmoratuwa@gmail.com",linkedin: "https://linkedin.com", },
        { name: "Lasindu Shaluka", role: "Treasurer", image: lasindu,email:"ieeepessbcuniversityofmoratuwa@gmail.com",linkedin: "https://linkedin.com", },
        { name: "Ishan Sasnaka", role: "Webmaster", image: ishan,email:"ieeepessbcuniversityofmoratuwa@gmail.com",linkedin: "https://linkedin.com", },
      ],
    },
    {
      title: "Public Relations",
      Icon: FaBullhorn,
      members: [
        { name: "Vidura Jayawardhene", role: "Lead", image: vidura,email:"ieeepessbcuniversityofmoratuwa@gmail.com",linkedin: "https://linkedin.com", },
        { name: "Dulsika Mendis", role: "Member", image: dulsika,email:"ieeepessbcuniversityofmoratuwa@gmail.com",linkedin: "https://linkedin.com", },
        { name: "Mahesha Weerasinghe", role: "Member", image: mahesha,email:"ieeepessbcuniversityofmoratuwa@gmail.com",linkedin: "https://linkedin.com", },
      ],
    },
    {
      title: "Organizing",
      Icon: FaCalendarAlt,
      members: [
        { name: "Pabasara Piyumal", role: "Lead", image: pabasara,email:"ieeepessbcuniversityofmoratuwa@gmail.com",linkedin: "https://linkedin.com", },
        { name: "Shakya Marasingha", role: "Member", image: shakya ,email:"ieeepessbcuniversityofmoratuwa@gmail.com",linkedin: "https://linkedin.com",},
        { name: "Seynath Chathwara Suraweera", role: "Member", image: seynath ,email:"ieeepessbcuniversityofmoratuwa@gmail.com",linkedin: "https://linkedin.com",},
        { name: "Sembakuttige Vihanga Kaushal", role: "Member", image: vihanga,email:"ieeepessbcuniversityofmoratuwa@gmail.com",linkedin: "https://linkedin.com", },
        { name: "Hasitha Rupasinghe", role: "Member", image: hasitha,email:"ieeepessbcuniversityofmoratuwa@gmail.com",linkedin: "https://linkedin.com", },
        { name: "P.K. Anupa Minojitha", role: "Member", image: anupa ,email:"ieeepessbcuniversityofmoratuwa@gmail.com",linkedin: "https://linkedin.com",},
        { name: "Kivira Vehan Gammaddegoda", role: "Member", image: kivira ,email:"ieeepessbcuniversityofmoratuwa@gmail.com",linkedin: "https://linkedin.com",},
      ],
    },
    {
      title: "Creative Design",
      Icon: FaPalette,
      members: [
        { name: "Chamiru Gajasinghe", role: "Lead", image: chamix,email:"ieeepessbcuniversityofmoratuwa@gmail.com",linkedin: "https://linkedin.com", },
        { name: "Easha Wanniarachchi", role: "Member", image: easha ,email:"ieeepessbcuniversityofmoratuwa@gmail.com",linkedin: "https://linkedin.com",},
        { name: "Achintha Niroshan", role: "Member", image: achintha,email:"ieeepessbcuniversityofmoratuwa@gmail.com",linkedin: "https://linkedin.com", },
        { name: "Dilni Nimanya Muthukuda", role: "Member", image: dilini,email:"ieeepessbcuniversityofmoratuwa@gmail.com",linkedin: "https://linkedin.com", },
        { name: "Thuvarahan Thayalan", role: "Member", image: thuvarahan,email:"ieeepessbcuniversityofmoratuwa@gmail.com",linkedin: "https://linkedin.com", },
        { name: "B.G. Thisul Dulneth", role: "Member", image: thisul,email:"ieeepessbcuniversityofmoratuwa@gmail.com",linkedin: "https://linkedin.com", },
      ],
    },
    {
      title: "Editorial",
      Icon: FaFeatherAlt,
      members: [
        { name: "Shalani Ambalangodage", role: "Lead", image: shalani,email:"ieeepessbcuniversityofmoratuwa@gmail.com",linkedin: "https://linkedin.com", },
        { name: "Vindya Nilushika", role: "Member", image: vindya,email:"ieeepessbcuniversityofmoratuwa@gmail.com",linkedin: "https://linkedin.com", },
        { name: "Harshani Lakmali", role: "Member", image: harshani,email:"ieeepessbcuniversityofmoratuwa@gmail.com",linkedin: "https://linkedin.com", },
        { name: "Dulasha Perera", role: "Member", image: dulasha ,email:"ieeepessbcuniversityofmoratuwa@gmail.com",linkedin: "https://linkedin.com",},
        { name: "Raveesha Samarasinghe", role: "Member", image: raveesha ,email:"ieeepessbcuniversityofmoratuwa@gmail.com",linkedin: "https://linkedin.com",},
      ],
    },
    {
      title: "Finance",
      Icon: FaChartLine,
      members: [
        { name: "Charithma Dewmi", role: "Lead", image: charithma ,email:"ieeepessbcuniversityofmoratuwa@gmail.com",linkedin: "https://linkedin.com",},
        { name: "Okindu Fernando", role: "Member", image: okindu ,email:"ieeepessbcuniversityofmoratuwa@gmail.com",linkedin: "https://linkedin.com",},
      ],
    },
    {
      title: "Web Development",
      Icon: FaCode,
      members: [
        { name: "Sawani Thiwandika", role: "Lead", image: sawani ,email:"ieeepessbcuniversityofmoratuwa@gmail.com",linkedin: "https://linkedin.com",},
        { name: "Chanupa Hansaja Vithanage", role: "Member", image: chanupa,email:"ieeepessbcuniversityofmoratuwa@gmail.com",linkedin: "https://linkedin.com", },
        { name: "Madhuwantha Dissanayaka", role: "Member", image: madhuwantha ,email:"ieeepessbcuniversityofmoratuwa@gmail.com",linkedin: "https://linkedin.com",},
      ],
    },
  ];

  const current = committees[activeTab];
  const lead = current.members.find((member) => member.role === "Lead");
  const members = current.members.filter((member) => member.role !== "Lead");

  return (
      <div className="relative w-full overflow-hidden bg-gradient-to-b from-[#f8fbf7] to-[#eef5ef] px-4 sm:px-8 lg:px-28 py-10 sm:py-24 md:py-32 mt-12 lg:mt-0">
        {/* Background Gradient Decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-[15%] w-96 h-96 rounded-full bg-[radial-gradient(circle,rgba(46,125,50,0.08)_0%,transparent_70%)] blur-3xl" />
          <div className="absolute top-20 right-[15%] w-80 h-80 rounded-full bg-[radial-gradient(circle,rgba(27,94,32,0.06)_0%,transparent_70%)] blur-3xl" />
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Page Title */}
          <h1 className="text-center text-3xl sm:text-4xl lg:text-6xl font-serif text-[#0f1f12] mb-4 sm:mb-6 lg:mb-8">
            Committees
          </h1>

          {/* Committee Tab Buttons */}
          <div className="flex flex-wrap justify-center gap-2 lg:gap-2.5 w-full max-w-4xl mx-auto mb-6 sm:mb-12 lg:mb-14">
            {/* Desktop layout */}
            <div className="hidden md:flex flex-wrap justify-center gap-2.5 w-full">
              {committees.map((committee, index) => (
                  <button
                      key={committee.title}
                      onClick={() => setActiveTab(index)}
                      className={`flex items-center justify-center gap-2 min-h-11 px-3.5 py-2.5 border-0 rounded-full font-semibold text-sm transition-all duration-300 whitespace-nowrap ${
                          activeTab === index
                              ? "bg-[#1b6b25] text-white shadow-[0_18px_38px_rgba(27,107,37,0.28)]"
                              : "bg-white text-[#172017] shadow-[0_10px_24px_rgba(15,23,42,0.1)] hover:-translate-y-1 hover:shadow-[0_14px_28px_rgba(15,23,42,0.14)]"
                      }`}
                      type="button"
                  >
                <span
                    className={`flex items-center justify-center w-7 h-7 rounded-full text-sm ${
                        activeTab === index
                            ? "bg-white/18 text-white"
                            : "bg-[#e9f0e6] text-[#172017]"
                    }`}
                >
                  <committee.Icon />
                </span>
                    <span>{committee.title}</span>
                  </button>
              ))}
            </div>

            {/* Mobile layout — single scrollable row */}
            <div
                className="md:hidden flex gap-2 overflow-x-auto w-full pb-1"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <style>{`
              .tab-scroll-row::-webkit-scrollbar { display: none; }
            `}</style>
              <div className="tab-scroll-row flex gap-2 px-1 w-full overflow-x-auto"
                   style={{ scrollbarWidth: "none" }}>
                {committees.map((committee, index) => (
                    <button
                        key={committee.title}
                        onClick={() => setActiveTab(index)}
                        className={`flex items-center gap-1.5 h-9 px-3 py-1.5 border-0 rounded-full font-semibold text-xs transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                            activeTab === index
                                ? "bg-[#1b6b25] text-white shadow-[0_8px_20px_rgba(27,107,37,0.28)]"
                                : "bg-white text-[#172017] shadow-[0_4px_12px_rgba(15,23,42,0.1)]"
                        }`}
                        type="button"
                    >
                  <span
                      className={`flex items-center justify-center w-5 h-5 rounded-full text-xs flex-shrink-0 ${
                          activeTab === index
                              ? "bg-white/20 text-white"
                              : "bg-[#e9f0e6] text-[#172017]"
                      }`}
                  >
                    <committee.Icon />
                  </span>
                      <span>{committee.title}</span>
                    </button>
                ))}
              </div>
            </div>
          </div>

          {/* ── Advisor Card (only on Executive Committee tab) ── */}
          {activeTab === 0 && (
              <section className="text-center mb-8 sm:mb-8 lg:mb-8">

                {/* ─ Mobile: horizontal compact card (visible below sm) ─ */}
                <div className="sm:hidden max-w-xs mx-auto bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.09)] overflow-hidden border border-[#e9f0e6]">
                  <div className="flex items-stretch gap-0">
                    {/* Portrait image — fixed width, full height */}
                    <div className="relative w-28 flex-shrink-0">
                      <img
                          src={advisor}
                          alt="Advisor"
                          className="w-full h-full object-cover object-top"
                          style={{ minHeight: "9rem" }}
                      />
                      {/* Subtle green tint overlay on bottom */}
                      <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-[#1b6b25]/20 to-transparent" />
                    </div>

                    {/* Details panel */}
                    <div className="flex-1 flex flex-col justify-center gap-0.5 px-3 py-3 text-center">
                      <p className="text-[10px] font-semibold text-[#1b6b25] uppercase tracking-widest mb-1">
                        Chapter Advisor
                      </p>
                      <h3 className="text-sm font-bold text-[#0f1f12] leading-snug mb-1.5">
                        Mrs. K.A.T. Lasagani
                      </h3>

                      <div className="space-y-0.5">
                        <p className="text-[11px] text-gray-600 font-medium">B.Sc (Moratuwa)</p>
                        <p className="text-[11px] text-gray-600 font-medium">M.Eng. (Canada)</p>
                        <p className="text-[11px] text-gray-600 font-medium">P.Eng. (ON, Canada)</p>
                      </div>

                      <div className="mt-2 pt-2 border-t border-gray-100 space-y-0.5">
                        <p className="text-[11px] text-gray-700">Senior Lecturer Gr. II</p>
                        <p className="text-[11px] text-gray-500">Dept. of Electrical Engineering</p>
                        <p className="text-[11px] text-gray-500">University of Moratuwa</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ─ Desktop/tablet: original vertical card (hidden below sm) ─ */}
                <div className="hidden sm:block">
                  <div className="w-full max-w-xs h-80 bg-gradient-to-br from-white to-gray-100 rounded-3xl flex flex-col items-center justify-center p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-350 relative overflow-hidden group hover:-translate-y-1.5 hover:shadow-[0_10px_25px_rgba(0,0,0,0.15)] mx-auto">
                    <div
                        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                        style={{
                          background: "linear-gradient(120deg, #2E7D32, transparent, #2E7D32)",
                          padding: "2px",
                          WebkitMask:
                              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                          WebkitMaskComposite: "xor",
                          maskComposite: "exclude",
                        }}
                    />
                    <div className="flex flex-col items-center gap-4">
                      <div className="relative">
                        <div className="relative w-40 h-52 rounded-3xl overflow-hidden shadow-[0_15px_40px_rgba(46,125,50,0.2)] transition-transform duration-300 group-hover:scale-105">
                          <img
                              src={advisor}
                              alt="Advisor"
                              className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                            <div className="space-y-1.5">
                              <p className="text-xs text-white leading-relaxed font-medium">
                                B.Sc (Moratuwa), M.Eng. (Canada)
                              </p>
                              <p className="text-xs text-white leading-relaxed font-medium">
                                P.Eng. (ON, Canada)
                              </p>
                              <hr className="border-white/30 my-1.5" />
                              <p className="text-xs text-white leading-relaxed">
                                Senior Lecturer Gr. II
                              </p>
                              <p className="text-xs text-white/90 leading-relaxed">
                                Department of Electrical Engineering
                              </p>
                              <p className="text-xs text-white/90 leading-relaxed">
                                University of Moratuwa
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-center space-y-1.5">
                      <h3 className="text-lg lg:text-xl font-bold text-[#0f1f12]">
                        Mrs. K.A.T. Lasagani
                      </h3>
                      <p className="text-xs lg:text-sm font-semibold text-[#1b6b25] tracking-wide">
                        IEEE PES CHAPTER ADVISOR
                      </p>
                    </div>
                  </div>
                </div>
              </section>
          )}

          {/* ── Current Member Cards ── */}
          {current.title === "Executive Committee" ? (
              <>
                <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-6 sm:mb-8 lg:mb-8">
                  <MemberCard {...current.members[0]} />
                  <MemberCard {...current.members[1]} />
                </div>
                <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
                  {current.members.slice(2).map((member) => (
                      <MemberCard key={member.name} {...member} />
                  ))}
                </div>
              </>
          ) : (
              <>
                {lead && (
                    <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-6 sm:mb-8 lg:mb-10">
                      <MemberCard {...lead} />
                    </div>
                )}
                <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
                  {members.map((member) => (
                      <MemberCard key={member.name} {...member} />
                  ))}
                </div>
              </>
          )}

          {/* ── Former Executive Committee toggle + section (only on ExCom tab) ── */}
          {activeTab === 0 && (
              <section className="mt-8 sm:mt-16 lg:mt-20">
                {/* Toggle button */}
                <button
                    type="button"
                    onClick={() => setShowFormerCommittee((v) => !v)}
                    className="flex items-center justify-between gap-3 w-full max-w-md mx-auto px-5 py-3.5 rounded-2xl bg-white border border-[#2E7D32]/15 shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_6px_20px_rgba(27,107,37,0.12)] hover:border-[#2E7D32]/30 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-2.5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#e9f0e6] text-[#1b6b25] group-hover:bg-[#1b6b25] group-hover:text-white transition-colors duration-300">
                  <FaHistory size={13} />
                </span>
                    <span className="text-sm font-semibold text-[#0f1f12]">
                  Former Executive Committee
                </span>
                  </div>
                  <FaChevronDown
                      size={12}
                      className={`text-[#1b6b25] transition-transform duration-300 ${
                          showFormerCommittee ? "rotate-180" : ""
                      }`}
                  />
                </button>

                {/* Collapsible content */}
                {showFormerCommittee && (
                    <div className="mt-4 sm:mt-6">
                      {/* Subtle divider */}
                      <div className="flex items-center gap-3 mb-4 sm:mb-7">
                        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#2E7D32]/20" />
                        <div className="flex gap-1.5">
                          {formerCommittees.map((yearGroup, index) => (
                              <button
                                  key={yearGroup.year}
                                  onClick={() => setActiveFormerYear(index)}
                                  type="button"
                                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${
                                      activeFormerYear === index
                                          ? "bg-[#1b6b25] text-white shadow-[0_6px_16px_rgba(27,107,37,0.22)]"
                                          : "bg-white text-[#4a6b4e] shadow-[0_2px_8px_rgba(15,23,42,0.08)] hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(15,23,42,0.12)]"
                                  }`}
                              >
                                {yearGroup.year}
                              </button>
                          ))}
                        </div>
                        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#2E7D32]/20" />
                      </div>

                      {/* Former member cards grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto">
                        {formerCommittees[activeFormerYear].members.map((member) => (
                            <FormerMemberCard
                                key={`${member.name}-${member.role}`}
                                {...member}
                            />
                        ))}
                      </div>
                    </div>
                )}
              </section>
          )}
        </div>
      </div>
  );
}