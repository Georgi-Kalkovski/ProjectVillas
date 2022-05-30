import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';
import './Gallery.css';

export default function Gallery() {

    {/*Gallery Logic*/ }
    const importAll = r => r.keys().map(r);
    const images = importAll(require.context('./gallery'));
    const imagesArray = images.map(x => x.default);
    const [lightboxController, setLightboxController] = useState({
        toggler: false,
        sourceIndex: 1
    });

    function openLightboxOnSourceIndex(number) {
        setLightboxController({
            toggler: !lightboxController.toggler,
            sourceIndex: number
        });
    }

    return (
        <div className="page-section">
            <div className="container">
                <div className="row">

                    {/*Filling Gallery With Images*/}
                    {images.map((imageName, index) => (
                        <div id={imageName.default} className="col-lg-4" onClick={() => openLightboxOnSourceIndex(index)}>
                            <div className="card-service wow fadeInUp">
                                <div className="header">
                                    <img src={imageName.default} className="img-fluid" alt="" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/*Enlarge Lightbox*/}
                <FsLightbox
                    toggler={lightboxController.toggler}
                    sources={imagesArray}
                    sourceIndex={lightboxController.sourceIndex}>
                </FsLightbox>
            </div>
        </div>
    );
}