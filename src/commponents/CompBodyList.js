import React, { useContext } from 'react';
import { AppContext } from '../App';

const CompBodyList = () => {
  const {dataArr, setDataArr} = useContext(AppContext)
  const fnBtnClickHandler = (e) => {
    setDataArr(dataArr.filter(data => data.id != parseInt(e.target.value)))
  }
  return (
    <ul>
      {
        dataArr.map(data => 
          <li key={data.id}>
            <p>
            ({data.type})
            {Math.abs(data.amount)}
            &nbsp;
            <button value={data.id} onClick={fnBtnClickHandler}>삭제</button>
            </p>
          </li>
        )
      }
    </ul>
  );
};

export default CompBodyList;