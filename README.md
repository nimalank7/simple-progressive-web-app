# Progressive Web App
From https://www.youtube.com/watch?v=WbbAPfDVqfY

A simple progressive web app (PWA) which displays "Hello World" with a service worker that intercepts requests and caches files.

## How to run

```
npm run start
```

Application is available at `localhost:3000`

## Updating the service worker

Refreshing the page won't reinstall the service worker. However a change to `sw.js` requires the service worker be reinstalled. Navigate to the `Application` tab in the Chrome Dev Tools and select `skipWaiting`

### Installing the PWA natively

Select the install icon in the URL bar.

### Verifying the app works offline

Navigate to the `Network` tab and set it to `Offline` and refresh the page. `index.js` isn't cached so it has to go to the network. But both `index.html` and `master.css` were cached.

#### Files
- HTML file returned is `index.html`
- JavaScript which registers the service worker is `index.js`
- Service worker is `sw.js`
- Manifest file is `manifest.json`