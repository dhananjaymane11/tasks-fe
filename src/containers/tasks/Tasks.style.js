import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #111;
  padding: 20px 10px;
  width: 100%;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #fff;
`;

export const AddButton = styled.TouchableOpacity`
  background: #2f80ed;
  padding: 4px 8px;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
`;

export const ModalText = styled.Text`
  font-size: 18px;
  margin-bottom: 20px;
`;
