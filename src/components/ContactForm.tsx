// import { useState } from "react";
// import axios from "axios";

// const FORMSPREE_URL = "https://formspree.io/f/mkokrnbq";

// interface FormData {
//   name: string;
//   email: string;
//   subject: string;
//   message: string;
// }

// interface FormErrors {
//   name?: string;
//   email?: string;
//   subject?: string;
//   message?: string;
// }

// type Status = "idle" | "sending" | "success" | "error";

// export default function ContactForm() {
//   const [form, setForm] = useState<FormData>({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });
//   const [errors, setErrors] = useState<FormErrors>({});
//   const [status, setStatus] = useState<Status>("idle");

//   function validate(): FormErrors {
//     const e: FormErrors = {};
//     if (!form.name.trim()) e.name = "Name is required.";
//     if (!form.email.trim()) {
//       e.email = "Email is required.";
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
//       e.email = "Enter a valid email address.";
//     }
//     if (!form.subject.trim()) e.subject = "Subject is required.";
//     if (!form.message.trim()) e.message = "Message is required.";
//     return e;
//   }

//   function handleChange(
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//     if (errors[name as keyof FormErrors]) {
//       setErrors((prev) => ({ ...prev, [name]: undefined }));
//     }
//   }

//   async function handleSubmit(e: React.FormEvent) {
//     e.preventDefault();
//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }
//     setStatus("sending");
//     try {
//       await axios.post(FORMSPREE_URL, form, {
//         headers: { Accept: "application/json" },
//       });
//       setStatus("success");
//       setForm({ name: "", email: "", subject: "", message: "" });
//     } catch {
//       setStatus("error");
//     }
//   }

//   const inputBase =
//     "w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-200 border";
//   const inputNormal = "border-gray-200 bg-gray-50 focus:border-[#2E7D32] focus:ring-2 focus:ring-[#2E7D32]/20";
//   const inputError = "border-red-400 bg-red-50 focus:border-red-500 focus:ring-2 focus:ring-red-200";

//   return (
//     <section className="max-w-[700px] mx-auto px-5 pb-16">
//       <h2 className="text-2xl font-bold text-center mb-2">Get in Touch</h2>
//       <p className="text-sm text-gray-500 text-center mb-8">
//         Fill out the form and we'll get back to you as soon as possible.
//       </p>

//       {status === "success" && (
//         <div
//           className="mb-6 p-4 rounded-lg text-center text-sm font-medium"
//           style={{ background: "rgba(46,125,50,0.08)", color: "#2E7D32" }}
//         >
//           Your message has been sent successfully!
//         </div>
//       )}

//       {status === "error" && (
//         <div
//           className="mb-6 p-4 rounded-lg text-center text-sm font-medium"
//           style={{ background: "rgba(220,38,38,0.08)", color: "#dc2626" }}
//         >
//           Something went wrong. Please try again later.
//         </div>
//       )}

//       <form
//         action={FORMSPREE_URL}
//         method="POST"
//         onSubmit={handleSubmit}
//         noValidate
//         className="flex flex-col gap-5"
//       >
//         {/* Name */}
//         <div>
//           <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
//             Name
//           </label>
//           <input
//             id="name"
//             name="name"
//             type="text"
//             placeholder="Your full name"
//             value={form.name}
//             onChange={handleChange}
//             className={`${inputBase} ${errors.name ? inputError : inputNormal}`}
//           />
//           {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
//         </div>

//         {/* Email */}
//         <div>
//           <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//             Email
//           </label>
//           <input
//             id="email"
//             name="email"
//             type="email"
//             placeholder="you@example.com"
//             value={form.email}
//             onChange={handleChange}
//             className={`${inputBase} ${errors.email ? inputError : inputNormal}`}
//           />
//           {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
//         </div>

//         {/* Subject */}
//         <div>
//           <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
//             Subject
//           </label>
//           <input
//             id="subject"
//             name="subject"
//             type="text"
//             placeholder="What is this about?"
//             value={form.subject}
//             onChange={handleChange}
//             className={`${inputBase} ${errors.subject ? inputError : inputNormal}`}
//           />
//           {errors.subject && <p className="text-xs text-red-500 mt-1">{errors.subject}</p>}
//         </div>

//         {/* Message */}
//         <div>
//           <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
//             Message
//           </label>
//           <textarea
//             id="message"
//             name="message"
//             rows={5}
//             placeholder="Write your message here..."
//             value={form.message}
//             onChange={handleChange}
//             className={`${inputBase} resize-none ${errors.message ? inputError : inputNormal}`}
//           />
//           {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
//         </div>

//         {/* Submit */}
//         <button
//           type="submit"
//           disabled={status === "sending"}
//           className="w-full py-3 rounded-lg text-white text-sm font-semibold tracking-wide
//                      transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
//           style={{ background: "#2E7D32" }}
//           onMouseEnter={(e) => {
//             if (status !== "sending")
//               (e.currentTarget as HTMLElement).style.background = "#1B5E20";
//           }}
//           onMouseLeave={(e) => {
//             (e.currentTarget as HTMLElement).style.background = "#2E7D32";
//           }}
//         >
//           {status === "sending" ? "Sending..." : "Send Message"}
//         </button>
//       </form>
//     </section>
//   );
// }

import axios from "axios";
import { useState, useRef, useCallback } from "react";
import { FaPaperPlane } from "react-icons/fa";

const FORMSPREE_URL = "https://formspree.io/f/mkokrnbq";

interface Field {
  value: string;
  focused: boolean;
  error: string;
}

function FloatInput({
  id,
  label,
  value,
  focused,
  error,
  type = "text",
  rows,
  onChange,
  onFocus,
  onBlur,
}: {
  id: string;
  label: string;
  value: string;
  focused: boolean;
  error: string;
  type?: string;
  rows?: number;
  onChange: (v: string) => void;
  onFocus: () => void;
  onBlur: () => void;
}) {
  const lifted = focused || value.length > 0;
  const Tag = rows ? "textarea" : "input";

  return (
    <div style={{ position: "relative", marginBottom: "6px" }}>
      {/* Floating label */}
      <label
        htmlFor={id}
        style={{
          position: "absolute",
          left: "16px",
          top: lifted ? "8px" : rows ? "18px" : "50%",
          transform: lifted ? "none" : rows ? "none" : "translateY(-50%)",
          fontSize: lifted ? "10px" : "14px",
          fontWeight: lifted ? 600 : 400,
          color: error
            ? "#f87171"
            : focused
              ? "#34d399"
              : "rgba(255,255,255,0.35)",
          letterSpacing: lifted ? "0.1em" : "0",
          textTransform: lifted ? "uppercase" : "none",
          pointerEvents: "none",
          transition: "all 0.22s cubic-bezier(0.22,1,0.36,1)",
          zIndex: 1,
          fontFamily: "'Outfit', sans-serif",
        }}
      >
        {label}
      </label>

      {/* Input/Textarea */}
      <Tag
        id={id}
        type={type}
        value={value}
        rows={rows}
        onChange={(e) =>
          onChange((e.target as HTMLInputElement | HTMLTextAreaElement).value)
        }
        onFocus={onFocus}
        onBlur={onBlur}
        style={{
          width: "100%",
          padding: lifted ? "28px 16px 10px" : "19px 16px",
          paddingTop: lifted ? "26px" : "19px",
          background: focused
            ? "rgba(52,211,153,0.05)"
            : "rgba(255,255,255,0.03)",
          border: `1px solid ${error ? "rgba(248,113,113,0.5)" : focused ? "rgba(52,211,153,0.45)" : "rgba(255,255,255,0.08)"}`,
          borderRadius: "14px",
          color: "#f3f4f6",
          fontSize: "14px",
          fontFamily: "'Outfit', sans-serif",
          fontWeight: 400,
          outline: "none",
          resize: rows ? "none" : undefined,
          transition: "all 0.25s ease",
          boxShadow: focused
            ? "0 0 0 3px rgba(52,211,153,0.08), inset 0 1px 0 rgba(255,255,255,0.04)"
            : "none",
          backdropFilter: "blur(10px)",
          display: "block",
          boxSizing: "border-box",
        }}
      />

      {/* Error */}
      {error && (
        <p
          style={{
            fontSize: "11px",
            color: "#f87171",
            marginTop: "4px",
            paddingLeft: "4px",
            fontFamily: "'Outfit', sans-serif",
          }}
        >
          {error}
        </p>
      )}

      {/* Focus glow line */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "16px",
          right: "16px",
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, #34d399, transparent)",
          opacity: focused ? 1 : 0,
          transition: "opacity 0.25s ease",
          borderRadius: "999px",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}

export default function ContactForm() {
  const initialFields: Record<string, Field> = {
    name: { value: "", focused: false, error: "" },
    email: { value: "", focused: false, error: "" },
    subject: { value: "", focused: false, error: "" },
    message: { value: "", focused: false, error: "" },
  };

  const [fields, setFields] = useState(initialFields);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const btnRef = useRef<HTMLButtonElement>(null);

  const update = (key: string, patch: Partial<Field>) =>
    setFields((prev) => ({ ...prev, [key]: { ...prev[key], ...patch } }));

  const validate = () => {
    let ok = true;
    if (!fields.name.value.trim()) {
      update("name", { error: "Name is required" });
      ok = false;
    }
    if (!fields.email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      update("email", { error: "Valid email required" });
      ok = false;
    }
    if (!fields.subject.value.trim()) {
      update("subject", { error: "Subject is required" });
      ok = false;
    }
    if (fields.message.value.trim().length < 10) {
      update("message", { error: "Message too short" });
      ok = false;
    }
    return ok;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    try {
      const formData = {
        name: fields.name.value,
        email: fields.email.value,
        subject: fields.subject.value,
        message: fields.message.value,
      };

      await axios.post(FORMSPREE_URL, formData, {
        headers: { Accept: "application/json" },
      });
      setStatus("sent");
      setFields(initialFields);
    } catch {
      setStatus("error");
    }
  };

  /* Magnetic button */
  const onBtnMove = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const el = btnRef.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) * 0.25;
    const y = (e.clientY - top - height / 2) * 0.25;
    el.style.transform = `translate(${x}px, ${y}px)`;
  }, []);
  const onBtnLeave = useCallback(() => {
    const el = btnRef.current;
    if (!el) return;
    el.style.transform = "translate(0,0)";
    el.style.transition = "transform 0.45s cubic-bezier(0.23,1,0.32,1)";
  }, []);

  if (status === "sent")
    return (
      <div
        style={{
          textAlign: "center",
          padding: "60px 24px",
          background: "rgba(52,211,153,0.05)",
          border: "1px solid rgba(52,211,153,0.2)",
          borderRadius: "20px",
          backdropFilter: "blur(16px)",
        }}
      >
        <div style={{ fontSize: "42px", marginBottom: "16px" }}>✓</div>
        <h3
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "28px",
            color: "#fff",
            marginBottom: "10px",
          }}
        >
          Message Sent
        </h3>
        <p
          style={{
            color: "rgba(255,255,255,0.45)",
            fontSize: "14px",
            fontFamily: "'Outfit', sans-serif",
          }}
        >
          We'll get back to you as soon as possible.
        </p>
        <button
          onClick={() => {
            setStatus("idle");
            Object.keys(fields).forEach((k) =>
              update(k, { value: "", error: "" }),
            );
          }}
          style={{
            marginTop: "24px",
            padding: "10px 28px",
            borderRadius: "999px",
            background: "rgba(52,211,153,0.12)",
            border: "1px solid rgba(52,211,153,0.3)",
            color: "#34d399",
            cursor: "pointer",
            fontFamily: "'Outfit', sans-serif",
            fontSize: "13px",
          }}
        >
          Send another
        </button>
      </div>
    );

  return (
    <div
      style={{
        background: "rgba(255,255,255,0.025)",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: "24px",
        padding: "clamp(24px,4vw,48px)",
        backdropFilter: "blur(20px)",
        boxShadow: "0 32px 80px rgba(0,0,0,0.35)",
        fontFamily: "'Outfit', sans-serif",
      }}
    >
      {/* Row 1 — name + email */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "12px",
          marginBottom: "12px",
        }}
        className="form-row"
      >
        <FloatInput
          id="name"
          label="Full Name"
          {...fields.name}
          onChange={(v) => update("name", { value: v, error: "" })}
          onFocus={() => update("name", { focused: true })}
          onBlur={() => update("name", { focused: false })}
        />
        <FloatInput
          id="email"
          label="Email Address"
          type="email"
          {...fields.email}
          onChange={(v) => update("email", { value: v, error: "" })}
          onFocus={() => update("email", { focused: true })}
          onBlur={() => update("email", { focused: false })}
        />
      </div>

      {/* Subject */}
      <div style={{ marginBottom: "12px" }}>
        <FloatInput
          id="subject"
          label="Subject"
          {...fields.subject}
          onChange={(v) => update("subject", { value: v, error: "" })}
          onFocus={() => update("subject", { focused: true })}
          onBlur={() => update("subject", { focused: false })}
        />
      </div>

      {/* Message */}
      <div style={{ marginBottom: "20px" }}>
        <FloatInput
          id="message"
          label="Your Message"
          rows={5}
          {...fields.message}
          onChange={(v) => update("message", { value: v, error: "" })}
          onFocus={() => update("message", { focused: true })}
          onBlur={() => update("message", { focused: false })}
        />
      </div>

      {/* Submit */}
      <button
        ref={btnRef}
        onClick={handleSubmit}
        disabled={status === "sending"}
        onMouseMove={onBtnMove}
        onMouseLeave={onBtnLeave}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          padding: "14px 32px",
          borderRadius: "999px",
          background:
            status === "sending"
              ? "rgba(52,211,153,0.08)"
              : "rgba(52,211,153,0.14)",
          border: "1px solid rgba(52,211,153,0.35)",
          color: "#34d399",
          cursor: status === "sending" ? "not-allowed" : "pointer",
          fontSize: "14px",
          fontWeight: 600,
          fontFamily: "'Outfit', sans-serif",
          letterSpacing: "0.04em",
          transition: "background 0.25s ease, box-shadow 0.25s ease",
          boxShadow: "0 0 24px rgba(52,211,153,0.1)",
        }}
        onMouseEnter={(e) => {
          if (status !== "sending")
            (e.currentTarget as HTMLElement).style.background =
              "rgba(52,211,153,0.22)";
        }}
      >
        <FaPaperPlane
          size={13}
          style={{
            transform: status === "sending" ? "none" : "rotate(-10deg)",
          }}
        />
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>

      <style>{`
        @media (max-width: 540px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
