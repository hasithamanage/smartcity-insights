import React from 'react';

interface Props {
  children: React.ReactNode;
  title: string;
  extraHeader?: React.ReactNode;
}

export function AppLayout({ children, title, extraHeader }: Props) {
  return (
    <div style={pageWrapperStyle}>
      <header style={headerStyle}>
        <h2 style={{ margin: 0 }}>{title}</h2>
        {extraHeader && <div>{extraHeader}</div>}
      </header>
      <main>{children}</main>
    </div>
  );
}

const pageWrapperStyle: React.CSSProperties = {
  maxWidth: '1000px',
  margin: '2rem auto',
  padding: '0 1rem',
};

const headerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '2rem',
  paddingBottom: '1rem',
  borderBottom: '1px solid #eee'
};