import React, { useEffect, useState } from 'react';
import moment from 'moment';



const TreeRender = () => {
  console.log('TreeRender component...')
    const [data, setData] = useState([])

    useEffect(() => {
      console.log('running useEffect...')
      getData()
      }, []);        
          
      const getData = () => {
        return fetch('http://localhost:3000/api/addTree/trees')
        .then((response) => { 
            return response.json().then((data) => {
                console.log('data', data);
                setData(data)
                return data;
            }).catch((err) => {
                console.log(err);
            }) 
        });
      }
      const dateArray = [];
      data.map((tree) => {
        const newStr = tree.lastFertDate.replace(/-/g, "");
        dateArray.push(newStr);
      });

    return (
        
      <div style={{textAlign: 'center'}}>
        {data.map((tree, index) =>
        <ul style={{listStylePosition: "inside"}} key={index}>
                <li>Variety Name: {`${tree.varietyName}`}</li>
                <li>Last fertilization date: {`${tree.lastFertDate}`}</li>
                <li>Next fertilization date: {`${moment(dateArray[index], "YYYYMMDD").add(14, 'd').format("YYYY-MM-DD")}`}</li>
        </ul>
         )}      
      </div>

      // <div>
      //   {data[`${users}`].map(el => {
      //       return <li key={`${el._id}`}>{`${el.varietyName} - ${el.lastFertDate}`}</li>
      //   })}
      // </div>

    );
  }
  
  export default TreeRender;