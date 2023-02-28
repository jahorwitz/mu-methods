import { Button, Layout } from "../../../../components"; //button needs to be changed when avail
import { Header } from "../../../../components/layout/header";

import { Body } from "./body";

//trying data as a prop to grab qr values - will use faker
export const ConnectWalletScan = ({
  onBackClick,
  onForwardClick,
  onEnterKey,
}) => {
  return (
    <Layout
      className="mb-32px"
      header={
        <>
          <Header.Left>
            <Button onClick={onBackClick} className="w-100">
              **
            </Button>
          </Header.Left>
          <Header.Center>
            <Header.Title title="Connecting wallet" />
            <Header.SubTitle subtitle="Step 1/4" />
          </Header.Center>
        </>
      }
      body={<Body></Body>}
      footer={
        <>
          <div className="d-flex flex-column gap-16px">
            <Button onClick={onEnterKey} className="mt-auto">
              Or enter public key manually
            </Button>
            <Button onClick={onForwardClick}>Continue</Button>
          </div>
        </>
      } //replace buton with step button
    ></Layout>
  );
};