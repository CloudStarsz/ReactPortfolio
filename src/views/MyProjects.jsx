import { Box, Heading } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const localImages = import.meta.glob('../images/*.{png,jpg,jpeg,svg}', { eager: true, import: 'default' });

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

function MyProjects() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    
    // Fallback in case projects list is undefined
    const projectsList = t('projects.list', { returnObjects: true }) || [];
    
    // Ensure we have at least 6 projects for the Swiper loop to work correctly
    const displayProjects = [...projectsList];
    while (displayProjects.length < 6) {
        displayProjects.push({
            id: `embreve-${displayProjects.length}`,
            name: "Em breve",
            gallery: []
        });
    }

    // Funcao helper para pegar a imagem
    const getThumbnail = (project) => {
        if (!project.gallery || project.gallery.length === 0) {
            return `https://placehold.co/1120x630/230f40/e1d8ed?text=${encodeURIComponent(project.name)}`;
        }
        const imgName = project.gallery[0];
        const path = `../images/${imgName}`;
        if (localImages[path]) {
            return localImages[path];
        }
        return `https://placehold.co/1120x630/230f40/e1d8ed?text=${encodeURIComponent(imgName)}`;
    };

    return (
        <div className="carousel-container" style={{ width: '100%', margin: '0 auto', position: 'relative' }}>
            <h1 style={{ textAlign: 'center', marginBottom: "30px", fontWeight: '100', fontStyle: 'italic', fontSize: 'clamp(2.5rem, 6vw, 72px)' }}>{t('projects.title')}</h1>

            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 20,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                loop={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                pagination={{ clickable: true, dynamicBullets: true }}
                modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                style={{ width: '100%', paddingBottom: '60px', paddingTop: '20px' }}
                className="my-projects-swiper"
            >
                {displayProjects.map((project, index) => (
                    <SwiperSlide key={project.id || index} style={{ width: 'min(85%, 800px)' }} onClick={() => { if(!project.id?.startsWith('embreve')) navigate(`/project/${project.id}`) }}>
                        <div style={{ position: 'relative', width: '100%', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', cursor: !project.id?.startsWith('embreve') ? 'pointer' : 'default' }}>
                            <img
                                src={getThumbnail(project)}
                                alt={project.name}
                                style={{
                                    width: '100%',
                                    display: 'block'
                                }}
                            />
                            <div style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                width: '100%',
                                padding: '30px 20px 20px',
                                background: 'linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0.6), transparent)',
                                color: 'white',
                                textAlign: 'left',
                                boxSizing: 'border-box'
                            }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: '0 0 5px 0' }}>{project.name}</h3>
                                {project.shortDescription && <p style={{ fontSize: '1rem', color: '#e1d8ed', margin: 0 }}>{project.shortDescription}</p>}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default MyProjects;