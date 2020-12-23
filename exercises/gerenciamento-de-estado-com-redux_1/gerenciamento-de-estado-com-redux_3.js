switch (action.type) {
  case 'LOGIN':
    return { login: true };
  default:
    return state;
}