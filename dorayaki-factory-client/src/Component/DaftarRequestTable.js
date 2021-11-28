import React, { useMemo, useState, useEffect } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  useRowSelect,
} from "react-table";
import { COLUMNS, Request } from "./DaftarRequestColumns";
import axios, { Axios } from "axios";
import { DaftarFilter } from "./DaftarFilter";
import { Checkbox } from "./DaftarCheckbox";

export const DaftarRequestTable = () => {
  const [loadingData, setLoadingData] = useState(true);
  const [data, setData] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    async function getData() {
      await axios
        .get("http://localhost:3000/dafreq", {
          headers: {
            Authorization: token,
          },
        })
        .then((response) => {
          console.log("data");
          console.log(response.data);
          setData(response.data);
          setLoadingData(false);
        });
    }
    if (loadingData) {
      getData();
    }
  }, []);

  const columns = useMemo(() => COLUMNS, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
    toggleAllRowsSelected,
    selectedFlatRows,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => {
        return [
          {
            id: "selection",
            // Header: ({ getToggleAllRowsSelectedProps }) => (
            //   <Checkbox {...getToggleAllRowsSelectedProps()} />
            // ),
            Cell: ({ row }) => (
              <Checkbox {...row.getToggleRowSelectedProps()} />
            ),
          },
          ...columns,
        ];
      });
    }
  );

  const { globalFilter } = state;

  const acceptPressed = (a) => {
    const token = localStorage.getItem("token");
    console.log("ahoy");
    // console.log(a.hasil[0]);
    // console.log(a.hasil[0].varian);

    axios
      .post("http://localhost:3000/accept", {
        id: a.hasil[0],
      })
      .then((res) => {
        alert("Request berhasil diterima");
        window.location.reload();
      })
      .catch((error) => {
        alert(String(error.response.data.message));
      });
  };

  const declinePressed = (a) => {
    const token = localStorage.getItem("token");
    console.log("ahoy");
    console.log(a.hasil[0]);

    axios
      .post("http://localhost:3000/decline", {
        id: a.hasil[0],
      })
      .then((res) => {
        alert("Request berhasil ditolak");
        window.location.reload();
      })
      .catch((error) => {
        alert(String(error.response.data.message));
      });
  };

  return (
    <>
      <DaftarFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : "🔼"
                      : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps({
                  onClick: () => {
                    toggleAllRowsSelected(false);
                    row.toggleRowSelected();
                  },
                })}
              >
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
        {/* TODO nanti dihapus */}
        <code>
          {console.log(
            {
              selectedFlatRows: selectedFlatRows.map((row) => row.original),
            },
            null,
            2
          )}
        </code>
      </table>
      <button
        className="btn btn-primary m-2"
        onClick={() =>
          acceptPressed({
            hasil: selectedFlatRows.map((row) => row.original),
          })
        }
      >
        Accept
      </button>
      <button
        className="btn btn-danger"
        onClick={() =>
          declinePressed({
            hasil: selectedFlatRows.map((row) => row.original),
          })
        }
      >
        Decline
      </button>
    </>
  );
};
