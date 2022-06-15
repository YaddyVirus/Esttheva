import Header from "../components/Header"
import Footer from "../components/Footer"
import Appointment from "../components/Appointment"

export default function bridal() {
    return (
        <>
            <Header></Header>
            <div className="container">
                <h1 className="display-3 text-center">Bridal Services</h1>
                <div className="accordion mt-3 w-50 mx-auto" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Hair
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className="list-group list-group-flush">
                                    <a href="#" className="list-group-item list-group-item-action">Hair Spa</a>
                                    <a href="#" className="list-group-item list-group-item-action">Hair Wash &#38; Blow Dry</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Skin
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className="list-group list-group-flush">
                                    <a href="#" className="list-group-item list-group-item-action">Diamond Facial + Hydrating Pack</a>
                                    <a href="#" className="list-group-item list-group-item-action">Face &#38; Body Bleach</a>
                                    <a href="#" className="list-group-item list-group-item-action">Body Polishing + Waxing</a>
                                    <a href="#" className="list-group-item list-group-item-action">Manicure Pedicure</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Nails
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className="list-group list-group-flush">
                                    <a href="#" className="list-group-item list-group-item-action">Acrylic Nail Extension</a>
                                    <a href="#" className="list-group-item list-group-item-action">Gel Polish on Feet</a>
                                    <a href="#" className="list-group-item list-group-item-action">Glitter Nail Art</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container text-center mt-3">
                    <Appointment></Appointment>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}