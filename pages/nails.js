import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Nails() {
    return (
        <>
            <Header></Header>
            <div className="container">
                <h1 className="display-3 text-center">Nails</h1>
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Service</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Gel Extensions</th>
                            <td>Rs. 1500</td>
                        </tr>
                        <tr>
                            <th scope="row">Gel Refills</th>
                            <td>Rs. 1000</td>
                        </tr>
                        <tr>
                            <th scope="row">Gel Polish on Self Nails</th>
                            <td>Rs. 700</td>
                        </tr>
                        <tr>
                            <th scope="row">Nail Art</th>
                            <td>Rs. 500</td>
                        </tr>
                        <tr>
                            <th scope="row">Stick On Nails</th>
                            <td>Rs. 500</td>
                        </tr>
                        <tr>
                            <th scope="row">Gel Extensions Removal</th>
                            <td>Rs. 300</td>
                        </tr>
                        <tr>
                            <th scope="row">Gel Polish Removal</th>
                            <td>Rs. 150</td>
                        </tr>
                        
                    </tbody>
                </table>
                <div className="container text-center">
                    <button className="btn btn-primary btn-lg">Book an appointment</button>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}