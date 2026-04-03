import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import StatusBar from "@/components/StatusBar";
import CommandPalette from "@/components/CommandPalette";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Parv Saxena | Senior Frontend Engineer</title>
        <meta
          name="description"
          content="Senior Frontend Engineer specializing in React, TypeScript, and AI-powered web applications. 5+ years building high-performance products."
        />
        <meta name="keywords" content="Senior Frontend Engineer, AI, RAG, OpenAI, React Developer, TypeScript, Web Developer, Bengaluru, India" />
        <meta property="og:title" content="Parv Saxena | Senior Frontend Engineer" />
        <meta property="og:description" content="Senior Frontend Engineer | Building AI-Powered Products" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://parvsaxena.dev" />
      </Helmet>
      
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
      </div>
    </>
  );
};

export default Index;