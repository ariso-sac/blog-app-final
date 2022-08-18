const app = new Vue({
    el: "#app",
    data: function () {
        return {
            text: "",
            likes: 0,
            id: document.getElementById("user").value,
            title:"",
        }
    },
    methods: {
        submit: function () {
            const pay = {
                "text": this.text,
                "likes": this.likes,
                "created_by": this.id,
                "title":this.title
            }
            console.log(pay)
            fetch('/api', {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(pay) // body data type must match "Content-Type" header
            })
                .then(response => response.json())
                .then(data => console.log(data))
                document.location.href="/";
        },
    },
    computed: {

    }
})