import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { clearDate, checkDate } from './features/dateChecker/dateCheckerSlice'

const App = () => {
  const count = useSelector((state) => state.dateChecker.value)
  const dispatch = useDispatch();

  const [dateInput, setDateInput] = useState('');

  const handleDateChange = (e) => {
    dispatch(clearDate(dateInput))
    setDateInput(e.target.value);
  }

  return (
    <div>
      <input type="date" value={dateInput} onChange={handleDateChange}></input>
      <button onClick={() => dispatch(checkDate(dateInput))}>Check</button>
      <p>{count}</p>
    </div>
  );
}

export default App;
