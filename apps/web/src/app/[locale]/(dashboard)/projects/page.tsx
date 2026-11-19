'use client';

import { useMemo, useState } from 'react';

type Project = {
  name: string;
  location: string;
  status: 'Active' | 'On Hold' | 'Completed';
  land: string;
  units: string;
  sales: number;
  construction: number;
  value: string;
  icon: string;
};

const projects: Project[] = [
  {
    name: 'Green Valley Residency',
    location: 'Uttara, Dhaka',
    status: 'Active',
    land: '12.5 Katha',
    units: '48 Units',
    sales: 72,
    construction: 58,
    value: '৳ ২৪.৫ Cr',
    icon: '⌂',
  },
  {
    name: 'Metro Heights',
    location: 'Mirpur, Dhaka',
    status: 'Active',
    land: '8.0 Katha',
    units: '36 Units',
    sales: 64,
    construction: 42,
    value: '৳ ১৮.৮ Cr',
    icon: '▥',
  },
  {
    name: 'Lake View Apartments',
    location: 'Dhanmondi, Dhaka',
    status: 'On Hold',
    land: '6.5 Katha',
    units: '24 Units',
    sales: 38,
    construction: 20,
    value: '৳ ১৪.২ Cr',
    icon: '⌁',
  },
  {
    name: 'Royal Garden',
    location: 'Bashundhara, Dhaka',
    status: 'Completed',
    land: '10.0 Katha',
    units: '40 Units',
    sales: 100,
    construction: 100,
    value: '৳ ২৮.১ Cr',
    icon: '♧',
  },
];

const statusTone: Record<Project['status'], string> = {
  Active: 'success',
  'On Hold': 'warning',
  Completed: 'info',
};

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState('All Projects');
  const [search, setSearch] = useState('');

  const tabs = ['All Projects', 'Active', 'On Hold', 'Completed'];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesTab =
        activeTab === 'All Projects' || project.status === activeTab;
      const query = search.trim().toLowerCase();
      const matchesSearch =
        !query ||
        project.name.toLowerCase().includes(query) ||
        project.location.toLowerCase().includes(query);
      return matchesTab && matchesSearch;
    });
  }, [activeTab, search]);

  return (
    <>
      <section className="erp-page-heading">
        <div>
          <p className="erp-eyebrow">PORTFOLIO · প্রজেক্ট ব্যবস্থাপনা</p>
          <h1 className="erp-page-title">Projects Portfolio</h1>
          <p className="erp-page-description">
            Monitor your real estate developments, project performance and progress.
          </p>
        </div>
        <button
          className="erp-button"
          type="button"
          onClick={() => alert('Connect this action to the Create Project workflow.')}
        >
          + Create Project
        </button>
      </section>

      <section className="erp-kpi-grid" aria-label="Portfolio summary">
        <article className="erp-card erp-kpi-card">
          <div className="erp-kpi-top">
            <span className="erp-kpi-label">Active Projects</span>
            <span className="erp-kpi-icon teal">▦</span>
          </div>
          <div className="erp-kpi-value">০২</div>
          <div className="erp-kpi-foot">3 projects currently active</div>
        </article>
        <article className="erp-card erp-kpi-card">
          <div className="erp-kpi-top">
            <span className="erp-kpi-label">Total Land Area</span>
            <span className="erp-kpi-icon blue">⌂</span>
          </div>
          <div className="erp-kpi-value">৩৭ Katha</div>
          <div className="erp-kpi-foot">Across all listed projects</div>
        </article>
        <article className="erp-card erp-kpi-card">
          <div className="erp-kpi-top">
            <span className="erp-kpi-label">Saleable Units</span>
            <span className="erp-kpi-icon purple">▥</span>
          </div>
          <div className="erp-kpi-value">১৪৮</div>
          <div className="erp-kpi-foot">Residential & commercial units</div>
        </article>
        <article className="erp-card erp-kpi-card">
          <div className="erp-kpi-top">
            <span className="erp-kpi-label">Portfolio Value</span>
            <span className="erp-kpi-icon orange">৳</span>
          </div>
          <div className="erp-kpi-value">৳ ৮৫.৬ Cr</div>
          <div className="erp-kpi-foot">Illustrative project valuation</div>
        </article>
      </section>

      <section className="erp-card">
        <div className="erp-toolbar">
          <div className="erp-tabs" role="tablist" aria-label="Project status filter">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                role="tab"
                aria-selected={activeTab === tab}
                className={`erp-tab ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
                {tab === 'All Projects' && (
                  <span style={{ marginLeft: 5 }}>({projects.length})</span>
                )}
              </button>
            ))}
          </div>
          <label className="erp-search">
            <span aria-hidden="true">⌕</span>
            <input
              type="search"
              placeholder="Search projects or location..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </label>
        </div>

        <div style={{ padding: 17 }}>
          {filteredProjects.length === 0 ? (
            <div className="erp-empty-state">
              No projects found. Try another search or status filter.
            </div>
          ) : (
            <div className="erp-project-grid">
              {filteredProjects.map((project) => (
                <article className="erp-card erp-project-card" key={project.name}>
                  <div className="erp-project-top">
                    <span className="erp-project-avatar">{project.icon}</span>
                    <div className="erp-project-title-wrap">
                      <h2 className="erp-project-title">{project.name}</h2>
                      <p className="erp-project-location">⌖ {project.location}</p>
                    </div>
                    <span className={`erp-status ${statusTone[project.status]}`}>
                      {project.status}
                    </span>
                  </div>

                  <div className="erp-project-meta">
                    <div>
                      <small>Land Area</small>
                      <strong>{project.land}</strong>
                    </div>
                    <div>
                      <small>Saleable Units</small>
                      <strong>{project.units}</strong>
                    </div>
                    <div>
                      <small>Project Value</small>
                      <strong>{project.value}</strong>
                    </div>
                  </div>

                  <div className="erp-progress-heading">
                    <span>Sales Progress</span>
                    <strong>{project.sales}%</strong>
                  </div>
                  <div
                    className="erp-progress-track"
                    role="progressbar"
                    aria-valuenow={project.sales}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`${project.name} sales progress`}
                  >
                    <div
                      className="erp-progress-fill"
                      style={{ width: `${project.sales}%` }}
                    />
                  </div>

                  <div className="erp-progress-heading">
                    <span>Construction Progress</span>
                    <strong>{project.construction}%</strong>
                  </div>
                  <div
                    className="erp-progress-track"
                    role="progressbar"
                    aria-valuenow={project.construction}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`${project.name} construction progress`}
                  >
                    <div
                      className="erp-progress-fill"
                      style={{
                        width: `${project.construction}%`,
                        background: '#6d8fd6',
                      }}
                    />
                  </div>

                  <div className="erp-project-bottom">
                    <small>Project performance overview</small>
                    <a className="erp-text-link" href="../projects">
                      View details →
                    </a>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
