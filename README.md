My Certifications Portfolio

A modern cyberpunk-inspired certifications and academic portfolio built with React.

This project showcases my certifications, professional learning, and academic achievements across web development, programming, cybersecurity, networking, data analysis, and computer science.

✨ Features
🎓 Academic & Certification sections
🌐 Filter certifications by platform
🃏 Interactive cyberpunk certificate cards
⚡ Animated neon borders and gradient typography
🔍 Full-size certificate image preview
📱 Responsive design for desktop, tablet, and mobile
📂 JSON-based certificate and academic data
🎨 Cyberpunk UI with grid, glow, and scanline effects
♿ Reduced-motion support
🌐 Platforms
FreeCodeCamp
HackerRank
Cybrary
Kaggle
NextJS
Networking
Saylor
🎓 Academic
Computer Science Engineering
Mechanical Engineering
🛠️ Tech Stack
React 19
JavaScript (ES6+)
CSS3
OGL / WebGL
JSON
Create React App
📁 Project Structure
src/
├── components/
│ ├── cards/
│ │ └── CertCard.js
│ └── FilterBar.js
│
├── data/
│ ├── academic/
│ └── certificates/
│
├── pages/
│ ├── Certificates.js
│ └── Certificates.css
│
├── App.js
└── index.js

public/
└── images/
├── fcc/
├── hackerrank/
├── cybrary/
├── kaggle/
└── ...

🚀 Getting Started
git clone <your-repository-url>
cd cert-portfolio
npm install
npm start

The app will run locally in development mode.

📦 Production Build
npm run build

Production source maps are disabled to avoid exposing convenient mappings to the original source files in browser DevTools.

Disabling source maps does not make frontend code private. JavaScript delivered to the browser can still be inspected. Never store passwords, API keys, tokens, or other secrets in frontend code.

➕ Adding Certificates

Certificates are stored as individual JSON files inside:

src/data/certificates/

Add the certificate image to the appropriate folder inside:

public/images/

Then add its information to the relevant JSON file.

Academic records are maintained separately inside:

src/data/academic/

This keeps professional certifications and academic achievements organized independently.

🎨 Design

The interface follows a futuristic cyberpunk / terminal aesthetic using:

Neon cyan, purple, and pink accents
Dark backgrounds
Glowing typography
Animated borders
Cyber grid effects
Scanlines
Smooth hover interactions
📱 Responsive

Designed for:

🖥️ Desktop
💻 Laptop
📟 Tablet
📱 Mobile
📄 License

This is a personal portfolio project showcasing my certifications and academic achievements.

Certificate images and certification links belong to their respective organizations and platforms.
