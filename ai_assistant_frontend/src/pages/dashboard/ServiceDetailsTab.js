import React from 'react';

export default function ServiceDetailsTab() {
  return (
    <div className="vstack">
      <div className="section-title">Service Details</div>
      <div className="grid-2">
        <div>
          <label>Type of Service</label>
          <input className="input" placeholder="Type of Service" />
        </div>
        <div>
          <label>Service Date</label>
          <input className="input" placeholder="Service Date" />
        </div>
        <div>
          <label>Service Time</label>
          <input className="input" placeholder="Service Time" />
        </div>
        <div>
          <label>Service Location</label>
          <input className="input" placeholder="Service Location" />
        </div>
        <div>
          <label>Special Requests</label>
          <input className="input" placeholder="Special Requests" />
        </div>
      </div>
    </div>
  );
}
