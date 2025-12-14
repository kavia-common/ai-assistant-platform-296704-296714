import React from 'react';

export default function DeceasedInfoTab() {
  return (
    <div className="vstack">
      <div className="section-title">Deceased Information</div>
      <div className="grid-2">
        <div>
          <label>Full Legal Name</label>
          <input className="input" placeholder="Full Legal Name" />
        </div>
        <div>
          <label>Date of Birth</label>
          <input className="input" placeholder="Date of Birth" />
        </div>
        <div>
          <label>Date of Death</label>
          <input className="input" placeholder="Date of Death" />
        </div>
        <div>
          <label>Social Security Number</label>
          <input className="input" placeholder="Social Security Number" />
        </div>
        <div>
          <label>Age at Death</label>
          <input className="input" placeholder="Age at Death" />
        </div>
        <div>
          <label>Last Known Address</label>
          <input className="input" placeholder="Last Known Address" />
        </div>
      </div>
    </div>
  );
}
