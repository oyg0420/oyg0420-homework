import React from 'react';
import styled from 'styled-components';
import Card from '../modules/Card';

const CardPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const FlexBox = styled.div`
  display: flex;
  flex: 1;
`;

const CardPage: React.FC = () => {
  return (
    <CardPageContainer>
      <h1>과제1</h1>
      <FlexBox>
        <Card>
          <Card.ImageCap />
          <Card.Body>
            <Card.LabelGroup flexDirection="column">
              <Card.Label>Card Label</Card.Label>
              <Card.Title.H4>Card Title</Card.Title.H4>
            </Card.LabelGroup>
            <Card.LabelGroup>
              <Card.Label theme="hilight">Hilight</Card.Label>
              <Card.Label status="cancel" size="small">
                Cress Out
              </Card.Label>
            </Card.LabelGroup>
          </Card.Body>
          <Card.Footer>
            <Card.Star totalScore={5} currentScore={3} />
            <Card.Text>
              Geckos are a group of usually small, usually nocturnal lizards. They are found on every continent except
              Australia.
            </Card.Text>
          </Card.Footer>
        </Card>

        <Card>
          <Card.ImageCap />
          <Card.Body>
            <Card.LabelGroup flexDirection="column">
              <Card.Label>Card Label</Card.Label>
              <Card.Title.H4>Card Title</Card.Title.H4>
            </Card.LabelGroup>
            <Card.LabelGroup>
              <Card.Label theme="hilight">Hilight</Card.Label>
              <Card.Label status="cancel" size="small">
                Cress Out
              </Card.Label>
            </Card.LabelGroup>
          </Card.Body>
          <Card.Footer>
            <Card.Text>
              Geckos are a group of usually small, usually nocturnal lizards. They are found on every continent except
              Australia.
            </Card.Text>
          </Card.Footer>
        </Card>

        <Card>
          <Card.ImageCap />
          <Card.Body>
            <Card.LabelGroup flexDirection="column">
              <Card.Label>Card Label</Card.Label>
              <Card.Title.H4>Card Title</Card.Title.H4>
            </Card.LabelGroup>
            <Card.LabelGroup>
              <Card.Label theme="hilight">Hilight</Card.Label>
              <Card.Label status="cancel" size="small">
                Cress Out
              </Card.Label>
            </Card.LabelGroup>
          </Card.Body>
        </Card>

        <Card mode="horizon">
          <Card.ImageCap />
          <Card.Body>
            <Card.Title.H4>
              Some species live in houses where they hunt insects attracted by artificial light.
            </Card.Title.H4>
            <Card.Text maxLines={3}>
              Geckos are a group of usually small, usually nocturnal lizards. They are found on every continent except
              Australia. Some species live in houses where they hunt insects attracted by artificial light.
            </Card.Text>
            <Card.LabelGroup>
              <Card.Star totalScore={5} currentScore={3} />
              <Card.Label>|</Card.Label>
              <Card.Label>John Doe</Card.Label>
            </Card.LabelGroup>
          </Card.Body>
        </Card>
      </FlexBox>
    </CardPageContainer>
  );
};

export default CardPage;
