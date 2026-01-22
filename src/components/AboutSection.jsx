import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
    return (
      <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Sobre <span className="text-primary"> Mim </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">
                Desenvolvedor Web Apaixonado & Criador Tech
              </h3>

              <p className="text-muted-foreground">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptatum nobis error enim repellendus. Facere sint inventore
                placeat laborum quaerat ut, tempore voluptatibus aut ratione ea,
                voluptate, aspernatur distinctio odio at.
              </p>

              <p className="text-muted-foreground">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptatum nobis error enim repellendus. Facere sint inventore
                placeat laborum quaerat ut, tempore voluptatibus aut ratione ea,
                voluptate, aspernatur distinctio odio at.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                <a href="#contact" className="cosmic-button">
                  Entrar em Contato
                </a>

                <a
                  href="/curriculo.pdf"
                  download="Curriculo_Matheus_Alves.pdf"
                  className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                >
                  Baixar Currículo
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">
                      {" "}
                       Desenvolvedor Web
                    </h4>
                    <p className="text-muted-foreground">
                      Criando websites responsivos e aplicações com frameworks
                      modernos
                    </p>
                  </div>
                </div>
              </div>
              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">UI/UX Design</h4>
                    <p className="text-muted-foreground">
                      Desenhando interfaces de usuário intuitivas e experiências de usuário fluídas.
                    </p>
                  </div>
                </div>
              </div>
              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>

                  <div className="text-left">
                    <h4 className="font-semibold text-lg">
                      Manejamento de Projetos
                    </h4>
                    <p className="text-muted-foreground">
                      Liderando projetos de concepção para conclusão com metodologias ágeis
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}