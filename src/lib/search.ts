/**
 * Search input normalization utilities.
 *
 * These helpers sanitize user-provided search queries to prevent:
 * - Oversized input that could affect performance or logs
 * - Control characters that could cause display issues
 * - Potential XSS vectors if the value is ever rendered unsafely
 */

/** Maximum allowed length for a search query */
const MAX_QUERY_LENGTH = 200

/**
 * Normalizes a search query string for safe use in URLs and server-side filtering.
 *
 * - Trims leading/trailing whitespace
 * - Collapses multiple whitespace characters into single spaces
 * - Strips HTML-like angle brackets as defense-in-depth
 * - Enforces a maximum length
 *
 * @param input - Raw user input from search field or URL param
 * @returns Normalized, bounded query string (empty string if input is nullish)
 */
export function normalizeSearchQuery(input: string | null | undefined): string {
  if (input == null) {
    return ""
  }

  let normalized = input
    // Strip angle brackets to prevent HTML injection if ever rendered unsafely
    .replace(/[<>]/g, "")
    // Collapse multiple whitespace into single space
    .replace(/\s+/g, " ")
    // Trim leading/trailing whitespace
    .trim()

  // Enforce max length
  if (normalized.length > MAX_QUERY_LENGTH) {
    normalized = normalized.slice(0, MAX_QUERY_LENGTH).trim()
  }

  return normalized
}
