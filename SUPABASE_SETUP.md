# Supabase Comments System Setup Guide

This guide will help you set up the Supabase database for the live comment system on your website.

## Important: Optional Feature

**The comment system is optional.** Your website will work perfectly fine without configuring Supabase:
- ✅ The site will build and deploy successfully
- ✅ All other features remain fully functional  
- ✅ The comment section simply won't appear on the homepage if Supabase is not configured

Only follow this guide if you want to enable the live comment system.

## Step 1: Create a Supabase Account

1. Go to [https://supabase.com](https://supabase.com)
2. Click "Start your project" and sign up (it's free!)
3. Create a new project
   - Enter a project name (e.g., "getgrowth-comments")
   - Create a strong database password (save this!)
   - Select a region close to your users
   - Click "Create new project"
4. Wait for the project to initialize (takes about 2 minutes)

## Step 2: Create the Comments Table

1. In your Supabase dashboard, click on "Table Editor" in the left sidebar
2. Click "Create a new table"
3. Configure the table:
   - **Name:** `comments`
   - **Description:** User comments and replies
   - Click "Save"

4. Add the following columns (click "+ Add column" for each):

   **Column 1:**
   - Name: `name`
   - Type: `text`
   - Default value: (leave empty)
   - ✅ Allow nullable

   **Column 2:**
   - Name: `text`
   - Type: `text`
   - Default value: (leave empty)
   - ❌ Not nullable

   **Column 3:**
   - Name: `reply_to`
   - Type: `uuid`
   - Default value: (leave empty)
   - ✅ Allow nullable

   **Column 4:**
   - Name: `likes`
   - Type: `int4`
   - Default value: `0`
   - ❌ Not nullable

5. The table will automatically include:
   - `id` (uuid, primary key)
   - `created_at` (timestamp)

## Step 3: Set Row Level Security (RLS) Policies

Supabase requires you to set up security policies to control data access. We'll set up policies that allow public read/write but restrict deletion to admin only.

### Quick Setup via SQL Editor

1. Go to "SQL Editor" in the sidebar
2. Click "New query"
3. Paste this SQL and click "Run":

```sql
-- Enable RLS
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;

-- Policy 1: Allow everyone to read comments
CREATE POLICY "Enable read access for all users"
ON comments FOR SELECT
USING (true);

-- Policy 2: Allow everyone to insert comments
CREATE POLICY "Enable insert access for all users"
ON comments FOR INSERT
WITH CHECK (true);

-- Policy 3: Allow everyone to update comments (for likes)
CREATE POLICY "Enable update access for all users"
ON comments FOR UPDATE
USING (true);

-- Policy 4: NO public delete policy - deletion requires service role key
-- This is intentionally omitted for security
```

**Important Security Note:**
- We do NOT create a delete policy for anonymous users
- Deletion is handled server-side using the Service Role Key
- This ensures only authenticated admin requests (with correct password) can delete comments
- Anonymous users cannot delete comments directly via the Supabase API

## Step 4: Get Your Supabase Credentials

1. Go to "Settings" (gear icon) in the sidebar
2. Click "API" under Project Settings
3. Copy the following values:

   - **Project URL** → Use this for `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public** key → Use this for `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **service_role** key → Use this for `SUPABASE_SERVICE_ROLE_KEY`

**⚠️ CRITICAL SECURITY WARNING:**
- The **service_role** key bypasses ALL Row Level Security policies
- NEVER expose this key to the client-side code
- NEVER commit this key to version control
- Only use it in server-side API routes (it's already configured correctly in this project)

## Step 5: Configure Environment Variables

1. In your Replit project, open the "Secrets" tool (lock icon in sidebar)
2. Add the following secrets:

   **Secret 1:**
   - Key: `NEXT_PUBLIC_SUPABASE_URL`
   - Value: (paste your Project URL from Supabase)

   **Secret 2:**
   - Key: `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - Value: (paste your anon public key from Supabase)

   **Secret 3:**
   - Key: `SUPABASE_SERVICE_ROLE_KEY`
   - Value: (paste your service_role key from Supabase)
   - ⚠️ **Keep this secret! Never expose it client-side!**

   **Secret 4:**
   - Key: `ADMIN_PASSWORD`
   - Value: (create a strong password for comment deletion)

## Step 6: Test the System

1. Restart your Next.js server (stop and start the workflow)
2. Go to your website homepage
3. Scroll down to the "What Our Visitors Say" section
4. Try posting a comment
5. Test the like button
6. Test replying to a comment
7. Test admin delete (click "Delete" and enter your admin password)

## Troubleshooting

### Comments not loading?
- Check that your Supabase URL and anon key are correct
- Verify the `comments` table exists in Supabase
- Check browser console for error messages

### Can't post comments?
- Make sure RLS policies are enabled (Step 3)
- Check that all required columns exist in the table

### Delete not working?
- Verify `ADMIN_PASSWORD` is set in environment variables
- Make sure you're entering the correct password

## Security Notes

✅ **Security Implementation:**

1. **Secure Deletion:** Comments can only be deleted via the server-side API route using the Service Role Key. The admin password is checked server-side before any deletion occurs.

2. **Row Level Security:** RLS policies prevent direct deletion via the Supabase client API. Only read, insert, and update operations are allowed for anonymous users.

3. **Service Role Key:** This key bypasses RLS and should NEVER be exposed to the client. It's only used server-side in the delete API route.

⚠️ **Additional Recommendations:**

1. **Rate Limiting:** Consider adding rate limiting to prevent spam. You can use Supabase Edge Functions or a third-party service like Upstash.

2. **Content Moderation:** Implement content moderation to prevent inappropriate comments (see Advanced section below).

3. **Stronger Authentication:** For production with high traffic, consider implementing OAuth or email/password authentication instead of a simple admin password.

## Advanced: Adding Moderation

To add a moderation flag to comments:

```sql
-- Add moderation column
ALTER TABLE comments ADD COLUMN is_approved boolean DEFAULT true;

-- Update read policy to only show approved comments
DROP POLICY "Enable read access for all users" ON comments;
CREATE POLICY "Enable read access for approved comments"
ON comments FOR SELECT
USING (is_approved = true);
```

## Support

If you encounter issues:
1. Check the Supabase documentation: https://supabase.com/docs
2. Verify all environment variables are set correctly
3. Check the browser console and server logs for error messages
4. Ensure your Supabase project is active and not paused

---

**Your comment system is now ready! 🎉**
