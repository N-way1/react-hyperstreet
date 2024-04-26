export default function Carousel({ name }) {
  return (
    <div className="carousel-item">
      <img src={name} className="img-fluid w-full" alt="..." />
    </div>
  );
}
