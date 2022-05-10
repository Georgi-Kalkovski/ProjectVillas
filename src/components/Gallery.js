import ServiceCard from './ServiceCard';
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';

export default function Gallery() {

    {/*Gallery Logic*/ }
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
            {/*Carousel with Images*/}
            {/*
            <Carousel fade>
                {images.map(imageName => (
                    <Carousel.Item>
                        <img className="d-block w-100" src={imageName.default} alt={imageName.default}/>
                    </Carousel.Item>
                ))}
            </Carousel>
            */}
        </div>
    );
}