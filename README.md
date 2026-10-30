# Vishnu EV Website

Responsive multi-page static website designed for GitHub Pages and a custom domain.

## Pages
- `index.html` — homepage
- `charging-solutions.html` — trucks, buses, commercial and fleet charging
- `partner.html` — property owners, investors and commercial partners
- `network.html` — network directory placeholder
- `about.html` — company overview
- `contact.html` — contact form
- `404.html` — not-found page

## Before publishing
1. Replace `YOUR-EMAIL@example.com` in `partner.html`, `contact.html`, and `assets/script.js` defaults with the official business email.
2. Replace `https://wa.me/` with `https://wa.me/91XXXXXXXXXX` using the official WhatsApp number.
3. Add the official phone number, address, verified station locations and any official charging-app links.
4. Replace Unsplash image URLs with your own station photographs if available and ensure your image usage rights.
5. Review all claims and only publish verified charger specifications, network coverage, partner terms and investment information.
6. Update `sitemap.xml` with the real custom domain.

## Deploy to GitHub Pages
1. Create a GitHub repository, e.g. `vishnu-ev-website`.
2. Upload all files and folders from this directory to the repository root.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
5. Once the GitHub Pages URL is available, configure the custom domain in **Settings → Pages**.
6. At your DNS provider, add the DNS records GitHub Pages specifies for your domain. For a typical apex domain, GitHub Pages commonly uses four A records and an optional AAAA set; for a `www` subdomain, use a CNAME to your GitHub Pages hostname. Follow the exact records shown by GitHub.
7. Enable **Enforce HTTPS** once DNS verification completes.

## Forms and integrations
The enquiry forms currently prepare a message in the visitor's email app using `mailto:`. They do not save submissions to a database or send them automatically. For lead capture, connect a form service or a backend endpoint before running ads.

## Notes
- The website is static HTML/CSS/JS: no build step required.
- It is mobile responsive.
- Investment-related language is intentionally non-guaranteed; have all commercial terms reviewed before publication.
