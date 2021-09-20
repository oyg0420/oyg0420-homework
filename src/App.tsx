import React, { useCallback, useState } from 'react';
import Homework1 from 'components/pages/Homework1';
import Homework2 from 'components/pages/Homework2';
import styled from 'styled-components';
import classNames from 'classnames';

const AppContainer = styled.div`
  padding: 10px;
`;

type Homework = 'all' | 'homework1' | 'homework2';

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
        <HomewordListItem currentHomeword={homework} homework="homework1" onClick={handleHomeworkClick}>
          과제 1
        </HomewordListItem>
        <HomewordListItem currentHomeword={homework} homework="homework2" onClick={handleHomeworkClick}>
          과제 2
        </HomewordListItem>
      </ul>
      {showPage('homework1') && <Homework1 />}
      {showPage('homework2') && <Homework2 />}
    </AppContainer>
  );
};

export default App;
