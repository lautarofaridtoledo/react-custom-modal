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
           {/*{children}*/}
           <ChildrenTest>
               <h1>Contenido premium</h1>
               <p>Lorem 🇦🇷 ipsum dolorem ets </p>
               <p>Donec vel risus tellus. Sed purus est, fringilla quis ultricies non, euismod eget sapien. Vestibulum lorem metus, tincidunt in hendrerit vitae, lobortis non neque. Pellentesque pharetra ut ipsum in egestas. Cras id eros convallis, faucibus neque euismod, maximus magna. Maecenas ac vulputate ligula. Vivamus porttitor pretium urna id dignissim. Duis quis semper arcu. Integer in egestas enim. Suspendisse potenti. Sed eleifend leo nunc, quis feugiat metus cursus ac. Fusce venenatis ipsum a turpis rutrum fringilla.

                   Donec in diam eu massa scelerisque finibus. Nullam ut bibendum diam, maximus ullamcorper massa. Donec vitae augue venenatis, lacinia mauris a, scelerisque ipsum. Praesent a iaculis magna. Donec eget accumsan nibh, et ullamcorper leo. Praesent pellentesque lectus ac lorem aliquet accumsan. Morbi sodales lectus quis arcu accumsan consectetur.</p>
           </ChildrenTest>
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
