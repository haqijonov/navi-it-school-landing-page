import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="bg-primary py-12">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img className="w-[120px]" src="/white-logo.png" alt="logo" />
          </div>

          {/* License */}
          {/* <div className="flex items-center gap-4">
            <div className="bg-primary-foreground/10 rounded-lg p-3">
              <img
                src="/education-license-certificate-badge.jpg"
                alt="Licensed Education Provider"
                className="h-12 w-auto"
              />
            </div>
            <div className="text-primary-foreground/80 text-sm">
              <p>Licensed Education Provider</p>
              <p>Est. 2026</p>
            </div>
          </div> */}

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-primary-foreground/80 text-sm">
              © {new Date().getFullYear()} NAVI
            </p>
            <div className="flex gap-4 mt-2 justify-center md:justify-end">
              <a
                href="#"
                className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
