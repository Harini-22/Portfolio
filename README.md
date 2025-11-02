# Portfolio Website

A modern, responsive portfolio website built with Next.js, Tailwind CSS, Mantine UI, and ShadCN components.

## Features

- **Responsive Design**: Mobile-first approach with beautiful UI across all devices
- **Modern Tech Stack**: Next.js 15, Tailwind CSS, Mantine UI, ShadCN components
- **Contact Form**: Functional contact form with email integration
- **Smooth Animations**: Enhanced user experience with smooth transitions
- **Dark Mode Support**: Built-in dark/light theme support
- **SEO Optimized**: Proper meta tags and semantic HTML

## Sections

- **Hero Section**: Personal introduction and contact information
- **Skills**: Categorized technical skills and tools
- **Experience**: Professional work experience timeline
- **Projects**: Showcase of key projects with descriptions
- **Education**: Academic background and achievements
- **Certificates**: Professional certifications
- **Contact Form**: Interactive contact form with email functionality

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Email Configuration
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

# Next.js Configuration
NEXTAUTH_URL=http://localhost:3000
```

### 3. Email Configuration

To enable the contact form functionality:

1. **Gmail Setup**:
   - Enable 2-factor authentication on your Gmail account
   - Generate an App Password for this application
   - Use your Gmail address as `EMAIL_USER`
   - Use the generated App Password as `EMAIL_PASS`

2. **Other Email Services**:
   - Update the transporter configuration in `src/app/api/contact/route.js`
   - Modify the service and auth settings according to your email provider

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## Customization

### Personal Information
Update the following in `src/app/page.js`:
- Name and title
- Contact information
- Skills and technologies
- Work experience
- Projects
- Education details
- Certificates

### Styling
- Modify `src/app/globals.css` for global styles
- Update Tailwind classes in components for custom styling
- Customize Mantine theme in the layout

### Contact Form
- Update the recipient email in `src/app/api/contact/route.js`
- Modify form fields as needed
- Customize email template

## Technologies Used

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS
- **UI Components**: Mantine UI, ShadCN/UI
- **Icons**: Lucide React
- **Email**: Nodemailer
- **Deployment**: Vercel (recommended)

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Contact

For questions or support, please contact:
- Email: harinikarthikeyan22@gmail.com
- Phone: +91 7200797370

## License

This project is open source and available under the [MIT License](LICENSE).