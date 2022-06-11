import Header from "../components/Header"
import Footer from "../components/Footer"
import Appointment from "../components/Appointment"

export default function advancedHair() {
    return (
        <>
            <Header></Header>
            <div className="container">
                <h1 className="display-3 text-center">Advanced Hair Services</h1>
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Service</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Highlights/Balayagelombre</th>
                            <td>Rs. 5000 </td>
                        </tr>
                        <tr>
                            <th scope="row">Cysteine/Keratin Treatment</th>
                            <td>Rs. 5000 </td>
                        </tr>
                        <tr>
                            <th scope="row">Smoothning Treatment</th>
                            <td>Rs. 4000 </td>
                        </tr>
                        <tr>
                            <th scope="row">Global Hair Color</th>
                            <td>Rs. 4000 </td>
                        </tr>
                        <tr>
                            <th scope="row">Crown Highlights Only</th>
                            <td>Rs. 3000 </td>
                        </tr>
                        <tr>
                            <th scope="row">Olaplex Treatment</th>
                            <td>Rs. 1800 </td>
                        </tr>
                        <tr>
                            <th scope="row">Ammonia Free Root Touch Up</th>
                            <td>Rs. 1500 </td>
                        </tr>
                        <tr>
                            <th scope="row">Root Touch up</th>
                            <td>Rs. 1200 </td>
                        </tr>
                        <tr>
                            <th scope="row">Crown Cysteinel/Keratin Only</th>
                            <td>Rs. 1200 </td>
                        </tr>
                        <tr>
                            <th scope="row">Anti Dandruff Treatment</th>
                            <td>Rs. 1000 </td>
                        </tr>
                        <tr>
                            <th scope="row">Male Hair Color</th>
                            <td>Rs. 800 </td>
                        </tr>
                        <tr>
                            <th scope="row">Self Color Root Touchup</th>
                            <td>Rs. 800 </td>
                        </tr>
                        <tr>
                            <th scope="row">Crown Root Touch Up</th>
                            <td>Rs. 800 </td>
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