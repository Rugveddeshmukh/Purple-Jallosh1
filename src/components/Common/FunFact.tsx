"use client";

interface FunFact {
  iconName: string;
  number: string;
  text: string;
}

const FunFactData: FunFact[] = [
  {
    iconName: "icofont-rocket",
    number: "40",
    text: "Assistive Tech Start-Ups",
  },
  {
    iconName: "icofont-business-man",
    number: "10+",
    text: "Corporates",
  },
  {
    iconName: "icofont-handshake-deal",
    number: "10",
    text: "NGOs ",
  },
  {
    iconName: "icofont-group",
    number: "10",
    text: "Panel Discussion And Conferences ",
  },
];

const FunFact: React.FC = () => {
  return (
    <>
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
