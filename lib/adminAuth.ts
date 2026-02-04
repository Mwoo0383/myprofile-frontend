const ADMIN_KEY = "isAdmin";

export function setAdmin() {
  localStorage.setItem(ADMIN_KEY, "true");
}

export function clearAdmin() {
  localStorage.removeItem(ADMIN_KEY);
}

export function isAdmin(): boolean {
  return localStorage.getItem(ADMIN_KEY) === "true";
}
