import './Login.css';

export default function Login() {
  return (
    <form className="Login">
      <fieldset className="Login__fieldset">
        <legend>Log In</legend>
        <div className="Login__fieldset__field">
          <label for="email">Email Address</label>
          <input type="email" name="email" id="email" />
        </div>
        <div className="Login__fieldset__field">
          <label for="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>

        <button className="Login__fieldset__submit-btn" type="button">
          Log In
        </button>
      </fieldset>
    </form>
  );
}
