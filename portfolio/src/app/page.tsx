import Navbar from "@/components/Navbar";
import HeroSection from "@/components/Hero";

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

        <section id="about"    style={{ minHeight: "100vh", backgroundColor: "#0d0d0d" }} />
        <section id="projects" style={{ minHeight: "100vh" }} />
        <section id="skills"   style={{ minHeight: "100vh", backgroundColor: "#0d0d0d" }} />
        <section id="journey"  style={{ minHeight: "100vh" }} />
        <section id="contact"  style={{ minHeight: "100vh", backgroundColor: "#0d0d0d" }} />
      </main>
    </>
  );
}
