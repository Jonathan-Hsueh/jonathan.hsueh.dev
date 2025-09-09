import React, { useState, useEffect, useCallback } from "react";
import { Mail } from "lucide-react";
import { LuGithub, LuLinkedin } from "react-icons/lu";
import { GrDocumentUser } from "react-icons/gr";


const CONTACT_EMAIL = "jonathanhsueh@ucsb.edu";
const API_ENDPOINT = "/api/contact";

const ContactSection = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const formValid = validEmail && subject.trim().length > 0 && message.trim().length > 0;

  const clear = () => {
    setEmail("");
    setSubject("");
    setMessage("");
  };

  const closePopup = useCallback(() => setSent(false), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closePopup();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closePopup]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement> ) => {
    e.preventDefault();
    if (!formValid) return;
    setSending(true);

    try {
      const res = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ from: email, subject, message }),
      });

      if (!res.ok) throw new Error("API failed");

      setSent(true);
      clear();
    } catch {
      // Fallback to mailto
      const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(`From: ${email}\n\n${message}`)}`;
      window.location.href = mailto;
      setSent(true);
      clear();
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen text-gray-900 flex items-center justify-start p-6 pl-20">
      <div className="w-full max-w-2xl">
        {/* Header with opening brace */}
        <div className="flex items-baseline gap-3 mb-8">
          <h2 className="text-2xl font-bold tracking-wider text-gray-900 uppercase">
            CONTACT
          </h2>
          <span className="text-3xl font-bold text-gray-900">{"{"}</span>
        </div>

        {/* Content indented */}
        <div className="ml-6">
          {/* Lead-in copy */}
          <p className="text-xl font-semibold text-gray-900 ">
            Have a project in mind?
          </p>
          <p className="text-l font-semibold text-gray-700 mb-8">
          My inbox is always open for new opportunities.
          </p>
          

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6 mb-8">
            <div>
              <input
                type="email"
                placeholder="Type your email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-3/4 text-xs rounded-lg border border-sky-950 bg-transparent text-gray-950 px-4 py-3 outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent placeholder-gray-950"
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Type your subject..."
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-3/4 text-xs rounded-lg border border-sky-950 bg-transparent text-gray-950 px-4 py-3 outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent placeholder-gray-950"
              />
            </div>

            <div>
              <textarea
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={1}
                className="w-3/4 text-xs rounded-lg border border-sky-950 bg-transparent text-gray-950 px-4 py-3 outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent placeholder-gray-950 resize-y"
              />
            </div>

            <button
              type="submit"
              disabled={!formValid || sending}
              className={`w-3/4 rounded-lg px-6 py-3 text-lg font-semibold transition-all ${
                formValid && !sending
                  ? "bg-[#C76A2F] text-white text-left hover:bg-[#C76A2F]"
                  : "bg-gray-400 text-gray-600 text-left cursor-not-allowed"
              }`}
            >
              {sending ? "Sending..." : "Submit"}
            </button>
          </form>

          {/* Social links */}
          <div className="space-y-4 mb-8">
            <a
              href="https://github.com/Jonathan-Hsueh"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors"
            >
              <LuGithub className="w-6 h-6 text-xl" />
              <span>Jonathan-Hsueh</span>
            </a>

            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors"
            >
              <Mail className="text-xl" />
              <span>{CONTACT_EMAIL}</span>
            </a>

            <a
              href="https://www.linkedin.com/in/jonathan-c-hsueh/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors"
            >
              <LuLinkedin className="w-6 h-6 text-xl" />
              <span>Jonathan Hsueh</span>
            </a>

            <a
              href="https://drive.google.com/file/d/1g1pk0Sk0CStmj8I9BTbLjk3mBQSVrFJX/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors"
            >
              <GrDocumentUser className="w-6 h-6 text-xl" />
              <span>Resume</span>
            </a>
          </div>

          {/* Closing brace */}
          <div>
            <span className="text-3xl font-bold text-gray-900">{"}"}</span>
          </div>
        </div>
      </div>

      {/* Success popup */}
      {sent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center animate-in fade-in duration-300">
          <div
            className="absolute inset-0 bg-black/50 animate-in fade-in duration-300"
            onClick={closePopup}
            aria-hidden
          />
          <div className="relative z-10 w-[min(92vw,28rem)] rounded-2xl bg-white border border-gray-300 p-6 shadow-xl animate-in zoom-in-95 fade-in duration-300">
            <div className="flex items-start justify-between">
              <h4 className="text-lg font-semibold text-gray-900">Message sent</h4>
              <button
                onClick={closePopup} // change some of the colors here
                className="ml-4 rounded-full border border-gray-300 px-2 leading-none text-gray-600 hover:bg-gray-700 hover:text-white hover:border-gray-700 transition-all duration-200"
                aria-label="Close"
              >
                ESC
              </button>
            </div>
            <p className="mt-2 text-sm text-gray-600">
              Thanks! I&aposll get back to you soon.
            </p>
            <div className="mt-4 flex justify-end">
              <button
                onClick={closePopup}
                className="rounded-lg border border-gray-600 text-gray-600 px-4 py-2 text-sm hover:bg-gray-700 hover:text-white transition-colors duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactSection;