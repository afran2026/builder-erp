# BUILDER-ERP — FILE PATH DICTIONARY

## 1. Project Standards

- Product: Builder-ERP
- Business: Real Estate Development
- Deployment: Single-company ERP
- Frontend: Next.js + TypeScript
- Backend: NestJS + TypeScript
- Database: PostgreSQL
- ORM: Prisma
- Package manager: pnpm
- Currency: BDT
- Languages: Bangla (bn), English (en)
- Accounting: Accrual basis, double-entry
- Accounting scope: Project-wise
- API prefix: /api/v1

---

## 2. Root Directory Ownership

| Path | Responsibility |
|---|---|
| apps/ | Applications |
| apps/web/ | ERP web frontend |
| apps/api/ | Backend REST API |
| apps/worker/ | Background jobs |
| packages/ | Shared packages |
| database/ | Database schema and migrations |
| infra/ | Deployment and infrastructure |
| docs/ | Technical and business documentation |
| tests/ | Cross-application tests |
| scripts/ | Development and maintenance scripts |
| tools/ | Internal developer tools |

---

## 3. Frontend Ownership — apps/web/src

| Path | Responsibility |
|---|---|
| app/[locale]/ | Localized routes |
| app/[locale]/(auth)/ | Authentication pages |
| app/[locale]/(dashboard)/ | ERP dashboard pages |
| app/[locale]/(portals)/ | Customer, employee and investor portals |
| components/ui/ | Reusable UI primitives |
| components/layout/ | Application layouts |
| components/navigation/ | Sidebar, menu and navigation |
| components/data-table/ | Reusable data tables |
| components/forms/ | Shared form components |
| components/charts/ | Charts and visualizations |
| components/dialogs/ | Dialogs and modals |
| components/filters/ | Search and filtering |
| components/feedback/ | Alerts, loading and error states |
| components/shared/ | Shared business components |
| features/ | Feature-specific frontend code |
| hooks/ | Global React hooks |
| lib/ | API and utility integrations |
| providers/ | React context providers |
| stores/ | Global client state |
| types/ | Frontend global types |
| config/ | Frontend configuration |

### Frontend Feature Structure

Every feature owns its UI and client-side logic.

Example: apps/web/src/features/bookings/

- components/ — Booking UI
- hooks/ — Feature-specific hooks
- services/ — API calls
- schemas/ — Client-side validation
- types/ — TypeScript types
- utils/ — Feature utilities
- constants/ — Feature constants
- index.ts — Public exports (when needed)

### Frontend Feature Ownership

| Feature | Responsibility |
|---|---|
| auth | Login, logout, sessions |
| dashboard | Management overview |
| organization | Company profile |
| users | User accounts |
| roles | Role management |
| permissions | Permission interface |
| branches | Branch management |
| departments | Department management |
| projects | Project management |
| land-acquisition | Land purchase |
| joint-venture | Landowner partnerships |
| properties | Flat, plot, shop and unit inventory |
| crm | Lead relationship management |
| customers | Customer profiles |
| leads | Sales leads |
| sales | Sales operations |
| bookings | Property booking |
| installments | Installment schedules |
| payments | Payment collection |
| collections | Receivables collection |
| refunds | Refund processing |
| accounting | Accounting overview |
| chart-of-accounts | Account heads |
| journal-entries | Journal vouchers |
| general-ledger | Ledger |
| accounts-receivable | Customer receivables |
| accounts-payable | Vendor payables |
| cash-bank | Cash and bank |
| budgets | Financial budgets |
| construction | Construction operations |
| work-orders | Work orders |
| boq | Bill of quantities |
| progress | Work progress |
| engineering | Engineer workspace |
| procurement | Purchasing |
| purchase-orders | Purchase orders |
| inventory | Stock management |
| warehouses | Warehouse management |
| vendors | Supplier management |
| contractors | Contractor management |
| hr | Human resources |
| attendance | Attendance |
| leave | Leave management |
| payroll | Salary processing |
| investors | Investor management |
| approvals | Approval workflows |
| notifications | Notifications |
| documents | Document management |
| reports | Business reports |
| audit-logs | Activity history |
| settings | ERP settings |

---

## 4. Backend Ownership — apps/api/src

| Path | Responsibility |
|---|---|
| main.ts | Application bootstrap |
| app.module.ts | Root NestJS module |
| common/decorators/ | Custom decorators |
| common/guards/ | Authentication and authorization guards |
| common/interceptors/ | Request/response interceptors |
| common/filters/ | Exception filters |
| common/pipes/ | Validation and transformation |
| common/middleware/ | Request middleware |
| common/dto/ | Shared DTOs |
| common/exceptions/ | Custom exceptions |
| common/constants/ | Backend constants |
| common/utils/ | Backend utilities |
| config/ | Environment configuration |
| database/ | Database integration |
| modules/ | Business modules |
| integrations/ | External services |
| jobs/ | Scheduled jobs |
| events/ | Domain events |
| queues/ | Background queues |
| health/ | Health checks |

### Backend Module Structure

Example: apps/api/src/modules/bookings/

- bookings.module.ts
- controllers/
- services/
- repositories/
- dto/
- entities/
- policies/
- events/
- mappers/
- tests/

### Backend Layer Responsibilities

| Layer | Responsibility |
|---|---|
| Controller | HTTP requests and responses |
| Service | Business rules |
| Repository | Data access |
| DTO | Request validation |
| Entity | Domain model |
| Policy | Access and business policies |
| Event | Domain events |
| Mapper | Data transformation |
| Tests | Automated tests |

Controllers must not contain core business logic.

---

## 5. Database Ownership

### database/prisma/

| Path | Responsibility |
|---|---|
| schema.prisma | Prisma schema entry point |
| schemas/ | Domain schema files if multi-file Prisma is configured |
| migrations/ | Version-controlled migrations |
| seed/ | Initial and development data |
| fixtures/ | Test data |

### Database Domains

1. Organization and access control
2. Projects and land acquisition
3. Joint ventures
4. Properties and inventory
5. CRM and customers
6. Sales and bookings
7. Installments and collections
8. Payments and refunds
9. Chart of accounts
10. Journal entries and ledger
11. Cash and bank
12. Construction and BOQ
13. Procurement and vendors
14. Inventory and stock movements
15. HR, attendance and payroll
16. Investors and capital
17. Approvals and audit logs
18. Documents and notifications

Database rules:

- Use UUID primary keys.
- Use decimal/numeric values for money.
- Never use floating-point numbers for financial calculations.
- Store currency explicitly where required.
- Store timestamps consistently.
- Use database transactions for financial posting.
- Enforce debit = credit for posted journals.
- Use reversal entries instead of deleting posted journals.
- Enforce project-level access on the server.
- Use foreign keys and appropriate unique constraints.
- Preserve audit history for sensitive operations.

---

## 6. Shared Packages — packages/

| Package | Responsibility |
|---|---|
| shared-types | Shared TypeScript types |
| validation | Shared validation schemas |
| api-client | API client |
| constants | Shared constants |
| config | Shared configuration |
| permissions | Permission definitions |
| ui | Reusable UI library |
| database | Shared database utilities |
| utils | Shared utility functions |

---

## 7. Worker Ownership — apps/worker/

- processors/ — Job processors
- queues/ — Queue definitions
- jobs/ — Background job handlers
- schedulers/ — Scheduled tasks
- config/ — Worker configuration

Examples:
- Installment reminders
- Overdue notifications
- Scheduled reports
- Document processing
- Email and SMS notifications

Financial posting jobs must be idempotent and must not create duplicate journal entries.

---

## 8. Integration Ownership

apps/api/src/integrations/

- email/ — Email providers
- sms/ — SMS providers
- payment-gateways/ — Payment gateway integrations
- storage/ — Private file storage
- accounting-export/ — Accounting data exports

External payment confirmation must be verified before accounting posting.

---

## 9. Security and Access Rules

- Enforce authentication on protected endpoints.
- Enforce permission checks on the server.
- Enforce project-level data access.
- Validate every incoming DTO.
- Keep secrets in environment variables.
- Never expose private documents through public URLs.
- Record sensitive actions in audit logs.
- Use approval workflows for high-risk operations.
- Do not trust frontend-only permission checks.

---

## 10. Financial Architecture Rules

- Use accrual accounting.
- Use double-entry bookkeeping.
- Keep customer advances separate from recognized revenue.
- Keep investor capital separate from revenue.
- Keep loans separate from investor equity.
- Link financial transactions to projects where applicable.
- Record source-document references for journal entries.
- Do not post unverified payments.
- Do not directly edit posted journal entries.
- Use reversals and adjustments.
- Support bank reconciliation.
- Support financial-year closing.
- Apply an approved revenue-recognition policy.

---

## 11. Naming Conventions

| Item | Convention |
|---|---|
| Directories | kebab-case |
| React components | PascalCase |
| React hooks | useCamelCase |
| TypeScript variables | camelCase |
| Classes | PascalCase |
| Constants | UPPER_SNAKE_CASE |
| Database tables | snake_case |
| Database fields | snake_case |
| API endpoints | kebab-case |
| Environment variables | UPPER_SNAKE_CASE |

---

## 12. Development Rules

1. Implement one business module at a time.
2. Define database models before dependent APIs.
3. Define API contracts before frontend integration.
4. Add tests for critical business rules.
5. Never bypass authorization in services.
6. Use database transactions for multi-step financial operations.
7. Avoid duplicate business logic across modules.
8. Document important architectural decisions.
9. Preserve existing source files unless a change is intentional.
10. Update the project file tree after structural changes.

---

## 13. Important Implementation Note

This document defines intended ownership and architecture.
A listed directory or module does not mean its business functionality
has already been implemented.

Implementation status must be tracked separately.
