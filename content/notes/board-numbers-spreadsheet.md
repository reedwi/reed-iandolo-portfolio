---
title: Your board numbers come from a spreadsheet
summary: Why nonprofit reporting breaks, and how to get numbers you can trust by starting with the question, not the report.
date: 2026-11-01
audience: salesforce
draft: false
---

**The short version:** when a nonprofit's board numbers come from a spreadsheet, the reports usually aren't the problem. Either the data never makes it into Salesforce because the system is hard to use, or it's scattered across too many tools. Start with the one number leadership needs most, and work backward until Salesforce can answer it on its own.

It's the week before the board meeting. Someone exports a handful of Salesforce reports, pastes them into a spreadsheet, fixes what looks wrong, and sends a number that doesn't quite match what finance has. Everyone knows the process is shaky. Nobody has time to fix it.

Data is only one part of making a decision. But when you have no data you trust, you lose a big part of your leverage. You end up debating whose number is right instead of what to do about it.

## It's rarely the reports

When I look at an organization whose reporting is broken, the reports themselves are usually fine. The problem is upstream, and it tends to be one of two things.

**The data never makes it into the system.** Often Salesforce is set up reasonably well. If the data were in there, the reports would work. But the system is more complicated than it needs to be, the screens are hard to use, and the people entering data were never really trained on it. So they skip fields, keep their own spreadsheets, or enter things however makes sense to them that day. That isn't a people problem. It's a system that wasn't built around how people actually work.

**The data is spread across too many places.** Donations in one tool, events in another, membership in a third, and a few critical spreadsheets on someone's laptop. Some of it is connected, some of it isn't, and nobody is quite sure which. The most common thing I hear is "I don't know where to go to get an answer." That's almost always because the data is scattered, or it doesn't exist at all.

## Start with the question, not the report

The fix isn't to rebuild every report. It's to pick the number you actually need and work backward from it.

What's the one figure leadership asks about most? Active members, retention, revenue by program, donor growth. Start there and ask: what would it take for Salesforce to answer this one question, reliably, without anyone touching a spreadsheet?

Answering that one question forces every other decision. Where the data should come from. Who enters it, and when. Which systems need to talk to each other. Once one number works end to end, the rest tend to fall in line, because you've fixed the foundation they all share.

## A checklist for numbers you can trust

**1. Pick the number and define it.** Write a one-line definition and agree on it with finance. Does revenue mean pledges or payments? Is an "active member" someone who paid this year, or anyone not marked lapsed? If two people would answer differently, two reports will too.

**2. Trace it to one source.** Note exactly where the number comes from: which records, which fields, which filters. If it can be calculated two ways, pick one and retire the other.

**3. Watch how the data actually gets entered.** Sit with the people who enter it. What do they skip? What do they keep somewhere else? Where do they get stuck? Most data quality problems become obvious in an hour of watching.

**4. Make the right thing the easy thing.** Meet people where they are. Cut fields nobody uses, simplify the screens, and automate the steps people forget or hate doing. If a task depends on someone remembering to do it, give them a tool that tracks it or does it for them.

**5. Connect or consolidate the scattered pieces.** For every system that holds part of the picture, decide: connect it to Salesforce, or move it in. Leaving it floating is how you end up with spreadsheets again.

**6. Clean only what feeds the number.** Merge duplicates, fix messy dropdown values, and add rules where a missing value would break the definition. You don't need to clean everything at once.

**7. Build it once, in Salesforce, and give it an owner.** Build the report from the definition, check it against finance every month, and make one person responsible for keeping it right.

**8. Train, then train again.** New staff, new processes, and turnover all erode good habits. A short refresher is cheaper than a quarter of bad data.

## Get more out of what you already have

Before adding another tool to solve a reporting problem, check whether Salesforce can already do it. It's one of the most capable systems a nonprofit can own. It can run donor management, intake, member and volunteer portals, billing, and increasingly AI, with custom screens built around how your team works. Every extra tool is one more place for data to scatter. Getting the most out of the system you have usually beats buying the next one.

## What this looks like in practice

A national workforce-training nonprofit I work with had student data spread across several systems. Reporting on almost anything meant exporting data into Excel, cleaning it up, and importing it into another system. Even after all that, nobody was fully certain the numbers were right.

We didn't start with a big migration. First, we set up an integration to push the data that mattered between systems, so reporting stopped depending on manual exports. Once that was stable, we moved everything onto one platform.

The result was less technology, simpler processes, and fewer places for things to go wrong. The reports got better, not just faster, and consolidating saved them multiple six figures a year in licensing.

## If you only do one thing this month

Pick the one number your board asks about most, and trace it from the report all the way back to the person who enters the data. You'll find where it breaks, and that's where to start.
