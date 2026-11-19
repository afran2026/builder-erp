'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

const navigation = [
  {
    section: 'WORKSPACE',
    items: [
      { label: 'Dashboard', bn: 'ড্যাশবোর্ড', icon: '▦', path: 'dashboard' },
      { label: 'Projects', bn: 'প্রজেক্ট', icon: '▤', path: 'projects' },
      { label: 'Land Acquisition', bn: 'জমি অধিগ্রহণ', icon: '⌂', path: 'land' },
      { label: 'Properties', bn: 'প্রপার্টিজ', icon: '▥', path: 'properties' },
    ],
  },
  {
    section: 'BUSINESS',
    items: [
      { label: 'CRM & Customers', bn: 'কাস্টমার', icon: '♙', path: 'crm' },
      { label: 'Sales & Bookings', bn: 'বিক্রয় ও বুকিং', icon: '▣', path: 'sales' },
      { label: 'Accounting', bn: 'হিসাবরক্ষণ', icon: '৳', path: 'accounting' },
      { label: 'Procurement', bn: 'ক্রয়', icon: '⇄', path: 'procurement' },
      { label: 'Inventory', bn: 'ইনভেন্টরি', icon: '▧', path: 'inventory' },
    ],
  },
  {
    section: 'MANAGEMENT',
    items: [
      { label: 'Construction', bn: 'নির্মাণ', icon: '⌁', path: 'construction' },
      { label: 'HR & Payroll', bn: 'এইচআর', icon: '♧', path: 'hr' },
      { label: 'Reports', bn: 'রিপোর্ট', icon: '▥', path: 'reports' },
      { label: 'Settings', bn: 'সেটিংস', icon: '⚙', path: 'settings' },
    ],
  },
];

export function ErpShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const locale = pathname.split('/').filter(Boolean)[0] || 'en';
  const currentPath = pathname.split('/').filter(Boolean).at(-1);

  return (
    <div className="erp-shell">
      <aside className="erp-sidebar">
        <Link href={`/${locale}/dashboard`} className="erp-brand">
          <span className="erp-brand-mark">B</span>
          <span className="erp-brand-copy">
            <strong>BUILDER<span>ERP</span></strong>
            <small>REAL ESTATE MANAGEMENT</small>
          </span>
        </Link>

        <div className="erp-company">
          <div className="erp-company-avatar">BD</div>
          <div className="erp-company-info">
            <strong>Builder Developments</strong>
            <small>Head Office · Bangladesh</small>
          </div>
          <span className="erp-company-chevron">⌄</span>
        </div>

        <nav className="erp-navigation">
          {navigation.map((group) => (
            <div className="erp-nav-group" key={group.section}>
              <p className="erp-nav-heading">{group.section}</p>
              {group.items.map((item) => {
                const active = currentPath === item.path;
                return (
                  <Link
                    key={item.path}
                    href={`/${locale}/${item.path}`}
                    className={`erp-nav-link ${active ? 'active' : ''}`}
                  >
                    <span className="erp-nav-icon">{item.icon}</span>
                    <span className="erp-nav-label">
                      <span>{item.label}</span>
                      <small>{item.bn}</small>
                    </span>
                    {active && <span className="erp-nav-indicator" />}
                  </Link>
                );
              })}
            </div>
          ))}
        </nav>

        <div className="erp-sidebar-bottom">
          <div className="erp-help-card">
            <span className="erp-help-icon">?</span>
            <strong>Need assistance?</strong>
            <p>Contact your ERP administrator for support.</p>
            <a href="mailto:support@example.com">Get support ↗</a>
          </div>
          <div className="erp-user">
            <div className="erp-user-avatar">AD</div>
            <div className="erp-user-info">
              <strong>Admin User</strong>
              <small>Super Administrator</small>
            </div>
            <button className="erp-more-button" aria-label="User menu">•••</button>
          </div>
        </div>
      </aside>

      <main className="erp-main">
        <header className="erp-topbar">
          <div className="erp-breadcrumb">
            <span>Builder ERP</span>
            <span>/</span>
            <strong>{currentPath === 'projects' ? 'Projects' : 'Dashboard'}</strong>
          </div>
          <div className="erp-topbar-actions">
            <span className="erp-fiscal-year">FY 2026–27</span>
            <button className="erp-icon-button" aria-label="Search">⌕</button>
            <button className="erp-icon-button erp-notification" aria-label="Notifications">
              ♧<i />
            </button>
            <div className="erp-topbar-profile">
              <div className="erp-user-avatar">AD</div>
              <span>Admin</span>
              <span>⌄</span>
            </div>
          </div>
        </header>

        <div className="erp-content">{children}</div>
        <footer className="erp-footer">
          <span>© 2026 Builder ERP</span>
          <span>Real Estate Management System · Bangladesh</span>
        </footer>
      </main>
    </div>
  );
}
