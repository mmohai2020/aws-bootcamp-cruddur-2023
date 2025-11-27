# Hope for West Africa - Nonprofit Landing Page

A modern, responsive landing page for a West African nonprofit organization focused on poverty alleviation and community development.

## Features

### 🎨 Modern Design
- Clean, professional layout with responsive design
- Vibrant color scheme reflecting hope and empowerment
- Smooth animations and transitions
- Mobile-first approach

### 🖼️ Hero Slider
- 6 stunning slides showcasing different programs
- Auto-play with 6-second intervals
- Manual navigation with arrow buttons
- Indicator dots for direct slide access
- Keyboard navigation support (arrow keys)
- Pause on hover functionality

### 🧭 Navigation
- Fixed navigation bar with smooth scroll
- Active section highlighting
- Mobile-responsive hamburger menu
- Clean, uncluttered design focused on poverty-related causes

### 💰 Donation System
- Multiple preset donation amounts ($25, $50, $100, $250, $500)
- Custom amount option
- One-time and monthly donation options
- Donation designation to specific programs
- Anonymous donation option
- Form validation
- Ready for payment processor integration

### 🤝 Volunteer Signup
- Comprehensive volunteer application form
- Skills and expertise capture
- Availability selection
- Form validation
- Mobile-responsive design

### 📊 Program Showcase
- 6 key program areas:
  - Education & Literacy
  - Healthcare Access
  - Clean Water
  - Food Security
  - Women Empowerment
  - Economic Development

### 📸 Impact Section
- Placeholder section for photos, videos, and interviews
- Designed for future content integration
- Grid layout for visual content
- Ready for testimonials and success stories

## Structure

```
nonprofit-landing/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styling and responsive design
├── js/
│   └── main.js         # Interactive functionality
├── images/             # Images folder (ready for content)
└── README.md          # This file
```

## Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with flexbox and grid
- **Vanilla JavaScript** - No dependencies, pure JS
- **Google Fonts** - Poppins and Playfair Display

## Key Sections

1. **Hero Slider** - 6 rotating slides with call-to-action buttons
2. **About Section** - Mission statement and impact statistics
3. **Programs Section** - 6 core program areas with icons
4. **Impact Section** - Placeholder for photos, videos, and testimonials
5. **Volunteer Section** - Information and signup form
6. **Donation Section** - Donation impact examples and form
7. **Footer** - Contact info, quick links, and social media

## Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## Color Scheme

- **Primary Red**: #e74c3c (Call-to-action, emphasis)
- **Secondary Green**: #27ae60 (Success, growth)
- **Accent Orange**: #f39c12 (Highlights)
- **Dark Text**: #2c3e50
- **Light Background**: #f8f9fa

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

### Content Integration
- [ ] Add West African community photos
- [ ] Upload videos and interviews
- [ ] Add success stories and testimonials
- [ ] Implement photo gallery with lightbox
- [ ] Add annual reports and impact documents

### Functionality
- [ ] Integrate payment processor (Stripe, PayPal, etc.)
- [ ] Add email service for form submissions
- [ ] Implement newsletter signup
- [ ] Add blog section for updates
- [ ] Multi-language support (English, French, local languages)

### Performance
- [ ] Image optimization
- [ ] Lazy loading for images
- [ ] Service worker for offline access
- [ ] Performance monitoring

## How to Use

1. **Open the landing page**:
   - Open `index.html` in a web browser
   - Or host on a web server

2. **Add your content**:
   - Replace placeholder images in the `images/` folder
   - Update text content in `index.html`
   - Customize colors in `css/styles.css` (`:root` variables)

3. **Configure forms**:
   - Update form submission handlers in `js/main.js`
   - Integrate with your backend API or email service
   - Add payment processor credentials

4. **Customize branding**:
   - Update organization name in HTML
   - Change color scheme in CSS variables
   - Add your logo

## Form Integration

The forms currently console.log data and show alerts. To integrate with a backend:

1. **Volunteer Form** (`js/main.js` - VolunteerForm class):
   ```javascript
   // Replace console.log with API call
   fetch('/api/volunteer', {
       method: 'POST',
       body: JSON.stringify(data),
       headers: { 'Content-Type': 'application/json' }
   });
   ```

2. **Donation Form** (`js/main.js` - DonationForm class):
   ```javascript
   // Integrate payment processor
   stripe.redirectToCheckout({
       lineItems: [{price: priceId, quantity: 1}],
       mode: 'payment',
       successUrl: 'https://yoursite.com/success',
       cancelUrl: 'https://yoursite.com/cancel'
   });
   ```

## Accessibility

- Semantic HTML5 elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Alt text ready for images
- High contrast text
- Focus indicators

## Performance Optimization

- Minimal external dependencies
- Optimized CSS (no frameworks)
- Vanilla JavaScript (no libraries)
- Clean, efficient code
- Mobile-first responsive design

## Credits

Created for Hope for West Africa nonprofit organization.

## License

This landing page is created for nonprofit use. Feel free to modify and adapt for your organization.

## Contact

For questions or support regarding this landing page, please contact the development team.

---

**Note**: This is a front-end template. Payment processing, email services, and backend functionality need to be integrated for production use.
