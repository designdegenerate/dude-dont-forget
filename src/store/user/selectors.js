export const selectToken = (state) => state.user.token;

export const selectPartners = (State) => State.user.profile?.partners;

export const selectPartnerId = (State) => State.user.namesSelectionId;

export const selectEventOrFact = (State) => State.user.isEvent;
