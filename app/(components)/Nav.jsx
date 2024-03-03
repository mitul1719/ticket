"use client";

import { faHome, faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const Nav = () => {
  const router = useRouter();
  const flushDB = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/Tickets/", {
        method: "DELETE",
      });

      toast.success("DB Flushed");
    } catch (error) {
      //no ticket found
      //install toaster library
    }
  };
  return (
    <nav className="flex justify-between bg-nav p-4">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <FontAwesomeIcon icon={faHome} className="icon" />
        </Link>
        <Link href="/TicketPage/new">
          <FontAwesomeIcon icon={faTicket} className="icon" />
        </Link>
      </div>
      <div>
        <p className="text-default-text">abc@gmail.com</p>
      </div>
      <button className="btn w-[10%]" onClick={flushDB}>
        Flush
      </button>
    </nav>
  );
};

export default Nav;
