<script lang="ts">
    import{addForum, getForums} from "./Forums.remote";

    let Forum = getForums();
    let forums: {
    id: number;
    name: string;
    }[] = [];
    
</script>


<ul>
    {#each await getForums() as Forum}
        <li>{Forum.name}</li>
        <a href="/Forums/{Forum.id}">{Forum.name}</a>
    {/each}
</ul>

<form {...addForum}>
    <input {...addForum.fields.name.as ("text")} />
    <input {...addForum.fields.id.as ("number")} />
    <button type="submit">add</button>
</form>


<a href="/">Home</a>

