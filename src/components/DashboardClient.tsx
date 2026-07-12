"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GrainOverlay from "@/components/GrainOverlay";
import { motion } from "framer-motion";
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
  Check,
  Briefcase,
  MessageSquare,
  Cpu
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

interface ServiceItem {
  _id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

interface ProjectItem {
  _id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  coverImage?: string;
  projectUrl: string;
}

interface TestimonialItem {
  _id: string;
  name: string;
  role: string;
  company: string;
  feedback: string;
  rating: number;
}

export default function DashboardClient() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"about" | "blogs" | "pdfs" | "seo" | "services" | "projects" | "testimonials" | "contacts">("about");
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

  // Services state
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [showServiceModal, setShowServiceModal] = useState(false);
  const [editingServiceId, setEditingServiceId] = useState<string | null>(null);
  const [serviceForm, setServiceForm] = useState({
    title: "",
    description: "",
    icon: "Globe",
    features: ""
  });
  const [savingService, setSavingService] = useState(false);

  // Projects state
  const [projects, setProjects] = useState<ProjectItem[]>([]);
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [editingProjectId, setEditingProjectId] = useState<string | null>(null);
  const [projectForm, setProjectForm] = useState({
    title: "",
    description: "",
    category: "Web App",
    tags: "",
    coverImage: "",
    projectUrl: ""
  });
  const [savingProject, setSavingProject] = useState(false);

  // Testimonials state
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>([]);
  const [showTestimonialModal, setShowTestimonialModal] = useState(false);
  const [editingTestimonialId, setEditingTestimonialId] = useState<string | null>(null);
  const [testimonialForm, setTestimonialForm] = useState({
    name: "",
    role: "",
    company: "",
    feedback: "",
    rating: 5
  });
  const [savingTestimonial, setSavingTestimonial] = useState(false);

  // Contacts state
  const [contacts, setContacts] = useState<any[]>([]);

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
      const res = await fetch(`https://api.onnextweb.in/api/seo/${pageName}`);
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
      const aboutRes = await fetch("https://api.onnextweb.in/api/about");
      if (aboutRes.ok) {
        const aboutJson = await aboutRes.json();
        setAboutData(aboutJson);
      }

      // Fetch blogs
      const blogsRes = await fetch("https://api.onnextweb.in/api/blogs");
      if (blogsRes.ok) {
        const blogsJson = await blogsRes.json();
        setBlogs(blogsJson);
      }

      // Fetch PDFs
      const pdfsRes = await fetch("https://api.onnextweb.in/api/pdfs");
      if (pdfsRes.ok) {
        const pdfsJson = await pdfsRes.json();
        setPdfs(pdfsJson);
      }

      // Fetch Services
      const servicesRes = await fetch("https://api.onnextweb.in/api/services");
      if (servicesRes.ok) {
        setServices(await servicesRes.json());
      }

      // Fetch Projects
      const projectsRes = await fetch("https://api.onnextweb.in/api/projects");
      if (projectsRes.ok) {
        setProjects(await projectsRes.json());
      }

      // Fetch Testimonials
      const testimonialsRes = await fetch("https://api.onnextweb.in/api/testimonials");
      if (testimonialsRes.ok) {
        setTestimonials(await testimonialsRes.json());
      }

      // Fetch Contacts
      const contactsRes = await fetch("https://api.onnextweb.in/api/contact", {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      });
      if (contactsRes.ok) {
        setContacts(await contactsRes.json());
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
      const res = await fetch("https://api.onnextweb.in/api/about", {
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
      const res = await fetch(`https://api.onnextweb.in/api/seo/${selectedSeoPage}`, {
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
      ? `https://api.onnextweb.in/api/blogs/${editingBlogId}`
      : "https://api.onnextweb.in/api/blogs";
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
        const blogsRes = await fetch("https://api.onnextweb.in/api/blogs");
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
      const res = await fetch(`https://api.onnextweb.in/api/blogs/${id}`, {
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
      const res = await fetch("https://api.onnextweb.in/api/pdfs/upload", {
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
        const pdfsRes = await fetch("https://api.onnextweb.in/api/pdfs");
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
      const res = await fetch(`https://api.onnextweb.in/api/pdfs/${id}`, {
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

  // Services CRUD
  const openNewServiceModal = () => {
    setEditingServiceId(null);
    setServiceForm({
      title: "",
      description: "",
      icon: "Globe",
      features: ""
    });
    setShowServiceModal(true);
  };

  const openEditServiceModal = (service: ServiceItem) => {
    setEditingServiceId(service._id);
    setServiceForm({
      title: service.title,
      description: service.description,
      icon: service.icon || "Globe",
      features: service.features ? service.features.join(", ") : ""
    });
    setShowServiceModal(true);
  };

  const saveService = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!serviceForm.title || !serviceForm.description) {
      toast.error("Please fill in title and description");
      return;
    }
    setSavingService(true);
    const url = editingServiceId
      ? `https://api.onnextweb.in/api/services/${editingServiceId}`
      : "https://api.onnextweb.in/api/services";
    const method = editingServiceId ? "PUT" : "POST";

    const featuresArray = serviceForm.features
      ? serviceForm.features.split(",").map(f => f.trim()).filter(Boolean)
      : [];

    try {
      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          ...serviceForm,
          features: featuresArray
        })
      });
      if (res.ok) {
        toast.success(editingServiceId ? "Service updated successfully!" : "Service added successfully!");
        setShowServiceModal(false);
        const servicesRes = await fetch("https://api.onnextweb.in/api/services");
        if (servicesRes.ok) setServices(await servicesRes.json());
      } else {
        const errJson = await res.json();
        throw new Error(errJson.message || "Failed to save service");
      }
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setSavingService(false);
    }
  };

  const deleteService = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this service?")) return;
    try {
      const res = await fetch(`https://api.onnextweb.in/api/services/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (res.ok) {
        toast.success("Service removed successfully");
        setServices(services.filter(s => s._id !== id));
      } else {
        const errJson = await res.json();
        throw new Error(errJson.message || "Failed to delete service");
      }
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  // Projects CRUD
  const openNewProjectModal = () => {
    setEditingProjectId(null);
    setProjectForm({
      title: "",
      description: "",
      category: "Web App",
      tags: "",
      coverImage: "",
      projectUrl: ""
    });
    setShowProjectModal(true);
  };

  const openEditProjectModal = (project: ProjectItem) => {
    setEditingProjectId(project._id);
    setProjectForm({
      title: project.title,
      description: project.description,
      category: project.category || "Web App",
      tags: project.tags ? project.tags.join(", ") : "",
      coverImage: project.coverImage || "",
      projectUrl: project.projectUrl || ""
    });
    setShowProjectModal(true);
  };

  const handleProjectImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProjectForm({ ...projectForm, coverImage: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const saveProject = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!projectForm.title || !projectForm.description || !projectForm.category) {
      toast.error("Please fill in title, description and category");
      return;
    }
    setSavingProject(true);
    const url = editingProjectId
      ? `https://api.onnextweb.in/api/projects/${editingProjectId}`
      : "https://api.onnextweb.in/api/projects";
    const method = editingProjectId ? "PUT" : "POST";

    const tagsArray = projectForm.tags
      ? projectForm.tags.split(",").map(t => t.trim()).filter(Boolean)
      : [];

    try {
      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          ...projectForm,
          tags: tagsArray
        })
      });
      if (res.ok) {
        toast.success(editingProjectId ? "Project updated successfully!" : "Project added successfully!");
        setShowProjectModal(false);
        const projectsRes = await fetch("https://api.onnextweb.in/api/projects");
        if (projectsRes.ok) setProjects(await projectsRes.json());
      } else {
        const errJson = await res.json();
        throw new Error(errJson.message || "Failed to save project");
      }
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setSavingProject(false);
    }
  };

  const deleteProject = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this project?")) return;
    try {
      const res = await fetch(`https://api.onnextweb.in/api/projects/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (res.ok) {
        toast.success("Project removed successfully");
        setProjects(projects.filter(p => p._id !== id));
      } else {
        const errJson = await res.json();
        throw new Error(errJson.message || "Failed to delete project");
      }
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  // Testimonials CRUD
  const openNewTestimonialModal = () => {
    setEditingTestimonialId(null);
    setTestimonialForm({
      name: "",
      role: "",
      company: "",
      feedback: "",
      rating: 5
    });
    setShowTestimonialModal(true);
  };

  const openEditTestimonialModal = (t: TestimonialItem) => {
    setEditingTestimonialId(t._id);
    setTestimonialForm({
      name: t.name,
      role: t.role,
      company: t.company || "",
      feedback: t.feedback,
      rating: t.rating || 5
    });
    setShowTestimonialModal(true);
  };

  const saveTestimonial = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!testimonialForm.name || !testimonialForm.role || !testimonialForm.feedback) {
      toast.error("Please fill in name, role, and feedback");
      return;
    }
    setSavingTestimonial(true);
    const url = editingTestimonialId
      ? `https://api.onnextweb.in/api/testimonials/${editingTestimonialId}`
      : "https://api.onnextweb.in/api/testimonials";
    const method = editingTestimonialId ? "PUT" : "POST";

    try {
      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(testimonialForm)
      });
      if (res.ok) {
        toast.success(editingTestimonialId ? "Testimonial updated successfully!" : "Testimonial added successfully!");
        setShowTestimonialModal(false);
        const testimonialsRes = await fetch("https://api.onnextweb.in/api/testimonials");
        if (testimonialsRes.ok) setTestimonials(await testimonialsRes.json());
      } else {
        const errJson = await res.json();
        throw new Error(errJson.message || "Failed to save testimonial");
      }
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setSavingTestimonial(false);
    }
  };

  const deleteTestimonial = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this testimonial?")) return;
    try {
      const res = await fetch(`https://api.onnextweb.in/api/testimonials/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (res.ok) {
        toast.success("Testimonial removed successfully");
        setTestimonials(testimonials.filter(t => t._id !== id));
      } else {
        const errJson = await res.json();
        throw new Error(errJson.message || "Failed to delete testimonial");
      }
    } catch (err: any) {
      toast.error(err.message);
    }
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
            <aside className="space-y-2 lg:border-r lg:border-border/60 lg:pr-8 relative z-10">
              {[
                { id: "about", label: "About Us Content", icon: Settings },
                { id: "blogs", label: "Manage Blogs", icon: BookOpen },
                { id: "pdfs", label: "Upload & PDF Files", icon: FileText },
                { id: "seo", label: "SEO Page Settings", icon: Globe },
                { id: "contacts", label: "Contact Messages", icon: MessageSquare },
              ].map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-colors duration-300 relative ${
                      isActive ? "text-primary-foreground font-bold" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeTabPill"
                        className="absolute inset-0 bg-primary rounded-xl -z-10 shadow-[0_4px_20px_rgba(var(--primary),0.25)]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <Icon size={18} />
                    {tab.label}
                  </button>
                );
              })}
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
                    <div className="space-y-3">
                      {blogs.map((blog) => (
                        <div
                          key={blog._id}
                          className="flex items-center justify-between gap-4 p-4 bg-secondary/10 hover:bg-secondary/15 rounded-xl border border-border/30 hover:border-primary/20 transition-all duration-300 group"
                        >
                          <div className="flex items-center gap-4 overflow-hidden">
                            {blog.coverImage ? (
                              <img
                                src={blog.coverImage}
                                alt={blog.title}
                                className="w-12 h-12 rounded-lg object-cover flex-shrink-0 group-hover:scale-105 transition-transform duration-300"
                              />
                            ) : (
                              <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center text-[10px] font-semibold flex-shrink-0 text-muted-foreground border border-border/50">
                                No Image
                              </div>
                            )}
                            <div className="overflow-hidden">
                              <h3 className="font-semibold text-sm truncate text-foreground group-hover:text-primary transition-colors duration-300">{blog.title}</h3>
                              <p className="text-xs text-muted-foreground truncate mt-0.5">{blog.summary}</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 flex-shrink-0">
                            <button
                              onClick={() => openEditBlogModal(blog)}
                              className="w-8 h-8 rounded-lg bg-secondary border border-border/40 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 cursor-pointer"
                              title="Edit post"
                            >
                              <Edit2 size={13} />
                            </button>
                            <button
                              onClick={() => deleteBlog(blog._id)}
                              className="w-8 h-8 rounded-lg bg-secondary border border-border/40 flex items-center justify-center text-muted-foreground hover:bg-destructive hover:text-white hover:border-destructive transition-all duration-300 cursor-pointer"
                              title="Delete post"
                            >
                              <Trash2 size={13} />
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
                  <form onSubmit={handlePdfUpload} className="space-y-6">
                    <div className="border border-dashed border-primary/45 hover:border-primary bg-primary/5 hover:bg-primary/10 transition-all duration-300 rounded-2xl p-10 text-center flex flex-col items-center justify-center relative cursor-pointer group shadow-inner">
                      <input
                        type="file"
                        id="pdf-file-input"
                        multiple
                        accept="application/pdf"
                        onChange={(e) => setSelectedFiles(e.target.files)}
                        className="absolute inset-0 opacity-0 cursor-pointer z-20"
                      />
                      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                        <Upload className="w-6 h-6 animate-pulse" />
                      </div>
                      <h4 className="font-display font-bold text-base mb-1 text-foreground">Select multiple PDF documents</h4>
                      <p className="text-xs text-muted-foreground max-w-xs mx-auto leading-relaxed">
                        Drag & drop or click anywhere in this area to browse files.<br />
                        <span className="text-primary/70 font-medium">MongoDB direct Binary storage (Max 15MB per file)</span>
                      </p>
                    </div>

                    {selectedFiles && selectedFiles.length > 0 && (
                      <div className="bg-secondary/15 p-5 rounded-2xl border border-border/40">
                        <h4 className="font-bold text-xs uppercase text-muted-foreground mb-3 tracking-wider">
                          Selected Files ({selectedFiles.length})
                        </h4>
                        <div className="space-y-2.5">
                          {Array.from(selectedFiles).map((file, i) => (
                            <div key={i} className="flex items-center justify-between text-xs text-foreground bg-secondary/10 py-2 px-3 rounded-lg border border-border/20">
                              <span className="truncate max-w-sm flex items-center gap-2">
                                <FileCheck size={14} className="text-primary flex-shrink-0" />
                                {file.name}
                              </span>
                              <span className="text-muted-foreground flex-shrink-0 font-medium">{formatBytes(file.size)}</span>
                            </div>
                          ))}
                        </div>
                        <button
                          type="submit"
                          disabled={uploadingPdfs}
                          className="w-full bg-primary text-primary-foreground font-semibold py-2.5 px-4 rounded-xl text-xs hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2 mt-5 shadow-lg shadow-primary/20 cursor-pointer"
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
                  <div className="space-y-4 pt-6 border-t border-border/40">
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
                            className="flex items-center justify-between gap-4 p-4 bg-secondary/10 hover:bg-secondary/15 rounded-xl border border-border/30 hover:border-primary/20 transition-all duration-300 text-xs group"
                          >
                            <div className="flex items-center gap-3 overflow-hidden">
                              <div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center text-primary group-hover:scale-105 group-hover:bg-primary/10 transition-all duration-300">
                                <FileText size={16} />
                              </div>
                              <div className="overflow-hidden">
                                <h4 className="font-semibold text-sm truncate text-foreground group-hover:text-primary transition-colors duration-300" title={pdf.filename}>
                                  {pdf.filename}
                                </h4>
                                <div className="text-muted-foreground flex gap-3 mt-1">
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
                                href={`https://api.onnextweb.in/api/pdfs/${pdf._id}`}
                                target="_blank"
                                rel="noreferrer"
                                className="py-1.5 px-3 rounded-lg bg-secondary border border-border/40 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all font-semibold cursor-pointer"
                              >
                                View
                              </a>
                              <button
                                onClick={() => deletePdf(pdf._id)}
                                className="w-8 h-8 rounded-lg bg-secondary border border-border/40 flex items-center justify-center text-muted-foreground hover:bg-destructive hover:text-white hover:border-destructive transition-all duration-300 cursor-pointer"
                                title="Delete document"
                              >
                                <Trash2 size={13} />
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

              {/* TAB 5: CONTACT MESSAGES */}
              {activeTab === "contacts" && (
                <div className="space-y-6">
                  <div className="border-b border-border/40 pb-3 mb-4">
                    <h2 className="text-xl font-bold font-display">Contact Messages & Leads</h2>
                    <p className="text-xs text-muted-foreground mt-1">
                      View and manage lead submissions from the website contact page.
                    </p>
                  </div>

                  {contacts.length === 0 ? (
                    <div className="text-center py-12 bg-secondary/10 rounded-xl border border-dashed border-border/60">
                      <p className="text-muted-foreground text-sm">No contact messages received yet.</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {contacts.map((contact) => (
                        <div
                          key={contact._id}
                          className="p-5 bg-secondary/10 hover:bg-secondary/15 rounded-xl border border-border/30 transition-all duration-300 relative group"
                        >
                          <div className="flex justify-between items-start gap-4">
                            <div>
                              <h3 className="font-semibold text-base text-foreground">{contact.name}</h3>
                              <a
                                href={`mailto:${contact.email}`}
                                className="text-xs text-primary hover:underline font-medium block mt-1"
                              >
                                {contact.email}
                              </a>
                              <span className="text-[10px] text-muted-foreground block mt-1.5">
                                Submitted on: {new Date(contact.createdAt).toLocaleString("en-US", {
                                  month: "short",
                                  day: "numeric",
                                  year: "numeric",
                                  hour: "2-digit",
                                  minute: "2-digit"
                                })}
                              </span>
                            </div>
                            <button
                              onClick={async () => {
                                if (!window.confirm("Are you sure you want to delete this message?")) return;
                                try {
                                  const res = await fetch(`https://api.onnextweb.in/api/contact/${contact._id}`, {
                                    method: "DELETE",
                                    headers: {
                                      Authorization: `Bearer ${token}`
                                    }
                                  });
                                  if (res.ok) {
                                    toast.success("Message deleted successfully");
                                    setContacts(contacts.filter((c) => c._id !== contact._id));
                                  } else {
                                    const errJson = await res.json();
                                    throw new Error(errJson.message || "Failed to delete message");
                                  }
                                } catch (err: any) {
                                  toast.error(err.message);
                                }
                              }}
                              className="w-8 h-8 rounded-lg bg-secondary border border-border/40 flex items-center justify-center text-muted-foreground hover:bg-destructive hover:text-white hover:border-destructive transition-all duration-300 cursor-pointer"
                              title="Delete message"
                            >
                              <Trash2 size={13} />
                            </button>
                          </div>
                          <div className="mt-4 bg-background/50 border border-border/40 p-4 rounded-lg text-sm text-foreground leading-relaxed whitespace-pre-wrap">
                            {contact.message}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
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
