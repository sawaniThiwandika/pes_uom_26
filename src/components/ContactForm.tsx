import { useState } from "react";
import axios from "axios";

const FORMSPREE_URL = "https://formspree.io/f/mkokrnbq";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>("idle");

  function validate(): FormErrors {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) {
      e.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "Enter a valid email address.";
    }
    if (!form.subject.trim()) e.subject = "Subject is required.";
    if (!form.message.trim()) e.message = "Message is required.";
    return e;
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setStatus("sending");
    try {
      await axios.post(FORMSPREE_URL, form, {
        headers: { Accept: "application/json" },
      });
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  const inputBase =
    "w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-200 border";
  const inputNormal = "border-gray-200 bg-gray-50 focus:border-[#2E7D32] focus:ring-2 focus:ring-[#2E7D32]/20";
  const inputError = "border-red-400 bg-red-50 focus:border-red-500 focus:ring-2 focus:ring-red-200";

  return (
    <section className="max-w-[700px] mx-auto px-5 pb-16">
      <h2 className="text-2xl font-bold text-center mb-2">Get in Touch</h2>
      <p className="text-sm text-gray-500 text-center mb-8">
        Fill out the form and we'll get back to you as soon as possible.
      </p>

      {status === "success" && (
        <div
          className="mb-6 p-4 rounded-lg text-center text-sm font-medium"
          style={{ background: "rgba(46,125,50,0.08)", color: "#2E7D32" }}
        >
          Your message has been sent successfully!
        </div>
      )}

      {status === "error" && (
        <div
          className="mb-6 p-4 rounded-lg text-center text-sm font-medium"
          style={{ background: "rgba(220,38,38,0.08)", color: "#dc2626" }}
        >
          Something went wrong. Please try again later.
        </div>
      )}

      <form
        action={FORMSPREE_URL}
        method="POST"
        onSubmit={handleSubmit}
        noValidate
        className="flex flex-col gap-5"
      >
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your full name"
            value={form.name}
            onChange={handleChange}
            className={`${inputBase} ${errors.name ? inputError : inputNormal}`}
          />
          {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={handleChange}
            className={`${inputBase} ${errors.email ? inputError : inputNormal}`}
          />
          {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            placeholder="What is this about?"
            value={form.subject}
            onChange={handleChange}
            className={`${inputBase} ${errors.subject ? inputError : inputNormal}`}
          />
          {errors.subject && <p className="text-xs text-red-500 mt-1">{errors.subject}</p>}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Write your message here..."
            value={form.message}
            onChange={handleChange}
            className={`${inputBase} resize-none ${errors.message ? inputError : inputNormal}`}
          />
          {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full py-3 rounded-lg text-white text-sm font-semibold tracking-wide
                     transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
          style={{ background: "#2E7D32" }}
          onMouseEnter={(e) => {
            if (status !== "sending")
              (e.currentTarget as HTMLElement).style.background = "#1B5E20";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = "#2E7D32";
          }}
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
}
