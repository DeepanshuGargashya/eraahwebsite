import MapBackground from '../Assets/mapBackground.png'
import Location from '../Assets/Location.png'
import Proof from '../Assets/proof.png'

function Map({ heading, text }) {
    return (
        <>
            <div className='map mt-5'>
                <img style={{}} src={MapBackground} alt="" />
                <div className="image">

                    <img className='location' src={Location} alt="" />
                </div>
                <div className="content">
                    <h1>{heading}</h1>
                    <p>{text}</p>
                    <button type="button" className="submit-btn">
                        Explore now
                    </button>
                </div>
            </div>

            {/* <div className="container proof my-5">
    <h2>Proof of Progress</h2>
    <div className=" mt-3 d-flex justify-content-center">

    <div className="proof-image  col-sm-2 mx-2">
    <img className= 'mb-2' src={Proof} alt="" />
     <p className='text-center'>Reportcard1.pdf</p>
    </div>
    <div className="proof-image  col-sm-2 mx-2">
    <img className= 'mb-2' src={Proof} alt="" />
     <p className='text-center'>Reportcard1.pdf</p>
    </div>
    <div className="proof-image  col-sm-2 mx-2">
    <img className= 'mb-2' src={Proof} alt="" />
     <p className='text-center'>Reportcard1.pdf</p>
    </div>
    <div className="proof-image  col-sm-2 mx-2">
    <img className= 'mb-2' src={Proof} alt="" />
     <p className='text-center'>Reportcard1.pdf</p>
    </div>
    <div className="proof-image  col-sm-2 mx-2">
    <img className= 'mb-2' src={Proof} alt="" />
     <p className='text-center'>Reportcard1.pdf</p>
    </div>
    </div>

</div> */}


        </>
    )


}

export default Map