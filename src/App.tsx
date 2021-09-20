import Cards from 'components/pages/Cards';
import styled from 'styled-components';

const AppContainer = styled.div`
  padding: 10px;
`;

function App() {
  return (
    <AppContainer>
      <Cards />
    </AppContainer>
  );
}

export default App;
