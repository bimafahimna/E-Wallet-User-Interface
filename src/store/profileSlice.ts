import { Dispatch, createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import { DataUserProfile, ResUserProfile } from 'src/types';

interface AppState {
  dataUserProfile: DataUserProfile | null;
  isUpdateProfileError: boolean;
  isUpdateProfileSuccess: boolean;
  errorUpdateProfileMsg: string | null;
  isLoadingProfile: boolean;
}

const initialState: AppState = {
  dataUserProfile: null,
  isUpdateProfileError: false,
  isUpdateProfileSuccess: false,
  errorUpdateProfileMsg: null,
  isLoadingProfile: false,
};

const appSliceProfile = createSlice({
  name: 'sea_wallet_profile',
  initialState,
  reducers: {
    changeDataUserProfile: (state, action) => {
      state.dataUserProfile = action.payload;
    },
    changeIsLoadingProfile: (state, action) => {
      state.isLoadingProfile = action.payload;
    },
  },
});

export const { changeDataUserProfile, changeIsLoadingProfile } =
  appSliceProfile.actions;

export const getMe = () => {
  return async (dispatch: Dispatch): Promise<void> => {
    try {
      dispatch(changeIsLoadingProfile(true));
      const access_token = Cookies.get('Bearer');
      const link = process.env.REACT_APP_BASE_URL + `/users/me`;
      const response = await fetch(link, {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + access_token,
        },
      });

      const data: ResUserProfile = await response.json();
      dispatch(changeDataUserProfile(data.data));
    } catch (err) {
      console.log(err);
      throw err;
    } finally {
      dispatch(changeIsLoadingProfile(false));
    }
  };
};

export default appSliceProfile.reducer;
