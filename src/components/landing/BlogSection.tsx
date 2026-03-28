import { Link } from "react-router-dom";

const posts = [
  {
    id: 1,
    title: "Understanding the EU Battery Regulation: What Manufacturers Need to Know",
    href: "/resources",
    description:
      "A practical overview of the key obligations under Regulation 2023/1542 — from Battery Passports to recycled content targets — and what they mean for your business.",
    date: "Mar 16, 2025",
    category: { title: "Battery Regulation", color: "bg-primary/10 text-primary" },
    author: {
      name: "Synex Team",
      role: "Compliance Advisory",
      imageUrl: null,
    },
  },
  {
    id: 2,
    title: "ESPR Compliance: Digital Product Passports and What's Coming in 2026",
    href: "/resources",
    description:
      "The Ecodesign for Sustainable Products Regulation is reshaping how products are documented and traded in the EU. Here's what to prepare for.",
    date: "Feb 28, 2025",
    category: { title: "ESPR", color: "bg-accent text-accent-foreground" },
    author: {
      name: "Synex Team",
      role: "Regulatory Insights",
      imageUrl: null,
    },
  },
  {
    id: 3,
    title: "Carbon Footprint Declarations: A Step-by-Step Guide for Battery Producers",
    href: "/resources",
    description:
      "From data collection to calculation methodology — how to prepare your carbon footprint declaration in line with the EU's approved standards.",
    date: "Jan 15, 2025",
    category: { title: "Guides", color: "bg-secondary text-secondary-foreground" },
    author: {
      name: "Synex Team",
      role: "Technical Guides",
      imageUrl: null,
    },
  },
];

const BlogSection = () => (
  <section className="py-24 sm:py-32 bg-background">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:text-center">
        <p className="text-base font-semibold text-primary">From the blog</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-pretty">
          Latest Resources
        </h2>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          Learn how to grow your compliance practice with our expert advice.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 lg:mx-0 lg:mt-24 lg:max-w-none lg:grid-cols-3">
        {posts.map((post) => (
          <article key={post.id} className="flex flex-col items-start">
            <div className="flex items-center gap-x-4 text-xs">
              <time dateTime={post.date} className="text-muted-foreground">
                {post.date}
              </time>
              <span className={`relative z-10 rounded-full px-3 py-1.5 font-medium ${post.category.color}`}>
                {post.category.title}
              </span>
            </div>
            <div className="group relative">
              <h3 className="mt-3 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                <Link to={post.href}>
                  <span className="absolute inset-0" />
                  {post.title}
                </Link>
              </h3>
              <p className="mt-4 line-clamp-3 text-sm text-muted-foreground leading-relaxed">
                {post.description}
              </p>
            </div>
            <div className="relative mt-6 flex items-center gap-x-3">
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-xs font-bold text-primary">S</span>
              </div>
              <div className="text-sm">
                <p className="font-semibold text-foreground">{post.author.name}</p>
                <p className="text-muted-foreground">{post.author.role}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default BlogSection;
