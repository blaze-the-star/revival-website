# Revival Website - Technical Documentation

## Project Overview

**Revival** is a Christian fantasy web serial hosted as a static blog website. The site is built using a custom markdown-to-HTML blog generator and deployed via GitHub Pages.

- **Live Site:** https://blog.revival.us.kg
- **Repository:** https://github.com/blaze-the-star/revival-website
- **Author/Owner:** Blaze the Star (startheblaze@gmail.com)

---

## Technology Stack

### Core Technologies
- **Static Site Generator:** Custom GitHub Action ([action-build-md-blog](https://github.com/GsLogiMaker/action-build-md-blog))
  - Built with TypeScript (38.5%), CSS (36.3%), EJS templating (24.6%)
  - Converts markdown files to HTML blog posts
  - Generates RSS feeds automatically

- **Hosting:** GitHub Pages (gh-pages branch)
- **Domain:** Custom domain via `.us.kg` TLD
- **Version Control:** Git/GitHub

### Frontend
- **HTML/CSS:** Custom theme with vanilla CSS (no preprocessors)
- **Templating:** EJS (Embedded JavaScript templating)
- **Typography:** Custom web fonts (stored in `/static/fonts/`)
- **Icons/Images:** SVG icons and static images in `/static/img/`

### CI/CD
- **GitHub Actions:** Automated deployment pipeline
- **Workflow File:** `.github/workflows/main.yml`
- **Deployment:** Automatic on push to `main` or `master` branches

---

## Project Structure

```
revival-website/
├── .github/
│   └── workflows/
│       └── main.yml              # GitHub Actions deployment workflow
├── .obsidian/                    # Obsidian vault configuration (for writing)
├── marketing-strategy/           # Marketing planning documents
├── posts/                        # Published chapter markdown files
│   ├── Revival 1.1.md
│   ├── Revival 1.2.md
│   └── ...
├── static/                       # Static assets
│   ├── css/
│   │   └── theme.css            # Main stylesheet
│   ├── fonts/                   # Web fonts
│   ├── img/                     # SVG icons and images
│   │   ├── home.svg
│   │   ├── info.svg
│   │   ├── mail.svg
│   │   ├── rss.svg
│   │   └── grain.jpg            # Background texture
│   └── favicon.ico
├── writing/                     # Draft chapters and story planning
│   ├── Ch 1/, Ch 2/, Ch 3/...  # Chapter drafts by number
│   ├── Book/                    # Story planning
│   ├── Characters/              # Character development
│   └── *.md                     # Writing guides and prompts
├── about.md                     # About page content
├── site.json                    # Site configuration
├── .gitignore
└── README.md
```

---

## Configuration System

### site.json

The `site.json` file controls all site-wide settings:

```json
{
  "title": "Revival",
  "subtitle": "",
  "baseUrl": "",
  "owner": {
    "name": "Blaze the Star",
    "email": "startheblaze@gmail.com"
  },
  "navigation": {
    "home": { "href": "/", "class": "link-home", "title": "...", "body": "<img>" },
    "about": { "href": "/about", "class": "link-about-me", "title": "...", "body": "<img>" }
  },
  "social": {
    "email": { "href": "mailto:...", "class": "link-email", ... },
    "rss": { "href": "/rss.xml", "class": "link-rss", ... },
    "subscribe": { "href": "https://tr.ee/elq-hMeqUk", "class": "link-subscribe", ... }
  },
  "newsletter": {},
  "seo": {
    "title": "Revival",
    "description": "...",
    "author": "Blaze the Star",
    "keywords": ["blog", "novel", "fantasy", "web serial", ...]
  },
  "cname": "blog.revival.us.kg"
}
```

**Key Configuration Options:**
- `title` / `subtitle`: Site branding
- `owner`: Author information
- `navigation`: Main navigation links
- `social`: Social media and contact links
- `seo`: Search engine optimization metadata
- `cname`: Custom domain for GitHub Pages
- `newsletter`: Newsletter integration (currently empty, previously used Revue)

---

## Content Management

### Post/Chapter Format

Chapters are markdown files in the `/posts/` directory with YAML frontmatter:

```markdown
---
title: "Revival Ch.1"
date: 2025-12-01
permalink: /1/1
navigation:
  - body: Next
    href: /1/2
---

### Chapter Title
Chapter content in markdown...
```

**Frontmatter Fields:**
- `title`: Chapter title (displayed in browser tab and meta tags)
- `date`: Publication date (YYYY-MM-DD format)
- `permalink`: Custom URL path (e.g., `/1/1` for Chapter 1.1)
- `navigation`: Previous/Next chapter links

**Naming Convention:**
- Files: `Revival X.Y.md` (X = chapter number, Y = section number)
- Permalinks: `/X/Y` (clean URLs without `.html`)

### Special Pages

- **about.md**: About page with author bio and story description
- **start-here.md**: New reader landing page
- **table-of-contents.md**: Chapter index/navigation

---

## Deployment Pipeline

### GitHub Actions Workflow

**File:** `.github/workflows/main.yml`

**Trigger Events:**
- Push to `main` or `master` branch
- Manual workflow dispatch

**Build Process:**
1. Checkout repository code
2. Run `GsLogiMaker/action-build-md-blog@master` action
   - Scans `/posts/` directory for markdown files
   - Processes frontmatter metadata
   - Converts markdown to HTML using EJS templates
   - Applies CSS theme from `/static/css/theme.css`
   - Copies static assets
   - Generates RSS feed (`/rss.xml`)
   - Creates site navigation based on `site.json`
3. Deploy generated HTML to `gh-pages` branch
4. GitHub Pages serves the site from `gh-pages` branch

**Deployment Time:** ~1-2 minutes from push to live

---

## Styling System

### CSS Architecture

**Main Stylesheet:** `/static/css/theme.css`

**Structure:**
- Utility classes (margin, padding, text alignment)
- Component-specific styles
- Responsive design (implied, needs verification)
- Custom web fonts

**Design System:**
- Utility-first approach with classes like `.mar-0`, `.mar-t-1`, `.text-center`
- Consistent spacing scale (multiples of `.33rem`)
- Background texture via `grain.jpg`

**Custom Fonts:**
Located in `/static/fonts/` (specific font families need verification)

---

## Current Features

### Reader Experience
- ✅ Sequential chapter navigation (Previous/Next links)
- ✅ Table of contents page
- ✅ RSS feed for chapter updates
- ✅ Custom permalinks for chapters
- ✅ About page with story/author information
- ✅ Email subscription link (external: https://tr.ee/elq-hMeqUk)

### Content Publishing
- ✅ Markdown-based writing workflow
- ✅ YAML frontmatter for metadata
- ✅ Automatic deployment on git push
- ✅ Version control for all content

### SEO & Discoverability
- ✅ SEO metadata configuration
- ✅ RSS feed generation
- ✅ Custom domain support
- ✅ Descriptive keywords and meta descriptions

---

## Known Limitations & Technical Debt

### Content Management
- ❌ No admin panel or CMS interface
- ❌ No draft/scheduled publishing system
- ❌ Manual frontmatter editing required
- ❌ No automated chapter numbering

### Reader Features
- ❌ No built-in comments system
- ❌ No reader bookmarking/progress tracking
- ❌ No dark mode toggle
- ❌ No text size adjustment controls
- ❌ No search functionality
- ❌ No character glossary/wiki

### Analytics & Engagement
- ❌ No analytics integration (Google Analytics, Plausible, etc.)
- ❌ No reader engagement metrics
- ❌ Newsletter integration incomplete (empty config)

### Technical Infrastructure
- ❌ No build-time optimization (minification, bundling)
- ❌ No image optimization pipeline
- ❌ Static asset caching strategy unclear
- ❌ No automated testing
- ❌ No local development environment documented

---

## Development Workflow

### Adding New Chapters

1. **Write Chapter:** Create markdown file in `/posts/`
   ```bash
   touch "Revival X.Y.md"
   ```

2. **Add Frontmatter:**
   ```yaml
   ---
   title: "Revival Ch.X"
   date: YYYY-MM-DD
   permalink: /X/Y
   navigation:
     - body: Previous
       href: /X/Y-1
     - body: Next
       href: /X/Y+1
   ---
   ```

3. **Write Content:** Use markdown formatting

4. **Commit and Push:**
   ```bash
   git add .
   git commit -m "Publish Chapter X.Y"
   git push origin main
   ```

5. **Wait for Deployment:** GitHub Actions builds and deploys automatically

### Local Development

**Current Status:** No documented local development setup

**Recommendations for Implementation:**
- Clone the action-build-md-blog repository
- Run locally with Node.js
- Use a local web server (e.g., `python -m http.server`)
- Consider adding a `dev` script to `package.json`

---

## Potential Enhancement Opportunities

### High-Priority Features

1. **Comments System**
   - Integration options: Disqus, Utterances (GitHub Issues), Giscus (GitHub Discussions), Hyvor Talk
   - Low maintenance: Utterances or Giscus (uses existing GitHub account)

2. **Analytics**
   - Privacy-focused options: Plausible, Fathom, Simple Analytics
   - Free tier available: Google Analytics, Cloudflare Analytics

3. **Search Functionality**
   - Static site search: Lunr.js, Pagefind, Algolia DocSearch
   - Simple keyword search across chapters

4. **Dark Mode**
   - CSS custom properties for theming
   - localStorage for user preference persistence
   - Toggle button in navigation

5. **Table of Contents Enhancement**
   - Auto-generated from frontmatter
   - Arc/book structure visualization
   - Reading progress indicators

### Medium-Priority Features

6. **Character Glossary**
   - Dedicated page with character profiles
   - Generated from structured data (JSON/YAML)
   - Quick reference for readers

7. **Newsletter Integration**
   - Complete the empty `newsletter` config in `site.json`
   - Integration with Buttondown, ConvertKit, or Mailchimp
   - Email signup form on site

8. **Reading Experience**
   - Font size controls
   - Reading time estimates
   - Print-friendly styling
   - "Back to top" button for long chapters

9. **Share Functionality**
   - Social media share buttons
   - Quote highlighting and sharing
   - Chapter-specific Open Graph images

10. **Mobile Optimization**
    - Responsive design verification
    - Touch-friendly navigation
    - Mobile menu optimization

### Low-Priority / Future Considerations

11. **Progressive Web App (PWA)**
    - Offline reading capability
    - Add to home screen functionality
    - Service worker for caching

12. **Content Recommendations**
    - "If you liked this chapter" suggestions
    - Related character appearances
    - Thematic connections

13. **Author Tools**
    - Markdown writing templates
    - Character/location name consistency checker
    - Word count tracking

14. **Build Optimizations**
    - Image optimization (WebP conversion, responsive images)
    - CSS/JS minification
    - Asset bundling
    - CDN integration for static assets

---

## API & Integration Points

### External Services

**Current Integrations:**
- **Newsletter Signup:** https://tr.ee/elq-hMeqUk (external link)
- **GitHub Pages:** Hosting and SSL
- **Custom Domain:** DNS pointed to GitHub Pages

**Potential Integrations:**
- **Comments:** Utterances, Giscus, Disqus
- **Analytics:** Plausible, Fathom, Google Analytics
- **Email:** Buttondown, ConvertKit, Mailchimp
- **Search:** Algolia, Pagefind
- **CDN:** Cloudflare, jsDelivr (for static assets)

---

## Performance Considerations

### Current State
- Static HTML files (fast delivery)
- Minimal JavaScript (primarily static content)
- Large background image (`grain.jpg` - 1.6MB, should be optimized)

### Optimization Opportunities
1. **Image Optimization:**
   - Compress `grain.jpg` or convert to CSS pattern
   - Use WebP format for images
   - Implement lazy loading for chapter images

2. **Asset Delivery:**
   - Add cache headers for static assets
   - Consider CDN for fonts and images
   - Minify CSS

3. **Font Loading:**
   - Implement `font-display: swap` for custom fonts
   - Consider system font stack as fallback

---

## Security Considerations

### Current Security Posture
- ✅ Static site (no server-side vulnerabilities)
- ✅ HTTPS via GitHub Pages
- ✅ No user input/database (minimal attack surface)
- ✅ Version control (audit trail)

### Recommendations
- Add Content Security Policy (CSP) headers
- Implement Subresource Integrity (SRI) for external scripts
- Regular dependency updates for GitHub Action
- Monitor repository access permissions

---

## Maintenance & Support

### Regular Maintenance Tasks
1. **Weekly:**
   - Publish new chapters
   - Monitor deployment success
   - Check for reader feedback via email

2. **Monthly:**
   - Review site analytics (if implemented)
   - Update table of contents
   - Check for broken links

3. **Quarterly:**
   - Review and update About page
   - SEO keyword optimization
   - Dependency updates (GitHub Action version)

### Monitoring
- **GitHub Actions:** Check workflow status after each push
- **Uptime:** GitHub Pages status (https://www.githubstatus.com/)
- **Domain:** DNS and SSL certificate monitoring

---

## Documentation & Resources

### Project Documentation
- **README.md** - Basic project description (currently minimal)
- **about.md** - Story and author information
- **This file** - Technical documentation for developers

### External Resources
- [action-build-md-blog GitHub](https://github.com/GsLogiMaker/action-build-md-blog)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Markdown Guide](https://www.markdownguide.org/)

### Writing Resources (in `/writing/` directory)
- Character guides and development notes
- Chapter drafts and outlines
- Writing prompts and planning documents

---

## Contact & Support

**Project Owner:** Blaze the Star
**Email:** startheblaze@gmail.com
**Repository:** https://github.com/blaze-the-star/revival-website

For technical issues or questions about the site's functionality, contact the project owner or create an issue in the GitHub repository.

---

## Appendix: Common Tasks

### Task: Update Site Configuration
1. Edit `site.json`
2. Commit and push changes
3. Wait for automatic deployment

### Task: Change Site Theme
1. Edit `/static/css/theme.css`
2. Test locally (if local dev environment exists)
3. Commit and push changes

### Task: Add New Navigation Link
1. Edit `site.json` → `navigation` or `social` section
2. Add corresponding SVG icon to `/static/img/` (if needed)
3. Commit and push changes

### Task: Update About Page
1. Edit `about.md`
2. Commit and push changes

### Task: Fix Broken Chapter Links
1. Update `navigation` in chapter frontmatter
2. Ensure permalink consistency
3. Commit and push changes

---

**Document Version:** 1.0
**Last Updated:** March 7, 2026
**Prepared for:** Web developers working on Revival website enhancements
