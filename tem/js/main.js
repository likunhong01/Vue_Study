var app = new Vue({
    el: '#app',
    data:{
        name: 'lkh',
        age: '18',
        // foodList:['葱', '姜', '蒜'],
        foodList:[
            {
                name: '葱',
                price: 2,
                discount: .3,
            },
            {
                name:'姜',
                price: 3,
                discount: .8,
            },
            {
                name:'蒜',
                price: 5,
            },
        ],

        url: 'http://baidu.com',
        img: '',
        klass: 'btn btn-default',
        isActive: false,
    },

    methods:{
        onClick: function () {
            console.log('点击了');
        },
        onEnter: function () {
            console.log('mouse enter');
        },
        onOut: function () {
            console.log('mouse leave');
        },
        onSubmit: function (e) {
            e.preventDefault();
            console.log('submited');
        },
        onKeyup: function () {
            console.log('key pressed');
        },
        onEnter: function () {
            console.log('enter')
        }
    }

})