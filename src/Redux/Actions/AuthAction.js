export const User_Token = data => {
  console.log('User_Token_Action', data);
  return {
    type: 'user_token',
    data,
  };
};
