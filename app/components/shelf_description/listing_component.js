import './listing_component.css'

export default function ListingComponent(){
    return (
      <>
        <div className="mx-4 my-4 listing_component">
          <div>
            <img
              className="listing_component__image"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfyaoHCHNg599Yp2QF3p9AVBpBOnox8v8H0GCS3j05&s"
            />
          </div>
          <div className="listing_component__details">
            <div className='flex justify-between'>
              <div className="listing_component__details__title">
                <h2>Brand</h2>
              </div>
              <div className="listing_component__details__title">
                <h3>Rs. 2000</h3>
              </div>
            </div>
            <div className="flex listing_component__details__description">
              <div>Area</div>
              <div>.</div>
              <div>Location</div>
            </div>
            <div className="listing_component__details__Footfall">
              <button>Footfall</button>
            </div>
          </div>
        </div>
      </>
    );
}