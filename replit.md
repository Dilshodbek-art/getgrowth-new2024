# GetGrowth - Digital Agency Website

## Overview
GetGrowth is a production-ready, multi-language digital agency website built with Next.js 14 (App Router). It showcases services for website development and marketing solutions for businesses of all sizes. The project's vision is to help businesses establish and grow their online presence, offering an all-in-one solution for digital needs.

## User Preferences
I prefer iterative development and welcome questions for clarification. Please ask before making major architectural changes or introducing new dependencies. I prefer clear, concise explanations and direct communication.

## Recent Changes (November 2025)
- Restructured site navigation with dropdown menus for Services, Pricing, and About sections
- Removed pricing teaser from homepage
- Created category-specific service pages (Marketing, Web Development, Graphic Design)
- Built new pricing architecture with monthly plans for web development ($19-$63/month) and custom pricing for marketing/design
- Added Testimonials page with client feedback
- Updated About page with mission, story, and unique value propositions

## System Architecture
The website is built with Next.js 14 using the App Router, leveraging TypeScript for type safety and Tailwind CSS for styling. Framer Motion is used for lightweight animations. The system supports multi-language content (English, Russian, Uzbek) with language stored in the URL path, managed by a simple dictionary-based i18n system and Next.js middleware for redirection.

### Site Structure
```
/ - Homepage (Hero, Services Overview, Why Choose Us, Portfolio Preview, Process, CTA)
/services - Main services page with 3 categories
  /services/marketing - SEO, SMM, Advertising, Content, Brand Strategy
  /services/web-development - Websites, Telegram Bots, Web Apps, Custom Solutions
  /services/graphic-design - Logos, Branding, Posters, Social Media, Animations
/pricing - Main pricing overview
  /pricing/web-development - Monthly plans (Starter $19, Standard $39, Pro $63)
  /pricing/marketing - Custom pricing with service breakdown
  /pricing/graphic-design - Custom pricing with service breakdown
/about - Company mission, story, and values
/testimonials - Client testimonials and reviews
/portfolio - Case studies and client work
/contact - Contact form with Telegram integration
/blog - SEO-optimized articles
```

### Navigation Structure
- **Home**: Direct link
- **Services** (dropdown): All Services, Marketing, Web Development, Graphic Design
- **Pricing** (dropdown): All Pricing, Web Development, Marketing, Graphic Design
- **About** (dropdown): About Us, Portfolio, Testimonials
- **Contact**: Direct link

The UI/UX follows a clean, modern SaaS aesthetic, designed to be fully responsive and mobile-first. SEO is a core consideration, with dynamic metadata generation for each page, sitemap.xml, robots.txt, and SEO-optimized content.

Key features include:
- A two-CTA hero section
- A "Why Choose GetGrowth?" section highlighting 6 benefits
- Category-specific pricing with monthly plans and custom quotes
- A comprehensive services showcase covering Marketing, Web Development, and Design
- A portfolio showcasing real client work, including detailed case studies
- A live comment system with real-time features, replies, likes, and admin moderation
- Integration with various social media platforms (Instagram, Telegram, WhatsApp, LinkedIn)
- A contact form that integrates with a Telegram bot for submissions

## External Dependencies
- **Next.js 14 (App Router):** Web framework
- **TypeScript:** Programming language
- **Tailwind CSS:** Styling framework
- **Framer Motion:** Animation library
- **Supabase:** Used for the real-time comment system (PostgreSQL backend)
- **Google Analytics:** For visitor tracking (G-BXTK104HXM)
- **Telegram Bot API:** Used for contact form submissions
- **Next-sitemap:** For automated sitemap.xml generation
