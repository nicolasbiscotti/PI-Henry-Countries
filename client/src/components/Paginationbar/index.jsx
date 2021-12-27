import { useDispatch, useSelector } from "react-redux";
import { fetchCountries } from "../../actions";
import { StyledPaginationbar } from "./styled";

export default function Paginationbar() {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.page);
  const totalPages = useSelector((state) => state.totalPages);
  const filters = useSelector((state) => state.filters);

  const handleChangePage = (newPage) => {
    dispatch(fetchCountries({ page: newPage, filters }));
  };
  return (
    <StyledPaginationbar>
      {page > 1 ? (
        <span className="pageButton" onClick={() => handleChangePage(page - 1)}>
          {"<<"} Prev
        </span>
      ) : (
        ""
      )}

      <span className="currentPage">{page}</span>
      <span className="text">of</span>
      <span className="totalPages">{totalPages}</span>

      {page < totalPages ? (
        <span className="pageButton" onClick={() => handleChangePage(page + 1)}>
          Next {">>"}
        </span>
      ) : (
        ""
      )}
    </StyledPaginationbar>
  );
}
