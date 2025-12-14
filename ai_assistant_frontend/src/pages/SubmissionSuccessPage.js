import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function SubmissionSuccessPage() {
  const navigate = useNavigate();
  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', minHeight:'80vh'}}>
      <div className="card" style={{ width: 600, textAlign: 'center' }}>
        <div className="title-xl">Submission Successful</div>
        <div className="subtitle">The case has been successfully prepared and submitted.</div>
        <div className="hstack" style={{ justifyContent: 'center', marginTop: 16 }}>
          <button className="btn secondary" onClick={() => navigate('/dashboard')}>View Case</button>
          <button className="btn" onClick={() => navigate('/upload')}>Start New Upload</button>
        </div>
      </div>
    </div>
  );
}
