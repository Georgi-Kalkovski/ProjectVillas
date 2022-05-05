export default function ServiceCard({
    imageUrl
}) {

    {/*Enlarge Image Logic*/ }
    function enlargeFunction() {
        if (document.getElementById('Large') == undefined) {
            var img = new Image();
            var div = document.getElementById(imageUrl);

            img.onload = function () {
                div.appendChild(img);
            };
            img.id = 'Large';
            img.src = imageUrl;
            img.style =
                `width: 80%;
                max-width: 1100px; 
                z-index: 100; 
                position: fixed; 
                left: 50%; top: 50%; 
                transform: translate(-50%, -50%); 
                box-shadow: -1px 1px 20px 20px rgb(0 0 0 / 40%), 
                12px 12px 20px 0 rgb(0 0 0 / 50%);`;
            img.className = 'text-center';
            return;

        } else {
            const element = document.getElementById('Large');
            element.remove();
        }
    }

    {/*Image Card*/ }
    return (
        <div id={imageUrl} className="col-lg-4" onClick={() => enlargeFunction()}>
            <div className="card-service wow fadeInUp">
                <div className="header">
                    <img src={imageUrl} className="img-fluid" alt="" />
                </div>
            </div>
        </div>
    );
}