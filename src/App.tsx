import {FC, ReactNode, useState} from 'react'
import styled from "styled-components";
import CustomModal from "./components/CustomModal.tsx";

interface Props {
    toggle?: ReactNode;
    children: ReactNode;
}

const App:FC<Props> = ({toggle, children}) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleToggle = () =>
  {
    setIsOpenModal(prevState => !prevState)
  }

  return (
    <>
       <ModalContainer>
           {
               toggle ??
               <CustomButton onClick={handleToggle}>
                Open
               </CustomButton>
           }
       </ModalContainer>
       <CustomModal
           isOpen={isOpenModal}
           toggle={handleToggle}
           showOverlay={true}
           showModalHeader={true}
           header={'Alert!'}
           borderRadius={'15px'}
           modalWidth={'lg'}
           alignment={'center'}
       >
           {children}
       </CustomModal>
    </>
  )
}

export default App;

const ModalContainer = styled.div`
  padding: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const CustomButton = styled.button`
  display: block;
  padding: 10px 30px;
  border-radius: 10px;
  box-shadow: 5px 5px 13px -9px #474747;
  color: white;
  background-color: #1766DC;
  border: none;
  cursor: pointer;
  font-family: "Roboto Light", sans-serif;
  font-weight: 500;
  transition: .3s ease all;
  
  :hover {
    background-color: #0066FF;  
  }
`;

const ChildrenTest = styled.div`
    width: 450px;
    height: 200px;
    background-color: beige;
    text-align: center;
    overflow: hidden scroll;
  
  @media (max-width: 500px) {
    width: auto;
  }
`;
