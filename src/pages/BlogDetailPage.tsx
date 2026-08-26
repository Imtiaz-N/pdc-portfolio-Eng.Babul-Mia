import { motion } from "framer-motion";
import { Link, useRoute } from "wouter";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { blogPosts, type BlogBlock } from "@/data/blog";

function renderBlock(block: BlogBlock, i: number) {
  switch (block.type) {
    case "h2":
      return (
        <h2
          key={i}
          className="mt-12 border-l-2 border-gold pl-4 font-serif text-[32px] font-semibold leading-10 text-ink"
        >
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 key={i} className="mt-10 font-serif text-2xl font-semibold leading-8 text-ink">
          {block.text}
        </h3>
      );
    case "p":
      return (
        <p key={i} className="mt-5 font-sans text-lg leading-7 text-ink/75">
          {block.text}
        </p>
      );
    case "ol":
      return (
        <ol key={i} className="mt-5 space-y-2">
          {block.items.map((item, j) => (
            <li key={j} className="flex gap-3 font-sans text-lg leading-7 text-ink/75">
              <span className="shrink-0 font-semibold text-gold">{j + 1}.</span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      );
    case "ul":
      return (
        <ul key={i} className="mt-5 space-y-2">
          {block.items.map((item, j) => (
            <li key={j} className="flex gap-3 font-sans text-lg leading-7 text-ink/75">
              <span className="mt-3 h-1 w-1 shrink-0 rounded-full bg-gold" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
  }
}

export default function BlogDetailPage() {
  const [, params] = useRoute("/blog/:slug");
  const post = blogPosts.find((p) => p.slug === params?.slug);

  if (!post) {
    return (
      <div className="container mx-auto flex min-h-[50vh] flex-col items-center justify-center gap-6 px-6 text-center">
        <h1 className="font-serif text-[32px] font-semibold leading-10 text-ink">
          Article Not Found
        </h1>
        <Button
          asChild
          className="bg-gold font-sans text-sm font-semibold uppercase tracking-widest text-white hover:bg-gold/90"
        >
          <Link href="/blog">Back to Insights</Link>
        </Button>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-background pb-24"
    >
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative flex min-h-[52vh] items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover object-center"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/92 via-ink/60 to-ink/25" />
        </div>

        <div className="container relative z-10 mx-auto px-6 py-16 md:px-12 lg:px-16">
          <Link
            href="/blog"
            className="mb-6 inline-flex items-center gap-2 font-sans text-xs font-bold uppercase leading-4 tracking-[0.1em] text-white/70 transition-colors hover:text-gold"
          >
            <ArrowLeft className="h-3.5 w-3.5" strokeWidth={2} /> Back to Insights
          </Link>

          <span className="mb-4 inline-block bg-gold px-2.5 py-1 font-sans text-[10px] font-bold uppercase leading-4 tracking-[0.1em] text-white">
            {post.category}
          </span>

          <h1 className="max-w-4xl font-serif text-[32px] font-bold leading-10 tracking-[-0.02em] text-white md:text-[48px] md:leading-[56px]">
            {post.title}
          </h1>

          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 font-sans text-sm text-white/80">
            <span className="flex items-center gap-2">
              <User className="h-4 w-4 text-gold" strokeWidth={1.75} />
              {post.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-gold" strokeWidth={1.75} />
              {post.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-gold" strokeWidth={1.75} />
              {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* ── Article body ────────────────────────────────────────── */}
      <article className="container mx-auto max-w-4xl px-6 py-20 md:px-12">
        {post.content.map(renderBlock)}

        <div className="mt-14 flex flex-wrap gap-2 border-t border-[#D3DAEA] pt-8">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-sm border border-[#D3DAEA] px-3 py-1.5 font-sans text-xs font-medium text-ink/60"
            >
              {tag}
            </span>
          ))}
        </div>
      </article>
    </motion.div>
  );
}
