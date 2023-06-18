<template>
    <div class="category-table-container">
        <h1 class="page-title">Autores</h1>
        <router-link to="/authors/create" class="add-category-button">Cadastrar</router-link>
        <table class="category-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Gênero</th>
                    <th>Editar</th>
                    <th>Excluir</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="author in authors" :key="author.id">
                    <td>{{ author.id }}</td>
                    <td>{{ author.name }}</td>
                    <td>{{ author.gender }}</td>
                    <td>
                        <router-link :to="{ name: 'authors-update', params: { id: author.id } }"
                            class="edit-button">Editar</router-link>
                    </td>
                    <td>
                        <button @click="deleteAuthor(author.id)" class="delete-button">Excluir</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script setup>
import axios from 'axios'
import baseUrl from '@/api_config.js'
import { onMounted, ref } from 'vue'

const authors = ref()

const getAll = () => {
    axios
        .get(baseUrl + '/api/author/v1?page=0&size=10')
        .then(response => {
            authors.value = response.data._embedded.authors
        })
        .catch(error => {
            console.error('Erro:', error)
        })
}

const deleteAuthor = id => {
    axios.delete(baseUrl + '/api/author/v1/' + id).then(() => {
        alert('Autor(a) excluído(a) com sucesso!')
        window.location.reload()
    }).catch(error => {
        console.error(error)
        alert('Não foi possível excluir o(a) autor(a).')
    })
}

onMounted(() => {
    getAll()
})
</script>
  
<style scoped>
.page-title {
    font-size: 3rem;
    margin-bottom: 1.5rem;
    color: #203040;
    text-align: center;
    position: relative;
}

.page-title::before {
    content: "";
    display: block;
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    height: 4px;
    width: 80px;
    background-color: #ff5500;
    border-radius: 2px;
}

.category-table-container {
    padding: 2rem;
    background-color: #f7f7f7;
}

h1 {
    font-size: 3rem;
    margin-bottom: 1.5rem;
    color: #203040;
    text-align: center;
}

.add-category-button {
    display: block;
    margin: 0 auto 1.5rem auto;
    padding: 0.75rem 1.5rem;
    font-size: 1.25rem;
    font-weight: bold;
    text-transform: uppercase;
    color: white;
    background-color: #ff5500;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: all 200ms ease-in-out;
}

.add-category-button:hover {
    transform: scale(1.05);
    background-color: #dd4400;
}

.category-table {
    width: 100%;
    border-collapse: collapse;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
}

th,
td {
    padding: 1rem;
    text-align: left;
    border-bottom: 1px solid #ccc;
}

thead th {
    background-color: #203040;
    color: white;
    text-transform: uppercase;
}

.edit-button,
.delete-button {
    display: inline-block;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    font-weight: bold;
    text-transform: uppercase;
    color: white;
    background-color: #1a8fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: all 200ms ease-in-out;
}

.edit-button:hover,
.delete-button:hover {
    transform: scale(1.05);
    background-color: #0057b3;
}

.delete-button {
    background-color: #dc3545;
}

tr:last-of-type td {
    border-bottom: none;
}
</style>
  