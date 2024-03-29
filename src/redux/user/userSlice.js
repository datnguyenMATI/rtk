import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: []
};


export const userSlice = createSlice({
    name: 'user',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        getListUser: (state, action) => {
            state.user = action.payload;
        },
        createUser: (state, action) => {
            
            const {id,name,job} = action.payload
            state.user = [...state.user,{id,first_name:name,last_name:job, email:name +'@gmail.com'}];
        },
        editUser: (state, action) => {
            
            const {id,name,job} = action.payload
            console.log('action.payload id',action.payload)
            let cloneListUser = [...state.user]
            let index = cloneListUser.findIndex((item) => item.id === id);
            if(index !== -1) {
                let updateListUser = {...cloneListUser[index],first_name:name,last_name:job, email:name +'@gmail.com'}
                cloneListUser [index] = updateListUser
                state.user = cloneListUser
            }   
        },
        deleteUser: (state, action) => {
            
            const {id} = action.payload
            console.log('action.payload id',action.payload)
            let cloneListUser = [...state.user]
            let index = cloneListUser.findIndex((item) => item.id === id);
            if(index !== -1) {
                cloneListUser = cloneListUser.filter((item) => item.id !== id);
                state.user = cloneListUser
            }   
        }


    },
    // The `extraReducers` field lets the slice handle actions defined elsewhere,
    // including actions generated by createAsyncThunk or in other slices.
    extraReducers: (builder) => {

    },
});

export const { getListUser ,createUser,editUser,deleteUser} = userSlice.actions;

export default userSlice.reducer;
