import PriceOption from "./PriceOption";

export default function Prices({price}) {
  
  return (
    <>
      <div className="new-category">
        <div className="col-md-8">
          <div className="card">
            <h4 className="font-medium text-main text-2xl pb-6">Price</h4>
            <div className="card-body">
              <ul className="grid grid-cols-3 gap-4">
                {price.map((option, index) => (
                  <PriceOption
                    key={index}
                    label={option.label}
                    value={option.value}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
