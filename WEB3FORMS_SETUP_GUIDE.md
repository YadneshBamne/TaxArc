# Web3Forms Contact Form Setup Guide

## Overview
Your Contact page is now integrated with Web3Forms to send emails to harshika@taxarcglobal.com. Follow these steps to go live.

---

## STEP 1: Create Web3Forms Account (Free)

1. Go to https://web3forms.com
2. Click **Sign Up** (top right)
3. Enter your email (use harshika@taxarcglobal.com or your preferred email)
4. Verify email
5. Log in to dashboard

**Expected time**: 2-3 minutes

---

## STEP 2: Get Your Access Key

1. In Web3Forms dashboard, go to **API Keys** or **Settings**
2. You'll see your **Access Key** (looks like: `a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5...`)
3. **Copy this key** - you'll need it next

---

## STEP 3: Set Up Local Development (.env.local)

1. In your project root (`c:\react-vite-projects\TaxArc\`), create a file named `.env.local`
   
2. Add this line:
   ```
   VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
   ```

3. Replace `your_access_key_here` with the key from Step 2

4. Save the file

**Note**: This file is already in `.gitignore`, so it won't be committed

5. Restart your dev server:
   - Stop current dev server (Ctrl+C in terminal)
   - Run `npm run dev` to restart

---

## STEP 4: Test Locally

1. Go to http://localhost:5173/contact (or your local dev URL)
2. Fill out the contact form with test data
3. Select some services
4. Click "Send Message"
5. You should see a green success message: "✓ Thank you! We'll get back to you soon"
6. **Check your email inbox** (harshika@taxarcglobal.com) for the message

**Expected email format:**
```
Subject: New Inquiry from Contact Form | TaxArc Global

Hi Harshika,

You've received a new inquiry through the website.

Here are the details:

Name: John Doe
Email: john@example.com
Message: I would like to know more about your services.

Services Interested In:
Tax Preparation, Payroll
```

---

## STEP 5: Deploy to Vercel

1. **Go to Vercel Dashboard**: https://vercel.com
2. **Select your TaxArc project**
3. Go to **Settings** → **Environment Variables**
4. Click **Add New**
5. Fill in:
   - **Name**: `VITE_WEB3FORMS_ACCESS_KEY`
   - **Value**: (paste your access key from Step 2)
   - **Environment**: Select all (Production, Preview, Development)
6. Click **Save**
7. **Redeploy your project**:
   - Go to **Deployments**
   - Click the three dots (•••) on the latest deployment
   - Click **Redeploy**
   - Wait for deployment to complete (usually 1-2 minutes)

---

## STEP 6: Test on Live Domain

1. Go to your live domain: https://yourdomain.com/contact
2. Fill out the form again
3. Click "Send Message"
4. You should see the green success message
5. Check your email for the submission

---

## Troubleshooting

### Issue: "Something went wrong. Please try again."

**Solution:**
- Check that `.env.local` file exists with the correct access key
- Make sure you restarted the dev server after creating `.env.local`
- Verify the Vercel environment variable is set correctly
- Check browser console (F12) for any error messages

### Issue: Email not arriving

**Solution:**
- Check spam/junk folder in your email
- Verify the recipient email is correct: harshika@taxarcglobal.com
- Go to Web3Forms dashboard to see if submissions are being logged
- Verify Web3Forms account is active and not suspended

### Issue: Form field not appearing in email

**Solution:**
- This is expected - Web3Forms captures:
  - Full Name
  - Email Address
  - Message
  - Services Interested In
- All fields should appear in the formatted email

---

## Security Notes

✓ Access key is stored in environment variables only (never in source code)  
✓ Free tier supports ~50 submissions/month (you have capacity)  
✓ No captcha needed for low-volume submissions  
✓ Web3Forms handles spam filtering automatically  

---

## Support

- Web3Forms Help: https://web3forms.com/docs
- Common Issues: https://web3forms.com/faq

You're all set! Your contact form is now live and functional.
