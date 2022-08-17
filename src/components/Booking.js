export default function Booking() {
    return (
        <div className='page-section '>

            {/* Reservation text */}
            <h2 className='card-pricing title-section  wow fadeInUp' style={{ maxWidth: '250px', padding: '10px 10px', marginBottom: '20px' }}>Резервации</h2>

            <div className='text-center container wow zoomIn calendar' >

                {/*Google Calendar*/}
                <iframe title="googleCalendar"
                    src='https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=Europe%2FSofia&hl=bg&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=0&showCalendars=1&showTz=0&src=Z2VvcmdpLmRvZ2Fub3Y5ODdAZ21haWwuY29t&src=YmcuYnVsZ2FyaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23D50000&color=%230B8043'
                    style={{ borderWidth: 0 }}
                    width='800'
                    height='600'
                    frameborder='0'
                    scrolling='no'
                    >
                </iframe>
            </div >
        </div >
    );
}