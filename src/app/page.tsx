import Image from 'next/image'
import Card from '@/components/card'
import Prod from '@/components/product'

export default function Home() {
  return (
    <>
      {/* image carousel */}
      <div id="carouselExampleDark" className="carousel carousel-dark slide" style={{ height: '85vh' }}>
        <div className="carousel-indicators" style={{ marginBottom: '-1.5vw' }}>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-item active" style={{ height: '85vh' }}>
          <Image src="/images/slider1.jpg" className="d-block w-100" alt="..." width={1080} height={600} style={{ width: '100%', height: '100%', objectFit: "none" }} />
          <div className="carousel-caption d-none d-md-block" style={{backgroundColor: 'rgba(0, 0, 0, 0.7)', marginLeft: '-4.05vw', marginBottom: '-1.75vw', width: '77.3vw' }}>
            <h5 style={{color: 'white', marginBottom: '0'}}>Skin Functional pigmentation skincare set for sensitive skin</h5>
          </div>
        </div>
        <div className="carousel-inner" style={{ height: '85vh' }}>
          <div className="carousel-item" data-bs-interval="10000" style={{ height: '85vh' }}>
            <Image src="/images/slider2.jpg" className="d-block w-100" alt="..." width={1080} height={600} style={{ width: '100%', height: '100%', objectFit: "none" }} />
            <div className="carousel-caption d-none d-md-block" style={{backgroundColor: 'rgba(0, 0, 0, 0.7)', marginLeft: '-4.05vw', marginBottom: '-1.75vw', width: '77.3vw' }}>
              <h5 style={{color: 'white', marginBottom: '0'}}>Omega-3 fish oil concentrate with vitamin E</h5>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000" style={{ height: '85vh' }}>
            <Image src="/images/slider3.jpg" className="d-block w-100" alt="..." width={1080} height={600} style={{ width: '100%', height: '100%', objectFit: "none" }} />
            <div className="carousel-caption d-none d-md-block" style={{backgroundColor: 'rgba(0, 0, 0, 0.7)', marginLeft: '-4.05vw', marginBottom: '-1.75vw', width: '77.3vw' }}>
              <h5 style={{color: 'white', marginBottom: '0'}}>Multivitamin and multimineral concentrate</h5>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* containers */}
      <div className="container-fluid text-center" style={{ marginTop: '5vw' }}>
        <h4 style={{ color: '#006837' }}>Welcome to Pharma Ease!</h4>
        <p>Always here for you with all the health essentials you need for you and your family</p>

        <div className="cardContainer" style={{ margin: '5vw 0' }}>
          <Card title="Pain Relief" image="/images/pain-relief.jpg" />
          <Card title="Cough, cold and flu" image="/images/cold-flu.jpg" />
          <Card title="Skin Care" image="/images/skin-care.jpg" />
        </div>

        {/* featurette  */}
        <hr className="featurette-divider" />
        <div className="row featurette" style={{ marginTop: '1vw' }}>
          <div className="col-md-7">
            <h2 className="featurette-heading fw-normal lh-1" style={{ marginTop: '10vw', marginBottom: '3vw', color: '#006837' }}>Your prescription for affordable health solutions!</h2>
            <p className="lead">Elevate your health journey with exclusive discounts and unparalleled convenience. Your path to well-being starts here, where every purchase is a prescription for savings.</p>
          </div>
          <div className="col-md-5">
            <Image src="/images/featurette.jpg" alt="..." width={500} height={500} />
          </div>
        </div>
        <hr className="featurette-divider" />

        <h4 style={{ marginTop: '5vw', color: '#006837' }}>An easy approach to your pharmacy needs</h4>
        <p style={{ marginBottom: '5vw' }}>Pharma Ease strives to provide our customers with a total health experience.</p>

        {/* most popular products carousel */}

        <div style={{ marginBottom: '1vw' }}>
          <h3 className="mb-3 text-center" style={{ marginTop: '5vw', color: '#006837' }}>Cold and flu treatments </h3>
        </div>

        <div className="carousel carousel-dark slide" id="carouselExampleLight" style={{ marginBottom: '3vw' }}>
          <div className="carousel-indicators" style={{ bottom: '-2vw' }}>
            <button type="button" data-bs-target="#carouselExampleLight" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleLight" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleLight" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>

          <div className="container">
            <div className="col-6 text-right">
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleLight" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleLight" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>

            <div className="row">
              <div className="col-12">
                <div className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">

                    <div className="carousel-item active">
                      <div className="row">

                        <div className="card-deck cardContainer">
                          <div className="row" style={{ gap: '2vw' }}>
                            <Prod name="Robitussin Dry Cough Forte medicine" price="28,90" image="/images/robitussin.jpg" description="Provides symptomatic relief of dry, irritating and hacking coughs for up to 8 hours in adults and children."/>
                            <Prod name="Sudafed decongestant tablets (12 Tablets)" price="27,90" image="/images/sudafed.jpg" description="With pseudoephedrine hydrochloride, which offers highly effective relief for nose and sinus congestion."/>
                            <Prod name="Actifed multi-action tablets (12 tablets)" price="30,90" image="/images/actifed.jpg" description="Unblocks sinuses, dries runny noses, unblocks stuffy noses and clears catarrh."/>
                          </div>
                        </div>

                      </div>
                    </div>

                    <div className="carousel-item">
                      <div className="row">

                        <div className="card-deck cardContainer">
                          <div className="row" style={{ gap: '2vw' }}>
                            <Prod name="Night Nurse Capsules (10 Capsules)" price="43,90" image="/images/night-nurse.jpg" description="Relieve tickly coughs, shivers, aches and pains, runny noses, sore throats and headaches and so aids restful sleep."/>
                            <Prod name="Strefen Intensive (16 lozenges)" price="27,90" image="/images/strefen.jpg" description="Provides effective relief from sore throat pain. Works for up to 3 hours and contains the anti-inflammatory, Flurbiprofen."/>
                            <Prod name="Actifed multi-action dry coughs (100ml)" price="34,90" image="/images/actifed-cough.jpg" description="Relieves irritating dry coughs and other symptoms such as runny nose, nasal congestion and catarrh."/>
                          </div>
                        </div>

                      </div>
                    </div>

                    <div className="carousel-item">
                      <div className="row">

                        <div className="card-deck cardContainer">
                          <div className="row" style={{ gap: '2vw' }}>
                            <Prod name="Covonia throat spray (30ml)" price="40,90" image="/images/covonia.jpg" description="Relieves the symptoms of painful, irritated sore throats. Numbs pain and fights infection."/>
                            <Prod name="Nytol Original (20 caplets)" price="27,90" image="/images/nytol.jpg" description="Contains the active ingredients Diphenhydramine to help induce sleep in those experiencing temporary insomnia."/>
                            <Prod name="Benylin Chesty Coughs (30ml)" price="33,90" image="/images/benylin.jpg" description="Works deep down in the chest to help loosen phlegm, helping clear bronchial congestion."/>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div> {/* end containers */}
    </>
  )
}
