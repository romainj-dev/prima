import { describe, it, expect } from "@jest/globals"
import { AppError, ErrorCode, getErrorMessage, isErrorCode } from "@/lib/errors"

describe("getErrorMessage", () => {
  const t = (key: string) => `t:${key}`

  it("returns translated message for known AppError codes", () => {
    const message = getErrorMessage(t, new AppError(ErrorCode.INVALID_ROLE))
    expect(message).toBe(`t:${ErrorCode.INVALID_ROLE}`)
  })

  it("falls back when error is unknown", () => {
    const message = getErrorMessage(t, new Error("unexpected"))
    expect(message).toBe("t:description")
  })

  it("uses error.message when it matches a known code", () => {
    const message = getErrorMessage(t, new Error(ErrorCode.INVALID_ROLE))
    expect(message).toBe(`t:${ErrorCode.INVALID_ROLE}`)
  })

  it("uses object.code when it matches a known code", () => {
    const message = getErrorMessage(t, { code: ErrorCode.INVALID_ROLE })
    expect(message).toBe(`t:${ErrorCode.INVALID_ROLE}`)
  })
})

describe("isErrorCode", () => {
  it("returns true for valid codes and false otherwise", () => {
    expect(isErrorCode(ErrorCode.INVALID_ROLE)).toBe(true)
    expect(isErrorCode("not-a-code")).toBe(false)
    expect(isErrorCode(null)).toBe(false)
  })
})
