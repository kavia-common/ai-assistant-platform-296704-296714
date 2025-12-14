import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function FinalReviewPage() {
  const [confirmed, setConfirmed] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (confirmed) {
      navigate('/submission-success');
    }
  };

  return (
    <div className="vstack" style={{ gap: 16 }}>
      <div className="title-xl">Final Review</div>
      <div className="grid-2">
        <div className="card">
          <div className="section-title">Deceased Information</div>
          <div className="helper">Summary of deceased information...</div>
        </div>
        <div className="card">
          <div className="section-title">Service Details</div>
          <div className="helper">Summary of service details...</div>
        </div>
        <div className="card">
          <div className="section-title">Family Contacts</div>
          <div className="helper">Summary of family contacts...</div>
        </div>
        <div className="card">
          <div className="section-title">Obituary Draft</div>
          <div className="helper">Summary of obituary draft...</div>
        </div>
        <div className="card">
          <div className="section-title">Action Items</div>
          <div className="helper">Summary of action items...</div>
        </div>
        <div className="card">
          <div className="section-title">Compliance Status</div>
          <div className="helper">Summary of compliance status...</div>
        </div>
      </div>
      <div className="card">
        <label className="hstack" style={{ gap: 8 }}>
          <input type="checkbox" checked={confirmed} onChange={(e) => setConfirmed(e.target.checked)} />
          <span>I confirm that the information has been reviewed and is accurate.</span>
        </label>
        <div className="hstack" style={{ justifyContent: 'flex-end', marginTop: 12 }}>
          <button className="btn" onClick={handleSubmit} disabled={!confirmed}>Confirm and Submit</button>
        </div>
      </div>
    </div>
  );
}
