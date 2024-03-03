const STATUS = {
  0: "STARTED,bg-yellow-200",
  1: "DONE,bg-green-200",
  "-1": "NOT DONE,bg-red-200",
};

const StatusDisplay = ({ status }) => {
  return <span className={`inline-block rounded-full px-2 py-1 text-xs font-semibold text-gray-700 ${STATUS[status.toString()].split(",")[1]}`}>{STATUS[status.toString()].split(",")[0]}</span>;
};

export default StatusDisplay;
