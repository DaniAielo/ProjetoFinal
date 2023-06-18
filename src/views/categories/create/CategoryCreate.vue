<template>
    <div class="category-form">
        <h2>Cadastrar Nova Categoria</h2>
        <hr>
        <form v-on:submit.prevent="create">
            <div class="form-group">
                <label for="category-name">Nome da Categoria:</label>
                <input type="text" id="category-name" name="category-name" v-model="name">
            </div>
            <button type="submit">Cadastrar</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from "vue"
import axios from "axios";
import baseUrl from '@/api_config.js'
import router from "../../../router";


//..binding to the form
const name = ref("")

//..function to create a new category
const create = () => {
    axios.post(baseUrl + '/api/category/v1',
        {
            name: name.value
        }
    ).then((response) => {
        alert("Categoria Cadastrada com Sucesso!")
        router.push("/categories")
    }).catch((error => {
        alert("Erro: " + error)
    }))
}

</script>

<style scoped>
.category-form {
    max-width: 400px;
    margin: 0 auto;
}

.form-group {
    margin-bottom: 16px;
}

label {
    display: block;
    margin-bottom: 8px;
}

input[type="text"] {
    width: 100%;
    padding: 12px;
    font-size: 16px;
    border-radius: 4px;
    border: 1px solid #ccc;
}

button[type="submit"] {
    background-color: #007bff;
    color: #fff;
    padding: 12px 24px;
    font-size: 16px;
    border-radius: 4px;
    cursor: pointer;
    border: none;
}

button[type="submit"]:hover {
    background-color: #0069d9;
}
</style>