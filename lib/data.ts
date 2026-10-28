export const contact = {
  email: "riandolo103@gmail.com",
  linkedin: "https://www.linkedin.com/in/reed-iandolo-341623163/",
  github: "https://github.com/reedwi",
  substack:
    "https://substack.com/@riandolo?r=1mjadv&utm_campaign=profile&utm_medium=profile-page",
  resume: "/reed_iandolo_resume.pdf",
  booking: "", // Calendly / Cal.com link; falls back to email until set
} as const;

export const bookingHref =
  contact.booking || `mailto:${contact.email}?subject=Intro%20call`;

export const capabilities = [
  {
    title: "Systems architecture",
    body: "Designing how the pieces fit together: CRM platforms, custom integrations, portals, UI extensions, coded actions.",
    ev: "The technical spine of client solutions.",
  },
  {
    title: "Framing hard problems",
    body: "Scoping aggressive, high-stakes migrations so they actually land.",
    ev: "I built the framework my team uses on enterprise deals.",
  },
  {
    title: "Leading builders",
    body: "Running pre-sales, solution engineering, and development teams, and moving them to AI-assisted delivery.",
    ev: "Same effort, sharper and more consistent output.",
  },
  {
    title: "Putting AI to work for real",
    body: "Not AI theater. Rolled Claude out org-wide and took daily use from ~50% to 90%+, then started embedding it into how we deliver.",
    ev: "Now a company growth vector.",
  },
  {
    title: "Building the missing piece",
    body: "Stood up an internal product team to build the tooling, skills, and plugins that fill the gaps standard SaaS leaves behind.",
    ev: "",
  },
  {
    title: "Strategy, not just tech",
    body: "On the exec leadership team, helping set company direction and shaping our AI service offerings.",
    ev: "Sustained YoY growth.",
  },
] as const;

export const cases = [
  {
    label: "If you're small",
    body: 'It’s the last thing you should touch. A free CRM already does the job, and your time and your Claude credits belong in your actual product. Saving a few hundred dollars a month sounds great until the "quick two-hour build" turns into days of real work to make something secure that a spreadsheet wasn’t already handling.',
  },
  {
    label: "If you're at scale",
    body: "The money looks more real, mid five or six figures a year. But now security is the whole game. Your internal systems need to be SOC 2 compliant to satisfy your own customer contracts, and that license is a rounding error next to a breach and the lawsuit behind it. The math quietly flips back.",
  },
] as const;

export const proof = [
  {
    tag: "Startup · product",
    strong: "Built a startup's Salesforce managed package.",
    rest: "The installable product their customers add to sync platform data in and out of Salesforce. Their actual product, not an internal tool, and they've kept building on it since.",
  },
  {
    tag: "In progress",
    strong: "Architecting a move off a legacy system into Salesforce.",
    rest: "Consulting-heavy discovery, then building the process to match. The switch saves multiple six figures a year in license costs, many times over the one-time build.",
  },
] as const;

export const oldWay = [
  "Buy another tool, or rebuild from scratch.",
  "Months of discovery before anything changes.",
  "One big plan that's stale by launch.",
] as const;

export const newWay = [
  "Get more from what you have. Build only what's missing.",
  "One conversation, then the work starts.",
  "The most important fix first, then the next.",
] as const;

export const steps = [
  {
    n: "01",
    title: "Talk",
    body: "A 30-minute call about what's slowing you down. No prep needed on your end.",
  },
  {
    n: "02",
    title: "Embed",
    body: "I get inside your systems and your team, and come back with a list of what's fixable and what each fix is worth.",
  },
  {
    n: "03",
    title: "Prioritize",
    body: "We rank the list together. It becomes the plan, and you can reorder it anytime.",
  },
  {
    n: "04",
    title: "Execute",
    body: "I work the list from the top, and keep adding to it as the business changes.",
  },
] as const;

export const workProof = [
  {
    tag: "Nonprofit · ongoing",
    strong: "Technical architect for a national workforce-training nonprofit.",
    rest: "Getting far more out of the platform they already pay for, consolidating systems to save six figures a year in licensing, and finding new parts of the business it can take on.",
  },
  {
    tag: "Startup · fractional",
    strong: "Built the first version of a startup's core product.",
    rest: "The app their customers install to sync their data with Salesforce. They've kept building on it since.",
  },
] as const;

export const tiers = [
  {
    name: "Advise",
    scope: "You build · I guide",
    body: "I own the priority list and the roadmap, review designs, and answer questions as they come up.",
    price: "$1,750",
  },
  {
    name: "Build",
    scope: "1 priority at a time",
    body: "Everything in Advise, plus I do the work, one priority at a time, with a weekly check-in.",
    price: "$3,500",
  },
  {
    name: "Lead",
    scope: "Up to 3 at a time",
    body: "Everything in Build, with up to three priorities moving at once. I act as your technical lead.",
    price: "$6,500",
  },
] as const;
