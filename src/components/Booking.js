export default function Booking() {
    return (
        <div className="page-section">
            <div className="text-center container wow zoomIn">

                {/*Google Calendar*/}
                <iframe
                    src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=Europe%2FSofia&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=0&showCalendars=1&showTz=0&hl=bg&src=dmJ1Y2c0anZmZDU5bDlmdGNmOGJmcDVmNDhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=YmcuYnVsZ2FyaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23D50000&color=%230B8043"
                    style={{ borderWidth: 0 }}
                    width="800"
                    height="600"
                    frameborder="0"
                    scrolling="no"
                >
                </iframe>
            </div >
        </div >
    );
}