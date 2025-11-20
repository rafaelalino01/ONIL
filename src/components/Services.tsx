import { Shield, Home, Heart, Briefcase, Sparkles, Clock } from "lucide-react";

const services = [
  {
    title: "Seguro Auto",
    description: "Proteção completa para seu veículo com coberturas personalizadas e assistência 24h em todo território nacional.",
    icon: Shield,
    badge: "Popular",
  },
  {
    title: "Seguro Residencial",
    description: "Segurança para seu lar contra imprevistos, danos e sinistros com cobertura abrangente.",
    icon: Home,
    badge: "Completo",
  },
  {
    title: "Seguro de Vida",
    description: "Tranquilidade para você e sua família com cobertura personalizada e assistência dedicada.",
    icon: Heart,
    badge: "Essencial",
  },
  {
    title: "Seguro Empresarial",
    description: "Soluções corporativas para proteger seu negócio, colaboradores e patrimônio empresarial.",
    icon: Briefcase,
    badge: "Business",
  },
  {
    title: "Análise com IA",
    description: "Inteligência artificial que analisa seu perfil e recomenda as melhores coberturas automaticamente.",
    icon: Sparkles,
    badge: "IA",
  },
  {
    title: "Suporte Instantâneo",
    description: "Atendimento 24/7 com resposta imediata através de múltiplos canais de comunicação.",
    icon: Clock,
    badge: "24/7",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-24 px-6 relative overflow-hidden bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Recursos que <span className="text-primary">transformam</span> sua proteção
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Uma suite completa de seguros com IA desenvolvida especificamente para você e sua família
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute top-6 right-6">
                  <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                    {service.badge}
                  </span>
                </div>
                
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
