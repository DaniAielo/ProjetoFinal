<template>
    <div class="update-category">
        <h2>Atualizar Categoria</h2>
        <hr>
        <form v-on:submit.prevent="update">
            <label for="category-name">Nome:</label>
            <input type="text" id="category-name" name="category-name" v-model="category.name">
            <button type="submit">Atualizar</button>
        </form>
    </div>
</template>

<script setup>
import { onMounted, reactive } from "vue"
import axios from "axios";
import baseUrl from '@/api_config.js'
import router from "../../../router";
import { useRoute } from "vue-router";

//..instantiate the route object, to access route params
const route = useRoute()

//..binding the object to the form
const category = reactive({
    id: null,
    name: ''
})

//..function to create a new category
const update = () => {
    axios.put(baseUrl + '/api/category/v1',
        category
    ).then((response) => {
        alert("Categoria Atualizada com Sucesso!")
        router.push("/categories")
    }).catch((error => {
        //alert("Erro: " + error)
        console.error(error)
    }))
}

onMounted(() => {
    axios.get(baseUrl + '/api/category/v1/' + route.params.id)
        .then((response) => {
            category.id = response.data.id,
                category.name = response.data.name
        })
        .catch((error) => {
            alert("Erro ao carregar a categoria!")
        })
})

</script>

<style scoped>
.update-category {
    max-width: 600px;
    margin: 0 auto;
}

h2 {
    font-size: 24px;
    margin-bottom: 16px;
}

hr {
    border-top: 1px solid #ccc;
    margin-top: 8px;
    margin-bottom: 16px;
}

label {
    display: inline-block;
    width: 80px;
    margin-right: 8px;
    font-size: 18px;
}

input[type="text"] {
    font-size: 18px;
    padding: 4px 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
    margin-bottom: 16px;
}

button[type="submit"] {
    background-color: #007bff;
    color: white;
    font-size: 18px;
    padding: 4px 8px;
    border-radius: 4px;
    border: none;
    cursor: pointer;
}
</style>