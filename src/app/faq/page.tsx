import { Accordion, AccordionItem } from "@/components/ui/accordion";
import Link from "next/link";

const faqs = [
  {
    question: "How long does film development take?",
    answer:
      "Standard turnaround for C-41 and B&W development is 3-5 business days. E-6 slide film takes 5-7 business days. Rush processing is available upon request for an additional fee.",
  },
  {
    question: "What file formats do you accept for printing?",
    answer:
      "We accept TIFF, PSD, and high-resolution JPEG files. For best results, we recommend TIFF files in Adobe RGB or sRGB color space at 300 DPI at your desired print size. We can also work with RAW files upon request.",
  },
  {
    question: "Do you offer color correction services?",
    answer:
      "Yes! Basic color correction is included with all our scanning services. For prints, we offer soft proofing and can make adjustments before final output. For more extensive retouching or color grading, we offer these services at an hourly rate.",
  },
  {
    question: "Can I mail in my film for development?",
    answer:
      "Absolutely. We accept mail-in orders from anywhere in the country. Contact us for shipping instructions and we'll send you our prepaid shipping label if you're a returning customer. Make sure to pack your film securely and include a return shipping address.",
  },
  {
    question: "What paper types do you offer for printing?",
    answer:
      "We stock a variety of fine art papers including Hahnemühle Photo Rag, Canson Platine, Epson Hot Press Bright, and several others. We can also order specialty papers upon request. If you're unsure which paper is right for your project, we're happy to provide samples and recommendations.",
  },
  {
    question: "Do you offer bulk or wholesale pricing?",
    answer:
      "Yes, we offer discounted rates for bulk orders and ongoing projects. If you're a professional photographer or gallery with regular printing needs, contact us to discuss a custom pricing arrangement.",
  },
  {
    question: "How should I store my negatives and prints?",
    answer:
      "Negatives should be stored in archival sleeves in a cool, dry environment away from direct light. Prints should be stored flat or in archival portfolio boxes, also away from direct sunlight. For displayed prints, we recommend using UV-protective glass and avoiding humid locations.",
  },
  {
    question: "What's the maximum print size you can produce?",
    answer:
      "Our large-format printers can produce prints up to 44 inches wide with virtually unlimited length. For most projects, we recommend prints up to 40×60 inches for optimal quality. Larger installations and murals can be produced as tiled panels.",
  },
  {
    question: "Are you looking for Summer internship opportunities?",
    answer:
      "Yes, I thought you'd never ask! I'm actively seeking summer internship positions where I can apply my passion for photography, printing, and creative technology.",
  },
  {
    question: "Do you develop disposable cameras?",
    answer:
      "Yes! We can develop film from disposable cameras. Just bring or mail us the entire camera, and we'll take care of the rest. Standard C-41 processing rates apply.",
  },
];

export default function FAQPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-card" />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
            Help Center
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
            Got questions? We've got answers. If you can't find what you're
            looking for, don't hesitate to reach out directly.
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-16 bg-card">
        <div className="max-w-3xl mx-auto px-6">
          <Accordion>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} title={faq.question}>
                {faq.question ===
                "Are you looking for Summer internship opportunities?" ? (
                  <p>
                    Yes, I thought you'd never ask! I'm actively seeking summer
                    internship positions where I can apply my passion for
                    photography, printing, and creative technology.{" "}
                    <Link
                      href="/cv"
                      className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
                    >
                      Check out my CV
                    </Link>
                    .
                  </p>
                ) : (
                  <p>{faq.answer}</p>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Still have questions */}
      <section className="py-24">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">
            Still have questions?
          </h2>
          <p className="text-muted-foreground mb-8">
            We're here to help. Reach out and we'll get back to you as soon as
            possible.
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
  );
}
