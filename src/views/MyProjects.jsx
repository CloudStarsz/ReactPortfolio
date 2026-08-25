import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const localImages = import.meta.glob('../images/*.{png,jpg,jpeg,svg}', { eager: true, import: 'default' });
const shiftSyncImages = import.meta.glob('../images/shiftsync/*.png', { eager: true, import: 'default' });

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

function MyProjects() {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    const [reduceMotion, setReduceMotion] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        const updatePreference = () => setReduceMotion(mediaQuery.matches);
        updatePreference();
        mediaQuery.addEventListener('change', updatePreference);
        return () => mediaQuery.removeEventListener('change', updatePreference);
    }, []);
    
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
        <div className="carousel-container">
            <h1 className="section-title">{t('projects.title')}</h1>

            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 5,
                    stretch: 0,
                    depth: 70,
                    modifier: 1,
                    slideShadows: true,
                }}
                loop={true}
                autoplay={reduceMotion ? false : {
                    delay: 3500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                navigation={true}
                pagination={{ clickable: true, dynamicBullets: true }}
                modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                className="my-projects-swiper"
            >
                {displayProjects.map((project, index) => (
                    <SwiperSlide
                        key={project.id || index}
                        className="project-slide"
                        role={!project.id?.startsWith('embreve') ? 'button' : undefined}
                        tabIndex={!project.id?.startsWith('embreve') ? 0 : -1}
                        aria-label={!project.id?.startsWith('embreve') ? project.name : undefined}
                        onClick={() => { if(!project.id?.startsWith('embreve')) navigate(`/project/${project.id}`) }}
                        onKeyDown={(event) => {
                            if (!project.id?.startsWith('embreve') && (event.key === 'Enter' || event.key === ' ')) {
                                event.preventDefault();
                                navigate(`/project/${project.id}`);
                            }
                        }}
                    >
                        <div className={`project-card${project.id === 'shiftsync' ? ' is-featured' : ''}${project.id?.startsWith('embreve') ? ' is-placeholder' : ''}`}>
                            {project.id === 'shiftsync' && (
                                <div
                                    title={i18n.language === 'pt' ? 'Projeto destaque' : 'Featured project'}
                                    aria-label={i18n.language === 'pt' ? 'Projeto destaque' : 'Featured project'}
                                    className="featured-badge"
                                >
                                    <FaStar size={20} />
                                </div>
                            )}
                            <img
                                src={getThumbnail(project)}
                                alt={project.name}
                                loading="lazy"
                            />
                            <div className="project-card-copy">
                                <h3>
                                    {project.name}
                                </h3>
                                {project.shortDescription && (
                                    <p>
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
