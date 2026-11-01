---
name: write-note
description: Turn Reed's brain dumps into published guides under content/notes. Use when Reed shares answers or a brain dump for an article, asks for the next guide, or asks what to write next.
---

# Writing a note

Guides on reediandolo.com/notes are Reed's experience in a consistent structure. The value is his opinions and real client examples; the structure is ours. Source every claim from Reed's own words: his brain dumps, his answers, or copy he already approved on the site (home page thesis, landing pages in `lib/landings.ts`, Recent work in `lib/data.ts`).

## Steps

1. **Pick the topic.** Use the one Reed names, or the top of [backlog.md](backlog.md). Done when one topic and its audience are chosen.
2. **Gather Reed's words.** If this conversation has no brain dump for the topic, send him the topic's questions from `backlog.md` (or write 5-8 sharp ones) and stop until he answers. Done when every section of the structure below has source material from him.
3. **Draft** `content/notes/<slug>.md` on a new branch, with `draft: true`, following the structure and voice rules below. Link to related notes and the matching landing page wherever the text naturally mentions them.
4. **Check.** All four must pass:
   - `grep -c "—" content/notes/<slug>.md` returns 0
   - every `/notes/<slug>` link in the file has a matching file in `content/notes/`
   - `npx tsc --noEmit` and `npx next build` succeed (stop any running dev server first; they share `.next`)
   - the page renders on the dev server
5. **Show Reed** the draft URL, a section-by-section summary, and a list of every sentence you extrapolated beyond his words. Done when he approves or sends edits.
6. **Publish.** Set `draft: false` and `date` to today, commit, fast-forward merge to `master`, push, delete the branch. Leave Reed's unrelated uncommitted files (resume work) out of the commit.
7. **Wire up distribution.** Add the guide to the "Content to link" table in `~/Code/Personal/outreach/messaging/nonprofit-playbook.md` (or the matching playbook for its audience), mapped to the email angle it supports. Move the topic out of `backlog.md`.

## Structure

```
---
title: <the problem in the reader's words, or the claim>
summary: <one sentence for the index, search results, and link previews>
date: YYYY-MM-DD
audience: salesforce | law-firms | small-business | general
draft: true
---

**The short version:** <2-3 sentences that directly answer the title's question>

## <the problem, told as a scene the reader recognizes>
## <why it happens / what most people get wrong>
## <the approach>
## <checklist or numbered steps the reader can act on>
## <real example, anonymized, only if Reed gave one>
## If you only do one thing
```

Sections can merge or reorder to fit the material; the opener and the closing action stay. Headings phrased as the questions readers search for help with search and AI answer engines. Aim for 700-1,200 words.

## Voice

- Plain, direct, first person. Short sentences. Reed's own phrases where he has them ("get everything you can out of it", "meet people where they are", "the 10%").
- Commas, colons, and periods instead of em-dashes.
- Confident about what he's seen; no hype words, no exclamation points.
- Client examples stay anonymous at the level already public on /work ("a national workforce-training nonprofit", "a small law firm").
- Credentials stay understated. He leads technology at a CRM consultancy and has worked on hundreds of CRM projects; skip product jargon readers won't know.
- Dollar figures and timelines only as Reed stated them.
