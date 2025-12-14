import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCaseFlow } from '../context/CaseFlowContext';

const steps = [
  'Transcribing audio',
  'Analyzing conversation',
  'Extracting case details',
  'Drafting obituary content',
  'Identifying action items',
  'Preparing case dashboard'
];

export default function ProcessingPage() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();
  const { setProcessed } = useCaseFlow();

  useEffect(() => {
    // Simulate progress: advance step every 700ms
    if (current < steps.length) {
      const t = setTimeout(() => setCurrent(c => c + 1), 700);
      return () => clearTimeout(t);
    } else {
      // Done: set processed and navigate to dashboard
      setProcessed(true);
      const t = setTimeout(() => navigate('/dashboard'), 500);
      return () => clearTimeout(t);
    }
  }, [current, navigate, setProcessed]);

  const percent = Math.min(100, Math.round((current / steps.length) * 100));

  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', minHeight:'80vh'}}>
      <div className="card" style={{ width: 720 }}>
        <div className="title-xl">Processing Your Recording</div>
        <div className="subtitle">This may take a few minutes.</div>

        <div className="vstack" style={{ marginTop: 16 }}>
          {steps.map((s, i) => (
            <div key={s} className="hstack" style={{ gap: 8 }}>
              <div style={{
                width: 10, height: 10, borderRadius: 6,
                background: i < current ? 'var(--primary)' : '#d1d5db'
              }} />
              <div style={{ color: i < current ? 'var(--text)' : '#6b7280' }}>{s}</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 16 }}>
          <div className="helper" style={{ marginBottom: 6 }}>Progress</div>
          <div style={{ height: 10, width: '100%', background: '#e5e7eb', borderRadius: 999 }}>
            <div style={{
              height: 10,
              width: `${percent}%`,
              background: 'linear-gradient(90deg, rgba(37,99,235,1) 0%, rgba(245,158,11,1) 100%)',
              borderRadius: 999,
              transition: 'width .3s ease'
            }} />
          </div>
        </div>

        <div className="helper" style={{ marginTop: 16 }}>
          Please keep this window open while processing is in progress.
        </div>
      </div>
    </div>
  );
}
