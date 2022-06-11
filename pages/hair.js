import Header from "../components/Header"
import Footer from "../components/Footer"
import Appointment from "../components/Appointment"

export default function Hair() {
    return (
        <>
            <Header></Header>
            <div className="container">
                <h1 className="display-3 text-center">Hair Services</h1>
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Service</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Hair Spa/Conditioning</th>
                            <td>Rs. 1100</td>
                        </tr>
                        <tr>
                            <th scope="row">Head Oil Massage with Wash</th>
                            <td>Rs. 900</td>
                        </tr>
                        <tr>
                            <th scope="row">Hair Cut Female with Wash</th>
                            <td>Rs. 900 </td>
                        </tr>
                        <tr>
                            <th scope="row">Hair Tongs</th>
                            <td>Rs. 800 </td>
                        </tr>
                        <tr>
                            <th scope="row">Hair Cut Female without Wash</th>
                            <td>Rs. 700 </td>
                        </tr>
                        <tr>
                            <th scope="row">Hair Ironing</th>
                            <td>Rs. 700 </td>
                        </tr>
                        <tr>
                            <th scope="row">Iron Curls</th>
                            <td>Rs. 700 </td>
                        </tr>
                        <tr>
                            <th scope="row">Soft Curls</th>
                            <td>Rs. 700 </td>
                        </tr>
                        <tr>
                            <th scope="row">Hair Wash & Blow Dry</th>
                            <td>Rs. 600 </td>
                        </tr>
                        <tr>
                            <th scope="row">Head Oil Massage</th>
                            <td>Rs. 600 </td>
                        </tr>
                        <tr>
                            <th scope="row">Male Head Oil Massage</th>
                            <td>Rs. 600 </td>
                        </tr>
                        <tr>
                            <th scope="row">Male Hair Spa</th>
                            <td>Rs. 600 </td>
                        </tr>
                        <tr>
                            <th scope="row">Hair Bun/Styling</th>
                            <td>Rs. 500 </td>
                        </tr>
                        <tr>
                            <th scope="row">Hair Wash & Paddle/Blast Dry</th>
                            <td>Rs. 450 </td>
                        </tr>
                        <tr>
                            <th scope="row">Blow Dry Only</th>
                            <td>Rs. 400 </td>
                        </tr>
                        <tr>
                            <th scope="row">Hair Cut Male</th>
                            <td>Rs. 400 </td>
                        </tr>
                        <tr>
                            <th scope="row">Hair Trim</th>
                            <td>Rs. 400 </td>
                        </tr>
                        <tr>
                            <th scope="row">Hair Wash Only</th>
                            <td>Rs. 200 </td>
                        </tr>
                        <tr>
                            <th scope="row">Beard Shaving</th>
                            <td>Rs. 200 </td>
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