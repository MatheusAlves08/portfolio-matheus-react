import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">

          {/* Foto de Perfil */}
          <div className="flex justify-center mt-25 mb-12 opacity-0 animate-fade-in">
            <div className="relative w-32 h-32 md:w-40 md:h-40">
              <img
                src="/fotoperfil/fotominha.jpg"
                alt="Matheus Alves"
                className="w-full h-full rounded-full object-cover border-4 border-primary/20 shadow-lg hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 rounded-full bg-primary/10 animate-pulse-subtle pointer-events-none"></div>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Olá, Eu sou o </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              Matheus{" "}
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              Alves
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Sou um entusiasta da tecnologia, atualmente cursando Análise e
            Desenvolvimento de Sistemas no SENAI. Busco criar soluções
            inovadoras que impulsionam o crescimento dos negócios. Minha
            fluência em inglês me permite colaborar efetivamente em ambientes
            globais e multiculturais. Estou constantemente aprimorando minhas
            habilidades através de projetos pessoais e colaborativos, onde
            aplico minha capacidade analítica e de resolução de problemas para
            criar soluções eficientes e escaláveis. Vamos conectar e explorar
            como posso agregar valor à sua equipe ou projeto!
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              Veja meu Trabalho
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
