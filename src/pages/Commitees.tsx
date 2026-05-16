import { useState, useRef, useEffect } from "react";
import { FaShieldAlt, FaChevronDown, FaHistory } from "react-icons/fa";
import MemberCard from "../components/MemberCard";
import FormerMemberCard from "../components/FormerMemberCard";
import advisor from "../assets/Advisor.webp";

import { formerCommittees } from "../data/formerCommitteeData";
import { committees } from "../data/committeeData";

/* ── Circuit-board tile tab selector ──────────────────────────────── */
function CircuitTabs({
  committees,
  activeTab,
  setActiveTab,
}: {
  committees: { title: string; Icon: React.ElementType; short: string }[];
  activeTab: number;
  setActiveTab: (i: number) => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Scroll active tile into view on mobile
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const active = container.children[activeTab] as HTMLElement;
    if (active)
      active.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
  }, [activeTab]);

  return (
    <>
      {/* ── DESKTOP: circuit tile grid ── */}
      <div className="hidden md:flex justify-center">
        <div className="relative">
          {/* PCB trace background — horizontal lines connecting tiles */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Horizontal trace through centre */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "5%",
                right: "5%",
                height: "1px",
                transform: "translateY(-50%)",
                background:
                  "linear-gradient(90deg, transparent, rgba(52,211,153,0.18) 10%, rgba(52,211,153,0.18) 90%, transparent)",
              }}
            />
          </div>

          <div className="flex items-center gap-0">
            {committees.map((c, i) => {
              const isActive = activeTab === i;
              return (
                <div key={c.title} className="relative flex items-center">
                  {/* Trace segment between tiles */}
                  {i > 0 && (
                    <div
                      style={{
                        width: "24px",
                        height: "1px",
                        background:
                          isActive || activeTab === i - 1
                            ? "rgba(52,211,153,0.55)"
                            : "rgba(52,211,153,0.12)",
                        transition: "background 0.35s ease",
                        flexShrink: 0,
                      }}
                    />
                  )}

                  {/* Tile */}
                  <button
                    type="button"
                    onClick={() => setActiveTab(i)}
                    style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "7px",
                      width: isActive ? "88px" : "72px",
                      height: isActive ? "88px" : "72px",
                      borderRadius: "14px",
                      border: `1px solid ${isActive ? "rgba(52,211,153,0.55)" : "rgba(255,255,255,0.08)"}`,
                      background: isActive
                        ? "rgba(52,211,153,0.12)"
                        : "rgba(255,255,255,0.03)",
                      color: isActive ? "#6ee7b7" : "#6b7280",
                      cursor: "pointer",
                      transition: "all 0.3s cubic-bezier(0.22,1,0.36,1)",
                      boxShadow: isActive
                        ? "0 0 24px rgba(52,211,153,0.2), 0 0 0 1px rgba(52,211,153,0.12) inset"
                        : "none",
                      backdropFilter: "blur(12px)",
                      flexShrink: 0,
                      zIndex: isActive ? 2 : 1,
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        (e.currentTarget as HTMLElement).style.borderColor =
                          "rgba(52,211,153,0.28)";
                        (e.currentTarget as HTMLElement).style.color =
                          "#9ca3af";
                        (e.currentTarget as HTMLElement).style.background =
                          "rgba(255,255,255,0.06)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        (e.currentTarget as HTMLElement).style.borderColor =
                          "rgba(255,255,255,0.08)";
                        (e.currentTarget as HTMLElement).style.color =
                          "#6b7280";
                        (e.currentTarget as HTMLElement).style.background =
                          "rgba(255,255,255,0.03)";
                      }
                    }}
                  >
                    {/* Pulse ring on active */}
                    {isActive && (
                      <div
                        style={{
                          position: "absolute",
                          inset: "-4px",
                          borderRadius: "18px",
                          border: "1px solid rgba(52,211,153,0.25)",
                          animation: "tileRing 2s ease-in-out infinite",
                          pointerEvents: "none",
                        }}
                      />
                    )}

                    {/* Corner circuit dot — top-right */}
                    <div
                      style={{
                        position: "absolute",
                        top: "6px",
                        right: "6px",
                        width: "4px",
                        height: "4px",
                        borderRadius: "50%",
                        background: isActive
                          ? "#34d399"
                          : "rgba(255,255,255,0.12)",
                        transition: "background 0.3s ease",
                        boxShadow: isActive ? "0 0 6px #34d399" : "none",
                      }}
                    />

                    {/* Icon */}
                    <div
                      style={{
                        fontSize: isActive ? "18px" : "15px",
                        transition: "font-size 0.3s ease",
                      }}
                    >
                      <c.Icon />
                    </div>

                    {/* Short label */}
                    <span
                      style={{
                        fontSize: "9px",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textAlign: "center",
                        textTransform: "uppercase",
                        lineHeight: 1.2,
                        maxWidth: "60px",
                        transition: "color 0.3s ease",
                      }}
                    >
                      {c.short}
                    </span>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Active label below the row */}
          <div
            style={{
              textAlign: "center",
              marginTop: "14px",
              fontFamily: "'Outfit', sans-serif",
              fontSize: "13px",
              fontWeight: 600,
              color: "#6ee7b7",
              letterSpacing: "0.08em",
              minHeight: "18px",
              transition: "opacity 0.2s ease",
            }}
          >
            {committees[activeTab].title}
          </div>
        </div>
      </div>

      {/* ── MOBILE: horizontal scroll chips ── */}
      <div
        ref={scrollRef}
        className="md:hidden flex gap-2 overflow-x-auto pb-1"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {committees.map((c, i) => {
          const isActive = activeTab === i;
          return (
            <button
              key={c.title}
              type="button"
              onClick={() => setActiveTab(i)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "7px 12px",
                borderRadius: "10px",
                flexShrink: 0,
                border: `1px solid ${isActive ? "rgba(52,211,153,0.45)" : "rgba(255,255,255,0.08)"}`,
                background: isActive
                  ? "rgba(52,211,153,0.12)"
                  : "rgba(255,255,255,0.03)",
                color: isActive ? "#6ee7b7" : "#6b7280",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                cursor: "pointer",
                boxShadow: isActive ? "0 0 14px rgba(52,211,153,0.18)" : "none",
                transition: "all 0.25s ease",
                whiteSpace: "nowrap",
              }}
            >
              <span style={{ fontSize: "12px" }}>
                <c.Icon />
              </span>
              {c.short}
            </button>
          );
        })}
      </div>
    </>
  );
}

/* ── Member card grid helpers ─────────────────────────────────────── */
function MemberGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-3 sm:gap-5">
      {children}
    </div>
  );
}
function MemberSlot({
  lead,
  children,
}: {
  lead?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`sm:w-[178px] lg:w-[195px] ${lead ? "member-lead-slot" : ""}`}
    >
      {children}
    </div>
  );
}

/* ══════════════════ MAIN COMPONENT ══════════════════════════════════ */
export default function Committees() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeFormerYear, setActiveFormerYear] = useState(0);
  const [showFormerCommittee, setShowFormerCommittee] = useState(false);

  const current = committees[activeTab];
  const isExec = current.title === "Executive Committee";
  const lead = current.members.find((m) => m.role === "Lead");
  const rest = current.members.filter((m) => m.role !== "Lead");

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Outfit:wght@300;400;500;600;700&display=swap');
        .comm-root  { font-family: 'Outfit', sans-serif; }
        .comm-title { font-family: 'Cormorant Garamond', serif; }

        /* Circuit tile ring pulse */
        @keyframes tileRing {
          0%,100% { opacity: 0.6; transform: scale(1); }
          50%     { opacity: 1;   transform: scale(1.04); }
        }

        /* Mobile chip scroll */
        .chip-scroll::-webkit-scrollbar { display: none; }
        .chip-scroll { scrollbar-width: none; }

        /* Section fade-in */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.42s cubic-bezier(0.22,1,0.36,1) both; }

        /* Lead member slot — emerald ring */
        .member-lead-slot > div {
          box-shadow: 0 0 0 1.5px rgba(52,211,153,0.5),
                      0 16px 48px rgba(0,0,0,0.55) !important;
        }
        .member-lead-slot > div::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, transparent, #34d399, transparent);
          pointer-events: none; z-index: 30;
        }

        /* Advisor banner */
        .advisor-banner {
          transition: box-shadow 0.35s ease, border-color 0.35s ease;
        }
        .advisor-banner:hover {
          box-shadow: 0 0 0 1px rgba(52,211,153,0.3), 0 20px 60px rgba(0,0,0,0.45) !important;
          border-color: rgba(52,211,153,0.25) !important;
        }
        .advisor-banner:hover .advisor-photo {
          transform: scale(1.06);
        }
        .advisor-photo { transition: transform 0.6s cubic-bezier(0.22,1,0.36,1); }

        /* Section label */
        .section-label {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 10px; font-weight: 700; letter-spacing: 0.22em;
          text-transform: uppercase; padding: 5px 14px; border-radius: 999px;
          background: rgba(52,211,153,0.08); border: 1px solid rgba(52,211,153,0.22);
          color: #6ee7b7;
        }

        /* Former toggle */
        .former-toggle {
          transition: all 0.3s ease;
        }
        .former-toggle:hover {
          background: rgba(52,211,153,0.08) !important;
          border-color: rgba(52,211,153,0.28) !important;
        }
      `}</style>

      <div
        className="comm-root relative w-full min-h-screen overflow-x-hidden mt-12 lg:mt-0 px-4 sm:px-8 lg:px-20 py-10 sm:py-16 md:py-20"
        // style={{ background: "#060d07" }}
      >
        {/* Ambient glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            style={{
              position: "absolute",
              top: "-80px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "650px",
              height: "450px",
              background:
                "radial-gradient(ellipse, rgba(22,163,74,0.16) 0%, transparent 70%)",
              filter: "blur(90px)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              width: "400px",
              height: "400px",
              background:
                "radial-gradient(ellipse, rgba(21,128,61,0.09) 0%, transparent 70%)",
              filter: "blur(100px)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          {/* ── Page header ── */}
          <header className="text-center mb-10 sm:mb-12">
            <p
              className="text-[9px] sm:text-[10px] font-bold tracking-[0.3em] uppercase mb-3"
              style={{ color: "#34d399" }}
            >
              IEEE PES Student Branch · University of Moratuwa
            </p>
            <h1
              className="comm-title leading-none text-white mb-4"
              style={{
                fontSize: "clamp(44px,7vw,88px)",
                fontWeight: 600,
                letterSpacing: "-0.02em",
              }}
            >
              Committees
            </h1>
            <div className="flex items-center justify-center gap-3">
              <div
                className="h-px w-14"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(52,211,153,0.55))",
                }}
              />
              <div
                className="w-1 h-1 rounded-full"
                style={{ background: "#34d399" }}
              />
              <div
                className="h-px w-14"
                style={{
                  background:
                    "linear-gradient(270deg, transparent, rgba(52,211,153,0.55))",
                }}
              />
            </div>
          </header>

          {/* ══ CIRCUIT BOARD TAB SELECTOR ══════════════════════════════ */}
          <div className="mb-10 sm:mb-12">
            <CircuitTabs
              committees={committees}
              activeTab={activeTab}
              setActiveTab={(i) => setActiveTab(i)}
            />
          </div>

          {/* ══ EXECUTIVE COMMITTEE ══════════════════════════════════════
              Layout:
              - Advisor: slim horizontal identity banner (always visible)
              - Members: grid immediately below — ALL fit on first screen
          ══════════════════════════════════════════════════════════════ */}
          {isExec ? (
            <div className="fade-up">
              {/* ── Advisor identity banner ── */}
              <div
                className="advisor-banner mb-6 rounded-2xl overflow-hidden border"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  borderColor: "rgba(255,255,255,0.08)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                  backdropFilter: "blur(16px)",
                }}
              >
                <div className="flex items-stretch">
                  {/* Photo strip */}
                  <div
                    className="relative flex-shrink-0 overflow-hidden"
                    style={{ width: "clamp(72px,10vw,100px)" }}
                  >
                    <img
                      src={advisor}
                      alt="Advisor"
                      className="advisor-photo w-full h-full object-cover object-top"
                      style={{ minHeight: "88px" }}
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to right, transparent 60%, rgba(6,13,7,0.7))",
                      }}
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 py-3 sm:py-4">
                    <div className="flex flex-wrap items-center gap-3 sm:gap-6">
                      {/* Left: role + name */}
                      <div>
                        <p
                          className="text-[8px] sm:text-[9px] font-bold tracking-[0.25em] uppercase mb-0.5"
                          style={{ color: "#34d399" }}
                        >
                          Chapter Advisor
                        </p>
                        <h3
                          className="comm-title text-white font-semibold leading-tight"
                          style={{ fontSize: "clamp(13px,1.6vw,18px)" }}
                        >
                          Mrs. K.A.T. Lasagani
                        </h3>
                      </div>

                      {/* Divider */}
                      <div
                        className="hidden sm:block h-8 w-px"
                        style={{ background: "rgba(255,255,255,0.08)" }}
                      />

                      {/* Credentials */}
                      <div className="flex flex-wrap gap-1.5">
                        {[
                          "B.Sc (Moratuwa)",
                          "M.Eng. (Canada)",
                          "P.Eng. (ON)",
                        ].map((cred) => (
                          <span
                            key={cred}
                            className="text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full"
                            style={{
                              background: "rgba(255,255,255,0.05)",
                              border: "1px solid rgba(255,255,255,0.09)",
                              color: "rgba(255,255,255,0.45)",
                              fontWeight: 500,
                            }}
                          >
                            {cred}
                          </span>
                        ))}
                      </div>

                      {/* Position */}
                      <div className="hidden md:block text-right ml-auto">
                        <p
                          className="text-[10px] font-medium"
                          style={{ color: "rgba(255,255,255,0.4)" }}
                        >
                          Senior Lecturer Gr. II
                        </p>
                        <p
                          className="text-[10px]"
                          style={{ color: "rgba(255,255,255,0.25)" }}
                        >
                          Dept. of Electrical Engineering · UoM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── Section label ── */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="h-px flex-1"
                  style={{ background: "rgba(255,255,255,0.06)" }}
                />
                <span className="section-label">
                  <FaShieldAlt size={9} /> Executive Committee
                </span>
                <div
                  className="h-px flex-1"
                  style={{ background: "rgba(255,255,255,0.06)" }}
                />
              </div>

              {/* ── Exec member grid — 3-col desktop, 2-col mobile ── */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
                {current.members.map((m) => (
                  <MemberCard key={m.name} {...m} />
                ))}
              </div>
            </div>
          ) : (
            /* ══ NON-EXECUTIVE COMMITTEES ═══════════════════════════════ */
            <div className="fade-up">
              {/* Section label */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="h-px flex-1"
                  style={{ background: "rgba(255,255,255,0.06)" }}
                />
                <span className="section-label">
                  <current.Icon size={9} /> {current.title}
                </span>
                <div
                  className="h-px flex-1"
                  style={{ background: "rgba(255,255,255,0.06)" }}
                />
              </div>

              <MemberGrid>
                {lead && (
                  <MemberSlot lead>
                    <MemberCard {...lead} />
                  </MemberSlot>
                )}
                {rest.map((m) => (
                  <MemberSlot key={m.name}>
                    <MemberCard {...m} />
                  </MemberSlot>
                ))}
              </MemberGrid>
            </div>
          )}

          {/* ══ FORMER EXECUTIVE COMMITTEE (exec tab only) ═══════════════ */}
          {activeTab === 0 && (
            <section className="mt-14 sm:mt-20">
              <button
                type="button"
                onClick={() => setShowFormerCommittee((v) => !v)}
                className="former-toggle flex items-center justify-between gap-3 w-full max-w-md mx-auto px-5 py-3.5 rounded-2xl border"
                style={{
                  background: showFormerCommittee
                    ? "rgba(52,211,153,0.07)"
                    : "rgba(255,255,255,0.03)",
                  borderColor: showFormerCommittee
                    ? "rgba(52,211,153,0.28)"
                    : "rgba(255,255,255,0.08)",
                  backdropFilter: "blur(16px)",
                }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="flex items-center justify-center w-8 h-8 rounded-full"
                    style={{
                      background: showFormerCommittee
                        ? "rgba(52,211,153,0.18)"
                        : "rgba(255,255,255,0.07)",
                      color: showFormerCommittee ? "#34d399" : "#9ca3af",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <FaHistory size={13} />
                  </span>
                  <span
                    className="text-sm font-medium"
                    style={{
                      color: showFormerCommittee ? "#6ee7b7" : "#d1d5db",
                    }}
                  >
                    Former Executive Committee
                  </span>
                </div>
                <FaChevronDown
                  size={12}
                  style={{
                    color: "#34d399",
                    transform: showFormerCommittee
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                    transition: "transform 0.3s ease",
                  }}
                />
              </button>

              {showFormerCommittee && (
                <div className="mt-5 fade-up">
                  {/* Year selector */}
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className="h-px flex-1"
                      style={{ background: "rgba(255,255,255,0.05)" }}
                    />
                    <div className="flex gap-2">
                      {formerCommittees.map((yg, i) => (
                        <button
                          key={yg.year}
                          type="button"
                          onClick={() => setActiveFormerYear(i)}
                          className="px-4 py-1.5 rounded-full text-xs font-semibold border transition-all duration-300"
                          style={{
                            background:
                              activeFormerYear === i
                                ? "rgba(52,211,153,0.14)"
                                : "rgba(255,255,255,0.04)",
                            borderColor:
                              activeFormerYear === i
                                ? "rgba(52,211,153,0.45)"
                                : "rgba(255,255,255,0.08)",
                            color:
                              activeFormerYear === i ? "#6ee7b7" : "#6b7280",
                          }}
                        >
                          {yg.year}
                        </button>
                      ))}
                    </div>
                    <div
                      className="h-px flex-1"
                      style={{ background: "rgba(255,255,255,0.05)" }}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-3xl mx-auto">
                    {formerCommittees[activeFormerYear].members.map((m) => (
                      <FormerMemberCard key={`${m.name}-${m.role}`} {...m} />
                    ))}
                  </div>
                </div>
              )}
            </section>
          )}
        </div>
      </div>
    </>
  );
}
