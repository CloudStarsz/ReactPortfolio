import { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { FaArrowDown, FaArrowLeft, FaChevronLeft, FaChevronRight, FaXmark } from 'react-icons/fa6';
import { shiftSyncProject } from '../data/shiftSyncProject.js';
import './ShiftSyncProjectPage.scss';

const shiftSyncImages = import.meta.glob('../images/shiftsync/*.png', {
  eager: true,
  import: 'default',
});

const getImage = (file) => shiftSyncImages[`../images/shiftsync/${file}`];

function SectionHeading({ kicker, title, description }) {
  return (
    <div className="ss-section-heading">
      <span className="ss-kicker">{kicker}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function ImageModal({ image, onClose, onPrevious, onNext, labels }) {
  if (!image) return null;

  return (
    <div className="ss-lightbox" role="dialog" aria-modal="true" aria-label={image.title} onClick={onClose}>
      <button className="ss-lightbox-close" type="button" onClick={onClose} aria-label={labels.close}>
        <FaXmark />
      </button>
      <button className="ss-lightbox-nav ss-lightbox-prev" type="button" onClick={onPrevious} aria-label={labels.previous}>
        <FaChevronLeft />
      </button>
      <figure onClick={(event) => event.stopPropagation()}>
        <img src={getImage(image.file)} alt={image.title} />
        <figcaption>
          <strong>{image.title}</strong>
          <span>{image.caption}</span>
        </figcaption>
      </figure>
      <button className="ss-lightbox-nav ss-lightbox-next" type="button" onClick={onNext} aria-label={labels.next}>
        <FaChevronRight />
      </button>
    </div>
  );
}

export default function ShiftSyncProjectPage() {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const pageRef = useRef(null);
  const content = shiftSyncProject[i18n.language?.startsWith('en') ? 'en' : 'pt'];
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const allImages = useMemo(
    () => content.gallery.groups.flatMap((group) => group.images),
    [content],
  );
  const selectedImage = selectedImageIndex === null ? null : allImages[selectedImageIndex];

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
    const imageIndex = allImages.findIndex((image) => image.file === file);
    setSelectedImageIndex(imageIndex);
  };

  const moveImage = (direction) => (event) => {
    event.stopPropagation();
    setSelectedImageIndex((current) => (current + direction + allImages.length) % allImages.length);
  };

  const scrollToContent = () => {
    pageRef.current?.querySelector('#shiftsync-overview')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="shiftsync-page" ref={pageRef}>
      <section className="ss-hero">
        <div className="ss-hero-orb ss-hero-orb-one" />
        <div className="ss-hero-orb ss-hero-orb-two" />
        <div className="ss-container ss-hero-grid">
          <div className="ss-hero-copy">
            <button type="button" className="ss-back-link" onClick={() => navigate('/')}>
              <FaArrowLeft />
              {content.meta.back}
            </button>
            <span className="ss-kicker">{content.meta.eyebrow}</span>
            <h1>{content.meta.title}</h1>
            <h2>{content.meta.headline}</h2>
            <p>{content.meta.summary}</p>
            <div className="ss-tag-list">
              {content.meta.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
            <button type="button" className="ss-primary-action" onClick={scrollToContent}>
              {content.meta.explore}
              <FaArrowDown />
            </button>
          </div>
          <button
            type="button"
            className="ss-hero-visual"
            onClick={() => openImage('01-landing-hero.png')}
            aria-label={content.meta.imageAlt}
          >
            <div className="ss-browser-bar">
              <span /><span /><span />
              <em>shiftsync.app</em>
            </div>
            <img src={getImage('01-landing-hero.png')} alt={content.meta.imageAlt} />
            <span className="ss-hero-badge">S</span>
          </button>
          <div className="ss-stats" aria-label="Project highlights">
            {content.meta.stats.map((stat) => (
              <div key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ss-section" id="shiftsync-overview">
        <div className="ss-container">
          <SectionHeading kicker={content.overview.kicker} title={content.overview.title} />
          <div className="ss-overview-copy">
            {content.overview.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <div className="ss-value-grid">
            {content.overview.cards.map((card) => (
              <article key={card.number}>
                <span>{card.number}</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ss-section ss-section-tinted">
        <div className="ss-container">
          <SectionHeading kicker={content.capabilities.kicker} title={content.capabilities.title} />
          <div className="ss-capability-grid">
            {content.capabilities.items.map((item, index) => (
              <article key={item.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ss-section ss-system-section">
        <div className="ss-container">
          <SectionHeading kicker={content.system.kicker} title={content.system.title} description={content.system.description} />
          <div className="ss-architecture-card">
            <span className="ss-card-label">{content.system.architectureLabel}</span>
            <div className="ss-architecture-flow">
              {content.architecture.map((step, index) => (
                <div className="ss-architecture-step" key={step.label}>
                  <div>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <strong>{step.label}</strong>
                    <small>{step.detail}</small>
                  </div>
                  {index < content.architecture.length - 1 && <i aria-hidden="true">→</i>}
                </div>
              ))}
            </div>
          </div>
          <div className="ss-engineering">
            <h3>{content.system.engineeringTitle}</h3>
            <div>
              {content.engineering.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
          <div className="ss-tech-list">
            {content.technologies.map((technology) => <span key={technology}>{technology}</span>)}
          </div>
        </div>
      </section>

      <section className="ss-section ss-section-tinted">
        <div className="ss-container ss-flow-layout">
          <SectionHeading kicker={content.flow.kicker} title={content.flow.title} />
          <ol className="ss-flow-list">
            {content.flow.items.map((item, index) => (
              <li key={item}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{item}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="ss-section ss-gallery-section">
        <div className="ss-container">
          <SectionHeading kicker={content.gallery.kicker} title={content.gallery.title} description={content.gallery.intro} />
          {content.gallery.groups.map((group) => (
            <div className="ss-gallery-group" key={group.title}>
              <div className="ss-gallery-group-heading">
                <h3>{group.title}</h3>
                <p>{group.description}</p>
              </div>
              <div className="ss-gallery-grid">
                {group.images.map((image) => (
                  <button
                    type="button"
                    className={`ss-gallery-card${image.featured ? ' ss-gallery-card-featured' : ''}${image.tall ? ' ss-gallery-card-tall' : ''}`}
                    key={image.file}
                    onClick={() => openImage(image.file)}
                  >
                    <div className="ss-gallery-image">
                      <img src={getImage(image.file)} alt={image.title} loading="lazy" />
                      <span>{content.meta.explore} ↗</span>
                    </div>
                    <div className="ss-gallery-caption">
                      <strong>{image.title}</strong>
                      <p>{image.caption}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="ss-section ss-demo-section">
        <div className="ss-container">
          <SectionHeading kicker={content.demo.kicker} title={content.demo.title} description={content.demo.description} />
          <div className="ss-profile-grid">
            {content.demo.profiles.map((profile) => (
              <article key={profile.name}>
                <span>{profile.initials}</span>
                <div>
                  <small>{profile.role}</small>
                  <h3>{profile.name}</h3>
                  <p>{profile.description}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="ss-scope-note">{content.demo.note}</p>
          <button type="button" className="ss-back-bottom" onClick={() => navigate('/')}>
            <FaArrowLeft />
            {content.meta.back}
          </button>
        </div>
      </section>

      <ImageModal
        image={selectedImage}
        onClose={() => setSelectedImageIndex(null)}
        onPrevious={moveImage(-1)}
        onNext={moveImage(1)}
        labels={content.modal}
      />
    </main>
  );
}
