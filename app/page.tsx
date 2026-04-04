import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import StatusBar from "@/components/StatusBar";
import CommandPalette from "@/components/CommandPalette";
import ChatWidget from "@/components/ChatWidget";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <CommandPalette />
      <main className="pt-9 pb-6">
        <div id="home">
          <Hero />
        </div>
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <StatusBar />
      <ChatWidget />
    </div>
  );
}
