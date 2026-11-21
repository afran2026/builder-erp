'use client';

import { useMemo, useState, type FormEvent } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type ProjectStatus =
  | 'PLANNING'
  | 'ACTIVE'
  | 'ON_HOLD'
  | 'COMPLETED'
  | 'CANCELLED';

type Project = {
  id: string;
  name: string;
  nameBn?: string | null;
  code: string;
  address?: string | null;
  status: ProjectStatus;
  startDate?: string | null;
  endDate?: string | null;
};

const statusLabels: Record<ProjectStatus, { en: string; bn: string; tone: string }> = {
  PLANNING: { en: 'Planning', bn: 'পরিকল্পনাধীন', tone: 'info' },
  ACTIVE: { en: 'Active', bn: 'চলমান', tone: 'success' },
  ON_HOLD: { en: 'On Hold', bn: 'স্থগিত', tone: 'warning' },
  COMPLETED: { en: 'Completed', bn: 'সম্পন্ন', tone: 'info' },
  CANCELLED: { en: 'Cancelled', bn: 'বাতিল', tone: 'danger' },
};

// Live records will be loaded from the authenticated organization-scoped API.
const projects: Project[] = [];

export default function ProjectsPage() {
  const pathname = usePathname();
  const bn = pathname.split('/').filter(Boolean)[0] === 'bn';

  const [activeTab, setActiveTab] = useState('ALL');
  const [search, setSearch] = useState('');
  const [createOpen, setCreateOpen] = useState(false);
  const [projectName, setProjectName] = useState('');
  const [projectNameBn, setProjectNameBn] = useState('');
  const [projectCode, setProjectCode] = useState('');
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState<ProjectStatus>('PLANNING');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const tabs = [
    { id: 'ALL', en: 'All Projects', bn: 'সব প্রজেক্ট' },
    { id: 'PLANNING', en: 'Planning', bn: 'পরিকল্পনাধীন' },
    { id: 'ACTIVE', en: 'Active', bn: 'চলমান' },
    { id: 'ON_HOLD', en: 'On Hold', bn: 'স্থগিত' },
    { id: 'COMPLETED', en: 'Completed', bn: 'সম্পন্ন' },
    { id: 'CANCELLED', en: 'Cancelled', bn: 'বাতিল' },
  ];

  const filteredProjects = useMemo(() => {
    const query = search.trim().toLocaleLowerCase();

    return projects.filter((project) => {
      const matchesTab = activeTab === 'ALL' || project.status === activeTab;
      const matchesSearch =
        !query ||
        project.name.toLocaleLowerCase().includes(query) ||
        (project.nameBn || '').toLocaleLowerCase().includes(query) ||
        project.code.toLocaleLowerCase().includes(query) ||
        (project.address || '').toLocaleLowerCase().includes(query);

      return matchesTab && Boolean(matchesSearch);
    });
  }, [activeTab, search]);

  function resetForm() {
    setProjectName('');
    setProjectNameBn('');
    setProjectCode('');
    setAddress('');
    setDescription('');
    setStatus('PLANNING');
    setStartDate('');
    setEndDate('');
  }

  function handleCreateSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Persistence is intentionally disabled until authenticated Project API exists.
  }

  return (
    <>
      <section className="erp-page-heading erp-project-heading">
        <div>
          <div className="erp-project-breadcrumb">
            {bn ? 'ওয়ার্কস্পেস' : 'WORKSPACE'}
            <span>/</span>
            {bn ? 'প্রজেক্ট' : 'PROJECTS'}
          </div>
          <p className="erp-eyebrow">
            {bn ? 'পোর্টফোলিও ব্যবস্থাপনা' : 'PORTFOLIO MANAGEMENT'}
          </p>
          <h1 className="erp-page-title">
            {bn ? 'প্রজেক্ট পোর্টফোলিও' : 'Projects Portfolio'}
          </h1>
          <p className="erp-page-description">
            {bn
              ? 'আপনার প্রতিষ্ঠানের সব রিয়েল এস্টেট প্রকল্প এক জায়গা থেকে পরিচালনা করুন।'
              : 'Manage your real estate development projects from one central workspace.'}
          </p>
        </div>

        <div className="erp-project-heading-actions">
          <button
            className="erp-button erp-project-primary"
            type="button"
            onClick={() => setCreateOpen(true)}
          >
            <span aria-hidden="true">＋</span>
            {bn ? 'নতুন প্রজেক্ট তৈরি' : 'Create Project'}
          </button>
        </div>
      </section>

      <div className="erp-project-api-banner" role="status">
        <span className="erp-project-api-icon" aria-hidden="true">i</span>
        <div>
          <strong>{bn ? 'ডেটাবেস সংযোগ অপেক্ষমাণ' : 'Project data connection pending'}</strong>
          <p>
            {bn
              ? 'এখনো কোনো বাস্তব প্রজেক্ট লোড করা হয়নি। Authentication ও Project API প্রস্তুত হলে প্রতিষ্ঠানের তথ্য এখানে দেখা যাবে।'
              : 'No live project records are loaded. Organization data will appear here after authentication and Project API integration.'}
          </p>
        </div>
        <span className="erp-project-api-state">
          {bn ? 'API অপেক্ষমাণ' : 'API Pending'}
        </span>
      </div>

      <section className="erp-project-kpis" aria-label={bn ? 'প্রজেক্ট সারসংক্ষেপ' : 'Project summary'}>
        {[
          { label: 'Total Projects', bnLabel: 'মোট প্রজেক্ট', icon: '▤', color: 'teal' },
          { label: 'Active Projects', bnLabel: 'চলমান প্রজেক্ট', icon: '◷', color: 'blue' },
          { label: 'In Planning', bnLabel: 'পরিকল্পনাধীন', icon: '⌁', color: 'purple' },
          { label: 'Completed', bnLabel: 'সম্পন্ন', icon: '✓', color: 'orange' },
        ].map((item) => (
          <article className="erp-card erp-kpi-card erp-project-kpi" key={item.label}>
            <div className="erp-kpi-top">
              <span className="erp-kpi-label">{bn ? item.bnLabel : item.label}</span>
              <span className={`erp-kpi-icon ${item.color}`}>{item.icon}</span>
            </div>
            <div className="erp-kpi-value">—</div>
            <div className="erp-kpi-foot">
              {bn ? 'ডেটা সংযোগের অপেক্ষায়' : 'Awaiting live data'}
            </div>
          </article>
        ))}
      </section>

      <section className="erp-card erp-project-panel">
        <div className="erp-project-panel-heading">
          <div>
            <h2>{bn ? 'আপনার প্রজেক্টসমূহ' : 'Your Projects'}</h2>
            <p>
              {bn
                ? 'স্ট্যাটাস অনুযায়ী প্রজেক্ট খুঁজুন ও পরিচালনা করুন।'
                : 'Search, filter and manage your project portfolio.'}
            </p>
          </div>
          <span className="erp-project-record-count">
            {projects.length} {bn ? 'টি রেকর্ড' : 'records'}
          </span>
        </div>

        <div className="erp-project-toolbar">
          <div
            className="erp-tabs erp-project-tabs"
            role="tablist"
            aria-label={bn ? 'প্রজেক্ট স্ট্যাটাস ফিল্টার' : 'Project status filter'}
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={activeTab === tab.id}
                className={`erp-tab ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {bn ? tab.bn : tab.en}
                {tab.id === 'ALL' && (
                  <span className="erp-project-tab-count">{projects.length}</span>
                )}
              </button>
            ))}
          </div>

          <label className="erp-search erp-project-search">
            <span aria-hidden="true">⌕</span>
            <input
              type="search"
              placeholder={bn ? 'নাম, কোড বা ঠিকানা দিয়ে খুঁজুন' : 'Search name, code or location'}
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </label>
        </div>

        <div className="erp-project-list-content">
          {filteredProjects.length === 0 ? (
            <div className="erp-project-empty erp-project-empty-modern">
              <div className="erp-project-empty-art" aria-hidden="true">
                <span>⌂</span>
                <i />
                <i />
              </div>
              <span className="erp-project-empty-label">
                {search.trim()
                  ? (bn ? 'কোনো ফলাফল পাওয়া যায়নি' : 'NO MATCHING RESULTS')
                  : (bn ? 'প্রজেক্ট পোর্টফোলিও' : 'PROJECT PORTFOLIO')}
              </span>
              <h2>
                {search.trim()
                  ? (bn ? 'আপনার অনুসন্ধানের সঙ্গে মিল নেই' : 'No matching projects found')
                  : (bn ? 'আপনার প্রথম প্রজেক্ট তৈরি করুন' : 'Start with your first project')}
              </h2>
              <p>
                {search.trim()
                  ? (bn
                    ? 'অন্য নাম, প্রজেক্ট কোড অথবা লোকেশন দিয়ে আবার চেষ্টা করুন।'
                    : 'Try another project name, code or location.')
                  : (bn
                    ? 'প্রজেক্ট তৈরি হলে জমি, প্রপার্টি, নির্মাণ, বিক্রয় ও হিসাব একই জায়গা থেকে পরিচালনা করতে পারবেন।'
                    : 'Once created, you can manage land, properties, construction, sales and project accounts from one workspace.')}
              </p>
              {search.trim() ? (
                <button
                  className="erp-button erp-button-secondary"
                  type="button"
                  onClick={() => {
                    setSearch('');
                    setActiveTab('ALL');
                  }}
                >
                  {bn ? 'ফিল্টার পরিষ্কার করুন' : 'Clear filters'}
                </button>
              ) : (
                <button
                  className="erp-button erp-project-primary"
                  type="button"
                  onClick={() => setCreateOpen(true)}
                >
                  ＋ {bn ? 'প্রথম প্রজেক্ট তৈরি করুন' : 'Create your first project'}
                </button>
              )}
            </div>
          ) : (
            <div className="erp-project-grid">
              {filteredProjects.map((project) => {
                const statusInfo = statusLabels[project.status];

                return (
                  <article className="erp-card erp-project-card" key={project.id}>
                    <div className="erp-project-top">
                      <span className="erp-project-avatar">⌂</span>
                      <div className="erp-project-title-wrap">
                        <h2 className="erp-project-title">
                          {bn && project.nameBn ? project.nameBn : project.name}
                        </h2>
                        <p className="erp-project-location">
                          {project.address || (bn ? 'ঠিকানা দেওয়া হয়নি' : 'No address provided')}
                        </p>
                      </div>
                      <span className={`erp-status ${statusInfo.tone}`}>
                        {bn ? statusInfo.bn : statusInfo.en}
                      </span>
                    </div>
                    <div className="erp-project-meta">
                      <div>
                        <small>{bn ? 'প্রজেক্ট কোড' : 'Project Code'}</small>
                        <strong>{project.code}</strong>
                      </div>
                      <div>
                        <small>{bn ? 'শুরুর তারিখ' : 'Start Date'}</small>
                        <strong>{project.startDate || '—'}</strong>
                      </div>
                      <div>
                        <small>{bn ? 'শেষের তারিখ' : 'End Date'}</small>
                        <strong>{project.endDate || '—'}</strong>
                      </div>
                    </div>
                    <div className="erp-project-card-footer">
                      <Link
                        className="erp-project-details-link"
                        href={`/${bn ? 'bn' : 'en'}/projects/${encodeURIComponent(project.id)}`}
                      >
                        {bn ? 'বিস্তারিত দেখুন' : 'View Details'}
                        <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {createOpen && (
        <div
          className="erp-modal-backdrop erp-project-modal-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setCreateOpen(false);
          }}
        >
          <section
            className="erp-modal erp-project-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="create-project-title"
          >
            <div className="erp-modal-header">
              <div>
                <p className="erp-eyebrow">
                  {bn ? 'প্রজেক্ট ব্যবস্থাপনা' : 'PROJECT MANAGEMENT'}
                </p>
                <h2 id="create-project-title">
                  {bn ? 'নতুন প্রজেক্ট তৈরি করুন' : 'Create New Project'}
                </h2>
                <p>
                  {bn
                    ? 'প্রজেক্টের প্রাথমিক তথ্য দিয়ে শুরু করুন।'
                    : 'Start by entering the basic details of your project.'}
                </p>
              </div>
              <button
                type="button"
                className="erp-modal-close"
                onClick={() => setCreateOpen(false)}
                aria-label={bn ? 'বন্ধ করুন' : 'Close'}
              >
                ×
              </button>
            </div>

            <form onSubmit={handleCreateSubmit}>
              <div className="erp-project-form-section">
                <div className="erp-project-form-section-title">
                  <span>01</span>
                  <div>
                    <h3>{bn ? 'প্রাথমিক তথ্য' : 'Basic Information'}</h3>
                    <p>{bn ? 'প্রজেক্টের পরিচিতি ও ইউনিক কোড' : 'Project identity and unique reference'}</p>
                  </div>
                </div>

                <div className="erp-form-grid">
                  <label className="erp-form-field">
                    <span>{bn ? 'প্রজেক্টের নাম (English) *' : 'Project Name (English) *'}</span>
                    <input
                      required
                      maxLength={150}
                      value={projectName}
                      onChange={(e) => setProjectName(e.target.value)}
                      placeholder="e.g. Green Valley Residency"
                    />
                  </label>

                  <label className="erp-form-field">
                    <span>{bn ? 'প্রজেক্টের নাম (বাংলা)' : 'Project Name (Bangla)'}</span>
                    <input
                      maxLength={150}
                      value={projectNameBn}
                      onChange={(e) => setProjectNameBn(e.target.value)}
                      placeholder="প্রজেক্টের বাংলা নাম"
                    />
                  </label>

                  <label className="erp-form-field">
                    <span>{bn ? 'প্রজেক্ট কোড *' : 'Project Code *'}</span>
                    <input
                      required
                      maxLength={40}
                      value={projectCode}
                      onChange={(e) => setProjectCode(e.target.value.toUpperCase().replace(/\s+/g, '-'))}
                      placeholder="e.g. GVR-001"
                    />
                    <small>{bn ? 'প্রতিটি প্রজেক্টের কোড আলাদা হতে হবে।' : 'Each project must have a unique code.'}</small>
                  </label>

                  <label className="erp-form-field">
                    <span>{bn ? 'প্রাথমিক অবস্থা' : 'Initial Status'}</span>
                    <select value={status} onChange={(e) => setStatus(e.target.value as ProjectStatus)}>
                      {(['PLANNING', 'ACTIVE', 'ON_HOLD', 'COMPLETED', 'CANCELLED'] as ProjectStatus[]).map((value) => (
                        <option key={value} value={value}>
                          {bn ? statusLabels[value].bn : statusLabels[value].en}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
              </div>

              <div className="erp-project-form-section">
                <div className="erp-project-form-section-title">
                  <span>02</span>
                  <div>
                    <h3>{bn ? 'লোকেশন ও সময়সীমা' : 'Location & Timeline'}</h3>
                    <p>{bn ? 'প্রজেক্টের অবস্থান ও পরিকল্পিত সময়' : 'Where and when the project will take place'}</p>
                  </div>
                </div>

                <div className="erp-form-grid">
                  <label className="erp-form-field erp-form-field-full">
                    <span>{bn ? 'প্রজেক্টের ঠিকানা / লোকেশন' : 'Project Address / Location'}</span>
                    <input
                      maxLength={300}
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder={bn ? 'এলাকা, থানা, জেলা' : 'Area, upazila, district'}
                    />
                  </label>

                  <label className="erp-form-field">
                    <span>{bn ? 'শুরুর তারিখ' : 'Start Date'}</span>
                    <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                  </label>

                  <label className="erp-form-field">
                    <span>{bn ? 'সম্ভাব্য শেষের তারিখ' : 'Expected End Date'}</span>
                    <input
                      type="date"
                      min={startDate || undefined}
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                    />
                  </label>
                </div>
              </div>

              <div className="erp-project-form-section">
                <div className="erp-project-form-section-title">
                  <span>03</span>
                  <div>
                    <h3>{bn ? 'প্রজেক্টের বিবরণ' : 'Project Description'}</h3>
                    <p>{bn ? 'প্রজেক্ট সম্পর্কে সংক্ষিপ্ত তথ্য' : 'Additional context about this project'}</p>
                  </div>
                </div>

                <div className="erp-form-grid">
                  <label className="erp-form-field erp-form-field-full">
                    <span>{bn ? 'বিবরণ' : 'Description'}</span>
                    <textarea
                      rows={4}
                      maxLength={2000}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder={bn ? 'প্রজেক্ট সম্পর্কে সংক্ষিপ্ত বিবরণ লিখুন...' : 'Write a brief project description...'}
                    />
                    <small>{description.length}/2000</small>
                  </label>
                </div>
              </div>

              <div className="erp-form-api-notice erp-project-save-notice">
                <strong>{bn ? 'সংরক্ষণ এখনো চালু হয়নি' : 'Project creation is not enabled yet'}</strong>
                <span>
                  {bn
                    ? 'Authentication ও নিরাপদ Project API তৈরি হলে এই ফর্মের তথ্য সংরক্ষণ করা যাবে। এখন কোনো তথ্য database-এ যাচ্ছে না।'
                    : 'This form will persist data after authentication and the secure Project API are implemented. Nothing is being saved to the database yet.'}
                </span>
              </div>

              <div className="erp-modal-actions">
                <button
                  className="erp-button erp-button-secondary"
                  type="button"
                  onClick={() => {
                    setCreateOpen(false);
                    resetForm();
                  }}
                >
                  {bn ? 'বাতিল করুন' : 'Cancel'}
                </button>
                <button className="erp-button" type="submit" disabled>
                  {bn ? 'প্রজেক্ট সংরক্ষণ (শীঘ্রই)' : 'Save Project (Coming Soon)'}
                </button>
              </div>
            </form>
          </section>
        </div>
      )}
    </>
  );
}
