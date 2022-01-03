import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import {reducer} from './reducer';

const defaultState = {
     people: [],
     isModalOpen: false,
     modalContent: ''
};

const UseReducerApp = () => {
   const [name, setName] = useState('');
   const [state, dispatch] = useReducer(reducer, defaultState);

   const handleSubmit = (e) => {
        e.preventDefault();
        if(name) {
            const newItem = {
                id: new Date().getTime.toString(),
                name
            }
            dispatch({type: 'ADD_ITEM', payload: newItem});
            setName('');
        } else {
            dispatch({type: 'NO_VALUE'});
        }    
   };

   const closeModal = () => {
       dispatch({type: 'CLOSE_MODAL'})
   };

    return <>
        {state.isModalOpen && <Modal closeModal={closeModal} modalContent={state.modalContent}/>}
        <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                <button type="submit" className="btn">Add</button>
            </div>
        </form> 
        {state.people.map((person) => {
            return (
                <div key={person.id} className="display"> 
                    <div>{person.name}</div>
                    <button
                        onClick={() => {
                            dispatch({type: 'REMOVE_ITEM', payload: person.id})
                        }} 
                        className="remove-item">
                        remove
                    </button>
                </div>
            )
        })}
    </>
};

export default UseReducerApp