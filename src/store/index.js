import { createStore } from "vuex";

export default createStore({
  state: {
    users: [],
    messages: [],
    groupes: [],
    userOnline: true
  },
  getters: {},
  mutations: {
    // 
    UPDATE_USERONLINE(state, payload) {
      state.userOnline = payload;
    },

    // MESSAGES
    READ_ALLMESSAGES(state, payload){
      state.messages = payload;
    },
    ADD_MESSAGES(state, messages){
      state.messages.push(messages);
    },
    UPDATE_MESSAGES(state, updatedMessage){
      const index = state.messages.findIndex(message => message.idMessage === updatedMessage.idMessage);
      if (index !== -1) {
        state.messages.splice(index, 1, updatedMessage);
      }
    },
    DELETE_MESSAGES(state, idMessage){
      state.messages = state.messages.filter(message => message._id !== idMessage);
    },

    // GROUPES
    READ_ALLGROUPES(state, payload){
      state.groupes = payload;
    },
    ADD_GROUPES(state, groupes){
      state.groupes.push(groupes);
    },
    UPDATE_GROUPES(state, updatedGroupes){
      const index = state.groupes.findIndex(groupe => groupe.idGroupe === updatedGroupes.idGroupe);
      if (index !== -1) {
        state.groupes.splice(index, 1, updatedGroupes);
      }
    },
    DELETE_GROUPES(state, idGroupe){
      state.groupes = state.groupes.filter(message => message.idGroupe !== idGroupe);
    },

    // USERS
    READ_ALLUSERS(state, payload){
      state.users = payload;
    },
    ADD_USERS(state, users){
      state.users.push(users);
    },
    UPDATE_USERS(state, updatedUsers){
      const index = state.users.findIndex(user => user.idUser === updatedUsers.idUser);
      if (index !== -1) {
        state.users.splice(index, 1, updatedUsers);
      }
    },
    DELETE_USERS(state, idUser){
      state.groupes = state.groupes.filter(groupe => groupe.idUser !== idUser);
    }
  },
  actions: {},
  modules: {},
});
