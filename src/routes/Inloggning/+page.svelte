<script>
    import { loggin } from "./remote";

</script>
<form {...loggin}>
    <input {...loggin.fields.name.as ("text")} />
    <input {...loggin.fields.password.as ("text")} />
    <button type="submit">add name</button>

</form>

<a href="/">Home</a>
