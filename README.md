# Dark Mode Toggle 🌙

**Version: 1.0.0**

A beginner-friendly project to learn web development fundamentals!

## Features

✨ **Toggle between light and dark mode**
💾 **Saves your preference** (using browser localStorage)
⚡ **Smooth transitions** between themes
📱 **Fully responsive** design
⌨️ **Keyboard shortcut** (Shift + D)

## What You'll Learn

- **HTML** - Basic page structure and semantic elements
-  **CSS** - Styling, CSS variables for theming, flexbox, transitions
- **JavaScript** - Event listeners, DOM manipulation, localStorage API, keyboard events

## How It Works

### 1. **HTML Structure** (`index.html`)
- Creates the page layout with header, button, and content sections
- Uses semantic HTML (`<header>`, `<main>`, `<section>`)
- Linked to manifest.json for PWA support

### 2. **CSS Styling** (`style.css`)
- Uses **CSS variables** (`:root` selector) to define colors
- `.dark-mode` class overrides variables for dark theme
  - Smooth transitions between light and dark modes
- Responsive design for mobile devices

### 3. **JavaScript Logic** (`script.js`)
- **Detects** if user has a saved theme preference
- **Toggles** between light/dark mode on button click
- **Keyboard shortcut** - Shift + D to toggle
- **Saves** preference to browser's localStorage
- **Respects** system color scheme preference (if no saved preference)

## File Structure

```
dark-mode-toggle/
├── index.html      # HTML structure with PWA support
├── style.css       # Styling and themes
├── script.js       # Toggle logic + keyboard shortcut
├── manifest.json   # PWA configuration
├── package.json    # Project metadata
└── README.md       # This file
```

## How to Use

1. Clone or download this repository
2. Open `index.html` in your web browser
3. Click the button in the top right to toggle dark mode
4. Press **Shift + D** to toggle with keyboard
5. Your preference will be saved automatically!

## Key Concepts Explained

### CSS Variables
```css
:root {
  --bg-color: #ffffff;  /* Light mode background */
  --text-color: #000000;
}

body.dark-mode {
  --bg-color: #1a1a1a;  /* Dark mode background */
}
```

### JavaScript localStorage
```javascript
// Save user preference
localStorage.setItem('theme', 'dark');

// Retrieve saved preference
const savedTheme = localStorage.getItem('theme');
```

### Event Listeners
```javascript
themeToggle.addEventListener('click', () => {
  toggleTheme();
});

// Keyboard shortcut
document.addEventListener('keydown', (event) => {
  if (event.shiftKey && event.key === 'D') {
    toggleTheme();
  }
});
```

## Try These Challenges! 🎯

Once you understand the basics, try these:

1. **Change colors** - Edit the CSS variables to create your own theme
2. **Add more themes** - Create a third theme (e.g., "high contrast")
3. **Animation** - Add a smooth fade effect when switching
4. **System sync** - Make it automatically switch at sunset/sunrise
5. **Multiple keyboard shortcuts** - Add more shortcuts for different functions
