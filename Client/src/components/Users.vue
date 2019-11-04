<template>
    <div>
        <b-container fluid>
            <div v-bind:key="user.id" v-for="user in users">
                <UserItem v-bind:user="user" />
            </div>
        </b-container>
    </div>
</template>

<script>
import UserItem from './UserItem.vue';
export default {
    name: 'Users',
    components: {
        UserItem
    },
    props: ["users"]
}
</script>

<style scoped>
</style>