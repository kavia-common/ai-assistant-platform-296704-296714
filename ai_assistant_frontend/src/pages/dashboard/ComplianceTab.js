import React from 'react';

export default function ComplianceTab() {
  return (
    <div className="vstack">
      <div className="section-title">Compliance Checklist</div>
      <div className="vstack">
        <div className="section-title">Required Information Status</div>
        <ul>
          <li>Complete</li>
          <li>Missing</li>
          <li>Needs Review</li>
        </ul>
        <div className="section-title" style={{ marginTop: 12 }}>State Requirements</div>
        <ul>
          <li>Complete</li>
          <li>Missing</li>
          <li>Needs Review</li>
        </ul>
        <div className="helper" style={{ marginTop: 12 }}>
          Complete all required items before submitting the case.
        </div>
      </div>
    </div>
  );
}
