# Email Receiving Setup - CERNO Contact Forms

## Important: All emails will be sent to cernocaseclub@gmail.com

---

## What You'll Receive

When someone submits a contact form on your website, you'll receive a **well-structured email** at **cernocaseclub@gmail.com**.

### Example Email Preview:

```
From: CERNO Website Forms <noreply@emailjs.com>
To: cernocaseclub@gmail.com
Reply-To: john.smith@example.com
Subject: 🔔 New business Contact Form Submission
Date: December 26, 2025 at 14:30

═══════════════════════════════════════════════════
   NEW CONTACT FORM SUBMISSION - CERNO WEBSITE
═══════════════════════════════════════════════════

Form Type: BUSINESS COLLABORATION
Received: December 26, 2025 at 14:30 EET

─────────────────────────────────────────────────
📋 CONTACT INFORMATION
─────────────────────────────────────────────────

Full Name:        John Smith
Email Address:    john.smith@example.com
Phone Number:     +358 40 123 4567
Company/Org:      TechCorp Finland
Subject:          Partnership Opportunity

─────────────────────────────────────────────────
💬 MESSAGE
─────────────────────────────────────────────────

Hello CERNO team,

We are interested in establishing a partnership with LAB Case
Club for our upcoming business case competition in March 2026.
We would like to discuss:

1. Sponsorship opportunities
2. Case study collaboration
3. Student recruitment

Looking forward to hearing from you.

Best regards,
John Smith
CEO, TechCorp Finland

═══════════════════════════════════════════════════
✉️ QUICK REPLY
═══════════════════════════════════════════════════

Simply click "Reply" to respond directly to: john.smith@example.com

This email was automatically sent from the CERNO website
contact form at cernocaseclub.com

═══════════════════════════════════════════════════
```

---

## Student Form Example:

```
From: CERNO Website Forms <noreply@emailjs.com>
To: cernocaseclub@gmail.com
Reply-To: maria.korhonen@student.lab.fi
Subject: 🔔 New student Contact Form Submission
Date: December 26, 2025 at 15:45

═══════════════════════════════════════════════════
   NEW CONTACT FORM SUBMISSION - CERNO WEBSITE
═══════════════════════════════════════════════════

Form Type: STUDENT INQUIRY
Received: December 26, 2025 at 15:45 EET

─────────────────────────────────────────────────
📋 CONTACT INFORMATION
─────────────────────────────────────────────────

Full Name:        Maria Korhonen
Email Address:    maria.korhonen@student.lab.fi
Phone Number:     +358 45 987 6543

─────────────────────────────────────────────────
💬 MESSAGE
─────────────────────────────────────────────────

Hi CERNO team!

I'm a second-year International Business student at LAB and
I'm very interested in joining the Case Club. I have some
experience with business analysis from my courses and I'd
love to develop my skills further.

When are the next meetings? Can I attend as a visitor first?

Thanks!
Maria

═══════════════════════════════════════════════════
✉️ QUICK REPLY
═══════════════════════════════════════════════════

Simply click "Reply" to respond directly to: maria.korhonen@student.lab.fi

This email was automatically sent from the CERNO website
contact form at cernocaseclub.com

═══════════════════════════════════════════════════
```

---

## Key Features:

✅ **Professional Structure** - Clear sections with visual separators  
✅ **Easy to Read** - All information organized in labeled fields  
✅ **Form Type Indicator** - Distinguishes between business and student inquiries  
✅ **Timestamp** - Shows when the form was submitted  
✅ **Quick Reply** - Reply-To field automatically set to sender's email  
✅ **Complete Information** - All form fields included (name, email, phone, company, subject, message)

---

## Email Template Configuration (for EmailJS)

When setting up your EmailJS template, use this structure:

**Template Settings:**

- **To Email:** cernocaseclub@gmail.com
- **From Name:** CERNO Website Forms
- **Reply-To:** {{reply_to}}
- **Subject:** 🔔 New {{form_type}} Contact Form Submission

**Email Body Template:**

```
═══════════════════════════════════════════════════
   NEW CONTACT FORM SUBMISSION - CERNO WEBSITE
═══════════════════════════════════════════════════

Form Type: {{form_type}}

─────────────────────────────────────────────────
📋 CONTACT INFORMATION
─────────────────────────────────────────────────

Full Name:        {{from_name}}
Email Address:    {{reply_to}}
Phone Number:     {{phone}}
Company/Org:      {{company}}
Subject:          {{subject}}

─────────────────────────────────────────────────
💬 MESSAGE
─────────────────────────────────────────────────

{{message}}

═══════════════════════════════════════════════════
✉️ QUICK REPLY
═══════════════════════════════════════════════════

Simply click "Reply" to respond directly to: {{reply_to}}

This email was automatically sent from the CERNO website contact form.

═══════════════════════════════════════════════════
```

---

## Gmail Organization Tips:

1. **Create a Label** called "CERNO Website Forms"
2. **Set up a Filter** to automatically:

   - Apply the label to emails with subject containing "CERNO"
   - Mark as important
   - Never send to spam

3. **Enable Notifications** for this label to get instant alerts

This way, you'll never miss a form submission!
