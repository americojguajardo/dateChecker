import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: '',
};

const weekHours = {
  0: {
    openningTime: '08:00',
    closingTime: '20:00',
  },
  1: {
    openningTime: '08:00',
    closingTime: '20:00',
  },
  2: {
    openningTime: '08:00',
    closingTime: '20:00',
  },
  3: {
    openningTime: '08:00',
    closingTime: '20:00',
  },
  4: {
    openningTime: '08:00',
    closingTime: '20:00',
  },
  5: {
    openningTime: '08:00',
    closingTime: '20:00',
  },
  6: {
    openningTime: '08:00',
    closingTime: '20:00',
  },
}

const holidays = ['12-25', '01-01'];

export const dateCheckerSlice = createSlice({
  name: "dateChecker",
  initialState,
  reducers: {
    checkDate: (state, action) => {
      const dayAndMonth = String(action.payload).substr(5, 9);
      if (holidays.includes(dayAndMonth)) {
        state.value = "CLOSED - HOLIDAY";
      } else {
        const date = new Date(String(action.payload));
        const dayOfTheWeek = date.getDay();
        const dayData = weekHours[dayOfTheWeek];
        state.value = `Opens ${dayData.openningTime} to ${dayData.closingTime}`;
      }
    },
    clearDate: (state) => {
      state.value = '';
    },
  },
});

// Action creators are generated for each case reducer function
export const { checkDate, clearDate } = dateCheckerSlice.actions;

export default dateCheckerSlice.reducer;
