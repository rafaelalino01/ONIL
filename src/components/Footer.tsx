import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/50 py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <span className="text-xl font-bold text-foreground">ONIL</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed mb-6">
              A plataforma inteligente de seguros que combina tecnologia avançada com atendimento humanizado.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-card/50 border border-border/50 flex items-center justify-center hover:border-primary/50 transition-colors">
                <span className="text-lg">📘</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-card/50 border border-border/50 flex items-center justify-center hover:border-primary/50 transition-colors">
                <span className="text-lg">📷</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-card/50 border border-border/50 flex items-center justify-center hover:border-primary/50 transition-colors">
                <span className="text-lg">🐦</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Recursos</h3>
            <ul className="space-y-3">
              <li><a href="#servicos" className="text-sm text-muted-foreground hover:text-primary transition-colors">Seguros</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Análise com IA</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Suporte 24/7</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Documentação</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Empresa</h3>
            <ul className="space-y-3">
              <li><a href="#vantagens" className="text-sm text-muted-foreground hover:text-primary transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Carreiras</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Termos de Uso</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ONIL Seguros. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground">
            Feito com tecnologia e dedicação
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
