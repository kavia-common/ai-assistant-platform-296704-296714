import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import './layout.css';

/**
 * PUBLIC_INTERFACE
 * Layout composes the persistent sidebar and routed main content.
 */
export default function Layout() {
  return (
    <div className="layout-root">
      <Sidebar />
      <main className="layout-content">
        <Outlet />
      </main>
    </div>
  );
}
