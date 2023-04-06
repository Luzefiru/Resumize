import Login from './Login';
import Signup from './Signup';

import { useState } from 'react';

export default function LoginSignupWrapper() {
  const [login, setLogin] = useState(false);

  const toggleLogin = () => {
    setLogin(!login);
  };

  return login ? (
    <Login toggleLogin={toggleLogin} />
  ) : (
    <Signup toggleLogin={toggleLogin} />
  );
}
