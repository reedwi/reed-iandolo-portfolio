---
title: Before you point AI at your business, give it one place to look
summary: AI does far better on well-structured data in one place than when it has to reason across eight different systems. Here's why, and how to set it up.
date: 2026-11-01
audience: general
draft: false
---

**The short version:** connecting an AI assistant directly to all of your systems sounds great, but it's slow, expensive, and inconsistent, because the AI has to figure out where everything lives every time. Give it one well-structured place to look instead: a database with views that already join the data you commonly need. The answers come back faster, cost less, and are more reliable.

## Everyone wants AI on their data

Most organizations I talk to want to use AI on their own information. Ask a question in plain English, get an answer from your own records.

I've seen what real adoption looks like up close. I rolled Claude out across an organization and took daily use from about half of staff to over 90%, and then started building it into how the work actually gets done. The lesson I keep coming back to is that AI is only as useful as what you point it at.

## The problem with eight systems

Here's a realistic question: show me the recent calls with every account that gave over a million dollars this year.

The giving data probably lives in your CRM. The call transcripts live somewhere else. You can connect an AI assistant to each system and let it work out the answer. Modern tools make those connections possible.

But in practice, it's not consistent about how it goes and figures things out. One time it looks in the right places, the next time it doesn't. It burns through a lot of processing to find and stitch the data together, which makes it slow and expensive. And because it's reasoning from scratch every time, you can't be sure two answers to the same question were reached the same way.

## Give it one place to look

The alternative is to do the stitching once, ahead of time.

Copy the data from your systems into one database. Then build views for the things you ask about often. A view is just a saved, pre-joined picture of the data, like "accounts with their giving this year and their recent calls." Name it clearly and describe what's in it.

Now the AI doesn't have to explore. It reasons against that one view and knows exactly where to go. The same question gets answered faster, for less, and the same way every time.

## This is the same work as good reporting

If this sounds familiar, it's because it's the same foundation that makes reporting work. In [Your board numbers come from a spreadsheet](/notes/board-numbers-spreadsheet), the first step is defining what your numbers mean and where they come from. Those definitions are exactly what an AI needs too.

Clean, well-named, documented data is good for people and good for AI. You don't have to choose.

## You don't need a big setup

This doesn't require a large data platform. A small database like Postgres, fed by a few simple pipelines, can hold the common data for a small organization, usually for less than $50 a month. I wrote about why in [A data warehouse isn't a big-company project anymore](/notes/data-warehouse-small-teams).

## How to start

1. **Write down the five questions** you most want AI to answer from your own data.
2. **Find where the data lives** for each one.
3. **Bring that data into one database** you own.
4. **Build one view per question,** with a clear name and a plain-English description.
5. **Point your AI assistant at the views,** not at all your systems.

Start with one question. Once it works, the next ones get easier, because the foundation is already there.
