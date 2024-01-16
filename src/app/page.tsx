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
              <p>I  m losing my mind</p>
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
      <div className="container-fluid text-center" style={{ marginTop: '5vw' }}>
        <h4>Welcome to Pharma Ease!</h4>
        <p>Some text</p>

        <div className="cardContainer" style={{margin: '5vw 0'}}>
          <Card title="Custom Title" text="Custom Text goes here." image="/images/placeholder.jpg" />
          <Card title="Custom Title" text="Custom Text goes here." image="/images/placeholder.jpg" />
          <Card title="Custom Title" text="Custom Text goes here." image="/images/placeholder.jpg" />
        </div>

        {/* featurette  */}
        <hr className="featurette-divider"/>
        <div className="row featurette" style={{ marginTop: '5vw' }}>
          <div className="col-md-7">
            <h2 className="featurette-heading fw-normal lh-1" style={{ marginTop: '12vw' }}>First featurette heading. <span className="text-muted">Itll blow your mind.</span></h2>
            <p className="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
          </div>
          <div className="col-md-5">
            <Image src="/images/placeholder.jpg" alt="..." width={500} height={500} />
          </div>
        </div>
        <hr className="featurette-divider"/>

        <h4 style={{marginTop: '5vw'}}>Maybe even more text</h4>
        <p style={{ marginBottom: '5vw' }}>Some more text that describes how cool and special and different our pharmacy is</p>

        {/* most popular products carousel */}

        <div style={{ marginBottom: '1vw' }}>
          <h3 className="mb-3 text-center" style={{marginTop: '5vw'}}>Cold and flu treatments </h3>
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

      </div> {/* end containers */}
    </>
  )
}
