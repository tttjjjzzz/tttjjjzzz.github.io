# Portfolio Website - Code Organization

## 📁 Project Structure

```
tttjjjzzz.github.io/
├── index.html              # Main HTML structure with semantic IDs
├── proj1                   # Project detail page example
├── css/
│   └── custom.css         # Custom styles and animations
├── js/
│   ├── config.js          # Site configuration and data
│   ├── components.js      # Reusable component builders
│   └── mobile-menu.js     # Mobile menu functionality
├── _config.yml            # GitHub Pages config (minimal)
└── README.md             # This file
```

## 🎯 Key Improvements

### 1. **Separation of Concerns**
- **HTML**: Structure and semantic markup only
- **CSS**: All styles moved to `css/custom.css`
- **JavaScript**: Logic split across modular files
- **Data**: Centralized in `js/config.js`

### 2. **No Hardcoding**
All content is now data-driven and can be updated in one place:

#### Update Personal Info
Edit `js/config.js` → `SITE_CONFIG.personal`:
```javascript
personal: {
    name: "TJJZ",
    fullName: "Tiger Zhou",
    title: "Your new title here",
    // ... more fields
}
```

#### Update Social Links
Edit `js/config.js` → `SITE_CONFIG.social`:
```javascript
social: {
    github: "https://github.com/tttjjjzzz",
    linkedin: "https://your-linkedin-url",  // Update this!
    email: "your-email@example.com"         // Update this!
}
```

#### Add/Update Experience
Edit `js/config.js` → `SITE_CONFIG.experience` array:
```javascript
{
    id: "unique-id",
    role: "Your Role",
    company: "Company Name",
    location: "Location",
    period: "Start – End",
    logo: "company_logo.jpg",
    responsibilities: [
        "Responsibility 1",
        "Responsibility 2"
    ]
}
```

#### Add/Update Projects
Edit `js/config.js` → `SITE_CONFIG.projects` array:
```javascript
{
    id: "project-id",
    title: "Project Title",
    tools: "Tool1, Tool2, Tool3",
    description: "Brief description",
    link: "project-page.html"
}
```

### 3. **Reusable Components**
The `js/components.js` file contains builder functions:
- `generateNavigation()` - Build nav menus
- `generateSocialIcon()` - Create social media icons
- `generateExperienceCard()` - Build experience cards
- `generateProjectCard()` - Build project cards

### 4. **Centralized Icons**
SVG paths stored in `ICONS` object in `config.js`. Easy to add new icons:
```javascript
const ICONS = {
    linkedin: `<path d="..."/>`,
    github: `<path d="..."/>`,
    // Add more icons here
}
```

## 🚀 How to Update Content

### Quick Updates (Most Common)

1. **Change your name/title/bio**: Edit `js/config.js` → `SITE_CONFIG.personal`
2. **Update social links**: Edit `js/config.js` → `SITE_CONFIG.social`
3. **Add new experience**: Add object to `SITE_CONFIG.experience` array
4. **Add new project**: Add object to `SITE_CONFIG.projects` array
5. **Update education**: Edit `js/config.js` → `SITE_CONFIG.education`

### Adding New Sections

1. Add HTML structure with semantic ID in `index.html`
2. Add data to `js/config.js`
3. Create component builder in `js/components.js`
4. Initialize in `initializePage()` function

## 🎨 Styling

All custom styles are in `css/custom.css`:
- Experience card gradient animation
- Welcome sign sway animation  
- Scroll indicator bounce animation

Tailwind classes remain inline for maintainability.

## 📝 Navigation

Add/remove nav items in `js/config.js`:
```javascript
navigation: [
    { name: "About", href: "#about" },
    { name: "Resume", href: "#resume" },
    // Add more nav items
]
```

Nav items automatically populate in:
- Desktop header menu
- Mobile dropdown menu

## 🔧 Development Workflow

### Local Preview
```powershell
python -m http.server 8000
# Visit http://localhost:8000/
```

### Making Changes
1. Edit configuration in `js/config.js`
2. Refresh browser to see changes
3. No build step required!

### Adding New Project Page
1. Copy `proj1` as template
2. Update content
3. Add entry to `SITE_CONFIG.projects` in `config.js`

## ⚡ Benefits

✅ **Single Source of Truth**: Update data in one place  
✅ **Easy Maintenance**: Clear file organization  
✅ **Reusable Components**: Build once, use everywhere  
✅ **Scalable**: Easy to add new sections/content  
✅ **Type-Safe Data**: Structured JavaScript objects  
✅ **No Build Tools**: Works with GitHub Pages directly  

## 📌 Important IDs

Keep these HTML element IDs stable (used by JavaScript):
- `mobile-menu-button` - Mobile menu toggle
- `mobile-menu` - Mobile menu container
- `desktop-nav` - Desktop navigation
- `mobile-nav` - Mobile navigation
- `header-social` - Header social icons (desktop)
- `header-social-mobile` - Header social icons (mobile)
- `about-social` - About section social icons
- `experience-container` - Experience cards container
- `projects-grid` - Projects grid container

## 🐛 Troubleshooting

**Content not appearing?**
- Check browser console for JavaScript errors
- Verify element IDs match in HTML and `components.js`
- Ensure all script files are loaded in correct order

**Styles not applying?**
- Verify `css/custom.css` is linked in `<head>`
- Check for CSS syntax errors

## 📚 Future Enhancements

Potential improvements:
- Add JSON file for config (easier editing)
- Implement search/filter for projects
- Add dark mode toggle
- Internationalization (i18n)
- Load config from external API
