import Image from 'next/image'
import Product from '@/components/product'


export default function Shop() {
  return (
    <>
      <div className='container' style={{ marginTop: '5vw', marginBottom: '5vw' }}>
        <h4 style={{marginTop: '5vw', textAlign: 'center'}}>Cough, cold and flu?</h4>
        <p style={{ marginBottom: '5vw', textAlign: 'center'}}>Worried about the winter weather? With a wide selection of cold and flu medicine, we can help relieve the impact of symptoms from a high temperature to aches and even difficulty breathing. Discover our range of cold and flu tablets and how to treat symptoms.</p>

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
