import Image from 'next/image'
import Card from '@/components/card'

export default function Home() {
  return (
    <>
      {/* image carousel */}
      <div id="carouselExampleDark" className="carousel carousel-dark slide" style={{ height: '85vh' }}>
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner" style={{ height: '85vh' }}>
          <div className="carousel-item active" data-bs-interval="10000" style={{ height: '85vh' }}>
            <Image src="/images/placeholder.jpg" className="d-block" alt="..." width={1400} height={800} layout='responsive' style={{ objectFit: "cover" }} />
            <div className="carousel-caption d-none d-md-block">
              <h5>Some medicine</h5>
              <p>Medicine description</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000" style={{ height: '85vh' }}>
            <Image src="/images/placeholder.jpg" className="d-block w-100" alt="..." width={1400} height={800} layout="responsive" style={{ objectFit: "cover" }} />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second medicine</h5>
              <p>I dont know</p>
            </div>
          </div>
          <div className="carousel-item" style={{ height: '85vh' }}>
            <Image src="/images/placeholder.jpg" className="d-block w-100" alt="..." width={1400} height={800} layout="responsive" style={{ objectFit: "cover" }} />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third medicine</h5>
              <p>Medicine description</p>
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
      <div className="container-fluid text-center" style={{ marginTop: '3vw' }}>
        <h4>Welcome to Pharma Ease!</h4>
        <p>Some text</p>

        <div className="cardContainer">
          <Card title="First card" text="Custom Text goes here." />
          <Card title="Second card" text="Custom Text goes here." />
          <Card title="Third card" text="Custom Text goes here." />
        </div>

        <h4>Maybe even more text</h4>
        <p style={{ marginBottom: '3vw' }}>Some more text that describes how cool and special and different our pharmacy is</p>

        {/* most popular products carousel */}

        <div style={{ marginBottom: '1vw' }}>
          <h3 className="mb-3 text-center">Cold and flu treatments </h3>
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

                        <div className="col-md-4 mb-3">
                          <div className="card">
                            <Image className="img-fluid" alt="..." src="/images/placeholder.jpg" width={400} height={100} />
                            <div className="card-body">
                              <h4 className="card-title">Special title treatment</h4>
                              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-4 mb-3">
                          <div className="card">
                            <Image className="img-fluid" alt="..." src="/images/placeholder.jpg" width={400} height={100} />
                            <div className="card-body">
                              <h4 className="card-title">Special title treatment</h4>
                              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-4 mb-3">
                          <div className="card">
                            <Image className="img-fluid" alt="..." src="/images/placeholder.jpg" width={400} height={100} />
                            <div className="card-body">
                              <h4 className="card-title">Special title treatment</h4>
                              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                          </div>

                        </div>

                      </div>
                    </div>

                    <div className="carousel-item">
                      <div className="row">

                        <div className="col-md-4 mb-3">
                          <div className="card">
                            <Image className="img-fluid" alt="..." src="/images/placeholder.jpg" width={400} height={100} />
                            <div className="card-body">
                              <h4 className="card-title">Special title treatment</h4>
                              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-4 mb-3">
                          <div className="card">
                            <Image className="img-fluid" alt="..." src="/images/placeholder.jpg" width={400} height={100} />
                            <div className="card-body">
                              <h4 className="card-title">Special title treatment</h4>
                              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-4 mb-3">
                          <div className="card">
                            <Image className="img-fluid" alt="..." src="/images/placeholder.jpg" width={400} height={100} />
                            <div className="card-body">
                              <h4 className="card-title">Special title treatment</h4>
                              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="carousel-item">
                      <div className="row">

                        <div className="col-md-4 mb-3">
                          <div className="card">
                            <Image className="img-fluid" alt="..." src="/images/placeholder.jpg" width={400} height={100} />
                            <div className="card-body">
                              <h4 className="card-title">Special title treatment</h4>
                              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-4 mb-3">
                          <div className="card">
                            <Image className="img-fluid" alt="..." src="/images/placeholder.jpg" width={400} height={100} />
                            <div className="card-body">
                              <h4 className="card-title">Special title treatment</h4>
                              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-4 mb-3">
                          <div className="card">
                            <Image className="img-fluid" alt="..." src="/images/placeholder.jpg" width={400} height={100} />
                            <div className="card-body">
                              <h4 className="card-title">Special title treatment</h4>
                              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
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
        </div>


        {/* accordion  */}
        <div className="accordion container" id="accordionExample" style={{ width: '85vw', marginBottom: '3vw' }}>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Accordion Item #1
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>This is the first item is accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It is also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Accordion Item #2
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>This is the second item is accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It is also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Accordion Item #3
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>This is the third item is accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It is also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
        </div>

      </div> {/* end containers */}
    </>
  )
}
