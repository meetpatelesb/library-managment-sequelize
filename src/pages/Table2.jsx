import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";

function CountryTable() {
  const [page, setPage] = useState();
  const [loading, setLoading] = useState(false);
  // total records
  const [pageNo, setPageNo] = useState(2);
  const [recordPerPage, setRecordPerPage] = useState(1);
  const [sortDirection, setSortDirection] = useState("asc");
  const [sortField, setSortField] = useState("title");
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [filterData, setFilteredData] = useState([]);
  const SERVER = process.env.REACT_APP_DEV_BASE_URL;
  useEffect(() => {
    getData();
  }, [recordPerPage, page, sortDirection, sortField, search]);

  const getData = async () => {
    try {
      const res = await axios.post(
        // `http://localhost:8012/show-member?sort=${sortDirection}&page=${page}&field=${sortField}`
        `http://localhost:8012/user-book/show-publication-book`,
        {
          data: {
            page,
            recordPerPage,
            sortDirection,
            sortField,
            search,
          },
        }
        // SERVER + '/show-publication-book'
      );
      const bookAuthor = await res.data;
      console.log(bookAuthor.rows);
      setData(bookAuthor.rows);
      setFilteredData(bookAuthor.rows);
      // setPageNo(bookAuthor.count);
      setPageNo(3)
    } catch (error) {
      console.log(error);
    }
  };

  const handleSort = async (column, sortDirection) => {
    console.log(sortDirection, column.sortField);
    setSortDirection(sortDirection);
    setSortField(column.sortField);
  };

  const fetchUsers = async (page) => {
    setLoading(true);
    //page is no. of pages in paginations  15 records and 2 pages
    console.log(page);
    setPage(page);
    setLoading(false);
  };

  const handlePageChange = (page) => {
    fetchUsers(page);
    setPage(page);
    console.log(page);
  };

  const handlePerRowsChange = async (newPerPage, page) => {
    setLoading(true);
    console.log(newPerPage, page);
    setRecordPerPage(newPerPage);
    setPageNo(page);
    setLoading(false);
  };

  const columns = [
    {
      name: " Title",
      selector: (row) => row.title,
      sortable: true,
      sortField: "title",
    },

    {
      name: " Publisher",
      selector: (row) => row.publishers.map((item, i) => item.name),
      sortable: true,
      sortField: "name",
    },
  ];

  return (
    <DataTable
      title="Table 2"
      columns={columns}
      data={data}
      onSort={handleSort}
      pagination
      paginationServer
      paginationTotalRows={pageNo}
      paginationRowsPerPageOptions={[1, 2, 3]}
      onChangeRowsPerPage={handlePerRowsChange}
      onChangePage={handlePageChange}
      dense
      // direction="auto"
      fixedHeader
      fixedHeaderScrollHeight="500px"
      highlightOnHover
      // progressPending
      // responsive
      selectableRowsHighlight
      // selectableRowsNoSelectAll
      // selectableRowsRadio="radio"
      // striped
      subHeader
      subHeaderComponent={
        <input
          type="text"
          placeholder="Search "
          className="form-control w-25"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      }
      subHeaderAlign="right"
      subHeaderWrap
      actions={<button className="btn btn-md btn-info">Export</button>}
    />
  );
}

export default CountryTable;
