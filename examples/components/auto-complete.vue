<template>

</template>

<script>
const loadAll = [
    { value: 'vue', link: 'https://github.com/vuejs/vue' },
    { value: 'element', link: 'https://github.com/ElemeFE/element' },
    { value: 'cooking', link: 'https://github.com/ElemeFE/cooking' },
    { value: 'mint-ui', link: 'https://github.com/ElemeFE/mint-ui' },
    { value: 'vuex', link: 'https://github.com/vuejs/vuex' },
    { value: 'vue-router', link: 'https://github.com/vuejs/vue-router' },
    { value: 'babel', link: 'https://github.com/babel/babel' },
];
export default {
    data() {
        return {
            value: '',
            data: [],
            value1: '',
            data1: [],
            value3: '',
            data3: ['Steve Jobs', 'Stephen Gary Wozniak', 'Jonathan Paul Ive'],
            value4: '',
            data4: [
                {
                    title: '话题',
                    children: [
                        {
                            title: 'View UI',
                            count: 10000,
                        },
                        {
                            title: 'View UI Plus',
                            count: 10600,
                        },
                    ],
                },
                {
                    title: '问题',
                    children: [
                        {
                            title: 'View UI Plus 有多好',
                            count: 60100,
                        },
                        {
                            title: 'View UI Plus 是啥',
                            count: 30010,
                        },
                    ],
                },
                {
                    title: '文章',
                    children: [
                        {
                            title: 'View UI Plus 是一个设计语言',
                            count: 100000,
                        },
                    ],
                },
            ],
            value5: '',
            data5: loadAll,
            loading1: false,
            select: ''
        };
    },
    methods: {
        handleSearch(value) {
            this.data = !value
                ? []
                : [value, value + value, value + value + value];
        },
        handleSearch1(value) {
            if (value.indexOf('@') >= 0) {
                setTimeout(() => {
                    this.data1 = [];
                }, 300);
            } else {
                this.data1 = [
                    value + '@qq.com',
                    value + '@sina.com',
                    value + '@163.com',
                ];
            }
        },
        filterMethod(value, option) {
            return option.toUpperCase().indexOf(value.toUpperCase()) !== -1;
        },
        remoteMethod1(queryString) {
            if(this.select === queryString) {
                return
            }

            const results = queryString
                ? loadAll.filter((item) => {
                      return (
                          item.value
                              .toLowerCase()
                              .indexOf(queryString.toLowerCase()) === 0
                      );
                  })
                : loadAll;

            this.loading1 = true;

            // setTimeout(() => {
            //     this.loading1 = false;
            //     this.data5 = results;
            // }, 3000);
        },
        handleSelect(value) {
            this.select = value
        }
    },
};
</script>

<style lang="scss" scoped>
.demo-auto-complete-item {
    padding: 4px 0;
    border-bottom: 1px solid #f6f6f6;
}
.demo-auto-complete-group {
    font-size: 12px;
    padding: 4px 6px;
}
.demo-auto-complete-group span {
    color: #666;
    font-weight: bold;
}
.demo-auto-complete-group a {
    float: right;
}
.demo-auto-complete-count {
    float: right;
    color: #999;
}
.demo-auto-complete-more {
    display: block;
    margin: 0 auto;
    padding: 4px;
    text-align: center;
    font-size: 12px;
}

.red {
    background: red;
}
</style>
