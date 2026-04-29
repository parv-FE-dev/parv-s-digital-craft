"use client";

import { useState, useEffect } from "react";
import { X, FileText, Briefcase, Wrench, Mail, User } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { label: "home.tsx", href: "#home", icon: User },
    { label: "about.tsx", href: "#about", icon: FileText },
    { label: "experience.tsx", href: "#experience", icon: Briefcase },
    { label: "skills.tsx", href: "#skills", icon: Wrench },
    { label: "contact.tsx", href: "#contact", icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section
      const sections = ["home", "about", "experience", "skills", "contact"];
      const scrollPosition = window.scrollY + 100;

      // Check if near top for home
      if (window.scrollY < 200) {
        setActiveSection("home");
        return;
      }

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          return;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLButtonElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");

    if (targetId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.getElementById(targetId);

    if (element) {
      const headerOffset = 45;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-vscode-tab-inactive border-b border-border`}
    >
      {/* VS Code Tab Bar */}
      <nav className="flex items-center h-9 overflow-x-auto">
        {navLinks.map((link) => {
          const isActive = activeSection === link.href.replace("#", "");
          const IconComponent = link.icon;

          return (
            <button
              key={link.label}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`group relative flex items-center gap-2 px-4 h-full text-sm font-mono transition-colors whitespace-nowrap ${
                isActive
                  ? "bg-vscode-tab-active text-foreground border-t border-t-primary"
                  : "text-muted-foreground hover:bg-vscode-tab-active/50"
              }`}
            >
              <IconComponent className="w-4 h-4 text-primary" />
              <span>{link.label}</span>
              {isActive && (
                <X className="w-3 h-3 ml-2 opacity-50 hover:opacity-100" />
              )}
              {/* Bottom border to hide the header border when active */}
              {isActive && (
                <span className="absolute bottom-0 left-0 right-0 h-px bg-background" />
              )}
            </button>
          );
        })}
      </nav>
    </header>
  );
};

export default Navbar;
