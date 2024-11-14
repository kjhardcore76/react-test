import React, { useContext, useState } from 'react';
import { AppContext } from '../App';

const CompBodyForm = () => {
  const { setDataArr, dataArr } = useContext(AppContext)
  const [type, setType] = useState('수입');
  const [amount, setAmount] = useState(0);

  const fnRadioChangeHandler = (e) => {
    setType(e.target.value)
  }

  const fnInputHandler = (e) => {
    if(!parseInt(e.target.value)) setAmount('')
    else setAmount(parseInt(e.target.value))
  }

  const fnBtnClickHandler = (e) => {
    e.preventDefault()
    const _amount = type === "수입" ? amount : -amount
    setDataArr([
      {
        id: Date.now(),
        type: type,
        amount: _amount,
      }
      ,...dataArr
    ])
    setType('수입')
    setAmount(0)
  }
  return (
    <form onSubmit={fnBtnClickHandler}>
      <p>
        <label htmlFor='radio'>수입 <input type='radio' name='radio' value={"수입"} checked={type==="수입"} onChange={fnRadioChangeHandler} required /></label>
        <label htmlFor='radio'>지출 <input type='radio' name='radio' value={"지출"} checked={type==="지출"} onChange={fnRadioChangeHandler} required /></label>
      </p>
      <p>
        <label htmlFor="amount">금액</label> <input type="number" onInput={fnInputHandler} value={amount} required />
      </p>
      <p>
        <button>등록</button>
      </p>
    </form>
  );
};

export default CompBodyForm;