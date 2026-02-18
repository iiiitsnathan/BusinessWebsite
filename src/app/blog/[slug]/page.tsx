import Link from "next/link"
import { ArrowLeft, Calendar, Clock } from "lucide-react"

// Sample blog post content
const blogContent = {
  "choosing-the-right-paper": {
    title: "Choosing the Right Paper for Your Prints",
    date: "February 10, 2026",
    readTime: "5 min read",
    category: "Printing",
    content: `
      <p>Choosing the right paper for your inkjet prints is one of the most important decisions you'll make in the printing process. The paper you select affects not just the appearance of your image, but its longevity and how viewers interact with your work.</p>

      <h2>Understanding Paper Types</h2>
      <p>Fine art papers generally fall into a few categories: cotton rag, alpha-cellulose, and bamboo or alternative fibers. Each has its own characteristics and is suited to different types of imagery.</p>

      <p><strong>Cotton Rag Papers</strong> are considered the gold standard for archival printing. Made from 100% cotton fibers, these papers are acid-free and will last for centuries when properly stored. They typically have a soft, luxurious feel and come in various textures from smooth to heavily textured.</p>

      <p><strong>Alpha-Cellulose Papers</strong> are made from wood pulp that has been processed to remove acids and impurities. These papers are more affordable than cotton rag while still offering excellent archival properties. They're a great choice for everyday printing and proofing.</p>

      <h2>Surface Finishes</h2>
      <p>Paper surface finish dramatically affects how your image appears. The three main categories are:</p>

      <ul>
        <li><strong>Glossy/Lustre:</strong> High reflectivity, deep blacks, vibrant colors. Best for color photography with lots of detail.</li>
        <li><strong>Matte:</strong> No glare, softer appearance, excellent for black and white or images meant for close viewing.</li>
        <li><strong>Textured:</strong> Adds tactile quality, can enhance artistic feel, works well for painterly images.</li>
      </ul>

      <h2>Weight and Thickness</h2>
      <p>Paper weight is measured in GSM (grams per square meter). For fine art printing, we typically recommend papers between 200-400 GSM. Heavier papers feel more substantial and are less prone to curling, making them ideal for unframed display.</p>

      <h2>Our Recommendations</h2>
      <p>For color photography, we love Canson Platine for its incredible color gamut and subtle sheen. For black and white work, Hahnemühle Photo Rag offers beautiful tonal range with a classic fine art feel. Come by the studio and we'll help you choose the perfect paper for your project.</p>
    `
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogContent[params.slug as keyof typeof blogContent]

  if (!post) {
    return (
      <main className="pt-20 min-h-screen">
        <section className="py-24">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h1 className="font-serif text-4xl mb-6">Post Not Found</h1>
            <p className="text-muted-foreground mb-8">
              This blog post doesn't exist yet. Check back soon!
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className="pt-20">
      {/* Header */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-card" />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <span className="bg-primary/90 text-primary-foreground text-xs uppercase tracking-wider px-3 py-1">
            {post.category}
          </span>

          <h1 className="font-serif text-4xl md:text-5xl mt-6 mb-6">{post.title}</h1>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-card">
        <div className="max-w-3xl mx-auto px-6">
          <article
            className="prose prose-invert prose-lg max-w-none
              prose-headings:font-serif prose-headings:font-normal
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
              prose-p:text-muted-foreground prose-p:leading-relaxed
              prose-strong:text-foreground prose-strong:font-medium
              prose-ul:text-muted-foreground
              prose-li:marker:text-primary"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-muted-foreground mb-6">
            Have questions about printing or paper selection?
          </p>
          <Link
            href="/#contact"
            className="inline-flex bg-primary text-primary-foreground px-8 py-4 text-sm uppercase tracking-wider hover:bg-primary/90 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  )
}
