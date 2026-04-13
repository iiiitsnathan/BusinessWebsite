import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border/30">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary/10 border border-primary/30 flex items-center justify-center">
                <span className="text-primary font-serif text-xl font-semibold">
                  R9
                </span>
              </div>
              <div>
                <span className="font-serif text-xl tracking-wide">Route9</span>
                <span className="block text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  Printing
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mt-4">
              Professional inkjet printing, film development, and scanning
              services. Bringing your analog and digital visions to life with
              precision and care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/services"
                  className="hover:text-primary transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-primary transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-primary transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href="mailto:nma@bbns.org"
                  className="hover:text-primary transition-colors"
                >
                  nma@bbns.org
                </a>
              </li>
              <li>Brookline, MA</li>
              <li className="text-xs">Drop-off available after email</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            2026 Route9 Printing. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <span>Crafted with care for film lovers</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
