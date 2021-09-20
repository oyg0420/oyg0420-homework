import React, { useCallback, useState } from 'react';
import CardPage from 'components/pages/CardPage';
import InputFormPage from 'components/pages/InputFormPage';
import styled from 'styled-components';
import classNames from 'classnames';

const AppContainer = styled.div`
  padding: 10px;
`;

type Homework = 'all' | 'card' | 'inputForm';

type HomewordListItemProps = {
  currentHomeword: Homework;
  homework: Homework;
  onClick(homework: Homework): void;
};

const HomewordListItem: React.FC<HomewordListItemProps> = ({ currentHomeword, homework, onClick, children }) => {
  return (
    <li className={classNames({ active: homework === currentHomeword })} onClick={() => onClick(homework)}>
      {children}
    </li>
  );
};

const App: React.FC = () => {
  const [homework, setHomework] = useState<Homework>('all');

  const handleHomeworkClick = useCallback((nextHomework: Homework) => {
    setHomework(nextHomework);
  }, []);

  const showPage = useCallback((nextHomework: Homework) => homework === 'all' || homework === nextHomework, [homework]);

  return (
    <AppContainer>
      <ul>
        <HomewordListItem currentHomeword={homework} homework="all" onClick={handleHomeworkClick}>
          전체
        </HomewordListItem>
        <HomewordListItem currentHomeword={homework} homework="card" onClick={handleHomeworkClick}>
          과제 1
        </HomewordListItem>
        <HomewordListItem currentHomeword={homework} homework="inputForm" onClick={handleHomeworkClick}>
          과제 2
        </HomewordListItem>
      </ul>
      {showPage('card') && <CardPage />}
      {showPage('inputForm') && <InputFormPage />}
    </AppContainer>
  );
};

export default App;
