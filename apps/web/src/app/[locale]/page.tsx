export default async function Home({
  params
}: {
  params: Promise<{locale: string}>
}) {
  const {locale} = await params;
  const bn = locale === "bn";

  return (
    <main style={{padding: 32}}>
      <h1>Builder-Erp</h1>
      <p>{bn ? "রিয়েল এস্টেট ম্যানেজমেন্ট সিস্টেম" :
        "Real Estate Management System"}</p>
      <p>{bn ? "প্রকল্প, হিসাব ও বিক্রয় ব্যবস্থাপনা" :
        "Project, Accounting and Sales Management"}</p>
    </main>
  );
}
