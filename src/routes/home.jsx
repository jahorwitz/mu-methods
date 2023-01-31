import {Modal }from "../components/modal/modal";
import { Popup1 } from "../components/modal/popup";
import React,{useState,useEffect} from "react"



export const Home = () => {
  const [isModalOpen,setIsModalOpen]=useState(false);
const handleOpenClick=()=>{
  setIsModalOpen(true);
}
const closeModal=()=>{
  setIsModalOpen(false);
}
useEffect(() => {
  const handleClickClose = (event) => {
    if (event.target.classList.contains('modal')) {
      closeModal();
    }
  };

  const handleEscClose = (event) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  };

  if (isModalOpen) {
    document.addEventListener('click', handleClickClose);
    document.addEventListener('keydown', handleEscClose);
  }

  return () => {
    document.removeEventListener('click', handleClickClose);
    document.removeEventListener('keydown', handleEscClose);
  };
}, [isModalOpen]);


  return (
    <div className="bg-alpha">
      <h1>Home</h1>
       <Modal isOpen ={isModalOpen} onClose={closeModal}  title={"coinbase"} text={"Transaction for 0.008 ETH sign request"} notifications={"Type “carrot pizza” to sign your transaction"} />
       <button onClick={handleOpenClick} className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#appModal">open modal</button> 
    </div>
  );
};
