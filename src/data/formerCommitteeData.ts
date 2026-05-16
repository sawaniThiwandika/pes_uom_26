import { type FormerMemberCardProps } from "../components/FormerMemberCard";

import chairman2122 from "/formercommittees/chairman2122.webp"
import chairman2223 from "/formercommittees/chairman2223.webp"
import chairman2324 from "/formercommittees/chairman2324.webp"
import chairman2425 from "/formercommittees/chairman2425.webp"

import secretary2122 from "/formercommittees/secretary2122.webp"
import secretary2223 from "/formercommittees/secretary2223.webp"
import secretary2324 from "/formercommittees/secretary2324.webp"
import secretary2425 from "/committee/ishan.webp"

import treasurer2122 from "/committee/ishan.webp"
import treasurer2223 from "/formercommittees/treasurer2223.webp"
import treasurer2324 from "/formercommittees/treasurer2324.webp"
import treasurer2425 from "/committee/ishan.webp"

import v_chairman2122 from "/formercommittees/v_chairman2122.webp"
import v_chairman2223 from "/formercommittees/v_chairman2223.webp"
import v_chairman2324 from "/formercommittees/v_chairman2324.webp"
import v_chairman2425 from "/committee/ishan.webp"

import webmaster2122 from "/formercommittees/webmaster2122.webp"
import webmaster2223 from "/formercommittees/webmaster2223.webp"
import webmaster2324 from "/formercommittees/webmaster2324.webp"
import webmaster2425 from "/committee/ishan.webp"

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
        email: "chairman2425@ieee.org",
        linkedin: "https://linkedin.com",
      },
      {
        name: "Avishka Rajapaksha",
        role: "Vice Chairman",
        image: v_chairman2425,
        email: "vicechairman2425@ieee.org",
        linkedin: "https://linkedin.com",
      },
      {
        name: "Sandaru Dias",
        role: "Secretary",
        image: secretary2425,
        email: "secretary2425@ieee.org",
        linkedin: "https://linkedin.com",
      },
      {
        name: "Nimesh Dilhara",
        role: "Treasurer",
        image: treasurer2425,
        email: "treasurer2425@ieee.org",
        linkedin: "https://linkedin.com",
      },
      {
        name: "Lahiruni Malshika",
        role: "Webmaster",
        image: webmaster2425,
        email: "webmaster2425@ieee.org",
        linkedin: "https://linkedin.com",
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
        email: "chairman2324@ieee.org",
        linkedin: "https://linkedin.com",
      },
      {
        name: "Tharanga Mawan",
        role: "Vice Chairman",
        image: v_chairman2324,
        email: "vicechairman2324@ieee.org",
        linkedin: "https://linkedin.com",
      },
      {
        name: "Lahiru Madushan",
        role: "Secretary",
        image: secretary2324,
        email: "secretary2324@ieee.org",
        linkedin: "https://linkedin.com",
      },
      {
        name: "Vicknarajah Nilesh",
        role: "Treasurer",
        image: treasurer2324,
        email: "treasurer2324@ieee.org",
        linkedin: "https://linkedin.com",
      },
      {
        name: "Anuja Wijewardana",
        role: "Webmaster",
        image: webmaster2324,
        email: "webmaster2324@ieee.org",
        linkedin: "https://linkedin.com",
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
        email: "chairman2223@ieee.org",
        linkedin: "https://linkedin.com",
      },
      {
        name: "Pavara Abeykoon",
        role: "Vice Chairman",
        image: v_chairman2223,
        email: "vicechairman2223@ieee.org",
        linkedin: "https://linkedin.com",
      },
      {
        name: "Serani Jayathilaka",
        role: "Secretary",
        image: secretary2223,
        email: "secretary2223@ieee.org",
        linkedin: "https://linkedin.com",
      },
      {
        name: "Mewan Lakvinda",
        role: "Treasurer",
        image: treasurer2223,
        email: "treasurer2223@ieee.org",
        linkedin: "https://linkedin.com",
      },
      {
        name: "Janith Samee",
        role: "Webmaster",
        image: webmaster2223,
        email: "webmaster2223@ieee.org",
        linkedin: "https://linkedin.com",
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
        email: "chairman2223@ieee.org",
        linkedin: "https://linkedin.com",
      },
      {
        name: "Pankaja Senevirathna",
        role: "Vice Chairman",
        image: v_chairman2122,
        email: "vicechairman2223@ieee.org",
        linkedin: "https://linkedin.com",
      },
      {
        name: "Dinithi Senarath",
        role: "Secretary",
        image: secretary2122,
        email: "secretary2223@ieee.org",
        linkedin: "https://linkedin.com",
      },
      {
        name: "Inosha Kavindi",
        role: "Treasurer",
        image: treasurer2122,
        email: "treasurer2223@ieee.org",
        linkedin: "https://linkedin.com",
      },
      {
        name: "Geshan Subasinghe",
        role: "Webmaster",
        image: webmaster2122,
        email: "webmaster2223@ieee.org",
        linkedin: "https://linkedin.com",
      },
    ],
  },
];
