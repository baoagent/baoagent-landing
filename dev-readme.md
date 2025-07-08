
## Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Run the development server:**
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment (Vercel)

1. Go to [vercel.com](https://vercel.com/) and sign up.
2. Import your project from GitHub (or use the Vercel CLI).
3. Vercel will auto-detect Next.js and deploy your site.
4. After deployment, you'll get a live URL (e.g., `https://baoagent.vercel.app`).

## Custom Domain Setup (Porkbun)

1. In Vercel dashboard, go to your project → Settings → Domains → Add, and enter `baoagent.com`.
2. Vercel will show DNS records to add at Porkbun (A records and CNAME).
3. Log in to Porkbun, go to your domain's DNS settings, and add the records Vercel provides.
4. Remove any old A/AAAA records that don't point to Vercel.
5. Wait for DNS to propagate (usually a few minutes to a few hours).
6. Your site will be live at https://baoagent.com

## Waitlist Form
- The waitlist form uses [Formspree](https://formspree.io/) for email collection.
- To use your own Formspree endpoint, sign up at Formspree and replace the endpoint in `src/app/page.tsx`.
