<script lang="ts">
    import{createTodo, completeTodo, removeTodo, getTodos} from "./Todo.remote";

</script>
    <form {...createTodo}>
        <input {...createTodo.fields.text.as("text")}/>
        <button>lägg till</button>
    </form>
    
<ul>
    {#each await getTodos() as todo}
        {@const remove = removeTodo.for(todo.id)}
        {@const complete = completeTodo.for(todo.id)}

    <li>
        <form {...complete}>
            <button>
                {todo.completed ? "[X]" : "[ ]"}
            </button>
        </form>
        {todo.text}
        <form {...remove}>
            <button>x</button>
        </form>
    </li>

    {/each}
</ul>
