My Certifications Portfolio

A modern, cyberpunk-inspired certifications and academic portfolio built with React.

This project showcases my completed certifications, courses, labs, professional learning platforms, and academic achievements in areas such as web development, programming, cybersecurity, networking, data analysis, and computer science.

Each record is stored as structured JSON data and displayed through an interactive, responsive certificate interface.

Features

🎓 Academic & Certification Sections

Separate filtering for professional platforms and academic achievements.
Academic records include:
Computer Science Engineering
Mechanical Engineering

🌐 Platform Filtering

Filter certifications by platform:
FreeCodeCamp
HackerRank
Cybrary
Kaggle
NextJS
Networking
Saylor

🃏 Interactive Certificate Cards

Cyberpunk-inspired card design.
Animated neon borders.
Gradient title animations.
Hover effects.
Certificate preview interaction.

🔍 Full-Size Certificate Preview

Click any certificate image to open it in a larger modal view.
Close the preview without leaving the page.

📱 Responsive Design

Desktop optimized.
Tablet support.
Mobile friendly.
Responsive certificate grid.

⚡ JSON-Based Data Architecture

Certificates are separated into individual JSON files.
Academic records are maintained separately.
Adding new certificates does not require rewriting the main UI.

🎨 Cyberpunk UI

Neon cyan, purple, and pink color palette.
Animated cyber grid.
Scanline effects.
Glowing interactions.
Dark futuristic interface.

♿ Reduced Motion Support

Animations are automatically reduced for users who have enabled reduced motion preferences.

🚀 Production Optimized

Production source maps are disabled to avoid exposing convenient mappings to the original React source files in browser DevTools.
Technologies Used
React 19 – Frontend library
JavaScript (ES6+)
CSS3 – Styling, animations, and responsive design
OGL – WebGL-based visual effects
JSON – Certificate and academic data management
Create React App – Project tooling and production builds
Project Structure
src/
├── components/
│ ├── cards/
│ │ └── CertCard.js
│ │
│ └── FilterBar.js
│
├── data/
│ ├── academic/
│ │ ├── computer-science-engineering.json
│ │ └── mechanical-engineering.json
│ │
│ ├── certificates/
│ │ ├── cybrary.json
│ │ ├── freecodecamp.json
│ │ ├── hackerrank.json
│ │ ├── kaggle.json
│ │ ├── networking.json
│ │ ├── nextjs.json
│ │ └── saylor.json
│ │
│ └── types.json
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

Filtering System

The portfolio uses two main filter modes.

Platform

Displays professional certifications grouped by platform.

PLATFORM
├── All
├── FreeCodeCamp
├── Cybrary
├── HackerRank
├── Kaggle
├── NextJS
├── Networking
└── Saylor

Academic

Displays academic achievements separately.

ACADEMIC
├── All
├── Computer Science Engineering
└── Mechanical Engineering

This separation keeps the portfolio structure clean and prevents academic qualifications from being mixed with certification platforms.

Data Structure

Certificate data is stored in individual JSON files.

Example:

[
{
"id": "fcc-responsive-web-design",
"title": "Responsive Web Design",
"image": "/images/fcc/responsivewebdesign.png",
"link": "https://www.freecodecamp.org/certification/zeprox/responsive-web-design",
"skills": [
"html",
"css",
"responsive-design"
],
"type": "certification"
}
]

Academic records are stored separately from certification platform data.

Installation

Clone the repository:

git clone <your-repository-url>

Navigate into the project:

cd cert-portfolio

Install dependencies:

npm install

Start the development server:

npm start

The application will run locally in development mode.

Production Build

Create an optimized production build:

npm run build

The project is configured to disable source-map generation during production builds:

"build": "GENERATE_SOURCEMAP=false react-scripts build"

This prevents production .map files from exposing convenient mappings between bundled JavaScript and the original React source files.

Note: Disabling source maps does not make frontend source code completely private. Any JavaScript required by the browser can still be inspected. Never store passwords, private API keys, tokens, or other secrets in frontend code.

Adding a New Certificate

To add a new certificate:

Add the certificate image to the appropriate public/images/ directory.
Add the certificate information to the relevant JSON file inside src/data/certificates/.
Include the following fields:
id
title
image
link
skills
type

Example:

{
"id": "example-certificate",
"title": "Example Certificate",
"image": "/images/example/certificate.png",
"link": "https://example.com/certificate",
"skills": [
"javascript",
"web-development"
],
"type": "certification"
}

The certificate will automatically become available through the platform filter.

Adding Academic Records

Academic achievements are maintained separately inside:

src/data/academic/

For example:

computer-science-engineering.json
mechanical-engineering.json

This keeps academic qualifications independent from external certification platforms.

Design Philosophy

The interface follows a cyberpunk / futuristic terminal aesthetic featuring:

Neon cyan highlights
Purple and pink accents
Dark backgrounds
Animated borders
Glowing typography
Cyber grid effects
Scanline effects
Smooth hover interactions
Minimal and responsive UI

The goal is to create a visually distinctive portfolio while keeping the interface clean, readable, and easy to navigate.

Responsive Support

The portfolio is designed to work across:

🖥️ Desktop
💻 Laptop
📱 Mobile
📟 Tablet

Certificate cards, filters, images, and modal previews adapt to different screen sizes.

License

This project is primarily a personal portfolio and showcase of my certifications and academic achievements.

Certificate images and certification links belong to their respective organizations and platforms.
