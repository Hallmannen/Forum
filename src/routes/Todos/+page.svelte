<script lang="ts">
    import{addTodo, deleteTodo, getTodos} from "./Todo.remote";

    let todos = getTodos();
</script>

<ul>
    {#each await getTodos() as todo}
        <li>{todo}</li>
        
    {/each}
</ul>

<form {...addTodo}>
    <input {...addTodo.fields.text.as ("text")} />
    <button>add</button>
</form>
<form {...deleteTodo}>
  <input {...deleteTodo.fields.text.as ("text")} />
  
  <button>delete</button>
</form>




