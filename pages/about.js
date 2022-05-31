import Header from "../components/Header"
import Footer from "../components/Footer"

export default function About() {
    return (
        <>
            <Header></Header>
            <div className="container">
                <h1 className="display-3 text-center">About Us</h1>
                <div className="row">
                    <div className="col-md-6">
                        <img src="logoMain.jpg" className="img-fluid" alt="" />
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
                        <p>
                            Esttheva is a young brand established in 2019 Co-founded by Vidhi Jagwani and Sanjana Bachani, with a vision to customize cosmetic treatments with exceptional advance technics and talents to refine consumer experience.<br></br><br></br>

                            The story began shortly after two childhood friends raised in Dubai moved to Mumbai post their marriage, always felt a missing edge and unsatisfying experience on their visits at beauty salons in Mumbai. That always raised a question, where every beauty salon offers almost the similar services type but differs drastically on customer experience. The equation between Quality vs Price vs Experience was always a miss match.<br></br><br></br>

                            With research, and understanding the science of entrepreneurship, they built a successful salon model. They corrected the balance between consistency in staff skills with satisfying finishing touch. They balanced the product quality with application method, and they also enhanced on the Emotional Quotient involved with each client to help get intangible benefits out of the salon.<br></br><br></br>
                        </p>
                    </div>
                </div>

                <h1 className="display-3 text-center my-5">Meet the founders</h1>
                <div className="row mb-5">
                    <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
                        <img src="/vidhi.jpg" className="img-fluid" alt="" />
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
                        <h1>Vidhi Jagwani</h1>
                        <h6>Founder</h6>
                        <p>
                            Founder of Esttheva, Vidhi Jagwani along with her entrepreneurial spirit and business acumen has 12 years experience in an IT firm. An Enthusiast in hair, beauty and nail care, she has been always working with home remedies and formulations.<br></br><br></br>

                            Vidhi founded Esttheva with the singular vision of becoming a leading salon chain.<br></br><br></br>

                            She dreams to provide services to nurture, to pamper, to heal with her home made organic and natural products in a supportive, positive and chemical free environment at Esttheva.<br></br><br></br>

                        </p>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
                        <h1>Sanjana Bachani</h1>
                        <h6>Co-Founder</h6>
                        <p>
                            Sanjana Bachani is the Co-founder of Esttheva. She believes her business exists to make her customers feel fabulous! Under Sanjanas guidance Esttheva has evolved with a strong client base.<br></br><br></br>

                            With her strong and extensive expertise in sales, operations and management skills, Sanjana since then has built up a reputation as a busy, fun and unpretentious salon.<br></br><br></br>

                            With Sanjana around you will always be greeted with a warm friendly smile.<br></br><br></br>
                        </p>
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
                        <img src="/sanjana.jpg" className="img-fluid text-center" alt="" />
                    </div>
                </div>

            </div>
            <Footer></Footer>
        </>
    )
}