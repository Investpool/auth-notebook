const initialState = {
    notes: []
};

const notesReducers = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_NOTES":
           return { ...state,notes: [...state.notes, action.payload]};
            
        case 'EDIT_NOTE' :
            var id = action.payload.id;
            let updatedNoteInfo = action.payload.upadtedNoteInfo
            let NotesAfterUpdate = state.notes.map((notes) => {
                if (notes.id === id) {
                  return updatedNoteInfo;
                }
                return notes;
              });
                return { notes: NotesAfterUpdate };  

        case 'DELETE_NOTE' :
           
            let NotesAfterDelete=state.notes.filter((notes) => notes.id !==id);
            console.log('NotesAfterDelete', NotesAfterDelete);
            return { notes: NotesAfterDelete };

    
        default:
            return state;
    }

};


export default notesReducers;