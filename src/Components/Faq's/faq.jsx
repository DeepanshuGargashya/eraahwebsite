import { useState } from "react"

function Faq(){

  const[readMore, setReadMore]= useState(false)

  const handleReadMore= ()=>{
    setReadMore(!readMore)
  }

    return(
        <>
        <div className="container faq">
            <h1 className="text-center mb-5">Frequently Asked Questions</h1>

           
<div class="accordion" id="accordionExample">
  <div class="accordion-item mt-3">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      What is Eraah about?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Eraah is a marketplace where Non-Governmental Organizations (NGOs) can list themselves to raise funds for their causes. Users can discover and support various NGOs and their projects through our platform.
      </div>
    </div>
  </div>

  <div class="accordion-item mt-3">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      How does Eraah work?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      NGOs can sign up and create profiles showcasing their missions, projects, and fundraising goals. Users can explore these profiles, donate to specific projects, or contribute to the organization’s overall mission.
      </div>
    </div>
  </div>

  <div class="accordion-item mt-3">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      How can NGOs list themselves on Eraah?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      NGOs can easily create accounts on our platform and provide details about their organization, including their mission, projects, and financial transparency. Our team verifies each NGO to ensure authenticity and credibility.
      </div>
    </div>
  </div>


 <div class="accordion-item mt-3">
  <h2 class="accordion-header" id="headingFour">
    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
    Is it safe to donate through Eraah?
    </button>
  </h2>
  <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
    <div class="accordion-body">
    Yes, we prioritize the security and privacy of our users’ donations. We use trusted payment processors and encryption methods to safeguard financial transactions. Additionally, we vet all NGOs to ensure they meet our standards of transparency and accountability.
    </div>
  </div>
</div>

<div class="accordion-item mt-3">
  <h2 class="accordion-header" id="headingFive">
    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
    Can individuals or businesses support multiple NGOs through Eraah?
    </button>
  </h2>
  <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
    <div class="accordion-body">
    Absolutely! Users have the flexibility to support multiple NGOs and projects based on their interests and philanthropic goals. Whether you’re an individual donor, a corporate sponsor, or a community organization, you can make a difference through our platform.
    </div>
  </div>
</div>

<div class="accordion-item my-3">
  <h2 class="accordion-header" id="headingSix">
    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
    How much of my donation goes to the NGO?
    </button>
  </h2>
  <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
    <div class="accordion-body">
    Eraah operates on a transparent fee structure, clearly outlining any applicable processing fees or commissions. We strive to maximize the impact of each donation by minimizing overhead costs and ensuring a significant portion reaches the intended NGO.
    </div>
  </div>
</div>


{ readMore && 
<> 
<div class="accordion-item mt-3">
  <h2 class="accordion-header" id="headingSeven">
    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
    Can NGOs outside of India join Eraah?
    </button>
  </h2>
  <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
    <div class="accordion-body">
    Yes, Eraah welcomes NGOs from around the world to join our platform and connect with supporters globally. Our mission is to empower NGOs of all sizes and locations to access funding and raise awareness for their causes.
    </div>
  </div>
</div>

<div class="accordion-item mt-3">
  <h2 class="accordion-header" id="headingEight">
    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
    How can I get involved with Eraah beyond donating?
    </button>
  </h2>
  <div id="collapseEight" class="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
    <div class="accordion-body">
    In addition to donating, users can support NGOs by spreading awareness through social media, volunteering their time or skills, or even hosting fundraising events. Reach out to us for partnership opportunities or to learn more about how you can make a difference.

    </div>
  </div>
</div>

<div class="accordion-item my-3">
  <h2 class="accordion-header" id="headingNine">
    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
    How does Eraah ensure the legitimacy of listed NGOs?
    </button>
  </h2>
  <div id="collapseNine" class="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
    <div class="accordion-body">
    We conduct thorough vetting processes to verify the authenticity and credibility of NGOs before they are allowed to list on our platform. This includes reviewing their legal status, financial transparency, and impact metrics.
    </div>
  </div>
</div>

<div class="accordion-item mt-3">
  <h2 class="accordion-header" id="headingTen">
    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
    How often are NGO profiles updated on Eraah?
    </button>
  </h2>
  <div id="collapseTen" class="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#accordionExample">
    <div class="accordion-body">
    NGOs have the ability to regularly update their profiles with new projects, progress reports, and fundraising goals. Users can stay informed about their favorite NGOs and track the impact of their contributions in real-time.
    </div>
  </div>
</div>

<div class="accordion-item mt-3">
  <h2 class="accordion-header" id="headingEleven">
    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
    Can I get a tax receipt for my donation through Eraah?
    </button>
  </h2>
  <div id="collapseEleven" class="accordion-collapse collapse" aria-labelledby="headingEleven" data-bs-parent="#accordionExample">
    <div class="accordion-body">
    Yes, all of the NGOs listed on our platform provide tax receipts for eligible donations. You'll receive detailed information about tax-deductible contributions directly from the respective NGOs
    </div>
  </div>
</div>

<div class="accordion-item my-3">
  <h2 class="accordion-header" id="headingTwelve">
    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">
    What types of projects do NGOs list on Eraah?
    </button>
  </h2>
  <div id="collapseTwelve" class="accordion-collapse collapse" aria-labelledby="headingTwelve" data-bs-parent="#accordionExample">
    <div class="accordion-body">
    NGOs list a wide range of projects spanning various causes, including education, healthcare, environmental conservation, humanitarian aid, and more. You can explore different categories and find projects aligned with your interests.
    </div>
  </div>
</div>

<div class="accordion-item mt-3">
  <h2 class="accordion-header" id="headingThirteen">
    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThirteen" aria-expanded="false" aria-controls="collapseThirteen">
    Are there any fees for creating an account or browsing projects on Eraah?
    </button>
  </h2>
  <div id="collapseThirteen" class="accordion-collapse collapse" aria-labelledby="headingThirteen" data-bs-parent="#accordionExample">
    <div class="accordion-body">
    No, there are no fees for users to create accounts or browse projects on our platform. You only incur transaction fees when making a donation, and these are transparently disclosed during the checkout process.
    </div>
  </div>
</div>

<div class="accordion-item mt-3">
  <h2 class="accordion-header" id="headingFourteen">
    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFourteen" aria-expanded="false" aria-controls="collapseFourteen">
    Can I contact an NGO directly through Eraah?
    </button>
  </h2>
  <div id="collapseFourteen" class="accordion-collapse collapse" aria-labelledby="headingFourteen" data-bs-parent="#accordionExample">
    <div class="accordion-body">
    Yes, our platform facilitates communication between users and NGOs. You can reach out to NGOs directly through their profiles to ask questions, express interest in volunteering, or inquire about partnership opportunities.
    </div>
  </div>
</div>

<div class="accordion-item my-3">
  <h2 class="accordion-header" id="headingFifteen">
    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFifteen" aria-expanded="false" aria-controls="collapseFifteen">
    What happens if an NGO doesn't reach its fundraising goal?
    </button>
  </h2>
  <div id="collapseFifteen" class="accordion-collapse collapse" aria-labelledby="headingFifteen" data-bs-parent="#accordionExample">
    <div class="accordion-body">
    If an NGO doesn't reach its fundraising goal within the specified timeframe, donors have the option to redirect their contributions to other projects or initiatives within the same organization. Alternatively, the NGO may extend the fundraising period or adjust the project scope.
    </div>
  </div>
</div>

<div class="accordion-item mt-3">
  <h2 class="accordion-header" id="headingSixteen">
    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSixteen" aria-expanded="false" aria-controls="collapseSixteen">
    How does Eraah ensure the transparency of NGOs' financials and impact?
    </button>
  </h2>
  <div id="collapseSixteen" class="accordion-collapse collapse" aria-labelledby="headingSixteen" data-bs-parent="#accordionExample">
    <div class="accordion-body">
    We encourage NGOs to provide detailed financial reports, impact metrics, and success stories on their profiles. Additionally, we may conduct periodic audits or evaluations to ensure compliance with our transparency standards.
    </div>
  </div>
</div>

<div class="accordion-item mt-3">
  <h2 class="accordion-header" id="headingSeventeen">
    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeventeen" aria-expanded="false" aria-controls="collapseSeventeen">
    Can I set up recurring donations to support an NGO long-term?
    </button>
  </h2>
  <div id="collapseSeventeen" class="accordion-collapse collapse" aria-labelledby="headingSeventeen" data-bs-parent="#accordionExample">
    <div class="accordion-body">
    Yes, many users choose to set up recurring donations to provide ongoing support to their favorite NGOs. You can customize the frequency and amount of your recurring contributions to fit your budget and philanthropic goals.
    </div>
  </div>
</div>

<div class="accordion-item my-3">
  <h2 class="accordion-header" id="headingEighten">
    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEighteen" aria-expanded="false" aria-controls="collapseEighteen">
    What measures does Eraah take to prevent fraud or misuse of donations?
    </button>
  </h2>
  <div id="collapseEighteen" class="accordion-collapse collapse" aria-labelledby="headingEighteen" data-bs-parent="#accordionExample">
    <div class="accordion-body">
    We employ robust security measures and fraud detection mechanisms to safeguard against fraudulent activities. Additionally, we monitor transactions closely and investigate any suspicious behavior reported by users.
    </div>
  </div>
</div>

<div class="accordion-item mt-3">
  <h2 class="accordion-header" id="headingNineteen">
    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNineteen" aria-expanded="false" aria-controls="collapseNineteen">
    Can I see testimonials or reviews from other donors about the NGOs on Eraah?
    </button>
  </h2>
  <div id="collapseNineteen" class="accordion-collapse collapse" aria-labelledby="headingNineteen" data-bs-parent="#accordionExample">
    <div class="accordion-body">
    Yes, we encourage users to leave reviews and testimonials based on their experiences with NGOs and projects. These reviews provide valuable feedback to both NGOs and potential donors, fostering transparency and accountability.
    </div>
  </div>
</div>

<div class="accordion-item mt-3">
  <h2 class="accordion-header" id="headingTwenty">
    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwenty" aria-expanded="false" aria-controls="collapseTwenty">
    How can I stay updated on new projects and initiatives on Eraah?
    </button>
  </h2>
  <div id="collapseTwenty" class="accordion-collapse collapse" aria-labelledby="headingTwenty" data-bs-parent="#accordionExample">
    <div class="accordion-body">
    You can subscribe to our newsletter or follow us on social media to receive regular updates about new NGOs, projects, and fundraising campaigns. Additionally, you can opt in to receive notifications about specific NGOs or causes of interest.
    </div>
  </div>
</div>
</>
}

  

  <a className="d-flex justify-content-center" onClick={handleReadMore}> {readMore? 'See less': 'See more'}</a>
</div>
        </div>
        </>
    )
}

export default Faq