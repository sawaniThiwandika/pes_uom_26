
import GIEEE11 from "../../public/projects/gammedda/GIEEE11.jpeg";
import GIEEE7  from "../../public/projects/gammedda/GIEEE7.jpeg";
import GIEEE6  from "../../public/projects/gammedda/GIEEE6.jpeg";
import GIEEE12 from "../../public/projects/gammedda/GIEEE12.jpeg";
import GIEEE13 from "../../public/projects/gammedda/GIEEE13.jpeg";

import FV4 from "../../public/projects/fieldVisit/FV4.jpeg";
import FV8 from "../../public/projects/fieldVisit/FV8.jpeg";
import FV5 from "../../public/projects/fieldVisit/FV5.jpeg";
import FV6 from "../../public/projects/fieldVisit/FV6.jpeg";
import FV7 from "../../public/projects/fieldVisit/FV7.jpeg";
import FV3 from "../../public/projects/fieldVisit/FV3.jpeg";

import WIE2 from "../../public/projects/WIE/WIE2.jpeg";
import WIE4 from "../../public/projects/WIE/WIE4.jpeg";

import AIW4 from "../../public/projects/AIWorkShop/AIW4.jpeg";
import AIW2 from "../../public/projects/AIWorkShop/AIW2.jpeg";
import AIW1 from "../../public/projects/AIWorkShop/AIW1.jpeg";
import AIW5 from "../../public/projects/AIWorkShop/AIW5.jpeg";
import AIW9 from "../../public/projects/AIWorkShop/AIW9.jpeg";

import BSC2 from "../../public/projects/BSC/BSC2.jpeg";
import BSC4 from "../../public/projects/BSC/BSC4.jpeg";

import Microgrid3 from "../../public/projects/microgrid/Microgrid3.jpeg";

export interface Project {
    id: number;
    title: string;
    preview: string;
    description: string;
    date: string;
    images: string[];
}

export const projects: Project[] = [
    {
        id: 1,
        title: "IEEE FOR THE COUNTRYSIDE (ගම්මැද්දට IEEE අපි)",
        date: "September 2nd to September 6th, 2025",
        preview:
            "To inspire and empower school students with fundamental programming and robotics knowledge, IEEE FOR THE " +
            "COUNTRYSIDE (ගම්මැද්දට IEEE අපි) 4.0 was organized by the IEEE Power & Energy Society, IEEE Robotics and Automation " +
            "Society, and IEEE Industry Applications Society Student Branch Chapters of the University of Moratuwa. The four-day " +
            "initiative was conducted from September 2nd to September 6th, 2025, combining volunteer training, online learning " +
            "sessions, and physical hands-on workshops across several schools in Sri Lanka.",
        description:
            "The IEEE Power & Energy Society, IEEE Robotics and Automation Society, and IEEE Industry Applications Society Student Branch Chapters of the University of Moratuwa jointly organized IEEE FOR THE COUNTRYSIDE (ගම්මැද්දට IEEE අපි) 4.0, an educational outreach initiative aimed at introducing school students to programming, electronics, and robotics.\n" +
            "\n" +
            "The program was conducted over four days, beginning with a volunteer training programme followed by two online learning sessions and concluding with a physical hands-on workshop held at multiple schools across Sri Lanka. The initiative focused on delivering practical STEM knowledge to students from grades 6 to 11 while strengthening collaboration between university volunteers and rural communities.\n" +
            "\n" +
            "Pre-Training Session (2nd & 3rd September 2025)\n" +
            "\n" +
            "The initiative began with two virtual training sessions designed to prepare volunteers for conducting the upcoming student workshops. Undergraduate resource persons from the Mechatronics Engineering Division of the University of Moratuwa guided participants through Arduino hardware concepts and ESP32 microcontroller programming.\n" +
            "\n" +
            "Volunteers were introduced to basic programming concepts, sensor integration, and output device control using LEDs and buzzers. Simulations were used to help volunteers practice coding, test circuits, and troubleshoot issues, ensuring they were well prepared to guide students during the programme.\n" +
            "\n" +
            "Day 01 – Online Learning Session (4th September 2025)\n" +
            "\n" +
            "The first student session introduced participants to Python fundamentals, including data types, loops, and introductory concepts related to machine learning. Students were also introduced to graphical programming methods that helped visualize coding concepts interactively.\n" +
            "\n" +
            "The session was conducted online in Sinhala and Tamil, enabling students from districts across Sri Lanka to participate and engage actively with the volunteers.\n" +
            "\n" +
            "Day 02 – Online Learning Session (5th September 2025)\n" +
            "\n" +
            "The second session focused on web development and embedded system simulations. Students learned the basics of HTML and explored browser-based programming activities to understand how coding concepts can create interactive digital applications.\n" +
            "\n" +
            "Participants were also introduced to Arduino simulations, helping them connect theoretical programming knowledge with practical electronics applications.\n" +
            "\n" +
            "Day 03 – Physical Hands-On Workshops (6th September 2025)\n" +
            "\n" +
            "The final phase of the initiative was a series of physical workshops conducted at several schools including Anuradhapura Central College, Bandaranayake College Gampaha, and Dewapathiraja College.\n" +
            "\n" +
            "University volunteers guided students through practical activities such as Arduino setup, sensor interfacing, and robotics development using kits containing microcontrollers, sensors, motors, and electronic components. Through team-based challenges and hands-on experimentation, students developed problem-solving skills while building functional prototypes.\n" +
            "\n" +
            "The programme successfully inspired young learners to explore STEM fields while strengthening the connection between university volunteers and rural communities across Sri Lanka.",
        images: [GIEEE11, GIEEE7, GIEEE6, GIEEE12, GIEEE13],
    },

    {
        id: 2,
        title: "FIELD VISIT 2025 - Yugadanavi Power Plant",
        date: "23rd August 2025",
        preview:
            "The IEEE PES Student Branch Chapter of University of Moratuwa successfully organized a field visit to the " +
            "YUGADANAVI 300MW Combined Cycle Power Plant, with the enthusiastic participation of 100 undergraduates and " +
            "several members from academic staff.",
        description:
            "The IEEE Power and Energy Society Student Branch Chapter of University of Moratuwa, successfully organized a field visit to the YUGADANAVI 300MW Combined Cycle Power Plant, with the enthusiastic participation of 100 undergraduates and several members from academic staff. Yugadanavi Power Station in Kerawalapitiya, Sri Lanka's first 300MW combined cycle facility, operates on heavy fuel oil, enhancing national energy security, reducing power shortages, and strengthening reliable electricity supply through advanced turbine and HRSG technology.\n" +
            "\n" +
            "The program commenced with an introductory session conducted by Eng. Nadun Wijesinghe (Mechanical Maintenance) and Eng. Pramuth Yohan (Electrical Maintenance). They provided a detailed overview of the power plant's structure, operation, and its contribution to the national grid.\n" +
            "\n" +
            "Following the session, the participants were divided into four groups, each accompanied by an experienced engineer from the Yugadanavi team. During the guided tour, students had the opportunity to explore key facilities including:\n" +
            "Gas turbines\n" +
            "Heat Recovery Steam Generator (HRSG)\n" +
            "Steam turbine\n" +
            "Power transformers\n" +
            "Switchyard\n" +
            "Control room\n" +
            "Fuel treatment plant\n" +
            "Water treatment plant\n" +
            "\n" +
            "To conclude the event, the IEEE PES Student Branch Chapter presented a plaque of appreciation to the Yugadanavi team in recognition of their support, knowledge sharing, and hospitality.\n" +
            "\n" +
            "The field visit proved to be an immensely fruitful learning experience, equipping students with practical insights into large-scale power generation technologies and operations.",
        images: [FV4, FV8, FV5, FV6, FV7, FV3],
    },

    {
        id: 3,
        title: "Empowering Yourself as a Women in Engineering",
        date: "8th March 2025",
        preview: "An inspiring online session empowering women in engineering to take bold steps.",
        description:
            "The IEEE Power and Energy Society (PES) Student Branch Chapter of University of Moratuwa organized an empowering online session titled \"Empowering Yourself as a Woman in Engineering\" on 8th March 2025 via Zoom, coinciding with International Women's Day.\n" +
            "\n" +
            "The session was conducted by Dr. Thushara Rathnayake, Senior Lecturer at the University of Moratuwa and Chairperson of the Sri Lanka Atomic Energy Board.\n" +
            "\n" +
            "It inspired participants through her journey and encouraged women engineers to grow, lead, and make an impact.",
        images: [WIE2, WIE4],
    },

    {
        id: 4,
        title: "Transforming Power Sector with AI - Workshop",
        date: "11th October 2025",
        preview:
            "On October 11, 2025, the IEEE PES Student Branch Chapter of the University of Moratuwa, in collaboration " +
            "with the IEEE PES Sri Lanka Chapter and EESoc, hosted a transformative workshop on AI in Power Systems. " +
            "Featuring insights from industry and academic experts, the event explored how AI is revolutionizing predictive " +
            "maintenance, fault detection, and load forecasting.",
        description:
            "On October 11, 2025, the Department of Electrical Engineering at the University of Moratuwa became a hub of innovation as it hosted the \"AI in Power Systems\" workshop. This collaborative effort by the IEEE Power and Energy Society Sri Lanka Chapter, the Electrical Engineering Society (EESoc), and the IEEE PES Student Branch Chapter aimed to equip students and professionals with the tools to navigate the evolving energy landscape.\n" +
            "\n" +
            "The workshop featured distinguished speakers who are at the forefront of AI integration in engineering. Dr. Logeeshan Velmanickam and Dr. Rasara Samarasinghe provided deep dives into cutting-edge AI methodologies. Eng. Vidura Bandara Wijekoon delivered a thought-provoking keynote titled \"Is AI the savior of the power industry?\" as his 54th tech talk, introducing the concept of \"Next Gen Energy\" — a convergence of data, intelligence, and renewables.\n" +
            "\n" +
            "Beyond the lectures, the event emphasized hands-on exposure and collaborative thinking:\n" +
            "\n" +
            "Microgrid Lab Demonstrations: Participants witnessed the latest research in action through final-year project demonstrations by the 20th Batch, showcasing innovations in renewable energy and microgrid management.\n" +
            "\n" +
            "Innovation Activity: A group session challenged attendees to brainstorm their own AI-driven solutions for current hurdles in the energy sector, fostering a spirit of proactive problem-solving.\n" +
            "\n" +
            "The event concluded by successfully providing a comprehensive overview of how artificial intelligence is not just a future prospect, but a present-day necessity for efficient, reliable power systems.",
        images: [AIW4, AIW2, AIW1, AIW5, AIW9],
    },

    {
        id: 5,
        title: "Building a Successful Career in Engineering - Online Session",
        date: "20th October 2025",
        preview:
            "To guide undergraduates in preparing for their professional careers, the IEEE Power & Energy Society " +
            "Student Branch Chapter of the University of Moratuwa organized an insightful webinar titled " + "Industry Readiness " +
        "and Job Skills"+" on 20th October 2025, conducted by Senarath Buddhasiri, Director of Ceilan Solutions Pvt Ltd.",
        description:"The IEEE Power & Energy Society Student Branch Chapter of the University of Moratuwa organized a professional development webinar titled “Industry Readiness and Job Skills” on 20th October 2025, aiming to prepare undergraduate students for successful entry into the engineering workforce.\n" +
            "The session was conducted by Mr.Senarath Buddhasiri, Director of Ceilan Solutions Pvt Ltd, who shared valuable insights drawn from his extensive industry experience. During the webinar, he highlighted the importance of developing essential professional skills during the undergraduate period and provided practical guidance on career preparation.\n" +
            "Key topics discussed included effective resume writing, interview preparation, and strategies for confident self-presentation in professional environments. Through real-world examples and personal experiences, the speaker offered students a clear understanding of how to successfully navigate internship opportunities and career pathways in the engineering industry.\n" +
            "The session was highly engaging, with participants actively interacting with the speaker and gaining valuable knowledge to support their professional development and future career success.\n"
           ,
        images: [BSC2, BSC4],
    },

    {
        id: 6,
        title: "Introduction to Microgrids",
        date: "23rd October 2025",
        preview:
            "The IEEE PES Student Branch Chapter of University of Moratuwa organized an informative session titled " +
            "Introduction to Microgrids on 23rd October 2025 at the Seminar Room of the Department of Electrical Engineering, " +
            "conducted by Mr. Yasith Randila Perera and Mr. Rajind Chamika.",
        description:
            "The IEEE Power & Energy Society Student Branch Chapter of the University of Moratuwa organized a technical session titled Introduction to Microgrids on 23rd October 2025 at the Seminar Room of the Department of Electrical Engineering.\n" +
            "\n" +
            "The session was conducted by Mr. Rajind Chamika and Mr. Yasith Randila Perera, researchers and instructors from the Department of Electrical Engineering. The event aimed to provide students with both foundational and technical knowledge of modern microgrid systems and their significance in future power systems.\n" +
            "\n" +
            "The session began with Mr. Rajind Chamika introducing the fundamental concepts of microgrids and discussing their importance in modern energy systems. Following this, Mr. Yasith Randila Perera presented the technical aspects of microgrid operation and design, with a special focus on the University of Moratuwa Microgrid, enabling participants to connect theoretical knowledge with a real-world application.\n" +
            "\n" +
            "Participants were also given the opportunity to visit the University of Moratuwa Smart Grid Research Lab, where they observed practical implementations of the discussed concepts. The event concluded with an interactive Q&A session, allowing attendees to further engage with the speakers and deepen their understanding of microgrid technologies.",
        images: [Microgrid3],
    },
];