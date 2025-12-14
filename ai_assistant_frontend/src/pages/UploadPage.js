import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCaseFlow } from '../context/CaseFlowContext';

export default function UploadPage() {
  const navigate = useNavigate();
  const { setProcessed } = useCaseFlow();

  const handleUploadProcess = () => {
    // Reset processed and go to processing to simulate flow
    setProcessed(false);
    navigate('/processing');
  };

  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', minHeight:'80vh'}}>
      <div className="card" style={{ width: 760 }}>
        <div className="hstack" style={{ justifyContent: 'space-between', marginBottom: 8 }}>
          <div>
            <div className="title-xl">Upload Recording</div>
            <div className="subtitle">Upload an arrangement meeting recording to automatically generate a case summary.</div>
          </div>
          <div className="hstack">
            <button className="btn ghost">Review</button>
            <button className="btn ghost" onClick={() => navigate('/upload')}>New Upload</button>
          </div>
        </div>

        <div className="card" style={{ marginTop: 16, padding: 24, borderStyle: 'dashed', borderColor: '#d1d5db' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontWeight: 600, marginBottom: 8 }}>
              Drag and drop an audio file here or select a file to upload.
            </div>
            <div className="helper">Supported audio file formats are accepted.</div>
          </div>
        </div>

        <div className="hstack" style={{ justifyContent: 'flex-end', marginTop: 16 }}>
          <button className="btn" onClick={handleUploadProcess}>Upload and Process</button>
        </div>
      </div>
    </div>
  );
}
