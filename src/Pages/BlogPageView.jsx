import React from "react";
import { useLocation } from "react-router-dom";
export default function BlogPageView() {
  const location = useLocation();
  return (
    <>
      <div className="BlogPageView" style={{ marginTop: '120px' }}>
        <div className="container">

          <div className="banner text-center">
            <img
              src={location?.state?.photoUrl || ""}
              alt="banner-image"
              width={'50%'}
            />
            <div className="heading-content">
              <h5>{location?.state?.title}</h5>
            </div>
          </div>
          {
            location?.state?.content !== '' && location?.state?.content?.length > 0 ?
            <div className="content" style={{marginTop:'30px'}}>
            <div dangerouslySetInnerHTML={{ __html: location?.state?.content }} />
          </div>
          :''}
        </div>
      </div>
    </>
  );
}
