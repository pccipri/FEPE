import Image from 'next/image'

export default function Header() {
  return (
    <main>
      {/* Header component START */}

      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Pharma Ease</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/shop">Shop</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">My Account</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <span className="position-relative"><Image src="/images/cart2.svg" alt="Shopping Cart" width={27} height={27} />
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">2</span>
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/login">Log In</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">DB Actions</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      {/* Header component END */}
    </main>
  )
}