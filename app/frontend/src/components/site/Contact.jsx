import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { ArrowRight, Mail, MessageCircle, Phone } from "lucide-react";
import { site, processSteps, services } from "@/lib/content";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const inputCls =
  "w-full bg-white/[0.06] border border-white/15 rounded-xl px-4 py-3 text-[14px] text-white placeholder:text-white/40 focus:outline-none focus:border-[#E2603B] transition-colors duration-300";

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [sending, setSending] = useState(false);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      await axios.post(`${API}/contact`, {
        ...form,
        phone: form.phone || null,
        service: form.service || null,
      });
      toast.success("Message sent. We'll get back to you within 24 hours.");
      setForm({ name: "", email: "", phone: "", service: "", message: "" });
    } catch {
      toast.error("Something went wrong. Try WhatsApp instead?");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" data-testid="contact-section" className="bg-[#142523] pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-24 scroll-mt-4">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#E2603B] text-white text-[11px] sm:text-[12px] font-semibold flex items-center justify-center">4</span>
          <span className="text-[12px] sm:text-[13px] font-medium text-white/90 border border-white/20 rounded-full px-3 sm:px-4 py-1 sm:py-1.5">Start a project</span>
        </div>

        <h2 className="font-display font-medium leading-[1.1] tracking-[-0.03em] text-white text-[clamp(1.75rem,6vw,3.8rem)] mb-4">
          Tell us what you
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          want to build.
        </h2>
        <p className="text-[14px] sm:text-[15px] text-white/60 max-w-md mb-12 sm:mb-16">
          Share a few details and we'll reply within a day — or skip the form and message us directly.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-20">
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            onSubmit={submit}
            data-testid="contact-form"
            className="flex flex-col gap-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input data-testid="contact-name-input" required minLength={2} value={form.name} onChange={set("name")} placeholder="Your name" className={inputCls} />
              <input data-testid="contact-email-input" required type="email" value={form.email} onChange={set("email")} placeholder="Email" className={inputCls} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input data-testid="contact-phone-input" value={form.phone} onChange={set("phone")} placeholder="Phone (optional)" className={inputCls} />
              <select data-testid="contact-service-select" value={form.service} onChange={set("service")} className={`${inputCls} appearance-none ${form.service ? "" : "text-white/40"}`}>
                <option value="" className="text-[#142523]">What do you need?</option>
                {services.map((s) => (
                  <option key={s.title} value={s.title} className="text-[#142523]">{s.title}</option>
                ))}
                <option value="Not sure yet" className="text-[#142523]">Not sure yet</option>
              </select>
            </div>
            <textarea data-testid="contact-message-input" required minLength={5} rows={5} value={form.message} onChange={set("message")} placeholder="Tell us about the project…" className={`${inputCls} resize-none`} />
            <button
              data-testid="contact-submit-btn"
              type="submit"
              disabled={sending}
              className="group self-start inline-flex items-center gap-3 rounded-full pl-6 pr-2 py-2 text-[14px] font-medium bg-[#E2603B] hover:bg-[#cf5230] text-white transition-colors duration-300 disabled:opacity-60"
            >
              <span className="relative overflow-hidden h-[20px]">
                <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-1/2">
                  <span className="h-[20px] leading-[20px]">{sending ? "Sending…" : "Send message"}</span>
                  <span className="h-[20px] leading-[20px]">{sending ? "Sending…" : "Send message"}</span>
                </span>
              </span>
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white">
                <ArrowRight size={14} className="text-[#E2603B] transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45" />
              </span>
            </button>
          </motion.form>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <a data-testid="contact-whatsapp-link" href={site.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 rounded-xl px-4 py-3.5 transition-colors duration-300">
                <MessageCircle size={16} className="text-[#E2603B]" />
                <span className="text-[14px] text-white">WhatsApp us</span>
              </a>
              <a data-testid="contact-phone-link" href={site.telUrl} className="flex items-center gap-3 bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 rounded-xl px-4 py-3.5 transition-colors duration-300">
                <Phone size={16} className="text-[#E2603B]" />
                <span className="text-[14px] text-white">{site.phoneDisplay}</span>
              </a>
              <a data-testid="contact-email-link" href={site.mailtoUrl} className="flex items-center gap-3 bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 rounded-xl px-4 py-3.5 transition-colors duration-300">
                <Mail size={16} className="text-[#E2603B]" />
                <span className="text-[14px] text-white break-all">{site.email}</span>
              </a>
            </div>

            <div>
              <p className="text-[12px] uppercase tracking-[0.16em] text-white/40 mb-4">How we work</p>
              <div className="flex flex-col gap-4">
                {processSteps.map((step, i) => (
                  <div key={step.title} className="flex items-start gap-3">
                    <span className="text-[12px] font-semibold text-[#E2603B] mt-0.5 w-6">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <p className="text-[14px] font-medium text-white">{step.title}</p>
                      <p className="text-[13px] text-white/50">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
