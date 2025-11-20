import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
              <Shield className="h-5 w-5 text-primary" />
            </div>
            <span className="text-xl font-bold text-foreground">ONIL</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Início
            </a>
            <a href="#servicos" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Recursos
            </a>
            <a href="#vantagens" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Sobre
            </a>
            <a href="#contato" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Contato
            </a>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden md:inline-flex text-sm">
              Login
            </Button>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground text-sm rounded-xl">
              Demonstração Gratuita
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
