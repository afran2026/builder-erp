'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState, type ReactNode } from 'react';

const navigation = [
  {
    section: 'WORKSPACE',
    sectionBn: 'কর্মক্ষেত্র',
    items: [
      { label: 'Dashboard', bn: 'ড্যাশবোর্ড', icon: '▦', path: 'dashboard' },
      { label: 'Projects', bn: 'প্রজেক্ট', icon: '▤', path: 'projects' },
      { label: 'Land Acquisition', bn: 'জমি অধিগ্রহণ', icon: '⌂', path: 'land' },
      { label: 'Properties', bn: 'প্রপার্টিজ', icon: '▥', path: 'properties' },
    ],
  },
  {
    section: 'BUSINESS',
    sectionBn: 'ব্যবসা পরিচালনা',
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
    sectionBn: 'ব্যবস্থাপনা',
    items: [
      { label: 'Construction', bn: 'নির্মাণ', icon: '⌁', path: 'construction' },
      { label: 'HR & Payroll', bn: 'এইচআর ও পে-রোল', icon: '♧', path: 'hr' },
      { label: 'Reports', bn: 'রিপোর্ট', icon: '▥', path: 'reports' },
      { label: 'Settings', bn: 'সেটিংস', icon: '⚙', path: 'settings' },
    ],
  },
];

const pageLabels: Record<string, { en: string; bn: string }> = {
  dashboard: { en: 'Dashboard', bn: 'ড্যাশবোর্ড' },
  projects: { en: 'Projects', bn: 'প্রজেক্ট' },
  land: { en: 'Land Acquisition', bn: 'জমি অধিগ্রহণ' },
  properties: { en: 'Properties', bn: 'প্রপার্টিজ' },
  crm: { en: 'CRM & Customers', bn: 'কাস্টমার' },
  sales: { en: 'Sales & Bookings', bn: 'বিক্রয় ও বুকিং' },
  accounting: { en: 'Accounting', bn: 'হিসাবরক্ষণ' },
  procurement: { en: 'Procurement', bn: 'ক্রয়' },
  inventory: { en: 'Inventory', bn: 'ইনভেন্টরি' },
  construction: { en: 'Construction', bn: 'নির্মাণ' },
  hr: { en: 'HR & Payroll', bn: 'এইচআর ও পে-রোল' },
  reports: { en: 'Reports', bn: 'রিপোর্ট' },
  settings: { en: 'Settings', bn: 'সেটিংস' },
};

export function ErpShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const segments = pathname.split('/').filter(Boolean);
  const locale = segments[0] === 'bn' ? 'bn' : 'en';
  const currentPath = segments[1] || 'dashboard';
  const isBn = locale === 'bn';
  const currentLabel = pageLabels[currentPath];
  const nextLocale = isBn ? 'en' : 'bn';
  const localePath = `/${nextLocale}/${segments.slice(1).join('/')}`;

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <div className="erp-shell">
      {mobileOpen && (
        <button
          type="button"
          className="erp-mobile-backdrop"
          aria-label={isBn ? 'মেনু বন্ধ করুন' : 'Close navigation'}
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside className={`erp-sidebar ${mobileOpen ? 'is-open' : ''}`}>
        <Link href={`/${locale}/dashboard`} className="erp-brand">
          <span className="erp-brand-mark">B</span>
          <span className="erp-brand-copy">
            <strong>BUILDER<span>ERP</span></strong>
            <small>REAL ESTATE MANAGEMENT</small>
          </span>
          <span className="erp-mobile-close" aria-hidden="true">×</span>
        </Link>

        <div className="erp-company">
          <div className="erp-company-avatar">ERP</div>
          <div className="erp-company-info">
            <strong>{isBn ? 'কোম্পানি ওয়ার্কস্পেস' : 'Company Workspace'}</strong>
            <small>{isBn ? 'রিয়েল এস্টেট ডেভেলপার' : 'Real Estate Developer'}</small>
          </div>
          <span className="erp-company-chevron">⌄</span>
        </div>

        <nav className="erp-navigation" aria-label={isBn ? 'প্রধান নেভিগেশন' : 'Main navigation'}>
          {navigation.map((group) => (
            <div className="erp-nav-group" key={group.section}>
              <p className="erp-nav-heading">
                {isBn ? group.sectionBn : group.section}
              </p>
              {group.items.map((item) => {
                const active = currentPath === item.path;
                return (
                  <Link
                    key={item.path}
                    href={`/${locale}/${item.path}`}
                    className={`erp-nav-link ${active ? 'active' : ''}`}
                    aria-current={active ? 'page' : undefined}
                  >
                    <span className="erp-nav-icon" aria-hidden="true">{item.icon}</span>
                    <span className="erp-nav-label">
                      <span>{isBn ? item.bn : item.label}</span>
                      <small>{isBn ? item.label : item.bn}</small>
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
            <strong>{isBn ? 'সহায়তা প্রয়োজন?' : 'Need assistance?'}</strong>
            <p>
              {isBn
                ? 'সিস্টেম ব্যবহারে সহায়তার জন্য আপনার ERP অ্যাডমিনের সঙ্গে যোগাযোগ করুন।'
                : 'Contact your ERP administrator for system support.'}
            </p>
          </div>
          <div className="erp-user">
            <div className="erp-user-avatar">U</div>
            <div className="erp-user-info">
              <strong>{isBn ? 'লগইন ব্যবহারকারী' : 'Signed-in user'}</strong>
              <small>{isBn ? 'অ্যাডমিনিস্ট্রেটর' : 'Administrator'}</small>
            </div>
          </div>
        </div>
      </aside>

      <main className="erp-main">
        <header className="erp-topbar">
          <div className="erp-topbar-left">
            <button
              type="button"
              className="erp-menu-toggle"
              aria-label={isBn ? 'মেনু খুলুন' : 'Open navigation'}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((open) => !open)}
            >
              <span />
              <span />
              <span />
            </button>
            <div className="erp-breadcrumb">
              <span>Builder ERP</span>
              <span>/</span>
              <strong>
                {currentLabel ? (isBn ? currentLabel.bn : currentLabel.en) : currentPath}
              </strong>
            </div>
          </div>

          <div className="erp-topbar-actions">
            <span className="erp-fiscal-year">
              {isBn ? 'বাংলাদেশ · BDT' : 'Bangladesh · BDT'}
            </span>
            <Link
              href={localePath}
              className="erp-language-switch"
              aria-label={isBn ? 'Switch to English' : 'বাংলায় পরিবর্তন করুন'}
              title={isBn ? 'Switch to English' : 'বাংলায় পরিবর্তন করুন'}
            >
              {isBn ? 'EN' : 'বাং'}
            </Link>
            <div className="erp-topbar-profile">
              <div className="erp-user-avatar">U</div>
              <span>{isBn ? 'অ্যাডমিন' : 'Admin'}</span>
            </div>
          </div>
        </header>

        <div className="erp-content">{children}</div>
        <footer className="erp-footer">
          <span>© {new Date().getFullYear()} Builder ERP</span>
          <span>
            {isBn
              ? 'রিয়েল এস্টেট ম্যানেজমেন্ট সিস্টেম · বাংলাদেশ'
              : 'Real Estate Management System · Bangladesh'}
          </span>
        </footer>
      </main>
    </div>
  );
}
