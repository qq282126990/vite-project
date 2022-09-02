
<template>
    <div class="container">
        <nav>
            <ul>
                <li>
                    <router-link to="/affix">Affix</router-link>
                </li>
                <li>
                    <router-link to="/animation">Animation</router-link>
                </li>
                <li>
                    <router-link to="/auto-complete">AutoComplete</router-link>
                </li>
            </ul>
        </nav>

        <router-view />
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
};
</script>

<style lang="scss" scoped>
nav {
    margin-bottom: 40px;

    ul {
        display: flex;
        flex-wrap: wrap;
    }
    li {
        display: inline-block;
    }
    li + li {
        border-left: solid 1px #bbb;
        padding-left: 10px;
        margin-left: 10px;
    }
}
.container {
    padding: 10px 8px 0;
}
.v-link-active {
    color: #bbb;
}
</style>
