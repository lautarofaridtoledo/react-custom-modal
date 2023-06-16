import styled from "styled-components";
import {FC, ReactNode} from "react";
import {modalWidth} from "../utilities/enum/modalWidth.ts";

interface Props {
    header?: string;
    children: ReactNode;
    isOpen: boolean;
    toggle: () => void;
    showOverlay?: boolean;
    showModalHeader?: boolean;
    borderRadius?: string;
    modalWidth: 'sm' | 'md' | 'lg' | 'xl';
    modalBackground?: 'hexa' | "rgb" | string ;
    alignment?: 'center' | 'end' | 'start';
    padding?: string;
    closeButtonColor?: string;
}

const CustomModal:FC<Props> = ({
   header,
   children,
   isOpen,
   toggle,
   showModalHeader = true,
   showOverlay = true,
   borderRadius= '5px',
   modalWidth= 'lg',
   modalBackground,
   alignment = 'center',
   padding = '20px',
   closeButtonColor,
}) =>
    (
        isOpen &&
            <Overlay
                showoverlay={showOverlay}
                alignment={alignment}
            >
                <ContainerCustomModal
                    borderRadius={borderRadius}
                    modalWidth={modalWidth}
                    modalBackground={modalBackground}
                    padding={padding}
                >
                    {
                        showModalHeader &&
                        <ModalHeader>
                            <h3>{header ?? 'Modal Title'}</h3>
                        </ModalHeader>
                    }


                    <CloseButton
                        closeButtonColor={closeButtonColor}
                        onClick={() => toggle()}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-x" viewBox="0 0 16 16"
                        >
                            <path
                                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </CloseButton>

                    {children}
                </ContainerCustomModal>
            </Overlay>
    )

export default CustomModal;

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${props=> props["showOverlay"]  ? 'rgba(0,0,0,.5)' : 'rgba(0,0,0,0)' };
    
  display: flex;
  justify-content: ${props => props.alignment};
  align-items: center;
`;

const ContainerCustomModal = styled.div`
  width: ${props => modalWidth[props["modalWidth"]]};
  min-height: 100px;
  background: ${props => (props.modalBackground !== "" || props.modalBackground) ? props.modalBackground : '#FFFFFF'};
  position: relative;
  border-radius: ${props => props.borderRadius};
  box-shadow: rgba(100, 100, 111,0.2) 0 7px 29px 0;
  padding: ${props => props.padding};

  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 500px) {
    width: auto;
    margin: 20px;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #E8E8E8;
  width: 100%;
  
  h3 {
    font-weight: 500;
    font-size: 16px;
    color: #1766DC;
  }

  @media (max-width: 500px) {
    margin-bottom: 10px;
    padding-bottom: 0;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 30px;
  right: 15px;
  
  width: 30px;
  height: 30px;
  border: none;
  background: none;
  cursor: pointer;
  transition: .3s ease all;
  border-radius: 5px;
  color: ${props => props.closeButtonColor || '#0e0e0e'};
  
  &:hover {
    background: #F2F2F2;
  }
  
  svg {
    width: 100%;
    height: 100%;
  }
`;
