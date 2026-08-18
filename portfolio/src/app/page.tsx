import Navbar from "@/components/Navbar";
import HeroSection from "@/components/Hero";
import AboutSection from "@/components/About";
import ProjectsSection from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* pl-[60px] offsets the sidebar; pt-[60px] offsets the top nav */}
      <main
        style={{
          paddingLeft: "60px",
          paddingTop: "60px",
          minHeight: "100vh",
          backgroundColor: "#0a0a0a",
        }}
      >
        <HeroSection />

        <AboutSection />
        <ProjectsSection />
        <section id="skills"   style={{ minHeight: "100vh", backgroundColor: "#0d0d0d" }} />
        <section id="journey"  style={{ minHeight: "100vh" }} />
        <section id="contact"  style={{ minHeight: "100vh", backgroundColor: "#0d0d0d" }} />
      </main>
    </>
  );
}
