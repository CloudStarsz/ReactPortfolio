import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function MyProjects() {
    return (
        <div className="carousel-container">
            <h1 style={{ textAlign: 'center', margin: "20px" }}>Alguns Projetos</h1>

            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={30}
                slidesPerView={'auto'}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                navigation
                style={{ width: '100%', paddingBottom: '50px' }}
            >
                <SwiperSlide style={{ width: '85%', maxWidth: '1120px' }}>
                    <img src="https://placehold.co/1120x630" alt="Projeto 1" style={{ width: '100%', borderRadius: '20px', display: 'block' }} />
                </SwiperSlide>

                <SwiperSlide style={{ width: '85%', maxWidth: '1120px' }}>
                    <img src="https://placehold.co/1120x630" alt="Projeto 2" style={{ width: '100%', borderRadius: '20px', display: 'block' }} />
                </SwiperSlide>

                <SwiperSlide style={{ width: '85%', maxWidth: '1120px' }}>
                    <img src="https://placehold.co/1120x630" alt="Projeto 3" style={{ width: '100%', borderRadius: '20px', display: 'block' }} />
                </SwiperSlide>

                <SwiperSlide style={{ width: '85%', maxWidth: '1120px' }}>
                    <img src="https://placehold.co/1120x630" alt="Projeto 4" style={{ width: '100%', borderRadius: '20px', display: 'block' }} />
                </SwiperSlide>

                <SwiperSlide style={{ width: '85%', maxWidth: '1120px' }}>
                    <img src="https://placehold.co/1120x630" alt="Projeto 5" style={{ width: '100%', borderRadius: '20px', display: 'block' }} />
                </SwiperSlide>

                <SwiperSlide style={{ width: '85%', maxWidth: '1120px' }}>
                    <img src="https://placehold.co/1120x630" alt="Projeto 6" style={{ width: '100%', borderRadius: '20px', display: 'block' }} />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default MyProjects;