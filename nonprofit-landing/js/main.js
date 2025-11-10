// Hero Slider Functionality
class HeroSlider {
    constructor() {
        this.slides = document.querySelectorAll('.slide');
        this.indicators = document.querySelectorAll('.indicator');
        this.prevBtn = document.querySelector('.slider-control.prev');
        this.nextBtn = document.querySelector('.slider-control.next');
        this.currentSlide = 0;
        this.slideInterval = null;
        this.autoPlayDelay = 6000; // 6 seconds

        this.init();
    }

    init() {
        // Set up event listeners
        this.prevBtn.addEventListener('click', () => this.prevSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());

        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => this.goToSlide(index));
        });

        // Start autoplay
        this.startAutoPlay();

        // Pause on hover
        const sliderContainer = document.querySelector('.hero-slider');
        sliderContainer.addEventListener('mouseenter', () => this.stopAutoPlay());
        sliderContainer.addEventListener('mouseleave', () => this.startAutoPlay());

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.prevSlide();
            if (e.key === 'ArrowRight') this.nextSlide();
        });
    }

    goToSlide(index) {
        // Remove active class from current slide and indicator
        this.slides[this.currentSlide].classList.remove('active');
        this.indicators[this.currentSlide].classList.remove('active');

        // Update current slide
        this.currentSlide = index;

        // Add active class to new slide and indicator
        this.slides[this.currentSlide].classList.add('active');
        this.indicators[this.currentSlide].classList.add('active');
    }

    nextSlide() {
        const next = (this.currentSlide + 1) % this.slides.length;
        this.goToSlide(next);
    }

    prevSlide() {
        const prev = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.goToSlide(prev);
    }

    startAutoPlay() {
        this.slideInterval = setInterval(() => this.nextSlide(), this.autoPlayDelay);
    }

    stopAutoPlay() {
        if (this.slideInterval) {
            clearInterval(this.slideInterval);
            this.slideInterval = null;
        }
    }
}

// Mobile Navigation Toggle
class MobileNav {
    constructor() {
        this.toggle = document.querySelector('.mobile-menu-toggle');
        this.menu = document.querySelector('.nav-menu');
        this.navLinks = document.querySelectorAll('.nav-link');

        this.init();
    }

    init() {
        if (!this.toggle) return;

        this.toggle.addEventListener('click', () => {
            this.menu.classList.toggle('active');
            this.toggle.classList.toggle('active');
        });

        // Close menu when clicking on a link
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.menu.classList.remove('active');
                this.toggle.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.toggle.contains(e.target) && !this.menu.contains(e.target)) {
                this.menu.classList.remove('active');
                this.toggle.classList.remove('active');
            }
        });
    }
}

// Smooth Scrolling and Active Nav Link
class SmoothScroll {
    constructor() {
        this.navLinks = document.querySelectorAll('.nav-link');
        this.sections = document.querySelectorAll('section[id]');

        this.init();
    }

    init() {
        // Smooth scroll on nav link click
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (href.startsWith('#')) {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        const offsetTop = target.offsetTop - 80;
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });

        // Update active nav link on scroll
        window.addEventListener('scroll', () => this.updateActiveLink());
    }

    updateActiveLink() {
        const scrollPosition = window.scrollY + 100;

        this.sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                this.navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
}

// Navbar Scroll Effect
class NavbarScroll {
    constructor() {
        this.navbar = document.querySelector('.navbar');
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                this.navbar.classList.add('scrolled');
            } else {
                this.navbar.classList.remove('scrolled');
            }
        });
    }
}

// Donation Form Handler
class DonationForm {
    constructor() {
        this.form = document.getElementById('donateForm');
        this.amountButtons = document.querySelectorAll('.amount-btn');
        this.amountInput = document.getElementById('donation-amount');

        this.init();
    }

    init() {
        if (!this.form) return;

        // Handle preset amount buttons
        this.amountButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();

                // Remove active class from all buttons
                this.amountButtons.forEach(b => b.classList.remove('active'));

                // Add active class to clicked button
                btn.classList.add('active');

                // Set amount or focus input for custom
                const amount = btn.dataset.amount;
                if (amount === 'custom') {
                    this.amountInput.value = '';
                    this.amountInput.focus();
                } else {
                    this.amountInput.value = amount;
                }
            });
        });

        // Clear button selection when typing custom amount
        this.amountInput.addEventListener('input', () => {
            this.amountButtons.forEach(btn => btn.classList.remove('active'));
            const customBtn = document.querySelector('.amount-btn[data-amount="custom"]');
            if (customBtn) customBtn.classList.add('active');
        });

        // Form submission
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleSubmit();
        });
    }

    handleSubmit() {
        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData);

        // Validation
        if (!data.amount || data.amount < 1) {
            alert('Please enter a valid donation amount.');
            return;
        }

        if (!data.name || !data.email) {
            alert('Please fill in all required fields.');
            return;
        }

        // Log form data (in production, this would be sent to a payment processor)
        console.log('Donation Form Data:', data);

        // Show success message
        alert(`Thank you for your generous donation of $${data.amount}! A confirmation email will be sent to ${data.email}.\n\nNote: This is a demo. Payment processing will be integrated soon.`);

        // Reset form
        this.form.reset();
        this.amountButtons.forEach(btn => btn.classList.remove('active'));
    }
}

// Volunteer Form Handler
class VolunteerForm {
    constructor() {
        this.form = document.getElementById('volunteerForm');
        this.init();
    }

    init() {
        if (!this.form) return;

        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleSubmit();
        });
    }

    handleSubmit() {
        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData);

        // Validation
        if (!data.name || !data.email || !data.country) {
            alert('Please fill in all required fields.');
            return;
        }

        // Log form data (in production, this would be sent to a server)
        console.log('Volunteer Form Data:', data);

        // Show success message
        alert(`Thank you for your interest in volunteering, ${data.name}! We will review your application and contact you at ${data.email} within 3-5 business days.`);

        // Reset form
        this.form.reset();
    }
}

// Scroll Animations
class ScrollAnimations {
    constructor() {
        this.elements = document.querySelectorAll('.program-card, .impact-placeholder, .stat');
        this.init();
    }

    init() {
        // Create intersection observer
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        // Set initial state and observe elements
        this.elements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(element);
        });
    }
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize hero slider
    new HeroSlider();

    // Initialize mobile navigation
    new MobileNav();

    // Initialize smooth scrolling
    new SmoothScroll();

    // Initialize navbar scroll effect
    new NavbarScroll();

    // Initialize donation form
    new DonationForm();

    // Initialize volunteer form
    new VolunteerForm();

    // Initialize scroll animations
    new ScrollAnimations();

    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Handle page visibility change (pause slider when tab is not active)
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Page is hidden, stop slider if exists
        const sliderInstance = window.sliderInstance;
        if (sliderInstance) sliderInstance.stopAutoPlay();
    } else {
        // Page is visible, restart slider if exists
        const sliderInstance = window.sliderInstance;
        if (sliderInstance) sliderInstance.startAutoPlay();
    }
});
