import React,{useState} from "react";
import Modal from 'react-bootstrap/Modal';
// import {Button} from "../button";
import styled from "styled-components";
import closeIcon from "../../assets/closeIcon.svg";
import rectangleModalHeader from "../../assets/rectangleModalHeader.svg"

/**
 The **Modal** component is the base of all the modals in the web app.
 *
 *  @author [Nuriya](https://github.com/NuriyaAkh)
 */
const ModalComponent = styled.div`
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  transition: visibility 0s ease-in-out 0.4s, opacity 0.4s ease-in-out;
  margin: 0;
  padding: 0;
  color: white;
  //visibility: hidden;
  
  
  @media (max-width: 1000px) {
    align-items: flex-end;
    transform: translateX(0%);
    animation: fadeIn 1s, slideIn 1s linear;
  @keyframes slideIn {
    0% {
      transform: translateY(500px);
      animation-timing-function: linear;
    }
    60% {
      transform: translateY(-30px);
      animation-timing-function: linear;
    }
    100% {
      transform: translateY(0px);
      animation-timing-function: linear;
    }
   
  }
  
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  }
`;
const ModalComponent1 = styled.div`
  box-sizing: border-box;
  justify-content: center;
  align-items: flex-end;
  position: fixed;

  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  transition: transform 0.3s ease, visibility 0s ease-in-out 0.4s,
    opacity 0.4s ease-in-out;
  margin: 0;
  padding: 0;
  visibility: visible;
  opacity: 1;
  pointer-events: all;
  transition-delay: 0s;
  @media (max-width: 1000px) {
    align-items: flex-end;
    bottom: -100%;
    transform: translateX(-100%);
  }
`;
const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 375px;
  min-height: 465px;
  background: #2d2d41;
  border-radius: 16px 16px 0px 0px;
  align-items: center;
  padding: 16px 16px 24px;
  box-sizing: border-box;
  position: relative;
  justify-content: space-between;
  @media (min-width: 1000px) {
    border-radius: 16px 16px 16px 16px;
  }
`;
const ModalHeader = styled.div`
  display: flex;
  justify-content: center;
  // background-color:transparent;
  // background-image:url("${rectangleModalHeader}");
  
  @media (min-width: 1000px) {
    display: none;
  }
`;
const ModalTitle = styled.p`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 120%;
  /* identical to box height, or 12px */
  text-align: center;
  text-transform: uppercase;
  font-feature-settings: "pnum" on, "lnum" on;
  color: rgba(246, 246, 246, 0.7);
  margin: 32px 0 16px;
  @media (min-width: 1000px) {
    margin: 84px 0 12px;
  }
`;
const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
`;

const ModalText = styled.h3`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 120%;
  /* identical to box height, or 22px */
  text-align: center;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #f6f6f6;
  margin-bottom: 32px;
`;
const ModalNotificationBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 111px;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 120%;
  /* or 22px */
  text-align: center;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #f6f6f6;
  padding: 0 30px;
`;
const ModalFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-end;
`;
const ModalCloseButton = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 26px;
  right: 26px;
  width: 12px;
  height: 12px;
  background-color: transparent;
  background-image: url("${closeIcon}");

  background-position: center;
  background-size: cover;
  border: none;
  cursor: pointer;
  transition: opacity 0.3s;
  @media (max-width: 1000px) {
    display: none;
  }
`;
const Button = styled.button`
  width: 343px;
  height: 60px;
  margin-top: 12px;
  border-radius: 8px;
  border: none;
  //opacity:0.5;
`;
const Modal1 = ({
  isOpen,
  onClose,
  header,
  title,
  text,
  children,
  notifications,
  footer,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClose = () => setIsModalOpen(false);
  const handleOpenClick = () => setIsModalOpen(true);
  // return (
  //   <>
  // <button onClick={handleOpenClick} class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#appModal">open modal</button> 
  //    <ModalComponent show ={isModalOpen} onHide={handleClose}>
  
  //   <ModalContainer>
  //       <ModalCloseButton
  //         type="button"
  //          onClick={onClose}
  //         aria-label="Close modal"
  //        ></ModalCloseButton>
  //        <div>
  //          <ModalHeader>{header}
  //            <svg
  //             width="40"
  //             height="2"
  //              viewBox="0 0 40 2"
  //            fill="none"
  //             xmlns="http://www.w3.org/2000/svg"
  //           >
  //              <rect
  //                width="40"
  //               height="2"
  //                rx="1"
  //                fill="#F6F6F6"
  //               fillOpacity="0.5"
  //              />
  //            </svg>
  //         </ModalHeader>
  //          <ModalTitle>{title}</ModalTitle>
  //        <ModalBody>
  //           <ModalText>{text}</ModalText>
     
  //    <ModalNotificationBox>{notifications}</ModalNotificationBox>
  //          </ModalBody>
  //        </div>
  //        <ModalFooter>
  //          {footer}
  //          <Button className="bg-dangerOpacity50">Decline</Button>
  //         {/* <Button className="bg-primary">Sign In</Button> */}
  //        </ModalFooter>
  //      </ModalContainer> 


  //   </ModalComponent>
    
  //   </> )
 
  return (isOpen ? (
    <ModalComponent>
    
   
      {" "}
      {children}
      <ModalContainer>
        <ModalCloseButton
          type="button"
          onClick={onClose}
          aria-label="Close modal"
        ></ModalCloseButton>
        <div>
          <ModalHeader>{header}
            <svg
              width="40"
              height="2"
              viewBox="0 0 40 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="40"
                height="2"
                rx="1"
                fill="#F6F6F6"
                fillOpacity="0.5"
              />
            </svg>
          </ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          <ModalBody>
            <ModalText>{text}</ModalText>
            <ModalNotificationBox>{notifications}</ModalNotificationBox>
          </ModalBody>
        </div>
        <ModalFooter>
          {footer}
          <Button className="bg-dangerOpacity50" type="button"onClick={onClose}>Decline</Button>
          <Button className="bg-primary" type="submit">Sign In</Button>
        </ModalFooter>
      </ModalContainer>
    </ModalComponent>
  ) : (
    ""
  ))
};
export default Modal1;

Modal.Header = ModalHeader;
Modal.Title = ModalTitle;
Modal.Container = ModalContainer;
Modal.Footer = ModalFooter;
Modal.Body = ModalBody;
