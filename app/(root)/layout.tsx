import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      header
      {children}
      footer
    </main>
  );
};

export default RootLayout;
