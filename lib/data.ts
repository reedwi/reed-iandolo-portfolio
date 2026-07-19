export const contact = {
  email: "riandolo103@gmail.com",
  linkedin: "https://www.linkedin.com/in/reed-iandolo-341623163/",
  github: "https://github.com/reedwi",
  substack:
    "https://substack.com/@riandolo?r=1mjadv&utm_campaign=profile&utm_medium=profile-page",
  resume: "/reed_iandolo_resume.pdf",
} as const;

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
