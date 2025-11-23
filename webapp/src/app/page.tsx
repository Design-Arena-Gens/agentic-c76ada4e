import Link from "next/link";

export default function Home() {
  const stats = [
    { label: "Launches accelerated", value: "4,200+" },
    { label: "Average conversion lift", value: "38%" },
    { label: "Automation recipes", value: "65" },
  ];

  const features = [
    {
      title: "Blueprint Landing Pages",
      description:
        "Spin up conversion-ready pages in minutes with modular sections tuned for digital offers, courses, and downloads.",
      icon: "⚡️",
    },
    {
      title: "Integrated Payments",
      description:
        "Securely sell once or on subscription with instant checkout, upsell, and cart recovery flows built-in.",
      icon: "💳",
    },
    {
      title: "Automation Library",
      description:
        "Pair launches with plug-and-play email, CRM, and fulfillment automations that fire the moment a purchase lands.",
      icon: "🪄",
    },
  ];

  const workflow = [
    {
      title: "Define your offer",
      blurb:
        "Choose a pre-built digital product template or start from scratch with our guided copy prompts.",
    },
    {
      title: "Launch your hub",
      blurb:
        "Customize the brand layer, drop in media, and ship the entire site live with auto-hosted assets.",
    },
    {
      title: "Automate fulfillment",
      blurb:
        "Connect to your favorite tools and let Launchlane handle confirmations, delivery, and customer onboarding.",
    },
  ];

  const pricingTiers = [
    {
      name: "Creator",
      price: "$39",
      cadence: "per month",
      description:
        "Launch-ready stack for individual creators validating their next offer.",
      highlights: [
        "3 active landing hubs",
        "Stripe, LemonSqueezy, and PayPal integrations",
        "10 automation recipes",
        "Analytics pulse dashboard",
      ],
      ctaLabel: "Start 14-day trial",
      popular: false,
    },
    {
      name: "Studio",
      price: "$79",
      cadence: "per month",
      description:
        "For teams managing multiple funnels with collaborators and clients.",
      highlights: [
        "Unlimited landing hubs",
        "Collaborator seats & approval workflows",
        "Automation builder & webhook triggers",
        "Priority support + strategy reviews",
      ],
      ctaLabel: "Scale with Studio",
      popular: true,
    },
  ];

  const faqs = [
    {
      question: "What types of digital products can I sell?",
      answer:
        "Launchlane supports courses, coaching, memberships, SaaS add-ons, templates, audio packs, and any other downloadable or access-based product.",
    },
    {
      question: "Can I connect my existing email marketing tools?",
      answer:
        "Yes. Integrations include ConvertKit, Klaviyo, Mailchimp, HubSpot, and Zapier. Any workflow can be triggered through our automation builder.",
    },
    {
      question: "Do you take transaction fees?",
      answer:
        "We never add platform fees. You pay the standard processing fees for the payment gateway you connect.",
    },
    {
      question: "Can I import my current landing pages?",
      answer:
        "Upload sections as HTML or drop in design files. Launchlane converts layouts into editable modules with preserved styling tokens.",
    },
  ];

  const testimonials = [
    {
      quote:
        "We rebuilt our funnel in one weekend and doubled conversions without begging dev resources. Launchlane is now our go-to launch stack.",
      author: "Jamie Ortiz",
      role: "Founder, Notionverse Templates",
    },
    {
      quote:
        "The automation recipes are a game changer. Customers get instant access, and our team stays focused on new ideas instead of manual ops.",
      author: "Priya Mangal",
      role: "Growth Lead, HelloScribe",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.4),_transparent_55%),_radial-gradient(circle_at_bottom,_rgba(236,72,153,0.35),_transparent_60%)]" />
        <div className="mx-auto flex max-w-6xl flex-col gap-20 px-6 pb-24 pt-28 md:px-8 lg:pt-32">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-2xl">
                LL
              </span>
              Launchlane
            </Link>
            <div className="hidden items-center gap-8 text-sm font-medium md:flex">
              <Link href="#features" className="text-slate-200 hover:text-white">
                Platform
              </Link>
              <Link href="#workflow" className="text-slate-200 hover:text-white">
                Workflow
              </Link>
              <Link href="#pricing" className="text-slate-200 hover:text-white">
                Pricing
              </Link>
              <Link href="#faq" className="text-slate-200 hover:text-white">
                FAQ
              </Link>
              <Link
                href="#get-started"
                className="rounded-full bg-white px-5 py-2 text-slate-950 transition hover:bg-slate-200"
              >
                Get started
              </Link>
            </div>
          </nav>

          <div className="grid gap-12 lg:grid-cols-[2fr_1fr] lg:items-center">
            <div className="space-y-8">
              <p className="inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-sm text-slate-200 ring-1 ring-white/10 backdrop-blur">
                Launch digital products without the launch chaos
              </p>
              <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
                Your digital sales <span className="text-cyan-300">launchpad</span> for
                high-conversion releases and effortless fulfillment.
              </h1>
              <p className="max-w-2xl text-lg text-slate-200 md:text-xl">
                Launchlane bundles landing pages, payments, and delivery automation so creators can
                ship new offers in days, not months. Build once, sell everywhere, and let the system
                handle the busywork.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="#get-started"
                  className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-8 py-3 text-slate-950 font-semibold transition hover:bg-cyan-300"
                >
                  Start free trial
                </Link>
                <Link
                  href="#features"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-3 text-slate-50 transition hover:border-white hover:bg-white/10"
                >
                  Explore platform
                </Link>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-sm rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur">
              <div className="space-y-4">
                <div>
                  <h2 className="text-lg font-semibold text-white">Launch blueprint</h2>
                  <p className="text-sm text-slate-200">
                    Assemble page sections, choose a cart flow, and connect delivery automations in
                    a single canvas.
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-900/80 p-4">
                  <div className="flex items-center justify-between text-xs uppercase tracking-wide text-slate-400">
                    <span>Funnel runway</span>
                    <span>Live preview</span>
                  </div>
                  <div className="mt-4 space-y-3 text-sm">
                    <div className="flex items-center justify-between rounded-xl bg-slate-800/80 p-3">
                      <div>
                        <p className="font-semibold text-slate-100">Hero + Proof</p>
                        <p className="text-xs text-slate-400">High-impact above-the-fold section</p>
                      </div>
                      <span className="rounded-full bg-cyan-400/20 px-3 py-1 text-xs text-cyan-300">
                        92% score
                      </span>
                    </div>
                    <div className="flex items-center justify-between rounded-xl bg-slate-800/60 p-3">
                      <div>
                        <p className="font-semibold text-slate-100">Offer Stack</p>
                        <p className="text-xs text-slate-400">Value ladder with tier toggles</p>
                      </div>
                      <span className="rounded-full bg-rose-400/20 px-3 py-1 text-xs text-rose-300">
                        Needs CTA
                      </span>
                    </div>
                    <div className="flex items-center justify-between rounded-xl bg-slate-800/60 p-3">
                      <div>
                        <p className="font-semibold text-slate-100">Automation</p>
                        <p className="text-xs text-slate-400">Onboarding & delivery sequence</p>
                      </div>
                      <span className="rounded-full bg-emerald-400/20 px-3 py-1 text-xs text-emerald-300">
                        Ready
                      </span>
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-slate-200">
                  <p className="font-semibold text-white">Launch assist</p>
                  <p className="mt-2">
                    “Here’s a 5-day warmup sequence and fulfillment workflow tailored to your
                    digital course launch.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="border-t border-white/5 bg-slate-950">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 py-16 sm:grid-cols-3 md:px-8">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-3xl border border-white/5 bg-white/5 p-8">
              <p className="text-3xl font-semibold text-white">{stat.value}</p>
              <p className="mt-2 text-sm uppercase tracking-wide text-slate-300">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="features" className="border-t border-white/5 bg-slate-950">
        <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-24 md:px-8">
          <div className="space-y-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Platform
            </p>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              Everything you need to test, launch, and scale digital offers.
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-slate-200">
              Launchlane removes the friction between creative spark and revenue by tightly coupling
              design, payments, and automation with data-backed best practices.
            </p>
          </div>
          <div className="grid gap-10 md:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col gap-4 rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur"
              >
                <span className="text-3xl">{feature.icon}</span>
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                <p className="text-sm leading-6 text-slate-200">{feature.description}</p>
                <Link
                  href="#get-started"
                  className="text-sm font-semibold text-cyan-300 hover:text-cyan-200"
                >
                  Launch in a weekend →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-slate-950">
        <div className="mx-auto max-w-5xl space-y-12 px-6 py-24 md:px-8">
          <div className="rounded-3xl border border-cyan-400/30 bg-gradient-to-r from-cyan-500/20 via-transparent to-rose-500/20 px-10 py-12">
            <h3 className="text-2xl font-semibold text-white md:text-3xl">
              Digital Sale idea, strategy, launch—delivered in one kit.
            </h3>
            <p className="mt-4 max-w-3xl text-lg text-slate-200">
              Pick the playbook that matches your offer. Launchlane drafts your messaging, outlines
              your content drip, and aligns your sales assets with proven conversion frameworks so
              you can focus on high-leverage creative work.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3" id="workflow">
            {workflow.map((step, index) => (
              <div
                key={step.title}
                className="flex flex-col gap-4 rounded-3xl border border-white/5 bg-white/5 p-8"
              >
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">
                  Step {index + 1}
                </span>
                <h4 className="text-xl font-semibold text-white">{step.title}</h4>
                <p className="text-sm leading-6 text-slate-200">{step.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="border-t border-white/5 bg-slate-950">
        <div className="mx-auto max-w-5xl space-y-10 px-6 py-24 md:px-8">
          <div className="space-y-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
              Pricing
            </p>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              Ship your next digital launch with predictable costs.
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-200">
              Start for free, iterate fast, and upgrade when you are ready to scale your offer
              portfolio. Every plan includes instant hosting and unlimited traffic.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`flex flex-col gap-6 rounded-3xl border border-white/5 bg-white/5 p-10 ${
                  tier.popular ? "ring-2 ring-cyan-400" : ""
                }`}
              >
                {tier.popular && (
                  <span className="self-start rounded-full bg-cyan-400/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
                    Most loved
                  </span>
                )}
                <div>
                  <h3 className="text-2xl font-semibold text-white">{tier.name}</h3>
                  <p className="mt-2 text-sm text-slate-200">{tier.description}</p>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-semibold text-white">{tier.price}</span>
                  <span className="text-sm text-slate-300">{tier.cadence}</span>
                </div>
                <ul className="space-y-3 text-sm text-slate-200">
                  {tier.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-emerald-300" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="#get-started"
                  className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${
                    tier.popular
                      ? "bg-cyan-400 text-slate-950 hover:bg-cyan-300"
                      : "border border-white/20 text-white hover:border-white"
                  }`}
                >
                  {tier.ctaLabel}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-slate-950">
        <div className="mx-auto max-w-5xl space-y-12 px-6 py-24 md:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
                Social proof
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-white md:text-4xl">
                Creators launch faster, sell smarter, and automate more.
              </h2>
            </div>
            <Link
              href="#get-started"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 px-6 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              Join the launchlist
            </Link>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.author}
                className="flex flex-col gap-4 rounded-3xl border border-white/5 bg-white/5 p-8"
              >
                <p className="text-lg text-slate-100">“{testimonial.quote}”</p>
                <div className="text-sm text-slate-300">
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="border-t border-white/5 bg-slate-950">
        <div className="mx-auto max-w-4xl space-y-10 px-6 py-24 md:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-300">
              FAQ
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-white md:text-4xl">
              Launch clarity, answered upfront.
            </h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-3xl border border-white/5 bg-white/5 p-6"
              >
                <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                <p className="mt-2 text-sm text-slate-200">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="get-started"
        className="border-y border-white/5 bg-gradient-to-br from-cyan-500/30 via-slate-950 to-rose-500/30"
      >
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-20 text-center md:px-8">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            Launch your next digital offer with Launchlane today.
          </h2>
          <p className="max-w-3xl text-lg text-slate-100">
            Build your launch hub, connect payments, and automate fulfillment in one afternoon. Your
            first release goes live in minutes.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
            >
              Start 14-day trial
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              Talk to launch strategist
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 md:flex-row md:items-center md:justify-between md:px-8">
          <div className="flex items-center gap-3 text-sm text-slate-300">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-white/10 text-base font-semibold text-white">
              LL
            </span>
            Launchlane © {new Date().getFullYear()}
          </div>
          <div className="flex gap-6 text-sm text-slate-400">
            <Link href="#">Privacy</Link>
            <Link href="#">Terms</Link>
            <Link href="#">Support</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
