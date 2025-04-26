import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

export const isTokenExpired = () => {
  const token = Cookies.get("authToken");
  if (!token) return true;

  try {
    const decoded = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    return decoded.exp < currentTime;
  } catch (e) {
    return true;
  }
};
