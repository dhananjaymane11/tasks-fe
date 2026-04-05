import React from 'react';
import { Modal as RNModal } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import {
  BackDrop,
  ModalContent,
  Header,
  Title,
  ChildrenWrapper,
  CloseButton,
} from './Modal.style';

const Modal = ({ showModal, setShowModal, title, children }) => {
  return (
    <RNModal
      visible={showModal}
      transparent
      animationType="slide"
      onRequestClose={() => setShowModal(false)}
    >
      <BackDrop>
        <ModalContent>
          <Header>
            <Title>{title}</Title>
            <CloseButton onPress={() => setShowModal(false)}>
              <Ionicons name="close" size={24} color="black" />
            </CloseButton>
          </Header>
          <ChildrenWrapper>{children}</ChildrenWrapper>
        </ModalContent>
      </BackDrop>
    </RNModal>
  );
};

export default Modal;
