# reCAPTCHA v3 Setup Guide

## ✓ What's Been Done
Your contact form now includes Google reCAPTCHA v3 spam protection and elegant toast notifications (bottom-right, styled with #015482 and #17D3CF).

## → YOUR ACTION ITEMS (In Order)

### Step 1: Create Google reCAPTCHA v3 Key (Free)

1. Go to: https://www.google.com/recaptcha/admin
2. Sign in with your Google account (create one if needed)
3. Click **Create (+)** button
4. Fill out the form:
   - **Label**: "TaxArc Global"
   - **reCAPTCHA type**: Select **reCAPTCHA v3**
   - **Domains**: Add your domain(s):
     - `localhost` (for local development)
     - `yourdomain.com` (your Vercel domain)
   - Accept the reCAPTCHA Terms of Service
   - Click **Submit**

5. You'll see your keys:
   - **Site Key** (public, safe in env vars)
   - **Secret Key** (keep private, for backend only)

### Step 2: Setup Local Development

1. Open `.env.local` in your project root
2. Add this line:
   ```
   VITE_RECAPTCHA_SITE_KEY=your_site_key_here
   ```
   Replace `your_site_key_here` with the Site Key from Step 1

3. Make sure you also have your Web3Forms key:
   ```
   VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_key_here
   ```

4. Save the file
5. Restart dev server: `Ctrl+C` then `npm run dev`

### Step 3: Test Locally

1. Go to http://localhost:5173/contact
2. Fill out the form
3. Click "Send Message"
4. You should see a smooth toast notification at **bottom-right**:
   - Success: Green + white text (your colors)
   - Error: Red + white text (your colors)

**Important**: reCAPTCHA v3 doesn't show a visible UI - it works silently in the background scoring requests 0-1.0 (0=bot, 1=human). Web3Forms automatically rejects suspected spam.

### Step 4: Deploy to Vercel

1. Go to https://vercel.com
2. Open your TaxArc project → **Settings** → **Environment Variables**
3. Add two variables:
   - Name: `VITE_WEB3FORMS_ACCESS_KEY` → Value: (your Web3Forms key)
   - Name: `VITE_RECAPTCHA_SITE_KEY` → Value: (your Site Key from Step 1)
4. Set both to: **Production, Preview, Development**
5. Click **Save**
6. Go to **Deployments** → Click **Redeploy** on latest deployment
7. Wait for deployment to complete

### Step 5: Test on Live Domain

1. Go to https://yourdomain.com/contact
2. Submit the form
3. Verify toast appears bottom-right with your colors
4. Check email for submission

---

## What Changed

### Contact Form Now Includes:

✓ **Toast Notifications**
- Position: Bottom-right
- Colors: White text on #015482 background
- Border: #17D3CF
- Auto-dismiss after 4 seconds

✓ **reCAPTCHA v3 Protection**
- Silent spam detection (no user prompt)
- Prevents automated bot submissions
- Score-based filtering through Web3Forms

✓ **Enhanced User Feedback**
- Success toast: "Thank you! We'll get back to you soon"
- Error toast: Detailed error messages
- Loading state on submit button

### New Dependencies Installed:
- `sonner` - Toast notification library
- `react-google-recaptcha-v3` - reCAPTCHA integration

---

## Security Best Practices

✓ Site Key stored in `.env.local` (safe - public key)
✓ Secret Key never exposed (used server-side by Web3Forms only)
✓ Both env vars excluded from git via `.gitignore`
✓ reCAPTCHA works on registered domains only

---

## Toast Customization

If you want to change toast colors/styling, edit the Toaster component in `Contact.jsx`:

```jsx
<Toaster
  position="bottom-right"  // Change: top-left, top-right, bottom-left, etc.
  theme="dark"             // Or: "light"
  toastOptions={{
    duration: 4000,        // Milliseconds before auto-dismiss
    style: {
      backgroundColor: "#015482",
      color: "white",
      border: "1px solid #17D3CF",
      borderRadius: "8px",
    },
  }}
/>
```

---

## Troubleshooting

### Issue: "reCAPTCHA not ready"
- Ensure `.env.local` has `VITE_RECAPTCHA_SITE_KEY` set
- Restart dev server
- Check browser console (F12) for errors

### Issue: Toast doesn't appear
- Verify Sonner is installed: `npm list sonner`
- Check that Toaster component is in the return JSX
- Inspect browser console for JavaScript errors

### Issue: reCAPTCHA shows error on live domain
- Go back to Google reCAPTCHA admin console
- Verify your domain is registered in the site list
- Test from incognito window to rule out local cache

### Issue: "Access Denied" on form submit
- Check Vercel env vars are set correctly
- Verify Web3Forms access key is correct
- Go to Web3Forms dashboard to check submission logs

---

## Support

- Google reCAPTCHA Help: https://developers.google.com/recaptcha/docs/v3
- Sonner Toast Docs: https://sonner.emilkowal.ski/
- Web3Forms Help: https://web3forms.com/docs

---

## Complete Setup Checklist

- [ ] Create Google reCAPTCHA v3 account
- [ ] Copy Site Key from Google
- [ ] Add VITE_RECAPTCHA_SITE_KEY to `.env.local`
- [ ] Verify Web3Forms key is in `.env.local`
- [ ] Restart dev server
- [ ] Test locally - verify toast appears
- [ ] Add both env vars to Vercel
- [ ] Redeploy on Vercel
- [ ] Test on live domain
- [ ] Monitor Google reCAPTCHA console for score statistics (optional)

**Total Setup Time: ~10 minutes**

Your contact form is now production-ready with spam protection and elegant toast feedback!
