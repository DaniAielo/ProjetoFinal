<template>
    <div class="author-form">
        <h2>Cadastrar Autor(a)</h2>
        <hr>
        <form v-on:submit.prevent="create">
            <div class="form-group">
                <label for="author-name">Nome:</label>
                <input type="text" id="author-name" name="author-name" v-model="name">
            </div>
            <div class="form-group">
                <label for="author-gender">Gênero:</label>
                <select id="author-gender" name="author-gender" v-model="gender">
                    <option disabled value="">Selecione</option>
                    <option value="M">Masculino</option>
                    <option value="F">Feminino</option>
                </select>
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
const gender = ref("")

//..function to create a new category
const create = () => {
    axios.post(baseUrl + '/api/author/v1',
        {
            name: name.value,
            gender: gender.value
        }
    ).then((response) => {
        alert("Autor(a) Cadastrado(a) com Sucesso!")
        router.push("/authors")
    }).catch((error => {
        alert("Erro: " + error)
    }))
}

</script>

<style scoped>
.author-form {
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

input[type="text"],
select {
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