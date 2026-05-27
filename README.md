# Dark Mode Toggle 🌙

A beginner-friendly project to learn web development fundamentals!

## Features

✨ **Toggle between light and dark mode**
💾 **Saves your preference** (using browser localStorage)
⚡ **Smooth transitions** between themes
📱 **Fully responsive** design

## What You'll Learn

- **HTML** - Basic page structure and semantic elements
- **CSS** - Styling, CSS variables for theming, flexbox, transitions
- **JavaScript** - Event listeners, DOM manipulation, localStorage API

## How It Works

### 1. **HTML Structure** (`index.html`)
- Creates the page layout with header, button, and content sections
- Uses semantic HTML (`<header>`, `<main>`, `<section>`)

### 2. **CSS Styling** (`style.css`)
- Uses **CSS variables** (`:root` selector) to define colors
- `.dark-mode` class overrides variables for dark theme
- Smooth transitions between light and dark modes
- Responsive design for mobile devices

### 3. **JavaScript Logic** (`script.js`)
- **Detects** if user has a saved theme preference
- **Toggles** between light/dark mode on button click
- **Saves** preference to browser's localStorage
- **Respects** system color scheme preference (if no saved preference)

## File Structure

```
dark-mode-toggle/
├── index.html      # HTML structure
├── style.css       # Styling and themes
├── script.js       # Toggle logic
└── README.md       # This file
```

## How to Use

1. Clone or download this repository
2. Open `index.html` in your web browser
3. Click the button in the top right to toggle dark mode
4. Your preference will be saved automatically!

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
  // Toggle happens here
});
```

## Try These Challenges! 🎯

Once you understand the basics, try these:

1. **Change colors** - Edit the CSS variables to create your own theme
2. **Add more themes** - Create a third theme (e.g., "high contrast")
3. **Keyboard shortcut** - Toggle dark mode with a keyboard key (like `D`)
4. **Animation** - Add a smooth fade effect when switching
5. **System sync** - Make it automatically switch at sunset/sunrise

## Need Help?

- Check the comments in each file
- Compare your code with this version
- Look up CSS variables, localStorage, and event listeners on MDN

## Resources

- [MDN - CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [MDN - localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [MDN - Event Listeners](https://developer.mozilla.org/en-US/docs/Web/API/EventListener)

---

**Happy coding! 🚀**
