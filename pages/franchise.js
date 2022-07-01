import Header from "../components/Header"
import Footer from "../components/Footer"
import Link from "next/link"
import styles from "../styles/Franchise.module.css"

export default function Franchise() {
    return (
        <div>
            <Header></Header>
            {/* Franchise page v2 */}
            <div className="container-fluid h-100 bg-black text-light text-end fw-bold text-uppercase row">
                <div className="col-md-6">
                    <img src="/franch-1.png" className="img-fluid" alt="" />
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center">
                    <h1 className={styles.title}>Own a franchise</h1>
                    <h1 className={`${styles.golden} text-end`}>Be your own boss</h1>
                </div>
            </div>
            <div className="container-fluid row my-5 px-5 ">
                <div className="col-md-6">
                    <h1 className={`${styles.someDiv} display-1 fw-bold text-uppercase`}>Why Esttheva?</h1>
                    <ul className="lead">
                        <li>Our unique Support Model guarantees you growth, unlike anything else in the salon industry.</li>
                        <li>Being an Esttheva franchisee, you&apos;ll be at the cornerstone of franchising.</li>
                        <li>This billion dollar industry is just a few steps away from you. It&apos;s a chance to be competitive and to have some growth in the process.</li>
                        <li>At Esttheva, we provide our consumers with the newest fashion trends in a comfortable and modern setting, employing the greatest beauty products available.</li>
                        <li>With one of the greatest Hair, Skin &#38; Nails salon franchises in the industry, you may join us and be your own boss.</li>
                    </ul>
                    <div className="text-center my-3">
                        <Link href="/franchise#franchiseContact">
                            <button className="btn btn-outline-warning btn-lg rounded-pill">Join us</button>
                        </Link>
                    </div>
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
                    <img src="/franch-2.png" className="img-fluid" alt="" />
                </div>

            </div>

            {/* Franchise models div */}
            <div className="contianer-fluid ">
                <div className={`${styles.shadowBox} container p-0`}>
                    <h3 className="p-3">We&apos;re one of the few brands that allows partners to leave day to day operations to the brand and enjoy themselves</h3>

                    {/* Franchise Models */}
                    {/* Model A */}
                    <div className={`${styles.modelTitle} bg-dark`}>
                        <p className="lead px-5 py-3 fw-bold">Franchise Model A</p>
                    </div>
                    <div className="container p-5">
                        <div className="row">
                            <div className="col-md-2 d-flex flex-column justify-content-center align-items-center">
                                <img src="/franch-icon-1.png" className="img-fluid" alt="" />
                                <p className="fw-bold mt-2">Mininum Area Required</p>
                                <p>700 sq ft</p>
                            </div>
                            <div className="col-md-2 d-flex flex-column justify-content-center align-items-center">
                                <img src="/franch-icon-2.png" className="img-fluid" alt="" />
                                <p className="fw-bold mt-2">Total Investment</p>
                                <p>INR 22-30 Lacs</p>
                            </div>
                            <div className="col-md-2 d-flex flex-column justify-content-center align-items-center">
                                <img src="/franch-icon-3.png" className="img-fluid" alt="" />
                                <p className="fw-bold mt-2">Franchise Fee</p>
                                <p>INR 6 Lacs</p>
                            </div>
                            <div className="col-md-2 d-flex flex-column justify-content-center align-items-center">
                                <img src="/franch-icon-4.png" className="img-fluid" alt="" />
                                <p className="fw-bold mt-2">Average Payback</p>
                                <p>20-30 Months</p>
                            </div>
                            <div className="col-md-2 d-flex flex-column justify-content-center align-items-center">
                                <img src="/franch-icon-5.png" className="img-fluid" alt="" />
                                <p className="fw-bold mt-2">Mode of Operations</p>
                                <p>FOCO/FOFO</p>
                            </div>
                            <div className="col-md-2 d-flex flex-column justify-content-center align-items-center">
                                <img src="/hand-shake.png" className="img-fluid" alt="" />
                                <p className="fw-bold mt-2">Agreement Term</p>
                                <p>5 years</p>
                            </div>
                        </div>
                    </div>

                    {/* Model B */}
                    <div className={`${styles.modelTitle} bg-dark `}>
                        <p className="lead px-5 py-3 fw-bold">Franchise Model B</p>
                    </div>
                    <div className="container p-5">
                        <div className="row">
                            <div className="col-md-2 d-flex flex-column justify-content-center align-items-center">
                                <img src="/franch-icon-1.png" className="img-fluid" alt="" />
                                <p className="fw-bold mt-2">Mininum Area Required</p>
                                <p>700 sq ft</p>
                            </div>
                            <div className="col-md-2 d-flex flex-column justify-content-center align-items-center">
                                <img src="/franch-icon-2.png" className="img-fluid" alt="" />
                                <p className="fw-bold mt-2">Total Investment</p>
                                <p>INR 22-30 Lacs</p>
                            </div>
                            <div className="col-md-2 d-flex flex-column justify-content-center align-items-center">
                                <img src="/franch-icon-3.png" className="img-fluid" alt="" />
                                <p className="fw-bold mt-2">Franchise Fee</p>
                                <p>INR 6 Lacs</p>
                            </div>
                            <div className="col-md-2 d-flex flex-column justify-content-center align-items-center">
                                <img src="/franch-icon-4.png" className="img-fluid" alt="" />
                                <p className="fw-bold mt-2">Average Payback</p>
                                <p>20-30 Months</p>
                            </div>
                            <div className="col-md-2 d-flex flex-column justify-content-center align-items-center">
                                <img src="/franch-icon-5.png" className="img-fluid" alt="" />
                                <p className="fw-bold mt-2">Mode of Operations</p>
                                <p>FOCO/FOFO</p>
                            </div>
                            <div className="col-md-2 d-flex flex-column justify-content-center align-items-center">
                                <img src="/hand-shake.png" className="img-fluid" alt="" />
                                <p className="fw-bold mt-2">Agreement Term</p>
                                <p>5 years</p>
                            </div>
                        </div>
                    </div>

                    {/* Model C */}
                    <div className={`${styles.modelTitle} bg-dark`}>
                        <p className="lead px-5 py-3 fw-bold">Franchise Model C</p>
                    </div>
                    <div className="container p-5">
                        <div className="row">
                            <div className="col-md-2 d-flex flex-column justify-content-center align-items-center">
                                <img src="/franch-icon-1.png" className="img-fluid" alt="" />
                                <p className="fw-bold mt-2">Mininum Area Required</p>
                                <p>700 sq ft</p>
                            </div>
                            <div className="col-md-2 d-flex flex-column justify-content-center align-items-center">
                                <img src="/franch-icon-2.png" className="img-fluid" alt="" />
                                <p className="fw-bold mt-2">Total Investment</p>
                                <p>INR 22-30 Lacs</p>
                            </div>
                            <div className="col-md-2 d-flex flex-column justify-content-center align-items-center">
                                <img src="/franch-icon-3.png" className="img-fluid" alt="" />
                                <p className="fw-bold mt-2">Franchise Fee</p>
                                <p>INR 6 Lacs</p>
                            </div>
                            <div className="col-md-2 d-flex flex-column justify-content-center align-items-center">
                                <img src="/franch-icon-4.png" className="img-fluid" alt="" />
                                <p className="fw-bold mt-2">Average Payback</p>
                                <p>20-30 Months</p>
                            </div>
                            <div className="col-md-2 d-flex flex-column justify-content-center align-items-center">
                                <img src="/franch-icon-5.png" className="img-fluid" alt="" />
                                <p className="fw-bold mt-2">Mode of Operations</p>
                                <p>FOCO/FOFO</p>
                            </div>
                            <div className="col-md-2 d-flex flex-column justify-content-center align-items-center">
                                <img src="/hand-shake.png" className="img-fluid" alt="" />
                                <p className="fw-bold mt-2">Agreement Term</p>
                                <p>5 years</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Franchise page form*/}
            <div className="container col-xl-10 col-xxl-8  py-5" id='franchiseContact'>
                <div className="row align-items-center g-lg-5 py-5">
                    <div className="col-lg-7 text-center text-lg-start">
                        <h1 className="display-4 fw-bold lh-1 mb-3">Work with us</h1>
                        <p className="col-lg-10 fs-5">
                            Apply for a franchise today
                        </p>
                        <p>
                            We are committed to meeting and exceeding the expectations of our guests through our unremitting dedication to every aspect of service. To serve customers with integrity by being loyal to them, the company and ourselves. To give superior customer service consistently with happy relentless attitude while standing within affordable budget for families.<br></br><br></br>
                            As a result, we will create extraordinary value for our franchise seekers.
                        </p>
                    </div>
                    <div className="col-md-10 mx-auto col-lg-5">
                        <form className="p-4 p-md-5 border rounded-3 bg-light">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" name="contactName" placeholder="What do we call you?" />
                                <label htmlFor="">Your name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="number" className="form-control" name="contactName" placeholder="What do we call you?" />
                                <label htmlFor="">Contact number</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label htmlFor="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <select className="form-select" id="floatingSelect" aria-label="size">
                                    <option>700 sq ft</option>
                                </select>
                                <label htmlFor="floatingSelect">Size</label>
                            </div>
                            <div className="form-floating mb-3">
                                <select className="form-select" id="floatingSelect" aria-label="investment">
                                    <option>25-30 Lakhs</option>
                                </select>
                                <label htmlFor="floatingSelect">Investment</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" name="cityName" placeholder="cityName" />
                                <label htmlFor="">City of Interest</label>
                            </div>
                            <div className="form-floating mb-3">
                                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "100px" }}></textarea>
                                <label htmlFor="floatingTextarea2">Comments/Message</label>
                            </div>
                            <button className="w-100 btn btn-lg btn-warning" type="submit">Get in touch</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}