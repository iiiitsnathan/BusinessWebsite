import Link from "next/link";
import {
  Printer,
  Film,
  Scan,
  ArrowRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const services = [
  {
    icon: Printer,
    title: "Inkjet Printing",
    description:
      "Museum-quality prints on archival papers. From small editions to large-format pieces, we bring your digital files to life with exceptional color accuracy and longevity.",
    href: "/services#printing",
  },
  {
    icon: Film,
    title: "Film Development",
    description:
      "Professional C-41 and B&W processing for 35mm and 120 film. We handle your precious film with care, delivering consistent results every time.",
    href: "/services#development",
  },
  {
    icon: Scan,
    title: "Film Scanning",
    description:
      "High-resolution scanning up to 4000 DPI for 35mm and 120 film. Standard scans FREE with development. Get digital files that capture every detail.",
    href: "/services#scanning",
  },
];

export default function Home() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center film-grain">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <p className="text-primary uppercase tracking-[0.3em] text-sm mb-6 font-medium">
              Film Development & Printing Services
            </p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.9] mb-8">
              Where analog
              <br />
              <span className="text-primary">meets craft</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
              Professional inkjet printing, film development, and
              high-resolution scanning. We treat every frame with the care it
              deserves.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-sm uppercase tracking-wider hover:bg-primary/90 transition-colors"
              >
                Our Services
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 border border-border px-8 py-4 text-sm uppercase tracking-wider hover:border-primary hover:text-primary transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>

        {/* Film strip decoration */}
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-card to-transparent opacity-50">
          <div className="h-full flex flex-col justify-around py-8">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="mx-4 h-8 bg-muted/50 rounded-sm" />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-card">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
              What We Do
            </p>
            <h2 className="font-serif text-4xl md:text-5xl">Our Services</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group p-8 bg-background border border-border/50 hover:border-primary/50 transition-all duration-300"
              >
                <service.icon className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="font-serif text-2xl mb-4">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
                About Us
              </p>
              <h2 className="font-serif text-4xl md:text-5xl mb-6">
                A passion for the
                <br />
                <span className="text-primary">analog process</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We started this studio with a simple belief: that physical
                  prints and film photography deserve the same care and
                  attention as any fine art.
                </p>
                <p>
                  Every roll of film, every digital file, every print that
                  leaves our studio is handled with precision and passion. We
                  use professional-grade equipment and archival materials to
                  ensure your work stands the test of time.
                </p>
                <p>
                  Whether you're a professional photographer, an artist, or
                  someone who simply appreciates the beauty of a well-made
                  print, we're here to help bring your vision to life.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] bg-card border border-border/50 relative overflow-hidden">
                <div className="absolute inset-4 bg-gradient-to-br from-primary/20 via-muted to-primary/10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Film className="w-16 h-16 text-primary/50 mx-auto mb-4" />
                    <p className="text-muted-foreground text-sm uppercase tracking-wider">
                      Est. 2020
                    </p>
                  </div>
                </div>
              </div>
              {/* Decorative frame */}
              <div className="absolute -top-4 -right-4 w-full h-full border border-primary/30 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-card">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
              How It Works
            </p>
            <h2 className="font-serif text-4xl md:text-5xl">Simple Process</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Submit",
                desc: "Send us your film or digital files",
              },
              {
                step: "02",
                title: "Review",
                desc: "We assess and confirm specifications",
              },
              {
                step: "03",
                title: "Process",
                desc: "Expert handling of your work",
              },
              {
                step: "04",
                title: "Deliver",
                desc: "Pickup or shipping to your door",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="text-primary font-serif text-4xl mb-4">
                  {item.step}
                </div>
                <h3 className="font-serif text-xl mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-card to-background" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
              Get Started
            </p>
            <h2 className="font-serif text-4xl md:text-5xl">Contact Us</h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-card border border-border/50 p-8 md:p-12">
              <div className="space-y-8">
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2 text-center">
                    Email
                  </p>
                  <a
                    href="mailto:nma@bbns.org"
                    className="text-2xl text-primary hover:text-primary/80 transition-colors block text-center"
                  >
                    nma@bbns.org
                  </a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2 text-center">
                    Phone
                  </p>
                  <a
                    href="tel:6179913531"
                    className="text-2xl text-primary hover:text-primary/80 transition-colors block text-center"
                  >
                    617-991-3531
                  </a>
                </div>
                <div className="pt-6 border-t border-border/30 text-center">
                  <p className="text-sm text-muted-foreground">
                    Drop-off available in Brookline, MA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
