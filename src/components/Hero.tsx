import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with geometric elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background" />
        {/* Hexagonal pattern */}
        <div className="absolute top-20 right-20 w-32 h-32 border-2 border-primary/20 rotate-45 animate-pulse" style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }} />
        <div className="absolute bottom-40 left-20 w-24 h-24 border-2 border-accent/20 rotate-12 animate-pulse" style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)', animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/3 w-20 h-20 border border-primary/10 rotate-45" style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }} />
        
        {/* Gradient glow */}
        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 50% 50%, hsl(270, 80%, 60%, 0.1) 0%, transparent 50%)' }} />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">A plataforma inteligente de seguros</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
            Transforme sua{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              proteção
            </span>
            <br />
            com inteligência
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-light">
            Soluções automatizadas e personalizadas com a melhor experiência para você e sua família
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-base px-8 group relative overflow-hidden rounded-xl"
              style={{ boxShadow: '0 0 30px hsl(270, 80%, 60%, 0.3)' }}
            >
              <span className="relative z-10">Experimente Agora</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform relative z-10" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-border/50 bg-background/50 backdrop-blur-sm hover:bg-background/80 text-foreground text-base px-8 rounded-xl"
            >
              Solicitar Cotação
            </Button>
          </div>
          
          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 pt-16 max-w-4xl mx-auto">
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-left hover:border-primary/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Cobertura Total</h3>
              <p className="text-sm text-muted-foreground">Proteção completa para todos os aspectos da sua vida</p>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-left hover:border-primary/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <ArrowRight className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Processo Rápido</h3>
              <p className="text-sm text-muted-foreground">Contratação em minutos com tecnologia avançada</p>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-left hover:border-primary/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Suporte 24/7</h3>
              <p className="text-sm text-muted-foreground">Atendimento personalizado quando você precisar</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
