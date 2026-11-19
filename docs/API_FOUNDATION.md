# Builder-ERP API Foundation

## Runtime

- Framework: NestJS
- Runtime: Node.js 20.12+
- Language: TypeScript
- API version prefix: /api/v1

## Bootstrap

Entry point:
apps/api/src/main.ts

Root module:
apps/api/src/app.module.ts

Environment:
apps/api/src/config/environment.ts

## Health Endpoint

GET /api/v1/health

Example response:

{
  "status": "ok",
  "service": "builder-erp-api",
  "version": "1.0.0",
  "timestamp": "ISO-8601 timestamp"
}

The current health endpoint checks API availability only.
It does not claim that the database is connected.

## Global Validation

- Whitelist DTO properties.
- Reject unexpected properties.
- Transform validated inputs.
- Enable implicit type conversion.

## CORS

Allowed origins are read from CORS_ORIGIN.
Multiple origins can be separated by commas.

## Environment Loading

The API checks:
- Repository root .env
- API application .env

Existing process environment variables take precedence.

## Current Limitations

- Database connection is not implemented.
- Authentication is not implemented.
- JWT verification is not implemented.
- Health endpoint does not check PostgreSQL.
- Production secrets and deployment settings are not configured.
