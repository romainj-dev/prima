export enum ErrorCode {
  INVALID_ROLE = "invalid_role",
}

export class AppError extends Error {
  readonly code: ErrorCode

  constructor(code: ErrorCode, message?: string) {
    super(message ?? code)
    this.code = code
    this.name = "AppError"
  }
}

export function isErrorCode(value: unknown): value is ErrorCode {
  return typeof value === "string" && Object.values(ErrorCode).includes(value as ErrorCode)
}

export function getErrorCode(error: unknown): ErrorCode | null {
  if (error instanceof AppError) {
    return error.code
  }

  if (error && typeof error === "object" && "code" in error) {
    const code = (error as { code?: unknown }).code
    if (isErrorCode(code)) {
      return code
    }
  }

  if (error instanceof Error && isErrorCode(error.message)) {
    return error.message
  }

  return null
}

type Translator = (key: string) => string

export function getErrorMessage(
  t: Translator,
  error: unknown,
  fallbackKey = "description",
): string {
  const code = getErrorCode(error)
  return code ? t(code) : t(fallbackKey)
}
