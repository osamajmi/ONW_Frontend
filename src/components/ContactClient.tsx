"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GrainOverlay from "@/components/GrainOverlay";
import AnimatedSection from "@/components/AnimatedSection";
import { Send, Mail, Phone, MapPin, CheckCircle, AlertCircle, Loader2, ShieldCheck } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactClient() {
  const [focused, setFocused] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // Dynamically load Google reCAPTCHA v2 script
    if (!document.getElementById("recaptcha-script")) {
      const script = document.createElement("script");
      script.id = "recaptcha-script";
      script.src = "https://www.google.com/recaptcha/api.js";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Get reCAPTCHA response token
    const recaptchaToken = (window as any).grecaptcha?.getResponse();
    if (!recaptchaToken) {
      setErrorMessage("Please complete the reCAPTCHA verification.");
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const baseUrl = process.env.NEXT_PUBLIC_API_URL || "https://api.onnextweb.in";
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, recaptchaToken }),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        // Reset reCAPTCHA widget
        (window as any).grecaptcha?.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        const errorData = await res.json();
        setErrorMessage(errorData.message || "Failed to submit message");
        setStatus("error");
        // Reset reCAPTCHA widget on error so they can retry
        (window as any).grecaptcha?.reset();
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error: any) {
      setErrorMessage("Network error. Please try again later.");
      setStatus("error");
      (window as any).grecaptcha?.reset();
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden flex flex-col justify-between">
      <GrainOverlay />
      <Navbar />

      {/* Ambient background glows */}
      <div className="absolute top-[15%] left-[-10%] w-[45vw] h-[45vw] rounded-full bg-primary/10 blur-[130px] pointer-events-none animate-float-slow" />
      <div className="absolute bottom-[20%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-primary/5 blur-[110px] pointer-events-none animate-float-reverse" />

      <main className="flex-grow pt-32 pb-24 container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs text-primary font-medium mb-6 uppercase tracking-wider"
            >
              Get In Touch
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight"
            >
              Let's Build Something
              <br />
              <span className="text-gradient">Amazing</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              Ready to elevate your digital presence? Drop us a message and let's start creating together.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-start mt-8">
            {/* Contact Info Card */}
            <AnimatedSection className="bg-secondary/10 border border-border/60 rounded-3xl p-8 md:p-12 relative overflow-hidden backdrop-blur-sm">
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">Contact Information</h2>
              <p className="text-muted-foreground mb-8">
                Have questions or need a custom quote? Reach out to us using the options below or submit the form.
              </p>
              
              <div className="space-y-6 text-muted-foreground">
                <a href="mailto:info.onnextweb@gmail.com" className="flex items-center gap-4 hover:text-primary transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-all duration-300">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground/60 uppercase font-semibold">Email Us</p>
                    <p className="font-medium text-foreground">info.onnextweb@gmail.com</p>
                  </div>
                </a>

                <a href="tel:+918765077474" className="flex items-center gap-4 hover:text-primary transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-all duration-300">
                    <Phone size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground/60 uppercase font-semibold">Call Us</p>
                    <p className="font-medium text-foreground">+91 8765077474</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground/60 uppercase font-semibold">Visit Us</p>
                    <p className="font-medium text-foreground leading-relaxed">
                      C-25 Abul Fazal, Jamia Nagar, Okhla,<br />New Delhi – 110025
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Maps Location Embed */}
              <div className="mt-8 overflow-hidden rounded-xl border border-border/80 shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.2818987483017!2d77.28003667631333!3d28.561309575704044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3f46f3a388b%3A0xe54d6faeeec5845c!2sAbul%20Fazal%20Enclave%20Part%201%2C%20Okhla%20Vihar%2C%20Jamia%20Nagar%2C%20Okhla%2C%20New%20Delhi%2C%20Delhi%20110025!5e0!3m2!1sen!2sin!4v1716500000000!5m2!1sen!2sin"
                  width="100%"
                  height="180"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale invert opacity-70 hover:opacity-100 transition-opacity duration-350"
                  title="ON Next Web Delhi Office Location"
                ></iframe>
              </div>

              {/* Security & Compliance Trust Badges */}
              <div className="mt-8 border-t border-border/40 pt-6">
                <p className="text-[10px] uppercase font-bold text-muted-foreground/60 tracking-wider mb-4">
                  Security & Compliance Assurances
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={16} className="text-primary shrink-0" />
                    <span className="text-[11px] font-medium text-foreground">SSL Encrypted Portal</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={16} className="text-primary shrink-0" />
                    <span className="text-[11px] font-medium text-foreground">GDPR & PDP Compliant</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={16} className="text-primary shrink-0" />
                    <span className="text-[11px] font-medium text-foreground">NDA Terms Enforced</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={16} className="text-primary shrink-0" />
                    <span className="text-[11px] font-medium text-foreground">Secure reCAPTCHA v2</span>
                  </div>
                </div>
              </div>

              {/* Decorative Subtle Line */}
              <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent rounded-full mt-8" />
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection delay={0.15}>
              {/* Success / Error Banner */}
              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-3 bg-green-500/10 border border-green-500/30 text-green-400 rounded-2xl px-5 py-4 mb-6"
                  >
                    <CheckCircle size={20} className="shrink-0" />
                    <span className="font-medium">Message sent! We will contact you soon.</span>
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-3 bg-red-500/10 border border-red-500/30 text-red-400 rounded-2xl px-5 py-4 mb-6"
                  >
                    <AlertCircle size={20} className="shrink-0" />
                    <span className="font-medium">{errorMessage || "Something went wrong. Please try again."}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Name"
                      required
                      disabled={status === "loading"}
                      onFocus={() => setFocused("name")}
                      onBlur={() => setFocused(null)}
                      className="w-full bg-transparent border border-border rounded-2xl px-5 py-4 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors duration-300 disabled:opacity-50"
                    />
                    {focused === "name" && (
                      <motion.div
                        layoutId="focus-ring-contact"
                        className="absolute inset-0 rounded-2xl border border-primary pointer-events-none"
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </div>

                  {/* Email field */}
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address"
                      required
                      disabled={status === "loading"}
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused(null)}
                      className="w-full bg-transparent border border-border rounded-2xl px-5 py-4 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors duration-300 disabled:opacity-50"
                    />
                    {focused === "email" && (
                      <motion.div
                        layoutId="focus-ring-contact"
                        className="absolute inset-0 rounded-2xl border border-primary pointer-events-none"
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </div>
                </div>

                {/* Message field */}
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project or inquiry"
                    required
                    disabled={status === "loading"}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    className="w-full bg-transparent border border-border rounded-2xl px-5 py-4 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors duration-300 resize-none disabled:opacity-50"
                  />
                  {focused === "message" && (
                    <motion.div
                      layoutId="focus-ring-contact"
                      className="absolute inset-0 rounded-2xl border border-primary pointer-events-none"
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </div>

                {/* Google reCAPTCHA v2 */}
                <div 
                  className="g-recaptcha flex justify-center py-2"
                  data-sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "6Le73CUtAAAAAJ-wdkBaX2hdIBrzjC7ZNvze0kk1"}
                  data-theme="dark"
                />

                <motion.button
                  whileHover={{ scale: status === "loading" ? 1 : 1.02 }}
                  whileTap={{ scale: status === "loading" ? 1 : 0.98 }}
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-primary text-primary-foreground py-4 rounded-2xl font-medium text-lg flex items-center justify-center gap-2 hover:glow-accent transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending Message...
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
      </main>

      <Footer />
    </div>
  );
}
