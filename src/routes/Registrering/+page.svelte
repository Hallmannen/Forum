<script>
    import { login } from "./remote";

</script>
<form {...createAccount}>
    <input {...createAccount.fields.name.as ("text")}placeholder="Type Username" />
    <input {...createAccount.fields.password.as ("password")}placeholder="Type Password" />
    <button type="submit">create an account</button>

</form>

<a href="/">Home</a>
