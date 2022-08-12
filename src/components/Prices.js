import './Prices.css';

export default function Prices() {
    return (
        <div className="page-section">
            <div className="container">
                <div className="text-center wow fadeInUp" >
                    {/*<div className="subhead">Pricing Plan</div>*/}
                    <h2 className="card-pricing title-section" style={{ maxWidth: "150px", padding: "10px 10px" }}>Цени</h2>
                    {/*<div className="divider mx-auto"></div>*/}
                </div>
                <div className="row mt-3" style={{ justifyContent: "center" }}>

                    {/*One Night*/}
                    <div className="col-lg-4 py-4 wow fadeInUp">
                        <div className="card-pricing prices">
                            <div className="header">
                                <h5 className='amount-of-nights'>За една нощувка</h5>
                                <div className="price">
                                    <h1>250 лв.</h1>
                                    <br />
                                    <br />
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*Two Nights*/}
                    <div className="col-lg-4 py-4 wow fadeInUp">
                        <div className="card-pricing prices">
                            <div className="header">
                                <h5 className='amount-of-nights'>За две нощувки</h5>
                                <div className="price">
                                    <h1>200 лв.</h1>
                                    <div className="pricing-type"><h4>на вечер</h4></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*Three Nights*/}
                    <div className="col-lg-4 py-4 wow fadeInUp">
                        <div className="card-pricing prices">
                            <div className="header">
                                <h5 className='amount-of-nights'>За три нощувки</h5>
                                <div className="price">
                                    <h1>150 лв.</h1>
                                    <div className="pricing-type"><h4>на вечер</h4></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*Four+ Nights*/}
                    <div className="col-lg-4 py-4 wow fadeInUp">
                        <div className="card-pricing prices">
                            <div className="header">
                                <h5 className='amount-of-nights'>За 4 и повече нощувки</h5>
                                <div className="price">
                                    <div className="pricing-type"><h4>по договаряне</h4></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*More Info Text*/}
                    <div className="card-pricing wow fadeInUp">
                        <br />
                        <h5 >
                            <p>
                                Къщите се дават цели, не се предлагат отделни стаи.
                                <br />
                                <br />
                                <span className="text-color">Напускането</span> става до <span className="text-color">12,00 часа</span>. 
                                <br/>
                                <span className="text-color">Настаняването</span> е след <span className="text-color">14,00 часа</span>.
                                <br />
                                <br />
                                Цени за специални периоди, като Нова година, Великден и други празници се различават от горепосочените.
                                <br />
                                <br />
                                Цените са в български лева и с добавено ДДС.
                                <br />
                                <br />
                                Къщите не са подходящи за шумни компании.
                            </p>
                        </h5>
                    </div>

                </div>
            </div>
        </div>
    );
}