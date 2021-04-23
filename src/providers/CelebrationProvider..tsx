import React, {createContext, useReducer} from "react";

export const initialValues = {
    celebration: true,
    celebrate: () => {},
    rest: () => {}
};

enum ActionType {
  CELEBRATE = "CELEBRATE",
  REST = "REST",
};

type State = {
    celebration: boolean;
};

type Action = {
    type: ActionType;
};
 
const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case ActionType.CELEBRATE: 
            return {celebration : true}
        case ActionType.REST: 
            return {celebration : false}
        default:
            return state
    }
};

export const CelebrationContext = createContext(initialValues)

const CelebrationProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialValues)

    return <CelebrationContext.Provider
            value={{
                celebration: state.celebration,
                celebrate: () => dispatch({ type: ActionType.CELEBRATE }),
                rest: () => dispatch({ type: ActionType.REST })
            }}>
              {children}
            </CelebrationContext.Provider>
};

export default CelebrationProvider;