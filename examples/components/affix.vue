<template>
    <div>
        <p>基础</p>

        <ivue-switch
            :color="['#5AB2FF', '#5B8EFF']"
            :false-color="['#FFA82D', '#FFBD3C']"
            :modelValue="switch1"
        ></ivue-switch>

    </div>
</template>

<script>
export default {
    data() {
        return {
            switch1: true,
        };
    },
    methods: {
        handleChange() {
            console.log('>');
        },
        handleBeforeChange() {
            return new Promise((resolve) => {
                console.log('?');
            });
        },
    },
};
</script>

<style lang="scss">
.ivue-icon {
    font-size: 12px;
    min-width: 12px;
}
</style>
