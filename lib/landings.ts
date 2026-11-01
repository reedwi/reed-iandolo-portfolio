// Audience landing pages. Each one renders through components/landing-page.tsx;
// the copy lives here so a page can be rewritten without touching layout.

export type Landing = {
  slug: string;
  nav: string; // short name used in the "Who I work with" links on /work
  blurb: string; // one line for those links
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: { lead: string; em: string; tail?: string };
  intro: string;
  vs: { thenLabel: string; then: readonly string[]; nowLabel: string; now: readonly string[] };
  capsHeading: string;
  capsIntro?: string;
  caps: readonly { title: string; body: string }[];
  why: { heading: { lead: string; em?: string; tail?: string }; body: readonly string[] };
  proofIds: readonly string[]; // ids from workProof in lib/data.ts
  // Optional overrides; pages without them use the shared /work steps and pricing line.
  steps?: readonly { n: string; title: string; body: string }[];
  pricingNote?: string;
  inviteLead: string;
  inviteRest: string;
};

export const landings = {
  salesforce: {
    slug: "salesforce",
    nav: "Nonprofits & associations on Salesforce",
    blurb: "Clean data, reporting you trust, and one view of every member and account.",
    metaTitle: "Salesforce for nonprofits and associations | Reed Iandolo",
    metaDescription:
      "A senior, hands-on Salesforce architect for nonprofits and associations: clean data, reliable reporting, and one view of every person, member, and account.",
    eyebrow: "Nonprofits & associations · Salesforce",
    title: { lead: "Get your Salesforce data right, then ", em: "see the whole picture", tail: "." },
    intro:
      "Most nonprofits and associations on Salesforce have the platform but not the picture. Data lives in too many places, reports don't match, and nobody fully trusts the numbers. Tell me your biggest issue, I'll review it, and you'll get a clear plan to fix it, carried out by someone who knows the platform and the data model.",
    vs: {
      thenLabel: "Where most orgs are",
      then: [
        "Duplicate records and data nobody trusts.",
        "Reports rebuilt by hand before every board meeting.",
        "A different contractor for every change, and none of them see the whole system.",
      ],
      nowLabel: "Where we get to",
      now: [
        "A data model that fits how your organization actually works.",
        "Dashboards that answer the question before someone asks it.",
        "One senior person who understands the whole system, and builds it.",
      ],
    },
    capsHeading: "What I take on",
    caps: [
      {
        title: "Data model and cleanup",
        body: "Members, donors, accounts, households, relationships. Structured to hold up as you grow, with the duplicates and dead fields cleared out.",
      },
      {
        title: "Reporting you can trust",
        body: "Reports and dashboards built on clean data, so the numbers match across teams and nobody rebuilds them in a spreadsheet.",
      },
      {
        title: "One view of every person",
        body: "Membership, giving, events, and engagement on one record, so staff stop hunting across systems.",
      },
      {
        title: "Migrations and integrations",
        body: "Moving off legacy systems and connecting the tools you keep, without losing your history.",
      },
      {
        title: "Automation",
        body: "Renewals, follow-ups, and handoffs that run on their own instead of living in someone's inbox.",
      },
      {
        title: "More from what you pay for",
        body: "Most orgs use a fraction of what Salesforce can do. I find the rest before anyone suggests buying another tool.",
      },
    ],
    why: {
      heading: { lead: "Senior help for ", em: "the same budget, or less", tail: "." },
      body: [
        "Most nonprofits run Salesforce with whoever is available: an admin, someone who inherited it on top of their real job, or a contractor working through tickets. They work hard, but the system rarely gets the technical depth or direction it needs, so problems pile up and the platform never quite delivers.",
        "For what you're spending now, or less, you get someone who sets the direction and does the work. I lead technology at a CRM consultancy and have led and worked on hundreds of CRM projects, so I know what works, what doesn't, and what a healthy system should look like. I hold a stack of Salesforce certifications too, though the experience is what counts. I'm as comfortable with your leadership as I am in your data, and if you have an admin, I work alongside them and help them grow.",
        "And honestly, I like this work. Nonprofits rarely attract the most technically capable people, which leaves good organizations held back by their systems. Closing that gap is good business, and it's one of the most direct ways I know to help a mission go further.",
      ],
    },
    proofIds: ["nonprofit", "startup"],
    steps: [
      {
        n: "01",
        title: "Name the problem",
        body: "Tell me the biggest issue with your Salesforce or your data. The report nobody trusts, the duplicates, the migration that keeps slipping.",
      },
      {
        n: "02",
        title: "Review",
        body: "I go through your org, your data, and how your team actually uses it, and find what's really causing the problem.",
      },
      {
        n: "03",
        title: "Plan",
        body: "You get a written plan: what to fix, in what order, what it takes, and what it's worth.",
      },
      {
        n: "04",
        title: "Fix",
        body: "I carry out the plan myself, and you see progress as each piece lands.",
      },
    ],
    pricingNote: "Pricing comes from the plan, so you know the scope and the cost before any work starts.",
    inviteLead: "Not sure where your data stands?",
    inviteRest: "That's a good first call. Bring the report nobody trusts.",
  },

  law: {
    slug: "law-firms",
    nav: "Small law firms",
    blurb: "Less admin and more time for clients, with technology fitted to how your firm already works.",
    metaTitle: "Technology for small law firms | Reed Iandolo",
    metaDescription:
      "Technology for small law firms that fits how you already work: less admin and more time for clients, on secure infrastructure your firm owns.",
    eyebrow: "Small law firms · Washington, DC",
    title: { lead: "Less time on the admin. ", em: "More time for your clients." },
    intro:
      "Small firms run on email, shared folders, and people remembering things. The work around the practice quietly eats hours that should go to clients. There's a better way: technology fitted to how your firm already works, inside the tools you use, on infrastructure your firm owns and controls.",
    vs: {
      thenLabel: "How it usually goes",
      then: [
        "Work held together by email, spreadsheets, and memory.",
        "New software everyone has to learn, with a vendor holding your client data.",
        "Hours of admin that never shows up on a bill.",
      ],
      nowLabel: "A better way",
      now: [
        "The routine work handled quietly in the background.",
        "Technology that fits how your firm already works, in the tools you use.",
        "More of the day spent with clients and on the work that matters.",
      ],
    },
    capsHeading: "Where it helps",
    capsIntro:
      "Every firm is different, so we start with where your time actually goes. A few common places:",
    caps: [
      {
        title: "Client intake",
        body: "Often the best place to start. Capture the details once, file them where they belong, and kick off the next step.",
      },
      {
        title: "The routine admin",
        body: "Documents, reminders, and the back-and-forth that fills the day, handled so it stops landing on your desk.",
      },
      {
        title: "Inside the tools you use",
        body: "Built into Outlook and your existing files, so there's nothing new to log into and nothing for staff to relearn.",
      },
      {
        title: "Your data, your infrastructure",
        body: "Client information stays in systems your firm owns and controls, not on another vendor's servers.",
      },
    ],
    why: {
      heading: { lead: "Fit the tech to the firm" },
      body: ["Most legal software asks you to move into its platform. I go the other way: start with how your firm already works, and fit the technology around it. You get the time back without handing your client data to someone else."],
    },
    proofIds: ["lawfirm"],
    inviteLead: "Curious what this could look like for your firm?",
    inviteRest: "Start with a 30-minute call about where your time goes today.",
  },

  business: {
    slug: "small-business",
    nav: "Owners and small teams",
    blurb: "Find the small things eating your week and solve them for good.",
    metaTitle: "Get your time back | Reed Iandolo",
    metaDescription:
      "For owners who are working in the business instead of on it: find the small, repeating time sinks and solve them systematically.",
    eyebrow: "Owners & small teams",
    title: { lead: "You started this to do the work. ", em: "Not everything around it." },
    intro:
      "Somewhere along the way the business started running you. Invoices, scheduling, follow-ups, chasing information across five tools. None of it is hard on its own, but together it's your whole week. I find those small, repeating time sinks and solve them for good.",
    vs: {
      thenLabel: "Working in the business",
      then: [
        "The same small tasks every day, by hand.",
        "Copying information between tools that don't talk.",
        "Evenings on admin instead of the work, or your life.",
      ],
      nowLabel: "Working on the business",
      now: [
        "The repeat work handled by systems, not by you.",
        "Your tools connected, so information moves on its own.",
        "Time back for the work you're actually good at.",
      ],
    },
    capsHeading: "What that looks like",
    capsIntro: "A few of the usual suspects. Every business has its own list.",
    caps: [
      {
        title: "Inquiries",
        body: "New leads land in one place and get a reply, even on the days you're heads down.",
      },
      {
        title: "Billing",
        body: "Quotes, invoices, and reminders that go out without you assembling them by hand.",
      },
      {
        title: "Scheduling and handoffs",
        body: "Booking, onboarding, and handoffs that don't take a dozen emails.",
      },
      {
        title: "Knowing your numbers",
        body: "A simple weekly view of how the business is doing, without pulling it together yourself.",
      },
    ],
    why: {
      heading: { lead: "Business sense and technical depth" },
      body: ["Plenty of people can automate a task. The hard part is knowing which tasks are worth it and building them so they hold up. I've spent my career on both sides: running teams and setting direction, and designing and building the systems underneath."],
    },
    proofIds: ["lawfirm", "nonprofit"],
    inviteLead: "Know exactly what's eating your week?",
    inviteRest: "Bring the list. If you don't have one yet, we'll make it on the call.",
  },
} as const satisfies Record<string, Landing>;

export const landingList: readonly Landing[] = [landings.salesforce, landings.law, landings.business];
