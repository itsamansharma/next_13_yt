import React from "react";
import Link from "next/link";
const HomePage = () => {
  return <div>
    <h1>Home Page</h1>
    <ul>
      <li><Link href='/'>Home</Link></li>
      <li><Link href='/about'>about</Link></li>
      <li><Link href='/about/team'>team</Link></li>
    </ul>
  </div>;
};

export default HomePage;
