import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-background">
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 backdrop-blur-sm border border-primary/20 rounded-3xl p-12 md:p-16 text-center space-y-8 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
          
          <div className="relative z-10 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Pronto para ter a melhor <span className="text-primary">proteção?</span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Fale com nossos especialistas e descubra o plano ideal para você
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-base px-8 group relative overflow-hidden rounded-xl"
                style={{ boxShadow: '0 0 40px hsl(270, 80%, 60%, 0.4)' }}
              >
                <span className="relative z-10">Solicitar Cotação</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform relative z-10" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-border/50 bg-background/50 backdrop-blur-sm hover:bg-background/80 text-foreground text-base px-8 rounded-xl"
              >
                📞 (11) 9999-9999
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
