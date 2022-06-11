import Header from "../components/Header"
import Footer from "../components/Footer"
import Appointment from "../components/Appointment"

export default function manipedi() {
    return (
        <>
            <Header></Header>
            <div className="container">
                <h1 className="display-3 text-center">Manicure & Pedicure</h1>
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Service</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Foot Logix Pedicure</th>
                            <td>Rs. 1200  </td>
                        </tr>
                        <tr>
                            <th scope="row">Paraffin Pedicure</th>
                            <td>Rs. 1000  </td>
                        </tr>
                        <tr>
                            <th scope="row">Aroma Pedicure</th>
                            <td>Rs. 800  </td>
                        </tr>
                        <tr>
                            <th scope="row">Signature Pedicure</th>
                            <td>Rs. 700  </td>
                        </tr>
                        <tr>
                            <th scope="row">Mani Pedi Combo</th>
                            <td>Rs. 700  </td>
                        </tr>
                        <tr>
                            <th scope="row">Manicure</th>
                            <td>Rs. 400  </td>
                        </tr>
                        <tr>
                            <th scope="row">Nail Polish Hand/Feet</th>
                            <td>Rs. 100 </td>
                        </tr>
                        <tr>
                            <th scope="row">Cut & File</th>
                            <td>Rs. 100 </td>
                        </tr>
                    </tbody>
                </table>
                <div className="container text-center">
                    <Appointment></Appointment>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}