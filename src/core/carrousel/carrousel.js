import Flickity from 'react-flickity-component';
import './carrousel.scss';
export default function Carrousel({ slides, title }) {
  //qwerty no hay mucho que testear aquí. si el título que se le pasa se renderiza y si las cards(slides)
  //que se le pasan se renderizan en igual número
  const flickityOptions = {
    initialIndex: slides.length / 2,
  };
  const carrouselSlides = slides.map((item) => (
    <div className="slide">{item}</div>
  ));
  const carrTitle = title;
  return (
    <>
      <h2 className="carrouselTitle">{carrTitle}</h2>
      <Flickity
        className={'carrousel'} // default ''
        elementType={'div'} // default 'div'
        options={flickityOptions} // takes flickity options {}
        disableImagesLoaded={false} // default false
        reloadOnUpdate // default false
        static // default false
      >
        {carrouselSlides}
      </Flickity>
    </>
  );
}
