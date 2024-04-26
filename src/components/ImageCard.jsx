import shoe from "../assets/NIK2.png";

export default function ImageCard() {
  return (
    <div className="card">
        <div className="">
          <img
            src={shoe}
            className="transition-transform duration-300 transform hover:scale-110"
            alt="..."
          />
        </div>
    </div>
  );
}
