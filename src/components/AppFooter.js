import React from "react";

const date = new Date();
const currentYear = date.getFullYear();

function AppFooter() {
  return (
    <footer>
      <span>{currentYear} Lee Minho All rights reserved.</span>
    </footer>
  );
}

export default AppFooter;
