'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import styles from './page.module.css';

type Tab = 'all' | 'purchase' | 'joint-venture';

export default function LandAcquisitionPage() {
  const params = useParams();
  const locale = String(params.locale || 'bn');
  const bn = locale === 'bn';

  const [tab, setTab] = useState<Tab>('all');
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('all');

  const t = {
    eyebrow: bn ? 'জমি ব্যবস্থাপনা' : 'LAND MANAGEMENT',
    title: bn ? 'জমি অধিগ্রহণ' : 'Land Acquisition',
    subtitle: bn
      ? 'জমি ক্রয়, যৌথ উদ্যোগ ও মালিকানা সংক্রান্ত তথ্য এক জায়গায় পরিচালনা করুন।'
      : 'Manage land purchases, joint ventures and ownership records in one place.',
    add: bn ? '＋ নতুন জমি যোগ করুন' : '＋ Add land parcel',
    total: bn ? 'মোট জমির পরিমাণ' : 'Total land parcels',
    purchase: bn ? 'ক্রয় প্রক্রিয়াধীন' : 'Purchase in progress',
    joint: bn ? 'যৌথ উদ্যোগ' : 'Joint ventures',
    acquired: bn ? 'অধিগ্রহণ সম্পন্ন' : 'Acquisition completed',
    register: bn ? 'জমির তালিকা' : 'Land register',
    registerDesc: bn ? 'সকল জমির রেকর্ড ও অধিগ্রহণের অবস্থা' : 'All land records and acquisition progress',
    search: bn ? 'জমির নাম, মৌজা, দাগ বা খতিয়ান দিয়ে খুঁজুন...' : 'Search by land name, mouza, dag or khatian...',
    all: bn ? 'সকল জমি' : 'All parcels',
    purchaseTab: bn ? 'ক্রয়' : 'Purchase',
    jointTab: bn ? 'যৌথ উদ্যোগ (JV)' : 'Joint venture (JV)',
    filter: bn ? 'অবস্থা' : 'Status',
    allStatus: bn ? 'সকল অবস্থা' : 'All statuses',
    name: bn ? 'জমির বিবরণ' : 'Land details',
    location: bn ? 'অবস্থান' : 'Location',
    area: bn ? 'জমির পরিমাণ' : 'Land area',
    method: bn ? 'অধিগ্রহণের ধরন' : 'Acquisition type',
    progress: bn ? 'অগ্রগতি' : 'Progress',
    action: bn ? 'অ্যাকশন' : 'Actions',
    empty: bn ? 'এখনো কোনো জমির রেকর্ড নেই' : 'No land records yet',
    emptyDesc: bn
      ? 'নতুন জমি অধিগ্রহণের রেকর্ড যোগ করলে এখানে বিস্তারিত দেখা যাবে।'
      : 'Land acquisition records will appear here after they are added.',
    pending: bn ? 'API সংযুক্ত হলে তথ্য দেখানো হবে' : 'Data will appear when the API is connected',
    pendingLabel: bn ? 'ডেটা সংযুক্ত নয়' : 'DATA NOT CONNECTED',
  };

  const tabs: { id: Tab; label: string }[] = [
    { id: 'all', label: t.all },
    { id: 'purchase', label: t.purchaseTab },
    { id: 'joint-venture', label: t.jointTab },
  ];

  return (
    <main className={styles.page}>
      <div className={styles.topline}>
        <div className={styles.breadcrumb}>
          <span>{bn ? 'ERP' : 'ERP'}</span>
          <span className={styles.separator}>/</span>
          <span>{t.eyebrow}</span>
        </div>
        <span className={styles.dataStatus}>
          <span className={styles.statusDot} />
          {t.pendingLabel}
        </span>
      </div>

      <header className={styles.header}>
        <div>
          <span className={styles.eyebrow}>{t.eyebrow}</span>
          <h1>{t.title}</h1>
          <p>{t.subtitle}</p>
        </div>
        <button className={styles.primaryButton} disabled title={t.pending}>
          {t.add}
        </button>
      </header>

      <section className={styles.metrics} aria-label={bn ? 'অধিগ্রহণের সারসংক্ষেপ' : 'Acquisition overview'}>
        <article className={styles.metricCard}>
          <div className={styles.metricTop}>
            <span className={styles.metricIcon}>▦</span>
            <span className={styles.metricLabel}>{t.total}</span>
          </div>
          <strong>—</strong>
          <span className={styles.metricFoot}>{bn ? 'রেকর্ড অপেক্ষমাণ' : 'Awaiting records'}</span>
        </article>
        <article className={styles.metricCard}>
          <div className={styles.metricTop}>
            <span className={styles.metricIcon}>⌂</span>
            <span className={styles.metricLabel}>{t.purchase}</span>
          </div>
          <strong>—</strong>
          <span className={styles.metricFoot}>{bn ? 'ক্রয় সংক্রান্ত রেকর্ড' : 'Purchase records'}</span>
        </article>
        <article className={styles.metricCard}>
          <div className={styles.metricTop}>
            <span className={styles.metricIcon}>⇄</span>
            <span className={styles.metricLabel}>{t.joint}</span>
          </div>
          <strong>—</strong>
          <span className={styles.metricFoot}>{bn ? 'JV চুক্তির রেকর্ড' : 'JV agreement records'}</span>
        </article>
        <article className={styles.metricCard}>
          <div className={styles.metricTop}>
            <span className={styles.metricIcon}>✓</span>
            <span className={styles.metricLabel}>{t.acquired}</span>
          </div>
          <strong>—</strong>
          <span className={styles.metricFoot}>{bn ? 'যাচাইকৃত জমি' : 'Verified parcels'}</span>
        </article>
      </section>

      <section className={styles.register}>
        <div className={styles.registerHeader}>
          <div>
            <h2>{t.register}</h2>
            <p>{t.registerDesc}</p>
          </div>
          <span className={styles.recordCount}>— {bn ? 'টি রেকর্ড' : 'records'}</span>
        </div>

        <div className={styles.toolbar}>
          <div className={styles.tabs} role="tablist">
            {tabs.map((item) => (
              <button
                key={item.id}
                role="tab"
                aria-selected={tab === item.id}
                className={tab === item.id ? styles.activeTab : styles.tab}
                onClick={() => setTab(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className={styles.filters}>
            <label className={styles.search}>
              <span aria-hidden="true">⌕</span>
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder={t.search}
                aria-label={t.search}
              />
            </label>
            <select value={status} onChange={(event) => setStatus(event.target.value)} aria-label={t.filter}>
              <option value="all">{t.allStatus}</option>
              <option value="draft">{bn ? 'খসড়া' : 'Draft'}</option>
              <option value="review">{bn ? 'যাচাই চলছে' : 'Under review'}</option>
              <option value="completed">{bn ? 'সম্পন্ন' : 'Completed'}</option>
            </select>
          </div>
        </div>

        <div className={styles.tableWrap}>
          <table>
            <thead>
              <tr>
                <th>{t.name}</th>
                <th>{t.location}</th>
                <th>{t.area}</th>
                <th>{t.method}</th>
                <th>{t.progress}</th>
                <th>{t.action}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={6}>
                  <div className={styles.emptyState}>
                    <div className={styles.emptyIcon}>⌂</div>
                    <h3>{t.empty}</h3>
                    <p>{t.emptyDesc}</p>
                    <span>{t.pending}</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
