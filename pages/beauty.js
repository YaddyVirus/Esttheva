import Header from "../components/Header"
import Footer from "../components/Footer"
import Appointment from "../components/Appointment"

export default function beauty() {
    return (
        <>
            <Header></Header>
            <div className="container">
                <h1 className="display-3 text-center">Skin & Beauty Maintenance (Male & Female)</h1>
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Service</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Body Bleaching</th>
                            <td>Rs. 2500 </td>
                        </tr>
                        <tr>
                            <th scope="row">Facial with Bleach</th>
                            <td>Rs. 1500 </td>
                        </tr>
                        <tr>
                            <th scope="row">Make Up</th>
                            <td>Rs. 1500</td>
                        </tr>
                        <tr>
                            <th scope="row">Facials</th>
                            <td>Rs. 1200 </td>
                        </tr>
                        <tr>
                            <th scope="row">Arms Legs Underarms- Rica</th>
                            <td>Rs. 1200 </td>
                        </tr>
                        <tr>
                            <th scope="row">Facial Express</th>
                            <td>Rs. 1000 </td>
                        </tr>
                        <tr>
                            <th scope="row">Arms Legs Underarms- Honey</th>
                            <td>Rs. 1000 </td>
                        </tr>
                        <tr>
                            <th scope="row">Bikini- Rica</th>
                            <td>Rs. 1000</td>
                        </tr>
                        <tr>
                            <th scope="row">Body Massage</th>
                            <td>Rs. 1000</td>
                        </tr>
                        <tr>
                            <th scope="row">Back & Abdomen Waxing</th>
                            <td>Rs. 800 </td>
                        </tr>
                        <tr>
                            <th scope="row">Bikini- Honey</th>
                            <td>Rs. 800 </td>
                        </tr>
                        <tr>
                            <th scope="row">Full Legs- Rica</th>
                            <td>Rs. 450</td>
                        </tr>
                        <tr>
                            <th scope="row">Detan only</th>
                            <td>Rs. 400 </td>
                        </tr>
                        <tr>
                            <th scope="row">Full Arms- Rica</th>
                            <td>Rs. 350 </td>
                        </tr>
                        <tr>
                            <th scope="row">Half Legs- Rica</th>
                            <td>Rs. 350 </td>
                        </tr>
                        <tr>
                            <th scope="row">Face Waxing</th>
                            <td>Rs. 350 </td>
                        </tr>
                        <tr>
                            <th scope="row">Bleach only</th>
                            <td>Rs. 350 </td>
                        </tr>
                        <tr>
                            <th scope="row">Foot Massage</th>
                            <td>Rs. 300 </td>
                        </tr>
                        <tr>
                            <th scope="row">Full Arms- Honey</th>
                            <td>Rs. 300 </td>
                        </tr>
                        <tr>
                            <th scope="row">Half Legs- Honey</th>
                            <td>Rs. 250 </td>
                        </tr>
                        <tr>
                            <th scope="row">Mirabel Face Mask</th>
                            <td>Rs. 250</td>
                        </tr>
                        <tr>
                            <th scope="row">Underarms- Rica</th>
                            <td>Rs. 200 </td>
                        </tr>
                        <tr>
                            <th scope="row">Threading Face</th>
                            <td>Rs. 150 </td>
                        </tr>
                        <tr>
                            <th scope="row">Combo Threading Eyebrows & Upperlip 140 rs Underarms- Honey</th>
                            <td>Rs. 100 </td>
                        </tr>
                        <tr>
                            <th scope="row">Side Lock Waxing</th>
                            <td>Rs. 100 </td>
                        </tr>
                        <tr>
                            <th scope="row">Chin & Neck Waxing</th>
                            <td>Rs. 100 </td>
                        </tr>
                        <tr>
                            <th scope="row">Nose Waxing</th>
                            <td>Rs. 100 </td>
                        </tr>
                        <tr>
                            <th scope="row">Threading Eyebrows</th>
                            <td>Rs. 80 </td>
                        </tr>
                        <tr>
                            <th scope="row">Threading Upperlip</th>
                            <td>Rs. 60 </td>
                        </tr>
                        <tr>
                            <th scope="row">Threading Chin</th>
                            <td>Rs. 60 </td>
                        </tr>
                        <tr>
                            <th scope="row">Threading Forehead</th>
                            <td>Rs. 50 </td>
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