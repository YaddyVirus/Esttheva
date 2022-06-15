import styles from '../styles/Header.module.css'
import Link from "next/link"

export default function Header() {
    return (
        // <nav className="navbar navbar-expand-lg">
        //     <div className="container-fluid">
        //         <Link href="/">
        //             <a className="navbar-brand">
        //                 <img src="https://via.placeholder.com/500" height="64" alt="" />
        //             </a>
        //         </Link>

        //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <div className="collapse navbar-collapse" id="navbarSupportedContent">
        //             <div className="container-fluid d-flex justify-content-center">
        //                 <ul className="navbar-nav m-3">
        //                     <li className="nav-item me-5">
        //                         <Link href='/'>
        //                             <a className={`${styles.navlink} nav-link text-uppercase`}>Services</a>
        //                         </Link>
        //                     </li>
        //                     <li className="nav-item me-5">
        //                         <Link href='/'>
        //                             <a className={`${styles.navlink} nav-link text-uppercase`}>Specials</a>
        //                         </Link>
        //                     </li>
        //                     <li className="nav-item">
        //                         <Link href='/'>
        //                             <a className={`${styles.navlink} nav-link text-uppercase`}>Contact</a>
        //                         </Link>
        //                     </li>
        //                 </ul>
        //             </div>
        //         </div>
        //     </div>
        // </nav>

        <div className='container'>
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3">
                <a href="#" className="d-flex navbar-brand align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                    <img src="logoMain.jpg" className='d-inline-block align-text-top' height="24" alt="" />
                    Esttheva
                </a>

                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li><a href="/" className={`${styles.navlink} nav-link fs-5`}>Home</a></li>
                    <li><a href="/#section" className={`${styles.navlink} nav-link fs-5`}>Services</a></li>
                    <Link href="/offers"><li><a href="#" className={`${styles.navlink} nav-link fs-5`}>Offers</a></li></Link>
                    <Link href="/franchise"><li><a href="#" className={`${styles.navlink} nav-link fs-5`}>Franchise</a></li></Link>
                    <Link href="/about"><li><a href="#" className={`${styles.navlink} nav-link fs-5`}>About Us</a></li></Link>
                    <Link href="/#contact"><li><a href="#c" className={`${styles.navlink} nav-link fs-5`}>Contact</a></li></Link>
                </ul>

                {/* <div className="col-md-3 text-end">
                </div> */}
            </header>
        </div>

    )
}