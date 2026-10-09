<script>
    import { createAccount } from "../Registrering/remote";
    import { loggin as login } from "./remote";

</script>
<form {...login}>
    <input {...login.fields.name.as ("text")}placeholder="Type Username" />
    <input {...login.fields.password.as ("password")}placeholder="Type Password" />
    <button type="submit">login</button>

</form>

<a href="/">Home</a>
