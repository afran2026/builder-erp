import Link from 'next/link';

const metrics = [
  {
    label: 'Total Project Value',
    bn: 'মোট প্রজেক্ট মূল্য',
    value: '৳ ৮৫.৬ Cr',
    change: '+12.8%',
    note: 'vs. previous quarter',
    noteBn: 'আগের প্রান্তিকের তুলনায়',
    icon: '৳',
    color: 'teal',
  },
  {
    label: 'Collections This Month',
    bn: 'এই মাসের কালেকশন',
    value: '৳ ২.৪৮ Cr',
    change: '+8.4%',
    note: 'vs. last month',
    noteBn: 'গত মাসের তুলনায়',
    icon: '↗',
    color: 'blue',
  },
  {
    label: 'Active Bookings',
    bn: 'সক্রিয় বুকিং',
    value: '১২৮',
    change: '+6.2%',
    note: 'vs. previous month',
    noteBn: 'আগের মাসের তুলনায়',
    icon: '▣',
    color: 'purple',
  },
  {
    label: 'Outstanding Receivables',
    bn: 'অনাদায়ী পাওনা',
    value: '৳ ১২.৭ Cr',
    change: '−2.1%',
    note: 'vs. previous month',
    noteBn: 'আগের মাসের তুলনায়',
    icon: '◷',
    color: 'orange',
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
    bn: 'জমি ক্রয়ের অনুমোদন',
    subtitle: 'Green Valley · Land acquisition',
    status: 'Pending',
    statusBn: 'অপেক্ষমাণ',
    tone: 'warning',
    icon: '⌂',
  },
  {
    title: 'Vendor Payment Request',
    bn: 'ভেন্ডর পেমেন্ট অনুরোধ',
    subtitle: 'Metro Heights · Procurement',
    status: 'Review',
    statusBn: 'পর্যালোচনা',
    tone: 'info',
    icon: '৳',
  },
  {
    title: 'Construction Work Order',
    bn: 'নির্মাণ কাজের আদেশ',
    subtitle: 'Lake View · Construction',
    status: 'Pending',
    statusBn: 'অপেক্ষমাণ',
    tone: 'warning',
    icon: '⌁',
  },
];

const transactions = [
  {
    id: 'TRX-DEMO-0081',
    date: '18 Nov 2026',
    party: 'Rahim Ahmed',
    project: 'Green Valley',
    type: 'Installment',
    amount: '৳ ৫,০০,০০০',
    status: 'Completed',
    tone: 'success',
  },
  {
    id: 'TRX-DEMO-0080',
    date: '17 Nov 2026',
    party: 'ABC Construction',
    project: 'Metro Heights',
    type: 'Vendor Payment',
    amount: '৳ ৮,৫০,০০০',
    status: 'Pending',
    tone: 'warning',
  },
  {
    id: 'TRX-DEMO-0079',
    date: '16 Nov 2026',
    party: 'Nusrat Jahan',
    project: 'Lake View',
    type: 'Booking Money',
    amount: '৳ ২,০০,০০০',
    status: 'Completed',
    tone: 'success',
  },
  {
    id: 'TRX-DEMO-0078',
    date: '15 Nov 2026',
    party: 'M/S Rahman Traders',
    project: 'Green Valley',
    type: 'Material Purchase',
    amount: '৳ ৩,২৫,০০০',
    status: 'Under Review',
    tone: 'info',
  },
];

export default async function DashboardPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const bn = locale === 'bn';

  return (
    <>
      <section className="erp-page-heading">
        <div>
          <p className="erp-eyebrow">
            {bn ? 'সামগ্রিক চিত্র · ওভারভিউ' : 'OVERVIEW · BUSINESS SUMMARY'}
          </p>
          <h1 className="erp-page-title">
            {bn ? 'এক্সিকিউটিভ ড্যাশবোর্ড' : 'Executive Dashboard'}
          </h1>
          <p className="erp-page-description">
            {bn
              ? 'আপনার রিয়েল এস্টেট ব্যবসার প্রকল্প, বিক্রয় ও আর্থিক কার্যক্রমের সারসংক্ষেপ।'
              : 'A summary of projects, sales and financial activity across your real estate business.'}
          </p>
        </div>
        <div className="erp-heading-actions">
          <Link className="erp-button" href={`/${locale}/projects`}>
            + {bn ? 'প্রজেক্ট দেখুন' : 'View Projects'}
          </Link>
        </div>
      </section>

      <div className="erp-demo-notice" role="note">
        <strong>{bn ? 'ডেমো ডেটা' : 'DEMO DATA'}</strong>
        <span>
          {bn
            ? 'নিচের সংখ্যাগুলো নমুনা তথ্য। বাস্তব হিসাব দেখতে API ও কোম্পানির ডেটা সংযুক্ত করতে হবে।'
            : 'Figures below are illustrative samples. Connect the company database and API before using them as real business figures.'}
        </span>
      </div>

      <section className="erp-kpi-grid" aria-label={bn ? 'ব্যবসার গুরুত্বপূর্ণ সূচক' : 'Business key metrics'}>
        {metrics.map((item) => (
          <article className="erp-card erp-kpi-card" key={item.label}>
            <div className="erp-kpi-top">
              <span className="erp-kpi-label">{bn ? item.bn : item.label}</span>
              <span className={`erp-kpi-icon ${item.color}`}>{item.icon}</span>
            </div>
            <div className="erp-kpi-value">{item.value}</div>
            <div className="erp-kpi-foot">
              <span className="erp-trend-positive">{item.change}</span>
              <span>{bn ? item.noteBn : item.note}</span>
            </div>
          </article>
        ))}
      </section>

      <section className="erp-dashboard-grid">
        <article className="erp-card erp-chart-card">
          <div className="erp-card-header">
            <div>
              <h2 className="erp-card-title">
                {bn ? 'কালেকশন পর্যালোচনা' : 'Collection Overview'}
              </h2>
              <p className="erp-card-subtitle">
                {bn ? 'মাসভিত্তিক নমুনা কালেকশন · ২০২৬' : 'Illustrative monthly collection · 2026'}
              </p>
            </div>
            <div className="erp-chart-legend">
              <span><i className="erp-legend-dot" /> 2026</span>
              <span><i className="erp-legend-dot previous" /> {bn ? 'পূর্ববর্তী' : 'Previous'}</span>
            </div>
          </div>
          <div className="erp-chart" role="img" aria-label={bn ? 'নমুনা মাসিক কালেকশন চার্ট' : 'Illustrative monthly collection chart'}>
            {collections.map((item) => (
              <div className="erp-chart-column" key={item.month}>
                <div className="erp-chart-bars">
                  <div className="erp-chart-bar previous" style={{ height: `${item.previous}%` }} />
                  <div className="erp-chart-bar primary" style={{ height: `${item.value}%` }} />
                </div>
                <span className="erp-chart-month">{item.month}</span>
              </div>
            ))}
          </div>
          <p className="erp-card-subtitle erp-chart-footnote">
            {bn
              ? 'নমুনা চার্ট · Accounting API সংযুক্ত হলে প্রকৃত তথ্য দেখাবে।'
              : 'Sample chart · Actual figures will appear after connecting the accounting API.'}
          </p>
        </article>

        <article className="erp-card">
          <div className="erp-card-header">
            <div>
              <h2 className="erp-card-title">{bn ? 'অনুমোদনের অপেক্ষায়' : 'Pending Approvals'}</h2>
              <p className="erp-card-subtitle">
                {bn ? 'যেসব বিষয়ে সিদ্ধান্ত প্রয়োজন' : 'Items requiring your attention'}
              </p>
            </div>
            <span className="erp-status warning">03 {bn ? 'টি' : 'Pending'}</span>
          </div>
          <div className="erp-approval-list">
            {approvals.map((item) => (
              <div className="erp-approval-item" key={item.title}>
                <span className="erp-approval-icon">{item.icon}</span>
                <div className="erp-approval-info">
                  <strong>{bn ? item.bn : item.title}</strong>
                  <small>{item.subtitle}</small>
                </div>
                <span className={`erp-status ${item.tone}`}>
                  {bn ? item.statusBn : item.status}
                </span>
              </div>
            ))}
          </div>
          <div className="erp-card-action">
            <span className="erp-card-subtitle">
              {bn ? 'অনুমোদন মডিউল এখনো সংযুক্ত হয়নি' : 'Approval module is not connected yet'}
            </span>
          </div>
        </article>
      </section>

      <section className="erp-card">
        <div className="erp-card-header">
          <div>
            <h2 className="erp-card-title">{bn ? 'সাম্প্রতিক লেনদেন' : 'Recent Transactions'}</h2>
            <p className="erp-card-subtitle">
              {bn ? 'প্রকল্পভিত্তিক নমুনা আর্থিক কার্যক্রম' : 'Sample financial activities across projects'}
            </p>
          </div>
          <span className="erp-status neutral">{bn ? 'নমুনা' : 'Sample'}</span>
        </div>
        <div className="erp-table-wrap">
          <table className="erp-table">
            <thead>
              <tr>
                <th>{bn ? 'লেনদেন আইডি' : 'Transaction ID'}</th>
                <th>{bn ? 'তারিখ' : 'Date'}</th>
                <th>{bn ? 'পার্টি / কাস্টমার' : 'Party / Customer'}</th>
                <th>{bn ? 'প্রজেক্ট' : 'Project'}</th>
                <th>{bn ? 'ধরন' : 'Type'}</th>
                <th>{bn ? 'পরিমাণ' : 'Amount'}</th>
                <th>{bn ? 'অবস্থা' : 'Status'}</th>
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
