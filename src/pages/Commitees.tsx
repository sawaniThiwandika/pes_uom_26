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
