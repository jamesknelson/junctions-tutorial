import React from 'react'
import { Link } from 'react-junctions'

export const Navbar = () =>
  <ul className="Navbar">
    <li><Link href="/">Junctions</Link></li>
    <li><Link href="/api-reference">API Reference</Link></li>
  </ul>