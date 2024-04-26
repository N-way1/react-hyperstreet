export default function Partner({ children }) {
  return (
    <>
      <div className="col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1">
        <div className="rectangle flex justify-center items-center">
          <a href="https://www.nike.com/tr/">
            <img src={children} className="w-full h-full object-contain" />
          </a>
        </div>
      </div>
    </>
  );
}
