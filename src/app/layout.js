import React from "react";

import "./styles.css";

function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        {children}
        <footer style={{ color: "red" }}>CopyRight Anything</footer>
      </body>
    </html>
  );
}

export default RootLayout;
