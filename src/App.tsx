import React, { useCallback, useState } from 'react';
import Homework1 from 'components/pages/Homework1';
import Homework2 from 'components/pages/Homework2';
import styled from 'styled-components';
import classNames from 'classnames';

const AppContainer = styled.div`
  padding: 10px;
`;

type Homework = 'all' | 'homework1' | 'homework2';

type HomeworkListItemProps = {
  currentHomework: Homework;
  homework: Homework;
  onClick(homework: Homework): void;
};

const HomeworkListItem: React.FC<HomeworkListItemProps> = ({ currentHomework, homework, onClick, children }) => {
  return (
    <li className={classNames({ active: homework === currentHomework })} onClick={() => onClick(homework)}>
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
        <HomeworkListItem currentHomework={homework} homework="all" onClick={handleHomeworkClick}>
          전체
        </HomeworkListItem>
        <HomeworkListItem currentHomework={homework} homework="homework1" onClick={handleHomeworkClick}>
          과제 1
        </HomeworkListItem>
        <HomeworkListItem currentHomework={homework} homework="homework2" onClick={handleHomeworkClick}>
          과제 2
        </HomeworkListItem>
      </ul>
      {showPage('homework1') && <Homework1 />}
      {showPage('homework2') && <Homework2 />}
    </AppContainer>
  );
};

export default App;
