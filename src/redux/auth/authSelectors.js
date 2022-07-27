const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUsername = state => state.auth.user.name;

const getIsFetchingCurrent = state => state.auth.isFetchingCurrentUser;


const authSelectors = {
    getIsLoggedIn,
    getUsername,
    getIsFetchingCurrent,
};

export default authSelectors;

// export const getToken = state => state.auth.token;
// export const getProfile = state => state.auth.profile;
// export const getCurrentUser = state => state.auth.current;