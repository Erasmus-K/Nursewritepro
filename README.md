# NursePro React Conversion

This is the React version of the NursePro website, converted from the original HTML/CSS/JS structure while preserving all functionality and design.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
NursePro-React/
├── src/
│   ├── components/          # React components (converted from HTML sections)
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── CoreServices.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── SpecializedSupport.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Blogs.jsx
│   │   ├── QASection.jsx
│   │   ├── ReviewsSection.jsx
│   │   ├── ContactSection.jsx
│   │   ├── Footer.jsx
│   │   └── WhatsAppFloat.jsx
│   ├── assets/
│   │   └── images/          # All original images
│   ├── data/
│   │   └── qa-data.json     # Q&A data (preserved)
│   ├── styles/
│   │   └── color.css        # Original CSS (preserved)
│   ├── utils/
│   │   ├── hooks.js         # React hooks for original JS functionality
│   │   ├── script.js        # Original JavaScript (preserved)
│   │   ├── reviews-system.js # Original reviews system (preserved)
│   │   └── qa-system.js     # Original Q&A system (preserved)
│   ├── App.jsx              # Main app component
│   └── main.jsx             # React entry point
├── api/                     # Original API folder (preserved)
├── public/                  # Static assets
└── index.html               # HTML template
```

## 🔄 Conversion Details

### What Was Preserved
- **All CSS**: Original `color.css` file imported as-is
- **All JavaScript**: Original functionality converted to React hooks
- **All Images**: Moved to `src/assets/images/`
- **All Data**: JSON files and API endpoints preserved
- **All Features**: Forms, sliders, Q&A, reviews system, etc.

### What Was Converted
- **HTML Sections** → **React Components**: Each major section is now a component
- **Static Content** → **Dynamic Components**: Interactive elements use React state
- **DOM Manipulation** → **React Hooks**: Original JS converted to useEffect hooks
- **Event Handlers** → **React Event Handlers**: onClick, onSubmit, etc.

## 🎯 Key Features Maintained

### Interactive Components
- ✅ **Navbar**: Responsive with dropdown menus and mobile hamburger
- ✅ **Hero Section**: Background image and call-to-action
- ✅ **Services**: Flip cards with hover effects
- ✅ **Testimonials**: Auto-rotating testimonial cards
- ✅ **Blog Slider**: Interactive carousel with dots navigation
- ✅ **Q&A System**: Question submission and display
- ✅ **Reviews System**: Star ratings, filtering, and local storage
- ✅ **Contact Form**: Multi-field form with validation
- ✅ **Chat Integration**: Dual chat system with WhatsApp and Tawk.to
- ✅ **Live Chat Widget**: Tawk.to integration with custom styling

### Chat Features
- ✅ **Dual Chat Options**: Users can choose between WhatsApp and Live Chat
- ✅ **Tawk.to Integration**: Real-time live chat support
- ✅ **WhatsApp Integration**: Direct messaging with pre-filled templates
- ✅ **Chat Controls**: Floating button with expandable options
- ✅ **Mobile Optimized**: Responsive chat widgets for all devices
- ✅ **Custom Styling**: Branded chat interface matching site design
- ✅ **Analytics Tracking**: Chat events tracked for insights

### Original Functionality
- ✅ **Smooth Scrolling**: Navigation links scroll to sections
- ✅ **Scroll Effects**: Navbar changes on scroll
- ✅ **Image Lazy Loading**: Optimized image loading
- ✅ **Animations**: Counter animations, fade-in effects
- ✅ **Local Storage**: Reviews and user data persistence
- ✅ **Form Validation**: Client-side form validation
- ✅ **Responsive Design**: Mobile-first responsive layout

## 🛠️ Development

### Chat Configuration
Chat settings can be customized in `src/data/chat-config.json`:
```json
{
  "chat": {
    "tawkTo": {
      "enabled": true,
      "propertyId": "your-property-id",
      "widgetId": "your-widget-id"
    },
    "whatsapp": {
      "enabled": true,
      "phoneNumber": "your-phone-number",
      "defaultMessage": "Your default message"
    }
  }
}
```

### Using Chat Controls
```jsx
import { tawkToUtils } from './utils/tawkto'

// Show/hide Tawk.to widget
tawkToUtils.show()
tawkToUtils.hide()

// Set visitor attributes
tawkToUtils.setAttributes({
  name: 'John Doe',
  email: 'john@example.com'
})

// Check if chat is online
const isOnline = tawkToUtils.isOnline()
```

### Adding New Components
```jsx
// Create new component in src/components/
const NewComponent = () => {
  return (
    <section className="new-section">
      <h2>New Section</h2>
      {/* Your content */}
    </section>
  )
}

export default NewComponent
```

### Using Original CSS Classes
All original CSS classes are preserved. Use them directly:
```jsx
<div className="core-service-card">
  <div className="core-card-inner">
    {/* Original structure maintained */}
  </div>
</div>
```

### Accessing Original JavaScript
Original utilities are available through hooks:
```jsx
import { useOriginalScript, showNotification } from './utils/hooks'

const MyComponent = () => {
  useOriginalScript() // Initializes original JS functionality
  
  const handleClick = () => {
    showNotification('Success!', 'success')
  }
  
  return <button onClick={handleClick}>Click me</button>
}
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Upload dist/ folder to Netlify
```

### Traditional Hosting
```bash
npm run build
# Upload dist/ folder to your web server
```

## 🔧 Configuration

### Vite Configuration
The project uses Vite for fast development and building. Configuration is in `vite.config.js`.

### API Integration
Original API endpoints are preserved in the `api/` folder and can be deployed as serverless functions.

## 📱 Mobile Responsiveness

All original responsive breakpoints and mobile optimizations are maintained:
- Mobile-first design approach
- Hamburger menu for mobile navigation
- Touch-friendly interactive elements
- Optimized layouts for all screen sizes

## 🎨 Styling

The original CSS architecture is preserved:
- Global styles in `color.css`
- Component-specific styles using original class names
- CSS Grid and Flexbox layouts maintained
- All animations and transitions preserved

## 🔍 SEO & Performance

- Meta tags preserved and optimized
- Image lazy loading implemented
- Font Awesome icons loaded from CDN
- Optimized bundle size with Vite
- Fast development server with HMR

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes (following the existing structure)
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project maintains the same license as the original NursePro website.

---

**Note**: This React conversion maintains 100% feature parity with the original website while providing the benefits of a modern React application structure.