export const saveUserSession = (user) => {
    sessionStorage.setItem('user', JSON.stringify(user));
};

export const getUserSession = () => {
    const user = sessionStorage.getItem('user');
    return user ? JSON.parse(user) : null;
};

export const saveUserProfileSession = (profile) => {
    sessionStorage.setItem('userProfile', JSON.stringify(profile));
};

export const getUserProfileSession = () => {
    const profile = sessionStorage.getItem('userProfile');
    return profile ? JSON.parse(profile) : null;
};

export const clearUserSession = () => {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('userProfile');
};
