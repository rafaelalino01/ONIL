import { Shield, Zap, TrendingUp, Lock, Phone, Award } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Contratação Instantânea",
    description: "Aprove e contrate seu seguro em minutos com processo 100% digital e automatizado.",
  },
  {
    icon: TrendingUp,
    title: "Melhores Ofertas",
    description: "Comparamos automaticamente centenas de seguradoras para você ter o melhor preço.",
  },
  {
    icon: Lock,
    title: "Dados Seguros",
    description: "Criptografia avançada e proteção total das suas informações pessoais e financeiras.",
  },
  {
    icon: Phone,
    title: "Atendimento Premium",
    description: "Suporte dedicado por WhatsApp, telefone e chat com respostas em tempo real.",
  },
  {
    icon: Shield,
    title: "Cobertura Completa",
    description: "Proteção abrangente em todos os cenários com assistência 24 horas por dia.",
  },
  {
    icon: Award,
    title: "Nota 5 Estrelas",
    description: "Reconhecidos pela excelência no atendimento e satisfação dos nossos clientes.",
  },
];

const Benefits = () => {
  return (
    <section id="vantagens" className="py-24 px-6 bg-muted/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Por que escolher a <span className="text-accent">ONIL?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tecnologia avançada e atendimento humanizado para sua tranquilidade
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="text-center space-y-4 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex w-16 h-16 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20 group-hover:scale-110 group-hover:border-primary/40 transition-all duration-300"
                  style={{ boxShadow: '0 0 20px hsl(270, 80%, 60%, 0.2)' }}
                >
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
