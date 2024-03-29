import { ADD_LIST, REMOVE_ITEM } from "../actions";

const inState = {
  cont: [], // reppresentazione del contenuto della nostra lista, attulmente vuota.
};

// costruiamo ora lo stato che andremo a modificare, passandogli però come stato di default l' inState
const favouritesReducer = function (state = inState, action) {
  // questi due parametri sono obbligatori, ed essa non può fornire un OUTPUT diverso
  // ora dispensiamo le azioni e diciamo a redux cosa fare quando le ha sottomano con uno switch
  switch (action.type) {
    // nel caso di add
    case ADD_LIST:
      return {
        // prima copiamo il precedente stato
        ...state,
        cont: [...state.cont, action.payload],
      };

    case REMOVE_ITEM:
      return {
        ...state,
        // per rimuove l'elemento copiamo l'arrey e poi filtriamo per indice gli elementi fino a trovare quello corretto
        cont: state.cont.filter((item, i) => i !== action.payload), // payload è il valore che gli diciamo di aggiungere o togliere
      };

    // prima settiamo il caso limite, quello errato
    default:
      return state;
  }
};

export default favouritesReducer;
