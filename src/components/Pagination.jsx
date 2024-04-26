export default function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <>
      <ul className="pagination">
        <li>
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            &lt;
          </button>
        </li>
        <li>
          <span>
            {currentPage} of {totalPages}
          </span>
        </li>
        <li>
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            &gt;
          </button>
        </li>
      </ul>
    </>
  );
}
