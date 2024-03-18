
import React, { useState, useEffect } from 'react';
import { useNavigate} from 'react-router-dom';

const Table = () => {
  const [tableData, setTableData] = useState([]);
  const [errorTableData, setErrorTableData] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {

    async function fetchTableData() {
      try {
        const response = await fetch(
          'http://polexsoft.com/restaurant/api/restaurantTable.php',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
            body: JSON.stringify({ restaurantId: 1 }),
          }
        );
        const responseData = await response.json();
        if (response.ok && responseData.status === 'success') {
          setTableData(responseData.data);
          setErrorTableData(false);
        } else {
          setErrorTableData(true);
        }
      } catch (error) {
        console.error('Error fetching table data', error);
        setErrorTableData(true);
      }
    }

    fetchTableData(); 
  }, []); 
  
  const handleBookTable = (selectedTable) => {
    navigate(`/Categories`, {
      state: { selectedTable },
    });
  };



  
  return (

    <div className="restaurant-tables-container">
      {/*}
      <div>
        <h1 className='testuser'>Wellcome TestUser </h1>
        <button   className=" profile" onClick={() => {
                  navigate("/Profile");
                }}>Profile</button>
      </div>

      */}
    <h1 className='head'>Select Our Table</h1>
   <div className='tble'>
      <div className="table-data-container">
        
        {tableData.map((table, index) => (
          <div key={index} className="table-data">
         
            <div className='content'>
                
            <img className='tbimg'
        src="https://img.freepik.com/free-photo/wooden-table-looking-out-defocussed-room-interior_1048-11830.jpg?size=626&ext=jpg&ga=GA1.1.1442093961.1702895121&semt=ais"
        alt="Restaurant Table"
      />   
            <p>ID: {table.id}</p>
            <p><b>Table No:</b> {table.tableNo}</p>
            <p>Seating Capacity: {table.seatingCapacity}</p>

            </div>
            <div>
              <button onClick={() => handleBookTable(table)}>Book Table</button>
              </div>
          </div>
        ))}
      </div>
  </div>
  </div>
  );
};

export default Table;
