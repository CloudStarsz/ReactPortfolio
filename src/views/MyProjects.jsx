import { Box, Heading } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const localImages = import.meta.glob('../images/*.{png,jpg,jpeg,svg}', { eager: true, import: 'default' });
const shiftSyncImages = import.meta.glob('../images/shiftsync/*.png', { eager: true, import: 'default' });

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

function MyProjects() {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    
    // Fallback in case projects list is undefined
    const projectsList = t('projects.list', { returnObjects: true }) || [];
    
    const displayProjects = [...projectsList].sort((a, b) => {
        if (a.id === 'shiftsync') return -1;
        if (b.id === 'shiftsync') return 1;
        return 0;
    });
    while (displayProjects.length < 6) {
        displayProjects.push({
            id: `embreve-${displayProjects.length}`,
            name: i18n.language === 'pt' ? 'Em breve' : 'Coming soon',
            gallery: []
        });
    }

    // Funcao helper para pegar a imagem
    const getThumbnail = (project) => {
        if (project.id === 'shiftsync') {
            return shiftSyncImages['../images/shiftsync/01-landing-hero.png'];
        }
        if (project.id === 'tailtrack') {
            return localImages['../images/Screenshot_4.png'];
        }
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
                        <div style={{
                            position: 'relative',
                            width: '100%',
                            aspectRatio: '16 / 9',
                            borderRadius: '20px',
                            overflow: 'hidden',
                            border: project.id === 'shiftsync' ? '2px solid #ecb144' : '2px solid transparent',
                            boxShadow: project.id === 'shiftsync'
                                ? '0 10px 38px rgba(236, 177, 68, 0.38)'
                                : '0 10px 30px rgba(0,0,0,0.5)',
                            cursor: !project.id?.startsWith('embreve') ? 'pointer' : 'default'
                        }}>
                            {project.id === 'shiftsync' && (
                                <div
                                    title={i18n.language === 'pt' ? 'Projeto destaque' : 'Featured project'}
                                    aria-label={i18n.language === 'pt' ? 'Projeto destaque' : 'Featured project'}
                                    style={{
                                        position: 'absolute',
                                        top: '16px',
                                        right: '16px',
                                        zIndex: 2,
                                        width: '44px',
                                        height: '44px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        border: '1px solid rgba(255, 235, 166, 0.75)',
                                        borderRadius: '50%',
                                        color: '#ffd76a',
                                        background: 'rgba(36, 24, 4, 0.84)',
                                        boxShadow: '0 6px 22px rgba(236, 177, 68, 0.42)',
                                        backdropFilter: 'blur(10px)'
                                    }}
                                >
                                    <FaStar size={20} />
                                </div>
                            )}
                            <img
                                src={getThumbnail(project)}
                                alt={project.name}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    display: 'block',
                                    objectFit: 'cover',
                                    objectPosition: 'center top'
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
                                <h3 style={{
                                    maxWidth: '100%',
                                    overflow: 'hidden',
                                    margin: '0 0 5px 0',
                                    fontSize: '1.5rem',
                                    fontWeight: 'bold',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap'
                                }}>
                                    {project.name}
                                </h3>
                                {project.shortDescription && (
                                    <p style={{
                                        maxWidth: '100%',
                                        overflow: 'hidden',
                                        margin: 0,
                                        color: '#e1d8ed',
                                        fontSize: '1rem',
                                        textOverflow: 'ellipsis',
                                        whiteSpace: 'nowrap'
                                    }}>
                                        {project.shortDescription}
                                    </p>
                                )}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default MyProjects;
