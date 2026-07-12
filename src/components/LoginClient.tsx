"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GrainOverlay from "@/components/GrainOverlay";
import { Lock, User, Loader2, ShieldCheck } from "lucide-react";
import { toast } from "sonner";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.onnextweb.in";

export default function LoginClient() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("token")) {
      router.push("/dashboard");
    }
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) {
      toast.error("Please enter both username and password.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Invalid administrative credentials");
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      toast.success("Welcome back, Administrator!");
      router.push("/dashboard");
    } catch (error: any) {
      toast.error(error.message || "Authentication failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden flex flex-col justify-between">
      <GrainOverlay />
      <Navbar />

      {/* Futuristic Background Glows */}
      <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] rounded-full bg-primary/10 blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-[20%] right-[10%] w-[350px] h-[350px] rounded-full bg-purple-500/10 blur-[100px] pointer-events-none" />

      <main className="flex-grow flex items-center justify-center pt-36 pb-20 px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-md p-0.5 rounded-2xl bg-gradient-to-b from-primary/30 via-border/40 to-transparent shadow-2xl"
        >
          <div className="bg-card/75 backdrop-blur-2xl p-8 rounded-2xl relative overflow-hidden">
            {/* Header info */}
            <div className="text-center mb-8">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] text-primary font-bold uppercase tracking-widest mb-4"
              >
                <ShieldCheck size={12} className="animate-pulse" />
                Administrative Access Only
              </motion.div>
              <h1 className="font-display text-3xl font-bold tracking-tight">Admin Portal</h1>
              <p className="text-muted-foreground text-xs mt-2 leading-relaxed">
                Log in to edit page metadata, write blog posts, and manage resource documents.
              </p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  Username
                </label>
                <div className="relative group">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground/60 group-focus-within:text-primary transition-colors w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full bg-secondary/20 border border-border/80 focus:border-primary rounded-xl py-3.5 pl-12 pr-4 text-sm placeholder:text-muted-foreground/40 outline-none transition-all focus:bg-secondary/40 focus:ring-1 focus:ring-primary/20"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  Password
                </label>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground/60 group-focus-within:text-primary transition-colors w-4 h-4" />
                  <input
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-secondary/20 border border-border/80 focus:border-primary rounded-xl py-3.5 pl-12 pr-4 text-sm placeholder:text-muted-foreground/40 outline-none transition-all focus:bg-secondary/40 focus:ring-1 focus:ring-primary/20"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary text-primary-foreground font-semibold py-3.5 px-6 rounded-xl hover:opacity-95 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2 mt-6 text-sm hover:shadow-lg hover:shadow-primary/10"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Authenticating...
                  </>
                ) : (
                  "Log In to Dashboard"
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
