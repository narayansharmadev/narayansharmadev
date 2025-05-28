import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink, Calendar, User, Code, BookOpen, FileText, Menu, X, ChevronRight, Star, GitFork, Download, Eye, ArrowLeft, Heart, Coffee, Zap, Target, Award, Users } from 'lucide-react';

// Animation variants
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const slideIn = {
  initial: { x: -20, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: 20, opacity: 0 }
};

const scaleIn = {
  initial: { scale: 0.9, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0.9, opacity: 0 }
};

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  // Mouse tracking and scroll effects
  // useEffect(() => {
  //   const handleMouseMove = (e) => {
  //     setMousePosition({ x: e.clientX, y: e.clientY });
  //   };
  //   const handleScroll = () => setScrollY(window.scrollY);
    
  //   window.addEventListener('mousemove', handleMouseMove);
  //   window.addEventListener('scroll', handleScroll);
    
  //   return () => {
  //     window.removeEventListener('mousemove', handleMouseMove);
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  // Portfolio data
  const portfolioData = {
    personal: {
      name: "Narayan Sharma",
      title: "Senior Frontend Developer",
      subtitle: "Crafting Digital Experiences with React.js & Angular",
      tagline: "Transforming Ideas into Interactive Realities",
      bio: "I'm a passionate frontend developer with 3+ years of experience creating stunning, user-centric web applications. I specialize in React.js, Angular, and modern JavaScript ecosystems, with a keen eye for design and performance optimization.",
      email: "narayan.dev@example.com",
      github: "https://github.com/narayansharma",
      linkedin: "https://linkedin.com/in/narayansharma",
      location: "Jaipur, Rajasthan, India",
      phone: "+91 98765 43210"
    },
    skills: {
      frontend: ["React.js", "Angular", "Vue.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Sass", "Tailwind CSS", "Bootstrap"],
      backend: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "REST APIs", "GraphQL"],
      tools: ["Git", "Webpack", "Vite", "Docker", "Jest", "Cypress", "Figma", "Adobe XD"],
      exploring: ["React Server Components", "Zustand", "Redux Toolkit", "Next.js 14", "Three.js", "WebGL", "AI/ML Integration"]
    },
    projects: [
      {
        id: 1,
        title: "E-Commerce Platform",
        description: "A full-featured e-commerce platform built with React.js and Node.js. Features include user authentication, payment integration, real-time inventory management, and an admin dashboard with analytics.",
        longDescription: "This comprehensive e-commerce solution handles everything from product catalog management to order processing. Built with modern technologies and best practices, it supports thousands of concurrent users with seamless performance.",
        tech: ["React.js", "Node.js", "MongoDB", "Stripe API", "Redux Toolkit", "Socket.io"],
        github: "https://github.com/narayansharma/ecommerce-platform",
        live: "https://ecommerce.narayansharma.dev",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
        category: "Full Stack",
        featured: true,
        stats: { users: "5K+", performance: "98%", uptime: "99.9%" }
      },
      {
        id: 2,
        title: "Project Management Dashboard",
        description: "An intuitive project management tool with drag-and-drop functionality, team collaboration features, real-time updates, and comprehensive reporting capabilities.",
        longDescription: "Designed for modern teams, this dashboard streamlines project workflows with kanban boards, gantt charts, time tracking, and team communication tools. Built with Angular and integrated with popular third-party services.",
        tech: ["Angular", "TypeScript", "Firebase", "Chart.js", "Angular Material", "PWA"],
        github: "https://github.com/narayansharma/project-dashboard",
        live: "https://dashboard.narayansharma.dev",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=500&fit=crop",
        category: "Frontend",
        featured: true,
        stats: { teams: "200+", projects: "1K+", satisfaction: "96%" }
      },
      {
        id: 3,
        title: "AI-Powered Weather App",
        description: "Next-generation weather application with AI-driven forecasts, interactive maps, climate change insights, and personalized weather recommendations.",
        longDescription: "This innovative weather app combines traditional meteorological data with machine learning algorithms to provide hyper-local forecasts and climate insights. Features include severe weather alerts, agricultural recommendations, and environmental impact tracking.",
        tech: ["React.js", "Python", "TensorFlow", "Mapbox", "Weather API", "PWA"],
        github: "https://github.com/narayansharma/ai-weather",
        live: "https://weather.narayansharma.dev",
        image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=500&fit=crop",
        category: "AI/ML",
        featured: false,
        stats: { accuracy: "94%", users: "12K+", cities: "500+" }
      },
      {
        id: 4,
        title: "Social Media Analytics",
        description: "Comprehensive social media analytics platform providing insights, engagement tracking, competitor analysis, and automated reporting for brands and influencers.",
        longDescription: "This powerful analytics tool helps businesses understand their social media performance across multiple platforms. Features include sentiment analysis, trend prediction, and automated content suggestions powered by AI.",
        tech: ["Vue.js", "D3.js", "Python", "Redis", "Elasticsearch", "Docker"],
        github: "https://github.com/narayansharma/social-analytics",
        live: "https://analytics.narayansharma.dev",
        image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=800&h=500&fit=crop",
        category: "Analytics",
        featured: false,
        stats: { brands: "150+", posts: "1M+", insights: "Real-time" }
      }
    ],
    blogs: [
      {
        id: 1,
        title: "Mastering React Server Components in 2024",
        excerpt: "Deep dive into React Server Components and how they're revolutionizing frontend development with better performance, SEO, and developer experience. Learn the fundamentals and advanced patterns.",
        content: "React Server Components represent a paradigm shift in how we think about React applications...",
        date: "2024-12-15",
        readTime: "12 min read",
        tags: ["React", "SSR", "Performance", "Next.js"],
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop",
        featured: true,
        views: 2847,
        likes: 156
      },
      {
        id: 2,
        title: "State Management Wars: Zustand vs Redux Toolkit vs Context",
        excerpt: "Comprehensive comparison of modern state management solutions. When to use each approach, performance implications, and real-world examples from production applications.",
        content: "State management has evolved significantly in the React ecosystem...",
        date: "2024-11-28",
        readTime: "15 min read",
        tags: ["React", "State Management", "Zustand", "Redux", "Performance"],
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
        featured: true,
        views: 3421,
        likes: 289
      },
      {
        id: 3,
        title: "Building Scalable Component Libraries: Lessons Learned",
        excerpt: "Best practices for creating reusable component libraries that scale across multiple projects and teams. From design tokens to automated testing and documentation.",
        content: "Component libraries are the backbone of consistent design systems...",
        date: "2024-11-10",
        readTime: "18 min read",
        tags: ["React", "Component Library", "Design System", "Architecture"],
        image: "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?w=600&h=400&fit=crop",
        featured: false,
        views: 1876,
        likes: 134
      },
      {
        id: 4,
        title: "The Future of Web Performance: Beyond Core Web Vitals",
        excerpt: "Exploring next-generation performance metrics and optimization techniques. Learn about new browser APIs, edge computing, and AI-driven performance optimization strategies.",
        content: "Web performance continues to evolve with new metrics and optimization strategies...",
        date: "2024-10-22",
        readTime: "14 min read",
        tags: ["Performance", "Web Vitals", "Optimization", "Browser APIs"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
        featured: false,
        views: 2103,
        likes: 187
      }
    ],
    whitepapers: [
      {
        id: 1,
        title: "Modern Frontend Architecture: Micro-Frontends and Beyond",
        abstract: "This comprehensive whitepaper explores the evolution of frontend architecture patterns, with deep analysis of micro-frontends, module federation, and emerging architectural paradigms that enable scalable, maintainable web applications.",
        description: "An in-depth exploration of contemporary frontend architecture patterns including micro-frontends, JAMstack, server-side rendering approaches, and the future of web application architecture.",
        downloadUrl: "#",
        pages: 32,
        publishDate: "2024-11-01",
        category: "Architecture",
        downloads: 1247,
        citations: 18
      },
      {
        id: 2,
        title: "Performance Optimization in React: A Complete Guide",
        abstract: "A definitive guide covering advanced performance optimization techniques for React applications, including bundle analysis, code splitting, rendering optimization, and emerging patterns for maximum efficiency.",
        description: "Comprehensive analysis of React performance optimization strategies, from basic techniques to advanced patterns. Includes case studies, benchmarks, and practical implementation guides.",
        downloadUrl: "#",
        pages: 28,
        publishDate: "2024-09-15",
        category: "Performance",
        downloads: 892,
        citations: 12
      },
      {
        id: 3,
        title: "The Evolution of Web Development: Trends and Predictions 2025",
        abstract: "Research-backed analysis of emerging trends in web development including WebAssembly, edge computing, AI integration, and next-generation developer tools that will shape the future of web development.",
        description: "Forward-looking research paper exploring emerging trends in web development including WebAssembly, edge computing, AI-driven development tools, and the future of web technologies.",
        downloadUrl: "#",
        pages: 24,
        publishDate: "2024-08-20",
        category: "Research",
        downloads: 634,
        citations: 8
      }
    ],
    stats: {
      github: {
        repos: 47,
        stars: 312,
        followers: 145,
        contributions: 1247
      },
      experience: "3+",
      projects: 28,
      clients: 15,
      coffees: 847
    }
  };

  const navigationItems = [
    { id: 'home', label: 'Home', icon: User },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'blogs', label: 'Blog', icon: BookOpen },
    { id: 'whitepapers', label: 'Research', icon: FileText }
  ];

  // Enhanced Logo Component
  const Logo = ({ size = 'default' }) => {
    const sizes = {
      small: 'w-8 h-8 text-lg',
      default: 'w-12 h-12 text-xl',
      large: 'w-20 h-20 text-3xl'
    };

    return (
      <div className={`${sizes[size]} relative group cursor-pointer`}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative bg-gray-900 rounded-xl border border-gray-700 flex items-center justify-center font-bold bg-gradient-to-br from-gray-800 to-gray-900 group-hover:scale-105 transition-transform duration-300">
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            NS
          </span>
        </div>
      </div>
    );
  };

  // Enhanced Navigation with animations
  const Navigation = () => (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-xl border-b border-gray-800/50"
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div 
            onClick={() => setCurrentPage('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <Logo />
            <div className="hidden sm:block">
              <div className="font-bold text-xl bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Narayan Sharma
              </div>
              <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                Frontend Developer
              </div>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 font-medium ${
                    currentPage === item.id 
                      ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 border border-blue-500/30' 
                      : 'hover:bg-gray-800/50 text-gray-300 hover:text-white border border-transparent'
                  }`}
                >
                  <Icon size={18} />
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-3 rounded-xl hover:bg-gray-800/50 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-800/50">
          <div className="container mx-auto px-6 py-6">
            <div className="space-y-2">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setCurrentPage(item.id);
                      setIsMenuOpen(false);
                    }}
                    className={`flex items-center gap-4 w-full px-4 py-4 rounded-xl transition-all duration-300 ${
                      currentPage === item.id 
                        ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 border border-blue-500/30' 
                        : 'hover:bg-gray-800/50 text-gray-300'
                    }`}
                  >
                    <Icon size={20} />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </motion.nav>
  );

  // Enhanced Home Page with animations
  const HomePage = () => (
    <motion.div 
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      className="min-h-screen relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-purple-900/20" />
      </div>
      
      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="text-center mb-20"
          >
            <motion.h1 
              variants={fadeIn}
              className="text-6xl md:text-8xl font-bold mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                {portfolioData.personal.name}
              </span>
            </motion.h1>
            
            <motion.p 
              variants={fadeIn}
              className="text-2xl md:text-3xl text-gray-300 mb-4 font-light"
            >
              {portfolioData.personal.title}
            </motion.p>
            
            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
              {portfolioData.personal.subtitle}
            </p>
            
            <div className="flex items-center justify-center gap-4 mb-12 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                Available for projects
              </span>
              <span>•</span>
              <span>{portfolioData.personal.location}</span>
            </div>
            
            {/* Enhanced CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-6 mb-16">
              <button 
                onClick={() => setCurrentPage('projects')}
                className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:scale-105 transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-blue-500/25"
              >
                <Code size={20} />
                Explore Projects
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a 
                href={`mailto:${portfolioData.personal.email}`}
                className="px-8 py-4 border-2 border-gray-600 rounded-full font-semibold hover:bg-gray-800 hover:border-gray-500 transition-all duration-300 flex items-center gap-3"
              >
                <Mail size={20} />
                Let's Connect
              </a>
            </div>
          </motion.div>

          {/* Enhanced Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {[
              { label: "Years Experience", value: portfolioData.stats.experience, icon: Target, color: "blue" },
              { label: "Projects Completed", value: portfolioData.stats.projects, icon: Award, color: "purple" },
              { label: "GitHub Stars", value: portfolioData.stats.github.stars, icon: Star, color: "pink" },
              { label: "Happy Clients", value: portfolioData.stats.clients, icon: Users, color: "green" }
            ].map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="group bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600 transition-all duration-300 hover:scale-105">
                  <Icon size={24} className={`text-${stat.color}-400 mb-3`} />
                  <div className={`text-3xl font-bold text-${stat.color}-400 mb-2`}>{stat.value}+</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* Enhanced Skills Showcase */}
          <div className="bg-gradient-to-r from-gray-800/30 to-gray-800/10 backdrop-blur-sm rounded-3xl p-12 border border-gray-700/30">
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Technical Expertise
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {Object.entries(portfolioData.skills).map(([category, skills]) => (
                <div key={category} className="group">
                  <h3 className={`text-xl font-semibold mb-6 ${
                    category === 'frontend' ? 'text-blue-400' :
                    category === 'backend' ? 'text-purple-400' :
                    category === 'tools' ? 'text-pink-400' : 'text-green-400'
                  }`}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </h3>
                  <div className="space-y-3">
                    {skills.map((skill) => (
                      <div key={skill} className={`px-4 py-2 rounded-xl border transition-all duration-300 hover:scale-105 ${
                        category === 'frontend' ? 'bg-blue-500/10 border-blue-500/30 text-blue-300 hover:bg-blue-500/20' :
                        category === 'backend' ? 'bg-purple-500/10 border-purple-500/30 text-purple-300 hover:bg-purple-500/20' :
                        category === 'tools' ? 'bg-pink-500/10 border-pink-500/30 text-pink-300 hover:bg-pink-500/20' :
                        'bg-green-500/10 border-green-500/30 text-green-300 hover:bg-green-500/20'
                      }`}>
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  // Enhanced Projects Page with animations
  const ProjectsPage = () => (
    <motion.div 
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      className="container mx-auto px-6 py-32"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of my recent work, from full-stack applications to innovative frontend solutions
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div 
          variants={staggerContainer}
          className="grid lg:grid-cols-2 gap-12 mb-20"
        >
          {portfolioData.projects.filter(p => p.featured).map((project, index) => (
            <motion.div
              key={project.id}
              variants={scaleIn}
              initial="initial"
              animate="animate"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group bg-gradient-to-br from-gray-800/50 to-gray-800/20 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-700/50 hover:border-gray-600/50"
            >
              <div className="aspect-video overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-500/20 backdrop-blur-sm text-blue-300 rounded-full text-sm border border-blue-500/30">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.longDescription}
                </p>
                
                {/* Project Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-700/30 rounded-xl">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-lg font-bold text-blue-400">{value}</div>
                      <div className="text-xs text-gray-500 capitalize">{key}</div>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-lg text-sm border border-gray-600/50">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a 
                    href={project.github}
                    className="flex items-center gap-2 px-6 py-3 bg-gray-700/50 hover:bg-gray-600/50 rounded-xl transition-colors border border-gray-600/50"
                  >
                    <Github size={18} /> Source
                  </a>
                  <a 
                    href={project.live}
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-xl transition-all duration-300 font-medium"
                  >
                    <ExternalLink size={18} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Other Projects */}
        <div className="grid md:grid-cols-2 gap-8">
          {portfolioData.projects.filter(p => !p.featured).map((project) => (
            <div key={project.id} className="group bg-gray-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:scale-105">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-sm">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 bg-gray-700/50 text-gray-400 rounded text-xs">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>
                <div className="flex gap-3">
                  <a 
                    href={project.github}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg transition-colors text-sm"
                  >
                    <Github size={16} /> Code
                  </a>
                  <a 
                    href={project.live}
                    className="flex items-center gap-2 px-4 py-2 bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 rounded-lg transition-colors text-sm"
                  >
                    <ExternalLink size={16} /> Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  // Enhanced Blog Page with animations
  const BlogPage = () => (
    <motion.div 
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      className="container mx-auto px-6 py-32"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Latest Articles
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Insights, tutorials, and thoughts on modern web development
          </p>
        </div>

        {/* Featured Posts */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12">
            {portfolioData.blogs.filter(b => b.featured).map((blog) => (
              <div key={blog.id} className="group bg-gradient-to-br from-gray-800/50 to-gray-800/20 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 hover:scale-[1.02]">
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={blog.image} 
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                    <span>{blog.date}</span>
                    <span>•</span>
                    <span>{blog.readTime}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {blog.excerpt}
                  </p>
                  
                  {/* Blog Stats */}
                  <div className="flex items-center gap-6 mb-6 p-4 bg-gray-700/30 rounded-xl">
                    <div className="flex items-center gap-2">
                      <Eye size={18} className="text-blue-400" />
                      <span className="text-gray-300">{blog.views.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Heart size={18} className="text-pink-400" />
                      <span className="text-gray-300">{blog.likes}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {blog.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-lg text-sm border border-gray-600/50">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-xl transition-all duration-300 font-medium">
                    Read Article
                    <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Blog Posts */}
        <div className="grid md:grid-cols-2 gap-8">
          {portfolioData.blogs.filter(b => !b.featured).map((blog) => (
            <div key={blog.id} className="group bg-gray-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:scale-[1.02]">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3 text-xs text-gray-500">
                  <span>{blog.date}</span>
                  <span>•</span>
                  <span>{blog.readTime}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
                  {blog.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {blog.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {blog.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 rounded-lg transition-colors text-sm">
                  Read More
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  // Enhanced Whitepapers Page with animations
  const WhitepapersPage = () => (
    <motion.div 
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      className="container mx-auto px-6 py-32"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Research & Whitepapers
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            In-depth technical papers and research on modern web technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.whitepapers.map((paper) => (
            <div key={paper.id} className="group bg-gray-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:scale-[1.02] p-6 flex flex-col">
              <div className="mb-4">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                  {paper.category}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                {paper.title}
              </h3>
              <p className="text-gray-400 mb-4 text-sm flex-grow">
                {paper.abstract}
              </p>
              <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                <span>{paper.pages} pages</span>
                <span>{paper.downloads.toLocaleString()} downloads</span>
              </div>
              <button className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 text-blue-300 rounded-lg transition-all duration-300 border border-blue-500/30 hover:border-blue-500/50">
                <Download size={16} />
                Download Whitepaper
              </button>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  // Enhanced Footer with animations
  const Footer = () => (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="bg-gray-900/80 backdrop-blur-xl border-t border-gray-800/50 py-12"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-4 mb-6 md:mb-0">
            <Logo size="small" />
            <div>
              <div className="font-bold text-lg">Narayan Sharma</div>
              <div className="text-sm text-gray-400">Senior Frontend Developer</div>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href={portfolioData.personal.github} 
              className="text-gray-400 hover:text-blue-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} />
            </a>
            <a 
              href={portfolioData.personal.linkedin} 
              className="text-gray-400 hover:text-blue-500 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href={`mailto:${portfolioData.personal.email}`} 
              className="text-gray-400 hover:text-red-400 transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800/50 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Narayan Sharma. All rights reserved.</p>
          <p className="mt-2">Built with React.js, Tailwind CSS, and <Heart size={14} className="inline text-pink-400" /></p>
        </div>
      </div>
    </motion.footer>
  );

  // Main App Render with page transitions
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-purple-900/10 text-gray-100">
      <Navigation />
      
      <AnimatePresence mode="wait">
        <motion.main
          key={currentPage}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageTransition}
        >
          {currentPage === 'home' && <HomePage />}
          {currentPage === 'projects' && <ProjectsPage />}
          {currentPage === 'blogs' && <BlogPage />}
          {currentPage === 'whitepapers' && <WhitepapersPage />}
        </motion.main>
      </AnimatePresence>
      
      <Footer />
      
      {/* Enhanced cursor effect with smoother animation */}
      <motion.div 
        className="fixed top-0 left-0 rounded-full bg-blue-400/20 pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          scale: 1 + scrollY * 0.002
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
          mass: 0.5
        }}
        style={{
          width: 16,
          height: 16,
          translateX: "-50%",
          translateY: "-50%"
        }}
      />
    </div>
  );
}