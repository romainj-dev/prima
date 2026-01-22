## Important

This app is missing a few things I did not have time to handle:
- Proper documentation strategy.
- Graceful degradation (at least locally fail the list when a wrong role is sent).
- [Feature] Open modal to view user details.

## Prima

A small Next.js app for browsing and filtering users.

## Architecture

- App Router with server-side data fetching.
- A simple BFF-style API route (`/api/users`) handles filtering and error mapping.
- Data is mocked in `src/data/users.ts` and served via `src/lib/users.ts` with a fake delay.

## Commands

Install dependencies:

```bash
pnpm install
```

Run the app:

```bash
pnpm dev
```

Build and start:

```bash
pnpm build
pnpm start
```

## Testing

Unit tests:

```bash
pnpm test
```

E2E tests (start the app in another terminal):

```bash
pnpm dev
pnpm cypress
```

Headless E2E:

```bash
pnpm cypress:run
```
