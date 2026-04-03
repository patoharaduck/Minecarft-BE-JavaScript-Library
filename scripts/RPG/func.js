/**
 * item number rand
 */

export function randItemNumber(min, max) {
    try {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    } catch (error) {
        console.error(error) }
}