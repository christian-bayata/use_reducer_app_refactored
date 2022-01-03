export const reducer = (state, action) => {
    if(action.type === 'ADD_ITEM') {
        const newPerson = [...state.people, action.payload]
        return {...state, people: newPerson, isModalOpen: true, modalContent: 'Item Added'};
    } 
    if(action.type === 'NO_VALUE') {
        return {...state, isModalOpen: true, modalContent: 'Please enter value'}
    }
    if(action.type === 'CLOSE_MODAL') {
        return {...state, isModalOpen: false}
    }
    if(action.type === 'REMOVE_ITEM') {
        const newPeople = state.people.filter((person) => person.id !== action.payload);
        return {...state, people: newPeople}; 
    }
    else {
        throw new Error('action type does not match');
    }
}