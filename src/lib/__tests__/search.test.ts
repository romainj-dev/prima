import { describe, it, expect } from "@jest/globals"
import { normalizeSearchQuery } from "@/lib/search"

describe("normalizeSearchQuery", () => {
  it("trims, strips brackets, and collapses whitespace", () => {
    const result = normalizeSearchQuery("  <Hello>   world  ")
    expect(result).toBe("Hello world")
  })

  it("enforces the max query length", () => {
    const result = normalizeSearchQuery("a".repeat(205))
    expect(result.length).toBe(200)
  })

  it("returns empty string for nullish input", () => {
    expect(normalizeSearchQuery(null)).toBe("")
    expect(normalizeSearchQuery(undefined)).toBe("")
  })

  it("collapses tabs and newlines into single spaces", () => {
    const result = normalizeSearchQuery("hello\t\tworld\n\nnext")
    expect(result).toBe("hello world next")
  })

  it("removes angle brackets even when they are the only characters", () => {
    const result = normalizeSearchQuery("<<<>>>")
    expect(result).toBe("")
  })

  it("trims after slicing over max length", () => {
    const result = normalizeSearchQuery(`  ${"a".repeat(201)}  `)
    expect(result.length).toBe(200)
    expect(result).toBe("a".repeat(200))
  })
})
