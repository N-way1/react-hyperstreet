import { Link } from "react-router-dom";

export default function PaymentCard() {
  return (
    <>
      <div className="col-right">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Payment info.</h3>
            <h5>Payment method:</h5>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value="option1"
              />
              <label className="form-check-label" htmlFor="exampleRadios1">
                Paypal
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios2"
                value="option2"
              />
              <label className="form-check-label" htmlFor="exampleRadios2">
                Credit Card
              </label>
            </div>
            <h5>Name on card:</h5>
            <p>Nael D Roger</p>
            <h5>Card number:</h5>
            <p>•••• •••• •••• 1234</p>
            <div className="flex justify-between">
              <h5>Expiration date:</h5>
              <h5 className="mr-10">CVV</h5>
            </div>
            <div className="flex justify-between items-center mb-10">
              <div>
                <select
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                >
                  <option selected>05</option>
                </select>
                <select
                  className="form-select form-select-sm ml-3"
                  aria-label=".form-select-sm example"
                >
                  <option selected>2034</option>
                </select>
              </div>
              <div>
                <p className="font-normal mr-12">187</p>
              </div>
            </div>
          </div>
          <Link
            to="#"
            className="flex custom-button justify-center items-center"
          >
            Check Out
          </Link>
        </div>
      </div>
    </>
  );
}
