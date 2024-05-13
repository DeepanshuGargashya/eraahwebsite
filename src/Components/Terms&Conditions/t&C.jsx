import ConditionsImage from '../../Assets/t&c.png'
import { NavLink } from 'react-router-dom'

function Conditions(){
    return (
        <>
        <div className="container-fluid d-flex px-0 conditions flex-wrap align-items-center">
            <div className="col-md-5 col-sm-5">
                <NavLink to={'/team'}><img style={{width:'100%'}} src={ConditionsImage} alt="" /></NavLink>
            </div>
            <div className="col-md-7 col-sm-7 conditionsRight">
                <h1 className='text-center mt-3'>Terms and Conditions</h1>
                <p className='mb-5'>Welcome to Eraah. Before using our logo design service, please carefully review the following Terms and Conditions, as they govern the contractual relationship between you (the "Client") and Eraah (the "Service Provider"). By using our logo design service, you acknowledge that you have read, understood, and agreed to these Terms and Conditions in their entirety.</p> 
                <div className="scope">
                <h5>→ Scope of Service</h5>
                <p>a. Eraah will provide custom logo design services to the Client based on the specifications provided by the Client.
</p>
                <p>b. The Service Provider will deliver the final logo design in the agreed-upon format upon completion and full payment of the service fee.</p>
            </div>
                <div className="scope">
                <h5>→ Copyright and Ownership</h5>
                <p>a. The Client acknowledges that all rights, title, and ownership of the final logo design will belong solely to the Client after full payment has been received by the Service Provider.</p>
                <p>b. Final payment ensures that only the agreed design becomes the client’s property. Any previous ideas/concepts remain the property of The Service Provider, unless any prior agreement has been made.</p>
<p>c. The Service Provider reserves the right to showcase the completed logo design in their portfolio or promotional materials.</p>
            </div>

            <div className="scope">
                <h5>→ Confidentiality</h5>
                <p>a. The Service Provider will treat all information provided by the Client as confidential and will not disclose it to third parties without the Client's explicit consent.</p>
                <p>b. The Client agrees that the final logo design, once delivered, is no longer considered confidential.</p>
            </div>
            <div className="scope">
                <h5>→ Governing Law and Dispute Resolution</h5>
                <p>a. These Terms and Conditions shall be governed by the laws of India.
</p>
                <p>b. Any dispute arising from or relating to this agreement shall be settled through good-faith negotiations between the parties. If the dispute cannot be resolved amicably, it shall be submitted to binding arbitration in accordance with the rules of Eraah.</p>
            </div>

            <p className='mt-5'>By using Eraah, you agree to abide by these Terms and Conditions. These Terms and Conditions may be updated by Eraah at any time, and the latest version will be made available on our website. It is the Client's responsibility to review these terms periodically for any changes.

</p>
<p>If you have any questions or concerns regarding these Terms and Conditions, please contact Eraah at shrey.bansal@errah.org.</p>
            </div>
            

        </div>
        </>
    )
}

export default Conditions