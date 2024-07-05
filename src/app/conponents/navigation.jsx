import Link from 'next/link'
import React from 'react'

const Navigation = () => {
    return (
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
  <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
    <svg className="bi me-2" width={40} height={32}><use xlinkHref="#bootstrap" /></svg>
    <span className="fs-4">EnJoy Game</span>
  </a>
  <ul className="nav nav-pills">
    <li className="nav-item"><Link href="/" className="nav-link active" aria-current="page">Home</Link></li>
    <li className="nav-item"><Link href="/About" className="nav-link active" aria-current="page">About</Link></li>
    <li className="nav-item"><a href="#" className="nav-link active" aria-current="page">Service</a></li>
    <li className="nav-item"><a href="#" className="nav-link active" aria-current="page">Contact</a></li>
  </ul>
</header>


    )
}

export default Navigation