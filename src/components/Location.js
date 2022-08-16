const Location = () => {
    return (
        <div className='page-section'>

            {/* Location text */}
            <h2 className='card-pricing title-section wow fadeInUp' style={{ maxWidth: '300px', padding: '10px 10px', marginBottom: '20px' }}>Местоположение</h2>

            <div className='wow fadeInUp'>
                <div className='card-pricing'>


                    {/*Coordinates*/}
                    <div div className='text-center container wow'>
                        {/* <h4 className='title-section'>Координати</h4> */}
                        <div className='subhead'>41.94455297502885, 24.1471828</div>
                    </div>

                    {/*Google Map*/}
                    <div className='container wow'>
                        <div className='text-center'>
                            {/*<h4 className='title-section'>Карта:</h4>*/}
                        </div>
                        <div className='text-center'>
                            <iframe title="googleMaps"
                                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1021.0788378678632!2d24.146698329262872!3d41.94442579620604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ac9d1a2c124085%3A0xc012fb8349662e99!2z0JrRitGJ0Lgg0LfQsCDQs9C-0YHRgtC4ICLQndC10LvQuCI!5e1!3m2!1sbg!2sbg!4v1651140422507!5m2!1sbg!2sbg'
                                width='100%'
                                height='450'
                                style={{ border: 0 }}
                                allowfullscreen=''
                                loading='lazy'
                                referrerpolicy='no-referrer-when-downgrade'
                            >
                            </iframe>
                        </div>
                    </div>

                    <br />

                </div>
            </div>
        </div >
    );
};

export default Location;