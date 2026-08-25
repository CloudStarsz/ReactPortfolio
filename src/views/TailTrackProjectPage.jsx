import { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import {
  FaArrowDown,
  FaArrowLeft,
  FaCalendarDays,
  FaChevronLeft,
  FaChevronRight,
  FaPaw,
  FaStore,
  FaXmark,
} from 'react-icons/fa6';
import { tailTrackProject } from '../data/tailTrackProject.js';
import useModalFocus from '../components/useModalFocus.js';
import { getMotionSafeScrollBehavior } from '../utils/motion.js';
import './TailTrackProjectPage.scss';

const tailTrackImages = import.meta.glob('../images/Screenshot_*.png', {
  eager: true,
  import: 'default',
});

const getImage = (file) => tailTrackImages[`../images/${file}`];

function TailTrackHeading({ kicker, title, description }) {
  return (
    <div className="tt-heading">
      <span>{kicker}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function TailTrackLightbox({ image, labels, onClose, onPrevious, onNext, modalRef }) {
  if (!image) return null;

  return (
    <div ref={modalRef} className="tt-lightbox" role="dialog" aria-modal="true" aria-label={image.title} tabIndex={-1} onClick={onClose}>
      <button type="button" className="tt-lightbox-close" aria-label={labels.close} onClick={onClose} data-modal-initial-focus>
        <FaXmark />
      </button>
      <button type="button" className="tt-lightbox-nav" aria-label={labels.previous} onClick={onPrevious}>
        <FaChevronLeft />
      </button>
      <figure onClick={(event) => event.stopPropagation()}>
        <img src={getImage(image.file)} alt={image.title} />
        <figcaption>
          <strong>{image.title}</strong>
          <span>{image.caption}</span>
        </figcaption>
      </figure>
      <button type="button" className="tt-lightbox-nav" aria-label={labels.next} onClick={onNext}>
        <FaChevronRight />
      </button>
    </div>
  );
}

export default function TailTrackProjectPage() {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const pageRef = useRef(null);
  const lightboxRef = useRef(null);
  const content = tailTrackProject[i18n.language?.startsWith('en') ? 'en' : 'pt'];
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const allImages = useMemo(
    () => content.gallery.groups.flatMap((group) => group.images),
    [content],
  );
  const selectedImage = selectedImageIndex === null ? null : allImages[selectedImageIndex];
  const closeLightbox = () => setSelectedImageIndex(null);

  useModalFocus(Boolean(selectedImage), lightboxRef, closeLightbox);

  useEffect(() => {
    pageRef.current?.scrollTo({ top: 0 });
  }, []);

  useEffect(() => {
    const header = document.querySelector('.site-header');
    if (selectedImage) header?.classList.add('header-hidden');

    const handleKeyDown = (event) => {
      if (!selectedImage) return;
      if (event.key === 'Escape') setSelectedImageIndex(null);
      if (event.key === 'ArrowLeft') {
        setSelectedImageIndex((current) => (current - 1 + allImages.length) % allImages.length);
      }
      if (event.key === 'ArrowRight') {
        setSelectedImageIndex((current) => (current + 1) % allImages.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      header?.classList.remove('header-hidden');
    };
  }, [allImages.length, selectedImage]);

  const openImage = (file) => {
    setSelectedImageIndex(allImages.findIndex((image) => image.file === file));
  };

  const moveImage = (direction) => (event) => {
    event.stopPropagation();
    setSelectedImageIndex((current) => (current + direction + allImages.length) % allImages.length);
  };

  const scrollToOverview = () => {
    pageRef.current?.querySelector('#tailtrack-overview')?.scrollIntoView({ behavior: getMotionSafeScrollBehavior() });
  };

  return (
    <div className="tailtrack-page" ref={pageRef}>
      <section className="tt-hero">
        <div className="tt-hero-paw tt-paw-one"><FaPaw /></div>
        <div className="tt-hero-paw tt-paw-two"><FaPaw /></div>
        <div className="tt-container tt-hero-grid">
          <div className="tt-hero-copy">
            <button type="button" className="tt-back" onClick={() => navigate('/')}>
              <FaArrowLeft />
              {content.meta.back}
            </button>
            <span className="tt-kicker">{content.meta.eyebrow}</span>
            <h1>{content.meta.title}</h1>
            <h2>{content.meta.headline}</h2>
            <p>{content.meta.summary}</p>
            <div className="tt-tags">
              {content.meta.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
            <button type="button" className="tt-action" onClick={scrollToOverview}>
              {content.meta.explore}
              <FaArrowDown />
            </button>
          </div>

          <div className="tt-hero-showcase">
            <button type="button" className="tt-browser" onClick={() => openImage('Screenshot_4.png')}>
              <div className="tt-browser-top">
                <i /><i /><i />
                <span>tailtrack.app/dashboard</span>
              </div>
              <img src={getImage('Screenshot_4.png')} alt={content.meta.imageAlt} />
            </button>
            <div className="tt-floating-card tt-floating-calendar">
              <FaCalendarDays />
              <span>Agenda</span>
            </div>
            <div className="tt-floating-card tt-floating-pets">
              <FaPaw />
              <span>Pet care</span>
            </div>
          </div>

          <div className="tt-stats">
            {content.meta.stats.map((stat) => (
              <div key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="tt-section" id="tailtrack-overview">
        <div className="tt-container">
          <TailTrackHeading kicker={content.overview.kicker} title={content.overview.title} description={content.overview.text} />
          <div className="tt-audience-grid">
            {content.overview.audiences.map((audience) => (
              <article key={audience.label}>
                <div className="tt-audience-icon">
                  {audience.icon === 'client' ? <FaPaw /> : <FaStore />}
                </div>
                <span>{audience.label}</span>
                <h3>{audience.title}</h3>
                <p>{audience.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="tt-section tt-section-warm">
        <div className="tt-container">
          <TailTrackHeading kicker={content.capabilities.kicker} title={content.capabilities.title} />
          <div className="tt-capability-grid">
            {content.capabilities.items.map((item, index) => (
              <article key={item.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="tt-section tt-workflow-section">
        <div className="tt-container tt-workflow-layout">
          <TailTrackHeading kicker={content.workflow.kicker} title={content.workflow.title} />
          <ol className="tt-workflow">
            {content.workflow.items.map((item) => (
              <li key={item.number}>
                <span>{item.number}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="tt-section tt-gallery-section">
        <div className="tt-container">
          <TailTrackHeading kicker={content.gallery.kicker} title={content.gallery.title} description={content.gallery.intro} />
          {content.gallery.groups.map((group) => (
            <div className="tt-gallery-group" key={group.title}>
              <div className="tt-gallery-group-title">
                <h3>{group.title}</h3>
                <p>{group.description}</p>
              </div>
              <div className="tt-gallery-grid">
                {group.images.map((image) => (
                  <button
                    type="button"
                    className={`tt-gallery-card${image.featured ? ' tt-gallery-featured' : ''}`}
                    key={image.file}
                    onClick={() => openImage(image.file)}
                  >
                    <div>
                      <img src={getImage(image.file)} alt={image.title} loading="lazy" />
                      <span>↗</span>
                    </div>
                    <strong>{image.title}</strong>
                    <p>{image.caption}</p>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="tt-section tt-closing-section">
        <div className="tt-container tt-closing-card">
          <span>{content.closing.label}</span>
          <h2>{content.closing.title}</h2>
          <p>{content.closing.text}</p>
          <div className="tt-stack">
            {content.technologies.map((technology) => <span key={technology}>{technology}</span>)}
          </div>
          <button type="button" className="tt-back tt-back-bottom" onClick={() => navigate('/')}>
            <FaArrowLeft />
            {content.meta.back}
          </button>
        </div>
      </section>

      <TailTrackLightbox
        image={selectedImage}
        labels={content.modal}
        onClose={closeLightbox}
        onPrevious={moveImage(-1)}
        onNext={moveImage(1)}
        modalRef={lightboxRef}
      />
    </div>
  );
}
