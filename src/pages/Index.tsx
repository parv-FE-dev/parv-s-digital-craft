import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import StatusBar from "@/components/StatusBar";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Parv Saxena | Front-End Developer</title>
        <meta 
          name="description" 
          content="Front-End Developer specializing in React, TypeScript, and modern web technologies. 4+ years of experience building high-performance web applications." 
        />
        <meta name="keywords" content="Front-End Developer, React Developer, TypeScript, Web Developer, Bengaluru, India" />
        <meta property="og:title" content="Parv Saxena | Front-End Developer" />
        <meta property="og:description" content="Building intuitive, high-performance web experiences with React & TypeScript." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://parvsaxena.dev" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
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