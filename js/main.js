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

    // Handle form submissions
    const businessForm = document.getElementById('businessForm');
    const studentForm = document.getElementById('studentForm');
    
    if (businessForm) {
        businessForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your submission! We will get back to you soon.');
            closeContactForm();
            this.reset();
        });
    }
    
    if (studentForm) {
        studentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your submission! We will get back to you soon.');
            closeContactForm();
            this.reset();
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
