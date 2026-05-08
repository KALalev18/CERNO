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

    document.addEventListener('click', function(e) {
        const aboutAlumniToggle = e.target.closest('.about-alumni-toggle');
        if (!aboutAlumniToggle) return;
        toggleAboutAlumni({ preventDefault: () => {}, currentTarget: aboutAlumniToggle });
    });

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
            const emailInput = document.getElementById('studentEmail');
            
            // Validate email domain for student form
            const email = emailInput.value.trim().toLowerCase();
            const validDomains = ['@student.lut.fi', '@student.lab.fi', '@lut.fi', '@lab.fi'];
            const hasValidDomain = validDomains.some(domain => email.endsWith(domain));
            
            if (!hasValidDomain) {
                statusEl.textContent = translate('form.error.studentemail');
                statusEl.className = 'form-status error';
                emailInput.focus();
                return;
            }
            
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

function toggleAboutAlumni(event) {
    if (event) event.preventDefault();

    const aboutAlumniToggle = event?.currentTarget || document.querySelector('.about-alumni-toggle');
    if (!aboutAlumniToggle) return;

    const aboutAlumniNote = aboutAlumniToggle.closest('.about-alumni-note');
    if (!aboutAlumniNote) return;

    const aboutAlumniDropdown = aboutAlumniNote.querySelector('.about-alumni-dropdown');
    if (!aboutAlumniDropdown) return;

    const isOpen = aboutAlumniNote.classList.toggle('open');
    aboutAlumniToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    aboutAlumniDropdown.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
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
    },
    {
        id: 'cerno-intro',
        title: 'CERNO Introductory event',
        date: new Date(2026, 1, 16), // February 16, 2026
        startTime: '17:00',
        endTime: '19:00',
        description: 'Learn more about CERNO!',
        location: 'M19_D251'
    },
    {
        id: 'info-evening',
        title: 'Info Evening',
        date: new Date(2026, 2, 17), // March 17, 2026
        startTime: '17:00',
        endTime: '18:30',
        description: 'FC Lahti presents a real business challenge and practical solution approach',
        location: 'M19_D251'
    },
    {
        id: 'solutions-day',
        title: 'Solution Presentation Day',
        date: new Date(2026, 2, 3), // March 3, 2026
        startTime: '17:00',
        endTime: '19:00',
        description: 'Teams formed during the CERNO Introductory event present their business solutions',
        location: 'M19_D251'
    },
    {
        id: 'case-eve',
        title: 'Case Eve',
        date: new Date(2026, 3, 1), // April 1, 2026
        startTime: '17:00',
        endTime: '19:30',
        description: 'First Case Club Night with solution presentations evaluated by a judging panel',
        location: 'M19_D251'
    },
    {
        id: 'city-lahti-info',
        title: 'City of Lahti - Info',
        date: new Date(2026, 3, 23), // April 23, 2026
        startTime: '15:00',
        endTime: '17:00',
        description: 'City of Lahti presents a real business challenge and practical solution approach',
        location: 'M19_D251'
    },
    {
        id: 'city-lahti-presentations',
        title: 'City of Lahti - Presentations',
        date: new Date(2026, 4, 5), // May 5, 2026
        startTime: '15:00',
        endTime: '17:00',
        description: 'Teams present their solutions to the City of Lahti business challenge',
        location: 'M19_D251'
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
    today.setHours(0, 0, 0, 0); // Reset to start of day
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
                <div class="event-location">${event.location}</div>
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
    },
    'CERNOIntro2026': {
        folder: 'images/events/past',
        images: [],
        currentIndex: 0
    },
    'SolutionsDay2026': {
        folder: 'images/events/past/3.3',
        images: [],
        currentIndex: 0
    },
    'DuuniExpo2026': {
        folder: 'images/events/past',
        images: [],
        currentIndex: 0
    },
    'InfoEvening2026': {
        folder: 'images/events/past/17.3',
        images: [],
        currentIndex: 0
    },
    'CaseEve2026': {
        folder: 'images/events/past/1.4',
        images: [],
        currentIndex: 0
    },
    'CityOfLahtiInfo2026': {
        folder: 'images/events/past/23.4',
        images: [],
        currentIndex: 0
    },
    'CityOfLahtiPresentations2026': {
        folder: 'images/events/past/5.5',
        images: [],
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

galleries['DuuniExpo2026'].images = [
    'images/events/duuniexpo.png',
    'images/events/past/picture1.jpeg',
    'images/events/past/picture2.jpeg',
    'images/events/past/picture 3.jpeg'
];

galleries['CERNOIntro2026'].images = [
    'images/events/past/IMG_8692 (1).JPG',
    'images/events/past/IMG_8712 (1).JPG',
    'images/events/past/IMG_8716 (1).JPG',
    'images/events/past/IMG_8721 (1).JPG',
    'images/events/past/IMG_8730 (1).JPG'
];

galleries['SolutionsDay2026'].images = [
    'images/events/past/3.3/20260303_171516.jpg',
    'images/events/past/3.3/20260303_172110.jpg',
    'images/events/past/3.3/20260303_183159.jpg',
    'images/events/past/3.3/IMG_8766.JPG',
    'images/events/past/3.3/IMG_8787.JPG',
    'images/events/past/3.3/IMG_8799.JPG'
];

galleries['InfoEvening2026'].images = [
    'images/events/past/17.3/1000000677.jpg',
    'images/events/past/17.3/1000000678.jpg',
    'images/events/past/17.3/1000000679.jpg'
];

galleries['CaseEve2026'].images = [
    'images/events/past/1.4/IMG_8900.JPG',
    'images/events/past/1.4/IMG_8987.JPG',
    'images/events/past/1.4/IMG_9010.JPG',
    'images/events/past/1.4/IMG_9123.JPG'
];

galleries['CityOfLahtiInfo2026'].images = [
    'images/events/past/23.4/IMG_9133.JPG',
    'images/events/past/23.4/IMG_9140.JPG',
    'images/events/past/23.4/IMG_9208.JPG'
];

galleries['CityOfLahtiPresentations2026'].images = [
    'images/events/past/5.5/IMG_9359.JPG',
    'images/events/past/5.5/IMG_9420.JPG',
    'images/events/past/5.5/IMG_9463.JPG',
    'images/events/past/5.5/IMG_9469.JPG',
    'images/events/past/5.5/IMG_9471.JPG'
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

// Image Modal Functions for Zoom
function openImageModal(imageSrc) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    
    if (modal && modalImg) {
        modal.classList.add('active');
        modalImg.src = imageSrc;
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    }
}

function closeImageModal() {
    const modal = document.getElementById('imageModal');
    
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }
}

// Initialize gallery counters and image click handlers on page load
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
    
    // Add click handlers to all competition images for zoom
    document.querySelectorAll('.competition-image img, .past-event-image img').forEach(img => {
        img.addEventListener('click', function(e) {
            // Don't open modal if clicking on gallery navigation buttons
            if (e.target.closest('.gallery-nav')) {
                return;
            }
            openImageModal(this.src);
        });
    });
    
    // Close modal on background click
    const modal = document.getElementById('imageModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeImageModal();
            }
        });
    }
    
    // Close modal on ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeImageModal();
        }
    });
});

// Alumni collapsible section
document.addEventListener('DOMContentLoaded', function() {
    const collapsibleCards = document.querySelectorAll('.alumni-collapse-card');

    collapsibleCards.forEach(card => {
        const toggle = card.querySelector('.alumni-collapse-toggle');
        const content = card.querySelector('.alumni-collapse-content');

        if (!toggle || !content) return;

        const setExpandedHeight = () => {
            if (!card.classList.contains('collapsed')) {
                content.style.maxHeight = `${content.scrollHeight}px`;
            }
        };

        setExpandedHeight();

        toggle.addEventListener('click', function() {
            const willCollapse = !card.classList.contains('collapsed');
            card.classList.toggle('collapsed');
            toggle.setAttribute('aria-expanded', willCollapse ? 'false' : 'true');

            if (willCollapse) {
                content.style.maxHeight = '0px';
            } else {
                content.style.maxHeight = `${content.scrollHeight}px`;
            }
        });

        window.addEventListener('resize', setExpandedHeight);
    });
});
