import React from 'react';
import { Outlet } from 'react-router-dom';

export default function DashboardPage() {
  return (
    <div className="vstack" style={{ gap: 16 }}>
      <div className="card" style={{ borderLeft: '4px solid var(--primary)' }}>
        <div className="title-xl">Processing Complete. Review the extracted information below.</div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr .9fr', gap: 16 }}>
        <div className="vstack" style={{ gap: 16 }}>
          <div className="card">
            <Outlet />
          </div>
        </div>

        <div className="vstack" style={{ gap: 16 }}>
          <div className="card">
            <div className="title-xl" style={{ fontSize: 18 }}>AI Generated Obituary Draft</div>
            <div className="helper">This draft was generated from the arrangement meeting and can be edited.</div>
            <div className="vstack" style={{ marginTop: 12 }}>
              <label className="section-title" htmlFor="style">Writing Style</label>
              <select id="style" className="select">
                <option>Formal</option>
                <option>Heartfelt</option>
                <option>Celebratory</option>
              </select>
              <div className="hstack" style={{ justifyContent: 'flex-end', marginTop: 8 }}>
                <button className="btn ghost">Copy</button>
                <button className="btn secondary">Edit</button>
                <button className="btn">Regenerate</button>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="title-xl" style={{ fontSize: 18 }}>Compliance Checklist</div>
            <div className="section-title">Required Information Status</div>
            <ul style={{ marginTop: 6 }}>
              <li>Complete</li>
              <li>Missing</li>
              <li>Needs Review</li>
            </ul>
            <div className="section-title" style={{ marginTop: 12 }}>State Requirements</div>
            <ul style={{ marginTop: 6 }}>
              <li>Complete</li>
              <li>Missing</li>
              <li>Needs Review</li>
            </ul>
            <div className="helper" style={{ marginTop: 12 }}>
              Complete all required items before submitting the case.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
