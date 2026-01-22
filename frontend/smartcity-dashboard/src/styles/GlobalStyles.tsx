import React from 'react';

/**
 * GlobalStyles
 * Enterprise-grade CSS reset and base typography.
 */
export const GlobalStyles = () => (
  <style>{`
    * {
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    body {
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      color: #1a1d21;
      line-height: 1.5;
    }

    h1, h2, h3, h4 {
      font-weight: 600;
      color: #111;
    }

    input, select, button {
      font-family: inherit;
    }

    /* Standardized scrollbars for SaaS look */
    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }
    ::-webkit-scrollbar-thumb {
      background: #ccc;
      border-radius: 4px;
    }
  `}</style>
);