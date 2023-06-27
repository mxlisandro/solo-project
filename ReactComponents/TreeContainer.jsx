import React, { useEffect, useState } from 'react';

const TreeRender = () => {
    const [data, setData] = useState([])
  
     useEffect(() => {
        const fetchTreeData = async () => {
            const data = await (
                await fetch("/addTree/trees")).json();
                setData(data);
      }; 
      
    fetchTreeData();
}, [])
    
    return (
      <div>
        {data[`${users}`].map(el => {
            return <li key={`${el._id}`}>{`${el.varietyName} - ${el.lastFertDate}`}</li>
        })}
      </div>
    );
  }
  
  export default TreeRender;