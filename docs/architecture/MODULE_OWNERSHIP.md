# Builder-ERP Module Ownership

| Business Domain | Frontend Owner | Backend Owner |
|---|---|---|
| Authentication | features/auth | modules/auth |
| Users and roles | features/users, roles | modules/users, roles |
| Permissions | features/permissions | modules/permissions |
| Organization | features/organization | modules/organization |
| Projects | features/projects | modules/projects |
| Land purchase | features/land-acquisition | modules/land-acquisition |
| Joint venture | features/joint-venture | modules/joint-venture |
| Properties | features/properties | modules/properties |
| CRM | features/crm, leads | modules/crm, leads |
| Customers | features/customers | modules/customers |
| Sales | features/sales | modules/sales |
| Bookings | features/bookings | modules/bookings |
| Installments | features/installments | modules/installments |
| Payments | features/payments | modules/payments |
| Collections | features/collections | modules/collections |
| Refunds | features/refunds | modules/refunds |
| Accounting | features/accounting | modules/accounting |
| Chart of accounts | features/chart-of-accounts | modules/chart-of-accounts |
| Journal entries | features/journal-entries | modules/journal-entries |
| General ledger | features/general-ledger | modules/general-ledger |
| Receivables | features/accounts-receivable | modules/accounts-receivable |
| Payables | features/accounts-payable | modules/accounts-payable |
| Cash and bank | features/cash-bank | modules/cash-bank |
| Budgets | features/budgets | modules/budgets |
| Construction | features/construction | modules/construction |
| BOQ | features/boq | modules/boq |
| Work orders | features/work-orders | modules/work-orders |
| Progress | features/progress | modules/progress-reports |
| Engineering | features/engineering | modules/engineering |
| Procurement | features/procurement | modules/procurement |
| Purchase orders | features/purchase-orders | modules/purchase-orders |
| Inventory | features/inventory | modules/inventory |
| Warehouses | features/warehouses | modules/warehouses |
| Vendors | features/vendors | modules/vendors |
| Contractors | features/contractors | modules/contractors |
| HR | features/hr | modules/hr |
| Attendance | features/attendance | modules/attendance |
| Leave | features/leave | modules/leave-management |
| Payroll | features/payroll | modules/payroll |
| Investors | features/investors | modules/investors |
| Approvals | features/approvals | modules/approvals |
| Notifications | features/notifications | modules/notifications |
| Documents | features/documents | modules/documents |
| Reports | features/reports | modules/reports |
| Audit logs | features/audit-logs | modules/audit-logs |
| Settings | features/settings | modules/settings |

## Ownership Rules

- Frontend owns presentation and client-side interaction.
- Backend owns business rules and authorization.
- Database owns persistence and integrity constraints.
- Accounting engine owns financial posting.
- Worker owns asynchronous and scheduled execution.
- Shared packages own reusable contracts and utilities.
