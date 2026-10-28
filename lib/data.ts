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

export const problems = [
  {
    title: "Tools that don't talk",
    body: "Someone re-keys the same data between systems every week, and the numbers still don't match.",
  },
  {
    title: "Half-used platforms",
    body: "You're paying for a platform your team only uses part of, and nobody's sure what it can really do.",
  },
  {
    title: "A backlog nobody owns",
    body: "The list of fixes keeps growing, and there's no one senior with the time to get to it.",
  },
  {
    title: "The expensive answer",
    body: "You've been told the fix is a six-figure add-on or a full rebuild.",
  },
] as const;

export const steps = [
  {
    n: "01",
    title: "Understand",
    body: "I start with the business: how work actually flows, where it breaks, and what that's costing you.",
  },
  {
    n: "02",
    title: "Push the platform",
    body: "Most teams use a fraction of what they already pay for. I take your core system as far as it can honestly go.",
  },
  {
    n: "03",
    title: "Build the 10%",
    body: "Then I design and build what lives beyond it: integrations, automations, internal tools, sometimes an AI feature that couldn't exist before.",
  },
  {
    n: "04",
    title: "Support",
    body: "I stay on as your fractional architect, so the system keeps up as the business changes.",
  },
] as const;

export const workProof = [
  {
    tag: "Startup · fractional",
    strong: "Built the first version of a startup's Salesforce managed package.",
    rest: "Came in as their fractional Salesforce architect to design and build the installable product their customers use to sync platform data in and out of Salesforce. It's their actual product, and they've kept building on it since.",
  },
  {
    tag: "Nonprofit · ongoing",
    strong: "Fractional Salesforce architect for a national workforce-training nonprofit.",
    rest: "Since early 2025: keeping program and instructor data aligned across Salesforce, a case-management system and an LMS, and building a repeatable process for billing discrepancies. Now architecting a move off a legacy system into Salesforce that saves multiple six figures a year in licensing.",
  },
] as const;

export const tiers = [
  {
    name: "Advisory",
    size: "~1 day / month",
    body: "A monthly roadmap session, async Q&A and design reviews. For teams with builders who need senior judgment.",
    price: "$1,750",
  },
  {
    name: "Fractional Architect",
    size: "~2 days / month",
    body: "Everything in Advisory, plus hands-on build and a weekly working session.",
    price: "$3,500",
  },
  {
    name: "Embedded",
    size: "~4 days / month",
    body: "Everything above, plus I own delivery end to end, with twice-weekly sessions.",
    price: "$6,500",
  },
] as const;
