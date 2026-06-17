"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GrainOverlay from "@/components/GrainOverlay";
import {
  LayoutDashboard,
  FileText,
  Plus,
  Edit2,
  Trash2,
  Upload,
  Settings,
  BookOpen,
  Loader2,
  X,
  FileCheck,
  Globe,
  Search,
  Check
} from "lucide-react";
import { toast } from "sonner";

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

interface AboutData {
  title: string;
  subtitle: string;
  description1: string;
  description2: string;
  stats: Stat[];
}

interface BlogPost {
  _id: string;
  title: string;
  summary: string;
  content: string;
  coverImage?: string;
  author: string;
  createdAt: string;
}

interface PdfFile {
  _id: string;
  filename: string;
  contentType: string;
  size: number;
  createdAt: string;
}

interface SeoConfig {
  page: string;
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
}

export default function Dashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"about" | "blogs" | "pdfs" | "seo">("about");
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState<string | null>(null);

  // About form state
  const [aboutData, setAboutData] = useState<AboutData>({
    title: "",
    subtitle: "",
    description1: "",
    description2: "",
    stats: []
  });
  const [savingAbout, setSavingAbout] = useState(false);

  // Blogs state
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [showBlogModal, setShowBlogModal] = useState(false);
  const [editingBlogId, setEditingBlogId] = useState<string | null>(null);
  const [blogForm, setBlogForm] = useState({
    title: "",
    summary: "",
    content: "",
    coverImage: "",
    author: "Admin"
  });
  const [savingBlog, setSavingBlog] = useState(false);

  // PDFs state
  const [pdfs, setPdfs] = useState<PdfFile[]>([]);
  const [uploadingPdfs, setUploadingPdfs] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);

  // SEO state
  const [selectedSeoPage, setSelectedSeoPage] = useState<string>("home");
  const [seoForm, setSeoForm] = useState<SeoConfig>({
    page: "home",
    title: "",
    description: "",
    keywords: "",
    ogTitle: "",
    ogDescription: "",
    ogImage: ""
  });
  const [loadingSeo, setLoadingSeo] = useState(false);
  const [savingSeo, setSavingSeo] = useState(false);

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (!savedToken) {
      toast.error("Access denied. Please log in first.");
      router.push("/login");
      return;
    }
    setToken(savedToken);
    fetchDashboardData(savedToken);
  }, [router]);

  // Fetch SEO details when the selected page changes
  useEffect(() => {
    if (!token) return;
    fetchSeoForPage(selectedSeoPage);
  }, [selectedSeoPage, token]);

  const fetchSeoForPage = async (pageName: string) => {
    setLoadingSeo(true);
    try {
      const res = await fetch(`http://localhost:5000/api/seo/${pageName}`);
      if (res.ok) {
        const json = await res.json();
        setSeoForm(json);
      }
    } catch (err) {
      console.error("Failed to load SEO config:", err);
      toast.error("Error loading SEO parameters");
    } finally {
      setLoadingSeo(false);
    }
  };

  const fetchDashboardData = async (authToken: string) => {
    setLoading(true);
    try {
      // Fetch about content
      const aboutRes = await fetch("http://localhost:5000/api/about");
      if (aboutRes.ok) {
        const aboutJson = await aboutRes.json();
        setAboutData(aboutJson);
      }

      // Fetch blogs
      const blogsRes = await fetch("http://localhost:5000/api/blogs");
      if (blogsRes.ok) {
        const blogsJson = await blogsRes.json();
        setBlogs(blogsJson);
      }

      // Fetch PDFs
      const pdfsRes = await fetch("http://localhost:5000/api/pdfs");
      if (pdfsRes.ok) {
        const pdfsJson = await pdfsRes.json();
        setPdfs(pdfsJson);
      }
    } catch (err) {
      console.error("Error loading dashboard data:", err);
      toast.error("Failed to load dashboard resources.");
    } finally {
      setLoading(false);
    }
  };

  // ----------------------------------------
  // ABOUT CONTENT MANAGEMENT
  // ----------------------------------------
  const handleAboutChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setAboutData({ ...aboutData, [e.target.name]: e.target.value });
  };

  const handleStatChange = (idx: number, field: keyof Stat, value: string | number) => {
    const newStats = [...aboutData.stats];
    newStats[idx] = { ...newStats[idx], [field]: value };
    setAboutData({ ...aboutData, stats: newStats });
  };

  const saveAboutContent = async (e: React.FormEvent) => {
    e.preventDefault();
    setSavingAbout(true);
    try {
      const res = await fetch("http://localhost:5000/api/about", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(aboutData)
      });
      if (res.ok) {
        toast.success("About Us content updated successfully!");
      } else {
        const errJson = await res.json();
        throw new Error(errJson.message || "Failed to update content");
      }
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setSavingAbout(false);
    }
  };

  // ----------------------------------------
  // SEO SETTINGS MANAGEMENT
  // ----------------------------------------
  const handleSeoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSeoForm({ ...seoForm, [e.target.name]: e.target.value });
  };

  const saveSeoSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    setSavingSeo(true);
    try {
      const res = await fetch(`http://localhost:5000/api/seo/${selectedSeoPage}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(seoForm)
      });
      if (res.ok) {
        toast.success(`SEO settings for ${selectedSeoPage.toUpperCase()} saved successfully!`);
      } else {
        const errJson = await res.json();
        throw new Error(errJson.message || "Failed to save SEO config");
      }
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setSavingSeo(false);
    }
  };

  // ----------------------------------------
  // BLOG POSTS CRUD
  // ----------------------------------------
  const openNewBlogModal = () => {
    setEditingBlogId(null);
    setBlogForm({
      title: "",
      summary: "",
      content: "",
      coverImage: "",
      author: "Admin"
    });
    setShowBlogModal(true);
  };

  const openEditBlogModal = (blog: BlogPost) => {
    setEditingBlogId(blog._id);
    setBlogForm({
      title: blog.title,
      summary: blog.summary,
      content: blog.content,
      coverImage: blog.coverImage || "",
      author: blog.author
    });
    setShowBlogModal(true);
  };

  const handleBlogImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBlogForm({ ...blogForm, coverImage: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const saveBlog = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!blogForm.title || !blogForm.summary || !blogForm.content) {
      toast.error("Please fill in title, summary and content");
      return;
    }

    setSavingBlog(true);
    const url = editingBlogId
      ? `http://localhost:5000/api/blogs/${editingBlogId}`
      : "http://localhost:5000/api/blogs";
    const method = editingBlogId ? "PUT" : "POST";

    try {
      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(blogForm)
      });

      if (res.ok) {
        toast.success(editingBlogId ? "Blog updated successfully!" : "Blog created successfully!");
        setShowBlogModal(false);
        // Refresh blogs list
        const blogsRes = await fetch("http://localhost:5000/api/blogs");
        if (blogsRes.ok) setBlogs(await blogsRes.json());
      } else {
        const errJson = await res.json();
        throw new Error(errJson.message || "Failed to save blog");
      }
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setSavingBlog(false);
    }
  };

  const deleteBlog = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this blog post?")) return;

    try {
      const res = await fetch(`http://localhost:5000/api/blogs/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (res.ok) {
        toast.success("Blog removed successfully");
        setBlogs(blogs.filter((b) => b._id !== id));
      } else {
        const errJson = await res.json();
        throw new Error(errJson.message || "Failed to delete blog");
      }
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  // ----------------------------------------
  // PDF FILES UPLOAD AND DELETE
  // ----------------------------------------
  const handlePdfUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFiles || selectedFiles.length === 0) {
      toast.error("Please select one or more PDF files");
      return;
    }

    const formData = new FormData();
    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append("files", selectedFiles[i]);
    }

    setUploadingPdfs(true);
    try {
      const res = await fetch("http://localhost:5000/api/pdfs/upload", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: formData
      });

      const data = await res.json();
      if (res.ok) {
        toast.success(data.message || "PDFs uploaded successfully!");
        setSelectedFiles(null);
        // Reset file input
        const fileInput = document.getElementById("pdf-file-input") as HTMLInputElement;
        if (fileInput) fileInput.value = "";
        
        // Refresh PDFs list
        const pdfsRes = await fetch("http://localhost:5000/api/pdfs");
        if (pdfsRes.ok) setPdfs(await pdfsRes.json());
      } else {
        throw new Error(data.message || "Failed to upload files");
      }
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setUploadingPdfs(false);
    }
  };

  const deletePdf = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this PDF document?")) return;

    try {
      const res = await fetch(`http://localhost:5000/api/pdfs/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (res.ok) {
        toast.success("PDF deleted successfully");
        setPdfs(pdfs.filter((p) => p._id !== id));
      } else {
        const errJson = await res.json();
        throw new Error(errJson.message || "Failed to delete PDF");
      }
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  const formatBytes = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden flex flex-col justify-between">
      <GrainOverlay />
      <Navbar />

      <main className="flex-grow pt-32 pb-24 container mx-auto px-6 max-w-6xl">
        {/* Header Title */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-border/60 pb-8 mb-8">
          <div>
            <div className="flex items-center gap-2 text-primary text-xs font-semibold uppercase tracking-wider mb-2">
              <LayoutDashboard size={14} />
              Control Panel
            </div>
            <h1 className="font-display text-3xl md:text-4xl font-bold">Admin Dashboard</h1>
          </div>
          <div className="text-xs text-muted-foreground bg-secondary/40 py-1.5 px-3 rounded-full border border-border/40">
            Connected as <strong className="text-foreground">admin</strong>
          </div>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-40">
            <Loader2 className="w-10 h-10 animate-spin text-primary" />
            <p className="mt-4 text-muted-foreground text-sm">Loading administrative modules...</p>
          </div>
        ) : (
          <div className="grid lg:grid-cols-[240px_1fr] gap-8">
            {/* Sidebar Navigation */}
            <aside className="space-y-2 lg:border-r lg:border-border/60 lg:pr-8">
              <button
                onClick={() => setActiveTab("about")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === "about"
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-secondary/50 text-muted-foreground hover:text-foreground"
                }`}
              >
                <Settings size={18} />
                About Us Content
              </button>
              <button
                onClick={() => setActiveTab("blogs")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === "blogs"
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-secondary/50 text-muted-foreground hover:text-foreground"
                }`}
              >
                <BookOpen size={18} />
                Manage Blogs
              </button>
              <button
                onClick={() => setActiveTab("pdfs")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === "pdfs"
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-secondary/50 text-muted-foreground hover:text-foreground"
                }`}
              >
                <FileText size={18} />
                Upload & PDF Files
              </button>
              <button
                onClick={() => setActiveTab("seo")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === "seo"
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-secondary/50 text-muted-foreground hover:text-foreground"
                }`}
              >
                <Globe size={18} />
                SEO Page Settings
              </button>
            </aside>

            {/* Main Content Area */}
            <div className="glass p-6 md:p-8 rounded-2xl border border-border/40">
              {/* TAB 1: ABOUT US */}
              {activeTab === "about" && (
                <form onSubmit={saveAboutContent} className="space-y-6">
                  <h2 className="text-xl font-bold font-display border-b border-border/40 pb-3 mb-4">
                    Edit About Us Content
                  </h2>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        Title Phrase 1
                      </label>
                      <input
                        type="text"
                        name="title"
                        value={aboutData.title}
                        onChange={handleAboutChange}
                        className="w-full bg-secondary/20 border border-border/80 focus:border-primary rounded-xl py-3 px-4 text-sm outline-none transition-colors"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        Title Phrase 2 (Gradient Highlight)
                      </label>
                      <input
                        type="text"
                        name="subtitle"
                        value={aboutData.subtitle}
                        onChange={handleAboutChange}
                        className="w-full bg-secondary/20 border border-border/80 focus:border-primary rounded-xl py-3 px-4 text-sm outline-none transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Description Paragraph 1
                    </label>
                    <textarea
                      name="description1"
                      rows={3}
                      value={aboutData.description1}
                      onChange={handleAboutChange}
                      className="w-full bg-secondary/20 border border-border/80 focus:border-primary rounded-xl py-3 px-4 text-sm outline-none transition-colors resize-y"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Description Paragraph 2
                    </label>
                    <textarea
                      name="description2"
                      rows={3}
                      value={aboutData.description2}
                      onChange={handleAboutChange}
                      className="w-full bg-secondary/20 border border-border/80 focus:border-primary rounded-xl py-3 px-4 text-sm outline-none transition-colors resize-y"
                      required
                    />
                  </div>

                  {/* Counters Stats */}
                  <div className="space-y-4 pt-4 border-t border-border/40">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                      Achievements & Stats Counters
                    </h3>
                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                      {aboutData.stats?.map((stat, idx) => (
                        <div key={idx} className="bg-secondary/15 p-4 rounded-xl border border-border/40 space-y-3">
                          <div>
                            <label className="text-[10px] uppercase font-bold text-muted-foreground">
                              Counter Value
                            </label>
                            <input
                              type="number"
                              value={stat.value}
                              onChange={(e) => handleStatChange(idx, "value", parseInt(e.target.value) || 0)}
                              className="w-full bg-secondary/20 border border-border/60 rounded-lg py-1.5 px-2.5 text-xs outline-none focus:border-primary"
                            />
                          </div>
                          <div>
                            <label className="text-[10px] uppercase font-bold text-muted-foreground">
                              Suffix (e.g. +, %)
                            </label>
                            <input
                              type="text"
                              value={stat.suffix}
                              onChange={(e) => handleStatChange(idx, "suffix", e.target.value)}
                              className="w-full bg-secondary/20 border border-border/60 rounded-lg py-1.5 px-2.5 text-xs outline-none focus:border-primary"
                            />
                          </div>
                          <div>
                            <label className="text-[10px] uppercase font-bold text-muted-foreground">
                              Label Description
                            </label>
                            <input
                              type="text"
                              value={stat.label}
                              onChange={(e) => handleStatChange(idx, "label", e.target.value)}
                              className="w-full bg-secondary/20 border border-border/60 rounded-lg py-1.5 px-2.5 text-xs outline-none focus:border-primary"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={savingAbout}
                    className="bg-primary text-primary-foreground font-semibold py-2.5 px-6 rounded-xl hover:opacity-95 transition-opacity disabled:opacity-50 flex items-center gap-2 text-sm ml-auto"
                  >
                    {savingAbout ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Saving changes...
                      </>
                    ) : (
                      "Update About Us Page"
                    )}
                  </button>
                </form>
              )}

              {/* TAB 2: MANAGE BLOGS */}
              {activeTab === "blogs" && (
                <div className="space-y-6">
                  <div className="flex justify-between items-center border-b border-border/40 pb-3 mb-4">
                    <h2 className="text-xl font-bold font-display">Manage Blog Posts</h2>
                    <button
                      onClick={openNewBlogModal}
                      className="bg-primary text-primary-foreground flex items-center gap-1.5 py-2 px-4 rounded-xl text-xs font-semibold hover:opacity-90 transition-opacity"
                    >
                      <Plus size={14} />
                      Add Article
                    </button>
                  </div>

                  {blogs.length === 0 ? (
                    <div className="text-center py-12 bg-secondary/10 rounded-xl border border-dashed border-border/60">
                      <p className="text-muted-foreground text-sm">No blog posts found. Write your first post!</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {blogs.map((blog) => (
                        <div
                          key={blog._id}
                          className="flex items-center justify-between gap-4 p-4 bg-secondary/10 rounded-xl border border-border/30 hover:border-border/60 transition-colors"
                        >
                          <div className="flex items-center gap-4 overflow-hidden">
                            {blog.coverImage ? (
                              <img
                                src={blog.coverImage}
                                alt={blog.title}
                                className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                              />
                            ) : (
                              <div className="w-12 h-12 rounded-lg bg-secondary/80 flex items-center justify-center text-xs font-semibold flex-shrink-0">
                                No Image
                              </div>
                            )}
                            <div className="overflow-hidden">
                              <h3 className="font-bold text-sm truncate">{blog.title}</h3>
                              <p className="text-xs text-muted-foreground truncate">{blog.summary}</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 flex-shrink-0">
                            <button
                              onClick={() => openEditBlogModal(blog)}
                              className="w-8 h-8 rounded-lg bg-secondary/80 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                              title="Edit post"
                            >
                              <Edit2 size={14} />
                            </button>
                            <button
                              onClick={() => deleteBlog(blog._id)}
                              className="w-8 h-8 rounded-lg bg-secondary/80 flex items-center justify-center hover:bg-destructive hover:text-destructive-foreground transition-all"
                              title="Delete post"
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* TAB 3: MANAGE PDFS */}
              {activeTab === "pdfs" && (
                <div className="space-y-8">
                  <div className="border-b border-border/40 pb-3">
                    <h2 className="text-xl font-bold font-display">Manage PDF Documents</h2>
                    <p className="text-xs text-muted-foreground mt-1">
                      Upload multiple PDF resources. They will be converted to binary data and stored directly in MongoDB.
                    </p>
                  </div>

                  {/* Multiple PDF File Upload Form */}
                  <form onSubmit={handlePdfUpload} className="space-y-4">
                    <div className="border-2 border-dashed border-border/80 hover:border-primary/50 transition-colors rounded-xl p-8 text-center flex flex-col items-center justify-center relative cursor-pointer group">
                      <input
                        type="file"
                        id="pdf-file-input"
                        multiple
                        accept="application/pdf"
                        onChange={(e) => setSelectedFiles(e.target.files)}
                        className="absolute inset-0 opacity-0 cursor-pointer"
                      />
                      <Upload className="w-10 h-10 text-muted-foreground group-hover:text-primary transition-colors mb-4" />
                      <h4 className="font-bold text-sm mb-1">Select multiple PDF files</h4>
                      <p className="text-xs text-muted-foreground max-w-xs mx-auto">
                        Drag and drop or click here to browse. (Max 15MB per file)
                      </p>
                    </div>

                    {selectedFiles && selectedFiles.length > 0 && (
                      <div className="bg-secondary/15 p-4 rounded-xl border border-border/40">
                        <h4 className="font-bold text-xs uppercase text-muted-foreground mb-3 tracking-wider">
                          Selected Files ({selectedFiles.length})
                        </h4>
                        <div className="space-y-2">
                          {Array.from(selectedFiles).map((file, i) => (
                            <div key={i} className="flex items-center justify-between text-xs text-foreground">
                              <span className="truncate max-w-sm flex items-center gap-1.5">
                                <FileCheck size={14} className="text-primary flex-shrink-0" />
                                {file.name}
                              </span>
                              <span className="text-muted-foreground flex-shrink-0">{formatBytes(file.size)}</span>
                            </div>
                          ))}
                        </div>
                        <button
                          type="submit"
                          disabled={uploadingPdfs}
                          className="w-full bg-primary text-primary-foreground font-semibold py-2 px-4 rounded-xl text-xs hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2 mt-4"
                        >
                          {uploadingPdfs ? (
                            <>
                              <Loader2 className="w-3.5 h-3.5 animate-spin" />
                              Uploading to MongoDB...
                            </>
                          ) : (
                            "Upload Selected PDF(s)"
                          )}
                        </button>
                      </div>
                    )}
                  </form>

                  {/* List of PDFs */}
                  <div className="space-y-4 pt-4 border-t border-border/40">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                      Stored PDF Library ({pdfs.length})
                    </h3>

                    {pdfs.length === 0 ? (
                      <div className="text-center py-8 bg-secondary/10 rounded-xl border border-border/30">
                        <p className="text-muted-foreground text-xs">No PDF documents stored in MongoDB database.</p>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        {pdfs.map((pdf) => (
                          <div
                            key={pdf._id}
                            className="flex items-center justify-between gap-4 p-3 bg-secondary/10 rounded-xl border border-border/30 text-xs"
                          >
                            <div className="flex items-center gap-3 overflow-hidden">
                              <FileText size={18} className="text-primary flex-shrink-0" />
                              <div className="overflow-hidden">
                                <h4 className="font-bold truncate" title={pdf.filename}>
                                  {pdf.filename}
                                </h4>
                                <div className="text-muted-foreground flex gap-3 mt-0.5">
                                  <span>{formatBytes(pdf.size)}</span>
                                  <span>
                                    {new Date(pdf.createdAt).toLocaleDateString("en-US", {
                                      month: "short",
                                      day: "numeric",
                                      year: "numeric"
                                    })}
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div className="flex items-center gap-2">
                              <a
                                href={`http://localhost:5000/api/pdfs/${pdf._id}`}
                                target="_blank"
                                rel="noreferrer"
                                className="py-1.5 px-3 rounded-lg bg-secondary/80 text-foreground hover:bg-secondary transition-colors"
                              >
                                View
                              </a>
                              <button
                                onClick={() => deletePdf(pdf._id)}
                                className="w-8 h-8 rounded-lg bg-secondary/80 flex items-center justify-center hover:bg-destructive hover:text-destructive-foreground transition-all"
                                title="Delete document"
                              >
                                <Trash2 size={14} />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* TAB 4: SEO PAGE SETTINGS */}
              {activeTab === "seo" && (
                <form onSubmit={saveSeoSettings} className="space-y-6">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 border-b border-border/40 pb-3 mb-4">
                    <div>
                      <h2 className="text-xl font-bold font-display">Page SEO Metadata Configurations</h2>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        Customize meta titles, keywords, and descriptions for search engine crawlers.
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-muted-foreground">Select Page:</span>
                      <select
                        value={selectedSeoPage}
                        onChange={(e) => setSelectedSeoPage(e.target.value)}
                        className="bg-secondary/40 border border-border rounded-lg text-xs font-semibold py-1.5 px-3 focus:border-primary outline-none cursor-pointer"
                      >
                        <option value="home">Home Page</option>
                        <option value="about">About Us</option>
                        <option value="blog">Blog Feed</option>
                        <option value="resources">Resources (PDFs)</option>
                      </select>
                    </div>
                  </div>

                  {loadingSeo ? (
                    <div className="flex flex-col items-center justify-center py-20">
                      <Loader2 className="w-8 h-8 animate-spin text-primary" />
                      <p className="mt-3 text-xs text-muted-foreground">Loading SEO variables...</p>
                    </div>
                  ) : (
                    <div className="space-y-5">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                            Meta Title Tag
                          </label>
                          <input
                            type="text"
                            name="title"
                            value={seoForm.title}
                            onChange={handleSeoChange}
                            placeholder="Enter page title tag"
                            className="w-full bg-secondary/20 border border-border/80 focus:border-primary rounded-xl py-3 px-4 text-sm outline-none transition-colors"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                            Meta Keywords (comma separated)
                          </label>
                          <input
                            type="text"
                            name="keywords"
                            value={seoForm.keywords}
                            onChange={handleSeoChange}
                            placeholder="keyword1, keyword2, keyword3"
                            className="w-full bg-secondary/20 border border-border/80 focus:border-primary rounded-xl py-3 px-4 text-sm outline-none transition-colors"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                          Meta Description Tag
                        </label>
                        <textarea
                          name="description"
                          rows={3}
                          value={seoForm.description}
                          onChange={handleSeoChange}
                          placeholder="Enter brief description of this page (recommend under 160 characters)"
                          className="w-full bg-secondary/20 border border-border/80 focus:border-primary rounded-xl py-3 px-4 text-sm outline-none transition-colors resize-y"
                          required
                        />
                      </div>

                      <div className="space-y-4 pt-4 border-t border-border/40">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-primary">
                          Social Preview / Open Graph (OG) Tags
                        </h3>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                              OG Title
                            </label>
                            <input
                              type="text"
                              name="ogTitle"
                              value={seoForm.ogTitle}
                              onChange={handleSeoChange}
                              placeholder="Social share title card text"
                              className="w-full bg-secondary/20 border border-border/60 focus:border-primary rounded-xl py-2.5 px-4 text-xs outline-none transition-colors"
                            />
                          </div>

                          <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                              OG Image URL
                            </label>
                            <input
                              type="text"
                              name="ogImage"
                              value={seoForm.ogImage}
                              onChange={handleSeoChange}
                              placeholder="https://example.com/share-image.jpg"
                              className="w-full bg-secondary/20 border border-border/60 focus:border-primary rounded-xl py-2.5 px-4 text-xs outline-none transition-colors"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                            OG Description
                          </label>
                          <textarea
                            name="ogDescription"
                            rows={2}
                            value={seoForm.ogDescription}
                            onChange={handleSeoChange}
                            placeholder="Social share description card text"
                            className="w-full bg-secondary/20 border border-border/60 focus:border-primary rounded-xl py-2.5 px-4 text-xs outline-none transition-colors resize-y"
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={savingSeo}
                        className="bg-primary text-primary-foreground font-semibold py-2.5 px-6 rounded-xl hover:opacity-95 transition-opacity disabled:opacity-50 flex items-center gap-2 text-sm ml-auto"
                      >
                        {savingSeo ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Updating SEO...
                          </>
                        ) : (
                          <>
                            <Check size={16} />
                            Save SEO Settings
                          </>
                        )}
                      </button>
                    </div>
                  )}
                </form>
              )}
            </div>
          </div>
        )}
      </main>

      <Footer />

      {/* BLOG CREATE/EDIT MODAL */}
      {showBlogModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
          <div className="w-full max-w-2xl bg-background border border-border/60 rounded-2xl shadow-2xl p-6 overflow-y-auto max-h-[85vh] relative">
            <button
              onClick={() => setShowBlogModal(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
            >
              <X size={20} />
            </button>

            <h2 className="font-display text-xl font-bold mb-6">
              {editingBlogId ? "Edit Blog Post" : "Add New Blog Post"}
            </h2>

            <form onSubmit={saveBlog} className="space-y-5">
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Title</label>
                <input
                  type="text"
                  value={blogForm.title}
                  onChange={(e) => setBlogForm({ ...blogForm, title: e.target.value })}
                  placeholder="Enter blog title"
                  className="w-full bg-secondary/20 border border-border/80 focus:border-primary rounded-xl py-2.5 px-4 text-sm outline-none transition-colors"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Summary</label>
                <input
                  type="text"
                  value={blogForm.summary}
                  onChange={(e) => setBlogForm({ ...blogForm, summary: e.target.value })}
                  placeholder="Enter short search-friendly summary"
                  className="w-full bg-secondary/20 border border-border/80 focus:border-primary rounded-xl py-2.5 px-4 text-sm outline-none transition-colors"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Author</label>
                  <input
                    type="text"
                    value={blogForm.author}
                    onChange={(e) => setBlogForm({ ...blogForm, author: e.target.value })}
                    className="w-full bg-secondary/20 border border-border/80 focus:border-primary rounded-xl py-2.5 px-4 text-sm outline-none transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Cover Image</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleBlogImageUpload}
                    className="w-full text-xs text-muted-foreground file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-primary file:text-primary-foreground hover:file:opacity-90 file:cursor-pointer"
                  />
                </div>
              </div>

              {blogForm.coverImage && (
                <div className="relative rounded-xl overflow-hidden aspect-[21/9] border border-border/60 bg-secondary/30">
                  <img src={blogForm.coverImage} alt="Cover preview" className="w-full h-full object-cover" />
                  <button
                    type="button"
                    onClick={() => setBlogForm({ ...blogForm, coverImage: "" })}
                    className="absolute top-2 right-2 w-6 h-6 rounded-full bg-background/80 hover:bg-background flex items-center justify-center text-muted-foreground hover:text-destructive"
                  >
                    <X size={12} />
                  </button>
                </div>
              )}

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Content Body</label>
                <textarea
                  value={blogForm.content}
                  onChange={(e) => setBlogForm({ ...blogForm, content: e.target.value })}
                  placeholder="Write article details. Hit return/enter for paragraphs."
                  rows={8}
                  className="w-full bg-secondary/20 border border-border/80 focus:border-primary rounded-xl py-3 px-4 text-sm outline-none transition-colors resize-y font-sans leading-relaxed"
                  required
                />
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-border/40">
                <button
                  type="button"
                  onClick={() => setShowBlogModal(false)}
                  className="px-5 py-2.5 rounded-xl border border-border/60 hover:bg-secondary text-sm font-semibold transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={savingBlog}
                  className="bg-primary text-primary-foreground font-semibold py-2.5 px-6 rounded-xl hover:opacity-95 transition-opacity disabled:opacity-50 flex items-center gap-2 text-sm"
                >
                  {savingBlog ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    "Save Article"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
