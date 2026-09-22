import { useState, useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useAnimation,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiFigma,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiJsonwebtokens,
  SiFirebase,
  SiStripe,
  SiFramer,
  SiGreensock,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaCss3Alt } from "react-icons/fa";
import { TbApi } from "react-icons/tb";

gsap.registerPlugin(ScrollTrigger);

const TECH_ICONS = {
  react: <SiReact size={38} />,
  nodejs: <SiNodedotjs size={38} />,
  mongodb: <SiMongodb size={38} />,
  firebase: <SiFirebase size={38} />,
  stripe: <SiStripe size={38} />,
  tailwind: <SiTailwindcss size={38} />,
  nextjs: <SiNextdotjs size={38} />,
  framer: <SiFramer size={38} />,
  gsap: <SiGreensock size={38} />,
  css3: <FaCss3Alt size={38} />,
};

// ============================================================
// CONFIG
// ============================================================
const CONFIG = {
  name: "Abu Sayem Sifat",
  designation: "Frontend Developer",
  tagline:
    "Building production-ready web applications with clean code and user-centric solutions.",
  email: "sifatabusayem@gmail.com",
  phone: "+8801773037805",
  whatsapp: "+8801773037805",
  profileImage: "https://i.ibb.co.com/7xn4jxHT/My-pp.jpg",
  resumeLink:
    "https://drive.google.com/file/d/1CcNtpX3f0AZj1Lp-naGVFWr_aD9fd_-w/view?usp=sharing",
  social: {
    github: "https://github.com/abusayemsifat",
    linkedin: "https://www.linkedin.com/in/abusayemsifat/",
    twitter: "https://x.com/abusayem_sifat",
    facebook: "https://www.facebook.com/abusayemsifat103/",
  },
  about: {
    journey:
      "My web development journey began with the Programming Hero course. Balancing academic studies with the course while maintaining consistency was challenging, but my passion for coding kept me going. Every line of code felt like progress toward a better future.",
    work: "I specialize in the MERN stack and have built multiple real-world projects including PawMart (pet marketplace), BloodLink (blood donation platform), and Voltgear (eCommerce with Next.js). I focus on clean code, secure authentication (JWT, Firebase), and responsive user interfaces.",
    hobbies:
      "When I'm not coding, I love exploring new technologies, learning about tech products, and gazing at the universe—it reminds me how big the world of possibilities really is.",
    goal: "To grow as a skilled software engineer, build impactful digital products, and use technology to make a positive impact on society.",
  },
  skills: {
    Frontend: [
      { name: "React", icon: <SiReact />, color: "#61DAFB" },
      { name: "Next.js", icon: <SiNextdotjs />, color: "#FFFFFF" },
      { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
      { name: "HTML5", icon: <SiHtml5 />, color: "#E34F26" },
      { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
    ],
    Backend: [
      { name: "Node.js", icon: <SiNodedotjs />, color: "#5FA04E" },
      { name: "Express.js", icon: <SiExpress />, color: "#FFFFFF" },
      { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
      { name: "RESTful APIs", icon: <TbApi />, color: "#93D3F5" },
      { name: "JWT", icon: <SiJsonwebtokens />, color: "#FFFFFF" },
      { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
    ],
    Tools: [
      { name: "Git", icon: <SiGit />, color: "#F05032" },
      { name: "GitHub", icon: <SiGithub />, color: "#FFFFFF" },
      { name: "VS Code", icon: <VscVscode />, color: "#007ACC" },
      { name: "Figma", icon: <SiFigma />, color: "#F24E1E" },
    ],
  },
  education: [
    {
      degree: "B.Sc. in Computer Science and Engineering",
      institution: "East West University",
      year: "2025 – Present",
      details:
        "Studying core CS concepts, algorithms, and modern web technologies.",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Sherwood International Private School and College",
      year: "2024",
      details: "Science group. GPA 5.00",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Sherwood International Private School and College",
      year: "2022",
      details: "Science group. GPA 5.00",
    },
  ],
  projects: [
    {
      name: "BloodLink",
      image: null,
      tech: ["react", "nodejs", "mongodb", "firebase", "stripe"],
      techLabels: ["React", "Node.js", "MongoDB", "Firebase", "Stripe"],
      description:
        "A full-stack blood donation platform connecting donors with patients across all 64 districts of Bangladesh. Features real-time donor search with filters, role-based dashboards, Stripe payment integration, and live analytics charts.",
      liveLink: "https://bloodlink-abusayemsifat.pages.dev/",
      githubLink: "https://github.com/abusayemsifat/Assignment-11-frontend",
      challenges:
        "Verifying Firebase ID tokens on protected Express routes using Firebase Admin SDK, building a dynamic MongoDB query builder for three simultaneous filters (blood group, district, upazila), and managing Stripe payment confirmation safely without exposing secret keys.",
      improvements:
        "Add SMS notifications for urgent requests, implement a mobile app version, and add a blood donation camp locator with Google Maps integration.",
    },
    {
      name: "PawMart",
      image: null,
      tech: ["react", "nodejs", "mongodb", "firebase", "tailwind"],
      techLabels: ["React", "Node.js", "MongoDB", "Firebase", "Tailwind CSS"],
      description:
        "A full-stack pet marketplace where users can adopt pets, buy pet products, and connect with veterinary care services — all in one platform. Features role-based dashboards, real-time analytics, and complete order management.",
      liveLink: "https://pawmart-abusayemsifat.pages.dev/",
      githubLink: "https://github.com/abusayemsifat/Assignment-10-Frontend",
      challenges:
        "Implementing dual authentication with Firebase and JWT sync, building role-based access control for both frontend and backend, and debugging CORS issues between Cloudflare Pages and Vercel deployment.",
      improvements:
        "Add real-time chat between buyers and sellers, implement email notifications for order updates, and integrate a recommendation system based on user behavior.",
    },
    {
      name: "Voltgear",
      image: null,
      tech: ["nextjs", "mongodb", "tailwind", "framer", "gsap"],
      techLabels: [
        "Next.js",
        "MongoDB",
        "Tailwind CSS",
        "NextAuth.js",
        "Framer Motion",
      ],
      description:
        "A modern gadget store web app with Google authentication, product browsing, and admin product management. Built with Next.js 14 App Router, users can browse tech gadgets, search by name or category, and admins can add or delete products.",
      liveLink: "https://voltgearstore.vercel.app/",
      githubLink: "https://github.com/abusayemsifat/voltgearstore",
      challenges:
        "Resolving Lenis smooth scroll conflicts with CSS scroll-behavior, fixing MongoDB 500 errors from missing database name in connection string, and troubleshooting Vercel deployment cache issues showing default Next.js page.",
      improvements:
        "Add shopping cart functionality, implement a checkout system, add product reviews and ratings, and optimize for SEO with dynamic metadata.",
    },
  ],
  emailjs: {
    serviceId: "service_fn15v2y",
    templateId: "template_v1auto1",
    publicKey: "L4rUnN_30KPPEqo-2",
  },
};

const NAV = ["Home", "About", "Skills", "Education", "Projects", "Contact"];
const FONT = "'Inter', sans-serif";

// ============================================================
// FAVICON — profile photo as circular icon
// ============================================================
function Favicon() {
  useEffect(() => {
    document.title = `${CONFIG.name} — Portfolio`;
    document.querySelectorAll("link[rel*='icon']").forEach((el) => el.remove());

    const setFav = (href, type = "image/png") => {
      document.head.appendChild(
        Object.assign(document.createElement("link"), {
          rel: "icon",
          type,
          href,
        }),
      );
    };

    if (CONFIG.profileImage) {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => {
        const c = document.createElement("canvas");
        c.width = c.height = 64;
        const ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.arc(32, 32, 32, 0, Math.PI * 2);
        ctx.fillStyle = "#020b1c";
        ctx.fill();
        ctx.save();
        ctx.beginPath();
        ctx.arc(32, 32, 28, 0, Math.PI * 2);
        ctx.clip();
        ctx.drawImage(img, 0, 0, 64, 64);
        ctx.restore();
        ctx.beginPath();
        ctx.arc(32, 32, 30, 0, Math.PI * 2);
        ctx.strokeStyle = "#3396D3";
        ctx.lineWidth = 3;
        ctx.stroke();
        setFav(c.toDataURL("image/png"));
      };
      img.onerror = () => {
        const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><circle cx="32" cy="32" r="30" fill="#020b1c" stroke="#3396D3" stroke-width="3"/><text x="32" y="41" text-anchor="middle" font-size="28" font-family="sans-serif" fill="#3396D3">S</text></svg>`;
        setFav(
          URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" })),
          "image/svg+xml",
        );
      };
      img.src = CONFIG.profileImage;
    }
  }, []);
  return null;
}

// ============================================================
// FRAMER MOTION VARIANTS
// ============================================================
const fadeUp = {
  hidden: { opacity: 0, y: 44 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: [0.25, 0.1, 0.25, 1] },
  },
};
const fadeUpStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const fadeLeft = {
  hidden: { opacity: 0, x: -38 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] },
  },
};
const scaleIn = {
  hidden: { opacity: 0, scale: 0.82 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] },
  },
};

// ============================================================
// ANIMATED SECTION WRAPPER
// ============================================================
function AnimSection({
  children,
  variants = fadeUpStagger,
  className = "",
  style = {},
}) {
  const ref = useRef(null),
    inView = useInView(ref, { once: true, margin: "-80px" }),
    controls = useAnimation();
  useEffect(() => {
    if (inView) controls.start("show");
  }, [inView, controls]);
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

// ============================================================
// COSMIC CANVAS
// ============================================================
function CosmicCanvas() {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current,
      ctx = canvas.getContext("2d");
    let raf,
      t = 0;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const stars = Array.from({ length: 220 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.35 + 0.15,
      base: Math.random() * 0.7 + 0.2,
      ph: Math.random() * Math.PI * 2,
      sp: Math.random() * 0.0012 + 0.0003,
      warm: Math.random() < 0.15,
    }));
    const dust = Array.from({ length: 80 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1 + 0.2,
      a: Math.random() * 0.3 + 0.04,
      ph: Math.random() * Math.PI * 2,
      sp: Math.random() * 0.0007 + 0.0002,
    }));
    const blooms = [
      { bx: 0.82, by: 0.12, br: 400, c: "20,95,180" },
      { bx: 0.1, by: 0.75, br: 350, c: "51,150,211" },
      { bx: 0.5, by: 0.48, br: 310, c: "30,120,190" },
      { bx: 0.65, by: 0.85, br: 260, c: "91,179,224" },
      { bx: 0.05, by: 0.18, br: 230, c: "10,65,130" },
    ];
    const shooters = [];
    let shooterTimer = 0;
    const spawnShooter = (W, H) => {
      const e = Math.random(),
        sx = e < 0.7 ? Math.random() * W : -10,
        sy = e < 0.7 ? -10 : Math.random() * H * 0.5;
      const ang = Math.PI / 4 + (Math.random() - 0.5) * 0.4,
        spd = Math.random() * 6 + 4;
      return {
        sx,
        sy,
        dx: Math.cos(ang) * spd,
        dy: Math.sin(ang) * spd,
        length: Math.random() * 150 + 80,
        alpha: Math.random() * 0.5 + 0.3,
        duration: Math.random() * 70 + 55,
        frame: 0,
      };
    };
    const draw = () => {
      t += 0.004;
      const W = canvas.width,
        H = canvas.height;
      ctx.clearRect(0, 0, W, H);
      const bg = ctx.createLinearGradient(0, 0, W, H);
      bg.addColorStop(0, "#020b1c");
      bg.addColorStop(0.5, "#030f22");
      bg.addColorStop(1, "#010810");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, W, H);
      blooms.forEach((b, i) => {
        const a = 0.045 + 0.018 * Math.sin(t * 0.7 + i * 1.3);
        const g = ctx.createRadialGradient(
          b.bx * W,
          b.by * H,
          0,
          b.bx * W,
          b.by * H,
          b.br,
        );
        g.addColorStop(0, `rgba(${b.c},${a})`);
        g.addColorStop(0.5, `rgba(${b.c},${a * 0.35})`);
        g.addColorStop(1, "transparent");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, W, H);
      });
      const sh = ctx.createLinearGradient(0, H * 0.2, W, H * 0.8);
      sh.addColorStop(0, "transparent");
      sh.addColorStop(
        0.5,
        `rgba(51,150,211,${0.013 + 0.006 * Math.sin(t * 0.5)})`,
      );
      sh.addColorStop(1, "transparent");
      ctx.fillStyle = sh;
      ctx.fillRect(0, 0, W, H);
      stars.forEach((s) => {
        const tw = s.base * (0.4 + 0.6 * Math.sin(t * 120 * s.sp + s.ph)),
          sz = s.r * (0.8 + 0.2 * Math.sin(t * 80 * s.sp + s.ph + 1));
        ctx.beginPath();
        ctx.arc(s.x * W, s.y * H, Math.max(0.1, sz), 0, Math.PI * 2);
        ctx.fillStyle = s.warm
          ? `rgba(255,248,220,${Math.max(0, Math.min(0.9, tw))})`
          : `rgba(180,220,255,${Math.max(0, Math.min(0.85, tw))})`;
        ctx.fill();
      });
      dust.forEach((p) => {
        const a = p.a * (0.5 + 0.5 * Math.sin(t * 60 * p.sp + p.ph));
        ctx.beginPath();
        ctx.arc(p.x * W, p.y * H, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(140,205,255,${Math.max(0, Math.min(0.45, a))})`;
        ctx.fill();
      });
      shooterTimer++;
      if (shooterTimer >= 190 && shooters.length < 3) {
        shooterTimer = 0;
        shooters.push(spawnShooter(W, H));
      }
      for (let i = shooters.length - 1; i >= 0; i--) {
        const s = shooters[i];
        s.frame++;
        const prog = s.frame / s.duration,
          al = s.alpha * Math.sin(Math.PI * prog);
        const ang = Math.atan2(s.dy, s.dx),
          hx = s.sx + s.dx * s.frame,
          hy = s.sy + s.dy * s.frame;
        const tx = hx - Math.cos(ang) * s.length,
          ty = hy - Math.sin(ang) * s.length;
        const gr = ctx.createLinearGradient(tx, ty, hx, hy);
        gr.addColorStop(0, "rgba(255,255,255,0)");
        gr.addColorStop(0.55, `rgba(180,225,255,${al * 0.35})`);
        gr.addColorStop(1, `rgba(255,255,255,${al})`);
        ctx.beginPath();
        ctx.moveTo(tx, ty);
        ctx.lineTo(hx, hy);
        ctx.strokeStyle = gr;
        ctx.lineWidth = 1.5;
        ctx.lineCap = "round";
        ctx.stroke();
        const gg = ctx.createRadialGradient(hx, hy, 0, hx, hy, 5);
        gg.addColorStop(0, `rgba(255,255,255,${al})`);
        gg.addColorStop(1, "transparent");
        ctx.beginPath();
        ctx.arc(hx, hy, 5, 0, Math.PI * 2);
        ctx.fillStyle = gg;
        ctx.fill();
        if (s.frame >= s.duration) shooters.splice(i, 1);
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);
  return (
    <canvas
      ref={ref}
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}

// ============================================================
// GLASS CARD
// ============================================================
function Glass({
  children,
  style = {},
  className = "",
  onClick,
  onMouseEnter,
  onMouseLeave,
}) {
  return (
    <div
      className={className}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        background: "rgba(3,14,46,0.6)",
        backdropFilter: "blur(22px)",
        WebkitBackdropFilter: "blur(22px)",
        border: "1px solid rgba(51,150,211,0.15)",
        borderRadius: 18,
        boxShadow:
          "0 8px 40px rgba(0,20,90,0.32), inset 0 1px 0 rgba(255,255,255,0.04)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

// ============================================================
// SECTION HEADING
// ============================================================
function Heading({ title, sub }) {
  return (
    <AnimSection style={{ textAlign: "center", marginBottom: "2.8rem" }}>
      <motion.p
        variants={fadeUp}
        style={{
          color: "#7CC8EC",
          fontFamily: FONT,
          fontSize: "0.8rem",
          fontWeight: 700,
          letterSpacing: "0.28em",
          textTransform: "uppercase",
          marginBottom: "0.65rem",
        }}
      >
        {sub}
      </motion.p>
      <motion.h2
        variants={fadeUp}
        style={{
          fontFamily: FONT,
          fontWeight: 800,
          fontSize: "clamp(2.4rem,5vw,3.4rem)",
          background:
            "linear-gradient(130deg,#ffffff 10%,#93D3F5 45%,#3396D3 85%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          lineHeight: 1.1,
          letterSpacing: "-0.02em",
        }}
      >
        {title}
      </motion.h2>
    </AnimSection>
  );
}

// ============================================================
// SKILL CHIP
// ============================================================
function SkillChip({ name, icon, color }) {
  const [hov, setHov] = useState(false);
  return (
    <motion.div
      variants={scaleIn}
      onHoverStart={() => setHov(true)}
      onHoverEnd={() => setHov(false)}
      whileHover={{ y: -4, boxShadow: "0 10px 28px rgba(51,150,211,0.2)" }}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.55rem",
        padding: "1.1rem 1rem",
        borderRadius: 14,
        background: hov ? "rgba(51,150,211,0.12)" : "rgba(3,12,38,0.52)",
        border: `1px solid ${hov ? "rgba(51,150,211,0.42)" : "rgba(51,150,211,0.13)"}`,
        cursor: "default",
        transition: "background .2s,border-color .2s",
        minWidth: 92,
      }}
    >
      <div
        style={{
          width: 42,
          height: 42,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "38px",
          color: color || "#93D3F5",
          filter: hov ? `drop-shadow(0 0 10px ${color}66)` : "none",
          transition: "filter .2s",
        }}
      >
        {icon || <span style={{ fontSize: "1.9rem" }}>?</span>}
      </div>
      <span
        style={{
          color: hov ? "#93D3F5" : "#7CC8EC",
          fontFamily: FONT,
          fontSize: "0.82rem",
          fontWeight: 600,
          textAlign: "center",
        }}
      >
        {name}
      </span>
    </motion.div>
  );
}

// ============================================================
// PROJECT MODAL
// ============================================================
function Modal({ proj, onClose }) {
  // Close on Escape key
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 999,
          background: "rgba(1,5,20,0.88)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1.5rem",
        }}
      >
        <motion.div
          key="card"
          initial={{ opacity: 0, scale: 0.88, y: 32 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.35, ease: [0.34, 1.2, 0.64, 1] }}
          onClick={(e) => e.stopPropagation()}
        >
          <Glass
            style={{
              maxWidth: 560,
              width: "100%",
              padding: "1.6rem",
              position: "relative",
              maxHeight: "82vh",
              overflowY: "auto",
            }}
          >
            {/* Close */}
            <button
              onClick={onClose}
              style={{
                position: "absolute",
                top: 12,
                right: 14,
                background: "none",
                border: "none",
                color: "#7CC8EC",
                fontSize: "1.1rem",
                cursor: "pointer",
                lineHeight: 1,
                padding: "4px 8px",
                borderRadius: 6,
              }}
            >
              ✕
            </button>

            <p
              style={{
                color: "#7CC8EC",
                fontFamily: FONT,
                fontSize: "0.68rem",
                fontWeight: 700,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                marginBottom: 4,
              }}
            >
              Project
            </p>
            <h2
              style={{
                fontFamily: FONT,
                fontWeight: 800,
                color: "#ffffff",
                fontSize: "1.4rem",
                marginBottom: "0.75rem",
              }}
            >
              {proj.name}
            </h2>

            {/* Tech pills */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 5,
                marginBottom: "1rem",
              }}
            >
              {proj.techLabels.map((label, ti) => (
                <span
                  key={label}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 5,
                    background: "rgba(51,150,211,0.12)",
                    border: "1px solid rgba(51,150,211,0.28)",
                    color: "#93D3F5",
                    borderRadius: 99,
                    padding: "3px 11px",
                    fontFamily: FONT,
                    fontSize: "0.76rem",
                    fontWeight: 500,
                  }}
                >
                  {proj.tech[ti] && TECH_ICONS[proj.tech[ti]] ? (
                    <span
                      style={{
                        width: 14,
                        height: 14,
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <span
                        style={{
                          transform: "scale(0.37)",
                          transformOrigin: "center",
                          display: "block",
                          width: 38,
                          height: 38,
                          marginLeft: -12,
                          marginRight: -12,
                          marginTop: -12,
                          marginBottom: -12,
                        }}
                      >
                        {TECH_ICONS[proj.tech[ti]]}
                      </span>
                    </span>
                  ) : null}
                  {label}
                </span>
              ))}
            </div>

            {/* Banner */}
            <div
              style={{
                width: "100%",
                height: 120,
                borderRadius: 10,
                marginBottom: "1.1rem",
                background: "linear-gradient(135deg,#0b1c4d,#0d3c72)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
              }}
            >
              {proj.image ? (
                <img
                  src={proj.image}
                  alt={proj.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              ) : (
                <span style={{ fontSize: "2.4rem", opacity: 0.22 }}>🚀</span>
              )}
            </div>

            {/* Detail sections */}
            {[
              { label: "Description", text: proj.description },
              { label: "Challenges Faced", text: proj.challenges },
              { label: "Future Plans", text: proj.improvements },
            ].map((s) => (
              <div key={s.label} style={{ marginBottom: "0.85rem" }}>
                <p
                  style={{
                    color: "#7CC8EC",
                    fontFamily: FONT,
                    fontSize: "0.68rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.14em",
                    marginBottom: 4,
                  }}
                >
                  {s.label}
                </p>
                <p
                  style={{
                    color: "#b8d8f0",
                    fontFamily: FONT,
                    fontSize: "0.9rem",
                    lineHeight: 1.75,
                    fontWeight: 300,
                  }}
                >
                  {s.text}
                </p>
              </div>
            ))}

            {/* Action links */}
            <div
              style={{
                display: "flex",
                gap: "0.75rem",
                marginTop: "1.2rem",
                flexWrap: "wrap",
              }}
            >
              <a
                href={proj.liveLink}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 7,
                  padding: "0.6rem 1.3rem",
                  borderRadius: 99,
                  background: "linear-gradient(135deg,#1565a0,#3396D3)",
                  color: "#fff",
                  textDecoration: "none",
                  fontFamily: FONT,
                  fontWeight: 700,
                  fontSize: "0.88rem",
                  boxShadow: "0 4px 18px rgba(51,150,211,.4)",
                }}
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                Live Link
              </a>
              <a
                href={proj.githubLink}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 7,
                  padding: "0.6rem 1.3rem",
                  borderRadius: 99,
                  background: "transparent",
                  border: "1px solid rgba(51,150,211,.38)",
                  color: "#93D3F5",
                  textDecoration: "none",
                  fontFamily: FONT,
                  fontWeight: 600,
                  fontSize: "0.88rem",
                }}
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                GitHub
              </a>
            </div>
          </Glass>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ============================================================
// SOCIAL ICONS
// ============================================================
const GH = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);
const LI = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
const TW = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const FB = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

// ============================================================
// CONTACT FORM
// ============================================================
function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [errMsg, setErrMsg] = useState("");
  const isConfigured =
    CONFIG.emailjs.serviceId !== "YOUR_SERVICE_ID" &&
    CONFIG.emailjs.templateId !== "YOUR_TEMPLATE_ID" &&
    CONFIG.emailjs.publicKey !== "YOUR_PUBLIC_KEY";

  const send = async () => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("error");
      setErrMsg("Please fill in all fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setStatus("error");
      setErrMsg("Please enter a valid email address.");
      return;
    }
    if (!isConfigured) {
      setStatus("error");
      setErrMsg("EmailJS not configured yet.");
      return;
    }
    setStatus("sending");
    setErrMsg("");
    try {
      if (!window.emailjs) {
        await new Promise((res, rej) => {
          const s = document.createElement("script");
          s.src =
            "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
          s.onload = res;
          s.onerror = rej;
          document.head.appendChild(s);
        });
        window.emailjs.init({ publicKey: CONFIG.emailjs.publicKey });
      }
      await window.emailjs.send(
        CONFIG.emailjs.serviceId,
        CONFIG.emailjs.templateId,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_name: CONFIG.name,
        },
      );
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrMsg("Failed to send. Check EmailJS credentials.");
      console.error(err);
    }
  };

  const inp = {
    width: "100%",
    background: "rgba(3,12,38,0.6)",
    border: "1px solid rgba(51,150,211,0.2)",
    borderRadius: 10,
    padding: "0.75rem 1rem",
    color: "#c8e8f8",
    fontFamily: FONT,
    fontSize: "0.93rem",
    transition: "border-color .2s",
  };
  const lbl = {
    display: "block",
    color: "#7CC8EC",
    fontFamily: FONT,
    fontSize: "0.73rem",
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    marginBottom: 6,
  };
  return (
    <div>
      {status === "success" && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            marginBottom: "1rem",
            padding: "0.9rem 1.1rem",
            borderRadius: 10,
            background: "rgba(34,197,94,0.1)",
            border: "1px solid rgba(34,197,94,0.3)",
            color: "#86efac",
            fontFamily: FONT,
            fontSize: "0.92rem",
          }}
        >
          Message sent! I will get back to you soon.
        </motion.div>
      )}
      {status === "error" && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            marginBottom: "1rem",
            padding: "0.9rem 1.1rem",
            borderRadius: 10,
            background: "rgba(239,68,68,0.1)",
            border: "1px solid rgba(239,68,68,0.25)",
            color: "#fca5a5",
            fontFamily: FONT,
            fontSize: "0.9rem",
          }}
        >
          {errMsg}
        </motion.div>
      )}
      <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
        <div
          className="form-row"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "0.85rem",
          }}
        >
          <div>
            <label style={lbl}>Your Name</label>
            <input
              value={form.name}
              onChange={(e) => {
                setForm({ ...form, name: e.target.value });
                setStatus("idle");
              }}
              placeholder="Your name"
              style={inp}
            />
          </div>
          <div>
            <label style={lbl}>Your Email</label>
            <input
              value={form.email}
              onChange={(e) => {
                setForm({ ...form, email: e.target.value });
                setStatus("idle");
              }}
              placeholder="you@email.com"
              type="email"
              style={inp}
            />
          </div>
        </div>
        <div>
          <label style={lbl}>Message</label>
          <textarea
            value={form.message}
            onChange={(e) => {
              setForm({ ...form, message: e.target.value });
              setStatus("idle");
            }}
            placeholder="Tell me about your project or just say hi..."
            rows={4}
            style={{ ...inp, resize: "vertical" }}
          />
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={send}
          disabled={status === "sending"}
          style={{
            padding: "0.88rem 1.5rem",
            borderRadius: 10,
            background:
              status === "sending"
                ? "rgba(51,150,211,0.35)"
                : "linear-gradient(135deg,#1565a0,#3396D3)",
            color: "#ffffff",
            border: "none",
            fontFamily: FONT,
            fontWeight: 700,
            fontSize: "0.95rem",
            cursor: status === "sending" ? "not-allowed" : "pointer",
            boxShadow:
              status === "sending" ? "none" : "0 4px 24px rgba(51,150,211,.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
          }}
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </motion.button>
      </div>
    </div>
  );
}

// ============================================================
// NAV INDICATOR — useMotionValue + useSpring (imperative)
// Values are written directly, never via React state.
// The spring runs entirely inside Framer's rAF loop with
// zero React re-renders → perfectly smooth across any distance.
// ============================================================
function NavIndicator({ btnRefs, activeIndex }) {
  const springCfg = { stiffness: 500, damping: 42, mass: 1 };

  // Pill
  const pillLeft = useMotionValue(0);
  const pillWidth = useMotionValue(0);
  const pillX = useSpring(pillLeft, springCfg);
  const pillW = useSpring(pillWidth, springCfg);

  // Underline (inset 18% each side)
  const lineLeft = useMotionValue(0);
  const lineWidth = useMotionValue(0);
  const lineX = useSpring(lineLeft, springCfg);
  const lineW = useSpring(lineWidth, springCfg);

  const opacity = useMotionValue(0);
  const opacityS = useSpring(opacity, { stiffness: 300, damping: 30 });

  useEffect(() => {
    const btn = btnRefs.current?.[activeIndex];
    if (!btn) return;
    const L = btn.offsetLeft;
    const W = btn.offsetWidth;
    pillLeft.set(L);
    pillWidth.set(W);
    lineLeft.set(L + W * 0.18);
    lineWidth.set(W * 0.64);
    opacity.set(1);
  }, [activeIndex]); // eslint-disable-line

  return (
    <>
      <motion.span
        style={{
          position: "absolute",
          top: "50%",
          translateY: "-50%",
          left: pillX,
          width: pillW,
          height: "calc(100% - 8px)",
          borderRadius: 8,
          background: "rgba(51,150,211,0.14)",
          border: "1px solid rgba(51,150,211,0.28)",
          opacity: opacityS,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <motion.span
        style={{
          position: "absolute",
          bottom: 4,
          left: lineX,
          width: lineW,
          height: 2,
          borderRadius: 99,
          background: "linear-gradient(90deg,#3396D3,#93D3F5)",
          boxShadow: "0 0 8px rgba(51,150,211,0.65)",
          opacity: opacityS,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
    </>
  );
}

// ============================================================
// MAIN PORTFOLIO
// ============================================================
export default function Portfolio() {
  const [active, setActive] = useState("Home");
  const [open, setOpen] = useState(false);
  const [proj, setProj] = useState(null);

  const heroNameRef = useRef(null);
  const heroTagRef = useRef(null);
  // One ref per nav button, stored in an array ref
  const btnRefs = useRef([]);
  const activeIndex = NAV.indexOf(active);

  const lenisRef = useRef(null);

  // ── Lenis smooth scroll ──
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.3,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });
    lenisRef.current = lenis;
    const onRaf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(onRaf);
    };
    requestAnimationFrame(onRaf);
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.lagSmoothing(0);
    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // ── Scroll-spy ──
  // isScrolling: true while a click-nav scroll is in progress.
  // We simply ignore ALL observer firings during this window.
  // The active state is set immediately on click and held until
  // scrolling fully settles (timer), so the indicator never wavers.
  const isScrolling = useRef(false);
  const scrollTimer = useRef(null);

  useEffect(() => {
    const obs = [];
    NAV.forEach((label) => {
      const el = document.getElementById(label.toLowerCase());
      if (!el) return;
      const o = new IntersectionObserver(
        ([entry]) => {
          // While a programmatic scroll is running, ignore everything
          if (isScrolling.current) return;
          if (entry.isIntersecting) setActive(label);
        },
        { rootMargin: "-40% 0px -40% 0px", threshold: 0 },
      );
      o.observe(el);
      obs.push(o);
    });
    return () => obs.forEach((o) => o.disconnect());
  }, []);

  // ── GSAP hero parallax ──
  useEffect(() => {
    if (!heroNameRef.current || !heroTagRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(heroNameRef.current, {
        y: -40,
        ease: "none",
        scrollTrigger: {
          trigger: "#home",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(heroTagRef.current, {
        y: -20,
        ease: "none",
        scrollTrigger: {
          trigger: "#home",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  // ── GSAP line reveals ──
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".gsap-line").forEach((el) => {
        gsap.from(el, {
          scaleX: 0,
          transformOrigin: "left center",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none none",
          },
          duration: 1.1,
          ease: "power3.out",
        });
      });
    });
    return () => ctx.revert();
  }, []);

  const go = (id) => {
    // Set active immediately so indicator jumps to destination right away
    setActive(id);
    // Lock the scroll-spy so intermediate sections can't override it
    isScrolling.current = true;
    if (scrollTimer.current) clearTimeout(scrollTimer.current);

    const el = document.getElementById(id.toLowerCase());
    if (!el) {
      isScrolling.current = false;
      setOpen(false);
      return;
    }

    if (lenisRef.current) {
      // Use Lenis's own scrollTo — onComplete fires when scroll fully settles
      lenisRef.current.scrollTo(el, {
        offset: 0,
        duration: 1.3,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        onComplete: () => {
          // Small extra delay so IntersectionObserver fires after Lenis settles
          scrollTimer.current = setTimeout(() => {
            isScrolling.current = false;
          }, 100);
        },
      });
    } else {
      el.scrollIntoView({ behavior: "smooth" });
      scrollTimer.current = setTimeout(() => {
        isScrolling.current = false;
      }, 1600);
    }
    setOpen(false);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#020b1c",
        color: "#e8f5ff",
        fontFamily: FONT,
        overflowX: "hidden",
        position: "relative",
      }}
    >
      <Favicon />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      <style>{`
        *,*::before,*::after{margin:0;padding:0;box-sizing:border-box;}
        @keyframes pulse {0%,100%{opacity:.5}50%{opacity:1}}
        @keyframes floatY{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}
        input,textarea{font-family:'Inter',sans-serif;}
        input::placeholder,textarea::placeholder{color:rgba(147,211,245,0.35);}
        input:focus,textarea:focus{border-color:rgba(51,150,211,.6)!important;outline:none;box-shadow:0 0 0 2px rgba(51,150,211,0.15);}
        .soc:hover{background:rgba(51,150,211,.2)!important;border-color:rgba(51,150,211,0.6)!important;color:#93D3F5!important;}
        .soc{transition:all .22s;}
        .proj-btn:hover{opacity:.82;}
        .proj-btn{transition:opacity .18s;}
        .pcard:hover{border-color:rgba(51,150,211,0.35)!important;}
        ::-webkit-scrollbar{width:4px}
        ::-webkit-scrollbar-track{background:#010810}
        ::-webkit-scrollbar-thumb{background:#1A6FA8;border-radius:99px}
        .edu-vline{left:50%;transform:translateX(-50%);}
        @media(max-width:640px){
          .dnav{display:none!important}
          .ham{display:flex!important}
          .about-grid{grid-template-columns:1fr!important}
          .contact-info{grid-template-columns:1fr 1fr!important}
          .form-row{grid-template-columns:1fr!important}
          .hero-btns{flex-direction:column!important;align-items:center!important}
          .proj-actions{flex-direction:column!important}
          .edu-desktop{display:none!important}
          .edu-mobile{display:block!important}
        }
      `}</style>

      <CosmicCanvas />

      {/* ══════════════════════════════════════════════════
          NAVBAR — single always-mounted indicator div,
          animated via measured offsetLeft/offsetWidth.
          Zero jitter, works across any distance.
      ══════════════════════════════════════════════════ */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: 66,
          padding: "0 2.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(1,7,20,0.9)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          borderBottom: "1px solid rgba(51,150,211,0.28)",
          boxShadow: "0 2px 24px rgba(0,10,40,0.55)",
        }}
      >
        <div
          className="dnav"
          style={{
            position: "relative",
            display: "flex",
            gap: "0.25rem",
            alignItems: "center",
          }}
        >
          {/* The single measured indicator — always in DOM, never unmounts */}
          <NavIndicator btnRefs={btnRefs} activeIndex={activeIndex} />

          {NAV.map((l, i) => (
            <motion.button
              key={l}
              ref={(el) => {
                btnRefs.current[i] = el;
              }}
              onClick={() => go(l)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: active === l ? "#ffffff" : "#6a8da8",
                fontFamily: FONT,
                fontWeight: active === l ? 700 : 400,
                fontSize: "0.92rem",
                padding: "0.45rem 1.1rem",
                borderRadius: 8,
                position: "relative",
                zIndex: 1,
                letterSpacing: "0.01em",
                transition: "color .2s ease, text-shadow .2s ease",
              }}
              onMouseEnter={(e) => {
                if (active !== l) {
                  e.currentTarget.style.color = "#c8e8f8";
                  e.currentTarget.style.textShadow =
                    "0 0 12px rgba(147,211,245,0.55)";
                }
              }}
              onMouseLeave={(e) => {
                if (active !== l) {
                  e.currentTarget.style.color = "#6a8da8";
                  e.currentTarget.style.textShadow = "none";
                }
              }}
            >
              {l}
            </motion.button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <motion.button
          className="ham"
          onClick={() => setOpen(!open)}
          whileTap={{ scale: 0.92 }}
          style={{
            display: "none",
            position: "absolute",
            right: "1.5rem",
            background: "none",
            border: "1px solid rgba(51,150,211,0.3)",
            color: "#93D3F5",
            fontSize: "1.2rem",
            cursor: "pointer",
            alignItems: "center",
            justifyContent: "center",
            width: 38,
            height: 38,
            borderRadius: 8,
            fontFamily: "monospace",
          }}
        >
          {open ? "✕" : "☰"}
        </motion.button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            style={{ position: "fixed", top: 74, right: 16, zIndex: 200 }}
          >
            <Glass
              style={{
                padding: "0.75rem",
                minWidth: 180,
                borderColor: "rgba(51,150,211,0.28)",
              }}
            >
              {NAV.map((l) => (
                <button
                  key={l}
                  onClick={() => go(l)}
                  style={{
                    display: "block",
                    width: "100%",
                    background: active === l ? "rgba(51,150,211,0.12)" : "none",
                    border: "none",
                    color: active === l ? "#93D3F5" : "#c8e8f8",
                    fontFamily: FONT,
                    fontWeight: active === l ? 600 : 400,
                    fontSize: "0.95rem",
                    padding: "0.6rem 1rem",
                    textAlign: "left",
                    cursor: "pointer",
                    borderRadius: 8,
                  }}
                >
                  {l}
                </button>
              ))}
            </Glass>
          </motion.div>
        )}
      </AnimatePresence>

      <main style={{ position: "relative", zIndex: 2 }}>
        {/* HERO */}
        <section
          id="home"
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "8rem 2rem 5rem",
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, ease: [0.34, 1.56, 0.64, 1] }}
            style={{
              position: "relative",
              marginBottom: "2.2rem",
              animation: "floatY 6s ease-in-out infinite",
            }}
          >
            <div
              style={{
                width: 155,
                height: 155,
                borderRadius: "50%",
                background: "linear-gradient(135deg,#0b2060,#1A6FA8)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto",
                overflow: "hidden",
                boxShadow:
                  "0 0 0 3px rgba(51,150,211,.25), 0 0 65px rgba(51,150,211,.3)",
              }}
            >
              {CONFIG.profileImage ? (
                <img
                  src={CONFIG.profileImage}
                  alt="Profile"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              ) : (
                <span style={{ fontSize: "4rem" }}>👨‍💻</span>
              )}
            </div>
            <div
              style={{
                position: "absolute",
                bottom: 10,
                right: 10,
                width: 18,
                height: 18,
                borderRadius: "50%",
                background: "#22d3ee",
                border: "3px solid #020b1c",
                animation: "pulse 2.2s ease infinite",
              }}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            style={{
              color: "#7CC8EC",
              fontFamily: FONT,
              fontWeight: 600,
              fontSize: "0.82rem",
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              marginBottom: "0.9rem",
            }}
          >
            Hello, I Am
          </motion.p>

          <div ref={heroNameRef}>
            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.75 }}
              style={{
                fontFamily: FONT,
                fontWeight: 800,
                fontSize: "clamp(3.2rem,9vw,6.2rem)",
                lineHeight: 1.15,
                background:
                  "linear-gradient(130deg,#ffffff 10%,#93D3F5 48%,#3396D3 85%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                marginBottom: "0.6rem",
                letterSpacing: "-0.025em",
                paddingBottom: "0.08em",
              }}
            >
              {CONFIG.name}
            </motion.h1>
          </div>
          <div ref={heroTagRef}>
            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.65 }}
              style={{
                fontFamily: FONT,
                fontWeight: 400,
                letterSpacing: "0.08em",
                fontSize: "clamp(1.05rem,3vw,1.5rem)",
                color: "#93D3F5",
                marginBottom: "1.5rem",
              }}
            >
              {CONFIG.designation}
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.8 }}
            style={{
              color: "#7a9bb5",
              fontFamily: FONT,
              fontWeight: 300,
              fontSize: "clamp(0.95rem,2vw,1.1rem)",
              maxWidth: 540,
              lineHeight: 1.9,
              margin: "0 auto 2.6rem",
            }}
          >
            {CONFIG.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="hero-btns"
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {/* Download Resume — shimmer sweep on hover */}
            <motion.a
              href={CONFIG.resumeLink}
              target="_blank"
              rel="noreferrer"
              whileHover={{
                scale: 1.06,
                boxShadow: "0 12px 40px rgba(51,150,211,.65)",
              }}
              whileTap={{ scale: 0.96 }}
              style={{
                padding: "0.92rem 2.4rem",
                borderRadius: 99,
                background: "linear-gradient(135deg,#1565a0,#3396D3)",
                color: "#fff",
                textDecoration: "none",
                fontFamily: FONT,
                fontWeight: 700,
                fontSize: "0.95rem",
                boxShadow: "0 4px 22px rgba(51,150,211,.42)",
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Shimmer stripe */}
              <motion.span
                animate={{ x: ["-120%", "220%"] }}
                transition={{
                  repeat: Infinity,
                  duration: 2.2,
                  ease: "easeInOut",
                  repeatDelay: 1.2,
                }}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "40%",
                  height: "100%",
                  background:
                    "linear-gradient(90deg,transparent,rgba(255,255,255,0.22),transparent)",
                  transform: "skewX(-20deg)",
                  pointerEvents: "none",
                }}
              />
              {/* Download icon */}
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Resume
            </motion.a>

            {/* Let's Talk — pulsing ring + arrow bounce */}
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => go("Contact")}
              style={{
                padding: "0.92rem 2.4rem",
                borderRadius: 99,
                background: "rgba(51,150,211,0.08)",
                border: "1px solid rgba(51,150,211,.38)",
                color: "#93D3F5",
                fontFamily: FONT,
                fontWeight: 600,
                fontSize: "0.95rem",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
                position: "relative",
              }}
            >
              {/* Pulsing outer ring */}
              <motion.span
                animate={{ scale: [1, 1.18, 1], opacity: [0.5, 0, 0.5] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                }}
                style={{
                  position: "absolute",
                  inset: -2,
                  borderRadius: 99,
                  border: "1px solid rgba(51,150,211,0.45)",
                  pointerEvents: "none",
                }}
              />
              Let's Talk
              {/* Arrow that bounces right */}
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.4,
                  ease: "easeInOut",
                }}
                style={{ display: "inline-flex", alignItems: "center" }}
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </motion.span>
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            style={{
              display: "flex",
              gap: "0.8rem",
              justifyContent: "center",
              marginTop: "2.5rem",
            }}
          >
            {[
              { icon: <GH />, href: CONFIG.social.github, label: "GitHub" },
              { icon: <LI />, href: CONFIG.social.linkedin, label: "LinkedIn" },
              { icon: <TW />, href: CONFIG.social.twitter, label: "Twitter" },
              { icon: <FB />, href: CONFIG.social.facebook, label: "Facebook" },
            ].map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="soc"
                title={s.label}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 600, damping: 18 }}
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  background: "rgba(51,150,211,.1)",
                  border: "1px solid rgba(51,150,211,.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#7CC8EC",
                  textDecoration: "none",
                }}
              >
                {s.icon}
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            style={{
              marginTop: "4rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 8,
            }}
          >
            <span
              style={{
                color: "#7CC8EC",
                fontSize: "0.68rem",
                letterSpacing: "0.24em",
                fontFamily: FONT,
              }}
            >
              SCROLL
            </span>
            <motion.div
              animate={{ scaleY: [1, 1.35, 1], opacity: [0.4, 1, 0.4] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              style={{
                width: 1,
                height: 46,
                background: "linear-gradient(to bottom,#3396D3,transparent)",
                transformOrigin: "top",
              }}
            />
          </motion.div>
        </section>

        {/* ABOUT */}
        <section
          id="about"
          style={{
            padding: "7rem 2rem 5rem",
            maxWidth: 960,
            margin: "0 auto",
            scrollMarginTop: "66px",
          }}
        >
          <Heading title="About Me" sub="Who I Am" />
          <AnimSection
            className="about-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1.3rem",
            }}
          >
            {[
              { icon: "🚀", title: "My Journey", text: CONFIG.about.journey },
              { icon: "💡", title: "What I Love", text: CONFIG.about.work },
              { icon: "🌌", title: "Beyond Code", text: CONFIG.about.hobbies },
              { icon: "🎯", title: "My Goal", text: CONFIG.about.goal },
            ].map((c) => (
              <motion.div key={c.title} variants={fadeUp}>
                <Glass
                  style={{
                    padding: "1.9rem",
                    height: "100%",
                    transition: "border-color .25s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.borderColor =
                      "rgba(51,150,211,0.35)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.borderColor =
                      "rgba(51,150,211,0.15)")
                  }
                >
                  <div style={{ fontSize: "2rem", marginBottom: "0.85rem" }}>
                    {c.icon}
                  </div>
                  <h3
                    style={{
                      fontFamily: FONT,
                      fontWeight: 700,
                      color: "#93D3F5",
                      fontSize: "1.05rem",
                      marginBottom: "0.6rem",
                    }}
                  >
                    {c.title}
                  </h3>
                  <p
                    style={{
                      color: "#8ab0c8",
                      fontFamily: FONT,
                      fontSize: "0.94rem",
                      lineHeight: 1.85,
                      fontWeight: 300,
                    }}
                  >
                    {c.text}
                  </p>
                </Glass>
              </motion.div>
            ))}
          </AnimSection>
        </section>

        {/* SKILLS */}
        <section
          id="skills"
          style={{
            padding: "7rem 2rem 5rem",
            maxWidth: 980,
            margin: "0 auto",
            scrollMarginTop: "66px",
          }}
        >
          <Heading title="Skills" sub="Technologies I Work With" />
          <div
            style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
          >
            {Object.entries(CONFIG.skills).map(([cat, list]) => (
              <AnimSection key={cat}>
                <motion.div variants={fadeUp}>
                  <Glass style={{ padding: "2.1rem 2.4rem" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.9rem",
                        marginBottom: "1.6rem",
                        paddingBottom: "0.85rem",
                        borderBottom: "1px solid rgba(51,150,211,0.12)",
                      }}
                    >
                      <h3
                        style={{
                          fontFamily: FONT,
                          fontWeight: 700,
                          fontSize: "0.78rem",
                          color: "#93D3F5",
                          textTransform: "uppercase",
                          letterSpacing: "0.24em",
                        }}
                      >
                        {cat}
                      </h3>
                      <div
                        className="gsap-line"
                        style={{
                          flex: 1,
                          height: 1,
                          background:
                            "linear-gradient(to right,rgba(51,150,211,0.4),transparent)",
                        }}
                      />
                    </div>
                    <motion.div
                      variants={fadeUpStagger}
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "1.1rem",
                        justifyContent: "center",
                      }}
                    >
                      {list.map((s) => (
                        <SkillChip
                          key={s.name}
                          name={s.name}
                          icon={s.icon}
                          color={s.color}
                        />
                      ))}
                    </motion.div>
                  </Glass>
                </motion.div>
              </AnimSection>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section
          id="education"
          style={{
            padding: "7rem 2rem 5rem",
            maxWidth: 900,
            margin: "0 auto",
            scrollMarginTop: "66px",
          }}
        >
          <Heading title="Education" sub="Academic Background" />

          {/* ── Desktop: alternating left-right ── */}
          <div className="edu-desktop" style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                top: 0,
                bottom: 0,
                width: 2,
                background:
                  "linear-gradient(to bottom,#3396D3,rgba(51,150,211,0.08))",
                borderRadius: 99,
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "2.8rem",
              }}
            >
              {CONFIG.education.map((e, i) => {
                const isLeft = i % 2 === 0;
                const card = (
                  <Glass
                    style={{
                      padding: "1.6rem 1.8rem",
                      width: "100%",
                      borderColor: "rgba(51,150,211,0.18)",
                    }}
                  >
                    <span
                      style={{
                        color: "#7CC8EC",
                        fontFamily: FONT,
                        fontWeight: 600,
                        fontSize: "0.72rem",
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                      }}
                    >
                      {e.year}
                    </span>
                    <h3
                      style={{
                        fontFamily: FONT,
                        fontWeight: 700,
                        color: "#ffffff",
                        fontSize: "1.05rem",
                        margin: "0.45rem 0 0.3rem",
                        lineHeight: 1.35,
                      }}
                    >
                      {e.degree}
                    </h3>
                    <p
                      style={{
                        color: "#93D3F5",
                        fontFamily: FONT,
                        fontSize: "0.88rem",
                        fontWeight: 500,
                        marginBottom: "0.35rem",
                      }}
                    >
                      {e.institution}
                    </p>
                    <p
                      style={{
                        color: "#8ab0c8",
                        fontFamily: FONT,
                        fontSize: "0.85rem",
                        fontWeight: 300,
                        lineHeight: 1.7,
                      }}
                    >
                      {e.details}
                    </p>
                  </Glass>
                );
                return (
                  <AnimSection
                    key={i}
                    variants={fadeUp}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 48px 1fr",
                      alignItems: "center",
                    }}
                  >
                    <motion.div
                      variants={fadeLeft}
                      style={{
                        paddingRight: "2rem",
                        display: "flex",
                        justifyContent: "flex-end",
                      }}
                    >
                      {isLeft ? card : <div />}
                    </motion.div>
                    <motion.div
                      variants={scaleIn}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 1,
                      }}
                    >
                      <div
                        style={{
                          width: 16,
                          height: 16,
                          borderRadius: "50%",
                          background: "linear-gradient(135deg,#1565a0,#3396D3)",
                          boxShadow:
                            "0 0 0 4px rgba(51,150,211,0.15),0 0 16px rgba(51,150,211,0.4)",
                          flexShrink: 0,
                        }}
                      />
                    </motion.div>
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, x: 36 },
                        show: {
                          opacity: 1,
                          x: 0,
                          transition: {
                            duration: 0.65,
                            ease: [0.25, 0.1, 0.25, 1],
                          },
                        },
                      }}
                      style={{
                        paddingLeft: "2rem",
                        display: "flex",
                        justifyContent: "flex-start",
                      }}
                    >
                      {!isLeft ? card : <div />}
                    </motion.div>
                  </AnimSection>
                );
              })}
            </div>
          </div>

          {/* ── Mobile: left-side line, all cards right ── */}
          <div
            className="edu-mobile"
            style={{ position: "relative", display: "none" }}
          >
            {/* Line at left:17px (= 8px margin + half of 18px dot - 1px) */}
            <div
              style={{
                position: "absolute",
                left: 17,
                top: 0,
                bottom: 0,
                width: 2,
                background:
                  "linear-gradient(to bottom,#3396D3,rgba(51,150,211,0.08))",
                borderRadius: 99,
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.8rem",
              }}
            >
              {CONFIG.education.map((e, i) => (
                <AnimSection
                  key={i}
                  variants={fadeUp}
                  style={{ position: "relative", paddingLeft: "2.6rem" }}
                >
                  {/* Dot: left:8px centres it on the line (8 + 9 = 17 = line centre) */}
                  <div
                    style={{
                      position: "absolute",
                      left: 8,
                      top: 20,
                      width: 18,
                      height: 18,
                      borderRadius: "50%",
                      background: "linear-gradient(135deg,#1565a0,#3396D3)",
                      boxShadow:
                        "0 0 0 4px rgba(51,150,211,0.15),0 0 16px rgba(51,150,211,0.4)",
                      zIndex: 1,
                    }}
                  />
                  <motion.div variants={fadeUp}>
                    <Glass
                      style={{
                        padding: "1.4rem 1.6rem",
                        borderColor: "rgba(51,150,211,0.18)",
                      }}
                    >
                      <span
                        style={{
                          color: "#7CC8EC",
                          fontFamily: FONT,
                          fontWeight: 600,
                          fontSize: "0.7rem",
                          letterSpacing: "0.14em",
                          textTransform: "uppercase",
                        }}
                      >
                        {e.year}
                      </span>
                      <h3
                        style={{
                          fontFamily: FONT,
                          fontWeight: 700,
                          color: "#ffffff",
                          fontSize: "1rem",
                          margin: "0.4rem 0 0.28rem",
                          lineHeight: 1.35,
                        }}
                      >
                        {e.degree}
                      </h3>
                      <p
                        style={{
                          color: "#93D3F5",
                          fontFamily: FONT,
                          fontSize: "0.85rem",
                          fontWeight: 500,
                          marginBottom: "0.3rem",
                        }}
                      >
                        {e.institution}
                      </p>
                      <p
                        style={{
                          color: "#8ab0c8",
                          fontFamily: FONT,
                          fontSize: "0.82rem",
                          fontWeight: 300,
                          lineHeight: 1.7,
                        }}
                      >
                        {e.details}
                      </p>
                    </Glass>
                  </motion.div>
                </AnimSection>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section
          id="projects"
          style={{
            padding: "7rem 2rem 18vh",
            maxWidth: 1080,
            margin: "0 auto",
            scrollMarginTop: "66px",
          }}
        >
          <Heading title="Projects" sub="What I've Built" />
          <AnimSection
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(310px,1fr))",
              gap: "1.8rem",
            }}
          >
            {CONFIG.projects.map((p, i) => {
              const bannerGrads = [
                "linear-gradient(135deg,#050e2e 0%,#0a2560 50%,#0e4080 100%)",
                "linear-gradient(135deg,#060a28 0%,#081e55 50%,#0c3570 100%)",
                "linear-gradient(135deg,#040d30 0%,#092058 50%,#0d3d78 100%)",
              ];
              const accentColors = ["#3396D3", "#4BA8E0", "#2d8cc4"];
              const accent = accentColors[i % 3];
              const projIcons = [
                // Cloud/weather
                <svg
                  key="w"
                  width="52"
                  height="52"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={accent}
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.9"
                >
                  <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
                </svg>,
                // Checklist/tasks
                <svg
                  key="t"
                  width="52"
                  height="52"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={accent}
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.9"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M9 12l2 2 4-4" />
                  <line x1="3" y1="9" x2="21" y2="9" />
                </svg>,
                // Shopping/store
                <svg
                  key="s"
                  width="52"
                  height="52"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={accent}
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.9"
                >
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>,
              ];
              return (
                <motion.div key={i} variants={fadeUp}>
                  <div
                    onClick={() => setProj(p)}
                    className="pcard-wrap"
                    style={{
                      borderRadius: 18,
                      overflow: "hidden",
                      cursor: "pointer",
                      background: "rgba(3,14,46,0.6)",
                      backdropFilter: "blur(22px)",
                      WebkitBackdropFilter: "blur(22px)",
                      border: "1px solid rgba(51,150,211,0.15)",
                      boxShadow: "0 8px 40px rgba(0,20,90,0.32)",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      transition:
                        "transform .25s ease, box-shadow .25s ease, border-color .25s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-6px)";
                      e.currentTarget.style.boxShadow = `0 28px 60px rgba(51,150,211,.26), 0 0 0 1px rgba(51,150,211,0.35)`;
                      e.currentTarget.style.borderColor =
                        "rgba(51,150,211,0.45)";
                      e.currentTarget.querySelector(
                        ".banner-overlay",
                      ).style.opacity = "1";
                      e.currentTarget.querySelector(
                        ".banner-shimmer",
                      ).style.transform = "translateX(200%)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow =
                        "0 8px 40px rgba(0,20,90,0.32)";
                      e.currentTarget.style.borderColor =
                        "rgba(51,150,211,0.15)";
                      e.currentTarget.querySelector(
                        ".banner-overlay",
                      ).style.opacity = "0";
                      e.currentTarget.querySelector(
                        ".banner-shimmer",
                      ).style.transform = "translateX(-100%)";
                    }}
                  >
                    {/* ── Banner ── */}
                    <div
                      style={{
                        height: 165,
                        background: bannerGrads[i % 3],
                        position: "relative",
                        overflow: "hidden",
                        flexShrink: 0,
                      }}
                    >
                      {/* Very faint grid */}
                      <svg
                        style={{
                          position: "absolute",
                          inset: 0,
                          width: "100%",
                          height: "100%",
                          opacity: 0.055,
                        }}
                        preserveAspectRatio="none"
                      >
                        {[0, 1, 2, 3, 4, 5].map((n) => (
                          <line
                            key={`v${n}`}
                            x1={`${n * 20 + 10}%`}
                            y1="0"
                            x2={`${n * 20 + 10}%`}
                            y2="100%"
                            stroke={accent}
                            strokeWidth="0.8"
                          />
                        ))}
                        {[0, 1, 2].map((n) => (
                          <line
                            key={`h${n}`}
                            x1="0"
                            y1={`${n * 45 + 10}%`}
                            x2="100%"
                            y2={`${n * 45 + 10}%`}
                            stroke={accent}
                            strokeWidth="0.8"
                          />
                        ))}
                      </svg>

                      {/* Soft radial glow */}
                      <div
                        style={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%,-50%)",
                          width: 110,
                          height: 110,
                          borderRadius: "50%",
                          background: `radial-gradient(circle, ${accent}14 0%, transparent 70%)`,
                        }}
                      />

                      {/* Project icon — muted */}
                      <div
                        style={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%,-52%)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          opacity: 0.55,
                          filter: `drop-shadow(0 0 8px ${accent}44)`,
                        }}
                      >
                        {projIcons[i % 3]}
                      </div>

                      {/* Shimmer sweep */}
                      <div
                        className="banner-shimmer"
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "50%",
                          height: "100%",
                          background:
                            "linear-gradient(90deg,transparent,rgba(255,255,255,0.05),transparent)",
                          transform: "translateX(-100%)",
                          transition: "transform 0.6s ease",
                          pointerEvents: "none",
                        }}
                      />

                      {/* Hover overlay */}
                      <div
                        className="banner-overlay"
                        style={{
                          position: "absolute",
                          inset: 0,
                          background: "rgba(2,10,34,0.45)",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: 7,
                          opacity: 0,
                          transition: "opacity .22s ease",
                          pointerEvents: "none",
                        }}
                      >
                        <div
                          style={{
                            width: 36,
                            height: 36,
                            borderRadius: "50%",
                            background: "rgba(51,150,211,0.15)",
                            border: `1px solid ${accent}88`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <svg
                            width="15"
                            height="15"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke={accent}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <circle cx="11" cy="11" r="8" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                          </svg>
                        </div>
                        <span
                          style={{
                            color: "#c8e8f8",
                            fontFamily: FONT,
                            fontSize: "0.72rem",
                            fontWeight: 500,
                            letterSpacing: "0.08em",
                          }}
                        >
                          Click to explore
                        </span>
                      </div>

                      {/* Bottom fade */}
                      <div
                        style={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          right: 0,
                          height: 44,
                          background:
                            "linear-gradient(to top,rgba(3,14,46,0.9),transparent)",
                        }}
                      />
                    </div>

                    {/* ── Card body ── */}
                    <div
                      style={{
                        padding: "1.4rem 1.5rem 1.5rem",
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.65rem",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          justifyContent: "space-between",
                          gap: 8,
                        }}
                      >
                        <h3
                          style={{
                            fontFamily: FONT,
                            fontWeight: 700,
                            color: "#ffffff",
                            fontSize: "1.1rem",
                            lineHeight: 1.3,
                          }}
                        >
                          {p.name}
                        </h3>
                        {/* Arrow hint */}
                        <svg
                          style={{ flexShrink: 0, marginTop: 2, opacity: 0.45 }}
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#93D3F5"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M7 17L17 7" />
                          <polyline points="7 7 17 7 17 17" />
                        </svg>
                      </div>

                      {/* Tech pills */}
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "0.38rem",
                        }}
                      >
                        {p.techLabels.map((label, ti) => (
                          <span
                            key={label}
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: 4,
                              background: "rgba(51,150,211,0.1)",
                              border: "1px solid rgba(51,150,211,0.22)",
                              color: "#93D3F5",
                              borderRadius: 99,
                              padding: "3px 9px",
                              fontFamily: FONT,
                              fontSize: "0.72rem",
                              fontWeight: 500,
                            }}
                          >
                            {p.tech[ti] && TECH_ICONS[p.tech[ti]] && (
                              <span
                                style={{
                                  width: 12,
                                  height: 12,
                                  display: "inline-flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  flexShrink: 0,
                                }}
                              >
                                <span
                                  style={{
                                    transform: "scale(0.33)",
                                    transformOrigin: "center",
                                    display: "block",
                                    width: 38,
                                    height: 38,
                                    marginLeft: -13,
                                    marginRight: -13,
                                    marginTop: -13,
                                    marginBottom: -13,
                                  }}
                                >
                                  {TECH_ICONS[p.tech[ti]]}
                                </span>
                              </span>
                            )}
                            {label}
                          </span>
                        ))}
                      </div>

                      <p
                        style={{
                          color: "#8ab0c8",
                          fontFamily: FONT,
                          fontSize: "0.9rem",
                          lineHeight: 1.78,
                          fontWeight: 300,
                          flex: 1,
                        }}
                      >
                        {p.description.slice(0, 90)}...
                      </p>

                      {/* Divider */}
                      <div
                        style={{
                          height: 1,
                          background:
                            "linear-gradient(to right,rgba(51,150,211,0.2),transparent)",
                          margin: "0.1rem 0",
                        }}
                      />

                      {/* Live Link + GitHub */}
                      <div
                        className="proj-actions"
                        style={{ display: "flex", gap: "0.5rem" }}
                      >
                        <a
                          href={p.liveLink}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          style={{
                            flex: 1,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 6,
                            padding: "0.62rem 0.5rem",
                            borderRadius: 10,
                            background:
                              "linear-gradient(135deg,#1565a0,#3396D3)",
                            color: "#ffffff",
                            textDecoration: "none",
                            fontFamily: FONT,
                            fontWeight: 700,
                            fontSize: "0.82rem",
                            boxShadow: "0 4px 18px rgba(51,150,211,.4)",
                            transition:
                              "transform .15s ease, box-shadow .15s ease",
                            position: "relative",
                            overflow: "hidden",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform =
                              "translateY(-2px)";
                            e.currentTarget.style.boxShadow =
                              "0 8px 24px rgba(51,150,211,.55)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.boxShadow =
                              "0 4px 18px rgba(51,150,211,.4)";
                          }}
                        >
                          <svg
                            width="13"
                            height="13"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <line x1="2" y1="12" x2="22" y2="12" />
                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                          </svg>
                          Live Link
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            style={{ opacity: 0.7 }}
                          >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                          </svg>
                        </a>
                        <a
                          href={p.githubLink}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          style={{
                            flex: 1,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 6,
                            padding: "0.62rem 0.5rem",
                            borderRadius: 10,
                            background: "rgba(255,255,255,0.07)",
                            border: "1px solid rgba(255,255,255,0.18)",
                            color: "#e2f0fb",
                            textDecoration: "none",
                            fontFamily: FONT,
                            fontWeight: 700,
                            fontSize: "0.82rem",
                            transition:
                              "transform .15s ease, background .15s ease, border-color .15s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform =
                              "translateY(-2px)";
                            e.currentTarget.style.background =
                              "rgba(255,255,255,0.13)";
                            e.currentTarget.style.borderColor =
                              "rgba(255,255,255,0.32)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.background =
                              "rgba(255,255,255,0.07)";
                            e.currentTarget.style.borderColor =
                              "rgba(255,255,255,0.18)";
                          }}
                        >
                          <GH />
                          GitHub
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            style={{ opacity: 0.5 }}
                          >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimSection>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          style={{
            padding: "7rem 2rem 8vh",
            maxWidth: 760,
            margin: "0 auto",
            scrollMarginTop: "66px",
          }}
        >
          <div style={{ marginBottom: "-1rem" }}>
            <Heading title="Contact" sub="Get In Touch" />
          </div>
          <AnimSection variants={fadeUp}>
            <motion.div variants={fadeUp}>
              <Glass style={{ padding: "1.8rem 2rem" }}>
                {/* Contact rows */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.6rem",
                    marginBottom: "1.4rem",
                  }}
                >
                  {[
                    {
                      icon: (
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#7CC8EC"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                          <polyline points="22,6 12,13 2,6" />
                        </svg>
                      ),
                      label: "Email",
                      value: CONFIG.email,
                    },
                    {
                      icon: (
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#7CC8EC"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5 19.79 19.79 0 0 1 1.6 4.87 2 2 0 0 1 3.57 2.7h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.35a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.46 18z" />
                        </svg>
                      ),
                      label: "Phone",
                      value: CONFIG.phone,
                    },
                    {
                      icon: (
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#7CC8EC"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                        </svg>
                      ),
                      label: "WhatsApp",
                      value: CONFIG.whatsapp,
                    },
                    {
                      icon: (
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#7CC8EC"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                      ),
                      label: "Location",
                      value: "Banasree, Dhaka, Bangladesh",
                    },
                  ].map((c, idx) => (
                    <motion.div
                      key={c.label}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.07, duration: 0.45 }}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.85rem",
                        padding: "0.7rem 1rem",
                        background: "rgba(3,10,36,0.45)",
                        border: "1px solid rgba(51,150,211,0.1)",
                        borderRadius: 10,
                        transition: "border-color .2s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.borderColor =
                          "rgba(51,150,211,0.28)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.borderColor =
                          "rgba(51,150,211,0.1)")
                      }
                    >
                      {/* Icon bubble */}
                      <div
                        style={{
                          width: 32,
                          height: 32,
                          borderRadius: 8,
                          background: "rgba(51,150,211,0.1)",
                          border: "1px solid rgba(51,150,211,0.18)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        {c.icon}
                      </div>
                      {/* Label + value */}
                      <div style={{ minWidth: 0, flex: 1 }}>
                        <p
                          style={{
                            color: "#7CC8EC",
                            fontFamily: FONT,
                            fontSize: "0.68rem",
                            fontWeight: 600,
                            textTransform: "uppercase",
                            letterSpacing: "0.12em",
                            marginBottom: 3,
                          }}
                        >
                          {c.label}
                        </p>
                        <p
                          style={{
                            color: "#c8e8f8",
                            fontFamily: FONT,
                            fontSize: "0.9rem",
                            fontWeight: 400,
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {c.value}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div
                  style={{
                    borderTop: "1px solid rgba(51,150,211,.1)",
                    marginBottom: "1.1rem",
                  }}
                />
                <h3
                  style={{
                    fontFamily: FONT,
                    fontWeight: 700,
                    color: "#c8e8f8",
                    fontSize: "0.95rem",
                    marginBottom: "0.9rem",
                  }}
                >
                  Send me a message
                </h3>
                <ContactForm />
              </Glass>
            </motion.div>
          </AnimSection>
        </section>

        {/* FOOTER */}
        <footer
          style={{
            textAlign: "center",
            padding: "1.5rem 2rem",
            borderTop: "1px solid rgba(51,150,211,.1)",
            marginTop: "0",
          }}
        >
          {" "}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "0.65rem",
              marginBottom: "1.1rem",
            }}
          >
            {[
              { icon: <GH />, href: CONFIG.social.github },
              { icon: <LI />, href: CONFIG.social.linkedin },
              { icon: <TW />, href: CONFIG.social.twitter },
              { icon: <FB />, href: CONFIG.social.facebook },
            ].map((s, i) => (
              <motion.a
                key={i}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="soc"
                whileHover={{ y: -3 }}
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: "50%",
                  background: "rgba(51,150,211,.08)",
                  border: "1px solid rgba(51,150,211,.16)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#5a7a90",
                  textDecoration: "none",
                }}
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
          <p
            style={{ color: "#2e5068", fontFamily: FONT, fontSize: "0.82rem" }}
          >
            Crafted with care and code &mdash; &copy; {new Date().getFullYear()}{" "}
            {CONFIG.name}
          </p>
        </footer>
      </main>

      {/* Project modal */}
      {proj && <Modal proj={proj} onClose={() => setProj(null)} />}
    </div>
  );
}
