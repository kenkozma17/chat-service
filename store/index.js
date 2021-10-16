export const state = () => ({
    user: null,
});

export const getters = {
    user: state => state.user,
};

export const mutations = {
    onAuthStateChangedMutation: (state, payload) => {  
      state.user = payload;
    }
}

export const actions = {
    onAuthStateChangedAction: (ctx, { authUser, claims }) => {
        if (authUser) {
            const { uid, email, displayName } = authUser;
            const { picture } = claims;
            ctx.commit('onAuthStateChangedMutation', { uid, email, picture, displayName });
        } 
      }
}