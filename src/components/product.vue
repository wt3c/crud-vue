<template id="product">
    <div>
        <h2>{{ product.name }}</h2>
        <b>Description: </b>
        <div>{{ product.description }}</div>
        <b>Price:</b>
        <div>{{ product.price }}<span class="glyphicon glyphicon-euro"></span></div>
        <br/>
        <span class="glyphicon glyphicon-arrow-left" aria-hidden="true"></span>
        <a>
            <router-link to="/">Back to product list</router-link>
        </a>
    </div>
</template>


<script>
    export default {
        name: "product"
    }
</script>

<style scoped>

</style>