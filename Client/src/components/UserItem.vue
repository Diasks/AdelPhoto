<template>
    <div class="user-item">
        <p>{{user.name}}</p>
    </div>
</template>

<script>
export default {
    name: "UserItem",
    props: ["user"]
}
</script>

<style scoped>
.user-item {
    background: #f4f4f4;
    padding: 10px;
    border-bottom: 1px #ccc dotted;
}
</style>