import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const { t, toggle } = useLanguage();

  return (
    <nav className="sticky top-0 z-50 border-b bg-card/90 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <span className="text-2xl">☪</span>
          <h1 className="font-display text-2xl font-bold text-primary">
            {t.navTitle}
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <p className="hidden font-body text-sm text-muted-foreground sm:block">
            {t.navSubtitle}
          </p>
          <Button variant="outline" size="sm" onClick={toggle}>
            {t.langToggle}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
