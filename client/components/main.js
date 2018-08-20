
Vue.component("card-item", {
  template: `

  <div class="row">
  <div class="col-lg-12" v-for="item in listItem">
    <div class="row my-4">
      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100">
          <a href="#">
            <img class="card-img-top" :src="item.image"  alt="" >
          </a>
          <div class="card-body">
            <h4 class="card-title">
            <p>{{ item.title }}</p>
            </h4>
            <p>{{ item.price }}</p>
            <p class="card-text">Stock:{{ item.quantity }}</p>
          </div>
          <div class="card-footer">
            <span class="badge badge-primary tag">
              Kitchen
            </span>
            <span class="badge badge-primary tag">
              Electric
            </span>
          </div>
        </div>
      </div>
      </div>
      </div>
      </div>
  `,

  data: function() {
    return {
      listItem: [],
      cursorType: "zoom-in"
    };
  },
  methods: {
    getAllItem: function() {
      axios.get("http://localhost:3000/listItems").then(result => {
        console.log(result);
        result.data.found.forEach(item => {
          console.log(item);
          this.listItem.push({
            title: item.title,
            image: item.image,
            category: item.category,
            quantity: item.quantity,
            price: item.price
          });
        });
      });
    }
  },
  created() {
    this.getAllItem();
  }
});

new Vue({
  el: "#app"
  // methods: {
  //   login: function() {
  //     axios({
  //       method: "POST",
  //       url: "http://localhost:3000/login",
  //       data: {
  //         email: this.email,
  //         password: this.password
  //       },
  //       headers: {
  //         "Access-Control-Allow-Origin": "*"
  //       }
  //     })
  //       .then(response => {
  //         localStorage.setItem("token", response.data.token);
  //         window.location = "index.html";
  //       })
  //       .catch(err => {
  //         this.message = "Username / password is wrong";
  //       });
  //   }
  // }
});
