import { jwtDecode } from "jwt-decode";
export function isTokenExpired(token) {
  if (!token) return true;

  try {
    const decoded = jwtDecode(token);
    const now = Math.floor(Date.now() / 1000);
    return decoded.exp < now;
  } catch (err) {
    console.error("Invalid token:", err);
    return true;
  }
}
