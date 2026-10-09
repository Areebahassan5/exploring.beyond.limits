"use client";

import { useState } from "react";

type Article = {
  id: number;
  category: string;
  title: string;
  readTime: string;
  emoji: string;
  gradient: string;
  excerpt: string;
  body: string[];
  summary: string[];
  background: string[];
};

const articles: Article[] = [
  {
    id: 1,
    category: "Technology",
    title: "How Artificial Intelligence Is Changing the Classroom",
    readTime: "4 min read",
    emoji: "🤖",
    gradient: "from-[#1e3a8a] to-[#38bdf8]",
    excerpt:
      "Teachers and students are finding new ways to learn with smart tools, and new questions are appearing too.",
    body: [
      "Across the world, schools are testing tools that can explain a lesson in several ways, check homework and suggest what to practice next. For many students, this feels like having a patient tutor available at any time.",
      "Teachers say the biggest change is time. Tasks like marking simple quizzes can now be done faster, which leaves more space for talking with students and guiding them one to one.",
      "Still, experts remind us that these tools make mistakes and should not replace thinking. Schools are now teaching students how to ask good questions, check facts and use technology responsibly.",
    ],
    summary: [
      "Smart tools can explain lessons and suggest practice for each student.",
      "Teachers save time and can focus more on personal guidance.",
      "Students still need to check facts and think for themselves.",
    ],
    background: [
      "Computers have been used in education for decades, starting with simple programs that drilled spelling and maths. Over time, the internet made learning material available to almost anyone.",
      "The recent jump in what software can do with language and images is what started the current debate. Many schools are now writing their first clear rules about when and how such tools may be used.",
    ],
  },
  {
    id: 2,
    category: "Environment",
    title: "Why Healthy Oceans Matter for Everyone",
    readTime: "5 min read",
    emoji: "🌊",
    gradient: "from-[#0f766e] to-[#67e8f9]",
    excerpt:
      "Even people who live far from the coast depend on the sea for food, weather and the air they breathe.",
    body: [
      "The ocean covers most of our planet and plays a huge role in keeping the climate stable. It stores heat, moves warm and cold water around the globe and supports an enormous variety of life.",
      "Millions of families depend on fishing for food and income. When fish populations fall or the water becomes polluted, the effects travel quickly from the coast to local markets and dinner tables.",
      "Scientists say that simple steps can help, such as reducing single use plastic, protecting coastal habitats and supporting fishing that allows fish to recover.",
    ],
    summary: [
      "The ocean helps control climate and supports huge amounts of life.",
      "Pollution and overfishing affect both nature and people.",
      "Cutting plastic and protecting coasts can make a real difference.",
    ],
    background: [
      "For most of history, the sea seemed too large to be harmed by people. Modern fishing fleets, shipping and industry changed that, and scientists began warning about damage during the twentieth century.",
      "Today, many countries work together through agreements to protect marine areas, though experts say that progress needs to move faster.",
    ],
  },
  {
    id: 3,
    category: "Science",
    title: "The New Race to Explore Space",
    readTime: "4 min read",
    emoji: "🚀",
    gradient: "from-[#4c1d95] to-[#f472b6]",
    excerpt:
      "More countries and companies than ever are planning missions beyond Earth, and curiosity is driving them all.",
    body: [
      "Space exploration is no longer limited to a few big nations. Smaller countries, private companies and universities are now building satellites, rockets and instruments of their own.",
      "These projects help with everyday life as well. Satellites guide maps, forecast storms, support farming and connect people in remote areas to the internet.",
      "Looking ahead, scientists hope to learn more about our neighbouring planets and the origins of life. Every mission, whether big or small, adds a piece to the puzzle.",
    ],
    summary: [
      "Many more countries and companies are now taking part in space projects.",
      "Satellites already help with maps, weather and communication.",
      "Future missions aim to answer big questions about the universe.",
    ],
    background: [
      "The first satellite launched in the late 1950s began a period of fast progress, and humans reached the Moon within about ten years. After that, large missions became less frequent for a time.",
      "Cheaper launches and smaller satellites have opened the doors again, which is why so many new players are able to join today.",
    ],
  },
  {
    id: 4,
    category: "Economy",
    title: "The Rise of Remote Work Around the World",
    readTime: "4 min read",
    emoji: "💼",
    gradient: "from-[#92400e] to-[#fbbf24]",
    excerpt:
      "Working from home or from anywhere has changed how people live, travel and choose their careers.",
    body: [
      "Many companies now allow employees to work from home for at least part of the week. People save travel time, and some even move to smaller towns where living costs are lower.",
      "Employers have also discovered that they can hire talented people from any country. This opens new chances for workers who once had to leave their families to find good jobs.",
      "However, remote work has its challenges, including loneliness and difficulty switching off after work. Many teams are now trying a mix of home and office days.",
    ],
    summary: [
      "Remote work saves travel time and opens jobs across borders.",
      "Companies can hire talent from almost anywhere.",
      "Loneliness and work life balance remain challenges.",
    ],
    background: [
      "Working from a distance existed before, but only a small number of people did it. A sudden worldwide shift to home working a few years ago showed that many jobs could continue without a traditional office.",
      "Since then, businesses have been experimenting with flexible plans, and the debate about the best balance is still going on.",
    ],
  },
  {
    id: 5,
    category: "Health",
    title: "Why Sleep Is the Most Underrated Habit",
    readTime: "3 min read",
    emoji: "😴",
    gradient: "from-[#312e81] to-[#a5b4fc]",
    excerpt:
      "Good sleep helps memory, mood and energy, yet it is often the first thing we give up when life gets busy.",
    body: [
      "While we sleep, the brain organises what we learned during the day and the body repairs itself. A regular sleep routine can improve focus, mood and even how we handle stress.",
      "Doctors suggest simple habits such as going to bed at a similar time, keeping screens away before sleep and keeping the room dark and quiet.",
      "Small improvements matter. Even an extra half hour of rest each night can help many people feel clearer and more energetic.",
    ],
    summary: [
      "Sleep supports memory, mood and physical recovery.",
      "A regular routine and fewer screens at night help.",
      "Even a little more rest can improve how you feel.",
    ],
    background: [
      "For a long time, sleep was seen as simply a pause in activity. Research in recent decades has shown that the brain is very active at night and that rest is essential for good health.",
      "Modern life, with bright screens and late schedules, has made sleep problems more common, which is why health experts talk about it so often now.",
    ],
  },
  {
    id: 6,
    category: "Energy",
    title: "The Global Shift Towards Clean Energy",
    readTime: "5 min read",
    emoji: "☀️",
    gradient: "from-[#166534] to-[#bef264]",
    excerpt:
      "Sun, wind and water are becoming more important as countries look for cleaner power and lower emissions.",
    body: [
      "The move to clean energy is growing faster than many people expected. Solar panels, wind turbines and hydroelectric systems are now a big part of electricity generation in many regions.",
      "This change matters for more than climate. Cleaner energy can reduce air pollution, improve public health and make countries less dependent on imported fuels.",
      "There are still challenges, including storage, grid upgrades and the cost of building new infrastructure. But many experts believe the long term benefits are worth the transition.",
    ],
    summary: [
      "Renewable sources are becoming more important in power systems worldwide.",
      "Cleaner energy can improve health and reduce pollution.",
      "Storage and infrastructure remain major challenges.",
    ],
    background: [
      "For decades, coal, oil and gas dominated the global energy system, mainly because they were cheap and reliable. Environmental damage from burning fossil fuels became harder to ignore.",
      "In the last few years, falling costs for solar and wind, along with policy support, have helped accelerate the shift toward cleaner energy sources.",
    ],
  },
];

export default function Interactive() {
  const [selectedId, setSelectedId] = useState<number | null>(1);

  const selectedArticle = articles.find((article) => article.id === selectedId) ?? articles[0];

  return (
    <section className="min-h-screen bg-slate-950 text-white px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
            Spotlight
          </p>
          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
            Exploring Beyond Limits
          </h1>
        </header>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_1.8fr]">
          <aside className="space-y-4">
            {articles.map((article) => (
              <button
                key={article.id}
                type="button"
                onClick={() => setSelectedId(article.id)}
                className={`w-full rounded-2xl border p-4 text-left transition duration-200 ${
                  selectedId === article.id
                    ? "border-cyan-400 bg-slate-800 shadow-lg shadow-cyan-500/20"
                    : "border-slate-700 bg-slate-900/70 hover:border-slate-500 hover:bg-slate-900"
                }`}
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.2em] text-slate-300">
                    {article.category}
                  </span>
                  <span className="text-xs text-slate-400">{article.readTime}</span>
                </div>
                <div className="mb-3 flex items-center gap-3">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r ${article.gradient}`}
                  >
                    <span className="text-xl">{article.emoji}</span>
                  </div>
                  <div>
                    <p className="text-lg font-semibold leading-snug text-white">{article.title}</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-slate-300">{article.excerpt}</p>
              </button>
            ))}
          </aside>

          <main className="rounded-[2rem] border border-slate-700 bg-slate-900/80 p-5 shadow-2xl shadow-slate-950/50 sm:p-6 lg:p-8">
            <div className={`mb-6 rounded-3xl bg-gradient-to-r ${selectedArticle.gradient} p-[1px]`}>
              <div className="rounded-3xl bg-slate-950/90 px-5 py-6">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.25em] text-cyan-200">
                    {selectedArticle.category}
                  </span>
                  <span className="text-sm text-slate-300">{selectedArticle.readTime}</span>
                </div>
                <div className="mb-3 flex items-center gap-4">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r ${selectedArticle.gradient}`}>
                    <span className="text-2xl">{selectedArticle.emoji}</span>
                  </div>
                  <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
                    {selectedArticle.title}
                  </h2>
                </div>
                <p className="text-base leading-relaxed text-slate-200">{selectedArticle.excerpt}</p>
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
              <article className="space-y-5">
                <div>
                  <h3 className="mb-3 text-xl font-bold text-white">Story</h3>
                  {selectedArticle.body.map((paragraph, index) => (
                    <p key={index} className="mb-4 text-base leading-8 text-slate-200">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-bold text-white">Background</h3>
                  {selectedArticle.background.map((paragraph, index) => (
                    <p key={index} className="mb-4 text-base leading-8 text-slate-300">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>

              <aside className="space-y-5">
                <div className="rounded-2xl border border-slate-700 bg-slate-950/60 p-4">
                  <h3 className="mb-3 text-lg font-bold text-white">Key Takeaways</h3>
                  <ul className="space-y-3">
                    {selectedArticle.summary.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm leading-6 text-slate-200">
                        <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-cyan-400/20 text-xs font-bold text-cyan-300">
                          {index + 1}
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}
