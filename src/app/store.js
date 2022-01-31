
import { configureStore } from '@reduxjs/toolkit';

import userReducer from './Features/Users/userSlice';

// export default configureStore({
//     reducer: {
//         users: userReducer,
//       }
//     });

      const store = configureStore({
      reducer: {
        users: userReducer,
      },
    });
    
//console.log(store.getState());

  export default store;