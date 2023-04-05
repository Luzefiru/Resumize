import './Signup.css';

export default function Signup() {
  return (
    <form className="Signup">
      <fieldset className="Signup__fieldset">
        <legend>Sign Up</legend>
        <div className="Signup__fieldset__field">
          <label htmlFor="email--signup">Email Address</label>
          <input type="email--signup" name="email--signup" id="email--signup" />
        </div>
        <div className="Signup__fieldset__field">
          <label htmlFor="password--signup">Password</label>
          <input
            type="password--signup"
            name="password--signup"
            id="password--signup"
          />
        </div>

        <button className="Signup__fieldset__submit-btn" type="button">
          Sign Up
        </button>
      </fieldset>
    </form>
  );
}
