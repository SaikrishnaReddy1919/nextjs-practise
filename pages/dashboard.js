import { useEffect, useState } from "react";

const Dashboard = () => {
  const [isLoading, setisLoading] = useState(true);
  const [dashboardData, setdashboardData] = useState(null);

  useEffect(() => {
    async function fecthDashboardData() {
      let data = await fetch("http://localhost:4000/dashboard");
      data = await data.json();
      setdashboardData(data);
      setisLoading(false);
    }
    fecthDashboardData();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <div>
        <h2>Dashboard :</h2>
        <h4>Likes : {dashboardData.likes}</h4>
        <h4>Followers : {dashboardData.followers}</h4>
      </div>
    </>
  );
};

export default Dashboard
