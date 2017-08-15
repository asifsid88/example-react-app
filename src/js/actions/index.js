export const selectedUser = (user) => {
  console.log("You have selected: " + user.first);
  return {
    type: "USER_SELECTED",
    payload: user
  }
}
