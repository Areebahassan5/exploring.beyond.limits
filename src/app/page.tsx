import ArticleReader from "@/components/Interactive";

const SITE_NAME = "exploring.beyond.limits";

const motivations = [
  {
    title: "Curiosity Is a Superpower",
    text: "Every great discovery began with someone asking, why?",
  },
  {
    title: "Knowledge Sets You Free",
    text: "The more you understand the world, the more choices you have in it.",
  },
  {
    title: "Read a Little, Grow a Lot",
    text: "Ten minutes of reading each day adds up to a new mind each year.",
  },
  {
    title: "Question, Then Decide",
    text: "A smart reader looks at the facts, the story behind them, then forms an opinion.",
  },
  {
    title: "Limits Are Starting Points",
    text: "What seems impossible today is often tomorrow's ordinary news.",
  },
  {
    title: "Stories Build Understanding",
    text: "Knowing the background of a headline helps you see the whole picture.",
  },
  {
    title: "Learn From Every Corner",
    text: "Science, health, energy and economy: curiosity has no borders.",
  },
  {
    title: "Today Is a Good Day to Learn",
    text: "You do not need a perfect moment. Open one article and begin.",
  },
];

const stats = [
  { label: "Topics", value: "6+" },
  { label: "Summaries", value: "Every article" },
  { label: "Background stories", value: "Every article" },
];

export default function Home() {
  return (
    <main className="bg-[#f6f1e7] font-serif text-[#1a1a1a]">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b-2 border-[#1a1a1a] bg-[#f6f1e7]/95 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="text-xl font-bold tracking-wide md:text-2xl">
            exploring.<span className="text-[#9b1c1c]">beyond</span>.limits
          </a>
          <div className="hidden gap-8 text-sm font-semibold md:flex">
            <a href="#why" className="hover:text-[#9b1c1c]">Why Read</a>
            <a href="#articles" className="hover:text-[#9b1c1c]">Articles</a>
            <a href="#how" className="hover:text-[#9b1c1c]">How It Works</a>
          </div>
          <a
            href="#articles"
            className="rounded-full bg-[#9b1c1c] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#7a1515]"
          >
            Start Reading
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#9b1c1c]">
            The Daily Reader
          </p>
          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Read the News. <br />
            Know the <span className="text-[#9b1c1c]">Story</span> Behind It.
          </h1>
          <p className="mt-6 max-w-md text-lg text-[#6b6354]">
            Articles you can read in minutes, with a short summary and the
            background story so you really understand what is going on.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#articles"
              className="rounded-full bg-[#9b1c1c] px-8 py-3 font-semibold text-white transition hover:bg-[#7a1515]"
            >
              Read Articles
            </a>
            <a
              href="#how"
              className="rounded-full border-2 border-[#1a1a1a] px-8 py-3 font-semibold transition hover:bg-[#1a1a1a] hover:text-white"
            >
              How It Works
            </a>
          </div>
        </div>

        <div className="rounded-3xl border-2 border-[#1a1a1a] bg-[#faf6ec] p-6 shadow-[8px_8px_0_#1a1a1a]">
          <div className="border-b-2 border-[#1a1a1a] pb-3 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6b6354]">
              Top Stories Today
            </p>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-4">
            <div className="flex h-32 items-center justify-center rounded-xl bg-gradient-to-br from-[#1e3a8a] to-[#38bdf8] text-5xl">
              🤖
            </div>
            <div className="flex h-32 items-center justify-center rounded-xl bg-gradient-to-br from-[#0f766e] to-[#67e8f9] text-5xl">
              🌊
            </div>
            <div className="flex h-32 items-center justify-center rounded-xl bg-gradient-to-br from-[#4c1d95] to-[#f472b6] text-5xl">
              🚀
            </div>
            <div className="flex h-32 items-center justify-center rounded-xl bg-gradient-to-br from-[#166534] to-[#bef264] text-5xl">
              ☀️
            </div>
          </div>
          <p className="mt-5 text-center text-sm italic text-[#6b6354]">
            Technology · Environment · Science · Energy
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y-2 border-[#1a1a1a] bg-white">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-8 text-center sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-2xl font-bold text-[#9b1c1c]">{s.value}</p>
              <p className="text-sm text-[#6b6354]">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Motivation */}
      <section id="why" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          Why <span className="text-[#9b1c1c]">Exploring</span> Matters
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-[#6b6354]">
          A curious mind never runs out of new places to go.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {motivations.map((m, i) => (
            <div
              key={m.title}
              className="rounded-2xl border border-[#d9cfbc] bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#9b1c1c] font-bold text-white">
                {i + 1}
              </div>
              <h3 className="text-lg font-semibold">{m.title}</h3>
              <p className="mt-2 text-sm text-[#6b6354]">{m.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Articles */}
      <section id="articles" className="bg-[#faf6ec] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-bold md:text-4xl">
            Latest Articles
          </h2>
          <p className="mx-auto mt-3 mb-12 max-w-xl text-center text-[#6b6354]">
            Tap any article to read it, then switch to the summary or the
            background story.
          </p>
          <ArticleReader />
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          How It Works
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-[#d9cfbc] bg-white p-6 text-center">
            <p className="text-4xl">📰</p>
            <h3 className="mt-3 text-lg font-semibold">1. Read</h3>
            <p className="mt-2 text-sm text-[#6b6354]">
              Pick an article and read the full story in a few minutes.
            </p>
          </div>
          <div className="rounded-2xl border border-[#d9cfbc] bg-white p-6 text-center">
            <p className="text-4xl">⚡</p>
            <h3 className="mt-3 text-lg font-semibold">2. Summarise</h3>
            <p className="mt-2 text-sm text-[#6b6354]">
              In a hurry? Open the summary and get the key points quickly.
            </p>
          </div>
          <div className="rounded-2xl border border-[#d9cfbc] bg-white p-6 text-center">
            <p className="text-4xl">🔎</p>
            <h3 className="mt-3 text-lg font-semibold">3. Understand</h3>
            <p className="mt-2 text-sm text-[#6b6354]">
              Open the background story to see how the news came to be.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-4xl rounded-3xl bg-[#1a1a1a] px-6 py-14 text-center text-white">
          <h2 className="text-3xl font-bold md:text-4xl">
            Ready to explore beyond limits?
          </h2>
          <p className="mt-3 text-white/75">
            Your first article is just one tap away.
          </p>
          <a
            href="#articles"
            className="mt-8 inline-block rounded-full bg-[#9b1c1c] px-8 py-3 font-semibold text-white transition hover:bg-[#b82424]"
          >
            Start Reading
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-[#1a1a1a] py-8 text-center text-sm text-[#6b6354]">
        © 2026 {SITE_NAME}. All rights reserved.
      </footer>
    </main>
  );
}