import React from "react";
//import { ArrowRightOutlined } from "@ant-design/icons";
import "./_TotalBalance.scss";

const TotalBalance = ({ coinIcon, coinName, balanceAmount, balanceAmountUSD }) => (
  <div className="TotalBalance">
    {/* <div className="Title"> */}
    {/* <span>{coinName}</span> */}
    {/*<a href="">
        <img src="/external-link.svg" alt="" />
</a>*/}
    {/* </div> */}
    <div className="ContentInfo">
      <img className="CoinIcon" src={coinIcon} alt="" />
      <div className="Cointext">
        <p className="CoinTitle">{coinName}</p>
        <h4 className="CoinAmount">{balanceAmount}</h4>
        {balanceAmountUSD ? (
          <p className="CoinAmountConverted">{balanceAmountUSD} USD</p>
        ) : null}
      </div>
    </div>
  </div>
);

export default TotalBalance;
