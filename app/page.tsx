import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import CommandPalette from "@/components/CommandPalette";
// import ChatWidget from "@/components/ChatWidget";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <CommandPalette />
      <main className="pt-9">
        <div id="home">
          <Hero />
        </div>
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>
      {/* <ChatWidget /> */}
    </div>
  );
}
