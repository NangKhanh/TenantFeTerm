import React, { useEffect, useState } from "react";
import './style/dashboard.css'
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
const Dashboard = ({ match }) => {
  const [rootApiRes, setRootApiRes] = useState([]);
  const [list, setList] = useState([]);
  const location = useLocation();



  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setRootApiRes(data);
        setList(data)
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    let searchValue = location?.search?.split("=")[1] || " ";
    setList(rootApiRes.filter((api) => {
      return api.title.toLowerCase().includes(searchValue.toLowerCase());
    }))
  }, [location]);

  return (
    <div className="dashboard">
      <h1 className="wellcome">
        Welcome, Amantha
        <i><img alt="" src={("/assets/images/icons/handicon.png")} /></i>
      </h1>
      <p>Supports organization in meansuring and managing CO2 footprint.</p>
      <div>
        <ul>
          {list?.map((item, index) => (
            <li key={index}>{item.title}</li>
          ))}
        </ul>
      </div>
    </div>
  )
};

export default Dashboard;
