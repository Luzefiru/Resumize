import './Signup.css';

export default function Signup() {
  return (
    <form className="Signup">
      <fieldset className="Signup__fieldset">
        <legend>Sign Up</legend>
        <div className="Signup__fieldset__field">
          <label for="email">Email Address</label>
          <input type="email" name="email" id="email" />
        </div>
        <div className="Signup__fieldset__field">
          <label for="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>

        <button className="Signup__fieldset__submit-btn" type="button">
          Sign Up
        </button>
      </fieldset>
    </form>
  );
}
