import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

function MyProjects() {
    return (
        <div className="carousel-container" style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
            <h1 style={{ textAlign: 'center', marginBottom: "30px", fontWeight: '100', fontStyle: 'italic', fontSize: 'clamp(2.5rem, 6vw, 72px)' }}>Alguns Projetos</h1>

            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 30,
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
                {[1, 2, 3, 4, 5, 6].map((num) => (
                    <SwiperSlide key={num} style={{ width: 'min(85%, 800px)' }}>
                        <img
                            src={`https://placehold.co/1120x630/230f40/e1d8ed?text=Projeto+${num}`}
                            alt={`Projeto ${num}`}
                            style={{
                                width: '100%',
                                borderRadius: '20px',
                                display: 'block',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
                            }}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default MyProjects;