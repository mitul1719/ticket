import TicketCard from "./(components)/TicketCard";
import { Toaster } from "sonner";

export async function getAllTickets() {
  try {
    const res = await fetch("http://localhost:3000/api/Tickets/", {
      cache: "no-store",
    });

    return res.json();
  } catch (error) {
    //no ticket found
    //install toaster library
  }
}

const Dashboard = async () => {
  const { tickets } = await getAllTickets();

  const uniqueCategories = [...new Set(tickets?.map(({ category }) => category))];
  return (
    <>
      <Toaster />
      <div className="p-5">
        <div>
          {uniqueCategories?.map((uniqueCategory, categoryIndex) => {
            return (
              <div key={categoryIndex} className="mb-4">
                <h2>{uniqueCategory}</h2>
                <div className="lg:grid grid-cols-2 xl:grid-cols-4">
                  {tickets
                    .filter(({ category }) => category === uniqueCategory)
                    .map((filteredTicket) => {
                      return <TicketCard {...filteredTicket} key={filteredTicket._id} />;
                    })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
