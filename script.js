// Get the toggle button
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check if user has a saved theme preference
const savedTheme = localStorage.getItem('theme');

// Apply saved theme on page load
if (savedTheme) {
  applyTheme(savedTheme);
} else {
  // Check system preference
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    applyTheme('dark');
  } else {
    applyTheme('light');
  }
}

// Add click event listener to toggle button
themeToggle.addEventListener('click', () => {
  toggleTheme();
});

// Add keyboard shortcut: Shift + D
document.addEventListener('keydown', (event) => {
  if (event.shiftKey && event.key === 'D') {
    toggleTheme();
  }
});

// Function to toggle theme
function toggleTheme() {
  const currentTheme = body.classList.contains('dark-mode') ? 'dark' : 'light';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  applyTheme(newTheme);
  localStorage.setItem('theme', newTheme);
}

// Function to apply theme
function applyTheme(theme) {
  const icon = themeToggle.querySelector('.icon');
  const label = themeToggle.querySelector('.label');
  
  if (theme === 'dark') {
    body.classList.add('dark-mode');
    icon.textContent = '☀️';
    label.textContent = 'Light Mode';
  } else {
    body.classList.remove('dark-mode');
    icon.textContent = '🌙';
    label.textContent = 'Dark Mode';
  }
}
