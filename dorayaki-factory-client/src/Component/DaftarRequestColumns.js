import { format } from "date-fns";
export const COLUMNS = [
  {
    Header: "Id",
    accessor: "request_id",
  },
  {
    Header: "Varian",
    accessor: "varian",
  },
  {
    Header: "Jumlah",
    accessor: "jumlah",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Waktu",
    accessor: "waktu",
    Cell: ({ value }) => {
      return format(new Date(value), "dd-MM-yyyy hh:mm:ss");
    },
  },
];
