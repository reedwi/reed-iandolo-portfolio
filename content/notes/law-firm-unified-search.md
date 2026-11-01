---
title: One search across Outlook, your files, and your case management software
summary: Small law firms can search every email, document, note, and call about a client in one place, on infrastructure the firm owns. Here's how it works.
date: 2026-11-01
audience: law-firms
draft: false
---

**The short version:** yes, a small firm can search across Outlook, Teams, your shared files, your case management software, and your call transcripts at once. The way to do it is to keep a copy of that data in one database your firm owns, organized by client and matter, with a simple search on top. Your existing tools stay exactly as they are.

## Why finding things takes so long

A client calls and asks where things stand. To get the full picture, someone checks Outlook for the latest emails, digs through the shared drive for the most recent draft, opens the case management system for deadlines, and tries to remember what was said on last week's call.

Each of those tools has its own search, and none of them search each other. So the answer is spread across four or five places, and pulling it together takes far longer than it should. Multiply that by every client and every matter, and it adds up to hours a week that never show up on a bill.

## What one search looks like

Type a client's name or a matter, and get everything in one list:

- Emails to and from the client, and internal threads about the matter
- Documents and drafts from your shared drive
- Notes, tasks, and deadlines from your case management software, like Clio or MyCase
- Teams messages
- Call transcripts, so you can find what was actually said

You can narrow by matter, date, or type, and open anything in the tool it came from. Nobody has to learn a new system to use it, and nobody has to change how they work.

## How it works

You don't need to understand the technical side to benefit from it, but it helps to know it isn't magic.

1. **Copy the data into one place.** Microsoft 365 and most case management systems let you pull data out securely. A small pipeline copies emails, files, notes, and transcripts into a database on a regular schedule. Your original systems aren't changed.
2. **Organize it by client and matter.** This is the step that makes the search useful. Everything gets linked to the right client and matter, so a search returns what belongs together.
3. **Put a search on top.** A simple internal tool your team opens in the browser. Once the data is organized, you can also ask an AI assistant questions about a matter and have it answer from your own records, instead of from the open internet.

Setting this up used to be the kind of project only large firms could take on. That's no longer true. It's a much smaller lift now, and I wrote more about why in [A data warehouse isn't a big-company project anymore](/notes/data-warehouse-small-teams).

## Your data stays yours

This is the part that matters most for a law firm. Client information is the most sensitive thing you hold, and plenty of legal tech asks you to hand it to another vendor.

This approach goes the other way. The database lives on infrastructure your firm owns, in your own Microsoft Azure or AWS account. If you already have one, it goes there. If you don't, it gets set up in your firm's name, so you own everything from day one. The major cloud platforms are secure by default.

**Not everyone sees everything.** People and tools only get access to the data they need. The search should respect the same boundaries your firm already keeps, so someone walled off from a matter can't find it through search either.

**If your requirements are stricter,** there are hosted options built to check the contractual boxes for how data is stored and moved, like BigQuery, Snowflake, or MotherDuck for the database, and services like Fivetran for moving the data securely. They don't have to be expensive.

## Who runs it

Many small firms rely on a managed IT provider, and that's a perfectly good home for this. I can work alongside your IT provider to set up the infrastructure, so it fits how they already support you. Or, if you'd rather not think about it, I can run it for you. Either way, once it's set up well, it mostly runs itself.

## Search is just the start

Once your firm's data lives in one place, other things get easier too. You can see intake in one view from first contact to signed engagement, report on matters and workload without exporting anything, and use AI on your own records safely. Search is usually the first win because everyone feels it on day one.
