# Robotic Adventures and Simulated Thrills — website

Next.js App Router site for Robotic Adventures and Simulated Thrills (8ft ride-on robots, Valrico / Brandon FL).
Built by the studio; design brief and sources live in the studio repo under
`clients/robotic-adventures-and-simulated-thrills/`.

- All business facts: `lib/site.ts` (prices, events, phones, FAQ). Edit there.
- Contact form: mailto fallback. Set `formspreeId` in `lib/site.ts` to switch to Formspree.
- Video slots: drop `public/videos/<robot-red|robot-yellow|robot-white>/walkthrough.mp4`
  (+ `poster-walkthrough.jpg`) and push. The section appears on /robots automatically.
- Canonical URL: `NEXT_PUBLIC_SITE_URL` (defaults to the vercel.app domain).

```bash
npm install
npm run dev
```
