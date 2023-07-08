import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";

const SERVER = process.env.REACT_APP_DEV_BASE_URL;

// A super simple expandable component.
// const ExpandedComponent = ({ data }) => <pre>{JSON.stringify({data:data?.capital}, null, 15)}</pre>;

function CountryTable() {
  console.log(process.env.REACT_APP_DEV_BASE_URL);
  const [page, setPage] = useState();
  const [loading, setLoading] = useState(false);
  // total records
  const [pageNo, setPageNo] = useState(2);
  const [recordPerPage, setRecordPerPage] = useState(3);
  const [sortDirection, setSortDirection] = useState("asc");
  const [sortField, setSortField] = useState("userName");
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  // const [filterData, setFilteredData] = useState([]);

  useEffect(() => {
    getData();
  }, [recordPerPage, page, sortDirection, sortField, search]);

  console.log(search);

  const getData = async () => {
    try {
      console.log(`${process.env.REACT_APP_DEV_BASE_URL}user-book/show-member`);
      const res = await axios.post(
        // `http://localhost:8012/show-member?sort=${sortDirection}&page=${page}&field=${sortField}`
        `http://localhost:8012/user-book/show-member/`,
        // `${process.env.REACT_APP_DEV_BASE_URL}user-book/show-member`,
        {
          data: {
            page,
            recordPerPage,
            sortDirection,
            sortField,
            search,
          },
        }
      );
      const bookAuthor = await res.data;
      setData(bookAuthor.rows);
      // setFilteredData(bookAuthor.rows);
      setPageNo(bookAuthor.count);
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
      name: " Id",
      selector: (row) => row.user.id,
      sortable: true,
      sortField: "id",
    },
    {
      name: " Name",
      selector: (row) => row.user.userName,
      sortable: true,
      sortField: "userName",
    },
    {
      name: "Card No.",
      selector: (row) => row.cardNo,
      sortable: true,
      sortField: "cardNo",
    },
    {
      name: "Gender",
      selector: (row) => row.user.gender,
      sortable: true,
      sortField: "gender",
    },
    {
      name: "City",
      selector: (row) => row.user.city,
      sortable: true,
      sortField: "city",
    },
    {
      name: "Email",
      selector: (row) => row.user.email,
      sortable: true,
      sortField: "email",
    },
    {
      name: "Membership Start",
      selector: (row) => row.membership_start,
      sortable: true,
      sortField: "membership_start",
    },
    {
      name: "Membership End",
      selector: (row) => row.membership_end,
      sortable: true,
      sortField: "membership_end",
    },
  ];
  return (
    <DataTable
      title="User Data"
      columns={columns}
      data={data}
      onSort={handleSort}
      pagination
      paginationServer
      paginationTotalRows={pageNo}
      paginationRowsPerPageOptions={[3, 5, 10, 12, 15]}
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
