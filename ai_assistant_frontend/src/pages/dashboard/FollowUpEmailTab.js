import React from 'react';

export default function FollowUpEmailTab() {
  return (
    <div className="vstack">
      <div className="section-title">Follow Up Email</div>
      <textarea className="textarea" placeholder="Email preview or content..." />
      <div className="hstack" style={{ justifyContent: 'flex-end' }}>
        <button className="btn ghost">Copy</button>
        <button className="btn secondary">Edit</button>
        <button className="btn">Send Preview</button>
      </div>
    </div>
  );
}
