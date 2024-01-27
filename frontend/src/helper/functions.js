export function sortByDate(a, b) {
   return new Date(b.createdAt) - new Date(a.createdAt)
}

export function delay(ms) {
   return new Promise((resolve) => setTimeout(resolve, ms))
}
