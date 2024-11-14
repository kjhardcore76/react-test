import { useContext } from "react";
import { AppContext } from "../App";

const CompFooter = () => {
  const {dataArr} = useContext(AppContext);
  return (
    <footer>
      <hr />
      <b>총금액</b> : {
        dataArr.reduce((acc, curData) => acc + curData.amount, 0)
      }
    </footer>
  );
};

export default CompFooter;