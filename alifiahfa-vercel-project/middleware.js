// middleware.js
export function middleware(request) {
  // Bypass semua request tanpa blokir
  return new Response(null, { status: 200 });
}
