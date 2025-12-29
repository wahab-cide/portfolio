/* eslint-disable react/no-unescaped-entities */
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Programming a Chess Engine: Understanding Chess Differently | Wahab Cide',
  description: 'How building a chess engine taught me more about chess than years of playing. Understanding chess engine theory versus playing real-life chess, and how quantifying the unquantifiable improved my gameplay.',
  openGraph: {
    title: 'Programming a Chess Engine: Understanding Chess Differently',
    description: 'How building a chess engine taught me more about chess than years of playing',
  },
};

export default function Article() {
  return (
    <article className="min-h-screen bg-black text-neutral-300">
      <div className="max-w-4xl mx-auto px-4 md:px-8 pt-32 pb-16">
        {/* Header */}
        <Link
          href="/"
          className="text-neutral-500 hover:text-neutral-300 transition-colors text-sm mb-8 inline-flex items-center gap-2 group"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:-translate-x-1 transition-transform"
          >
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back to home
        </Link>

        <header className="mb-16 border-l-2 border-blue-500/50 pl-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-snug">
            Programming a Chess Engine: <span className="text-blue-400">Understanding Chess Differently</span>
          </h1>
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12 rounded-full ring-2 ring-neutral-800 overflow-hidden flex-shrink-0">
              <Image
                src="/DSC03533.jpg"
                alt="Wahab Cide"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-neutral-500 text-sm">
              <p className="text-neutral-300 font-medium">Wahab Cide</p>
              <time className="text-neutral-500">Dec 2025 · 20 min read</time>
            </div>
          </div>
          <p className="text-neutral-400 mt-6 text-lg leading-relaxed">
            How building a chess engine taught me more about chess than years of playing—and why understanding
            the mathematics of chess, though different from gameplay, dramatically improved my practical understanding of the game.
          </p>
        </header>

        {/* Table of Contents */}
        <nav className="mb-16 border border-neutral-800 rounded-lg p-6 bg-neutral-950/50">
          <h2 className="text-lg font-medium text-white mb-4">Contents</h2>
          <ol className="space-y-2 text-sm text-neutral-400">
            <li><a href="#paradox" className="hover:text-white transition-colors">1. The Paradox of Building What You Don't Fully Master</a></li>
            <li><a href="#two-languages" className="hover:text-white transition-colors">2. Two Different Languages, Same Game</a></li>
            <li><a href="#teaching" className="hover:text-white transition-colors">3. Teaching a Computer to See</a></li>
            <li><a href="#pillars" className="hover:text-white transition-colors">4. The Three Pillars of Evaluation</a></li>
            <li><a href="#pawns" className="hover:text-white transition-colors">5. The Soul of Chess: Pawns</a></li>
            <li><a href="#meta-lesson" className="hover:text-white transition-colors">6. The Meta-Lesson: Quantifying the Unquantifiable</a></li>
            <li><a href="#difference" className="hover:text-white transition-colors">7. What Makes This Different from Playing</a></li>
            <li><a href="#discovery" className="hover:text-white transition-colors">8. The Joy of Discovery</a></li>
            <li><a href="#symbiotic" className="hover:text-white transition-colors">9. Building vs. Playing: A Symbiotic Relationship</a></li>
            <li><a href="#technical" className="hover:text-white transition-colors">10. The Technical Achievement</a></li>
            <li><a href="#lessons" className="hover:text-white transition-colors">11. Lessons for Chess Players</a></li>
            <li><a href="#conclusion" className="hover:text-white transition-colors">12. Conclusion</a></li>
          </ol>
        </nav>

        {/* Article Content */}
        <div className="prose prose-invert prose-neutral max-w-none">

          {/* The Paradox */}
          <section id="paradox" className="mb-16">
            <h2 className="text-2xl md:text-3xl font-light mb-6 border-l-2 border-blue-500/30 pl-6">
              <span className="text-blue-400">The Paradox of Building What You Don't Fully Master</span>
            </h2>
            <div className="text-neutral-400 leading-relaxed space-y-4">
              <p>
                Programming a chess engine has been a transformative experience. It's given me an opportunity to deepen my understanding
                of chess in ways that playing alone never could. First lesson I learned: <strong className="text-neutral-300">understanding
                chess engine theory is fundamentally different from playing real-life chess, yet building an engine dramatically improves
                your practical understanding of the game.</strong>
              </p>
            </div>
          </section>

          {/* Two Languages */}
          <section id="two-languages" className="mb-16">
            <h2 className="text-2xl md:text-3xl font-light mb-6 border-l-2 border-cyan-500/30 pl-6">
              <span className="text-cyan-400">Two Different Languages, Same Game</span>
            </h2>
            <div className="text-neutral-400 leading-relaxed space-y-4">
              <p>
                When you play chess, you think in patterns, plans, and intuition:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>"This pawn structure looks weak"</li>
                <li>"I need to castle queenside and launch a pawn storm"</li>
                <li>"That knight on e5 is perfectly placed"</li>
              </ul>
              <p>
                When you program a chess engine, you think in numbers, algorithms, and heuristics:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>"Doubled pawns: -20 centipawns"</li>
                <li>"Iterative deepening to depth 8 with alpha-beta pruning"</li>
                <li>"Knight on outpost: +30 centipawn bonus"</li>
              </ul>
              <p>
                <strong className="text-neutral-300">The mathematics isn't the same as the gameplay.</strong> A human grandmaster doesn't
                calculate "this position is +1.43 pawns better." They feel it, they see patterns, they understand it holistically.
                But here's what surprised me: <strong className="text-neutral-300">by forcing myself to quantify chess concepts, I understood
                them more deeply than ever before.</strong>
              </p>
            </div>
          </section>

          {/* Teaching a Computer */}
          <section id="teaching" className="mb-16">
            <h2 className="text-2xl md:text-3xl font-light mb-6 border-l-2 border-blue-500/30 pl-6">
              <span className="text-blue-400">Teaching a Computer to See</span>
            </h2>
            <div className="text-neutral-400 leading-relaxed space-y-4">
              <p>
                The first challenge in building an engine is answering a deceptively simple question:
              </p>
              <blockquote className="border-l-2 border-blue-500/50 pl-6 italic text-neutral-300 my-6">
                "Who is better, and by how much?"
              </blockquote>
              <p>
                Humans answer this intuitively. Computers need explicit instructions. Every concept you take for granted
                must be broken down into measurable components.
              </p>

              <h3 className="text-xl font-light text-white mb-4 mt-8">The Centipawn: Chess's Universal Currency</h3>
              <p>
                Chess engines measure everything in <strong className="text-neutral-300">centipawns</strong> (cp) — 1/100th of a pawn's value:
              </p>
              <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-6 my-6">
                <pre className="text-sm overflow-x-auto text-neutral-300">
{`+100 cp  = White is ahead by one pawn
-50 cp   = Black is ahead by half a pawn
+300 cp  = White is winning (3 pawn advantage)
±1000 cp = Overwhelming advantage
±100000  = Checkmate`}
                </pre>
              </div>
              <p>
                This forced precision changed how I view positions. A "slightly better" position isn't vague anymore—it's
                quantifiable, debuggable, improvable.
              </p>
            </div>
          </section>

          {/* Three Pillars */}
          <section id="pillars" className="mb-16">
            <h2 className="text-2xl md:text-3xl font-light mb-6 border-l-2 border-cyan-500/30 pl-6">
              <span className="text-cyan-400">The Three Pillars of Evaluation</span>
            </h2>
            <div className="text-neutral-400 leading-relaxed space-y-4">
              <p>
                Building an evaluation function taught me that chess breaks down into three categories:
              </p>

              <h3 className="text-xl font-light text-white mb-4 mt-8">1. Material (40-50% of evaluation)</h3>
              <p>The baseline. Simple, yet essential:</p>
              <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-6 my-6">
                <pre className="text-sm overflow-x-auto text-neutral-300">
{`Pawn:   100 cp (baseline)
Knight: 320 cp (~3 pawns)
Bishop: 330 cp (~3.3 pawns)
Rook:   500 cp (~5 pawns)
Queen:  900 cp (~9 pawns)
King:   20000 cp (infinite — losing it means game over)`}
                </pre>
              </div>
              <p>
                <strong className="text-neutral-300">What I learned:</strong> Even this "simple" concept has nuance. Why is a bishop
                worth 330 instead of 300? Why is a knight <em>slightly</em> less valuable? These aren't arbitrary—they emerge from
                decades of engine testing and millions of games. Understanding <em>why</em> these values work taught me to respect
                piece imbalances more in my own games.
              </p>

              <h3 className="text-xl font-light text-white mb-4 mt-8">2. Positional Factors (30-40% of evaluation)</h3>
              <p>This is where it gets interesting:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Pawn structure</li>
                <li>Piece placement (piece-square tables)</li>
                <li>King safety</li>
                <li>Piece mobility</li>
                <li>Control of the center</li>
                <li>Piece coordination</li>
              </ul>
              <p>
                <strong className="text-neutral-300">What I learned:</strong> Grandmasters <em>feel</em> these factors. Programming them
                made me <em>see</em> them. Now when I play, I unconsciously evaluate: "My doubled pawns are worth about -40 centipawns,
                but my bishop pair compensates for +50." This arithmetic feels unnatural—and yet, thinking this way improved my play.
              </p>

              <h3 className="text-xl font-light text-white mb-4 mt-8">3. Tactical Factors (10-20% of evaluation)</h3>
              <p>The dynamic elements:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Threats and counter-threats</li>
                <li>Pins, forks, skewers</li>
                <li>Discovered attacks</li>
                <li>Static Exchange Evaluation (SEE)</li>
              </ul>
              <p>
                <strong className="text-neutral-300">What I learned:</strong> Tactics aren't magic tricks—they're patterns your brain
                learns to recognize. Programming tactical detection made me a better tactician, not through calculation, but through
                <em>understanding the geometry</em> of piece interactions.
              </p>
            </div>
          </section>

          {/* Pawns */}
          <section id="pawns" className="mb-16">
            <h2 className="text-2xl md:text-3xl font-light mb-6 border-l-2 border-blue-500/30 pl-6">
              <span className="text-blue-400">The Soul of Chess: Pawns</span>
            </h2>
            <div className="text-neutral-400 leading-relaxed space-y-4">
              <p>Philidor said: <strong className="text-neutral-300">"Pawns are the soul of chess."</strong></p>
              <p>I never truly understood this until I programmed pawn structure evaluation.</p>

              <h3 className="text-xl font-light text-white mb-4 mt-8">Why Pawns Are Special</h3>
              <p>Pawns are unique in chess:</p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li><strong className="text-neutral-300">They cannot move backward</strong> — Every pawn move is a commitment</li>
                <li><strong className="text-neutral-300">They define the position</strong> — They determine where pieces can operate</li>
                <li><strong className="text-neutral-300">They create permanent weaknesses</strong> — A bad pawn structure haunts you forever</li>
                <li><strong className="text-neutral-300">They control space</strong> — They restrict your opponent's pieces</li>
                <li><strong className="text-neutral-300">They transform</strong> — They're the only pieces that can promote</li>
              </ol>
              <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-6 my-6">
                <p className="text-neutral-300 font-medium">The key principle I internalized:</p>
                <p className="mt-2">Pawn moves are irreversible decisions. You can reposition a knight in 4 moves. You can never undo pushing a pawn.</p>
              </div>
              <p>
                This changed my gameplay immediately. I became more deliberate with pawn moves, treating each one as a strategic commitment.
              </p>

              <h3 className="text-xl font-light text-white mb-4 mt-8">Doubled Pawns: The Obvious Weakness</h3>
              <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-6 my-6">
                <pre className="text-sm overflow-x-auto text-neutral-300 font-mono">
{`Bad structure:          Good structure:
. . . .                 . . . .
. P . .                 . . . .
. P . .                 . P . .
. . . .                 P . . .`}
                </pre>
              </div>
              <p><strong className="text-neutral-300">Why doubled pawns are bad:</strong></p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Both pawns on the same file = they control <em>fewer</em> squares together</li>
                <li>The front pawn blocks the rear one</li>
                <li>The rear pawn is difficult to defend</li>
                <li>Creates "holes" on adjacent files</li>
                <li>Less flexible in pawn endgames</li>
              </ul>
              <p>
                <strong className="text-neutral-300">But here's the subtlety:</strong> Sometimes doubled pawns are acceptable! If you get
                the bishop pair in return, an open file for your rook, or control of key central squares, it can be worth it.
              </p>
              <p>
                <strong className="text-neutral-300">Real-world impact:</strong> I stopped automatically fearing doubled pawns. I started
                asking: "What am I getting for this weakness?"
              </p>

              <h3 className="text-xl font-light text-white mb-4 mt-8">Passed Pawns: The Criminal That Must Be Stopped</h3>
              <p>Siegbert Tarrasch famously said:</p>
              <blockquote className="border-l-2 border-cyan-500/50 pl-6 italic text-neutral-300 my-6">
                "The passed pawn is a criminal that must be kept under lock and key."
              </blockquote>
              <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-6 my-6">
                <pre className="text-sm overflow-x-auto text-neutral-300 font-mono">
{`Unstoppable passed pawn:

. . . . . . . K
. . . . . . . .
. . P . . . . .  ← This pawn will queen!
. . . . . . . .
k . . . . . . .`}
                </pre>
              </div>
              <p>
                Programming the evaluation of passed pawns taught me something profound:{' '}
                <strong className="text-neutral-300">their value increases exponentially as they advance.</strong>
              </p>
              <p>Here's how my engine values them:</p>
              <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-6 my-6">
                <pre className="text-sm overflow-x-auto text-neutral-300">
{`Rank 7: +120 cp (one square from queening!)
Rank 6: +90 cp  (very dangerous)
Rank 5: +60 cp  (seriously threatening)
Rank 4: +40 cp  (starting to matter)
Rank 3: +30 cp  (long-term asset)
Rank 2: +30 cp  (far from promotion)`}
                </pre>
              </div>
              <p>
                Notice the non-linear progression? A passed pawn on the 7th rank is <em>four times</em> more valuable than one on the
                3rd rank. This isn't arbitrary—it reflects the <em>real threat level</em>.
              </p>
            </div>
          </section>

          {/* Meta-Lesson */}
          <section id="meta-lesson" className="mb-16">
            <h2 className="text-2xl md:text-3xl font-light mb-6 border-l-2 border-cyan-500/30 pl-6">
              <span className="text-cyan-400">The Meta-Lesson: Quantifying the Unquantifiable</span>
            </h2>
            <div className="text-neutral-400 leading-relaxed space-y-4">
              <p>Here's the profound thing about building a chess engine:</p>
              <p><strong className="text-neutral-300">You're forced to quantify concepts that feel unquantifiable.</strong></p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>How much is "good king safety" worth? (+50 cp? +100 cp?)</li>
                <li>When does a "slightly better" position become "winning"? (+200 cp? +300 cp?)</li>
                <li>How do you balance three minor pieces vs. a queen? (Queen = 900, three minors = 960, roughly equal)</li>
              </ul>
              <p>
                These questions have no perfect answer. But the <em>process</em> of trying to answer them—of testing, tuning, measuring—gave
                me a framework for thinking about chess that's both rigorous and flexible.
              </p>
            </div>
          </section>

          {/* What Makes This Different */}
          <section id="difference" className="mb-16">
            <h2 className="text-2xl md:text-3xl font-light mb-6 border-l-2 border-blue-500/30 pl-6">
              <span className="text-blue-400">What Makes This Different from Playing</span>
            </h2>
            <div className="text-neutral-400 leading-relaxed space-y-4">
              <p>When you play chess, you think holistically:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>"This position feels better for me"</li>
                <li>"I have more space"</li>
                <li>"My pieces are more active"</li>
              </ul>
              <p>When you program chess, you think reductively:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>"I'm ahead by +1.5 pawns"</li>
                <li>"My doubled pawns cost -40 cp, but my bishop pair gives +50 cp, net +10 cp"</li>
                <li>"His passed pawn is worth +90 cp, I need to blockade it or find equivalent compensation"</li>
              </ul>
              <p>
                <strong className="text-neutral-300">The paradox:</strong> This reductive, mathematical thinking{' '}
                <em>improved my holistic understanding</em>.
              </p>
              <p>Why? Because it forced me to:</p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li><strong className="text-neutral-300">Be specific</strong> — "Better king safety" became "castled king with intact pawn shield = +30 cp"</li>
                <li><strong className="text-neutral-300">Understand tradeoffs</strong> — "This weakness costs X, so I need Y compensation"</li>
                <li><strong className="text-neutral-300">Think systematically</strong> — "Evaluation = material + position + pawn structure + king safety"</li>
                <li><strong className="text-neutral-300">Test my assumptions</strong> — "I thought this was important, but testing shows it barely matters"</li>
              </ol>
            </div>
          </section>

          {/* Joy of Discovery */}
          <section id="discovery" className="mb-16">
            <h2 className="text-2xl md:text-3xl font-light mb-6 border-l-2 border-cyan-500/30 pl-6">
              <span className="text-cyan-400">The Joy of Discovery</span>
            </h2>
            <div className="text-neutral-400 leading-relaxed space-y-4">
              <p>Some discoveries were surprising:</p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-neutral-300 mb-2">Discovery 1: Passed Pawns on the 7th Rank</h3>
                  <p>They're <em>absurdly</em> strong. Before programming this, I underestimated them in my games. Now I respect them appropriately (and push them aggressively when I have them).</p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-neutral-300 mb-2">Discovery 2: Phase-Dependent King Safety</h3>
                  <p>King safety matters <em>enormously</em> in the middlegame but becomes irrelevant in the endgame. This seems obvious in hindsight, but programming phase-dependent evaluation made it concrete.</p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-neutral-300 mb-2">Discovery 3: Pawn Structure Impact</h3>
                  <p>Pawn structure evaluation adds ~80-100 ELO to engine strength. That's <em>huge</em> for such a conceptually simple addition. It validated what masters have said for centuries: <em>pawns are the soul of chess</em>.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Symbiotic Relationship */}
          <section id="symbiotic" className="mb-16">
            <h2 className="text-2xl md:text-3xl font-light mb-6 border-l-2 border-blue-500/30 pl-6">
              <span className="text-blue-400">Building vs. Playing: A Symbiotic Relationship</span>
            </h2>
            <div className="text-neutral-400 leading-relaxed space-y-4">
              <p>Here's what I've come to believe:</p>
              <p>
                <strong className="text-neutral-300">Building a chess engine doesn't make you play like a computer.</strong> Computers calculate millions of positions per second. Humans never will.
              </p>
              <p>
                <strong className="text-neutral-300">But building an engine makes you <em>think about chess</em> more clearly.</strong>
              </p>
              <p>It's like the difference between:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Speaking a language fluently (playing chess)</li>
                <li>Teaching that language to someone (programming chess)</li>
              </ul>
              <p>
                Teaching forces clarity. Programming forces precision. And precision, paradoxically, leads to deeper intuition.
              </p>
              <p>
                Now when I play, I still think like a human—in patterns, plans, and intuition. But my intuition is <em>sharper</em> because
                I've spent time quantifying it. I see doubled pawns and instinctively devalue my position. I see passed pawns and feel
                their danger proportional to their rank. I see pawn chains and immediately identify the base to attack.
              </p>
              <p>
                <strong className="text-neutral-300">The mathematics isn't the same as the gameplay—but understanding the mathematics improved my gameplay.</strong>
              </p>
            </div>
          </section>

          {/* Technical Achievement */}
          <section id="technical" className="mb-16">
            <h2 className="text-2xl md:text-3xl font-light mb-6 border-l-2 border-cyan-500/30 pl-6">
              <span className="text-cyan-400">The Technical Achievement</span>
            </h2>
            <div className="text-neutral-400 leading-relaxed space-y-4">
              <p>Let me share some concrete details about the implementation:</p>

              <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-6 my-6">
                <h3 className="text-lg font-medium text-white mb-3">Pawn Structure Features Implemented</h3>
                <ul className="space-y-2 text-sm">
                  <li><strong className="text-neutral-300">Doubled pawns:</strong> -20 cp penalty per doubled pawn</li>
                  <li><strong className="text-neutral-300">Isolated pawns:</strong> -15 cp penalty</li>
                  <li><strong className="text-neutral-300">Passed pawns:</strong> +30 cp base, +15 cp per rank advancement</li>
                  <li><strong className="text-neutral-300">Connected pawns:</strong> +5 cp bonus</li>
                  <li><strong className="text-neutral-300">Backward pawns:</strong> -10 cp penalty</li>
                  <li><strong className="text-neutral-300">Pawn chains:</strong> +8 cp per chain link</li>
                </ul>
              </div>

              <p>
                <strong className="text-neutral-300">Result:</strong> Adding pawn structure evaluation increased my engine's strength
                by approximately <strong className="text-white">+80-100 ELO points</strong>.
              </p>

              <p>
                That means my engine went from ~1800 ELO to ~1900 ELO just by understanding pawn structure better. If that's not
                validation of Philidor's quote ("Pawns are the soul of chess"), I don't know what is.
              </p>

              <h3 className="text-xl font-light text-white mb-4 mt-8">Opening Book Implementation</h3>
              <p>I also implemented an opening book system with 46 positions covering:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>1.e4 openings (Ruy Lopez, Sicilian, French, Italian, etc.)</li>
                <li>1.d4 openings (Queen's Gambit, King's Indian, Nimzo-Indian, etc.)</li>
                <li>Alternative openings (English, Reti)</li>
              </ul>

              <p>
                <strong className="text-neutral-300">Result:</strong> <strong className="text-white">+100-150 ELO gain</strong>. The
                engine now plays principled opening moves instantly and saves search time for complex middlegame positions.
              </p>

              <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-6 my-6">
                <h3 className="text-lg font-medium text-white mb-3">Current Engine Strength</h3>
                <p className="text-2xl font-bold text-blue-400">
                  ~2000-2050 ELO
                </p>
              </div>
            </div>
          </section>

          {/* Lessons */}
          <section id="lessons" className="mb-16">
            <h2 className="text-2xl md:text-3xl font-light mb-6 border-l-2 border-blue-500/30 pl-6">
              <span className="text-blue-400">Lessons for Chess Players</span>
            </h2>
            <div className="text-neutral-400 leading-relaxed space-y-4">
              <p>
                If you're a chess player (not a programmer), here's what building an engine taught me that you can apply directly:
              </p>

              <div className="space-y-4 mt-6">
                <div>
                  <h3 className="text-lg font-medium text-neutral-300 mb-2">1. Pawn Moves Are Commitments</h3>
                  <p>Every pawn move is irreversible. Think twice.</p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-neutral-300 mb-2">2. Weaknesses Need Compensation</h3>
                  <p>Doubled pawns aren't always bad—they're bad <em>if you're not getting something in return</em> (bishop pair, open files, etc.).</p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-neutral-300 mb-2">3. Passed Pawns Scale Exponentially</h3>
                  <p>A passed pawn on the 6th rank is 3x more dangerous than one on the 3rd rank. Respect this.</p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-neutral-300 mb-2">4. Attack the Base of Pawn Chains</h3>
                  <p>Don't bash your head against the chain's head. Find the base and undermine it.</p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-neutral-300 mb-2">5. Positions Have Time Horizons</h3>
                  <p>IQP positions are good in the middlegame, bad in the endgame. Rook endgames favor the side with better pawn structure. Think ahead to <em>which phase</em> the position will reach.</p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-neutral-300 mb-2">6. Quantify Your Thoughts</h3>
                  <p>Instead of "slightly better," try thinking "about a pawn better" or "significant advantage." It forces clarity.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section id="conclusion" className="mb-16">
            <h2 className="text-2xl md:text-3xl font-light mb-6 border-l-2 border-cyan-500/30 pl-6">
              <span className="text-cyan-400">Conclusion: Two Ways to Understand One Game</span>
            </h2>
            <div className="text-neutral-400 leading-relaxed space-y-4">
              <p>
                Chess is beautiful because it can be understood in multiple ways:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Aesthetically (Mikhail Tal's sacrificial brilliance)</li>
                <li>Logically (Anatoly Karpov's prophylactic perfection)</li>
                <li>Mathematically (modern engines' centipawn calculations)</li>
              </ul>
              <p>
                Building a chess engine didn't make me think like a computer. It made me think <em>more clearly</em> about chess.
                The mathematics of engines and the intuition of gameplay are different languages—but they describe the same beautiful game.
              </p>
              <p>
                And learning to translate between those languages has been one of the most rewarding intellectual experiences of my life.
              </p>
              <p>
                If you're interested in chess, I encourage you to try building an engine. Not because it will make you play like a computer,
                but because it will make you <em>understand</em> like a teacher.
              </p>
              <p>
                And there's no better way to learn than to teach.
              </p>

              <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-6 my-8">
                <h3 className="text-lg font-medium text-white mb-3">Technical Details</h3>
                <ul className="space-y-2 text-sm">
                  <li><span className="text-neutral-500">Engine:</span> Gotham</li>
                  <li><span className="text-neutral-500">Language:</span> C++</li>
                  <li><span className="text-neutral-500">Search:</span> Alpha-beta with iterative deepening, quiescence search, transposition tables</li>
                  <li><span className="text-neutral-500">Evaluation:</span> Material + piece-square tables + pawn structure</li>
                  <li><span className="text-neutral-500">Strength:</span> ~2000-2050 ELO</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="mt-20 pt-8 border-t border-neutral-800">
            <p className="text-neutral-500 text-sm">
              Written by <Link href="/" className="text-neutral-400 hover:text-white transition-colors">Wahab Cide</Link> • December 2025
            </p>
          </footer>
        </div>
      </div>
    </article>
  );
}