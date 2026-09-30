import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative min-h-[70vh] flex items-center bg-evergreen-deep overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-evergreen-deep/95 to-evergreen-deep" />
      <div className="relative container-luxe text-center py-24">
        <p className="kicker-light mb-6">Error 404</p>
        <h1 className="font-display text-5xl md:text-7xl font-medium text-ivory text-balance-luxe">
          This page has left the book
        </h1>
        <p className="mt-6 text-[16px] leading-relaxed text-ivory/65 font-light max-w-xl mx-auto">
          The address you followed does not exist, or the listing behind it found a buyer and moved on.
          The current portfolio is one click away.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <Link
            href="/properties"
            className="bg-brass text-evergreen-deep text-[13px] uppercase tracking-[0.2em] font-medium px-9 py-4 hover:bg-ivory transition-colors duration-300"
          >
            Browse Properties
          </Link>
          <Link
            href="/"
            className="border border-ivory/40 text-ivory text-[13px] uppercase tracking-[0.2em] font-medium px-9 py-4 hover:border-brass hover:text-brass-light transition-colors duration-300"
          >
            Back to the Homepage
          </Link>
        </div>
      </div>
    </section>
  );
}
