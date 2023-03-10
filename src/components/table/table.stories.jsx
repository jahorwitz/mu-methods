import { Avatar } from "../avatar/avatar";

import { Table } from "./table";

/* 
 @author [Kurtney J.](https://github.com/xhundo)
*/

// Table Component StoryBook

// Added arg control for avatar: visualization.
export default {
  title: "Components/Table",
  component: Table,
  argTypes: {
    avatar: { control: "text" },
    alt: { control: "text" },
  },
};

export const Primary = (args) => (
  <Table>
    <Table.Header>Primary Accounts</Table.Header>
    <Table.Cell>
      <Avatar shape="round" size="sm" src={args.avatar} alt={args.alt} />
    </Table.Cell>
  </Table>
);

Primary.args = {
  avatar:
    "https://cdn.pixabay.com/photo/2021/05/24/09/15/ethereum-logo-6278328_960_720.png",
};

// Added another heading to see stacking: visuals
export const Secondary = (args) => (
  <Table>
    <Table.Header>Accounts</Table.Header>
    <Table.Cell>
      <Avatar shape="round" size="sm" src={args.avatar} alt={args.alt} />
    </Table.Cell>
    <Table.Header>Linked Accounts</Table.Header>
    <Table.Cell>
      <Avatar shape="round" size="sm" src={args.avatar2} alt={args.alt} />
    </Table.Cell>
  </Table>
);

Secondary.args = {
  avatar: "https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png",
  avatar2:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png",
};
