# GetGrowth - Digital Agency Website

## Overview
GetGrowth is a production-ready, multi-language digital agency website built with Next.js 14 (App Router). It showcases services for website development and marketing solutions specifically for small businesses. The project's vision is to help small businesses establish and grow their online presence, offering an all-in-one solution for digital needs.

## User Preferences
I prefer iterative development and welcome questions for clarification. Please ask before making major architectural changes or introducing new dependencies. I prefer clear, concise explanations and direct communication.

## System Architecture
The website is built with Next.js 14 using the App Router, leveraging TypeScript for type safety and Tailwind CSS for styling. Framer Motion is used for lightweight animations. The system supports multi-language content (English, Russian, Uzbek) with language stored in the URL path, managed by a simple dictionary-based i18n system and Next.js middleware for redirection.

The UI/UX follows a clean, modern SaaS aesthetic, designed to be fully responsive and mobile-first. SEO is a core consideration, with dynamic metadata generation for each page, sitemap.xml, robots.txt, and SEO-optimized blog content with internal linking.

Key features include:
- A two-CTA hero section.
- A "Why Choose GetGrowth?" section highlighting 6 benefits.
- 3-tier pricing packages with detailed feature breakdowns.
- A comprehensive services showcase covering IT/Web, Marketing, and Design.
- A portfolio showcasing real client work, including detailed case studies.
- A live comment system with real-time features, replies, likes, and admin moderation.
- Integration with various social media platforms (Instagram, Telegram, WhatsApp, LinkedIn).
- A contact form that integrates with a Telegram bot for submissions.
- A blog section with SEO-optimized content relevant to small businesses.

## External Dependencies
- **Next.js 14 (App Router):** Web framework.
- **TypeScript:** Programming language.
- **Tailwind CSS:** Styling framework.
- **Framer Motion:** Animation library.
- **Supabase:** Used for the real-time comment system (PostgreSQL backend).
- **Google Analytics:** For visitor tracking (G-BXTK104HXM).
- **Telegram Bot API:** Used for contact form submissions.
- **Next-sitemap:** For automated sitemap.xml generation.