// Main JavaScript file for CERNO Website

// Mobile menu toggle (if needed in the future)
document.addEventListener('DOMContentLoaded', function() {
    console.log('CERNO Website loaded successfully');
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
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
            
            // Check if emailjs is loaded
            if (typeof emailjs === 'undefined') {
                console.error('EmailJS not loaded!');
                statusEl.textContent = 'Email service not loaded. Please refresh the page.';
                statusEl.className = 'form-status error';
                return;
            }
            
            // Disable button and show loading
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';
            statusEl.textContent = '';
            statusEl.className = 'form-status';
            
            console.log('Sending business form with EmailJS...');
            
            // Send email using EmailJS
            emailjs.sendForm('service_uljurbn', 'template_3xnw4wd', this)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    statusEl.textContent = 'Thank you for your submission! We will get back to you soon. You can close this window.';
                    statusEl.className = 'form-status success';
                    businessForm.reset();
                    // Don't auto-close - let user close manually after reading the message
                }, function(error) {
                    console.error('FAILED...', error);
                    statusEl.textContent = 'Failed to send message: ' + (error.text || error.message || 'Unknown error');
                    statusEl.className = 'form-status error';
                })
                .finally(function() {
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Contact us';
                });
        });
    }
    
    if (studentForm) {
        studentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Student form submitted');
            
            const statusEl = document.getElementById('studentFormStatus');
            const submitBtn = this.querySelector('.form-submit-btn');
            
            // Check if emailjs is loaded
            if (typeof emailjs === 'undefined') {
                console.error('EmailJS not loaded!');
                statusEl.textContent = 'Email service not loaded. Please refresh the page.';
                statusEl.className = 'form-status error';
                return;
            }
            
            // Disable button and show loading
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';
            statusEl.textContent = '';
            statusEl.className = 'form-status';
            
            console.log('Sending student form with EmailJS...');
            
            // Send email using EmailJS
            emailjs.sendForm('service_uljurbn', 'template_3xnw4wd', this)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    statusEl.textContent = 'Thank you for your submission! We will get back to you soon. You can close this window.';
                    statusEl.className = 'form-status success';
                    studentForm.reset();
                    // Don't auto-close - let user close manually after reading the message
                }, function(error) {
                    console.error('FAILED...', error);
                    statusEl.textContent = 'Failed to send message: ' + (error.text || error.message || 'Unknown error');
                    statusEl.className = 'form-status error';
                })
                .finally(function() {
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Contact us';
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
    
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                        'July', 'August', 'September', 'October', 'November', 'December'];
    
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

    if (upcomingEvents.length === 0) {
        eventsList.innerHTML = '<p style="color: #666;">No upcoming events</p>';
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
