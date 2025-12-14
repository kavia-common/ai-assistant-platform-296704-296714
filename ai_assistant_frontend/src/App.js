import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import './theme.css';
import { CaseFlowProvider } from './context/CaseFlowContext';
import Layout from './components/Layout';
import UploadPage from './pages/UploadPage';
import ProcessingPage from './pages/ProcessingPage';
import DashboardPage from './pages/DashboardPage';
import FinalReviewPage from './pages/FinalReviewPage';
import SubmissionSuccessPage from './pages/SubmissionSuccessPage';
import DeceasedInfoTab from './pages/dashboard/DeceasedInfoTab';
import ServiceDetailsTab from './pages/dashboard/ServiceDetailsTab';
import FamilyContactsTab from './pages/dashboard/FamilyContactsTab';
import ObituaryNotesTab from './pages/dashboard/ObituaryNotesTab';
import DraftObituaryTab from './pages/dashboard/DraftObituaryTab';
import ActionItemsTab from './pages/dashboard/ActionItemsTab';
import FollowUpEmailTab from './pages/dashboard/FollowUpEmailTab';
import TranscriptViewerTab from './pages/dashboard/TranscriptViewerTab';
import ComplianceTab from './pages/dashboard/ComplianceTab';

// PUBLIC_INTERFACE
function App() {
  /** Root App sets up routing and provides CaseFlowContext for processed flag. */
  return (
    <CaseFlowProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Navigate to="/upload" replace />} />
            <Route path="/upload" element={<UploadPage />} />
            <Route path="/processing" element={<ProcessingPage />} />
            <Route path="/dashboard" element={<DashboardPage />}>
              <Route index element={<Navigate to="deceased" replace />} />
              <Route path="deceased" element={<DeceasedInfoTab />} />
              <Route path="service" element={<ServiceDetailsTab />} />
              <Route path="contacts" element={<FamilyContactsTab />} />
              <Route path="obituary-notes" element={<ObituaryNotesTab />} />
              <Route path="draft-obituary" element={<DraftObituaryTab />} />
              <Route path="action-items" element={<ActionItemsTab />} />
              <Route path="follow-up-email" element={<FollowUpEmailTab />} />
              <Route path="transcript" element={<TranscriptViewerTab />} />
              <Route path="compliance" element={<ComplianceTab />} />
            </Route>
            <Route path="/final-review" element={<FinalReviewPage />} />
            <Route path="/submission-success" element={<SubmissionSuccessPage />} />
            <Route path="*" element={<Navigate to="/upload" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CaseFlowProvider>
  );
}

export default App;
