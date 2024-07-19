import Link from "next/link";

import NavLink from "./NavLink";

export default function MainNavigationHeader() {
  return (
    <header class="main-header">
      <div className="logo">
        <Link href="/">NextNews</Link>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink href="/news">News</NavLink>
          </li>
          <li>
            <NavLink href="/archive">Archive</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
