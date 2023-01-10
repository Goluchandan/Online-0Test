import React from "react";
import './navbar.css'
export default function Navbar() {
  return (
    <main>
      <section>
        <nav className="navbar-container">
            <div>
               <h3>Title</h3>
            </div>
            <div>
                <p>Home</p>
                <p>About</p>
                <p>Blog</p>
                <p>Content</p>
                <button>Button</button>
            </div>
        </nav>
      </section>
    </main>
  );
}
