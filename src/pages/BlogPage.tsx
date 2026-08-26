import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import PageHero from "@/components/PageHero";
import { blogPosts } from "@/data/blog";

export default function BlogPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-background pb-24"
    >
      <PageHero
        badge="Knowledge Hub"
        title="Insights & Regulations"
        subtitle="Technical articles, code updates and engineering commentary from the PDC team — written for developers, landowners and fellow professionals."
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=85"
        imageAlt="Engineering drawings and documents"
      />

      <section className="container mx-auto px-6 pt-20 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -10, scale: 1.015 }}
              className="group overflow-hidden rounded-sm border border-[#D3DAEA] bg-white shadow-sm transition-shadow duration-300 hover:shadow-[0_18px_40px_rgba(0,0,0,0.14)]"
              data-testid={`card-blog-${post.slug}`}
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="relative h-[220px] w-full overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.08]"
                    loading="lazy"
                  />
                  <span className="absolute left-5 top-5 bg-gold px-2.5 py-1 font-sans text-[10px] font-bold uppercase leading-4 tracking-[0.1em] text-white">
                    {post.category}
                  </span>
                </div>

                <div className="p-7">
                  <div className="mb-3 flex flex-wrap items-center gap-4 font-sans text-[11px] font-semibold uppercase tracking-[0.1em] text-ink/50">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 text-gold" strokeWidth={1.75} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-gold" strokeWidth={1.75} />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="mb-3 font-serif text-2xl font-semibold leading-8 text-ink">
                    {post.title}
                  </h2>
                  <p className="mb-6 font-sans text-base leading-6 text-ink/70">{post.excerpt}</p>

                  <span className="inline-flex items-center gap-1 font-sans text-xs font-bold uppercase leading-4 tracking-[0.1em] text-gold transition-all group-hover:gap-2">
                    Read Article <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
