import nike1 from "../assets/NIK21699_1000_2.png";
import nike2 from "../assets/NIK21699_1000_3 2.png";
import nike3 from "../assets/NIK21699_1000_5.png";
import nike4 from "../assets/NIK21699_1000_8.png";

export default function Shoe() {
  return (
    <>
      <div className="col-xxl-3">
        <div className="card">
          <div className="row g-0 justify-start">
            <div className="card-title uppercase">
              <span>Nike -</span>
            </div>
            <div className="card-body">
              <p className="card-text font-black text-main main text-uppercase">
                NIKE ZOOMX VAPORFLY NEXT
              </p>
              <p className=" card-text text-main secondary lowercase">
                running sneakers with thin elastic laces
              </p>
              <div className="flex items-start justify-start">
                <ul className="grid grid-cols-3 gap-1">
                  <li>
                    <img
                      className="transition-transform duration-300 transform hover:scale-110"
                      src={nike2}
                      alt=""
                    />
                  </li>
                  <li>
                    <img
                      className="transition-transform duration-300 transform hover:scale-110"
                      src={nike1}
                      alt=""
                    />
                  </li>
                  <li>
                    <img
                      className="transition-transform duration-300 transform hover:scale-110"
                      src={nike3}
                      alt=""
                    />
                  </li>
                  <li>
                    <img
                      className="transition-transform duration-300 transform hover:scale-110"
                      src={nike4}
                      alt=""
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
