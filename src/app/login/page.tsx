"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GrainOverlay from "@/components/GrainOverlay";
import { Lock, User, Loader2, Sparkles } from "lucide-react";
import { toast } from "sonner";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // If already logged in, redirect to dashboard
    if (localStorage.getItem("token")) {
      router.push("/dashboard");
    }
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Login failed");
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      toast.success("Welcome back, Administrator!");
      router.push("/dashboard");
    } catch (error: any) {
      toast.error(error.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden flex flex-col justify-between">
      <GrainOverlay />
      <Navbar />

      <main className="flex-grow flex items-center justify-center pt-32 pb-20 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-md glass border border-border/40 p-8 rounded-2xl relative shadow-2xl"
        >
          {/* Decorative glows */}
          <div className="absolute -top-10 -left-10 w-24 h-24 bg-primary/20 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-primary/20 rounded-full blur-2xl pointer-events-none" />

          {/* Heading */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs text-primary font-medium mb-3">
              <Sparkles size={12} />
              Secure Authentication
            </div>
            <h1 className="font-display text-2xl md:text-3xl font-bold">Admin Portal</h1>
            <p className="text-muted-foreground text-xs mt-1.5">
              Sign in to manage blogs, about page content, and PDF files
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Username
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <input
                  type="text"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-secondary/30 border border-border/80 focus:border-primary rounded-xl py-3 pl-12 pr-4 text-sm placeholder:text-muted-foreground outline-none transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <input
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-secondary/30 border border-border/80 focus:border-primary rounded-xl py-3 pl-12 pr-4 text-sm placeholder:text-muted-foreground outline-none transition-colors"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-primary-foreground font-semibold py-3 px-6 rounded-xl hover:opacity-95 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2 mt-4 text-sm"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Logging in...
                </>
              ) : (
                "Access Dashboard"
              )}
            </button>
          </form>

          {/* Seed account reminder */}
          <p className="text-[10px] text-center text-muted-foreground/60 mt-6 italic">
            Hint: Default development credentials are admin / admin123
          </p>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
