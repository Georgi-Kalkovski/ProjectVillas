import './Contacts.css';

export default function Contacts() {
  return (
    <div className="page-section" id="about">
      <div className="container">

        {/* Contacts text */}
        <h2 className="card-pricing title-section wow fadeInUp" style={{ maxWidth: "200px", padding: "10px 10px", marginBottom: "20px" }}>Контакти</h2>

        {/*Main Page Text*/}
        <div className="wow fadeInUp">

          <div className="card-pricing contacts-box">
            {/* <div className="text-center wow fadeInUp">
              <h2 className="title-section">Контакти:</h2>
            </div> */}
            <br />
            <h5>
              <p>
                0888096578
                <br />
                <br />
                <a className="title-section" href="mailto: houses.neli.2022@gmail.com">houses.neli.2022@gmail.com</a>
              </p>
            </h5>
          </div>
        </div>

      </div>
    </div>
  );
}