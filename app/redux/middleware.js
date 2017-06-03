export default function ({ dispatch, getState }) {
    // console.log('Enter thunkMiddleware');
    return function(next) {
        // console.log('Function "next" provided:', next);
        return function (action) {
            // console.log('Handling action:', action);
            return typeof action === 'function' ?
                action(dispatch, getState) :
                next(action)
        }
    }
}


// export default store => next => action => {
//   return next(action);
// }

// The above is the same as writing
// export default function(store) {
//   return function(next) {
//     return function(action) {
//
//     }
//   }
// }
