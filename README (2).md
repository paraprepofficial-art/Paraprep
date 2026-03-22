# ParaPrep — Free Paramedical Exam MCQ Practice

> Your paramedical exam companion for AIIMS CRE, Haryana CET & DSSSB

[![Live Site](https://img.shields.io/badge/Live%20Site-paraprep.in-fbbf24?style=for-the-badge&logo=googlechrome&logoColor=black)](https://paraprep.in)
[![Questions](https://img.shields.io/badge/MCQs-1431%2B-0f172a?style=for-the-badge)](https://paraprep.in/dashboard.html)
[![License](https://img.shields.io/badge/License-Free%20to%20use-15803d?style=for-the-badge)](https://paraprep.in)
[![Telegram](https://img.shields.io/badge/Telegram-Join%20Us-229ED9?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/ParaPrep_Official)

---

## What is ParaPrep?

ParaPrep is a **free, no-login MCQ practice platform** for students preparing for paramedical entrance exams in India. It runs entirely in the browser — no app download, no account needed, no ads.

**Live at → [paraprep.in](https://paraprep.in)**

---

## Features

| Feature | Description |
|---|---|
| 🎯 Practice Mode | 20 smart questions — unseen questions shown first |
| 📝 Mock Test | Full AIIMS CRE (100Q, 90min, +4/−1) and Haryana CET (100Q, +1/−1 skip) |
| 📅 Daily Challenge | 10 fresh questions every day |
| 🔖 Bookmarks | Save tricky questions for later revision |
| 📊 Performance Analysis | Subject-wise breakdown, weak topic identification |
| 📚 Topic MCQ | Drill specific sub-topics (cornea, anaesthesia, CPR etc.) |
| 📖 Subject Quiz | Computer, GK, Haryana GK, Maths, Reasoning, English |
| 🕐 History | All past attempt records saved locally |
| 💡 Quick Revision | Topic notes and key facts |
| 🌙 Dark / Light Mode | Auto system detection, manual toggle |

---

## Exams Covered

### ✅ AIIMS CRE — Live
- 100 questions · 90 minutes · 400 marks
- 5 sections × 20 questions (section timer locks after 18 min)
- Marking: **+4 correct · −1 wrong · 0 unattempted**
- Sections 1–4: Technical | Section 5: Computer + GK + English + Reasoning

### ✅ Haryana CET — Live
- 100 questions · 90 minutes · 100 marks
- No sections — fully randomised
- 70 Subject + 10 Computer + 20 General Awareness
- Marking: **+1 correct · 0 wrong · −1 unattempted** ⚠️ skip penalty

### 🔜 DSSSB — Coming Soon
- ~200 questions · +1/−0.25
- Currently shows "Coming Soon"

---

## Question Bank

| Subject | Questions | Notes |
|---|---|---|
| Computer | 729 | PYQ-matched, AIIMS CRE pattern |
| Optometry | 418 | Deep clinical coverage |
| Applied Anatomy, Physiology & Physics | 179 | OT Tech / anaesthesia focused |
| GK (General Knowledge) | 36 | India & World — AIIMS/DSSSB style |
| Haryana GK | 32 | Directly from HSSC 2019 PYQ |
| Mathematics | 19 | ⚠️ Expanding soon |
| Reasoning | 14 | ⚠️ Expanding soon |
| English | 4 | ⚠️ Expanding soon |
| **Total** | **1,431** | 0 duplicates verified |

All questions include **detailed explanations** — not just the correct answer.

---

## File Structure

```
📁 paraprep/
├── index.html                               ← Landing page
├── dashboard.html                           ← Main quiz app
├── questions.js                             ← Full question bank (1431+ MCQs)
├── blog.html                                ← Blog listing page
├── vacancies.html                           ← Exam vacancies & notifications
├── 404.html                                 ← Error fallback with redirect
├── favicon.png                              ← App icon
├── og-cover.png                             ← Social share image (1200×630)
├── .nojekyll                                ← GitHub Pages config
├── README.md                                ← This file
└── blog/
    ├── how-to-crack-aiims-cre-2026.html
    ├── aiims-cre-exam-pattern.html
    ├── optometry-high-yield-topics.html
    ├── haryana-cet-paramedical-guide.html
    └── computer-questions-aiims-cre.html
```

---

## Run Locally

No setup needed. Just open in any browser:

```
1. Download or clone this repository
2. Open index.html in any browser
3. Click "Open ParaPrep →" to start practising
```

All files must be in the same folder structure as shown above. Works fully offline after first load (except Google Fonts on first visit).

---

## Tech Stack

- **Pure HTML + CSS + Vanilla JavaScript** — zero frameworks, zero dependencies
- **No backend, no server** — everything runs in the browser
- **localStorage** — all progress, bookmarks, and history saved locally
- **Web Crypto API** — SHA-256 hashed passwords for local login
- **Google Fonts** — Outfit (headings) + DM Sans (body)

---

## Security

- ✅ Content Security Policy (CSP) headers
- ✅ SHA-256 password hashing via Web Crypto API
- ✅ XSS sanitization on all user inputs
- ✅ Brute-force login protection (5-attempt lockout)
- ✅ X-Frame-Options: DENY
- ✅ X-Content-Type-Options: nosniff

---

## Roadmap

- [ ] DSSSB mock test pattern
- [ ] Expand English questions (30–40 more)
- [ ] Expand Reasoning questions (20–30 more)
- [ ] Expand Mathematics questions (20+ more)
- [ ] MLT and Radiology question sets
- [ ] PWA support (Add to Home Screen)
- [ ] Right panel for wide desktop screens
- [ ] Backend / cloud sync (future)

---

## Reporting a Bug

Found a wrong answer or a broken feature? Use the **Report a Bug** button inside the app (sidebar → Support) or email us directly.

---

## Contact

| | |
|---|---|
| 📧 Email | paraprep.official@gmail.com |
| 💬 Telegram | [@ParaPrep_Official](https://t.me/ParaPrep_Official) |
| 🌐 Website | [paraprep.in](https://paraprep.in) |

---

## License

ParaPrep is free to use for personal exam preparation. All MCQ content is original. Do not copy or redistribute the question bank without permission.

---

*Built with for paramedical students across India*
