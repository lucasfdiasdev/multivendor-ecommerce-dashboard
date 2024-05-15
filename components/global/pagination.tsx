import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";

interface IPagination {
  pageNumber: number;
  setPageNumber: (pageNumber: number) => void;
  totalItem: number;
  showItem: number;
  parPage: number;
}

const Pagination: React.FC<IPagination> = ({
  parPage,
  showItem,
  totalItem,
  pageNumber,
  setPageNumber,
}) => {
  let totalPage = Math.ceil(totalItem / parPage);
  let startPage = pageNumber;
  let dif = totalPage - pageNumber;

  if (dif <= showItem) {
    startPage = totalPage - showItem;
  }

  let endPage = startPage < 0 ? showItem : showItem + startPage;

  if (startPage <= 0) {
    startPage = 1;
  }

  const createBtn = () => {
    const btns = [];

    for (let i = startPage; i < endPage; i++) {
      btns.push(
        <li
          key={i}
          className={`w-[33px] h-[33px] flex items-center justify-center cursor-pointer  ${
            pageNumber === i ? "bg-gray-400 text-white" : ""
          }`}
          onClick={() => setPageNumber(i)}
        >
          {i}
        </li>
      );
    }
    return btns;
  };

  return (
    <ul className="flex gap-3">
      {pageNumber > 1 && (
        <li
          onClick={() => setPageNumber(pageNumber - 1)}
          className="w-[33px] h-[33px] flex items-center justify-center cursor-pointer"
        >
          <BsChevronDoubleLeft />
        </li>
      )}
      {createBtn()}
      {pageNumber > 1 && (
        <li
          onClick={() => setPageNumber(pageNumber + 1)}
          className="w-[33px] h-[33px] flex items-center justify-center cursor-pointer"
        >
          <BsChevronDoubleRight />
        </li>
      )}
    </ul>
  );
};

export default Pagination;
