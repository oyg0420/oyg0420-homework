import React from 'react';
import CardPage from 'components/pages/CardPage';
import InputFormPage from 'components/pages/InputFormPage';
import styled from 'styled-components';

const AppContainer = styled.div`
  padding: 10px;
`;

const App: React.FC = () => {
  return (
    <AppContainer>
      <CardPage />
      <InputFormPage />
    </AppContainer>
  );
};

export default App;
