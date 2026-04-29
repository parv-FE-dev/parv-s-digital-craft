"use client";

import { useEffect, useState } from "react";
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { FileText, Briefcase, Wrench, Mail, User, Search } from "lucide-react";

const CommandPalette = () => {
  const [open, setOpen] = useState(false);

  const sections = [
    { label: "Home", href: "#home", icon: User, file: "home.tsx", description: "Go to landing section" },
    { label: "About", href: "#about", icon: FileText, file: "about.tsx", description: "Learn about me" },
    { label: "Experience", href: "#experience", icon: Briefcase, file: "experience.tsx", description: "View work history" },
    { label: "Skills", href: "#skills", icon: Wrench, file: "skills.tsx", description: "Technical skills" },
    { label: "Contact", href: "#contact", icon: Mail, file: "contact.tsx", description: "Get in touch" },
  ];

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "p" || e.key === "k") && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handleSelect = (href: string) => {
    setOpen(false);
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
    <>
      {/* Command palette trigger hint */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-8 right-4 z-40 flex items-center gap-2 px-3 py-1.5 bg-secondary border border-border rounded text-xs font-mono text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
      >
        <Search className="w-3 h-3" />
        <span className="hidden sm:inline">Quick Open</span>
        <kbd className="px-1.5 py-0.5 bg-muted rounded text-[10px]">⌘P</kbd>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command className="bg-card border-border font-mono">
          <div className="flex items-center border-b border-border px-3">
            <Search className="w-4 h-4 text-muted-foreground mr-2" />
            <CommandInput 
              placeholder="Search files..." 
              className="h-12 bg-transparent border-0 focus:ring-0 placeholder:text-muted-foreground"
            />
          </div>
          <CommandList className="max-h-[300px]">
            <CommandEmpty className="py-6 text-center text-sm text-muted-foreground">
              No files found.
            </CommandEmpty>
            <CommandGroup heading="Go to File" className="text-muted-foreground">
              {sections.map((section) => {
                const IconComponent = section.icon;
                return (
                  <CommandItem
                    key={section.href}
                    value={`${section.label} ${section.file} ${section.description}`}
                    onSelect={() => handleSelect(section.href)}
                    className="flex items-center gap-3 px-3 py-2.5 cursor-pointer data-[selected=true]:bg-primary/10 data-[selected=true]:text-foreground"
                  >
                    <IconComponent className="w-4 h-4 text-primary" />
                    <div className="flex flex-col flex-1">
                      <span className="text-foreground">{section.file}</span>
                      <span className="text-xs text-muted-foreground">{section.description}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">src/components/</span>
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </CommandList>
          <div className="border-t border-border px-3 py-2 flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <kbd className="px-1 py-0.5 bg-muted rounded">↑↓</kbd> navigate
              </span>
              <span className="flex items-center gap-1">
                <kbd className="px-1 py-0.5 bg-muted rounded">↵</kbd> open
              </span>
              <span className="flex items-center gap-1">
                <kbd className="px-1 py-0.5 bg-muted rounded">esc</kbd> close
              </span>
            </div>
          </div>
        </Command>
      </CommandDialog>
    </>
  );
};

export default CommandPalette;