# Architecture Decision Records

## ADR-001: Monorepo
Decision: Keep web, API, worker and shared packages in one pnpm workspace.
Reason: Shared contracts and coordinated releases.

## ADR-002: PostgreSQL and Prisma
Decision: Use PostgreSQL with Prisma ORM.
Reason: Relational integrity and transactional financial workflows.

## ADR-003: Central Accounting Engine
Decision: All financial modules integrate with one accounting engine.
Reason: Consistent double-entry posting and reporting.

## ADR-004: Project-wise Accounting
Decision: Financial records carry project dimensions where applicable.
Reason: Project-level profitability and cost control.

## ADR-005: Immutable Posted Journals
Decision: Posted journals are corrected through reversal and adjustment.
Reason: Auditability and accounting integrity.

## ADR-006: Server-side Authorization
Decision: Enforce roles, permissions and project access in the API.
Reason: Frontend restrictions alone are not security.

## ADR-007: Bilingual Interface
Decision: Support Bangla and English using locale-based routes.
Reason: Staff usability in Bangladesh.

## ADR-008: BDT Financial Precision
Decision: Use database decimal types for financial values.
Reason: Avoid floating-point rounding errors.
