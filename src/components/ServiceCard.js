export default function ServiceCard({
    imageUrl
}) {
    return (
        <div className="col-lg-4">
            <div className="card-service wow fadeInUp">
                <div className="header">
                    <img src={imageUrl} className="img-fluid" alt="" />
                </div>
            </div>
        </div>

    );
}