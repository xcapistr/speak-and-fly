const ServiceCard = ({ title, subtitle, description, image }) => {
  return (
    <div className="service-card">
      <div className="card-header">
        <div className="filter">
          <h3>{title}</h3>
        </div>
      </div>
      <div className="card-body">
        <p>
          <strong>{subtitle}</strong>
        </p>
        <p>{description}</p>
      </div>
      <style jsx>{`
          .service-card {
              box-shadow: 0 2px 10px #243E7833;
              border-radius: 10px;
              overflow: hidden;
              margin: 10px;
              flex: 1;
          }
          .card-header {
              background-image: url('${image}');
              background-size: cover;
              background-position: center;
          }
          .filter {
              height: 60vw;
              display: flex;
              align-items: center;
              justify-content: center;
              background-color: #243E7833;
          }
          h3 {
              text-align: center;
              text-transform: uppercase;
              color: #fff;
              font-size: 32px;
              text-shadow: 0 0 40px #243E78;
          }
          .card-body {
              padding: 20px 0;
              background-color: #fff;
          }
          .card-body > p {
            margin: 15px 30px;
          }
          @media only screen and (min-width: 568px) {
            .service-card {
              display: flex;
            }
            .service-card > * {
              flex: 1;
            }
            .filter {
              height: 100%;
            }

            .service-card:nth-of-type(2) {
              flex-direction: row-reverse; 
            }
          }
          @media only screen and (min-width: 800px) {
              .service-card {
                display: block;
              }
              .filter {
                height: 200px;
              }
          }
          `}</style>
    </div>
  )
}

export default ServiceCard
