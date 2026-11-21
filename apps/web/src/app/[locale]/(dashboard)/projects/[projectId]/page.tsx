'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState } from 'react';

type DetailTab =
  | 'overview'
  | 'information'
  | 'properties'
  | 'land'
  | 'construction'
  | 'finance'
  | 'documents'
  | 'activity';

const tabConfig: {
  id: DetailTab;
  en: string;
  bn: string;
  icon: string;
}[] = [
  { id: 'overview', en: 'Overview', bn: 'সারসংক্ষেপ', icon: '▦' },
  { id: 'information', en: 'Information', bn: 'প্রজেক্ট তথ্য', icon: 'ⓘ' },
  { id: 'properties', en: 'Properties', bn: 'প্রপার্টি', icon: '⌂' },
  { id: 'land', en: 'Land', bn: 'জমি', icon: '▧' },
  { id: 'construction', en: 'Construction', bn: 'নির্মাণ', icon: '⌁' },
  { id: 'finance', en: 'Finance & Budget', bn: 'অর্থ ও বাজেট', icon: '৳' },
  { id: 'documents', en: 'Documents', bn: 'ডকুমেন্ট', icon: '▤' },
  { id: 'activity', en: 'Activity', bn: 'কার্যক্রম', icon: '◷' },
];

const tabDescriptions: Record<DetailTab, { en: string; bn: string }> = {
  overview: {
    en: 'Project summary, status, timeline and performance indicators will appear here.',
    bn: 'প্রজেক্টের সারসংক্ষেপ, অবস্থা, সময়সীমা ও কার্যক্রমের তথ্য এখানে দেখা যাবে।',
  },
  information: {
    en: 'Project name, code, address, description and key dates.',
    bn: 'প্রজেক্টের নাম, কোড, ঠিকানা, বিবরণ ও গুরুত্বপূর্ণ তারিখ।',
  },
  properties: {
    en: 'Flats, plots, shops, parking and office units linked to this project.',
    bn: 'এই প্রজেক্টের অধীনে থাকা ফ্ল্যাট, প্লট, দোকান, পার্কিং ও অফিস ইউনিট।',
  },
  land: {
    en: 'Land parcels, acquisition records and joint venture information.',
    bn: 'জমির পার্সেল, জমি অধিগ্রহণ ও জয়েন্ট ভেঞ্চারের তথ্য।',
  },
  construction: {
    en: 'Construction phases, work packages, progress reports and site issues.',
    bn: 'নির্মাণ ধাপ, কাজের প্যাকেজ, অগ্রগতি রিপোর্ট ও সাইটের সমস্যা।',
  },
  finance: {
    en: 'Project budget, expenses, receipts and financial performance.',
    bn: 'প্রজেক্ট বাজেট, ব্যয়, প্রাপ্তি ও আর্থিক কার্যক্রম।',
  },
  documents: {
    en: 'Project approvals, agreements, drawings and other files.',
    bn: 'প্রজেক্টের অনুমোদন, চুক্তি, নকশা ও অন্যান্য ফাইল।',
  },
  activity: {
    en: 'A chronological record of project changes and approved actions.',
    bn: 'প্রজেক্টের পরিবর্তন ও অনুমোদিত কার্যক্রমের সময়ানুক্রমিক রেকর্ড।',
  },
};

export default function ProjectDetailsPage() {
  const params = useParams<{ locale: string; projectId: string }>();
  const bn = params.locale === 'bn';
  const projectId = decodeURIComponent(params.projectId || '');
  const [activeTab, setActiveTab] = useState<DetailTab>('overview');

  const activeDescription = tabDescriptions[activeTab];

  return (
    <main className="erp-project-details">
      <div className="erp-project-detail-breadcrumb">
        <Link href={`/${params.locale}/dashboard`}>
          {bn ? 'ড্যাশবোর্ড' : 'Dashboard'}
        </Link>
        <span>/</span>
        <Link href={`/${params.locale}/projects`}>
          {bn ? 'প্রজেক্ট' : 'Projects'}
        </Link>
        <span>/</span>
        <strong>{bn ? 'প্রজেক্ট বিস্তারিত' : 'Project Details'}</strong>
      </div>

      <header className="erp-project-detail-header">
        <div className="erp-project-detail-heading">
          <Link
            href={`/${params.locale}/projects`}
            className="erp-project-back-link"
          >
            <span aria-hidden="true">←</span>
            {bn ? 'প্রজেক্ট তালিকায় ফিরুন' : 'Back to Projects'}
          </Link>

          <div className="erp-project-detail-title-row">
            <div className="erp-project-detail-avatar" aria-hidden="true">
              ⌂
            </div>
            <div>
              <div className="erp-project-detail-eyebrow">
                {bn ? 'প্রজেক্ট ওয়ার্কস্পেস' : 'PROJECT WORKSPACE'}
              </div>
              <h1>{bn ? 'প্রজেক্ট বিস্তারিত' : 'Project Details'}</h1>
              <p>
                {bn ? 'প্রজেক্ট আইডি:' : 'Project ID:'}{' '}
                <code>{projectId}</code>
              </p>
            </div>
          </div>
        </div>

        <div className="erp-project-detail-actions">
          <span className="erp-project-detail-status">
            <span />
            {bn ? 'ডেটা অপেক্ষমাণ' : 'Awaiting data'}
          </span>
          <Link
            href={`/${params.locale}/projects/${encodeURIComponent(projectId)}/edit`}
            className="erp-button"
          >
            {bn ? 'প্রজেক্ট সম্পাদনা' : 'Edit Project'}
          </Link>
        </div>
      </header>

      <section className="erp-project-detail-api" role="status">
        <span className="erp-project-detail-api-icon" aria-hidden="true">i</span>
        <div>
          <strong>
            {bn ? 'প্রজেক্ট API এখনো সংযুক্ত নয়' : 'Project API is not connected yet'}
          </strong>
          <p>
            {bn
              ? 'এই স্ক্রিনের তথ্য authenticated API থেকে আসবে। সংযোগ না হওয়া পর্যন্ত কোনো প্রজেক্টের তথ্য বা পরিসংখ্যান দেখানো হচ্ছে না।'
              : 'Project information will load from the authenticated API. No project records or statistics are being fabricated while the API is unavailable.'}
          </p>
        </div>
      </section>

      <section className="erp-project-detail-summary" aria-label={bn ? 'প্রজেক্ট মেট্রিকস' : 'Project metrics'}>
        {[
          { en: 'Properties', bn: 'প্রপার্টি', icon: '⌂' },
          { en: 'Land Area', bn: 'জমির পরিমাণ', icon: '▧' },
          { en: 'Project Budget', bn: 'প্রজেক্ট বাজেট', icon: '৳' },
          { en: 'Completion', bn: 'সম্পন্ন', icon: '◷' },
        ].map((item) => (
          <article className="erp-card erp-project-detail-metric" key={item.en}>
            <div className="erp-project-detail-metric-top">
              <span>{bn ? item.bn : item.en}</span>
              <span aria-hidden="true">{item.icon}</span>
            </div>
            <strong>—</strong>
            <small>{bn ? 'API সংযোগের অপেক্ষায়' : 'Awaiting API connection'}</small>
          </article>
        ))}
      </section>

      <section className="erp-card erp-project-workspace">
        <div className="erp-project-workspace-heading">
          <div>
            <h2>{bn ? 'প্রজেক্ট ওয়ার্কস্পেস' : 'Project Workspace'}</h2>
            <p>
              {bn
                ? 'প্রজেক্টের বিভিন্ন অংশ দেখতে একটি সেকশন নির্বাচন করুন।'
                : 'Select a section to explore different areas of this project.'}
            </p>
          </div>
          <span className="erp-project-workspace-id">
            {bn ? 'রেফারেন্স' : 'REFERENCE'}: {projectId.slice(0, 8)}
          </span>
        </div>

        <nav className="erp-project-detail-tabs" aria-label={bn ? 'প্রজেক্ট সেকশন' : 'Project sections'}>
          {tabConfig.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`erp-project-detail-tab ${activeTab === tab.id ? 'active' : ''}`}
              aria-current={activeTab === tab.id ? 'page' : undefined}
              onClick={() => setActiveTab(tab.id)}
            >
              <span aria-hidden="true">{tab.icon}</span>
              {bn ? tab.bn : tab.en}
            </button>
          ))}
        </nav>

        <div className="erp-project-detail-content" aria-live="polite">
          <div className="erp-project-detail-content-heading">
            <div>
              <span className="erp-project-detail-section-icon" aria-hidden="true">
                {tabConfig.find((tab) => tab.id === activeTab)?.icon}
              </span>
              <div>
                <h3>
                  {bn
                    ? tabConfig.find((tab) => tab.id === activeTab)?.bn
                    : tabConfig.find((tab) => tab.id === activeTab)?.en}
                </h3>
                <p>{bn ? activeDescription.bn : activeDescription.en}</p>
              </div>
            </div>
          </div>

          {activeTab === 'overview' ? (
            <div className="erp-project-overview">
              <div className="erp-project-overview-grid">
                <section className="erp-project-overview-panel">
                  <div className="erp-project-overview-panel-heading">
                    <div>
                      <h4>{bn ? 'প্রজেক্ট অগ্রগতি' : 'Project Progress'}</h4>
                      <p>{bn ? 'সামগ্রিক বাস্তবায়ন অবস্থা' : 'Overall implementation status'}</p>
                    </div>
                    <span className="erp-project-overview-tag">
                      {bn ? 'ডেটা অপেক্ষমাণ' : 'Awaiting data'}
                    </span>
                  </div>
                  <div className="erp-project-overview-progress">
                    <strong>—</strong>
                    <span>{bn ? 'অগ্রগতির তথ্য পাওয়া যায়নি' : 'Progress data unavailable'}</span>
                  </div>
                  <div className="erp-project-overview-progress-track" aria-hidden="true">
                    <span />
                  </div>
                  <p className="erp-project-overview-footnote">
                    {bn
                      ? 'অনুমোদিত construction progress report থেকে অগ্রগতি গণনা করা হবে।'
                      : 'Progress will be calculated from approved construction progress reports.'}
                  </p>
                </section>

                <section className="erp-project-overview-panel">
                  <div className="erp-project-overview-panel-heading">
                    <div>
                      <h4>{bn ? 'প্রজেক্ট টাইমলাইন' : 'Project Timeline'}</h4>
                      <p>{bn ? 'পরিকল্পিত সময়সীমা' : 'Planned project schedule'}</p>
                    </div>
                    <span className="erp-project-overview-calendar" aria-hidden="true">◷</span>
                  </div>
                  <div className="erp-project-overview-timeline">
                    <div>
                      <span className="erp-project-overview-timeline-dot" />
                      <div>
                        <small>{bn ? 'শুরুর তারিখ' : 'Start Date'}</small>
                        <strong>—</strong>
                      </div>
                    </div>
                    <div>
                      <span className="erp-project-overview-timeline-dot" />
                      <div>
                        <small>{bn ? 'সমাপ্তির তারিখ' : 'Expected Completion'}</small>
                        <strong>—</strong>
                      </div>
                    </div>
                  </div>
                  <p className="erp-project-overview-footnote">
                    {bn ? 'প্রজেক্টের অনুমোদিত তারিখের অপেক্ষায়।' : 'Waiting for approved project dates.'}
                  </p>
                </section>

                <section className="erp-project-overview-panel erp-project-overview-operations">
                  <div className="erp-project-overview-panel-heading">
                    <div>
                      <h4>{bn ? 'অপারেশনাল সারসংক্ষেপ' : 'Operational Snapshot'}</h4>
                      <p>{bn ? 'প্রজেক্টের সংশ্লিষ্ট কার্যক্রম' : 'Linked project operations'}</p>
                    </div>
                  </div>
                  <div className="erp-project-overview-operation-list">
                    {[
                      { id: 'properties' as DetailTab, en: 'Properties', bn: 'প্রপার্টি', icon: '⌂' },
                      { id: 'land' as DetailTab, en: 'Land & Acquisition', bn: 'জমি ও অধিগ্রহণ', icon: '▧' },
                      { id: 'construction' as DetailTab, en: 'Construction', bn: 'নির্মাণ', icon: '⌁' },
                      { id: 'finance' as DetailTab, en: 'Finance & Budget', bn: 'অর্থ ও বাজেট', icon: '৳' },
                    ].map((item) => (
                      <button
                        type="button"
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className="erp-project-overview-operation"
                      >
                        <span className="erp-project-overview-operation-icon" aria-hidden="true">{item.icon}</span>
                        <span>{bn ? item.bn : item.en}</span>
                        <strong>—</strong>
                        <span className="erp-project-overview-operation-arrow" aria-hidden="true">→</span>
                      </button>
                    ))}
                  </div>
                </section>

                <section className="erp-project-overview-panel">
                  <div className="erp-project-overview-panel-heading">
                    <div>
                      <h4>{bn ? 'সাম্প্রতিক কার্যক্রম' : 'Recent Activity'}</h4>
                      <p>{bn ? 'প্রজেক্টের সর্বশেষ পরিবর্তন' : 'Latest project updates'}</p>
                    </div>
                    <button
                      type="button"
                      className="erp-project-overview-text-link"
                      onClick={() => setActiveTab('activity')}
                    >
                      {bn ? 'সব দেখুন' : 'View all'} →
                    </button>
                  </div>
                  <div className="erp-project-overview-activity-empty">
                    <span aria-hidden="true">◷</span>
                    <strong>{bn ? 'এখনো কোনো কার্যক্রম নেই' : 'No activity recorded yet'}</strong>
                    <p>
                      {bn
                        ? 'প্রজেক্টে অনুমোদিত পরিবর্তন বা কার্যক্রম হলে এখানে দেখা যাবে।'
                        : 'Approved changes and project activities will appear here.'}
                    </p>
                  </div>
                </section>
              </div>

              <div className="erp-project-overview-footer">
                <span className="erp-project-detail-pending">
                  {bn ? 'লাইভ ডেটা API সংযোগের অপেক্ষায়' : 'LIVE DATA AWAITING API INTEGRATION'}
                </span>
                <p>
                  {bn
                    ? 'এই সারসংক্ষেপে কোনো নমুনা বা অনুমানভিত্তিক ব্যবসায়িক তথ্য ব্যবহার করা হয়নি।'
                    : 'No sample or assumed business records are used in this overview.'}
                </p>
              </div>
            </div>
          ) : (
            <div className="erp-project-detail-empty">
              <div className="erp-project-detail-empty-icon" aria-hidden="true">
                {activeTab === 'documents' ? '▤' : activeTab === 'activity' ? '◷' : '▦'}
              </div>
              <h3>
                {bn ? 'এখনো কোনো তথ্য পাওয়া যায়নি' : 'No information available yet'}
              </h3>
              <p>
                {bn
                  ? 'এই সেকশনের তথ্য দেখার জন্য প্রজেক্ট API সংযোগ এবং অনুমোদিত অ্যাক্সেস প্রয়োজন।'
                  : 'Project API integration and authorized access are required to display this section.'}
              </p>
              <span className="erp-project-detail-pending">
                {bn ? 'ডেটা সংযোগ অপেক্ষমাণ' : 'DATA CONNECTION PENDING'}
              </span>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
