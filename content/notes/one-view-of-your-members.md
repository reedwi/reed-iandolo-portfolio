---
title: You can't see a member's full picture
summary: For most associations and nonprofits, one person's membership, giving, events, and engagement live in different places. Here's how to get one clear view of every member in Salesforce.
date: 2026-11-01
audience: salesforce
draft: false
---

**The short version:** if nobody can see a member's full history in one place, the problem is usually scattered data and a data model that wasn't designed around people. Decide what "the full picture" means for your organization, connect or consolidate the systems that hold pieces of it, and bring it together on one record in Salesforce.

## Where the picture gets lost

Ask a staff member to tell you everything about one member. How long they've belonged, what they've given, which events they've attended, what committees they sit on, when someone last spoke with them.

Usually the answer is: let me check a few places. Membership lives in one system, events in another, giving in a third, and the most useful notes are in someone's inbox or spreadsheet. Some of it is connected, some isn't, and nobody is sure which.

The most common thing I hear is "I don't know where to go to get an answer." That's what a missing single view sounds like.

## Why it matters

Without one view of a member, small things go wrong constantly. Someone gets a renewal reminder the week after renewing. A major donor gets treated like a stranger at an event. A member who has been quietly disengaging for a year gets noticed only when they don't renew.

It also makes decisions harder. Questions like "which members are most engaged?" or "who's at risk of lapsing?" can't be answered when the data that would answer them lives in four places.

## Salesforce can be the home for it

Salesforce is one of the most capable systems a nonprofit or association can have. It can hold membership, donor management, events, intake, member portals, and billing, and it can be the hub for your AI work too. You can even build custom screens on top so staff see exactly what they need, without clicking through ten tabs.

The point isn't to put everything in Salesforce for its own sake. It's to make sure that when someone opens a member's record, they see what matters.

## How to get there

**1. Define the full picture.** Write down what staff need to see about a member at a glance. Membership status and history, giving, events, involvement, last contact. Keep it to what actually changes how people act.

**2. Map where each piece lives today.** For each item, note the system it comes from and whether it reaches Salesforce now.

**3. Connect or consolidate.** For each system, decide: integrate it with Salesforce, or move it in. Leaving it disconnected is how the picture breaks.

**4. Get the data model right.** Decide how people, households, and organizations relate to each other, and how memberships, gifts, and event attendance attach to them. This is the foundation, and it's the part most worth getting help with.

**5. Design the record for the people using it.** Put the most important information first. Hide what nobody uses. Show a simple engagement summary instead of making staff piece it together.

**6. Keep reporting-only data out.** If some data only matters for reporting, it may belong in a separate database instead of cluttering the record. I wrote about that in [Get your Salesforce data into a database in an afternoon](/notes/salesforce-data-into-database).

## If you only do one thing

Pick five of your most important members and try to answer, from Salesforce alone, everything your team should know about each of them. Every place you have to go outside Salesforce is a gap worth closing.
