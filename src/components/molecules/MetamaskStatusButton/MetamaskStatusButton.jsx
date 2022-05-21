import React from "react";
import CustomButton from "../../atoms/CustomButton/CustomButton";
import { WalletOutlined } from "@ant-design/icons";
import { ReactComponent as Metamask } from "../../../images/metamask.svg";
import { useAppProvider } from "../../../context/AppProvider";

const MetamaskStatusButton = () => {
  const { accounts } = useAppProvider();
  return (
    <CustomButton
      text={accounts.length ? accounts[0] : "Wallet not connected"}
      iconWallet={accounts.length ? <Metamask /> : <WalletOutlined />}
      theme={accounts.length ? "secondary" : "primary"}
    />
  );
};

export default MetamaskStatusButton;
