import {
  SET_CARDS,
  ADD_CARD,
  EDIT_CARD,
  DELETE_CARD,
  CROSS_CARD,
  Card,
  INIT_CARD
} from './types';

export const setCards = (card: Card[]) => {
  return {
    type: SET_CARDS,
    payload: { card }
  };
};

export const addCard = (listId: string) => {
  return {
    type: ADD_CARD,
    payload: { listId }
  };
};

export const editCard = (id: string, text: string) => {
  return {
    type: EDIT_CARD,
    payload: { id, text }
  };
};

export const deleteCard = (id: string) => {
  return {
    type: DELETE_CARD,
    payload: { id }
  };
};

export const crossCard = (id: string) => {
  return {
    type: CROSS_CARD,
    payload: { id }
  };
};

export const initCard = (id: string, init: boolean) => {
  return {
    type: INIT_CARD,
    payload: { id, init }
  };
};
