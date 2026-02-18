import { Printer, Film, Scan, Check } from "lucide-react"
import Link from "next/link"

const printingOptions = [
  { size: '8×10"', price: "$25" },
  { size: '11×14"', price: "$45" },
  { size: '16×20"', price: "$75" },
  { size: '20×24"', price: "$110" },
  { size: '24×36"', price: "$160" },
  { size: 'Custom sizes', price: "Quote" },
]

const filmTypes = [
  { type: "C-41 Color", turnaround: "3-5 days", price: "$12/roll" },
  { type: "B&W Standard", turnaround: "3-5 days", price: "$10/roll" },
  { type: "B&W Push/Pull", turnaround: "5-7 days", price: "$10/roll" },
]

const scanningOptions = [
  { format: "35mm", resolution: "Standard (included with dev)", price: "FREE" },
  { format: "35mm", resolution: "High-Res (4000 DPI)", price: "$18/roll" },
  { format: "120 Medium Format", resolution: "Standard (included with dev)", price: "FREE" },
  { format: "120 Medium Format", resolution: "High-Res (4000 DPI)", price: "$25/roll" },
  { format: "Mounted Slides", resolution: "Individual scans", price: "$2/slide" },
]

export default function ServicesPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-card" />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">What We Offer</p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl mb-6">Our Services</h1>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
            From inkjet printing to film development and scanning, we offer professional
            services tailored to photographers and artists who demand quality.
          </p>
        </div>
      </section>

      {/* Inkjet Printing */}
      <section id="printing" className="py-24 bg-card scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <Printer className="w-12 h-12 text-primary mb-6" />
              <h2 className="font-serif text-4xl md:text-5xl mb-6">Inkjet Printing</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We use professional-grade Epson printers with UltraChrome HDX pigment inks,
                delivering exceptional color accuracy, deep blacks, and prints that will
                last over 100 years when properly displayed.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "Archival pigment inks",
                  "Museum-quality papers",
                  "Color-managed workflow",
                  "Soft proofing available",
                  "Custom ICC profiles",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <h3 className="font-serif text-xl mb-4">Paper Options</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We stock a variety of fine art papers including Hahnemühle Photo Rag,
                Canson Platine, Epson Hot Press Bright, and more. Ask us about paper
                recommendations for your specific project.
              </p>
            </div>

            <div className="bg-background border border-border/50 p-8">
              <h3 className="font-serif text-2xl mb-6">Print Pricing</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Prices include printing on premium fine art paper. Custom sizes and
                bulk orders available upon request.
              </p>
              <div className="space-y-4">
                {printingOptions.map((option) => (
                  <div key={option.size} className="flex justify-between items-center py-3 border-b border-border/30">
                    <span>{option.size}</span>
                    <span className="text-primary font-medium">{option.price}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/#contact"
                className="block w-full mt-8 bg-primary text-primary-foreground px-6 py-4 text-sm uppercase tracking-wider text-center hover:bg-primary/90 transition-colors"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Film Development */}
      <section id="development" className="py-24 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="lg:order-2">
              <Film className="w-12 h-12 text-primary mb-6" />
              <h2 className="font-serif text-4xl md:text-5xl mb-6">Film Development</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We process C-41 color negative and black & white film (35mm and 120 formats)
                with care and consistency. Every roll is handled individually and developed
                fresh for optimal results.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "Fresh chemistry",
                  "Temperature-controlled processing",
                  "Push/pull processing available (no extra charge)",
                  "35mm and 120 formats",
                  "Hand inspection of every roll",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <h3 className="font-serif text-xl mb-4">Drop-off</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Contact us via email to arrange drop-off at our Brookline location.
                We'll provide the address and coordinate a convenient time.
              </p>
            </div>

            <div className="bg-card border border-border/50 p-8 lg:order-1">
              <h3 className="font-serif text-2xl mb-6">Development Pricing</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Development only. Standard resolution scanning included free!
              </p>
              <div className="space-y-4">
                {filmTypes.map((film, idx) => (
                  <div key={idx} className="py-3 border-b border-border/30">
                    <div className="flex justify-between items-center mb-1">
                      <span>{film.type}</span>
                      <span className="text-primary font-medium">{film.price}</span>
                    </div>
                    <span className="text-muted-foreground text-xs">{film.turnaround}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-primary/10 border border-primary/20">
                <p className="text-sm text-primary">
                  Push/pull processing included at no extra charge!
                </p>
              </div>
              <Link
                href="/#contact"
                className="block w-full mt-6 bg-primary text-primary-foreground px-6 py-4 text-sm uppercase tracking-wider text-center hover:bg-primary/90 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Film Scanning */}
      <section id="scanning" className="py-24 bg-card scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <Scan className="w-12 h-12 text-primary mb-6" />
              <h2 className="font-serif text-4xl md:text-5xl mb-6">Film Scanning</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                High-resolution scanning for 35mm and medium format film up to 4000 DPI.
                We capture every detail of your negatives and slides with professional
                equipment.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "Up to 4000 DPI resolution",
                  "Standard scans FREE with development",
                  "Color correction included",
                  "TIFF or JPEG delivery",
                  "Mounted slide scanning available",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <h3 className="font-serif text-xl mb-4">Formats Supported</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We scan 35mm and 120 medium format film. We also offer individual
                mounted slide scanning. Standard resolution is included free with
                development - upgrade to high-res 4000 DPI for larger prints.
              </p>
            </div>

            <div className="bg-background border border-border/50 p-8">
              <h3 className="font-serif text-2xl mb-6">Scanning Pricing</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Standard resolution scans are FREE with film development!
              </p>
              <div className="space-y-4">
                {scanningOptions.map((option, idx) => (
                  <div key={idx} className="py-3 border-b border-border/30">
                    <div className="flex justify-between items-center mb-1">
                      <span>{option.format}</span>
                      <span className={`font-medium ${option.price === "FREE" ? "text-green-500" : "text-primary"}`}>
                        {option.price}
                      </span>
                    </div>
                    <span className="text-muted-foreground text-xs">{option.resolution}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/#contact"
                className="block w-full mt-8 bg-primary text-primary-foreground px-6 py-4 text-sm uppercase tracking-wider text-center hover:bg-primary/90 transition-colors"
              >
                Request Scanning
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">Ready to get started?</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Whether you have a single roll of film or a large printing project,
            we're here to help bring your vision to life.
          </p>
          <Link
            href="/#contact"
            className="inline-flex bg-primary text-primary-foreground px-10 py-4 text-sm uppercase tracking-wider hover:bg-primary/90 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  )
}
