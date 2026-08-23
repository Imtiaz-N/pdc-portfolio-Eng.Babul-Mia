import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle: string;
  image: string;
  imageAlt?: string;
  badge?: string;
}

export default function PageHero({
  title,
  subtitle,
  image,
  imageAlt = "",
  badge,
}: PageHeroProps) {
  return (
    <section
      className="relative flex min-h-[46vh] items-end overflow-hidden"
      data-testid="page-hero"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt={imageAlt || title}
          className="absolute inset-0 h-full w-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.25)_50%,transparent_100%)]" />
      </div>

      <div className="absolute bottom-0 right-0 top-0 z-10 w-[3px] bg-gradient-to-b from-transparent via-primary/70 to-transparent" />

      <div className="container relative z-10 mx-auto px-8 py-20 md:px-16 md:py-28 lg:px-24">
        <div className="max-w-3xl space-y-5 pl-1 md:pl-4">
          {badge && (
            <motion.div
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary"
            >
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
              {badge}
            </motion.div>
          )}

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.18 }}
            className="font-serif text-4xl font-bold leading-tight tracking-[-0.02em] bg-[linear-gradient(135deg,#FFFFFF_0%,#F5E6C8_40%,#C9A66B_100%)] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] md:text-5xl lg:text-6xl"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.28 }}
            className="max-w-2xl font-sans text-lg font-light leading-relaxed text-[#E8E4DF] [text-shadow:0_1px_8px_rgba(0,0,0,0.5)] md:text-xl"
          >
            {subtitle}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
