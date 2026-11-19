import type { ReactNode } from 'react';
import { ErpShell } from '../../../components/erp/erp-shell';
import '../../../features/erp/erp-theme.css';

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <ErpShell>{children}</ErpShell>;
}
