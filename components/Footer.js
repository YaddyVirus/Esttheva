export default function Footer() {
    return (
        <div className="container-fluid bg-light">
            <footer className="d-flex flex-wrap justify-content-between align-items-center p-5 mt-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    <a href="#" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                        <img src="/logoMain.jpg" height="64" alt="" />
                    </a>
                    <span className="mb-3 mb-md-0 text-muted">© 2022 Esttheva<br></br>Made with <ion-icon name="heart"></ion-icon> by Defiance Web Studios</span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3"><a className="text-muted"  target="_blank" rel="noreferrer" href="https://www.instagram.com/esttheva.salon/?hl=en"><ion-icon size="large" name="logo-instagram"></ion-icon></a></li>
                    <li className="ms-3"><a className="text-muted"  target="_blank" rel="noreferrer"  href="https://www.facebook.com/Esttheva-discovering-your-core-312869729392638/"><ion-icon size="large" name="logo-facebook"></ion-icon></a></li>
                    <li className="ms-3"><a className="text-muted"  target="_blank" rel="noreferrer"  href="https://api.whatsapp.com/send?phone=919372315299&text=Hello, I'd like an appointment"><ion-icon size="large" name="logo-whatsapp"></ion-icon></a></li>
                    <li className="ms-3"><a className="text-muted"  target="_blank" rel="noreferrer"  href="https://www.linkedin.com/company/esttheva/"><ion-icon size="large" name="logo-linkedin"></ion-icon></a></li>
                </ul>
            </footer>
        </div>
    )
}