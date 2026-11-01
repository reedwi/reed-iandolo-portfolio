---
title: A data warehouse isn't a big-company project anymore
summary: Getting your data out of your systems and into one place used to take months and a big budget. Now it can take a day and cost less than your coffee budget.
date: 2026-11-01
audience: general
draft: false
---

**The short version:** yes, a small organization can have its own data warehouse now. Tools like Fivetran, or a little custom code, can move data from systems like Salesforce into a Postgres database in a day, and a typical small setup costs under $50 a month. You don't need Snowflake or Databricks, and you get one place to power reporting, AI, and integrations.

For a long time, a data warehouse was a big-company thing. It took a lot of effort and a lot of strategy, and it could easily turn into a project that ran for months or years. Plenty of them still ended up not set up well. If you were a nonprofit, a small firm, or a growing business, it wasn't really on the table.

That's changed, and I don't think most smaller organizations realize how much.

## What changed

Two things happened at once.

First, the tools for moving data got much better. Services like Fivetran can pull data out of most common systems into a database with no code at all. You can get all of your Salesforce data into your own database in an afternoon. If you'd rather not pay for a service, open source tools like Airbyte, or a little custom code, can do the same job.

Second, AI made the technical work faster for people who already know what they're doing. Writing pipelines, designing tables, and building reports all take a fraction of the time they used to.

The result: I recently connected Salesforce, a project management tool, and call transcripts into one database in a day.

Getting the data out is only the first step, though. The real work is the strategy: what questions you need to answer, how the data should be structured, and what the numbers actually mean. That part depends on your systems and your people, and it takes as long as it takes. The difference is that the plumbing no longer eats the budget.

## You don't need big-company infrastructure

You also don't need Snowflake or Databricks. Those are built for far more data than most organizations have. A small organization can run its common data on Postgres, or even SQLite or DuckDB.

For most small teams, my default setup looks like this:

- **A managed Postgres database** to hold the data.
- **A small server running pipeline code** that pulls from each system on a schedule.
- **A reporting tool on top,** usually something open source like Metabase or Apache Superset. I've also been really liking Hex lately, because it connects to everything and is built with AI in mind.

All in, that's often **under $50 a month**. If you have more systems and some budget, a service like Fivetran saves time on the extraction side. Expect anywhere from a few hundred to a thousand dollars or more a month, depending on how much data you move.

Once it's set up well, it mostly runs itself.

## "Isn't this just one more system?"

It's a fair question, especially if your problem is already too many systems. But this is the system that fixes scattered data instead of adding to it. Your tools stay where the work happens. The database is the one place you go to answer questions across them.

It's often cheaper and faster than wiring every tool to every other tool. A pattern I see all the time: someone needs a report, so data gets synced into Salesforce just so it can be reported on there, even though nobody uses it in Salesforce. Over time that bloats the system and confuses the people who actually work in it. A database can answer those reporting needs without cluttering the system your team uses every day.

It's also a hub. Once the data is together, you can send useful results back out, like a score or a flag that shows up in Salesforce where your team will see it.

## When your current reporting is enough

To be clear, Salesforce reporting is strong, and it covers a lot of needs. I'd always push you to get the most out of it first. A shared database starts to earn its place when:

- **You need to combine a lot of data.** Reports that join many kinds of records together can hit the limits of built-in reporting.
- **More people need the numbers than have licenses.** A central reporting layer lets everyone see what they need without a seat in every system.
- **You want better visuals,** or reporting that spans more than one system.

## Fix your reporting before your systems are ready

Here's a shortcut I use a lot. Once data is in a database, you can clean it, categorize it, and combine it there, before your systems are set up the way you ultimately want them.

That matters because getting a core system right takes time. You have to decide the business rules: what fields mean, how records should be structured, how your team should work. Meanwhile, leadership still needs numbers. Working at the database level lets you fill reporting gaps now, and take some liberties with how things look, while you sort out the long-term setup. You get yourself set up for the long run and solve today's problems at the same time.

## Give AI one place to look

This is where it gets interesting. Everyone wants to point AI at their business data. The question is what you point it at.

Say you want the recent calls with every account that gave over a million dollars this year. The giving data lives in one system and the call transcripts live in another. You can connect an AI assistant to each system and let it figure things out, but it won't be consistent about how it goes looking, and it will be slow and expensive in the amount of work it has to do.

Or you can build a view in your database that already joins those things together. The AI reasons against that one view and knows exactly where to go. Same question, faster answer, and you can trust it to look in the same place every time. Well-structured data in one place beats asking AI to reason across eight systems.

## Security: you own it

Because this is core business data, I build it on infrastructure the organization owns. If you already have Azure or AWS, it goes there. If you don't, I'll set you up with your own account, so everything is yours. The major cloud platforms are secure by default.

From there, it's about giving people only the access they need. Not everyone gets the same password or admin rights. Each person and each tool gets access to the specific data and reports they need. As you grow, add compliance requirements, or handle more sensitive data, those permissions get tighter, and the tools support that.

## The real blocker is assuming it's out of reach

When this goes wrong, it's usually not the technology. It's that people assume it isn't for them. "Data warehouse" sounds very technical, like something you do once you're big.

But what's simple is changing fast. With the right person, a strong data foundation is within reach for small organizations: one place that powers your reporting, your AI, and your integrations. Access to this kind of technology isn't just for organizations with big budgets anymore.

If you'd rather not think about the upkeep, that's part of what I do. Setting it up well is the hard part. Looking after it costs very little.
