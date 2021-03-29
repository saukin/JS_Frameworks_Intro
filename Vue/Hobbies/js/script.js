Vue.component('app-list', {
    props : ['title','hobbies', 'delHobbies'],

    template : '<div> \
                    <h3 v-if="hobbies.length == 0 ? false : true">{{ title }}</h3> \
                    <ul><li v-for="hobby in hobbies" \
                            v-on:click.self="deleteHobby(hobby)"> \
                            {{ hobby }} \
                    </li></ul> \
                   </div>',
    methods: {
        deleteHobby : function() {
            this.$emit('deletehobby', this.hobbies)
        }
    }
})

new Vue({
    el: '#app',
    data: {
        hobbies: [],
        delHobbies: [],
        input : ''
    },
    methods : {
        addHobby : function() {
            if (this.input != '') {
                this.hobbies.push(this.input);
            }
        },
        deleteHobby : function(value) {
            this.delHobbies.push(
                this.hobbies.splice(
                    this.hobbies.indexOf(value), 1
                )[0]
            )
        }
    }
})