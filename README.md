# Direct Food Distribution — Website

A static marketing website for Direct Food Distribution: Home, About, Products & Services (browse-only, no online ordering), and Contact.

## Structure

```
index.html       Home page
about.html        About page
products.html     Product & service catalog (view-only)
contact.html      Contact page + inquiry form
css/style.css     All styling
js/main.js        Mobile nav toggle + contact form handling
```

No build step or dependencies — plain HTML/CSS/JS. Open `index.html` directly in a browser, or serve the folder with any static file server.

## Placeholder content to update

Before launch, replace the placeholders sprinkled across the pages:

- Stats on the homepage/about page (500+ businesses, 98% on-time, etc.)
- Product categories/tags if your actual catalog differs

## Contact form

The form on `contact.html` submits to Formspree (`https://formspree.io/f/xpqgelgq`), which forwards submissions to `info@directfooddistribution.com`. Formspree sends a one-time confirmation email on the first submission — that link must be clicked to activate the form.

## Deployment

Any static host works, e.g.:

- **GitHub Pages**: enable Pages on this repo, serve from the root of the default branch.
- **Netlify / Vercel**: drag-and-drop the folder or connect the repo — no build command needed.
