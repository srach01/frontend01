import React from 'react'
import { Facebook } from 'lucide-react'
import { Instagram } from 'lucide-react'
import { Twitter } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div className="col-md-4 d-flex align-items-center">
                <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                    <svg className="bi" width={30} height={24}><use xlinkHref="#bootstrap" /></svg>
                </a>
                <span className="mb-3 mb-md-0 text-body-secondary">© 2024 Company, Inc</span>
            </div>
            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li className="ms-3"><a className="text-body-secondary" href="#"><Facebook /></a></li>
                <li className="ms-3"><a className="text-body-secondary" href="#"><Instagram /></a></li>
                <li className="ms-3"><a className="text-body-secondary" href="#"><Twitter /></a></li>
            </ul>
        </footer>

    )
}
