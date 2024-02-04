import Product from '@/components/product'


export default function Shop() {
  return (
    <>
      <div className='container' style={{ marginTop: '5vw', marginBottom: '5vw' }}>
        <div style={{width: '100%', height: '5vw', backgroundColor: 'rgba(0, 0, 0, 0.8)'}}>
            <h5 className="text-white text-center" style={{lineHeight: '5vw'}}>Products</h5>
        </div>

        <div className="card-deck cardContainer" style={{marginTop: '4vw'}}>
          <div className="row" style={{ gap: '2vw' }}>
            <Product name="Panadol Advance 500mg Paracetamol tablets and some more text to test something" price="15" image="/images/panadol.jpg" />
            <Product name="Panadol advance pain relief (16 tablets)" price="15" image="/images/placeholder.jpg" />
            <Product name="Panadol advance pain relief (16 tablets)" price="15" image="/images/placeholder.jpg" />
          </div>
        </div>

        <div className="card-deck cardContainer">
          <div className="row" style={{ gap: '2vw' }}>
            <Product name="Panadol advance pain relief (16 tablets)" price="15" image="/images/placeholder.jpg" />
            <Product name="Panadol advance pain relief (16 tablets)" price="15" image="/images/placeholder.jpg" />
            <Product name="Panadol advance pain relief (16 tablets)" price="15" image="/images/placeholder.jpg" />
          </div>
        </div>

        <div className="card-deck cardContainer">
          <div className="row" style={{ gap: '2vw' }}>
            <Product name="Panadol advance pain relief (16 tablets)" price="15" image="/images/placeholder.jpg" />
            <Product name="Panadol advance pain relief (16 tablets)" price="15" image="/images/placeholder.jpg" />
            <Product name="Panadol advance pain relief (16 tablets)" price="15" image="/images/placeholder.jpg" />
          </div>
        </div>
      </div>
    </>
  )
}
