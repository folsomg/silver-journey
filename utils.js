// Utility functions
export function formatDate(date) { // updated
    return date.toISOString().split('T')[0];
}
 // updated
export function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
