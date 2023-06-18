<template>
    <div class="update-author">
        <h2>Atualizar Autor</h2>
        <hr>
        <form v-on:submit.prevent="update">
            <label for="author-name">Nome:</label>
            <input type="text" id="author-name" name="author-name" v-model="author.name">
            <label for="author-gender">Gênero:</label>
            <select id="author-gender" name="author-gender" v-model="author.gender">
                <option disabled value="">Selecione</option>
                <option value="M">M</option>
                <option value="F">F</option>
            </select>
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
const author = reactive({
    id: null,
    name: '',
    gender: ''
})

//..function to create a new category
const update = () => {
    axios.put(baseUrl + '/api/author/v1',
        author
    ).then((response) => {
        alert("Autor(a) atualizado(a) com sucesso!")
        router.push("/authors")
    }).catch((error => {
        //alert("Erro: " + error)
        console.error(error)
    }))
}

onMounted(() => {
    axios.get(baseUrl + '/api/author/v1/' + route.params.id)
        .then((response) => {
            author.id = response.data.id,
                author.name = response.data.name,
                author.gender = response.data.gender
        })
        .catch((error) => {
            alert("Erro ao carregar o(a) autor(a)!")
        })
})

</script>

<style scoped>
.update-author {
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

input[type="text"],
select {
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