"use client";

import { useState, useRef } from "react";

import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import AnimatedSection from "./AnimatedSection";
import { Send, Mail, Phone, MapPin, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

// ─── EmailJS Config ───────────────────────────────────────────────────────────
// Yahan apni EmailJS credentials daalo (setup steps neeche hain)
const EMAILJS_SERVICE_ID  = "service_tv63nkk";
const EMAILJS_TEMPLATE_ID = "template_slv876o";
const EMAILJS_PUBLIC_KEY  = "XiJ31W47d7R4jZy1x";
// ─────────────────────────────────────────────────────────────────────────────

type Status = "idle" | "loading" | "success" | "error";

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [focused, setFocused] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("loading");
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current!,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <AnimatedSection>
            <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">Get In Touch</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Let's Build Something
              <br />
              <span className="text-gradient">Amazing</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Ready to elevate your digital presence? Drop us a message and let's start creating.
            </p>
            <div className="space-y-4 text-muted-foreground">
              <a href="mailto:info.onnextweb@gmail.com" className="flex items-center gap-3 hover:text-primary transition-colors">
                <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center">
                  <Mail size={16} />
                </div>
                info.onnextweb@gmail.com
              </a>
              <a href="tel:+918765077474" className="flex items-center gap-3 hover:text-primary transition-colors">
                <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center">
                  <Phone size={16} />
                </div>
                +91 8765077474
              </a>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center shrink-0">
                  <MapPin size={16} />
                </div>
                <span className="pt-2">C-25 Abul Fazal, Jamia Nagar, Okhla,<br />New Delhi – 110025</span>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            {/* Success / Error Banner */}
            <AnimatePresence>
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-3 bg-green-500/10 border border-green-500/30 text-green-400 rounded-xl px-5 py-4 mb-5"
                >
                  <CheckCircle size={20} />
                  <span className="font-medium">Message sent! We'll get back to you soon.</span>
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-3 bg-red-500/10 border border-red-500/30 text-red-400 rounded-xl px-5 py-4 mb-5"
                >
                  <AlertCircle size={20} />
                  <span className="font-medium">Something went wrong. Please try again.</span>
                </motion.div>
              )}
            </AnimatePresence>

            <form ref={formRef} className="space-y-5" onSubmit={handleSubmit}>
              {[
                { id: "name",  label: "Name",  type: "text"  },
                { id: "email", label: "Email", type: "email" },
              ].map((field) => (
                <div key={field.id} className="relative">
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    value={formData[field.id as "name" | "email"]}
                    onChange={handleChange}
                    placeholder={field.label}
                    required
                    disabled={status === "loading"}
                    onFocus={() => setFocused(field.id)}
                    onBlur={() => setFocused(null)}
                    className="w-full bg-transparent border border-border rounded-xl px-5 py-4 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors duration-300 disabled:opacity-50"
                  />
                  {focused === field.id && (
                    <motion.div
                      layoutId="focus-ring"
                      className="absolute inset-0 rounded-xl border border-primary pointer-events-none"
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </div>
              ))}
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project"
                  required
                  disabled={status === "loading"}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  className="w-full bg-transparent border border-border rounded-xl px-5 py-4 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors duration-300 resize-none disabled:opacity-50"
                />
                {focused === "message" && (
                  <motion.div
                    layoutId="focus-ring"
                    className="absolute inset-0 rounded-xl border border-primary pointer-events-none"
                    transition={{ duration: 0.2 }}
                  />
                )}
              </div>
              <motion.button
                whileHover={{ scale: status === "loading" ? 1 : 1.02 }}
                whileTap={{ scale: status === "loading" ? 1 : 0.98 }}
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-medium text-lg flex items-center justify-center gap-2 hover:glow-accent transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </motion.button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
