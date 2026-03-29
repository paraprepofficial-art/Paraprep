// ParaPrep — Revision Notes Data
// Edit this file to add or update revision topic notes.
// Format: { id, course, icon, name, tag, pts, notes (HTML string) }

const revisionTopics = [

  // ══════════════════════════════════════════
  // OPTOMETRY
  // ══════════════════════════════════════════
  {
    id:'refraction', course:'Optometry', icon:'👁️', name:'Refraction & Visual Acuity',
    tag:'opt', pts:8,
    notes:`<div class="notes-header" style="background:linear-gradient(135deg,#7c3aed,#c084fc);">
      <div class="notes-header-bl"></div><div class="notes-header-icon">👁️</div>
      <div class="notes-header-body"><div class="notes-header-title">Refraction & Visual Acuity</div><div class="notes-header-sub">OPTOMETRY · BASICS</div></div></div>
      <div class="notes-section"><div class="notes-section-title">📊 Refractive Errors</div><div style="overflow-x:auto">
      <table class="notes-table"><tr><th>Condition</th><th>Defect</th><th>Lens</th></tr>
      <tr><td>Myopia</td><td>Image in front of retina</td><td>Concave (−)</td></tr>
      <tr><td>Hypermetropia</td><td>Image behind retina</td><td>Convex (+)</td></tr>
      <tr><td>Astigmatism</td><td>Unequal corneal curvature</td><td>Cylindrical / toric</td></tr>
      <tr><td>Presbyopia</td><td>Loss of accommodation (&gt;40 yrs)</td><td>Reading glasses (+)</td></tr></table></div></div>
      <div class="notes-section"><div class="notes-section-title">⚡ Key Facts</div><div class="notes-list">
      <div class="notes-item"><strong>Normal VA</strong> = 6/6 (metric) / 20/20 (imperial); chart at <span class="hi-green">6 metres</span></div>
      <div class="notes-item"><strong>Emmetropia</strong> — no refractive error; parallel rays focus exactly on retina</div>
      <div class="notes-item"><strong>Accommodation</strong> — ciliary muscle contracts → lens thickens → near vision. Lost in presbyopia</div>
      <div class="notes-item"><strong>Cycloplegia</strong> — paralysis of ciliary muscle (atropine) used for refraction in children</div>
      <div class="notes-item"><strong>Finger counting</strong> = VA of 6/60 or worse</div></div></div>
      <div class="notes-section"><div class="notes-section-title">💡 Mnemonic</div>
      <div class="mnemonic-box"><div class="mnemonic-title">🧠 Myopia vs Hypermetropia</div>
      <div class="mnemonic-text"><strong>Myopia = Minus</strong> (M → −, concave)<br><strong>Hypermetropia = High Plus</strong> (H → +, convex)</div></div></div>`
  },
  {
    id:'optics', course:'Optometry', icon:'🔬', name:'Optics & Lens Power',
    tag:'opt', pts:7,
    notes:`<div class="notes-header" style="background:linear-gradient(135deg,#7c3aed,#c084fc);">
      <div class="notes-header-bl"></div><div class="notes-header-icon">🔬</div>
      <div class="notes-header-body"><div class="notes-header-title">Optics & Lens Power</div><div class="notes-header-sub">OPTOMETRY · PHYSICS OF LIGHT</div></div></div>
      <div class="notes-section"><div class="notes-section-title">⚡ Core Formulas</div><div class="notes-list">
      <div class="notes-item"><strong>Lens Power (P)</strong> = 1 / f (metres) → unit = <span class="hi-green">Dioptre (D)</span></div>
      <div class="notes-item"><strong>Snell's Law:</strong> n₁ sinθ₁ = n₂ sinθ₂</div>
      <div class="notes-item"><strong>RI of cornea</strong> ≈ 1.376 · aqueous/vitreous ≈ 1.336 · lens ≈ 1.413</div>
      <div class="notes-item"><strong>Total power of eye</strong> ≈ 60 D (cornea ≈ 44 D + lens ≈ 16 D at rest)</div>
      <div class="notes-item"><strong>Critical angle</strong> — beyond this, total internal reflection occurs (gonioscopy basis)</div></div></div>
      <div class="notes-section"><div class="notes-section-title">📊 Lens Types</div><div style="overflow-x:auto">
      <table class="notes-table"><tr><th>Type</th><th>Action</th><th>Use</th></tr>
      <tr><td>Convex (+)</td><td>Converges light</td><td>Hypermetropia, presbyopia</td></tr>
      <tr><td>Concave (−)</td><td>Diverges light</td><td>Myopia</td></tr>
      <tr><td>Cylindrical</td><td>Power in one meridian</td><td>Astigmatism</td></tr>
      <tr><td>Prism</td><td>Deviates toward base</td><td>Squint, diplopia</td></tr></table></div></div>`
  },
  {
    id:'eye-anatomy', course:'Optometry', icon:'🧬', name:'Eye Anatomy',
    tag:'opt', pts:9,
    notes:`<div class="notes-header" style="background:linear-gradient(135deg,#0ea5e9,#38bdf8);">
      <div class="notes-header-bl"></div><div class="notes-header-icon">🧬</div>
      <div class="notes-header-body"><div class="notes-header-title">Eye Anatomy</div><div class="notes-header-sub">OPTOMETRY · STRUCTURE</div></div></div>
      <div class="notes-section"><div class="notes-section-title">📊 Layers of the Eye</div><div style="overflow-x:auto">
      <table class="notes-table"><tr><th>Layer</th><th>Structures</th></tr>
      <tr><td>Outer (fibrous)</td><td>Cornea (ant.) + Sclera (post.)</td></tr>
      <tr><td>Middle (uveal)</td><td>Iris + Ciliary body + Choroid</td></tr>
      <tr><td>Inner (nervous)</td><td>Retina (10 layers)</td></tr></table></div></div>
      <div class="notes-section"><div class="notes-section-title">⚡ Key Facts</div><div class="notes-list">
      <div class="notes-item"><strong>Cornea</strong> — avascular, 5 layers (EBADS: Epithelium, Bowman's, stroma, Descemet's, Endothelium)</div>
      <div class="notes-item"><strong>Macula</strong> — area of sharpest vision; fovea centralis at its centre (only cones)</div>
      <div class="notes-item"><strong>Optic disc</strong> — blind spot; no photoreceptors; where optic nerve exits</div>
      <div class="notes-item"><strong>Aqueous humour</strong> — produced by ciliary body; drains via Canal of Schlemm</div>
      <div class="notes-item"><strong>Vitreous humour</strong> — gel-like; fills posterior chamber; not replaced if lost</div>
      <div class="notes-item"><strong>Lens</strong> — biconvex; avascular; held by zonules of Zinn</div></div></div>
      <div class="notes-section"><div class="notes-section-title">💡 Mnemonic</div>
      <div class="mnemonic-box"><div class="mnemonic-title">🧠 Corneal layers — EBADS</div>
      <div class="mnemonic-text"><strong>E</strong>pithelium · <strong>B</strong>owman's · <strong>A</strong>nterior stroma · <strong>D</strong>escemet's · <strong>S</strong>(E)ndothelium</div></div></div>`
  },
  {
    id:'instruments', course:'Optometry', icon:'🔭', name:'Ophthalmic Instruments',
    tag:'opt', pts:8,
    notes:`<div class="notes-header" style="background:linear-gradient(135deg,#059669,#34d399);">
      <div class="notes-header-bl"></div><div class="notes-header-icon">🔭</div>
      <div class="notes-header-body"><div class="notes-header-title">Ophthalmic Instruments</div><div class="notes-header-sub">OPTOMETRY · EQUIPMENT</div></div></div>
      <div class="notes-section"><div class="notes-section-title">📊 Key Instruments</div><div style="overflow-x:auto">
      <table class="notes-table"><tr><th>Instrument</th><th>Measures / Purpose</th></tr>
      <tr><td>Snellen chart</td><td>Distance visual acuity (6 m)</td></tr>
      <tr><td>Retinoscope</td><td>Objective refraction (streak/spot)</td></tr>
      <tr><td>Keratometer</td><td>Corneal curvature (astigmatism)</td></tr>
      <tr><td>Tonometer</td><td>Intraocular pressure (IOP)</td></tr>
      <tr><td>Slit lamp</td><td>Anterior segment examination</td></tr>
      <tr><td>Ophthalmoscope</td><td>Fundus (retina/disc) examination</td></tr>
      <tr><td>Gonioscope</td><td>Drainage angle (open/closed angle glaucoma)</td></tr>
      <tr><td>Perimeter</td><td>Visual field mapping</td></tr></table></div></div>
      <div class="notes-section"><div class="notes-section-title">⚡ IOP Facts</div><div class="notes-list">
      <div class="notes-item"><strong>Normal IOP</strong> = 10–21 mmHg</div>
      <div class="notes-item"><strong>Goldmann applanation tonometer</strong> — gold standard for IOP</div>
      <div class="notes-item"><strong>Schiotz tonometer</strong> — indentation type; portable</div>
      <div class="notes-item"><strong>Non-contact tonometer (NCT)</strong> — air-puff; no anaesthesia needed</div></div></div>`
  },
  {
    id:'glaucoma', course:'Optometry', icon:'🩺', name:'Glaucoma & IOP',
    tag:'opt', pts:7,
    notes:`<div class="notes-header" style="background:linear-gradient(135deg,#dc2626,#f87171);">
      <div class="notes-header-bl"></div><div class="notes-header-icon">🩺</div>
      <div class="notes-header-body"><div class="notes-header-title">Glaucoma & IOP</div><div class="notes-header-sub">OPTOMETRY · DISEASE</div></div></div>
      <div class="notes-section"><div class="notes-section-title">📊 Types of Glaucoma</div><div style="overflow-x:auto">
      <table class="notes-table"><tr><th>Type</th><th>Angle</th><th>IOP</th><th>Key Feature</th></tr>
      <tr><td>POAG (primary open-angle)</td><td>Open</td><td>↑</td><td>Painless; most common; optic disc cupping</td></tr>
      <tr><td>PACG (primary angle-closure)</td><td>Closed</td><td>↑↑</td><td>Acute pain, red eye, halos around lights</td></tr>
      <tr><td>Normal tension</td><td>Open</td><td>Normal</td><td>Optic nerve damage despite normal IOP</td></tr>
      <tr><td>Congenital</td><td>Malformed</td><td>↑</td><td>Buphthalmos (ox eye), photophobia</td></tr></table></div></div>
      <div class="notes-section"><div class="notes-section-title">⚡ Key Facts</div><div class="notes-list">
      <div class="notes-item"><strong>C/D ratio</strong> (cup-to-disc) &gt; 0.6 — suspicious for glaucoma; normal ≤ 0.4</div>
      <div class="notes-item"><strong>Aqueous drainage</strong> — trabecular meshwork → Canal of Schlemm → episcleral veins</div>
      <div class="notes-item"><strong>1st line drugs</strong> — prostaglandin analogues (latanoprost); β-blockers (timolol)</div>
      <div class="notes-item"><strong>Visual field defect</strong> — arcuate scotoma, nasal step, altitudinal defect</div></div></div>
      <div class="notes-section"><div class="notes-section-title">💡 Mnemonic</div>
      <div class="mnemonic-box"><div class="mnemonic-title">🧠 POAG vs PACG</div>
      <div class="mnemonic-text"><strong>Open = Old, silent</strong> (POAG — painless, chronic)<br><strong>Closed = Crisis</strong> (PACG — acute, painful, emergency)</div></div></div>`
  },

  // ══════════════════════════════════════════
  // OT TECH (Applied Anatomy, Physiology & Physics)
  // ══════════════════════════════════════════
  {
    id:'anaesthesia-machine', course:'Applied Anatomy, Physiology and Physics', icon:'🫁', name:'Anaesthesia Machine',
    tag:'ot', pts:9,
    notes:`<div class="notes-header" style="background:linear-gradient(135deg,#0f172a,#1e3a5f);">
      <div class="notes-header-bl"></div><div class="notes-header-icon">🫁</div>
      <div class="notes-header-body"><div class="notes-header-title">Anaesthesia Machine</div><div class="notes-header-sub">OT TECH · EQUIPMENT</div></div></div>
      <div class="notes-section"><div class="notes-section-title">📊 Main Components</div><div class="notes-list">
      <div class="notes-item"><strong>Gas supply</strong> — pipeline (4 bar) or cylinders (O₂ = black body/white shoulder; N₂O = blue; CO₂ = grey)</div>
      <div class="notes-item"><strong>Pressure regulators</strong> — reduce high cylinder pressure to working pressure (~4 bar)</div>
      <div class="notes-item"><strong>Flowmeters (rotameters)</strong> — measure gas flow in L/min; N₂O flowmeter always downstream of O₂</div>
      <div class="notes-item"><strong>Vaporiser</strong> — adds volatile anaesthetic (halothane, isoflurane, sevoflurane) to gas mixture</div>
      <div class="notes-item"><strong>Common gas outlet (CGO)</strong> — delivers final gas mix to breathing circuit</div>
      <div class="notes-item"><strong>Ventilator</strong> — provides mechanical ventilation; driven by O₂ or electricity</div></div></div>
      <div class="notes-section"><div class="notes-section-title">📊 Gas Cylinder Colours (India)</div><div style="overflow-x:auto">
      <table class="notes-table"><tr><th>Gas</th><th>Body</th><th>Shoulder</th></tr>
      <tr><td>O₂</td><td>Black</td><td>White</td></tr>
      <tr><td>N₂O</td><td>Blue</td><td>Blue</td></tr>
      <tr><td>CO₂</td><td>Grey</td><td>Grey</td></tr>
      <tr><td>Air</td><td>Grey</td><td>Black+White quartered</td></tr>
      <tr><td>Entonox (50% O₂+N₂O)</td><td>Blue</td><td>Blue+White</td></tr></table></div></div>
      <div class="notes-section"><div class="notes-section-title">💡 Mnemonic</div>
      <div class="mnemonic-box"><div class="mnemonic-title">🧠 O₂ Cylinder</div>
      <div class="mnemonic-text"><strong>Black body, White shoulder</strong> — "B for Body, W for White top"</div></div></div>`
  },
  {
    id:'breathing-circuits', course:'Applied Anatomy, Physiology and Physics', icon:'🔄', name:'Breathing Circuits',
    tag:'ot', pts:8,
    notes:`<div class="notes-header" style="background:linear-gradient(135deg,#0f172a,#1e3a5f);">
      <div class="notes-header-bl"></div><div class="notes-header-icon">🔄</div>
      <div class="notes-header-body"><div class="notes-header-title">Breathing Circuits</div><div class="notes-header-sub">OT TECH · MAPLESON & CIRCLE</div></div></div>
      <div class="notes-section"><div class="notes-section-title">📊 Mapleson Classification</div><div style="overflow-x:auto">
      <table class="notes-table"><tr><th>Circuit</th><th>FGF for SB</th><th>FGF for IPPV</th><th>Best For</th></tr>
      <tr><td>Mapleson A (Magill)</td><td>= MV (most efficient SB)</td><td>3× MV (worst IPPV)</td><td>Spontaneous breathing adults</td></tr>
      <tr><td>Mapleson D (Bain)</td><td>2–3× MV</td><td>= MV (most efficient IPPV)</td><td>IPPV, paediatrics (coaxial)</td></tr>
      <tr><td>Mapleson F (Jackson-Rees)</td><td>2–3× MV</td><td>1–1.5× MV</td><td>Paediatrics &lt;20 kg</td></tr></table></div></div>
      <div class="notes-section"><div class="notes-section-title">⚡ Circle System</div><div class="notes-list">
      <div class="notes-item"><strong>Components</strong> — CO₂ absorber (soda lime), 2 unidirectional valves, APL valve, reservoir bag, Y-piece</div>
      <div class="notes-item"><strong>Soda lime</strong> — Ca(OH)₂ 94% + NaOH 5% + KOH 1%; indicator changes colour when exhausted (white → violet)</div>
      <div class="notes-item"><strong>Low-flow advantage</strong> — economical, warm, humidified gas, less pollution</div>
      <div class="notes-item"><strong>APL valve</strong> (adjustable pressure-limiting) — set to 1–2 cmH₂O for spontaneous breathing; closed during IPPV</div></div></div>
      <div class="notes-section"><div class="notes-section-title">💡 Mnemonic</div>
      <div class="mnemonic-box"><div class="mnemonic-title">🧠 Mapleson A = Adults Spontaneous</div>
      <div class="mnemonic-text"><strong>A = Awesome for spontaneous</strong> (most efficient SB)<br><strong>D = Driven ventilation</strong> (most efficient IPPV)</div></div></div>`
  },
  {
    id:'sterilisation', course:'Applied Anatomy, Physiology and Physics', icon:'🧪', name:'Sterilisation & Disinfection',
    tag:'ot', pts:8,
    notes:`<div class="notes-header" style="background:linear-gradient(135deg,#0f172a,#1e3a5f);">
      <div class="notes-header-bl"></div><div class="notes-header-icon">🧪</div>
      <div class="notes-header-body"><div class="notes-header-title">Sterilisation & Disinfection</div><div class="notes-header-sub">OT TECH · INFECTION CONTROL</div></div></div>
      <div class="notes-section"><div class="notes-section-title">📊 Methods</div><div style="overflow-x:auto">
      <table class="notes-table"><tr><th>Method</th><th>Temp/Parameters</th><th>Used For</th></tr>
      <tr><td>Autoclave (steam)</td><td>121°C / 15 psi / 15 min OR 134°C / 30 psi / 3 min</td><td>Metal, glass, fabric instruments</td></tr>
      <tr><td>Dry heat oven</td><td>160°C / 60 min OR 170°C / 30 min</td><td>Powders, oils, glass syringes</td></tr>
      <tr><td>ETO (ethylene oxide)</td><td>55°C / 4–12 hrs</td><td>Heat-sensitive items, electronics, plastics</td></tr>
      <tr><td>Glutaraldehyde 2%</td><td>20°C / 10 h (sterilisation)</td><td>Endoscopes (high-level disinfection)</td></tr>
      <tr><td>UV radiation</td><td>—</td><td>OT air, surface (not penetrating)</td></tr></table></div></div>
      <div class="notes-section"><div class="notes-section-title">⚡ Key Definitions</div><div class="notes-list">
      <div class="notes-item"><strong>Sterilisation</strong> — complete destruction of ALL microorganisms including spores</div>
      <div class="notes-item"><strong>Disinfection</strong> — removes most pathogens; spores may survive</div>
      <div class="notes-item"><strong>Antiseptic</strong> — used on living tissue (povidone-iodine, chlorhexidine)</div>
      <div class="notes-item"><strong>Spaulding classification</strong> — Critical (implants) → sterilise; Semi-critical (endoscopes) → high-level disinfect; Non-critical (BP cuff) → low-level disinfect</div></div></div>
      <div class="notes-section"><div class="notes-section-title">💡 Mnemonic</div>
      <div class="mnemonic-box"><div class="mnemonic-title">🧠 Autoclave Settings</div>
      <div class="mnemonic-text"><strong>121°C–15 psi–15 min</strong> → "Triple 15" (121 ≈ 15 psi / 15 min)</div></div></div>`
  },
  {
    id:'ot-positions', course:'Applied Anatomy, Physiology and Physics', icon:'🛏️', name:'Surgical Positions',
    tag:'ot', pts:7,
    notes:`<div class="notes-header" style="background:linear-gradient(135deg,#0f172a,#1e3a5f);">
      <div class="notes-header-bl"></div><div class="notes-header-icon">🛏️</div>
      <div class="notes-header-body"><div class="notes-header-title">Surgical Positions</div><div class="notes-header-sub">OT TECH · POSITIONING</div></div></div>
      <div class="notes-section"><div class="notes-section-title">📊 Common Positions</div><div style="overflow-x:auto">
      <table class="notes-table"><tr><th>Position</th><th>Surgeries</th><th>Risk</th></tr>
      <tr><td>Supine</td><td>Abdominal, cardiac, thoracic</td><td>Backache, pressure sores</td></tr>
      <tr><td>Prone</td><td>Spine, posterior fossa, rectal</td><td>Airway difficulty, eye pressure</td></tr>
      <tr><td>Lithotomy</td><td>Perineal, gynaecological, rectal</td><td>DVT, compartment syndrome, hip dislocation</td></tr>
      <tr><td>Lateral</td><td>Thoracic, renal, hip replacement</td><td>Brachial plexus injury, ear pressure</td></tr>
      <tr><td>Trendelenburg</td><td>Pelvis, lower abdominal laparoscopy</td><td>↑ ICP, ↓ respiratory compliance, aspiration</td></tr>
      <tr><td>Reverse Trendelenburg</td><td>Head/neck, upper abdominal laparoscopy</td><td>Hypotension, ↓ venous return</td></tr>
      <tr><td>Sitting (beach chair)</td><td>Shoulder, posterior cranial fossa</td><td>Air embolism, hypotension</td></tr></table></div></div>
      <div class="notes-section"><div class="notes-section-title">⚡ Key Facts</div><div class="notes-list">
      <div class="notes-item"><strong>Lithotomy</strong> — both legs raised simultaneously to avoid pelvic tilt and spinal injury</div>
      <div class="notes-item"><strong>Prone</strong> — eyes must be padded and checked every 30 min to prevent ischaemic optic neuropathy</div>
      <div class="notes-item"><strong>Padding pressure points</strong> — heels, elbows, sacrum, occiput in all positions</div></div></div>`
  },
  {
    id:'vital-signs', course:'Applied Anatomy, Physiology and Physics', icon:'💓', name:'Vital Signs & Monitoring',
    tag:'ot', pts:8,
    notes:`<div class="notes-header" style="background:linear-gradient(135deg,#0f172a,#1e3a5f);">
      <div class="notes-header-bl"></div><div class="notes-header-icon">💓</div>
      <div class="notes-header-body"><div class="notes-header-title">Vital Signs & Monitoring</div><div class="notes-header-sub">OT TECH · PATIENT MONITORING</div></div></div>
      <div class="notes-section"><div class="notes-section-title">📊 Normal Values (Adult)</div><div style="overflow-x:auto">
      <table class="notes-table"><tr><th>Parameter</th><th>Normal Range</th></tr>
      <tr><td>Heart Rate (HR)</td><td>60–100 bpm</td></tr>
      <tr><td>Blood Pressure (BP)</td><td>90–120 / 60–80 mmHg</td></tr>
      <tr><td>Respiratory Rate (RR)</td><td>12–20 /min</td></tr>
      <tr><td>SpO₂</td><td>≥ 95% (normal); &lt; 90% = hypoxia</td></tr>
      <tr><td>EtCO₂</td><td>35–45 mmHg</td></tr>
      <tr><td>Temperature</td><td>36.5–37.5°C</td></tr>
      <tr><td>Urine output</td><td>≥ 0.5 mL/kg/hr</td></tr></table></div></div>
      <div class="notes-section"><div class="notes-section-title">⚡ ASA Monitoring Standards</div><div class="notes-list">
      <div class="notes-item"><strong>Minimum intraoperative monitoring</strong> — ECG, NIBP, SpO₂, EtCO₂, temperature</div>
      <div class="notes-item"><strong>Pulse oximetry</strong> — measures SpO₂ by differential absorption of red (660 nm) and infrared (940 nm) light</div>
      <div class="notes-item"><strong>Capnography</strong> — EtCO₂ confirms ET tube placement; ↓ EtCO₂ = ↓ cardiac output or disconnection</div>
      <div class="notes-item"><strong>BIS (Bispectral Index)</strong> — monitors depth of anaesthesia; 40–60 = adequate GA</div></div></div>
      <div class="notes-section"><div class="notes-section-title">💡 Mnemonic</div>
      <div class="mnemonic-box"><div class="mnemonic-title">🧠 Signs of Inadequate Anaesthesia</div>
      <div class="mnemonic-text"><strong>STOP</strong> — Sweating · Tachycardia · Others (hypertension, movement) · Pupil dilation</div></div></div>`
  },

  // ══════════════════════════════════════════
  // COMPUTER
  // ══════════════════════════════════════════
  {
    id:'computer-basics', course:'Computer', icon:'💻', name:'Computer Basics & Hardware',
    tag:'comp', pts:8,
    notes:`<div class="notes-header" style="background:linear-gradient(135deg,#0369a1,#38bdf8);">
      <div class="notes-header-bl"></div><div class="notes-header-icon">💻</div>
      <div class="notes-header-body"><div class="notes-header-title">Computer Basics & Hardware</div><div class="notes-header-sub">COMPUTER · FOUNDATION</div></div></div>
      <div class="notes-section"><div class="notes-section-title">📊 Number Systems</div><div style="overflow-x:auto">
      <table class="notes-table"><tr><th>System</th><th>Base</th><th>Digits</th></tr>
      <tr><td>Binary</td><td>2</td><td>0, 1</td></tr>
      <tr><td>Octal</td><td>8</td><td>0–7</td></tr>
      <tr><td>Decimal</td><td>10</td><td>0–9</td></tr>
      <tr><td>Hexadecimal</td><td>16</td><td>0–9, A–F</td></tr></table></div></div>
      <div class="notes-section"><div class="notes-section-title">⚡ Storage Units</div><div class="notes-list">
      <div class="notes-item">1 Byte = 8 bits · 1 KB = 1024 B · 1 MB = 1024 KB · 1 GB = 1024 MB · 1 TB = 1024 GB</div>
      <div class="notes-item"><strong>CPU</strong> — brain of computer; consists of ALU (arithmetic/logic) + CU (control unit) + registers</div>
      <div class="notes-item"><strong>RAM</strong> — volatile (loses data on power off); primary memory; DRAM / SRAM</div>
      <div class="notes-item"><strong>ROM</strong> — non-volatile; stores BIOS/firmware; PROM, EPROM, EEPROM variants</div>
      <div class="notes-item"><strong>Cache</strong> — fastest memory; L1 (fastest, smallest) → L2 → L3 (slowest, largest)</div>
      <div class="notes-item"><strong>Hard disk (HDD)</strong> — magnetic storage; <strong>SSD</strong> — flash-based, faster, no moving parts</div></div></div>
      <div class="notes-section"><div class="notes-section-title">📊 Input / Output Devices</div><div style="overflow-x:auto">
      <table class="notes-table"><tr><th>Input</th><th>Output</th><th>Both</th></tr>
      <tr><td>Keyboard, Mouse, Scanner, Mic, Webcam, Touchscreen</td><td>Monitor, Printer, Speaker, Projector</td><td>Touch screen, Modem, NIC</td></tr></table></div></div>`
  },
  {
    id:'ms-office', course:'Computer', icon:'📊', name:'MS Office',
    tag:'comp', pts:9,
    notes:`<div class="notes-header" style="background:linear-gradient(135deg,#0369a1,#38bdf8);">
      <div class="notes-header-bl"></div><div class="notes-header-icon">📊</div>
      <div class="notes-header-body"><div class="notes-header-title">MS Office Shortcuts & Features</div><div class="notes-header-sub">COMPUTER · AIIMS CRE HIGH YIELD</div></div></div>
      <div class="notes-section"><div class="notes-section-title">⚡ MS Word Shortcuts</div><div class="notes-list">
      <div class="notes-item"><strong>Ctrl+B/I/U</strong> — Bold / Italic / Underline</div>
      <div class="notes-item"><strong>Ctrl+Z / Ctrl+Y</strong> — Undo / Redo</div>
      <div class="notes-item"><strong>Ctrl+S</strong> — Save · <strong>Ctrl+P</strong> — Print · <strong>Ctrl+A</strong> — Select All</div>
      <div class="notes-item"><strong>Ctrl+H</strong> — Find & Replace · <strong>Ctrl+F</strong> — Find</div>
      <div class="notes-item"><strong>F7</strong> — Spell check · <strong>F12</strong> — Save As</div>
      <div class="notes-item"><strong>Default extension</strong> — .docx (Word 2007+); older = .doc</div></div></div>
      <div class="notes-section"><div class="notes-section-title">⚡ MS Excel Shortcuts</div><div class="notes-list">
      <div class="notes-item"><strong>Ctrl+Home / End</strong> — go to first / last cell with data</div>
      <div class="notes-item"><strong>F2</strong> — Edit active cell · <strong>F4</strong> — Repeat last action</div>
      <div class="notes-item"><strong>Alt+Enter</strong> — New line within cell</div>
      <div class="notes-item"><strong>SUM formula</strong> = =SUM(A1:A10) · <strong>AVERAGE</strong> = =AVERAGE(range)</div>
      <div class="notes-item"><strong>Rows max</strong> = 1,048,576 · <strong>Columns max</strong> = 16,384 (A to XFD)</div></div></div>
      <div class="notes-section"><div class="notes-section-title">📊 MS PowerPoint</div><div class="notes-list">
      <div class="notes-item"><strong>F5</strong> — Start slideshow from beginning · <strong>Shift+F5</strong> — from current slide</div>
      <div class="notes-item"><strong>Default extension</strong> — .pptx · Older = .ppt</div>
      <div class="notes-item"><strong>Slide layouts</strong> — Title, Content, Two Content, Blank, etc.</div></div></div>`
  },
  {
    id:'networking', course:'Computer', icon:'🌐', name:'Networking & Internet',
    tag:'comp', pts:8,
    notes:`<div class="notes-header" style="background:linear-gradient(135deg,#0369a1,#38bdf8);">
      <div class="notes-header-bl"></div><div class="notes-header-icon">🌐</div>
      <div class="notes-header-body"><div class="notes-header-title">Networking & Internet</div><div class="notes-header-sub">COMPUTER · NETWORKS</div></div></div>
      <div class="notes-section"><div class="notes-section-title">📊 Network Types</div><div style="overflow-x:auto">
      <table class="notes-table"><tr><th>Type</th><th>Range</th><th>Example</th></tr>
      <tr><td>PAN</td><td>~1 m</td><td>Bluetooth, USB</td></tr>
      <tr><td>LAN</td><td>Building/campus</td><td>Office Ethernet</td></tr>
      <tr><td>MAN</td><td>City</td><td>Cable TV network</td></tr>
      <tr><td>WAN</td><td>Country/global</td><td>Internet</td></tr></table></div></div>
      <div class="notes-section"><div class="notes-section-title">⚡ OSI Model (7 Layers)</div><div class="notes-list">
      <div class="notes-item"><strong>7 – Application</strong> (HTTP, FTP, SMTP) · <strong>6 – Presentation</strong> (encryption, compression) · <strong>5 – Session</strong></div>
      <div class="notes-item"><strong>4 – Transport</strong> (TCP/UDP) · <strong>3 – Network</strong> (IP, routing) · <strong>2 – Data Link</strong> (MAC) · <strong>1 – Physical</strong></div>
      <div class="notes-item"><strong>TCP</strong> — connection-oriented, reliable · <strong>UDP</strong> — connectionless, faster</div></div></div>
      <div class="notes-section"><div class="notes-section-title">⚡ Key Terms</div><div class="notes-list">
      <div class="notes-item"><strong>IP address</strong> — IPv4 = 32-bit (e.g. 192.168.1.1); IPv6 = 128-bit</div>
      <div class="notes-item"><strong>DNS</strong> — translates domain names to IP addresses</div>
      <div class="notes-item"><strong>HTTP</strong> port 80 · <strong>HTTPS</strong> port 443 · <strong>FTP</strong> port 21 · <strong>SMTP</strong> port 25 · <strong>SSH</strong> port 22</div>
      <div class="notes-item"><strong>Firewall</strong> — filters traffic; <strong>Router</strong> — connects networks; <strong>Switch</strong> — connects devices within LAN; <strong>Hub</strong> — broadcasts to all ports</div></div></div>
      <div class="notes-section"><div class="notes-section-title">💡 Mnemonic</div>
      <div class="mnemonic-box"><div class="mnemonic-title">🧠 OSI Layers (Top → Bottom)</div>
      <div class="mnemonic-text"><strong>All People Seem To Need Data Processing</strong><br>Application · Presentation · Session · Transport · Network · Data Link · Physical</div></div></div>`
  },
  {
    id:'os-basics', course:'Computer', icon:'🖥️', name:'Operating Systems',
    tag:'comp', pts:7,
    notes:`<div class="notes-header" style="background:linear-gradient(135deg,#0369a1,#38bdf8);">
      <div class="notes-header-bl"></div><div class="notes-header-icon">🖥️</div>
      <div class="notes-header-body"><div class="notes-header-title">Operating Systems</div><div class="notes-header-sub">COMPUTER · OS</div></div></div>
      <div class="notes-section"><div class="notes-section-title">📊 Types of OS</div><div style="overflow-x:auto">
      <table class="notes-table"><tr><th>Type</th><th>Example</th></tr>
      <tr><td>Single-user, single-tasking</td><td>MS-DOS</td></tr>
      <tr><td>Single-user, multitasking</td><td>Windows, macOS</td></tr>
      <tr><td>Multi-user, multitasking</td><td>Linux, UNIX</td></tr>
      <tr><td>Real-time OS (RTOS)</td><td>VxWorks (medical devices)</td></tr>
      <tr><td>Mobile OS</td><td>Android (Linux-based), iOS</td></tr></table></div></div>
      <div class="notes-section"><div class="notes-section-title">⚡ Windows Shortcuts</div><div class="notes-list">
      <div class="notes-item"><strong>Win+D</strong> — Show desktop · <strong>Win+E</strong> — File Explorer · <strong>Win+L</strong> — Lock</div>
      <div class="notes-item"><strong>Alt+F4</strong> — Close window · <strong>Alt+Tab</strong> — Switch apps</div>
      <div class="notes-item"><strong>Ctrl+Alt+Del</strong> — Task Manager / Security options</div>
      <div class="notes-item"><strong>Print Screen (PrtSc)</strong> — screenshot to clipboard; <strong>Win+PrtSc</strong> — saves to Pictures</div></div></div>
      <div class="notes-section"><div class="notes-section-title">⚡ File System Terms</div><div class="notes-list">
      <div class="notes-item"><strong>NTFS</strong> — Windows default; supports permissions, encryption, &gt;4 GB files</div>
      <div class="notes-item"><strong>FAT32</strong> — compatible with all OS; max file size 4 GB</div>
      <div class="notes-item"><strong>exFAT</strong> — for USB drives; no 4 GB limit; works on Windows + Mac</div></div></div>`
  },
  {
    id:'cybersecurity', course:'Computer', icon:'🔒', name:'Security & Internet Safety',
    tag:'comp', pts:7,
    notes:`<div class="notes-header" style="background:linear-gradient(135deg,#0369a1,#38bdf8);">
      <div class="notes-header-bl"></div><div class="notes-header-icon">🔒</div>
      <div class="notes-header-body"><div class="notes-header-title">Security & Internet Safety</div><div class="notes-header-sub">COMPUTER · CYBERSECURITY</div></div></div>
      <div class="notes-section"><div class="notes-section-title">📊 Types of Malware</div><div style="overflow-x:auto">
      <table class="notes-table"><tr><th>Type</th><th>What It Does</th></tr>
      <tr><td>Virus</td><td>Attaches to files; spreads when file executed</td></tr>
      <tr><td>Worm</td><td>Self-replicates across networks; no host file needed</td></tr>
      <tr><td>Trojan</td><td>Disguised as legitimate software</td></tr>
      <tr><td>Ransomware</td><td>Encrypts files; demands payment</td></tr>
      <tr><td>Spyware</td><td>Collects data without user knowledge</td></tr>
      <tr><td>Adware</td><td>Displays unwanted advertisements</td></tr></table></div></div>
      <div class="notes-section"><div class="notes-section-title">⚡ Key Terms</div><div class="notes-list">
      <div class="notes-item"><strong>Phishing</strong> — fraudulent emails/sites to steal credentials</div>
      <div class="notes-item"><strong>Firewall</strong> — blocks unauthorised network access</div>
      <div class="notes-item"><strong>Encryption</strong> — converts data to unreadable form; needs key to decrypt</div>
      <div class="notes-item"><strong>SSL/TLS</strong> — encrypts web traffic (HTTPS padlock); port 443</div>
      <div class="notes-item"><strong>2FA</strong> — two-factor authentication; password + OTP/biometric</div>
      <div class="notes-item"><strong>Antivirus</strong> — scans, detects and removes malware; signature-based + heuristic</div></div></div>`
  },

  // ══════════════════════════════════════════
  // GK (General Knowledge)
  // ══════════════════════════════════════════
  {
    id:'india-constitution', course:'GK', icon:'📜', name:'Indian Constitution',
    tag:'gk', pts:8,
    notes:`<div class="notes-header" style="background:linear-gradient(135deg,#b45309,#fbbf24);">
      <div class="notes-header-bl"></div><div class="notes-header-icon">📜</div>
      <div class="notes-header-body"><div class="notes-header-title">Indian Constitution</div><div class="notes-header-sub">GK · POLITY</div></div></div>
      <div class="notes-section"><div class="notes-section-title">⚡ Key Facts</div><div class="notes-list">
      <div class="notes-item"><strong>Adopted</strong> — 26 Nov 1949 (Constitution Day) · <strong>Enforced</strong> — 26 Jan 1950 (Republic Day)</div>
      <div class="notes-item"><strong>Preamble</strong> — Sovereign, Socialist, Secular, Democratic Republic (SSSDR); Justice, Liberty, Equality, Fraternity</div>
      <div class="notes-item"><strong>Parts</strong> — 22 Parts · <strong>Schedules</strong> — 12 · <strong>Articles</strong> — 395 (originally)</div>
      <div class="notes-item"><strong>Father of Constitution</strong> — Dr. B.R. Ambedkar (Chairman, Drafting Committee)</div>
      <div class="notes-item"><strong>Fundamental Rights</strong> — Part III, Articles 12–35 (6 rights)</div>
      <div class="notes-item"><strong>DPSPs</strong> — Part IV, Articles 36–51 (non-justiciable)</div>
      <div class="notes-item"><strong>Fundamental Duties</strong> — Part IVA, Article 51A (11 duties; added by 42nd Amendment 1976)</div></div></div>
      <div class="notes-section"><div class="notes-section-title">📊 Important Articles</div><div style="overflow-x:auto">
      <table class="notes-table"><tr><th>Article</th><th>Subject</th></tr>
      <tr><td>Art. 14</td><td>Equality before law</td></tr>
      <tr><td>Art. 17</td><td>Abolition of untouchability</td></tr>
      <tr><td>Art. 19</td><td>Freedom of speech, assembly, movement etc.</td></tr>
      <tr><td>Art. 21</td><td>Right to life and personal liberty</td></tr>
      <tr><td>Art. 32</td><td>Right to Constitutional remedies (Heart of Constitution)</td></tr>
      <tr><td>Art. 370</td><td>Special status of J&K (abrogated 2019)</td></tr></table></div></div>`
  },
  {
    id:'science-gk', course:'GK', icon:'🔬', name:'Science & Technology GK',
    tag:'gk', pts:7,
    notes:`<div class="notes-header" style="background:linear-gradient(135deg,#b45309,#fbbf24);">
      <div class="notes-header-bl"></div><div class="notes-header-icon">🔬</div>
      <div class="notes-header-body"><div class="notes-header-title">Science & Technology GK</div><div class="notes-header-sub">GK · SCIENCE</div></div></div>
      <div class="notes-section"><div class="notes-section-title">⚡ Important Inventions</div><div class="notes-list">
      <div class="notes-item"><strong>X-ray</strong> — Wilhelm Röntgen (1895) · used in diagnosis of fractures, TB</div>
      <div class="notes-item"><strong>Penicillin</strong> — Alexander Fleming (1928) · first antibiotic</div>
      <div class="notes-item"><strong>Vaccine (smallpox)</strong> — Edward Jenner (1796)</div>
      <div class="notes-item"><strong>DNA double helix</strong> — Watson &amp; Crick (1953); with data from Rosalind Franklin</div>
      <div class="notes-item"><strong>Blood groups</strong> — Karl Landsteiner (1901) · ABO system; Nobel 1930</div></div></div>
      <div class="notes-section"><div class="notes-section-title">📊 SI Units — Key</div><div style="overflow-x:auto">
      <table class="notes-table"><tr><th>Quantity</th><th>Unit</th><th>Symbol</th></tr>
      <tr><td>Length</td><td>Metre</td><td>m</td></tr>
      <tr><td>Mass</td><td>Kilogram</td><td>kg</td></tr>
      <tr><td>Time</td><td>Second</td><td>s</td></tr>
      <tr><td>Current</td><td>Ampere</td><td>A</td></tr>
      <tr><td>Temperature</td><td>Kelvin</td><td>K</td></tr>
      <tr><td>Pressure</td><td>Pascal</td><td>Pa</td></tr>
      <tr><td>Force</td><td>Newton</td><td>N</td></tr></table></div></div>
      <div class="notes-section"><div class="notes-section-title">⚡ Human Body GK</div><div class="notes-list">
      <div class="notes-item"><strong>Largest organ</strong> — Skin · <strong>Largest gland</strong> — Liver</div>
      <div class="notes-item"><strong>Hardest substance</strong> — Enamel of teeth · <strong>Smallest bone</strong> — Stapes (ear)</div>
      <div class="notes-item"><strong>Normal blood pH</strong> — 7.35–7.45 · <strong>Normal blood volume</strong> — 5–6 L</div>
      <div class="notes-item"><strong>RBC lifespan</strong> — 120 days · <strong>Platelet lifespan</strong> — 7–10 days</div></div></div>`
  },
  {
    id:'india-gk', course:'GK', icon:'🇮🇳', name:'India — States & General',
    tag:'gk', pts:7,
    notes:`<div class="notes-header" style="background:linear-gradient(135deg,#b45309,#fbbf24);">
      <div class="notes-header-bl"></div><div class="notes-header-icon">🇮🇳</div>
      <div class="notes-header-body"><div class="notes-header-title">India — States & General</div><div class="notes-header-sub">GK · INDIA</div></div></div>
      <div class="notes-section"><div class="notes-section-title">⚡ Key Facts</div><div class="notes-list">
      <div class="notes-item"><strong>States</strong> — 28 states + 8 Union Territories (after J&K reorganisation 2019)</div>
      <div class="notes-item"><strong>Capital</strong> — New Delhi · <strong>Largest state (area)</strong> — Rajasthan · <strong>Smallest state (area)</strong> — Goa</div>
      <div class="notes-item"><strong>Most populous state</strong> — Uttar Pradesh (Census 2011)</div>
      <div class="notes-item"><strong>Longest river</strong> — Ganga (2,525 km) · <strong>Largest river (volume)</strong> — Brahmaputra</div>
      <div class="notes-item"><strong>Highest peak</strong> — K2 (disputed); Kangchenjunga (highest entirely in India)</div>
      <div class="notes-item"><strong>National animal</strong> — Bengal Tiger · <strong>National bird</strong> — Peacock · <strong>National flower</strong> — Lotus · <strong>National fruit</strong> — Mango</div></div></div>
      <div class="notes-section"><div class="notes-section-title">📊 Important National Symbols</div><div style="overflow-x:auto">
      <table class="notes-table"><tr><th>Symbol</th><th>Name</th></tr>
      <tr><td>National Emblem</td><td>Lion Capital of Ashoka (Sarnath)</td></tr>
      <tr><td>National Anthem</td><td>Jana Gana Mana (Tagore, 1911) — duration 52 sec</td></tr>
      <tr><td>National Song</td><td>Vande Mataram (Bankim Chandra, Anandamath)</td></tr>
      <tr><td>National Currency</td><td>Indian Rupee (₹) — symbol by D. Udaya Kumar</td></tr>
      <tr><td>National Calendar</td><td>Saka Calendar (adopted 1957)</td></tr></table></div></div>`
  },

];
