import Header from "../components/Header"
import Footer from "../components/Footer"
import Appointment from "../components/Appointment"

export default function bridal() {
    return (
        <>
            <Header></Header>
            <div className="container text-center">
                <h1 className="display-3 text-center">Bridal Services</h1>
                <img src="/bridal-menu.jpg" className="img-fluid my-3" alt="" />
                <div className="container text-center">
                    <Appointment></Appointment>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}