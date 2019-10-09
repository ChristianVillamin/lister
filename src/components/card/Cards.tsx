import React from 'react';
import { connect } from 'react-redux';
import { CardState } from '../../store/card/types';
import { addCard } from '../../store/card/actions';
import { AppState } from '../../store/store';
import CardLi from './Card';
import styled from 'styled-components';
import { currentlyAdding } from '../../store/list/actions';
import { Droppable } from 'react-beautiful-dnd';

interface Props {
  listId: string;
  cardState: CardState;
  addCard: typeof addCard;
  currentlyAdding: typeof currentlyAdding;
  adding: boolean;
}

const Cards: React.FC<Props> = ({
  listId,
  cardState,
  addCard,
  currentlyAdding,
  adding
}) => {
  const listCards = cardState.cards.filter(card => card.listId === listId);

  const handleClick = () => {
    addCard(listId);
    currentlyAdding(listId, true);
  };

  return (
    <Container>
      <Droppable droppableId={listId}>
        {provided => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {listCards.map((card, index) => (
              <CardLi key={card.cardId} card={card} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <div className="textarea-container">
        {!adding && <button onClick={handleClick}>+ Add a card</button>}
      </div>
    </Container>
  );
};

const Container = styled.div`
  button {
    background: none;
    color: gray;
    width: 100%;
    height: 30px;
    border: none;
    border-radius: 3px;
    margin: 0;
    margin-bottom: 1px;
    padding: 0;
  }

  button:hover {
    background: lightgray;
    text-decoration: underline;
  }

  textarea {
    font-size: 1rem;
  }

  .textarea-container {
    width: auto;
    margin: var(--g-margin) 0;
  }

  .add-card-textarea {
    width: 100%;
    padding: calc(var(--g-padding) * 2);
    border: 1px rgba(255, 255, 255, 0.5) solid;
  }
`;

const mapStateToProps = (state: AppState) => ({
  cardState: state.card
});

export default connect(
  mapStateToProps,
  { addCard, currentlyAdding }
)(Cards);
