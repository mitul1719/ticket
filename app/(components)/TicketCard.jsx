"use client";

import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";

const TicketCard = ({ title, description, priority, progress, status, createdAt, _id }) => {
  const formatTimeStamp = (timestamp) => {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };

    const date = new Date(timestamp);

    const formattedDate = date.toLocaleString("en-us", options);

    return formattedDate;
  };
  return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3">
        <PriorityDisplay priority={priority} />
        <div className="ml-auto">
          <DeleteBlock id={_id} />
        </div>
      </div>
      <h4>{title}</h4>
      <hr className="h-px border-0 bg-page mb-2" />
      <p className="whitespace-pre-wrap">{description}</p>
      <div className="flex-grow"></div>

      <div className="flex mt-2">
        <div className="flex flex-col basis-[70%]">
          <p className="text-xs my-1">{formatTimeStamp(createdAt)}</p>
          <ProgressDisplay progress={progress} />
        </div>

        <div className="ml-auto flex items-end">
          <StatusDisplay status={status} />
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
