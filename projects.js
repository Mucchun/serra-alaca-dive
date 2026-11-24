/*
  THE LAPTOP SCREENS
  ------------------
  Every block between { and } below is one screen on the laptop, in order.
  To add a project, copy one of the three templates, paste it into the list
  (remember the comma after the closing brace) and change the words.
  Put pictures and videos in the "assets" folder.

  title  the big word on the white ticket (keep it short, about 12 letters)
  rows   the three small lines on the ticket
  key    the small heading beside the laptop
  text   one or two sentences about it
  link   optional: ['words to click', 'https://where-it-goes']
  filter optional, for a picture or video: a CSS filter such as 'hue-rotate(155deg)'
  cover  optional: true makes a picture or video fill the whole laptop screen

  1. A project with a picture (a 3:2 landscape image fills the screen best)

    { title: 'MY PROJECT', rows: ['WHAT IT IS', 'MADE WITH', '2026'],
      key: '// my project',
      text: '— one or two sentences about it.',
      link: ['play it in your browser', 'https://example.com'],
      image: 'assets/my-project.jpg', alt: 'What the picture shows.' },

  2. A project with a video (mp4, plays silently on a loop; poster is the still shown first)

    { title: 'MY PROJECT', rows: ['WHAT IT IS', 'MADE WITH', '2026'],
      key: '// my project',
      text: '— one or two sentences about it.',
      video: 'assets/my-project.mp4', poster: 'assets/my-project.jpg' },

  3. A list (any number of rows; a long list scrolls inside the laptop screen)

    { title: 'MORE WORK', rows: ['LINE ONE', 'LINE TWO', '2026'],
      key: '// more work',
      text: '— one or two sentences about it.',
      slide: { h: 'More work', compact: true, items: [
        ['SMALL LABEL', 'Project name', 'One line about it.'],
        ['SMALL LABEL', 'Project name', 'One line about it.']
      ] } },
*/
window.LAPTOP_SCREENS = [
  /* Home screen: the moving dandelion, recoloured from orange to green-blue.
     To change the colour, change the number in hue-rotate (0 = original orange). */
  { title: 'SERRA ALACA', rows: ['GAME DEVELOPER', 'DESIGNER', 'CENTRAL LONDON'],
    key: '// welcome',
    text: '— I build games, apps and real-time 3D. Swipe, scroll or press next to look through my experience and projects.',
    link: ['open the full cv', 'assets/Serra-Alaca-CV.pdf'],
    /* An animated picture (not a video), so every browser plays it straight
       away without a click. assets/dandelion.mp4 is the same clip as a video. */
    image: 'assets/dandelion.webp', alt: 'A glowing dandelion drifting in the dark.',
    filter: 'hue-rotate(155deg) saturate(.9)', cover: true },
  { title: 'EXPERIENCE', rows: ['ELCODE', 'PHENOMENA CREATIVE ADVISORY', '2025 — NOW'],
    key: '// experience',
    text: '— software intern at ElCode, AI creative technologist at Phenomena Creative Advisory and contract design engineer at Luna Group Technologies.',
    link: ['open the full cv', 'assets/Serra-Alaca-CV.pdf'],
    slide: { h: 'Experience', items: [
      ['11/2026 — NOW', 'Software Intern', 'ElCode. Managing the build of the “cat ate the elephant” animation tool, plus software integrations and digital marketing.'],
      ['09/2026 — NOW', 'AI Creative Technologist', 'Phenomena Creative Advisory. A 3D WebGL, Three.js and Next.js project for a healthcare company: code and design.'],
      ['11/2026 — NOW', 'Design Engineer', 'Luna Group Technologies. A bilingual 3D virtual showroom and an AI brand film.'],
      ['09/2026 — NOW', 'Ambassador', 'HerFuture. Part of the UK ambassador network.'],
      ['01/2026 — NOW', 'Ambassador', 'Women in Games. Part of the global ambassador network.'],
      ['06 — 09/2025', 'Technical Intern', 'Luna Group Technologies. Software, hardware and back-end work across live projects.'],
      ['08/2021', 'Research Assistant', 'Blu TV, Technology Department. Product design and digital product management with Discovery Inc.'],
      ['07/2021', 'Assistant Animator', '23 Animations. Character concepts and design for films, and support for the video editors.'],
      ['06/2021', 'Marketing Intern', 'LG Electronics. Social media, web, print and video marketing.'],
      ['07 — 08/2020', 'Partner Company Team Member', 'Zebra Technologies. Digital marketing and strategic planning for a product.'],
      ['06 — 07/2020', 'Marketing Research Assistant', 'Luna Media. Designed a new company logo and helped produce PR material.'],
      ['08/2019', 'Video Editing Intern', 'CNN International / CNN Türk. Video archive and ideas for new pieces.'],
      ['07/2019', 'Advertising Intern', 'FCB Artgroup. Marketing strategy research and marketing events.']
    ] } },
  { title: 'EDUCATION', rows: ['QUEEN MARY, LONDON', 'ROYAL HOLLOWAY, LONDON', '2018 — 2026'],
    key: '// education',
    text: '— an MSc in Computer Science on top of a First Class BA in Video Games, Art and Design, both on merit scholarships.',
    slide: { h: 'Education', items: [
      ['2025 — 2026', 'MSc Computer Science', 'Queen Mary University of London. Global Talent Scholarship.'],
      ['2022 — 2025', 'BA Video Games, Art and Design', 'Royal Holloway, University of London. First Class Honours. Future International Leaders Scholarship.'],
      ['2018 — 2022', 'International Baccalaureate', 'Sisli Terakki Foundation Private High Schools.'],
      ['2025', 'CS50’s Introduction to AI', 'Harvard University certificate.'],
      ['2024', 'Couch to Coder', 'The Technology Academy, Bright Network certificate.']
    ] } },
  { title: 'SKILLS', rows: ['CODE', 'GAME ENGINES', '3D ART + DESIGN'],
    key: '// skills + tools',
    text: '— I write gameplay and software, and I also model, sculpt, texture and design what goes on screen.',
    link: ['see my code on github', 'https://github.com/Mucchun'],
    slide: { h: 'Skills + tools', groups: [
      ['CODE', ['C#', 'C++', 'Python', 'JavaScript', 'TypeScript', 'SQL', 'HTML', 'Blueprints']],
      ['ENGINES + SOFTWARE', ['Unreal Engine', 'Unity', 'Visual Studio', 'Oracle SQL', 'Figma']],
      ['3D + FILM', ['ZBrush', 'Maya 2025', 'Marmoset Toolbag', 'DaVinci Resolve', 'Adobe']],
      ['LANGUAGES', ['English', 'Turkish', 'Spanish (limited)']]
    ] } },
  { title: 'CATELAND', rows: ['CAT ATE THE ELEPHANT', 'WALKABLE 3D GALLERY FOR ELCODE', '2026'],
    key: '// cat ate the elephant',
    text: '— a floating island village I am building at ElCode in Next.js and Three.js: walk between the circus gallery, a factory, a club and a greenhouse through a ten-minute day and night, then step inside to the artworks.',
    link: ['walk around it in your browser', 'https://cat-ate-the-elephant.vercel.app'],
    video: 'assets/cat-ate-the-elephant.mp4?v=7', poster: 'assets/cat-ate-the-elephant.jpg?v=6' },
  { title: 'APEX RIVALS', rows: ['MY OWN GAME', 'ARCADE GRAND PRIX RACER', '2026'],
    key: '// apex rivals gp',
    text: '— a browser racing game I built in Three.js: twelve rival drivers, six circuits, turbo slides, power-ups and a four-race championship.',
    link: ['play it in your browser', 'https://mucchun.github.io/apex-rivals-gp/'],
    video: 'assets/apex-rivals-gp.mp4', poster: 'assets/apex-rivals-gp.jpg' },
  { title: 'ASSISTIVE', rows: ['VISION AID FOR BLIND USERS', 'TENSORFLOW.JS, IN THE BROWSER', '2026'],
    key: '// assistive web app',
    text: '— a web app that turns a phone camera into a guide for blind and low-vision users: it detects objects live, then says what they are, which way and how close.',
    link: ['try it in your browser', 'https://project-3eq72.vercel.app'],
    video: 'assets/assistive-web-app.mp4', poster: 'assets/assistive-web-app.jpg' },
  { title: 'LUNA HEALTH', rows: ['WOMEN’S HEALTH APP', 'IPHONE + MAC, 7 LANGUAGES', '2026'],
    key: '// luna health',
    text: '— a health tracker I built for PCOS, endometriosis and PMDD: cycle predictions, quick symptom logging, insights generated on the device, and an anonymous community shared between phones. Health data never leaves the device.',
    link: ['see the code on github', 'https://github.com/Mucchun/luna-health'],
    video: 'assets/luna-health.mp4', poster: 'assets/luna-health.jpg' },
  { title: 'PERFUME AD', rows: ['GOLDEN ESSENCE', '3D PRODUCT COMMERCIAL', '2026'],
    key: '// golden essence',
    text: '— a fragrance commercial for a perfume I invented: the bottle started as a Meshy AI model, then I rebuilt the glass, liquid and gold in Blender, lit it against a desert dusk, and cut five shots with a title and soundtrack.',
    video: 'assets/golden-essence.mp4', poster: 'assets/golden-essence.jpg' },
  { title: 'ZEBRA CIRCUS', rows: ['ZEBRA TECHNOLOGIES SHOWCASE', 'FIRST-PERSON BLASTER', '2026'],
    key: '// zebra circus blaster',
    text: '— a first-person blaster for the browser that doubles as a Zebra Technologies product showcase: an opening cinematic drops you into the big top to pop barcode balloons with real Zebra scanners, chain combos and clear four levels.',
    link: ['play it in your browser', 'https://zebra-circus-game.vercel.app'],
    video: 'assets/zebra-circus.mp4?v=3', poster: 'assets/zebra-circus-play.jpg?v=3' },
  { title: 'GAMES + APPS', rows: ['UNREAL ENGINE + C++', 'THREE.JS + TYPESCRIPT', '2024 — 2026'],
    key: '// more games + apps',
    text: '— gameplay code in Unreal, small browser games, and apps built for health and accessibility.',
    link: ['see them on github', 'https://github.com/Mucchun'],
    slide: { h: 'More games + apps', compact: true, items: [
      ['UNREAL ENGINE, C++', 'Carnival', 'A C++ game project with gameplay code and content structure.'],
      ['JAVASCRIPT', 'Cupid’s 21', 'A browser card game: play 21 at Cupid’s table against Eros.'],
      ['THREE.JS, YOLO', 'Spatial Replay', 'Flat video becomes a 4D world you can walk inside.']
    ] } },
  { title: 'AI + DATA', rows: ['PYTHON + SQL', 'BAYESIAN NETWORKS + ML', '2025 — 2026'],
    key: '// ai + data projects',
    text: '— the computer-science side: agents, causal models, classifiers, dashboards and database design.',
    link: ['see them on github', 'https://github.com/Mucchun'],
    slide: { h: 'AI + data', compact: true, items: [
      ['AI AGENTS', 'POLIS', 'Turns any UK bill into a structured policy brief with live data.'],
      ['BAYESIAN NETWORKS', 'Diabetes Data Analytics', 'Causal links in diabetes and heart-health data.'],
      ['JUPYTER, API', 'UKHSA Influenza Dashboard', 'A public-health dashboard on UKHSA flu data.'],
      ['MACHINE LEARNING', 'MoMA Artwork Classifier', 'Logistic regression and k-nearest neighbours.'],
      ['SQL', 'London Underground Database', 'Check-in and check-out data for Tube journeys.']
    ] } }
];
