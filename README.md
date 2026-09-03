# Kezio

> Tools for everyday problems.

Kezio is a collection of free web tools and Telegram bots built to solve everyday problems.

**Website:** https://kezio.netlify.app

---

## About

Kezio brings useful tools and small projects together in one place, making them easier to discover and access without having to search across different websites and platforms.

Each tool is an independent project built around a specific use case. Some are web-based tools, while others are Telegram bots.

The collection will continue to grow as new tools and projects are added over time.

---

## Short Description

Kezio is a collection of free web tools and Telegram bots built to solve everyday problems.

---

## Long Description

Kezio is a collection of free web tools and Telegram bots built to solve everyday problems. It brings useful projects together in one place, making them easier to discover and access without having to search across different websites and platforms.

Each tool is built around a specific use case and designed to be straightforward to use. The collection will continue to grow as new tools and projects are added over time.

---

## Tagline

**Tools for everyday problems**

---

## Website

https://kezio.netlify.app

---

## How Kezio Works

Kezio is primarily a directory and central home for independent tools and projects.

The basic flow is:

1. A tool is added to Kezio.
2. The tool is given a card on the homepage.
3. The card contains the tool's name, description, platform, and link.
4. Visitors click **Use Tool**.
5. They are taken directly to the tool or service.
6. The tool operates independently from Kezio.

Kezio does not require user accounts or a centralized login system.

The individual tools may have their own authentication, databases, APIs, payment systems, or other requirements depending on the project.

---

## Tool Platforms

Kezio currently supports different types of projects, including:

- **Web** - Browser-based tools and web applications.
- **Telegram Bot** - Tools accessed through Telegram.

More platforms can be added in the future if needed.

---

## Project Structure

The exact project structure may evolve, but the main files and directories are organized roughly like this:

```text
kezio/
├── index.html
├── about.html
├── contact.html
├── support.html
├── privacy.html
├── terms.html
├── thank-you.html
├── sitemap.xml
├── robots.txt
│
├── css/
│   └── style.css
│
├── js/
│   ├── app.js
│   └── tools.js
│
├── assets/
│   └── icons/
│
└── README.md
````

---

## Adding a New Tool

Tools are managed through:

```text
js/tools.js
```

To add a new tool:

1. Open `js/tools.js`.
2. Add a new tool object to the tools collection.
3. Provide the required information.
4. Add the tool's icon to the appropriate assets folder.
5. Test the tool link.
6. Test the homepage card on desktop and mobile.
7. Commit and push the changes.

A typical tool entry contains information such as:

```javascript
{
    name: "Tool Name",
    description: "Short description of what the tool does.",
    platform: "web",
    url: "https://example.com",
    icon: "assets/icons/tool-name.png",
    keywords: ["keyword1", "keyword2", "keyword3"]
}
```

For Telegram bots, the platform value should identify it as a Telegram bot and the URL should point to the bot.

Follow the existing format in `tools.js` when adding new entries rather than creating a different structure.

---

## Adding a Tool Icon

Place the tool's icon in:

```text
assets/icons/
```

Use a clear, recognizable image.

Keep filenames simple and consistent, for example:

```text
cvdraft-bot.jpeg
deslop-bot.jpeg
tool-name.png
```

After adding the icon, make sure the path in `tools.js` matches the actual filename and location.

---

## Adding a New Page

If Kezio eventually needs another permanent public page:

1. Create the HTML file.
2. Use the existing site structure and CSS classes.
3. Add the standard header and footer.
4. Add the correct SEO metadata.
5. Add the page to the site's navigation if appropriate.
6. Add the canonical URL.
7. Add the page to `sitemap.xml` if it should be indexed.
8. Test light and dark mode.
9. Test desktop and mobile layouts.

Pages that should not appear in search results should use an appropriate `noindex` directive instead of being added to the sitemap.

---

## SEO

Kezio uses basic technical SEO across its public pages.

Important elements include:

* Unique page titles
* Meta descriptions
* Canonical URLs
* Open Graph metadata
* Twitter Card metadata
* JSON-LD structured data where appropriate
* `robots.txt`
* `sitemap.xml`
* Mobile-friendly pages
* Internal navigation
* Descriptive tool names and descriptions

The sitemap contains the indexable public pages on the Kezio website.

The thank-you page is not intended for search engines.

---

## Sitemap

The sitemap is located at:

```text
sitemap.xml
```

Production URL:

[https://kezio.netlify.app/sitemap.xml](https://kezio.netlify.app/sitemap.xml)

When adding a new indexable public page, remember to add it to the sitemap.

Do not add external websites to the sitemap.

---

## Robots.txt

The robots file is located at:

```text
robots.txt
```

Production URL:

[https://kezio.netlify.app/robots.txt](https://kezio.netlify.app/robots.txt)

The sitemap URL should remain included in the file.

---

## Theme

Kezio supports light and dark modes.

The user's theme preference is stored locally in the browser using:

```text
localStorage
```

The stored key is:

```text
kezio-theme
```

The site also initializes the theme early in the page `<head>` to prevent a visible dark-mode flash while the page loads.

When creating new pages, make sure they use the existing theme system rather than implementing a separate theme solution.

---

## Navigation

The main navigation currently contains:

* Home
* About
* Contact
* Support
* Dev

The **Dev** link points to the developer's separate portfolio website and is not part of Kezio's sitemap.

The footer also contains links to:

* About
* Contact
* Support
* Privacy Policy
* Terms

---

## Contact Form

The contact page contains a contact form that allows visitors to:

* Ask questions
* Report bugs
* Suggest tools
* Send feedback

The form submission flow includes a thank-you page.

The thank-you page is intentionally excluded from search indexing.

---

## Support

The Support page provides ways for visitors to support the project.

It currently includes:

* A donation widget
* Cryptocurrency donation options

The crypto copy buttons are handled by the site's existing JavaScript functionality.

When changing wallet addresses, double-check every address carefully before deploying.

---

## Legal Pages

Kezio currently has:

* `privacy.html` - Privacy Policy
* `terms.html` - Terms of Use

These pages should be updated if the way Kezio handles information or operates changes materially.

Avoid adding technical implementation details to the legal pages unless they are actually relevant to users.

---

## External Tools

The tools listed on Kezio are independent projects.

A tool may:

* Be hosted on another platform
* Have its own website
* Be a Telegram bot
* Use its own accounts or authentication
* Have its own privacy policy
* Have its own terms
* Be temporarily unavailable

Kezio acts as the central directory and access point rather than replacing the individual tools.

---

## Backlinks

Each tool should ideally link back to Kezio where appropriate.

For web tools, a backlink can be placed in a footer, About section, or other suitable location.

For Telegram bots, a Kezio link can be included in an appropriate bot message, help command, description, or other suitable location where supported.

The goal is to create a simple connection between Kezio and the projects listed on it.

---

## Deployment

Kezio is hosted on Netlify.

Production website:

[https://kezio.netlify.app](https://kezio.netlify.app)

The normal workflow is:

```text
Make changes
    ↓
Test locally
    ↓
Commit changes
    ↓
Push to GitHub
    ↓
Netlify deploys the update
    ↓
Test the live website
```

Before pushing significant changes, test the affected pages locally.

After deployment, verify the live version rather than assuming the deployment worked correctly.

---

## Launch Checklist

Before an official launch, verify:

### Website

* [ ] Homepage works
* [ ] All tool links work
* [ ] About page works
* [ ] Contact page works
* [ ] Support page works
* [ ] Privacy Policy works
* [ ] Terms of Use works
* [ ] Thank-you page works
* [ ] 404 behavior is acceptable

### Navigation

* [ ] Desktop navigation works
* [ ] Mobile navigation works
* [ ] Footer links work
* [ ] Dev link works

### Theme

* [ ] Light mode works
* [ ] Dark mode works
* [ ] No visible dark-mode flash on page load

### Support

* [ ] Donation widget loads
* [ ] Crypto addresses are correct
* [ ] Crypto copy buttons work

### Contact

* [ ] Contact form submits successfully
* [ ] Thank-you page appears
* [ ] Redirect works

### SEO

* [ ] Page titles are correct
* [ ] Meta descriptions are correct
* [ ] Canonical URLs are correct
* [ ] OG metadata is present
* [ ] `robots.txt` is accessible
* [ ] `sitemap.xml` is accessible
* [ ] Thank-you page is `noindex`
* [ ] Sitemap contains only appropriate Kezio URLs
* [ ] Google Search Console is configured
* [ ] Sitemap is submitted to Google Search Console

### Tools

* [ ] Every listed tool is currently working
* [ ] Telegram bot links work
* [ ] Web tool links work
* [ ] Tool descriptions are accurate
* [ ] Tool icons load correctly
* [ ] Backlinks to Kezio have been added where appropriate

---

## Updating Kezio

When adding or changing a tool, remember to check all related parts of the project.

### For a new tool

```text
1. Build/test the tool
2. Add its icon
3. Add its entry to js/tools.js
4. Test the tool card
5. Test the tool link
6. Add a backlink to Kezio where appropriate
7. Commit and push
8. Test the live version
```

### For a new public Kezio page

```text
1. Create the page
2. Add SEO metadata
3. Add navigation/footer links if appropriate
4. Test themes
5. Add it to sitemap.xml if indexable
6. Commit and push
7. Test the live version
```

---

## Directory Submission Information

### Tagline

**Tools for everyday problems**

### Short Description

**Kezio is a collection of free web tools and Telegram bots built to solve everyday problems.**

### Long Description

**Kezio is a collection of free web tools and Telegram bots built to solve everyday problems. It brings useful projects together in one place, making them easier to discover and access without having to search across different websites and platforms.**

**Each tool is built around a specific use case and designed to be straightforward to use. The collection will continue to grow as new tools and projects are added over time.**

### Website

[https://kezio.netlify.app](https://kezio.netlify.app)

---

## Tech

Kezio is a lightweight frontend project built primarily with:

* HTML
* CSS
* JavaScript

The project is designed to remain simple and lightweight rather than relying on an unnecessarily complex stack.

---

## Philosophy

Kezio is built around a simple idea:

> Useful tools should be easy to find and easy to use.

The goal is not to build a complicated platform. Kezio exists to give useful projects a central home and make them easier for people to discover.

---

## Status

Kezio is an active project.

New tools and projects will be added over time.

---

## License

Unless otherwise stated, the individual tools linked through Kezio may have their own licenses and terms.

The Kezio website itself does not automatically grant permission to copy, redistribute, or reuse its code, content, branding, or assets.

Check the relevant project or tool before reusing its materials.