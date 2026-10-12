<script>
    import { createAccount } from "./remote";

</script>
<form {...createAccount}>
    <input {...createAccount.fields.username.as ("text")}placeholder="Type Username" />
    <input {...createAccount.fields._password.as ("password")}placeholder="Type Password" />
    <button type="submit">create an account</button>
    
</form>

<a href="/">Home</a>
