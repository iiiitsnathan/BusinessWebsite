import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

const blogPosts = [
  {
    slug: "choosing-the-right-paper",
    title: "Choosing the Right Paper for Your Prints",
    excerpt:
      "A comprehensive guide to selecting fine art papers for inkjet printing. Learn about texture, weight, and coating options to match your artistic vision.",
    date: "February 10, 2026",
    category: "Printing",
    readTime: "5 min read",
  },
  {
    slug: "film-photography-beginners",
    title: "Getting Started with Film Photography",
    excerpt:
      "New to shooting film? Here's everything you need to know about choosing your first camera, selecting film stocks, and understanding the basics.",
    date: "February 5, 2026",
    category: "Film",
    readTime: "8 min read",
  },
  {
    slug: "color-vs-bw-film",
    title: "Color vs Black & White: Choosing Your Film",
    excerpt:
      "Each format tells a different story. Explore the emotional and technical differences between color and black & white film photography.",
    date: "January 28, 2026",
    category: "Film",
    readTime: "6 min read",
  },
  {
    slug: "archival-printing-tips",
    title: "How to Make Your Prints Last 100+ Years",
    excerpt:
      "Discover the secrets to archival printing, from ink selection to storage conditions. Preserve your work for future generations.",
    date: "January 20, 2026",
    category: "Printing",
    readTime: "7 min read",
  },
  {
    slug: "scanning-workflow",
    title: "Our Scanning Workflow Explained",
    excerpt:
      "Take a behind-the-scenes look at how we scan your film. Learn about our equipment, color correction process, and quality control steps.",
    date: "January 12, 2026",
    category: "Scanning",
    readTime: "4 min read",
  },
  {
    slug: "push-pull-processing",
    title: "Understanding Push and Pull Processing",
    excerpt:
      "When and why to push or pull your film. A technical guide to adjusting development times for creative control over your images.",
    date: "January 5, 2026",
    category: "Development",
    readTime: "6 min read",
  },
];

export default function BlogPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-card" />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
            From the Studio
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl mb-6">
            Blog
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
            Insights, tutorials, and stories from the world of film photography
            and fine art printing. Learn something new or get inspired.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-card">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="group bg-background border border-border/50 hover:border-primary/30 transition-all duration-300"
              >
                {/* Placeholder image area */}
                <div className="aspect-[16/10] bg-gradient-to-br from-muted to-muted/50 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-muted-foreground/30 font-serif text-6xl">
                      {post.title.charAt(0)}
                    </span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary/90 text-primary-foreground text-xs uppercase tracking-wider px-3 py-1">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                    <Calendar className="w-3 h-3" />
                    <span>{post.date}</span>
                    <span className="text-border">|</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h2 className="font-serif text-xl mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-sm text-primary group-hover:gap-3 transition-all"
                  >
                    Read more <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">
            Stay in the loop
          </h2>
          <p className="text-muted-foreground mb-8">
            Get occasional updates on new blog posts, studio news, and film
            photography tips.
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-card border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
            />
            <button
              type="submit"
              className="bg-primary text-primary-foreground px-8 py-3 text-sm uppercase tracking-wider hover:bg-primary/90 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
