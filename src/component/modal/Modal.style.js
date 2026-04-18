import styled from 'styled-components/native';

export const BackDrop = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: flex-end;
`;

export const ModalContent = styled.View`
  height: 50%;
  background-color: #111;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 15px;
  align-items: center;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;

export const CloseButton = styled.TouchableOpacity``;

export const CloseButtonText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 16px;
`;

export const ChildrenWrapper = styled.View`
  width: 100%;
`;
