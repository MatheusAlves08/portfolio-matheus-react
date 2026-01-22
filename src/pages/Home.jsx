import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {

    return <div className="min-heigth-screen bg-background text-foreground overflow-x-hidden ">

    {/* Theme Toogle */}

    <ThemeToggle /> 

    {/* Efeitos de Fundo */}

    <StarBackground />

    {/* Barra de Navegação */}

    <Navbar />

    {/* Conteúdo Principal */}

    <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
    </main>

    {/* Rodapé (Footer) */}
    <Footer />


    </div>;

};