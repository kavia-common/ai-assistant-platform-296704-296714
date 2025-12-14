import React from 'react';

export default function DraftObituaryTab() {
  return (
    <div className="vstack">
      <div className="section-title">Draft Obituary</div>
      <textarea className="textarea" placeholder="Draft obituary content..." />
      <div className="hstack" style={{ justifyContent: 'flex-end' }}>
        <button className="btn ghost">Copy</button>
        <button className="btn secondary">Edit</button>
        <button className="btn">Regenerate</button>
      </div>
    </div>
  );
}
