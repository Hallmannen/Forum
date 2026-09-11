<script>
import { getMessages, createMessage } from "./Forums.remote";
    let { params } = $props();
</script>

<ul>
    {#each await getMessages(params.id) as message}
        <li>{message}</li>
    {/each}
</ul>

<form {...createMessage}>
    <input {...createMessage.fields.message.as ("text")} />
    <input {...createMessage.fields.id.as("hidden", params.id)}/>
    <button>add</button>
</form>





