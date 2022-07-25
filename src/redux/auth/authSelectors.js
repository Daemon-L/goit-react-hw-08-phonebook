const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUsername = state => state.auth.user.name;

const authSelectors = {
    getIsLoggedIn,
    getUsername,
};

export default authSelectors;

// export const getToken = state => state.auth.token;
// export const getProfile = state => state.auth.profile;
// export const getCurrentUser = state => state.auth.current;