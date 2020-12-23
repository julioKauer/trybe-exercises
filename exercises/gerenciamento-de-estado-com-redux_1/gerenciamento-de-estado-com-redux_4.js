  switch (action.type) {
    case 'LOGIN':
      return { authenticated: true };
    case 'LOGOUT':
      return { authenticated: false };
    default:
      return state;
  }