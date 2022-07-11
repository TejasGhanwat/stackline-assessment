import React from "react";
import RightContent from "./RightContent";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import "./styles.css";

function Content() {
  const data = useSelector((state: any) => state.dataReducer.data);

  return (
    <div className='sta-content-wrapper'>
      <Sidebar data={data} />
      <RightContent sales={data[0].sales} />
    </div>
  );
}

export default Content;
