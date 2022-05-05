import ServiceCard from './ServiceCard';

export default function Gallery() {

    {/*Gallery Logic*/}
    const importAll = r => r.keys().map(r);
    const images = importAll(require.context('./gallery'));

    return (
        <div className="page-section">
            <div className="container">
                <div className="row">
                    {/*Filling Gallery With Images*/}
                    {images.map(imageName => (
                        <ServiceCard
                            imageUrl={imageName.default}>
                        </ServiceCard>
                    ))}
                </div>
            </div>
        </div>
    );
}