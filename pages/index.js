import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'
import Head from 'next/head'

import styles from '../styles/Home.module.css'
import Script from 'next/script'


export default function Home() {

  return (
    <div className='container-fluid'>

      <Header></Header>

      {/* Main Carousel */}
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/hair.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/makeup.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/manipedi.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/nail.jpg" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Two section */}

      <div className='container my-5' id='section'>
        <div className='row g-5'>
          <div className='col-md-6'>
            <Link href='/hair'>
              <div className="card text-center shadow-lg rounded-3" >
                <img src="/t1.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Hair Services</h5>
                  {/* <Link href="/nails"><a href="#" className="btn btn-outline-warning">Hair Services</a></Link> */}
                </div>
              </div>
            </Link>
          </div>
          <div className='col-md-6'>
            <Link href='/advancedHair'>
              <div className="card text-center shadow-lg rounded-3">
                <img src="/t4.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Advanced Hair Treatments &#38; Process</h5>
                  {/* <Link href="/nails"><a href="#" className="btn btn-outline-warning">Show services</a></Link> */}
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className='row g-5 mt-1'>
          <div className='col-md-6'>
            <Link href='/manipedi'>
              <div className="card text-center shadow-lg rounded-3">
                <img src="/nails1.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Manicure &#38; Pedicure</h5>
                  {/* <Link href="/nails"><a href="#" className="btn btn-outline-warning">Show services</a></Link> */}
                </div>
              </div>
            </Link>
          </div>
          <div className='col-md-6'>
            <Link href='/nails'>
              <div className="card text-center shadow-lg rounded-3" >
                <img src="/t3.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Nails</h5>
                  {/* <Link href="/nails"><a href="#" className="btn btn-outline-warning">Show services</a></Link> */}
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className='row g-5 mt-1'>
          <div className='col-md-6'>
            <Link href='/beauty'>
              <div className="card text-center shadow-lg rounded-3" >
                <img src="/t5.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Skin &#38; Beauty Maintainance</h5>
                  {/* <Link href="/nails"><a href="#" className="btn btn-outline-warning">Show services</a></Link> */}
                </div>
              </div>
            </Link>
          </div>
          <div className='col-md-6'>
            <Link href='/bridal'>
              <div className="card text-center shadow-lg rounded-3">
                <img src="/bridal.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Bridal Services</h5>
                  {/* <Link href="/nails"><a href="#" className="btn btn-outline-warning">Show services</a></Link> */}
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* <div className="container my-5" id='section'>
        <div className="row g-5">
          <div className="col-md-6">
            <div className="">
              <div className="card text-center shadow-lg" >
                <img src="/t5.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Skin &#38; Beauty Maintainance</h5>
                  <Link href="/nails"><a href="#" className="btn btn-outline-warning">Show services</a></Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="">
              <div className="card text-center" >
                <img src="/t1.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Hair Services</h5>
                  <Link href="/nails"><a href="#" className="btn btn-outline-warning">Show services</a></Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="">
              <div className="card text-center">
                <img src="/t4.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Advanced Hair Treatments &#38; Processs</h5>
                  <Link href="/nails"><a href="#" className="btn btn-outline-warning">Show services</a></Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="">
              <div className="card text-center">
                <img src="/nails1.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Manicure &#38; Pedicure</h5>
                  <Link href="/nails"><a href="#" className="btn btn-outline-warning">Show services</a></Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="">
              <div className="card text-center">
                <img src="/t3.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Nails</h5>
                  <Link href="/nails"><a href="#" className="btn btn-outline-warning">Show services</a></Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="">
              <div className="card text-center">
                <img src="/bridal.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Bridal Services</h5>
                  <Link href="/nails"><a href="#" className="btn btn-outline-warning">Show services</a></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Product carousel */}
      <h1 className='text-center my-5'>Products we use</h1>
      <div className='container'>
        <div className="my-slider">
          <div><img src="/product-1.jpg" height='250' alt="" /></div>
          <div><img src="/product-2.jpg" height='250' alt="" /></div>
          <div><img src="/product-3.jpg" height='250' alt="" /></div>
          <div><img src="/product-4.jpg" height='250' alt="" /></div>
          <div><img src="/product-5.jpg" height='250' alt="" /></div>
          <div><img src="/product-6.jpg" height='250' alt="" /></div>
          <div><img src="/product-7.jpg" height='250' alt="" /></div>
          <div><img src="/product-8.jpg" height='250' alt="" /></div>
          <div><img src="/product-9.jpg" height='250' alt="" /></div>
          <div><img src="/product-10.jpg" height='250' alt="" /></div>
          <div><img src="/product-11.jpg" height='250' alt="" /></div>
          <div><img src="/product-12.jpg" height='250' alt="" /></div>
          <div><img src="/product-13.jpg" height='250' alt="" /></div>
          <div><img src="/product-14.jpg" height='250' alt="" /></div>
        </div>


        {/* Script */}
        <Script id='tester' dangerouslySetInnerHTML={{
          __html: `
          var slider = tns({
            container: '.my-slider',
            items: 6,
            autoplay: true,
            autoplayTimeout: 2000,
            gutter: 20,
            autoplayButtonOutput: false,
            controls: false,
            navPosition: 'bottom',
            nav: false,
            mouseDrag: true,
            arrowKeys: true,
            responsive: {
              300: {
                items: 2,
                gutter: 50,
                center: true,
                fixedWidth: 250,
              },
              700: {
                items: 3,
                gutter: 50,
                center: true,
                fixedWidth: 250,
              },
              1440: {
                items: 3,
                gutter: 50,
                fixedWidth: 250,
                center: true,
              }
            }
          });`
        }}>
        </Script>
      </div>

      {/* Timings and contact */}
      <div className="container col-xl-10 col-xxl-8 px-4 py-5" id='contact'>
        <div className="row align-items-center g-lg-5 py-5">
          <div className="col-lg-7 text-center text-lg-start">
            <h1 className="display-4 fw-bold lh-1 mb-3">Visit Us</h1>
            <p className="col-lg-10 fs-5">
              We&apos;d love to have you over
            </p>
            <p>
              Shop no. 2, Shangrila Vaibhav, 14th Road,<br />
              Off Linking Road near Dominos Pizza<br />
              Khar West, Mumbai - 400052<br />
              Opening hours: 10AM - 9PM All days
            </p>
          </div>
          <div className="col-md-10 mx-auto col-lg-5">
            <form className="p-4 p-md-5 border rounded-3 bg-light">
              <div className="form-floating mb-3">
                <input type="text" className="form-control" name="contactName" placeholder="What do we call you?" />
                <label htmlFor="">Your name</label>
              </div>
              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "100px" }}></textarea>
                <label htmlFor="floatingTextarea2">Say Something!</label>
              </div>
              <button className="w-100 btn btn-lg btn-primary" type="submit">Get in touch</button>
            </form>
          </div>
        </div>
      </div>

      {/* Instagram feed */}

      {/* <div className='container text-center mb-5'>
        <h1 className='display-5'>Follow us on Instagram</h1>
        <p>Feed goes here</p>
      </div> */}
      <Footer></Footer>
    </div>
  )
}
