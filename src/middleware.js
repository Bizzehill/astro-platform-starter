// src/middleware.js
export function onRequest(context) {
  const { request, redirect } = context;
  
  // Get the URL from the request
  const url = new URL(request.url);
  
  // If this is the login page, don't check auth
  if (url.pathname === '/login' || url.pathname.includes('/api/')) {
    return; // Skip middleware and continue to the route handler
  }

  // Check for auth cookie
  const cookies = request.headers.get('cookie') || '';
  const isAuthenticated = cookies.includes('authenticated=true');
  const emailCookie = cookies.split(';').find(c => c.trim().startsWith('userEmail='));
  const email = emailCookie ? decodeURIComponent(emailCookie.split('=')[1]) : '';
  
  // If not authenticated or not a steemer.com email, redirect to login
  if (!isAuthenticated || !email.endsWith('@steemer.com')) {
    return redirect('/login');
  }
  
  // Continue to the route handler if authenticated
  return;
}
