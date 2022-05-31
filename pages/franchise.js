import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Franchise() {
    return (
        <div>
            <Header></Header>
            {/* Franchise page */}
            <div className="container col-xl-10 col-xxl-8 px-4 py-5" id='contact'>
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
                                <input type="text" className="form-control" name="contactName" placeholder="What do we call you?" value="" />
                                <label htmlFor="">Your name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="number" className="form-control" name="contactName" placeholder="What do we call you?" value="" />
                                <label htmlFor="">Contact number</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label htmlFor="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <select className="form-select" id="floatingSelect" aria-label="size">
                                    <option selected>700 sq ft</option>
                                    {/* <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option> */}
                                </select>
                                <label htmlFor="floatingSelect">Size</label>
                            </div>
                            <div class="form-floating mb-3">
                                <select class="form-select" id="floatingSelect" aria-label="investment">
                                    <option selected>20 Lakhs</option>
                                </select>
                                <label htmlFor="floatingSelect">Investment</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" name="cityName" placeholder="cityName" value="" />
                                <label htmlFor="">City of Interest</label>
                            </div>
                            <div className="form-floating mb-3">
                                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "100px" }}></textarea>
                                <label htmlFor="floatingTextarea2">Comments/Message</label>
                            </div>
                            <button className="w-100 btn btn-lg btn-primary" type="submit">Get in touch</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}