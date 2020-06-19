const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

//State est vide quand la initialisation se fait la premiere fois par redux on lui precise de partir d'un objet initiale
let initialState = {
    users: [ ],
    pageSize:5,
    totalUsersCount:0,
    currentPage:1
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case  FOLLOW:
            return {
                ...state,
                // users: [...state.users],
                users: state.users.map(u => { // si on veux copier et modifier l'objet
                    if (u.id === action.userId) {
                        return {...u, followed: true} // si l'objet est modifier
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                // users: [...state.users],
                users: state.users.map(u => { // si on veux copier et modifier l'objet
                    if (u.id === action.userId) {
                        return {...u, followed: false} // si l'objet est modifier
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return {...state, users: action.users}

        } case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}

        } case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count}
        }
        default:
            return state;
    }
}

//Si notre function retourne juste quelque chose on peux la factoriser ainsi
export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage:currentPage})
export const setUsersTotalCountAC = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count:totalUsersCount})
export default usersReducer;