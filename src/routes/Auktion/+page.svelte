<script lang="ts">
import {addArticle, getArticle} from "./remote"
</script>
<form {...addArticle}>
    <input {...addArticle.fields.name.as("text")}placeholder="name of item"/>"
    <input {...addArticle.fields.price.as("number")}placeholder="Price"/>
        <button>lägg till en artikel</button>  
</form>
<ul>
    {#each await getArticle() as artikel}
        <li>
        <h3>Name</h3>
           {artikel.name}
        <h3>Price</h3>
           {artikel.price} 
        </li>
    {/each}

</ul>