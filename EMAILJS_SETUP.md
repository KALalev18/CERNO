# EmailJS Setup Guide for Contact Forms

This website uses EmailJS to handle contact form submissions. Follow these steps to set it up:

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (allows 200 emails/month)
3. Verify your email address

## Step 2: Create Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your email account
5. Copy the **Service ID** (you'll need this later)

service_40jmlzq

## Step 3: Create Email Template

1. Go to "Email Templates" in the dashboard
2. Click "Create New Template"
3. Use this template structure:

**Template Name:** CERNO Contact Form

**Subject:** New Contact Form Submission - {{form_type}}

**Content:**

```
New contact form submission from CERNO website:

Name: {{from_name}}
Email: {{reply_to}}
Phone: {{phone}}
Company: {{company}}
Subject: {{subject}}
Form Type: {{form_type}}

Message:
{{message}}
```

4. Save the template and copy the **Template ID**

template_3xnw4wd

## Step 4: Get Public Key

1. Go to "Account" → "General"
2. Find your **Public Key** under "API Keys"
3. Copy this key

QPOyQkYyBVuGXVcQv

## Step 5: Update Website Files

1. Open `contact.html`
2. Find this line: `emailjs.init("YOUR_PUBLIC_KEY");`
3. Replace `YOUR_PUBLIC_KEY` with your actual public key

4. Open `js/main.js`
5. Find two instances of: `emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)`
6. Replace:
   - `YOUR_SERVICE_ID` with your Service ID from Step 2
   - `YOUR_TEMPLATE_ID` with your Template ID from Step 3

## Example Configuration

In `contact.html`:

```javascript
emailjs.init("user_abc123xyz456");
```

In `js/main.js`:

```javascript
emailjs.sendForm("service_abc123", "template_xyz456", this);
```

## Testing

1. Open your website
2. Fill out a contact form
3. Submit it
4. Check your connected email inbox for the message
5. You should also see a success message on the website

## Troubleshooting

- If emails aren't sending, check the browser console for errors
- Verify your Service ID, Template ID, and Public Key are correct
- Make sure you're not exceeding the free tier limit (200 emails/month)
- Check your spam folder for test emails

## Alternative: FormSpree

If you prefer not to use EmailJS, you can also use FormSpree:

1. Go to [https://formspree.io/](https://formspree.io/)
2. Create a free account
3. Create a new form and get the form endpoint
4. Update the forms in contact.html to use the action attribute with your FormSpree endpoint

For more help, visit: https://www.emailjs.com/docs/
