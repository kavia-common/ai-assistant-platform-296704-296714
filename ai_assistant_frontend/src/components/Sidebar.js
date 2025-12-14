import React from 'react';
import { NavLink } from 'react-router-dom';
import { useCaseFlow } from '../context/CaseFlowContext';
import './sidebar.css';

function NavItem({ to, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        'nav-item' + (isActive ? ' active' : '')
      }
    >
      {label}
    </NavLink>
  );
}

/**
 * PUBLIC_INTERFACE
 * Sidebar renders primary navigation and, when processed, dashboard tabs and compliance link.
 */
export default function Sidebar() {
  const { processed } = useCaseFlow();

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="app-title">Arrangement Assistant</div>
      </div>

      <div className="sidebar-section">
        <div className="section-label">Primary Navigation</div>
        <div className="nav-list">
          <NavItem to="/upload" label="Upload Recording" />
          <NavItem to="/processing" label="Processing" />
          <NavItem to="/dashboard" label="Case Dashboard" />
          <NavItem to="/final-review" label="Final Review" />
          <NavItem to="/submission-success" label="Submission Success" />
        </div>
      </div>

      {processed && (
        <>
          <div className="sidebar-section">
            <div className="section-label">Dashboard Tabs</div>
            <div className="nav-list">
              <NavItem to="/dashboard/deceased" label="Deceased Information" />
              <NavItem to="/dashboard/service" label="Service Details" />
              <NavItem to="/dashboard/contacts" label="Family Contacts" />
              <NavItem to="/dashboard/obituary-notes" label="Obituary Notes" />
              <NavItem to="/dashboard/draft-obituary" label="Draft Obituary" />
              <NavItem to="/dashboard/action-items" label="Action Items" />
              <NavItem to="/dashboard/follow-up-email" label="Follow Up Email" />
              <NavItem to="/dashboard/transcript" label="Transcript Viewer" />
            </div>
          </div>

          <div className="sidebar-section">
            <div className="section-label">Compliance</div>
            <div className="nav-list">
              <NavItem to="/dashboard/compliance" label="Compliance Checklist" />
            </div>
          </div>
        </>
      )}
    </aside>
  );
}
