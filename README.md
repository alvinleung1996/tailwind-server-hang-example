# Tailwind Server Hang Example

1. Use Node 24.8.0.
2. Run `npm install`.
3. Open VSCode 1.104.1.
4. Switch to a new empty VSCode profile (to ensure using default settings for VSCode).
5. Install Tailwind CSS IntelliSense 0.14.26. 
6. Open `index.html`.
7. Hover `flex`, it shows popup.
8. Hover `rounded`, it shows "Loading...".
9. Open VSCode process explorer, it shows `tailwindServer.js` running 100% of the CPU.
