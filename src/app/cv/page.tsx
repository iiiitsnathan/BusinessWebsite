import Link from "next/link";
import { Mail, MapPin, Phone, Linkedin } from "lucide-react";

export default function CVPage() {
  return (
    <main className="pt-20 min-h-screen">
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="mb-12 pb-8 border-b border-border/50">
            <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
              Curriculum Vitae
            </p>
            <h1 className="font-serif text-5xl md:text-6xl mb-6">
              Nathan Y. Ma
            </h1>
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <a
                href="mailto:nma@bbns.org"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 text-primary" />
                nma@bbns.org
              </a>
              <span className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                617-991-3531
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                Brookline, MA
              </span>
              <a
                href="#"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Linkedin className="w-4 h-4 text-primary" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Education */}
          <div className="mb-12">
            <h2 className="font-serif text-2xl mb-6 text-primary">Education</h2>
            <div className="space-y-6">
              <div className="pl-4 border-l-2 border-primary/30">
                <h3 className="font-medium mb-1">
                  Buckingham Browne & Nichols School (BB&N)
                </h3>
                <p className="text-sm text-muted-foreground mb-1">
                  Cambridge, MA | Expected: 2027
                </p>
                <p className="text-sm">GPA: 3.91/4.00</p>
              </div>
              <div className="pl-4 border-l-2 border-border">
                <h3 className="font-medium mb-1">Additional Education</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Brown Pre-College - Microeconomics (Summer Program)</li>
                  <li>CTY - Advanced Chemistry</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Research Experience */}
          <div className="mb-12">
            <h2 className="font-serif text-2xl mb-6 text-primary">
              Research Experience
            </h2>
            <div className="space-y-8">
              <div className="pl-4 border-l-2 border-primary/30">
                <h3 className="font-medium mb-1">
                  Beth Israel Deaconess Medical Center (BIDMC)
                </h3>
                <p className="text-sm text-primary mb-2">
                  Student Researcher | Oct 2025 - Present
                </p>
                <p className="text-xs text-muted-foreground mb-2">
                  Advisor: Tyler Berzin, MD & John Anagnost (UCLA)
                </p>
                <p className="text-sm text-muted-foreground mb-2 italic">
                  Project: Factors Influencing the Adoption and Integration of
                  AI-Assisted Polyp Detection in Colonoscopy Across U.S
                  Healthcare Settings
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  <li>
                    Designed and conducted semi-structured interviews with
                    gastroenterologists and industry stakeholders on adoption of
                    AI polyp-detection systems
                  </li>
                  <li>
                    Recruited participants using purposive and snowball
                    sampling; collected, transcribed, and organized interview
                    data
                  </li>
                  <li>
                    Performed thematic coding to identify barriers and drivers;
                    developed codebook and cross-stakeholder comparisons
                  </li>
                  <li>Publication in progress</li>
                </ul>
              </div>
              <div className="pl-4 border-l-2 border-border">
                <h3 className="font-medium mb-1">
                  Massachusetts General Hospital (MGH) - Rhee Lab
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Lab Intern | Jun 2025 - Aug 2025
                </p>
                <p className="text-sm text-muted-foreground mb-2 italic">
                  Project: Protein Expression Post MI & Optimal Restructuring
                  Post MI
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  <li>
                    Supported ongoing wet-lab experiments in a collaborative
                    research environment
                  </li>
                  <li>
                    Worked with laboratory mice and assisted with standard
                    cellular biology lab workflows
                  </li>
                  <li>
                    Co-authored portions of a review article currently under
                    peer review
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Clinical Experience */}
          <div className="mb-12">
            <h2 className="font-serif text-2xl mb-6 text-primary">
              Clinical Experience
            </h2>
            <div className="pl-4 border-l-2 border-border">
              <h3 className="font-medium mb-1">
                Agress Summer Health Corps - BIDMC
              </h3>
              <p className="text-sm text-muted-foreground mb-2">
                Intern | July 2025 - Aug 2025
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>
                  Assisted healthcare professionals in the post-anesthesia care
                  unit (PACU), prioritizing patient comfort and safety
                </li>
              </ul>
            </div>
          </div>

          {/* Industry Experience */}
          <div className="mb-12">
            <h2 className="font-serif text-2xl mb-6 text-primary">
              Industry Experience
            </h2>
            <div className="pl-4 border-l-2 border-primary/30">
              <h3 className="font-medium mb-1">LLX Solutions</h3>
              <p className="text-sm text-primary mb-2">
                Statistical Programming Intern | Jun 2025 - Aug 2025
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>
                  Participated in a paid internship focused on statistical
                  programming and clinical trial exposure
                </li>
                <li>
                  Developed SAS programs, cleaned clinical datasets, conducted
                  quality control and created reproducible SAS macros
                </li>
                <li>
                  Familiarized with concepts in drug development, clinical trial
                  conduct, and good statistical practices
                </li>
              </ul>
            </div>
          </div>

          {/* Projects & Entrepreneurship */}
          <div className="mb-12">
            <h2 className="font-serif text-2xl mb-6 text-primary">
              Projects & Entrepreneurship
            </h2>
            <div className="space-y-8">
              <div className="pl-4 border-l-2 border-primary/30">
                <h3 className="font-medium mb-1">BottlePrint</h3>
                <p className="text-sm text-primary mb-2">
                  Co-Founder | Jan 2025 - Present
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  <li>
                    Launched a startup converting recycled plastic bottles into
                    sustainable 3D-printing filament
                  </li>
                  <li>
                    Built and maintained the website; organized collection and
                    production logistics; coordinated team operations
                  </li>
                </ul>
              </div>
              <div className="pl-4 border-l-2 border-border">
                <h3 className="font-medium mb-1">
                  Cost-Effective 3D Modular Airway Model for Fiberoptic
                  Intubation Training
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Designer | Oct 2023 - Apr 2024 | BIDMC Anesthesia Education
                  Lab
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  <li>
                    Designed first- and second-generation prototypes in
                    SolidWorks for intubation training
                  </li>
                  <li>
                    Project awarded a $10k SEAd Seed Grant supporting innovation
                    in anesthesia education
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Leadership & Involvement */}
          <div className="mb-12">
            <h2 className="font-serif text-2xl mb-6 text-primary">
              Leadership & Involvement
            </h2>
            <div className="space-y-8">
              <div className="pl-4 border-l-2 border-primary/30">
                <h3 className="font-medium mb-1">
                  BB&N Public Health & Healthcare Management Club
                </h3>
                <p className="text-sm text-primary mb-2">
                  Co-Founder | Sep 2025 - Present
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  <li>
                    Launched a student organization focused on public health,
                    epidemiology, and healthcare management
                  </li>
                  <li>
                    Organized 2+ guest speakers from academia and industry
                  </li>
                  <li>
                    Designed hands-on consulting-style case studies connecting
                    hospital operations, public health, and strategy
                  </li>
                </ul>
              </div>
              <div className="pl-4 border-l-2 border-border">
                <h3 className="font-medium mb-1">BB&N Investment Club</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Vice President | Mar 2025 - Present
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  <li>
                    Coordinated 4+ speaker events to strengthen members'
                    investing knowledge
                  </li>
                  <li>
                    Mentored students on stock pitches using the club's $120,000
                    student-managed fund
                  </li>
                  <li>
                    Supported financial literacy and workshop-style training
                  </li>
                </ul>
              </div>
              <div className="pl-4 border-l-2 border-border">
                <h3 className="font-medium mb-1">BB&N Peer Tutor Program</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Co-Chair | May 2025 - Present
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  <li>
                    Coordinated tutor matches and scheduling across subjects
                  </li>
                  <li>
                    Led overhaul of tutor training and quality control - 35%
                    tutee satisfaction increase
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Publications */}
          <div className="mb-12">
            <h2 className="font-serif text-2xl mb-6 text-primary">
              Publications & Manuscripts
            </h2>
            <div className="pl-4 border-l-2 border-border">
              <h3 className="font-medium mb-2">Manuscripts Under Review</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Zhou, C., <strong className="text-foreground">Ma, N.</strong>,
                Kim, M., Roh, K., Xiao, X., Zhang, Y., Khetarpal, S. A., Li, H.,
                Rhee, J. "The Lymphatic Endothelium: Gatekeepers of Immunity and
                Tolerance." <em>Cells (MDPI)</em>. Under Review, 2025.
              </p>
              <p className="text-xs text-muted-foreground">
                Contributions: Authored Sections 6-7 - "Emerging tools and
                models to study lymphatic endothelial cell-immune system
                interactions" and "Therapeutic implications and future
                directions."
              </p>
            </div>
          </div>

          {/* Awards */}
          <div className="mb-12">
            <h2 className="font-serif text-2xl mb-6 text-primary">
              Awards & Honors
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  award: "John Locke Essay Competition",
                  detail: "High Commendation (Top 3%)",
                  year: "2025",
                },
                {
                  award: "Scholastic Art & Writing Awards",
                  detail:
                    "2x Gold Key, 4x Silver Key, 6x Honorable Mention - Photography",
                  year: "2026",
                },
                {
                  award: "Toronto National Biology Competition",
                  detail: "Rank 47/2400 (Top 2%)",
                  year: "2025",
                },
                {
                  award: "British Biology Olympiad (BBO)",
                  detail: "Highly Commended",
                  year: "2025",
                },
                {
                  award: "USA Biology Olympiad (USABO)",
                  detail: "Honorable Mention",
                  year: "2025",
                },
                {
                  award: "UK Biology Olympiad (Intermediate)",
                  detail: "Gold 2x",
                  year: "2024/2025",
                },
                {
                  award: "President's Volunteer Service Award",
                  detail: "Gold, Silver, Bronze",
                  year: "2022-2024",
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-card border border-border/50 p-4">
                  <p className="font-medium text-sm mb-1">{item.award}</p>
                  <p className="text-xs text-muted-foreground">{item.detail}</p>
                  <p className="text-xs text-primary mt-1">{item.year}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="pt-8 border-t border-border/50 text-center">
            <p className="text-muted-foreground mb-6">
              Interested in connecting? I'd love to hear from you about
              internship opportunities.
            </p>
            <a
              href="mailto:nma@bbns.org"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-sm uppercase tracking-wider hover:bg-primary/90 transition-colors"
            >
              <Mail className="w-4 h-4" />
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
