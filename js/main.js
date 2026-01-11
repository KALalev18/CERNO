// Main JavaScript file for CERNO Website

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    console.log('CERNO Website loaded successfully');
    
    // Mobile menu functionality
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const contactBtn = document.querySelector('.contact-btn');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            contactBtn.classList.toggle('mobile-show');
            
            // Change icon
            const icon = this.textContent;
            this.textContent = icon === '☰' ? '✕' : '☰';
        });
        
        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 968) {
                    navMenu.classList.remove('active');
                    contactBtn.classList.remove('mobile-show');
                    mobileMenuToggle.textContent = '☰';
                }
            });
        });
    }
    
    // Smooth scrolling for navigation links
    const allNavLinks = document.querySelectorAll('.nav-menu a');
    
    allNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Close popup when clicking outside
    const businessPopup = document.getElementById('businessFormPopup');
    const studentPopup = document.getElementById('studentFormPopup');
    const privacyPopup = document.getElementById('privacyPopup');
    const partnersPopup = document.getElementById('partnersPopup');
    
    if (businessPopup) {
        businessPopup.addEventListener('click', function(e) {
            if (e.target === businessPopup) {
                closeContactForm();
            }
        });
    }
    
    if (studentPopup) {
        studentPopup.addEventListener('click', function(e) {
            if (e.target === studentPopup) {
                closeContactForm();
            }
        });
    }

    if (privacyPopup) {
        privacyPopup.addEventListener('click', function(e) {
            if (e.target === privacyPopup) {
                closeInfoPopup();
            }
        });
    }

    if (partnersPopup) {
        partnersPopup.addEventListener('click', function(e) {
            if (e.target === partnersPopup) {
                closeInfoPopup();
            }
        });
    }

    // Handle form submissions
    const businessForm = document.getElementById('businessForm');
    const studentForm = document.getElementById('studentForm');
    
    if (businessForm) {
        businessForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Business form submitted');
            
            const statusEl = document.getElementById('businessFormStatus');
            const submitBtn = this.querySelector('.form-submit-btn');
            const phoneInput = document.getElementById('businessPhone');
            
            // Validate phone number if provided
            if (phoneInput.value.trim() !== '') {
                const phonePattern = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/;
                if (!phonePattern.test(phoneInput.value.trim())) {
                    statusEl.textContent = translate('form.error.phone');
                    statusEl.className = 'form-status error';
                    phoneInput.focus();
                    return;
                }
            }
            
            // Check if emailjs is loaded
            if (typeof emailjs === 'undefined') {
                console.error('EmailJS not loaded!');
                statusEl.textContent = translate('form.error.emailjs');
                statusEl.className = 'form-status error';
                return;
            }
            
            // Disable button and show loading
            submitBtn.disabled = true;
            submitBtn.textContent = translate('form.sending');
            statusEl.textContent = '';
            statusEl.className = 'form-status';
            
            console.log('Sending business form with EmailJS...');
            
            // Send email using EmailJS
            emailjs.sendForm('service_uljurbn', 'template_3xnw4wd', this)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    statusEl.textContent = translate('form.success');
                    statusEl.className = 'form-status success';
                    businessForm.reset();
                    // Don't auto-close - let user close manually after reading the message
                }, function(error) {
                    console.error('FAILED...', error);
                    statusEl.textContent = translate('form.error.failed') + ': ' + (error.text || error.message || translate('form.error.unknown'));
                    statusEl.className = 'form-status error';
                })
                .finally(function() {
                    submitBtn.disabled = false;
                    submitBtn.textContent = translate('nav.contact');
                });
        });
    }
    
    if (studentForm) {
        studentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Student form submitted');
            
            const statusEl = document.getElementById('studentFormStatus');
            const submitBtn = this.querySelector('.form-submit-btn');
            const phoneInput = document.getElementById('studentPhone');
            
            // Validate phone number if provided
            if (phoneInput.value.trim() !== '') {
                const phonePattern = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/;
                if (!phonePattern.test(phoneInput.value.trim())) {
                    statusEl.textContent = translate('form.error.phone');
                    statusEl.className = 'form-status error';
                    phoneInput.focus();
                    return;
                }
            }
            
            // Check if emailjs is loaded
            if (typeof emailjs === 'undefined') {
                console.error('EmailJS not loaded!');
                statusEl.textContent = translate('form.error.emailjs');
                statusEl.className = 'form-status error';
                return;
            }
            
            // Disable button and show loading
            submitBtn.disabled = true;
            submitBtn.textContent = translate('form.sending');
            statusEl.textContent = '';
            statusEl.className = 'form-status';
            
            console.log('Sending student form with EmailJS...');
            
            // Send email using EmailJS
            emailjs.sendForm('service_uljurbn', 'template_3xnw4wd', this)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    statusEl.textContent = translate('form.success');
                    statusEl.className = 'form-status success';
                    studentForm.reset();
                    // Don't auto-close - let user close manually after reading the message
                }, function(error) {
                    console.error('FAILED...', error);
                    statusEl.textContent = translate('form.error.failed') + ': ' + (error.text || error.message || translate('form.error.unknown'));
                    statusEl.className = 'form-status error';
                })
                .finally(function() {
                    submitBtn.disabled = false;
                    submitBtn.textContent = translate('nav.contact');
                });
        });
    }
});

// Open business form popup
function openBusinessForm(event) {
    if (event) event.preventDefault();
    const popup = document.getElementById('businessFormPopup');
    if (popup) {
        popup.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

// Open student form popup
function openStudentForm(event) {
    if (event) event.preventDefault();
    const popup = document.getElementById('studentFormPopup');
    if (popup) {
        popup.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

// Close contact form popup
function closeContactForm() {
    const businessPopup = document.getElementById('businessFormPopup');
    const studentPopup = document.getElementById('studentFormPopup');
    
    if (businessPopup) {
        businessPopup.classList.remove('active');
    }
    if (studentPopup) {
        studentPopup.classList.remove('active');
    }
    document.body.style.overflow = '';
}

// Open privacy policy popup
function openPrivacyPopup(event) {
    if (event) event.preventDefault();
    const popup = document.getElementById('privacyPopup');
    if (popup) {
        popup.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

// Open partners popup
function openPartnersPopup(event) {
    if (event) event.preventDefault();
    const popup = document.getElementById('partnersPopup');
    if (popup) {
        popup.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

// sponsors popup removed; use Partners page section instead

// Close privacy/sponsors popups
function closeInfoPopup() {
    const privacyPopup = document.getElementById('privacyPopup');
    const partnersPopup = document.getElementById('partnersPopup');
    if (privacyPopup) privacyPopup.classList.remove('active');
    if (partnersPopup) partnersPopup.classList.remove('active');
    document.body.style.overflow = '';
}

// Calendar functionality
const events = [
    {
        id: 'duuniexpo',
        title: 'DuuniExpo 2026',
        date: new Date(2026, 0, 28), // January 28, 2026
        startTime: '09:30',
        endTime: '15:30',
        description: 'We warmly welcome the Lahti Case Club to attend DuuniExpo',
        location: 'Lahti'
    }
];

let currentDate = new Date();

function initCalendar() {
    const calendarDates = document.getElementById('calendarDates');
    if (!calendarDates) return;

    renderCalendar();
    renderEventsList();

    document.getElementById('prevMonth')?.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar();
    });

    document.getElementById('nextMonth')?.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar();
    });

    // Add to calendar functionality
    document.querySelectorAll('.add-to-calendar').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const eventId = e.target.getAttribute('data-event');
            const event = events.find(ev => ev.id === eventId);
            if (event) {
                downloadICS(event);
            }
        });
    });
}

function renderCalendar() {
    const calendarDates = document.getElementById('calendarDates');
    const currentMonthEl = document.getElementById('currentMonth');
    
    if (!calendarDates || !currentMonthEl) return;

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    // Get translated month names based on current language
    const currentLang = localStorage.getItem('language') || 'en';
    const monthNames = translations[currentLang]['calendar.months'];
    
    currentMonthEl.textContent = `${monthNames[month]} ${year}`;

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const prevLastDay = new Date(year, month, 0);
    
    const firstDayOfWeek = firstDay.getDay() === 0 ? 7 : firstDay.getDay();
    const lastDate = lastDay.getDate();
    const prevLastDate = prevLastDay.getDate();

    let datesHTML = '';

    // Previous month's dates
    for (let i = firstDayOfWeek - 1; i > 0; i--) {
        datesHTML += `<div class="calendar-date other-month">
            <div class="date-number">${prevLastDate - i + 1}</div>
        </div>`;
    }

    // Current month's dates
    const today = new Date();
    for (let i = 1; i <= lastDate; i++) {
        const currentDateObj = new Date(year, month, i);
        const isToday = currentDateObj.toDateString() === today.toDateString();
        const event = events.find(ev => 
            ev.date.toDateString() === currentDateObj.toDateString()
        );
        const hasEvent = event !== undefined;
        
        let classes = 'calendar-date';
        if (isToday) classes += ' today';
        if (hasEvent) classes += ' has-event';

        const dataAttr = hasEvent ? `data-event-id="${event.id}"` : '';
        datesHTML += `<div class="${classes}" ${dataAttr}>
            <div class="date-number">${i}</div>
            ${hasEvent ? '<div class="event-dot"></div>' : ''}
        </div>`;
    }

    // Next month's dates
    const remainingDays = 42 - (firstDayOfWeek - 1 + lastDate);
    for (let i = 1; i <= remainingDays; i++) {
        datesHTML += `<div class="calendar-date other-month">
            <div class="date-number">${i}</div>
        </div>`;
    }

    calendarDates.innerHTML = datesHTML;
    
    // Add click handlers to event dates
    document.querySelectorAll('.calendar-date[data-event-id]').forEach(dateEl => {
        dateEl.style.cursor = 'pointer';
        dateEl.addEventListener('click', () => {
            const eventId = dateEl.getAttribute('data-event-id');
            const event = events.find(ev => ev.id === eventId);
            if (event) {
                downloadICS(event);
            }
        });
    });
}

function renderEventsList() {
    const eventsList = document.getElementById('eventsList');
    if (!eventsList) return;

    const today = new Date();
    const upcomingEvents = events.filter(event => event.date >= today)
                                 .sort((a, b) => a.date - b.date);

    const currentLang = localStorage.getItem('language') || 'en';
    const noEventsText = translations[currentLang]['calendar.noevents'];

    if (upcomingEvents.length === 0) {
        eventsList.innerHTML = `<p style="color: #666;">${noEventsText}</p>`;
        return;
    }

    eventsList.innerHTML = upcomingEvents.map(event => {
        const dateStr = event.date.toLocaleDateString('en-GB', { 
            day: 'numeric', 
            month: 'long', 
            year: 'numeric' 
        });
        
        return `
            <div class="event-item">
                <div class="event-date">${dateStr}</div>
                <div class="event-title">${event.title}</div>
                <div class="event-time">${event.startTime} - ${event.endTime}</div>
            </div>
        `;
    }).join('');
}

function downloadICS(event) {
    const startDate = new Date(event.date);
    const [startHour, startMin] = event.startTime.split(':');
    startDate.setHours(parseInt(startHour), parseInt(startMin), 0);
    
    const endDate = new Date(event.date);
    const [endHour, endMin] = event.endTime.split(':');
    endDate.setHours(parseInt(endHour), parseInt(endMin), 0);

    const formatDate = (date) => {
        return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    };

    const icsContent = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:-//LAB Case Club//CERNO//EN',
        'BEGIN:VEVENT',
        `UID:${event.id}@cernocaseclub.com`,
        `DTSTAMP:${formatDate(new Date())}`,
        `DTSTART:${formatDate(startDate)}`,
        `DTEND:${formatDate(endDate)}`,
        `SUMMARY:${event.title}`,
        `DESCRIPTION:${event.description}`,
        `LOCATION:${event.location}`,
        'END:VEVENT',
        'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = `${event.id}.ics`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Initialize calendar when DOM is loaded
document.addEventListener('DOMContentLoaded', initCalendar);

// Gallery Navigation for Resource Cards
const galleries = {
    'NCC2025': {
        folder: 'images/albums/NCC 2025',
        images: [], // Will be populated with images from the folder
        currentIndex: 0
    }
};

// Initialize gallery - you need to manually add images to this array
// or create a server-side script to list files
galleries['NCC2025'].images = [
    'images/resources/ncc-preview.png',
    'images/albums/NCC 2025/WhatsApp Image 2026-01-04 at 14.29.08 (1).jpeg',
    'images/albums/NCC 2025/WhatsApp Image 2026-01-04 at 14.29.08.jpeg',
    'images/albums/NCC 2025/WhatsApp Image 2026-01-04 at 14.29.09.jpeg',
    'images/albums/NCC 2025/WhatsApp Image 2026-01-04 at 14.29.10 (1).jpeg',
    'images/albums/NCC 2025/WhatsApp Image 2026-01-04 at 14.29.10.jpeg',
    'images/albums/NCC 2025/WhatsApp Image 2026-01-04 at 14.29.11 (1).jpeg',
    'images/albums/NCC 2025/WhatsApp Image 2026-01-04 at 14.29.11 (2).jpeg',
    'images/albums/NCC 2025/WhatsApp Image 2026-01-04 at 14.29.11 (3).jpeg',
    'images/albums/NCC 2025/WhatsApp Image 2026-01-04 at 14.29.11.jpeg',
    'images/albums/NCC 2025/WhatsApp Image 2026-01-04 at 14.29.12 (1).jpeg',
    'images/albums/NCC 2025/WhatsApp Image 2026-01-04 at 14.29.12 (2).jpeg',
    'images/albums/NCC 2025/WhatsApp Image 2026-01-04 at 14.29.12 (3).jpeg',
    'images/albums/NCC 2025/WhatsApp Image 2026-01-04 at 14.29.12.jpeg'
];

function navigateGallery(event, galleryId, direction) {
    event.preventDefault();
    event.stopPropagation();
    
    const gallery = galleries[galleryId];
    if (!gallery || gallery.images.length === 0) return;
    
    // Update index
    gallery.currentIndex = (gallery.currentIndex + direction + gallery.images.length) % gallery.images.length;
    
    // Find the gallery container
    const galleryContainer = document.querySelector(`[data-gallery="${galleryId}"]`);
    if (!galleryContainer) return;
    
    // Update image
    const img = galleryContainer.querySelector('.gallery-image');
    if (img) {
        img.src = gallery.images[gallery.currentIndex];
    }
    
    // Update counter
    const counter = galleryContainer.querySelector('.gallery-counter');
    if (counter && gallery.images.length > 1) {
        counter.textContent = `${gallery.currentIndex + 1} / ${gallery.images.length}`;
    }
}

// Initialize gallery counters on page load
document.addEventListener('DOMContentLoaded', function() {
    Object.keys(galleries).forEach(galleryId => {
        const gallery = galleries[galleryId];
        const galleryContainer = document.querySelector(`[data-gallery="${galleryId}"]`);
        
        if (galleryContainer && gallery.images.length > 1) {
            const counter = galleryContainer.querySelector('.gallery-counter');
            if (counter) {
                counter.textContent = `1 / ${gallery.images.length}`;
            }
        }
    });
});
