```javascript
// pages/about.js
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]';

export default async function About() {
  const session = await unstable_getServerSession(authOptions);

  // Check if session exists AND session.user exists
  if (!session || !session.user) {
    return <div>Please sign in.</div>;
  }

  return (
    <div>
      <h1>About Page</h1>
      <p>Welcome, {session.user.name}!</p>
    </div>
  );
}
```