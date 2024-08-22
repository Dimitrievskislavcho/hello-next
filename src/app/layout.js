import React from 'react';

import './styles.css';

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <footer>Copyright Earth Universe Inc.</footer>
      </body>
    </html>
  );
}

export default RootLayout;
