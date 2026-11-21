# Builder-Erp Design System

## Purpose

The centralized visual and interaction foundation for Builder-Erp.
All frontend modules must reuse these tokens and UI primitives.

## Technology

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS 4
- CSS custom properties
- No additional UI dependency required

## Source of truth

| Concern | File |
|---|---|
| Design tokens | `apps/web/src/features/erp/design-system/tokens.css` |
| Shared UI styles | `apps/web/src/features/erp/design-system/ui.css` |
| Global style entry | `apps/web/src/app/globals.css` |
| UI primitives | `apps/web/src/components/ui/` |
| ERP shell | `apps/web/src/components/erp/erp-shell.tsx` |
| ERP theme | `apps/web/src/features/erp/erp-theme.css` |

## Design principles

1. Consistent, information-dense business interfaces.
2. Clear hierarchy for operational data and financial figures.
3. Desktop-first workspace with tablet and mobile adaptations.
4. Bangla and English labels must remain readable.
5. Never fabricate business records or financial metrics.
6. Every data-driven screen must support loading, error, empty,
   permission-denied and populated states.
7. Destructive actions require explicit confirmation.
8. Keyboard navigation and visible focus states are mandatory.
9. Respect reduced-motion preferences.
10. Keep all business data organization-scoped through the API.

## Tokens

Brand blue: `--erp-primary`.

Semantic colors:
- Success: `--erp-success`
- Warning: `--erp-warning`
- Danger: `--erp-danger`
- Information: `--erp-info`

Neutral surfaces, typography, spacing, radii, shadows, layout
dimensions and motion values are defined in `tokens.css`.

Dark theme tokens are available through `[data-theme="dark"]`.
The theme must only be activated by an explicit application theme
setting; system preference must not silently change the ERP theme.

## Shared components

Import from:

`apps/web/src/components/ui`

Available primitives:
- Button
- Badge
- Card, CardHeader, CardContent, CardFooter
- Field, Input, Select, Textarea
- EmptyState
- PageHeader

## Component ownership

- `components/ui`: generic, business-agnostic UI primitives.
- `components/erp`: ERP shell and cross-module business UI.
- `features/erp`: ERP-specific styling and design-system tokens.
- `features/<module>`: module-specific workflows and presentation.
- `app/[locale]`: routing and page composition.

## Localization

All user-facing text must support Bangla and English.
Use the locale selected by the application route.
Do not hardcode a language-specific layout assumption.

## Currency and dates

- Currency: BDT
- Timezone: Asia/Dhaka
- Numeric and date formatting must use locale-aware formatters.
- Do not store formatted display values as business data.

## Responsive behavior

- Mobile: up to 640px
- Tablet: 641px–1024px
- Desktop: above 1024px

Use responsive grids, horizontal table overflow where necessary,
and touch-friendly controls.

## Adoption rule

New module screens must use shared tokens and primitives.
Existing ERP screens will be migrated module-by-module without
rewriting unrelated business logic or removing existing routes.
