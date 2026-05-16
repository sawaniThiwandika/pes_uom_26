import { type FormerMemberCardProps } from "../components/FormerMemberCard";

import chairman2122 from "/formercommittees/chairman2122.webp"
import chairman2223 from "/formercommittees/chairman2223.webp"
import chairman2324 from "/formercommittees/chairman2324.webp"
import chairman2425 from "/formercommittees/chairman2425.webp"

import secretary2122 from "/formercommittees/secretary2122.webp"
import secretary2223 from "/formercommittees/secretary2223.webp"
import secretary2324 from "/formercommittees/secretary2324.webp"

import treasurer2223 from "/formercommittees/treasurer2223.webp"
import treasurer2324 from "/formercommittees/treasurer2324.webp"

import v_chairman2122 from "/formercommittees/v_chairman2122.webp"
import v_chairman2223 from "/formercommittees/v_chairman2223.webp"
import v_chairman2324 from "/formercommittees/v_chairman2324.webp"

import webmaster2122 from "/formercommittees/webmaster2122.webp"
import webmaster2223 from "/formercommittees/webmaster2223.webp"
import webmaster2324 from "/formercommittees/webmaster2324.webp"

export interface FormerYear {
  year: string;
  members: FormerMemberCardProps[];
}

export const formerCommittees: FormerYear[] = [
  {
    year: "2024/25",
    members: [
      {
        name: "Ushan Muditha",
        role: "Chairman",
        image: chairman2425,
        email: "",
        linkedin: "",
      },
      {
        name: "Avishka Rajapaksha",
        role: "Vice Chairman",
        image: "",
        email: "",
        linkedin: "",
      },
      {
        name: "Sandaru Dias",
        role: "Secretary",
        image: "",
        email: "",
        linkedin: "",
      },
      {
        name: "Nimesh Dilhara",
        role: "Treasurer",
        image: "",
        email: "",
        linkedin: "",
      },
      {
        name: "Lahiruni Malshika",
        role: "Webmaster",
        image: "",
        email: "",
        linkedin: "",
      },
    ],
  },
  {
    year: "2023/24",
    members: [
      {
        name: "Upeksha Erandi",
        role: "Chairman",
        image: chairman2324,
        email: "upekshae46@gmail.com",
        linkedin: "https://www.linkedin.com/in/upeksha-erandi-953374235?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      {
        name: "Tharanga Mawan",
        role: "Vice Chairman",
        image: v_chairman2324,
        email: "tharangamawan2020@gmail.com",
        linkedin: "https://www.linkedin.com/in/tharanga-mawan/",
      },
      {
        name: "Lahiru Madushan",
        role: "Secretary",
        image: secretary2324,
        email: "Lahirumadhu501@gmail.com",
        linkedin: "https://www.linkedin.com/in/lahirumadhushan?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      },
      {
        name: "Vicknarajah Nilesh",
        role: "Treasurer",
        image: treasurer2324,
        email: "nilesh373@gmail.com",
        linkedin: "",
      },
      {
        name: "Anuja Wijewardana",
        role: "Webmaster",
        image: webmaster2324,
        email: "anujawij@gmail.com",
        linkedin: "https://www.linkedin.com/in/anuja-wijewardana?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
      },
    ],
  },
  {
    year: "2022/23",
    members: [
      {
        name: "Divakaran Varatharajan",
        role: "Chairman",
        image: chairman2223,
        email: "divakaranv.18@ieee.org",
        linkedin: "www.linkedin.com/in/divakaran18",
      },
      {
        name: "Pavara Abeykoon",
        role: "Vice Chairman",
        image: v_chairman2223,
        email: "pavaranipun1999@gmail.com",
        linkedin: "https://www.linkedin.com/in/pavara-abeykoon/",
      },
      {
        name: "Serani Jayathilaka",
        role: "Secretary",
        image: secretary2223,
        email: "seranij15@gmail.com",
        linkedin: "https://www.linkedin.com/in/serani-jayathilaka-05597b219",
      },
      {
        name: "Mewan Lakvinda",
        role: "Treasurer",
        image: treasurer2223,
        email: "mewanlakvinda@gmail.com",
        linkedin: "https://www.linkedin.com/in/mewan-lakvinda",
      },
      {
        name: "Janith Samee",
        role: "Webmaster",
        image: webmaster2223,
        email: "Janith.samee0@gmail.com",
        linkedin: "https://lk.linkedin.com/in/janith-samee",
      },
    ],
  },
  {
    year: "2021/22",
    members: [
      {
        name: "Pabasara Peiris",
        role: "Chairman",
        image: chairman2122,
        email: "peirispjmy@gmail.com",
        linkedin: "https://www.linkedin.com/in/jmyppeiris",
      },
      {
        name: "Pankaja Senevirathna",
        role: "Vice Chairman",
        image: v_chairman2122,
        email: "pankajasenevirathne@gmail.com",
        linkedin: "",
      },
      {
        name: "Dinithi Senarath",
        role: "Secretary",
        image: secretary2122,
        email: "dinithisenarath1@gmail.com",
        linkedin: "https://www.linkedin.com/in/dinithi-senarath",
      },
      {
        name: "Inosha Kavindi",
        role: "Treasurer",
        image: "",
        email: "inoshasoori@gmail.com",
        linkedin: "https://www.linkedin.com/in/inosha-kavindi",
      },
      {
        name: "Geshan Subasinghe",
        role: "Webmaster",
        image: webmaster2122,
        email: "geshansudasinghe@gmail.com",
        linkedin: "https://www.linkedin.com/in/geshan-sudasinghe-54bb0619b?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      },
    ],
  },
];
