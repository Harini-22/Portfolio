# Portfolio Environment Setup

## Required Environment Variables

Create a `.env.local` file in the root directory with the following content:

```env
# Email Configuration for Contact Form
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

# Next.js Configuration
NEXTAUTH_URL=http://localhost:3000
```

## Email Setup Instructions

### For Gmail Users:
1. Enable 2-factor authentication on your Gmail account
2. Go to Google Account settings > Security > App passwords
3. Generate a new app password for "Mail"
4. Use your Gmail address as `EMAIL_USER`
5. Use the generated app password as `EMAIL_PASS`

### For Other Email Services:
Update the transporter configuration in `src/app/api/contact/route.js`:

```javascript
const transporter = nodemailer.createTransporter({
  service: 'your-service', // e.g., 'outlook', 'yahoo', etc.
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
```

## Running the Application

1. Install dependencies: `npm install`
2. Create `.env.local` with your email credentials
3. Run development server: `npm run dev`
4. Open http://localhost:3000

## Contact Form Testing

The contact form will send emails to: harinikarthikeyan22@gmail.com

Make sure to test the form after setting up your email credentials.

