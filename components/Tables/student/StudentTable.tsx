import {
  Link,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import React from "react";
import { users } from "@/components/table/data";
import { studentColumns } from "@/data/dataColumns";
import { StudentCell } from "./student-cell";
import { fetchStudents } from "@/lib/data";

export const StudentTable = async ({searchParams}) => {

    const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, students } = await fetchStudents(q, page);


  return (
    <div className=" w-full flex flex-col gap-4">
      <Table aria-label="Example table with custom cells">
        <TableHeader columns={studentColumns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              hideHeader={column.uid === "actions"}
              align={column.uid === "actions" ? "center" : "start"}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={students}>
          {(item) => (
            <TableRow>
              {(columnKey) => (
                <TableCell>
                  {StudentCell({ user: item, columnKey: columnKey })}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};
