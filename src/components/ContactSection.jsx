import { Linkedin, Mail, MapPin, Phone } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Entre em <span className="text-primary">Contato Comigo</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Tem algum projeto em mente ou gostaria de colaborar? Sinta-se livre
          para conversar comigo! Estou sempre disposto à novas oportunidades.
        </p>

        {/* Container centralizado único */}
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Informações de Contato
          </h3>

          <div className="space-y-6">
                {/* Email */}
            <div className="flex items-center justify-center space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-medium">Email</h4>
                <a
                  href="mailto:mateusalvesprofissional9@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm break-all"
                >
                  mateusalvesprofissional9@gmail.com
                </a>
              </div>
            </div>

            {/* Whatsapp */}
            <div className="flex items-center justify-center space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-medium">Whatsapp</h4>
                <a
                  href="https://wa.link/sytry8"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +55 (15) 99665-5692
                </a>
              </div>
            </div>

            {/* Localização */}
            <div className="flex items-center justify-center space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-medium">Localização</h4>
                <a className="text-muted-foreground hover:text-primary transition-colors">
                  Sorocaba, SP, Brasil
                </a>
              </div>
            </div>
          </div>

          {/* Conecte-se Comigo */}
          <div className="pt-8">
            <h4 className="font-medium text-2xl mb-4 text-center">Conecte-se Comigo</h4>
            <div className="flex justify-center">
              <a
                href="https://www.linkedin.com/in/matheus-alves-de-oliveira-souza-397308323/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary"
              >
                <Linkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};