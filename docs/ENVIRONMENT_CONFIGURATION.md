# Builder-ERP Environment Configuration

## Environment Files

| File | Purpose |
|---|---|
| .env.example | Root configuration reference |
| apps/api/.env.example | API configuration reference |
| apps/web/.env.example | Web configuration reference |

Actual secret files must never be committed to Git.

## Required Environment Variables

### API

- NODE_ENV
- PORT
- API_PREFIX
- DATABASE_URL
- JWT_ACCESS_SECRET
- JWT_REFRESH_SECRET
- JWT_ACCESS_EXPIRES_IN
- JWT_REFRESH_EXPIRES_IN
- CORS_ORIGIN
- DEFAULT_LOCALE
- DEFAULT_CURRENCY

### Web

- NODE_ENV
- PORT
- NEXT_PUBLIC_API_URL
- NEXT_PUBLIC_DEFAULT_LOCALE
- NEXT_PUBLIC_SUPPORTED_LOCALES

### Database

DATABASE_URL must point to a PostgreSQL database.

Example format:

postgresql://USERNAME:PASSWORD@HOST:5432/DATABASE_NAME

Do not commit real database credentials.

## Security Rules

1. Never commit .env files.
2. Keep .env.example free of real secrets.
3. Generate separate strong JWT secrets.
4. Do not expose secrets using NEXT_PUBLIC_ variables.
5. Restrict production CORS origins.
6. Use HTTPS in production.
7. Restrict database network access.
8. Rotate compromised credentials immediately.

## Financial Configuration

- Default currency: BDT
- Financial values: PostgreSQL Decimal/Numeric
- Accounting basis: Accrual
- Accounting method: Double-entry
- Accounting scope: Project-wise

## Deployment Notes

Development, staging and production must use separate credentials
and separate database environments.

The actual variable names must remain consistent with the
application's configuration validation and Prisma schema.
