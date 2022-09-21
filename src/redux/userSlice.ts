import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SliceState = {
    currentUser: UserData | null;
}

export type UserData = {
    id: string;
    email: string;
    displayName: string;
    createdAt: number;
}

const initialState = {
    currentUser: null,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state: SliceState, action: PayloadAction<UserData|null>) => {
            state.currentUser = action.payload;
        },
    },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;