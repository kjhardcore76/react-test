import { createContext, useState } from "react";
import CompHeader from "./commponents/CompHeader";
import CompFooter from "./commponents/CompFooter";
import CompBody from "./commponents/CompBody";
export const AppContext = createContext();

function App() {
  const [dataArr, setDataArr] = useState([
/*     {id:1, type:'수입', amount: 5000},
    {id:2, type:'수입', amount: 5000},
    {id:3, type:'지출', amount: -5000},
    {id:4, type:'지출', amount: -3000},
    {id:5, type:'지출', amount: -10000}, */
  ]);
  return (
    <AppContext.Provider value={{dataArr, setDataArr}}>
      <CompHeader/>
      <CompBody/>
      <CompFooter/>
    </AppContext.Provider>
  );
}

export default App;
