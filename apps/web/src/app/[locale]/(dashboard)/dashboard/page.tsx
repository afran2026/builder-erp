const kpis = [
  {
    label: 'Total Project Value',
    value: '৳ ৮৫.৬ Cr',
    english: 'BDT 85.6 Crore',
    change: '+12.8%',
    note: 'vs. previous quarter',
    icon: '৳',
    color: 'teal',
    positive: true,
  },
  {
    label: 'Collections This Month',
    value: '৳ ২.৪৮ Cr',
    english: 'BDT 2.48 Crore',
    change: '+8.4%',
    note: 'vs. last month',
    icon: '↗',
    color: 'blue',
    positive: true,
  },
  {
    label: 'Active Bookings',
    value: '১২৮',
    english: '128 active bookings',
    change: '+6.2%',
    note: 'vs. previous month',
    icon: '▣',
    color: 'purple',
    positive: true,
  },
  {
    label: 'Outstanding Receivables',
    value: '৳ ১২.৭ Cr',
    english: 'BDT 12.7 Crore',
    change: '−2.1%',
    note: 'vs. previous month',
    icon: '◷',
    color: 'orange',
    positive: true,
  },
];

const collections = [
  { month: 'Jan', value: 43, previous: 28 },
  { month: 'Feb', value: 56, previous: 36 },
  { month: 'Mar', value: 47, previous: 33 },
  { month: 'Apr', value: 69, previous: 42 },
  { month: 'May', value: 62, previous: 45 },
  { month: 'Jun', value: 82, previous: 53 },
  { month: 'Jul', value: 72, previous: 48 },
  { month: 'Aug', value: 91, previous: 61 },
  { month: 'Sep', value: 76, previous: 56 },
  { month: 'Oct', value: 100, previous: 65 },
  { month: 'Nov', value: 87, previous: 59 },
  { month: 'Dec', value: 95, previous: 68 },
];

const approvals = [
  {
    title: 'Land Purchase Approval',
    subtitle: 'Green Valley · Land acquisition',
    status: 'Pending',
    tone: 'warning',
    icon: '⌂',
  },
  {
    title: 'Vendor Payment Request',
    subtitle: 'Metro Heights · Procurement',
    status: 'Review',
    tone: 'info',
    icon: '৳',
  },
  {
    title: 'Construction Work Order',
    subtitle: 'Lake View · Construction',
    status: 'Pending',
    tone: 'warning',
    icon: '⌁',
  },
];

const transactions = [
  {
    id: 'TRX-2026-0081',
    date: '18 Nov 2026',
    party: 'Rahim Ahmed',
    project: 'Green Valley',
    type: 'Installment',
    amount: '৳ ৫,০০,০০০',
    status: 'Completed',
    tone: 'success',
  },
  {
    id: 'TRX-2026-0080',
    date: '17 Nov 2026',
    party: 'ABC Construction',
    project: 'Metro Heights',
    type: 'Vendor Payment',
    amount: '৳ ৮,৫০,০০০',
    status: 'Pending',
    tone: 'warning',
  },
  {
    id: 'TRX-2026-0079',
    date: '16 Nov 2026',
    party: 'Nusrat Jahan',
    project: 'Lake View',
    type: 'Booking Money',
    amount: '৳ ২,০০,০০০',
    status: 'Completed',
    tone: 'success',
  },
  {
    id: 'TRX-2026-0078',
    date: '15 Nov 2026',
    party: 'M/S Rahman Traders',
    project: 'Green Valley',
    type: 'Material Purchase',
    amount: '৳ ৩,২৫,০০০',
    status: 'Under Review',
    tone: 'info',
  },
];

export default function DashboardPage() {
  return (
    <>
      <section className="erp-page-heading">
        <div>
          <p className="erp-eyebrow">OVERVIEW · সামগ্রিক চিত্র</p>
          <h1 className="erp-page-title">Executive Dashboard</h1>
          <p className="erp-page-description">
            Welcome back, Admin. Here is what is happening across your business today.
          </p>
        </div>
        <div className="erp-heading-actions">
          <button className="erp-button erp-button-secondary" type="button">
            ↓ Export Report
          </button>
          <a className="erp-button" href="../projects">
            + New Project
          </a>
        </div>
      </section>

      <section className="erp-kpi-grid" aria-label="Business key metrics">
        {kpis.map((item) => (
          <article className="erp-card erp-kpi-card" key={item.label}>
            <div className="erp-kpi-top">
              <span className="erp-kpi-label">{item.label}</span>
              <span className={`erp-kpi-icon ${item.color}`}>{item.icon}</span>
            </div>
            <div className="erp-kpi-value">{item.value}</div>
            <div className="erp-kpi-foot">
              <span className="erp-trend-positive">{item.change}</span>
              <span>{item.note}</span>
            </div>
          </article>
        ))}
      </section>

      <section className="erp-dashboard-grid">
        <article className="erp-card erp-chart-card">
          <div className="erp-card-header">
            <div>
              <h2 className="erp-card-title">Collection Overview</h2>
              <p className="erp-card-subtitle">Monthly collection performance · 2026</p>
            </div>
            <div className="erp-chart-legend">
              <span><i className="erp-legend-dot" /> 2026</span>
              <span><i className="erp-legend-dot" style={{ background: '#bcece5' }} /> Previous</span>
            </div>
          </div>
          <div className="erp-chart" role="img" aria-label="Illustrative monthly collection chart">
            {collections.map((item) => (
              <div className="erp-chart-column" key={item.month}>
                <div className="erp-chart-bars">
                  <div
                    className="erp-chart-bar"
                    style={{ height: `${item.previous}%` }}
                  />
                  <div
                    className="erp-chart-bar primary"
                    style={{ height: `${item.value}%` }}
                  />
                </div>
                <span className="erp-chart-month">{item.month}</span>
              </div>
            ))}
          </div>
          <p className="erp-card-subtitle" style={{ padding: '8px 19px 0' }}>
            Illustrative demo data · Amounts should be connected to the accounting API.
          </p>
        </article>

        <article className="erp-card">
          <div className="erp-card-header">
            <div>
              <h2 className="erp-card-title">Pending Approvals</h2>
              <p className="erp-card-subtitle">Items requiring your attention</p>
            </div>
            <span className="erp-status warning">03 Pending</span>
          </div>
          <div className="erp-approval-list">
            {approvals.map((item) => (
              <div className="erp-approval-item" key={item.title}>
                <span className="erp-approval-icon">{item.icon}</span>
                <div className="erp-approval-info">
                  <strong>{item.title}</strong>
                  <small>{item.subtitle}</small>
                </div>
                <span className={`erp-status ${item.tone}`}>{item.status}</span>
              </div>
            ))}
          </div>
          <div style={{ padding: '0 17px 14px' }}>
            <a href="../approvals" className="erp-text-link">View all approvals →</a>
          </div>
        </article>
      </section>

      <section className="erp-card">
        <div className="erp-card-header">
          <div>
            <h2 className="erp-card-title">Recent Transactions</h2>
            <p className="erp-card-subtitle">Latest financial activities across projects</p>
          </div>
          <a href="../accounting/transactions" className="erp-text-link">
            View all transactions →
          </a>
        </div>
        <div className="erp-table-wrap">
          <table className="erp-table">
            <thead>
              <tr>
                <th>Transaction ID</th>
                <th>Date</th>
                <th>Party / Customer</th>
                <th>Project</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((item) => (
                <tr key={item.id}>
                  <td><span className="erp-table-id">{item.id}</span></td>
                  <td>{item.date}</td>
                  <td><strong>{item.party}</strong></td>
                  <td>{item.project}</td>
                  <td>{item.type}</td>
                  <td><span className="erp-amount">{item.amount}</span></td>
                  <td><span className={`erp-status ${item.tone}`}>{item.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
