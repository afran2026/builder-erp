'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';

type ProjectStatus =
  | 'PLANNING'
  | 'ACTIVE'
  | 'ON_HOLD'
  | 'COMPLETED'
  | 'CANCELLED';

export default function EditProjectPage() {
  const params = useParams<{ locale: string; projectId: string }>();
  const bn = params.locale === 'bn';
  const projectId = decodeURIComponent(params.projectId || '');
  const projectUrl = `/${params.locale}/projects/${encodeURIComponent(projectId)}`;

  const statuses: { value: ProjectStatus; en: string; bn: string }[] = [
    { value: 'PLANNING', en: 'Planning', bn: 'পরিকল্পনাধীন' },
    { value: 'ACTIVE', en: 'Active', bn: 'চলমান' },
    { value: 'ON_HOLD', en: 'On Hold', bn: 'স্থগিত' },
    { value: 'COMPLETED', en: 'Completed', bn: 'সম্পন্ন' },
    { value: 'CANCELLED', en: 'Cancelled', bn: 'বাতিল' },
  ];

  return (
    <main className="erp-project-edit">
      <div className="erp-project-detail-breadcrumb">
        <Link href={`/${params.locale}/dashboard`}>
          {bn ? 'ড্যাশবোর্ড' : 'Dashboard'}
        </Link>
        <span>/</span>
        <Link href={`/${params.locale}/projects`}>
          {bn ? 'প্রজেক্ট' : 'Projects'}
        </Link>
        <span>/</span>
        <Link href={projectUrl}>
          {bn ? 'প্রজেক্ট বিস্তারিত' : 'Project Details'}
        </Link>
        <span>/</span>
        <strong>{bn ? 'সম্পাদনা' : 'Edit Project'}</strong>
      </div>

      <header className="erp-project-edit-header">
        <div>
          <Link href={projectUrl} className="erp-project-back-link">
            <span aria-hidden="true">←</span>
            {bn ? 'প্রজেক্ট বিস্তারিততে ফিরুন' : 'Back to Project Details'}
          </Link>
          <p className="erp-project-detail-eyebrow">
            {bn ? 'প্রজেক্ট ব্যবস্থাপনা' : 'PROJECT MANAGEMENT'}
          </p>
          <h1>{bn ? 'প্রজেক্ট সম্পাদনা' : 'Edit Project'}</h1>
          <p>
            {bn
              ? 'প্রজেক্টের মৌলিক তথ্য ও ব্যবস্থাপনাগত বিবরণ সম্পাদনা করুন।'
              : 'Update the project identity, location and management information.'}
          </p>
        </div>
        <span className="erp-project-edit-reference">
          {bn ? 'প্রজেক্ট আইডি' : 'PROJECT ID'}: {projectId.slice(0, 8)}
        </span>
      </header>

      <section className="erp-project-edit-api" role="status">
        <span aria-hidden="true">i</span>
        <div>
          <strong>
            {bn ? 'প্রজেক্টের তথ্য লোড করা যায়নি' : 'Project data is not available'}
          </strong>
          <p>
            {bn
              ? 'নিরাপদ authenticated Project API সংযুক্ত না হওয়া পর্যন্ত বিদ্যমান তথ্য লোড বা সম্পাদনা করা যাবে না। ভুল তথ্য দিয়ে কোনো ফর্ম পূরণ করা হয়নি।'
              : 'Existing project data cannot be loaded or edited until the authenticated Project API is connected. No placeholder business data has been inserted.'}
          </p>
        </div>
      </section>

      <form className="erp-card erp-project-edit-form">
        <div className="erp-project-edit-form-heading">
          <div>
            <h2>{bn ? 'প্রজেক্টের মৌলিক তথ্য' : 'Basic Project Information'}</h2>
            <p>
              {bn
                ? 'প্রতিষ্ঠানের প্রজেক্ট রেকর্ডে ব্যবহৃত তথ্য।'
                : 'Information used in the organization project record.'}
            </p>
          </div>
          <span>{bn ? 'API অপেক্ষমাণ' : 'API PENDING'}</span>
        </div>

        <fieldset disabled>
          <div className="erp-project-edit-grid">
            <label>
              <span>{bn ? 'প্রজেক্টের নাম (English)' : 'Project Name (English)'} *</span>
              <input type="text" placeholder={bn ? 'ইংরেজি নাম' : 'Enter project name'} />
              <small>{bn ? 'প্রজেক্টের অফিসিয়াল ইংরেজি নাম' : 'Official project name in English'}</small>
            </label>

            <label>
              <span>{bn ? 'প্রজেক্টের নাম (বাংলা)' : 'Project Name (Bangla)'}</span>
              <input type="text" placeholder={bn ? 'বাংলা নাম লিখুন' : 'Enter Bangla name'} />
              <small>{bn ? 'ঐচ্ছিক বাংলা নাম' : 'Optional Bangla project name'}</small>
            </label>

            <label>
              <span>{bn ? 'প্রজেক্ট কোড' : 'Project Code'} *</span>
              <input type="text" placeholder="e.g. PRJ-001" />
              <small>{bn ? 'প্রতিষ্ঠানের মধ্যে ইউনিক হতে হবে' : 'Must be unique within the organization'}</small>
            </label>

            <label>
              <span>{bn ? 'প্রজেক্টের অবস্থা' : 'Project Status'} *</span>
              <select defaultValue="PLANNING">
                {statuses.map((status) => (
                  <option key={status.value} value={status.value}>
                    {bn ? status.bn : status.en}
                  </option>
                ))}
              </select>
              <small>{bn ? 'বর্তমান ব্যবস্থাপনাগত অবস্থা' : 'Current management status'}</small>
            </label>

            <label className="erp-project-edit-full">
              <span>{bn ? 'প্রজেক্টের ঠিকানা' : 'Project Address'}</span>
              <input type="text" placeholder={bn ? 'সম্পূর্ণ ঠিকানা লিখুন' : 'Enter project address'} />
            </label>

            <label>
              <span>{bn ? 'শুরুর তারিখ' : 'Start Date'}</span>
              <input type="date" />
            </label>

            <label>
              <span>{bn ? 'সমাপ্তির সম্ভাব্য তারিখ' : 'Expected End Date'}</span>
              <input type="date" />
            </label>

            <label className="erp-project-edit-full">
              <span>{bn ? 'প্রজেক্টের বিবরণ' : 'Project Description'}</span>
              <textarea rows={5} maxLength={2000} placeholder={bn ? 'প্রজেক্ট সম্পর্কে বিস্তারিত লিখুন' : 'Describe the project'} />
              <small>{bn ? 'সর্বোচ্চ ২০০০ অক্ষর' : 'Maximum 2,000 characters'}</small>
            </label>
          </div>
        </fieldset>

        <div className="erp-project-edit-form-notice">
          {bn
            ? 'ফর্মটি API সংযোগের অপেক্ষায় আছে। তথ্য লোড ও যাচাই না হওয়া পর্যন্ত ইনপুট এবং সংরক্ষণ বন্ধ থাকবে।'
            : 'This form is waiting for API integration. Inputs and saving remain disabled until the existing record can be loaded and validated.'}
        </div>

        <div className="erp-project-edit-actions">
          <Link href={projectUrl} className="erp-button erp-button-secondary">
            {bn ? 'বাতিল করুন' : 'Cancel'}
          </Link>
          <button type="button" className="erp-button" disabled>
            {bn ? 'পরিবর্তন সংরক্ষণ (শীঘ্রই)' : 'Save Changes (Coming Soon)'}
          </button>
        </div>
      </form>
    </main>
  );
}
