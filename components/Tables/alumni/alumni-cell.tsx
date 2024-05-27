import { User, Tooltip, Chip } from "@nextui-org/react";
import React from "react";
import { EditIcon } from "@/components/icons/table/edit-icon";
import { EyeIcon } from "@/components/icons/table/eye-icon";
import { users } from "@/components/table/data";
import { DeleteIcon } from "@/components/icons/table/delete-icon";

interface Props {
  user: (typeof users)[number];
  columnKey: string | React.Key;
}

export const AlumniCell = ({ user, columnKey }: Props) => {
  // @ts-ignore
  const cellValue = user[columnKey];
  switch (columnKey) {
    case "name":
      return (
        <div>
          <div>
            <span>{cellValue}</span>
          </div>
        </div>
      );
    case "profession":
      return (
        <Chip
          size="sm"
          variant="flat"
          color={"success"}
        >
          <span className="capitalize text-xs">{cellValue}</span>
        </Chip>
      );

    case "actions":
      return (
        <div className="flex items-center gap-4 ">
          <div>
            <Tooltip content="Details">
              <button onClick={() => console.log("View user", user.id)}>
                <EyeIcon size={20} fill="#1a9753" />
              </button>
            </Tooltip>
          </div>
          <div>
            <Tooltip content="Edit" color="secondary">
              <button onClick={() => console.log("Edit user", user.id)}>
                <EditIcon size={20} fill="#979797" />
              </button>
            </Tooltip>
          </div>
          <div>
            <Tooltip
              content="Delete"
              color="danger"
              onClick={() => console.log("Delete user", user.id)}
            >
              <button type="button">
                <DeleteIcon size={20} fill="#FF0080" />
              </button>
            </Tooltip>
          </div>
        </div>
      );
    default:
      return cellValue;
  }
};
