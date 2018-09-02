
export function auth(state = {email:'',password:'', loading:false}, action) {
    
    switch(action.type) {
        case 'AUTHENTICATED':
          return { ...state, authenticated: true };
        case 'UNAUTHENTICATED':
          return { ...state, authenticated: false };
        case 'AUTHENTICATION_ERROR':
          return { ...state, error: action.payload };
        case 'AUTH_IS_LOADING':
          return { ...state, loading: action.isLoading };
        default:
          return state;
      }

}
