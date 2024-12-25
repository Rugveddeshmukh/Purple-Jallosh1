"use client";

interface FunFact {
  iconName: string;
  number: string;
  text: string;
}

const FunFactData: FunFact[] = [
  {
    iconName: "icofont-business-man",
    number: "30+",
    text: "Corporate DE & Initiatives",
  },
  {
    iconName: "icofont-rocket",
    number: "40+",
    text: "Assistive Tech Start-Ups",
  },
  
  {
    iconName: "icofont-handshake-deal",
    number: "50+ ",
    text: "National and Local NGOs",
  },
  {
    iconName: "icofont-group",
    number: "150+",
    text: "Purple Solvathon Participants ",
  },
];

const FunFact: React.FC = () => {
  return (
    <> 
      {/* <div className="section-title ms-lg-5 ms-md-3 ms-2 pt-3"
      style={{ zIndex: 0 }}
      >
        <span className="d-block">Breaking Barriers</span>
          <h2>Building Dreams</h2>
      </div> */}

<div className="about-area ptb-80 ">
        <div className="container">
          <div className="row h-10 ">
            <div className="col-lg-6">
              <div className="about-content"style={{lineHeight:'40px'}}>
              <span className="d-block">Breaking Barriers</span>
              <h2>Building Dreams</h2>
                
              {/*  <Link href="#" className="btn btn-secondary">
                  Register Now
                </Link> */}
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-image">
             
                {/* <Image
                  src="/images/Whatsimg2.jpg"
                  className="about-img2"
                  alt="about"
                  width={309}
                  height={424}
                /> */}
      

               {/* <Link href="/" className="btn btn-primary">
                  Explore More About
                </Link>*/}
              </div>
            </div>
          </div>
        </div>
      </div>

        
      <div className="funfacts-area ptb-120">
        <div className="container">
          <div className="row justify-content-center">
            {FunFactData &&
              FunFactData.slice(0, 4).map((value, i) => (
                <div className="col-lg-3 col-6 col-sm-6" key={i}>
                  <div className="single-funfact">
                    <div className="icon">
                      <i className={value.iconName}></i>
                    </div>
                    <h3>{value.number}</h3>
                    <p>{value.text}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FunFact;
