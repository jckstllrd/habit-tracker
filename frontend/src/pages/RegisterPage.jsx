export default function RegisterPage() {
  return (
    <>
      <form>
        <label htmlFor="email">
          Username: <input name="email" required type="text"></input>
        </label>
        <label htmlFor="password">
          Password:<input required name="password" type="password"></input>
        </label>
        <label htmlFor="confirmPassword">
          Confirm Password:
          <input required name="confirmPassword" type="password"></input>
        </label>

        <button type="submit">Login</button>
      </form>
    </>
  );
}
