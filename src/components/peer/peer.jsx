import styled from "styled-components";
import { Avatar } from "../avatar/avatar";
import { Button } from "../button";

/**
 * @author [Kurtney J.](https://github.com/xhundo)
 * @param src expects src for avatar
 * @param peer expects peer information (name)
 * @param size avatar size by default is small.
 * @param shape avatar shape by default is rounded.
 * @param {string} title by default is chosen peers
 * @param children expects peer title and peer cell
 * @param isAdding expects true or false for adding new peers with add icon instead of delete icon.
 * @function handleDeletePeer expects func to remove peer
 * @function handleAddPeer expects func  to add peers
 */

const Container = styled.div`
  max-width: 343px;
`;

const PeerCell = styled.div`
  max-width: 100%;
  min-height: 60px;
`;

const PeerText = styled.p`
  font-weight: 700;
  line-height: 21px;
`;

export const Peer = ({ children, title = "Chosen peers" }) => {
  return (
    <Container role="container" className="mb-2">
      <Peer.Header>{title}</Peer.Header>
      {children}
    </Container>
  );
};

const Header = ({ children }) => {
  return (
    <h1 role="heading" className="fs-18px text-white text-center lh-sm mb-16px">
      {children}
    </h1>
  );
};

const Cell = ({
  src,
  peer,
  alt,
  size = "sm",
  shape = "round",
  isAdding,
  handleAddPeer,
  handleDeletePeer,
}) => {
  return (
    <PeerCell
      role="cell"
      className="d-flex flex-row bg-white bg-opacity-10 align-items-center rounded mb-16px"
    >
      <div role="avatar" className="ms-8px me-12px">
        <Avatar src={src} alt={alt} size={size} shape={shape} />
      </div>
      <div className="d-flex justify-content-between align-items-center w-100 me-18px">
        <PeerText role="peer" className="text-white fs-18px mb-0">
          {peer}
        </PeerText>
        {isAdding ? (
          <Button
            buttonKind="textOnly"
            onClick={handleAddPeer}
            rightIcon="add"
            size="sm"
          />
        ) : (
          <Button
            buttonKind="textOnly"
            onClick={handleDeletePeer}
            rightIcon="delete"
            size="sm"
          />
        )}
      </div>
    </PeerCell>
  );
};

Peer.Header = Header;
Peer.Cell = Cell;
