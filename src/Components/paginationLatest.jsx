import { Pagination } from "@mui/material";
import { useEffect, useState } from "react";
import Pagination1 from '../Assets/pagination1.png'
import Save from '../Assets/save.png'
import Category1 from '../Assets/category1.png'
import Latest1 from '../Assets/latest1.png'
import { useLocation, useNavigate } from 'react-router-dom';
import { NavLink } from "react-router-dom";

function PaginationLatest(){
    const[page,setPage] = useState(1)
    const navigate = useNavigate();
    const location = useLocation();
    const blogs=[
      {
          img: Latest1 ,title:"Where NGOs Thrive: India's Top 5 States", subtitle:"In a country as diverse as India, NGOs play a crucial role in making people's lives better. They work tirelessly to bring about positive changes in communities across the nation. Let's explore the top five states where these NGOs thrive.", desc:[{
              head:"1. Uttar Pradesh - 29299",body:["Large Population: With a diverse population in terms of both ethnicity and socioeconomic status, Uttar Pradesh is the most populated state in India. Due to the population's total size, there are many social issues and difficult circumstances that must be resolved, giving NGOs plenty of chances to work in several areas.","Government Partnerships: The Uttar Pradesh authorities frequently collaborate with NGOs to enforce welfare schemes, supply services, and deal with socially demanding situations. These partnerships provide NGOs with resources, legitimacy, and opportunities to scale their impact."]
          },{head:"2. Maharashtra - 27788",body:["Economic Hub: Maharashtra, mainly Mumbai, is the monetary capital of India, with a robust financial system and thriving industries. This financial stability gives sufficient assets for charitable initiatives and NGO projects.","Urbanization: Mumbai and different urban facilities in Maharashtra encourage NGOs because of higher infrastructure, networking opportunities, and access to ability donors and volunteers."]},{head:"3. West Bengal - 14708",body:["Political Activism: West Bengal has a history of political activism and social movements, with NGOs often playing a crucial role in advocating for the rights of marginalized communities and promoting social justice","Government Support: The West Bengal government has implemented policies to support the nonprofit sector, providing funding, incentives, and technical assistance to NGOs working on development projects and welfare programs."]},{head:"4. Tamil Nadu - 13785",body:[" Education Hub: Tamil Nadu's high literacy rate and focus on education have produced a population that is more aware of social issues and actively involved in solving them.   ","Industrial Development: As a result of the state's industrialization and economic expansion, there are more options for organizational social responsibility (CSR) initiatives, which have encouraged partnerships between NGOs and groups."]},{head:"5. Karnataka - 11700",body:["IT Hub: Bengaluru, the capital of Karnataka, is referred to as the Silicon Valley of India and is a hub for generation agencies. This has caused the presence of a large number of NGOs specializing in regions consisting of eras for social rights, schooling, and ability improvement","Education and Innovation: Karnataka is home to prestigious academic establishments and study centers, fostering innovation and entrepreneurship in the nonprofit region"]}] ,conclusion:"In conclusion, these top five states showcase the pivotal role of NGOs in addressing social issues and driving positive change across India. From Uttar Pradesh's vast population to Maharashtra's economic prowess, and from West Bengal's rich history of activism to Tamil Nadu's focus on education, and Karnataka's innovation, each state brings its unique strengths to the table. Together, they exemplify the spirit of collaboration, resilience, and progress in India's NGO sector. " ,tags:"#NGOImpact #SocialChange #CommunityDevelopment #IndiaNGOs #GrassrootsActivism #TOP5 #States #Urbanization" ,sources:["www.give.do","www.giveindia.org",'www.ngodarpan.gov.in']
        },
          {
              img:Latest1,title:"How to determine if an NGO is legitimate: key indicators to look for",subtitle:"NGOs are essential for solving environmental and social issues and providing aid to the underprivileged. However, not all of them function with the same impact and honesty. The ability to distinguish between NGOs that are trustworthy and those that might not be as trustworthy is crucial for volunteers, donors, and persons receiving support. We'll look at a few crucial indicators in this post that will assist you in spotting real NGOs",desc:[{head:"1. Financial Transparency",body:["Legitimate NGOs consider being open and honest about their budget. They make sure that their audited annual financial statements are to be had on their websites for that reason. By doing so, anyone can see exactly how budgets are being managed and experience confidence about assisting their critical paintings."]},{head:"2. Collaboration and Partnerships",body:[" NGOs understand the importance of teamwork and often collaborate with various companies, government groups, and community contributors to create a bigger impact. When assessing the credibility of an NGO, it is essential to consider its ability to work well with others and build strong relationships. Look for organizations that have a track record of partnering with reputable groups and have a proven history of achieving significant results together. tuned report of attaining significant results together."]},{head:"3. Registration and Legal Status",body:["NGOs are frequently required to register with authorities groups under the Societies Registration Act, the Indian Trusts Act, or the Companies Act. Usually, this registration process involves the submission of the company's articles of affiliation, statement of enterprise, and proof of its exemption from taxes"]},{head:"4. Track Record and Impact",body:["Evaluate the NGO's track record and assess the impact of their work. Look for evidence of tangible outcomes, such as improved livelihoods, increased access to education or healthcare, or positive changes in policy or legislation. Legitimate NGOs measure and report on their impact using reliable indicators and data."]},{head:"5. Government Regulations:",body:["NGOs must adhere to certain government regulations, including respecting religious freedom and upholding essential human rights. Compliance with these regulations is a sign of legitimacy"]}],conclusion:"In conclusion, it's critical to consider a variety of factors when evaluating non-governmental organizations (NGOs), including their legal status, degree of goal clarity, financial responsibility, transparency in governance, program efficiency, ethical standards, and cooperative spirit. By considering these aspects, you can confidently choose to support or work with NGOs that are genuinely dedicated to creating positive change. Do your research, make the right inquiries, and verify everything before committing to any group", tags:"#NGOTransparency #SocialImpact #LegitimateNGOs #CollaborativeSpirit #EthicalStandards #NGOAccountability #CommunityPartnerships #NGORegulations #HumanRights",sources:["www.vakilsearch.com","www.arisefamily.org"]
          },
          {
            img:Latest1, title:"Rooted Realities: Navigating Education Challenges in Rural India",subtitle:"Education is the fundamental pillar that shapes society and encourages innovation. It is the starting point for transformation and opens up countless possibilities. However, in the field of education, factors like inspection, infrastructure, and network guidance are all essential to establishing a strong foundation of information and evaluating each learner's potential.",desc:[{head:"1. Teachers deficit",body:["A suitable student-teacher ratio is essential in the educational system to create conditions that are favorable to learning and to support the development of each individual student. India has nearly 1.2 lakhs schools with just one teacher. It's not possible for one instructor to bean expert in every subject"]},{head:"2. The Infrastructure Gap",body:[" lack of proper infrastructure extends beyond just the absence of classrooms, many schools face shortages of essential amenities like tables, chairs, and basic facilities such as drinking water. This inadequate infrastructure not only hampers the learning environment but also poses significant challenges to the overall educational experience and the well-being of students"]},{head:"3. Dropout rates",body:["During an ASER survey, it was found that in major rural areas, almost 50% percent of children drop out due to various reasons like financial problems, family constraints, no support, and due to a school being too far"]},{head:"4. Skill Spotlight",body:["According to a report about 57% of the youth (14-18 yrs) cannot perform simple 3 digit division. 24% of youth in rural areas aged 14-18 cannot read a Class II level text fluently in their regional language. This indicates a significant gap in foundational literacy skills"]}],conclusion:"In conclusion, at the same time as rural education faces formidable challenges like trainer shortages and insufficient infrastructure, it is important that we stay dedicated to locating answers. Regardless of their region of admission to excellent learning opportunities, we can also clear the way for a better future by putting a high value on education, training instructors, and encouraging network engagement. ",tags:"#EducationForAll #QualityEducation #SkillDevelopment #AserReport #SustainableEducation",info:[{head:"You can find the full ASER 2023 report here:",body:["https://asercentre.org/wp-content/uploads/2022/12/ASER-2023_Main-findings-1.pdf"]},{head:"Here's an article summarizing the report's key findings:",body:["https://www.hindustantimes.com/education/news/aser-2023-1-out-of-5-youth-are-unable-to-name-any-job-that-they-aspire-to-do-101705563235123.html"]}],sources:["www.smsfoundation.org","www.unesdoc.unesco.org","www.asercentre.org"]
          },
          {
            img: Latest1,title: "India's NGO Sector: Spotlight on Top 5 Important Areas and Emerging Advances",subtitle:"In India, organizations (NGOs) are essential in addressing a wide range of social, environmental, and developmental issues affecting people all throughout the country. These organizations operate across multiple industries to make a real difference in people's lives, motivated by their dedication to sustainable development and positive change. This article will examine the top five areas in India where non-governmental organizations are having a significant impact and will also suggest new areas that require funding and attention.",desc:[{head:"1. Education and Literacy:",body:[" Education is widely recognized as an essential component of development, and in India, NGOs are at the top of ensuring equal access to quality education. There are 112,044 non-governmental organizations (NGOs) committed to this cause, and they work nonstop to raise literacy rates and expand educational possibilities, particularly for underprivileged populations. NGOs are changing education and changing lives by establishing schools in remote areas and launching innovative education initiatives"]},{head:"2. Healthcare and Public Health:",body:["Millions of people in India lack access to basic healthcare services, which is a serious problem. However, there is hope as 74,745 NGOs are working to address this issue by treating patients, raising awareness, and reducing inequities. These groups are making healthcare more accessible for all through their educational initiatives and mobile clinics in remote areas."]},{head:"3. Women's Development And Empowerment:",body:["While the gender gap in India still exists, 65,329 NGOs are working to address it. These groups fight gender-based violence, offer training, and support women's rights. They're bringing about major improvements for women and girls around the nation with their initiatives for empowerment and awareness campaigns"]},{head:"4. Environment And Sustainability :",body:["50,648 NGOs in India are dedicated to protecting the environment, addressing problems including pollution and deforestation, and promoting sustainable agriculture and livelihoods"]},{head:"Sectors With Lesser Dedicated NGOs-",body:["1. Land Resources - 13,432","2. Housing - 15,266","3. Prisoners Issues - 7328","4. Scientific and Industrial Research - 11,401"]},{head:"Reasons for fewer dedicated NGOs - ",body:["Lack of Awareness:The public's limited awareness or understanding of certain sectors, such as Land Resources or Scientific Research, can lead to fewer NGOs working in these areas. This lack of awareness can make it difficult for NGOs to attract funding, volunteers, and other resources needed to sustain their operations. Without sufficient public interest and support, these sectors may not receive the attention and resources they need.","Government Dominance: In some sectors, government agencies or departments may play a predominant role in addressing issues. For example, housing policies and land management are often governed by government bodies, limiting the scope for NGO intervention. Similarly, prisoners' issues may primarily fall under the jurisdiction of correctional institutions and justice systems, reducing the space for independent NGO action."]}],conclusion:"In conclusion, India's NGO sector plays a vital role in shaping the nation's future and promoting sustainable development for all. By supporting and empowering these organizations, we can collectively work towards building a more equitable, healthy, and prosperous society for generations to come.",tags:"#NGOsIndia #SocialImpact #EducationForAll #HealthcareAccess #WomenEmpowerment #EnvironmentalSustainability #SocialJustice #AwarenessCampaigns #NGODevelopment #InclusiveGrowth #NonProfitSector",sources:["www.ngodarpan.gov.in","www.timesofindia.indiatimes.com"]
          },
          {
            img:Latest1,title:"Unlocking the Power of Carbon Offsetting: A Path to a Sustainable Future",subtitle:"In the battle against climate change, carbon offsetting has emerged as a key strategy, offering hope and tangible solutions to combat greenhouse gas emissions. But what exactly is carbon offsetting, and how does it work?\n At its core, carbon offsetting revolves around the idea of balancing out greenhouse gas emissions by investing in projects that either reduce or remove emissions elsewhere. This is achieved through the purchase of carbon credits, which serve as a unit of measurement for offsetting emissions. These credits essentially act as a currency in the carbon market, allowing businesses and individuals to compensate for their carbon footprint by supporting initiatives with positive environmental impacts.",desc:[{head:"1. Why Carbon Offsetting Matters?",body:["Carbon credits play a pivotal role in the global fight against climate change by providing a tangible means for companies to take responsibility for their carbon emissions and actively contribute to reducing the overall concentration of greenhouse gasses in the atmosphere. By investing in projects that mitigate emissions, businesses can effectively offset their own carbon footprint and help achieve emissions reduction targets.","Moreover, carbon credits incentivize the adoption of sustainable practices by offering financial rewards for emissions reductions. This encourages businesses to invest in renewable energy initiatives, energy efficiency improvements, and other environmentally friendly projects, thereby driving innovation and economic growth in the green sector."]},{head:"2. Types of Carbon Credits?",body:["Renewable energy credits: Generated from renewable energy projects such as wind farms and solar power plants.","Energy efficiency credits: Earned by implementing measures to reduce energy consumption.","Forestry credits: Generated from projects involving reforestation, afforestation, or forest conservation.","Methane capture credits: Generated by projects that capture and utilize methane emissions"]},{head:"3. How Carbon Credits Work?",body:["Measurement: Companies calculate their carbon footprint, assessing both direct and indirect emissions","Offsetting: Companies purchase carbon credits equivalent to their emissions from certified projects.","Verification: Credits are verified by certification bodies to ensure emissions reductions are genuine.","Retirement: Purchased credits are retired to prevent double-counting and claim carbon neutrality.","Reporting: Companies include carbon offsetting activities in their sustainability reports, demonstrating environmental responsibility."]},{head:"4. The Controversy Surrounding Carbon Credits?",body:["While carbon credits offer promising solutions, they are not without controversy. Critics argue that offsetting can create a false sense of security and allow companies to continue emitting without substantial efforts to reduce emissions. Concerns also exist regarding double-counting emissions reductions and accurately measuring project impacts.","To address these concerns, rigorous standards and certification processes have been established, ensuring the credibility and integrity of carbon credits."]},{head:"5. The Future of Carbon Credits?",body:["As the world moves towards sustainability, carbon credits are expected to play an increasingly significant role. Stricter standards and emerging technologies like blockchain are likely to enhance transparency and effectiveness in the carbon market."]},{head:"6. Supporting Carbon Offsetting?",body:["Individuals can support carbon offsetting by reducing their own carbon footprint and choosing companies that engage in offsetting initiatives. Businesses can prioritize sustainability, invest in renewable energy, and actively participate in the carbon market.","Together, we can unlock the power of carbon offsetting and pave the way towards a sustainable and resilient future for all. "]}],tags:"#CarbonOffsetting #ClimateAction #Sustainability #RenewableEnergy #GreenEconomy",sources:["United Nations Framework Convention on Climate Change (UNFCCC)","World Bank - Carbon Finance","Intergovernmental Panel on Climate Change (IPCC)","Environmental Protection Agency (EPA)","Carbon Trust"]          }
  ]
 
    return(
        <>

        <div className="container my-4">
            <h2 className="my-4 pt-5">Latest posts</h2>
            <div className="row justify-content-around">
            {/* <div  className="card col-md-5 col-sm-5 mx-3 mb-4 paginationLatest " >
            <img src={Latest1}  className="card-img-top" alt="..."/>
            <h5  className="card-title" style={{padding:'16px 0px 0px 16px'}}>UNLOCKING THE POWER OF CROWDFUNDING:</h5>
            <div className="childrensPost">
                <span>John Bro</span>
                <span className="count">Jan 11, 2024</span>
            </div>
            <div  className="card-body">                
                <p  className="card-text">Innovative educator fostering creativity and critical thinking in Indian classrooms. She teaches Art.</p>
                <div className="childrens">
                <a href="#"  className="purple">Read More</a>
                </div>
            </div>
            </div> */}
            {blogs.map((item,index)=>{
              return (
                <div  className="card col-md-2 col-sm-4 mb-4 paginationLatest bloggCarddd " style={{height:"57dvh !important"}} >
                <img src={item.img}  className="card-img-top" alt="..."/>
                <h5  className="card-title" style={{padding:'16px 0px 0px 16px'}}>{item.title.substring(0,30)}</h5>
                <div  className="card-body">                
                    <p  className="card-text">{item.subtitle.substring(0,75)}</p>
                    <div className="childrens">
                     {/* <img src={Save} alt="" /> */}
                    <a onClick={()=>navigate("/blogPost",{state:item})}  className="purple">Read More</a>
                    </div>
                </div>
                </div>
              )
            })}
           

            
            {/* <div  className="card col-md-5 col-sm-5 mx-3 paginationLatest " >
            <img src={Category1}  className="card-img-top" alt="..."/>
            <h5  className="card-title" style={{padding:'16px 0px 0px 16px'}}>UNLOCKING THE POWER OF CROWDFUNDING:</h5>
            <div className="childrensPost">
                <span>John Bro</span>
                <span className="count">Jan 11, 2024</span>
            </div>
            <div  className="card-body">                
                <p  className="card-text">Innovative educator fostering creativity and critical thinking in Indian classrooms. She teaches Art.</p>
                <div className="childrens">
                <a href="#"  className="purple">Read More</a>
                </div>
            </div>
            </div> */}
           
           
            </div>
        </div>
        <div className="d-inline-flex justify-content-between mb-5 p-3 w-100">
              {/* <div className="d-inline-flex  pt-2">
                <p className="mt-1">
                  <b>Go to page :</b>{" "}
                </p>
                <p className="mx-2 my-0">
                  <select className="page-box" name="pageNumber" id="">
                    <option value="number">1</option>
                  </select>
                </p>
                <p className="mt-1">
                  <b>of 10</b>
                </p>
              </div> */}
              <div className="">
                <Pagination
                  style={{ alignSelf: "center" }}
                  count={50}
                  color="primary"
                  shape="circular"
                  onChange={(event, value) => {
                    console.log(value);
                    setPage(value);
                  }}
                  defaultValue={1}
                  page={page}
                />
              </div>
            </div>
        </>
    )
   
}

export default PaginationLatest

