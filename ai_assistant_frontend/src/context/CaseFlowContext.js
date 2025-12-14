import React, { createContext, useContext, useMemo, useState } from 'react';

// PUBLIC_INTERFACE
export const CaseFlowContext = createContext({
  processed: false,
  setProcessed: () => {},
});

/**
 * PUBLIC_INTERFACE
 * CaseFlowProvider wraps the app with processed flag state.
 */
export function CaseFlowProvider({ children }) {
  const [processed, setProcessed] = useState(false);

  const value = useMemo(() => ({ processed, setProcessed }), [processed]);

  return (
    <CaseFlowContext.Provider value={value}>
      {children}
    </CaseFlowContext.Provider>
  );
}

// PUBLIC_INTERFACE
export function useCaseFlow() {
  /** Hook to access processed flag state. */
  return useContext(CaseFlowContext);
}
