import React, { useEffect, useState } from 'react';



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

    return (
      <div>
        {data.map((tree, index) =>
            <li key={index}> 
                <div>Variety Name: {`${tree.varietyName}`}</div>
                <div>Last fertilization date: {`${tree.lastFertDate}`}</div>
                <div>Next fertilization date: {`${tree.lastFertDate}`}</div>
            </li>
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