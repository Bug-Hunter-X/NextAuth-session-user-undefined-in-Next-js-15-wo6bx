# NextAuth session.user undefined in Next.js 15

This repository demonstrates a common error encountered when using NextAuth.js with Next.js 15: a `TypeError: Cannot read properties of undefined (reading 'user')` error on a protected route if the session object is not properly handled.  The issue arises when accessing `session.user` before verifying that the session exists and contains user data. 

## Bug Reproduction

1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Navigate to `/about`.  If you're not logged in, you will see the error.  If you are logged in but the user object within the session is incomplete or missing, you may still run into this error.

## Solution

The solution involves adding a check to ensure the session and `session.user` are defined before attempting to access their properties.  This prevents the error by handling cases where the user is not authenticated or the session data is incomplete.  See `aboutSolution.js` for the corrected code.