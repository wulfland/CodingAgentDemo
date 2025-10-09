# CodingAgentDemo Repository Instructions

**ALWAYS** follow these instructions first and only fallback to additional search and context gathering if the information here is incomplete or found to be in error.

## Repository Overview
This repository contains a browser-based Connect Four (4 Gewinnt) game built with vanilla HTML, CSS, and JavaScript. The game features modern animations, responsive design, and is deployed via GitHub Pages.

## Working Effectively

### Environment Setup
The following development tools are available and validated to work:
- Node.js v20.19.5 with npm
- Python 3.12.3
- Git 2.51.0

Note: No build tools or package managers are required for the core application as it uses vanilla JavaScript.

### Current Repository State
- **NO BUILD REQUIRED**: Static HTML/CSS/JavaScript project
- **NO TESTS TO RUN**: No test framework or test files exist
- **RUNS IN BROWSER**: Open index.html directly in any modern web browser
- Repository uses Visual Studio .gitignore (legacy from initial setup)

### Repository Structure
```
.
├── .git/                    # Git metadata  
├── .github/                 # GitHub configuration
│   ├── copilot-instructions.md
│   └── workflows/          # GitHub Actions workflows
├── .gitignore              # Visual Studio .gitignore (legacy)
├── README.md               # Project documentation
├── index.html              # Main game HTML file
├── styles.css              # Game styling with animations
└── game.js                 # Game logic and event handlers
```

### Running the Game
This is a static HTML/CSS/JavaScript project that runs directly in the browser:

#### Local Development
```bash
# Option 1: Open directly in browser
# Simply open index.html in any modern web browser

# Option 2: Use a simple HTTP server (recommended for testing)
# Python 3:
python3 -m http.server 8000
# Then open http://localhost:8000 in your browser

# Node.js (if http-server is installed globally):
npx http-server -p 8000
# Then open http://localhost:8000 in your browser
```

#### Making Changes
- Edit `index.html` for structure changes
- Edit `styles.css` for styling and animations
- Edit `game.js` for game logic
- Refresh browser to see changes (no build step needed)

### Validation Steps
For changes to this project:
- **Visual validation**: Open index.html in browser and test gameplay
- **Functionality validation**: 
  - Test placing pieces in all columns
  - Verify win detection (horizontal, vertical, diagonal)
  - Test draw detection (full board)
  - Verify reset functionality
  - Check animations and visual effects
- **Responsive testing**: Test on different screen sizes
- **Browser compatibility**: Test in Chrome, Firefox, Safari, Edge

### Development Workflow
1. **Check repository state**: Run `ls -la` to see current files
2. **Make changes**: Edit HTML, CSS, or JavaScript files as needed
3. **Test locally**: Open/refresh index.html in browser to verify changes
4. **Visual verification**: Play the game to ensure functionality works correctly
5. **Before committing**: Test all game features and verify responsive design

### Common Tasks and Expected Outcomes

#### Repository Inspection
```bash
# List repository contents
ls -la
# Expected output: .git/, .github/, .gitignore, README.md, index.html, styles.css, game.js

# Check git status
git status
# Expected: Clean working directory or modified files you're working on

# View README
cat README.md
# Expected output: Documentation about the Connect Four game
```

#### Running the Game Locally
```bash
# Start a local server (recommended)
python3 -m http.server 8000
# Expected output: Serving HTTP on 0.0.0.0 port 8000...
# Then open http://localhost:8000 in your browser

# Or open directly
# Open index.html in any modern web browser
```

#### Testing Game Features
- Click columns to drop pieces
- Win with 4 in a row (horizontal, vertical, or diagonal)
- Test "Neues Spiel" (New Game) button
- Verify animations on piece drops and wins
- Test responsive design at different screen sizes

### Notes for GitHub Copilot Agents
- This is a pure front-end static web application
- No build tools, transpilation, or bundling required
- Game logic is in vanilla JavaScript (no frameworks)
- Styling uses modern CSS with animations and gradients
- German language UI (Spieler = Player, Neues Spiel = New Game)
- Deployed via GitHub Pages (automatic via GitHub Actions)
- .gitignore is from Visual Studio but not relevant to this HTML/CSS/JS project
- Focus changes on minimal, surgical modifications to existing code
