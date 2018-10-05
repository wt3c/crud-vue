<template>
    <div>
        <h1>Vue JS CRUD (Based on Vue JS version 2)</h1>
        <main id="app">
            <router-view></router-view>
        </main>
    </div>
</template>

<script>

    import Product from './components/product'
    import AddProduct from './components/add-product'
    import ProductDelete from './components/product-delete'
    import ProductEdit from './components/product-edit'
    import ProductList from './components/product-list'

    export default {
        name: "App",
        components: {
            Product,
            AddProduct,
            ProductDelete,
            ProductEdit,
            ProductList
        },


        data() {
            return {
                products: [{id: '', name: '', description: '', price: ''}]
            }
        }
    }
</script>