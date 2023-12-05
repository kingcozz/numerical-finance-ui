/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';

const defaultVal = {
  pending: false,
  setPending: () => {},
};

export const ProjectInfoContext = React.createContext(defaultVal);

export default function useProjectInfo() {
  return React.useContext(ProjectInfoContext);
}

export function ProjectInfoProvider({ children }) {
  const [pending, setPending] = useState(false);

  return (
    <ProjectInfoContext.Provider
      value={{
        pending,
        setPending,
      }}
      children={children}
    />
  );
}
