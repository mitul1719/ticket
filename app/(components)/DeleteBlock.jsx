"use client";

import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from "sonner";
import { getAllTickets } from "../page";

const DeleteBlock = ({ id }) => {
  const deleteItem = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        toast.success("Deleted Successfully");
        getAllTickets();
      }
    } catch (error) {}
  };
  return <FontAwesomeIcon icon={faX} className="text-red-400 hover:cursor-pointer hover:text-red-200" onClick={deleteItem} />;
};

export default DeleteBlock;
