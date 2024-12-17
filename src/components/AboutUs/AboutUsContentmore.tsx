import React from 'react';

const PurpleJalloshDetails: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    fontFamily: 'Poppins_Fallback_9d9b8c,_poppines',
    margin: '20px',
    lineHeight: '1.6',
    color: '#000',
  };

  const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: 'purple', // Purple tone
    marginBottom: '20px',
    fontSize:'2rem',
  };

  const sectionStyle: React.CSSProperties = {
    marginBottom: '20px',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '1.5rem',
    color: '#000',
    marginBottom: '10px',
  };

  const listStyle: React.CSSProperties = {
    paddingLeft: '20px',
    listStyleType: 'disc',
  };

  const paragraphStyle: React.CSSProperties = {
    fontWeight: 'bold',
    color: 'purple',
    textAlign: 'center',
    marginTop: '20px',
    fontSize: '1.2rem',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>
        Why:- Pimpri-Chinchwad Municipal Corporation (PCMC) as the host for Purple Jallosh offers strategic benefits that align perfectly with the event goals
      </h1>
      <section style={sectionStyle}>
        <h2 style={titleStyle}>Community Engagement and Reach</h2>
        <ul style={listStyle}>
          <li>
            PCMCs diverse and substantial population ensures broad engagement and significant impact, allowing us to connect with a wide audience.
          </li>
          <li>
            The municipality hosts a network of local organizations, NGOs, and businesses, enhancing the events support base and effectiveness.
          </li>
        </ul>
      </section>

      <section style={sectionStyle}>
        <h2 style={titleStyle}>Support for PWD Organizations</h2>
        <ul style={listStyle}>
          <li>
            PCMC includes numerous registered PWD organizations, making it an ideal area to strengthen collaboration and relevance.
          </li>
          <li>
            PCMCs commitment to improving accessibility and inclusivity aligns with the events goals, reinforcing shared values.
          </li>
        </ul>
      </section>

      <section style={sectionStyle}>
        <h2 style={titleStyle}>Strategic Location</h2>
        <ul style={listStyle}>
          <li>
            PCMCs central location in the Pune Metropolitan Region facilitates higher attendance and engagement from various areas.
          </li>
          <li>
            The municipality provides the necessary facilities and infrastructure, including venues, transportation, and accommodation.
          </li>
        </ul>
      </section>

      <section style={sectionStyle}>
        <h2 style={titleStyle}>Promoting Local Development</h2>
        <ul style={listStyle}>
          <li>
            The event will stimulate local economic activity and highlight PCMCs role in social development.
          </li>
          <li>
            Partnering with PCMC strengthens community relations and demonstrates a collaborative approach to addressing local needs, creating a positive social impact.
          </li>
        </ul>
      </section>

      <p style={paragraphStyle}>
        Purple Jallosh is more than an event it is a celebration of inclusivity and joy, set in a location that embodies these values. By hosting the event in PCMC, we leverage the municipalitys strengths to drive meaningful change and foster a supportive community for all.
      </p>
    </div>
  );
};

export default PurpleJalloshDetails;
