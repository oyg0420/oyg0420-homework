import Cards from 'components/pages/Cards';
import { useState } from 'react';
import styled from 'styled-components';

const AppContainer = styled.div`
  padding: 10px;
`;

function App() {
  const [page, setPage] = useState<'card' | 'form'>('card');

  return (
    <AppContainer>
      <label htmlFor="card">Card</label>
      <input
        name="card"
        type="radio"
        onChange={() => setPage('card')}
        checked={page === 'card'}
      />
      <label htmlFor="text">Text</label>
      <input
        name="text"
        type="radio"
        onChange={() => setPage('form')}
        checked={page === 'form'}
      />
      {page === 'card' && <Cards />}
    </AppContainer>
  );
}

export default App;
