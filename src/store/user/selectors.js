export const selectToken = (state) => state.user.token;

export const selectPartners = (State) => State.user.partners;

export const selectPartnerId = (State) => State.user.namesSelectionId;

export const selectEventOrFact = (State) => State.user.isEvent;

export const selectUserId = (state) => state.user.profile.id;
