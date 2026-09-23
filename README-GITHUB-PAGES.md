# JC2B 2026 — multi-page GitHub Pages site

## Structure
- `index.html` — homepage
- `about.html` — About
- `programme.html` — Programme + important dates
- `abstracts.html` — contribution / abstract information + future abstract book area
- `practical.html` — venue and access
- `contact.html` — contact
- `registration.html` — single registration + optional abstract submission entry point

## Add the registration form
Open:

`js/site-config.js`

Then set:

```js
registrationFormUrl: "https://forms.gle/YOUR_FORM"
```

Every public registration button will use that URL automatically.

### Optional embedded form
If your form platform provides an iframe/embed URL, also set:

```js
registrationEmbedUrl: "YOUR_EMBED_URL"
```

The form will then appear directly inside `registration.html`.

## Update date / venue / email
The same `js/site-config.js` file contains:
- `conferenceDate`
- `conferenceVenue`
- `contactEmail`

## GitHub Pages
1. Put these files at the root of your repository.
2. Push to `main`.
3. GitHub → repository → **Settings** → **Pages**.
4. Source: **Deploy from a branch**.
5. Branch: `main`, folder: `/ (root)`.
6. Save.

GitHub will publish the site at either:
- `https://USERNAME.github.io/REPOSITORY/`
- or `https://ORGANISATION.github.io/REPOSITORY/`
