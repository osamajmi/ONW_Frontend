"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

interface LandingPageFormProps {
  title: string;
  subtitle?: string;
  buttonText: string;
  placeholderMessage?: string;
  sourcePage: string; // e.g. "Delhi", "Gurgaon", "Noida", "India"
}

type Status = "idle" | "loading" | "success" | "error";

export default function LandingPageForm({
  title,
  subtitle,
  buttonText,
  placeholderMessage = "Describe your requirements...",
  sourcePage,
}: LandingPageFormProps) {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [focused, setFocused] = useState<string | null>(null);
  
  const containerId = useRef(`recaptcha-${Math.random().toString(36).substring(2, 9)}`);
  const recaptchaIdRef = useRef<number | null>(null);

  useEffect(() => {
    // Dynamic reCAPTCHA script loading
    if (!document.getElementById("recaptcha-script-landing")) {
      const script = document.createElement("script");
      script.id = "recaptcha-script-landing";
      script.src = "https://www.google.com/recaptcha/api.js?render=explicit";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }

    // Explicit captcha rendering to support multiple forms on the same page
    const renderCaptcha = () => {
      const grecaptcha = (window as any).grecaptcha;
      if (grecaptcha && grecaptcha.render && recaptchaIdRef.current === null) {
        try {
          const widgetId = grecaptcha.render(containerId.current, {
            sitekey: "6Le73CUtAAAAAJ-wdkBaX2hdIBrzjC7ZNvze0kk1",
            theme: "dark",
          });
          recaptchaIdRef.current = widgetId;
        } catch (e) {
          console.error("Grecaptcha render error:", e);
        }
      }
    };

    if ((window as any).grecaptcha) {
      renderCaptcha();
    } else {
      const checkInterval = setInterval(() => {
        if ((window as any).grecaptcha && (window as any).grecaptcha.render) {
          renderCaptcha();
          clearInterval(checkInterval);
        }
      }, 500);
      return () => clearInterval(checkInterval);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message || !formData.phone) {
      setErrorMessage("All fields are required.");
      setStatus("error");
      return;
    }

    const grecaptcha = (window as any).grecaptcha;
    let recaptchaToken = "";
    
    if (grecaptcha && recaptchaIdRef.current !== null) {
      recaptchaToken = grecaptcha.getResponse(recaptchaIdRef.current);
    }

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
      
      // Concatenate phone & sourcePage inside message for DB/Dashboard and email delivery compatibility
      const messageContent = `[Location Landing Page: ${sourcePage}]\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`;

      const res = await fetch(`${baseUrl}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: messageContent,
          recaptchaToken,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
        if (grecaptcha && recaptchaIdRef.current !== null) {
          grecaptcha.reset(recaptchaIdRef.current);
        }
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        const errorData = await res.json();
        setErrorMessage(errorData.message || "Failed to submit proposal");
        setStatus("error");
        if (grecaptcha && recaptchaIdRef.current !== null) {
          grecaptcha.reset(recaptchaIdRef.current);
        }
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      setErrorMessage("Network error. Please try again later.");
      setStatus("error");
      if (grecaptcha && recaptchaIdRef.current !== null) {
        grecaptcha.reset(recaptchaIdRef.current);
      }
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <div className="relative">
      {title && <h3 className="font-display text-xl font-bold mb-2">{title}</h3>}
      {subtitle && <p className="text-muted-foreground text-sm mb-6">{subtitle}</p>}

      {/* Success / Error Banners */}
      <AnimatePresence mode="wait">
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center gap-3 bg-green-500/10 border border-green-500/30 text-green-400 rounded-xl px-4 py-3 mb-4 text-sm"
          >
            <CheckCircle size={18} className="shrink-0" />
            <span>Proposal sent successfully! We will connect in 2 hours.</span>
          </motion.div>
        )}
        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center gap-3 bg-red-500/10 border border-red-500/30 text-red-400 rounded-xl px-4 py-3 mb-4 text-sm"
          >
            <AlertCircle size={18} className="shrink-0" />
            <span>{errorMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit} className="space-y-4">
        {[
          { name: "name", label: "Your Name", type: "text", placeholder: "e.g. Rahul Sharma" },
          { name: "email", label: "Email Address", type: "email", placeholder: "e.g. rahul@business.com" },
          { name: "phone", label: "Phone / WhatsApp Number", type: "tel", placeholder: "e.g. 9876543210" },
        ].map((field) => (
          <div key={field.name} className="relative">
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name as "name" | "email" | "phone"]}
              onChange={handleChange}
              placeholder={field.placeholder}
              required
              disabled={status === "loading"}
              onFocus={() => setFocused(field.name)}
              onBlur={() => setFocused(null)}
              className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
            />
            {focused === field.name && (
              <motion.div
                layoutId={`ring-${containerId.current}`}
                className="absolute inset-0 rounded-xl border border-primary pointer-events-none"
                transition={{ duration: 0.2 }}
              />
            )}
          </div>
        ))}
        
        <div className="relative">
          <textarea
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            placeholder={placeholderMessage}
            required
            disabled={status === "loading"}
            onFocus={() => setFocused("message")}
            onBlur={() => setFocused(null)}
            className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors resize-none disabled:opacity-50"
          />
          {focused === "message" && (
            <motion.div
              layoutId={`ring-${containerId.current}`}
              className="absolute inset-0 rounded-xl border border-primary pointer-events-none"
              transition={{ duration: 0.2 }}
            />
          )}
        </div>

        {/* Dynamic Unique Container for reCAPTCHA widget */}
        <div className="flex justify-center py-1">
          <div id={containerId.current} className="scale-90 origin-center"></div>
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3.5 rounded-xl hover:glow-accent transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
        >
          {status === "loading" ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              Submitting Proposal...
            </>
          ) : (
            <>
              {buttonText}
              <Send size={16} />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
