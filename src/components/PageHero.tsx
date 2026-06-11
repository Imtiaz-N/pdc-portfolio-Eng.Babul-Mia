import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle: string;
  image: string;
  imageAlt?: string;
  badge?: string;
}

export default function PageHero({ title, subtitle, image, imageAlt = "", badge }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden min-h-[46vh] flex items-end" data-testid="page-hero">
      {/* Background photo */}
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt={imageAlt || title}
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Left-heavy dark gradient so text is always readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/75 to-secondary/40" />
        {/* Bottom fade into page background */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Gold right-edge accent */}
      <div className="absolute right-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-transparent via-primary/70 to-transparent z-10" />

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl space-y-4">
          {badge && (
            <motion.div
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/15 px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-widest"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary inline-block" />
              {badge}
            </motion.div>
          )}

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.18 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.28 }}
            className="text-lg md:text-xl text-white/70 max-w-2xl font-light leading-relaxed"
          >
            {subtitle}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
