import { FaEnvelope, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import ContactForm from "../components/ContactForm";

const CONTACT_CARDS = [
  {
    icon: <FaEnvelope />,
    title: "Email Us",
    lines: ["ieeepessbcuniversityofmoratuwa@gmail.com"],
    href: "mailto:ieeepessbcuniversityofmoratuwa@gmail.com",
    linkLabel: "Send an Email",
  },
  {
    icon: <FaEnvelope />,
    title: "Mail Us",
    lines: [
      "IEEE PES Student Branch Chapter",
      "University of Moratuwa",
      "Moratuwa 10400, Sri Lanka",
    ],
  },
  {
    icon: (
      <span className="flex gap-3 text-xl">
        <FaFacebookF />
        <FaLinkedinIn />
      </span>
    ),
    title: "Follow Us",
    lines: ["Stay connected on social media"],
    socials: [
      {
        href: "https://www.facebook.com/ieee.pes.sbc.uom",
        label: "Facebook",
        icon: <FaFacebookF />,
      },
      {
        href: "https://www.linkedin.com/company/ieee-pes-student-branch-chapter-of-university-of-moratuwa/",
        label: "LinkedIn",
        icon: <FaLinkedinIn />,
      },
    ],
  },
];

export default function Contact() {
  return (
    <div>
      {/* ── Day 2: Gradient Hero ── */}
      <section
        className="relative flex items-center justify-center text-center overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #1B5E20 0%, #0f172a 100%)",
          minHeight: "380px",
          paddingTop: "100px",
        }}
      >
        {/* Subtle decorative glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
          style={{
            width: "500px",
            height: "500px",
            background: "radial-gradient(circle, rgba(74,222,128,0.12) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-[700px] px-6">
          <h1
            className="font-bold tracking-tight text-white"
            style={{ fontSize: "clamp(28px, 5vw, 42px)" }}
          >
            Contact Us
          </h1>
          <p
            className="mt-4 leading-relaxed"
            style={{ color: "rgba(255,255,255,0.72)", fontSize: "clamp(14px, 2.5vw, 17px)" }}
          >
            Get in touch with IEEE PES Student Branch Chapter of University of
            Moratuwa. We are here to assist you with any queries or information
            you need.
          </p>
        </div>
      </section>

      {/* ── Day 3: Contact Info Cards ── */}
      <section className="max-w-[1100px] mx-auto px-5 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CONTACT_CARDS.map((card, i) => (
            <div
              key={i}
              className="bg-white rounded-[14px] p-8 text-center flex flex-col items-center gap-4
                         transition-all duration-300 hover:-translate-y-1.5"
              style={{
                boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 14px 30px rgba(0,0,0,0.12)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 8px 20px rgba(0,0,0,0.08)";
              }}
            >
              {/* Icon circle with flip animation */}
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center text-white text-xl contact-icon-flip"
                style={{ background: "#2E7D32" }}
              >
                {card.icon}
              </div>

              <h3 className="text-lg font-semibold">{card.title}</h3>

              {card.lines.map((line, j) => (
                <p key={j} className="text-sm text-gray-500 leading-relaxed m-0">
                  {line}
                </p>
              ))}

              {/* Email link */}
              {card.href && (
                <a
                  href={card.href}
                  className="text-sm font-medium no-underline transition-colors duration-200"
                  style={{ color: "#2E7D32" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#4CAF50";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#2E7D32";
                  }}
                >
                  {card.linkLabel}
                </a>
              )}

              {/* Social links */}
              {card.socials && (
                <div className="flex gap-3 mt-1">
                  {card.socials.map((s, k) => (
                    <a
                      key={k}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white
                                 transition-all duration-300 hover:scale-110"
                      style={{
                        background: "#2E7D32",
                        boxShadow: "0 2px 8px rgba(46,125,50,0.3)",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.boxShadow =
                          "0 4px 16px rgba(46,125,50,0.5)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.boxShadow =
                          "0 2px 8px rgba(46,125,50,0.3)";
                      }}
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── Day 4: Contact Form ── */}
      <ContactForm />
    </div>
  );
}
