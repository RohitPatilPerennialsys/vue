<template>
  <div class="available-services-card">
    <h1>Available Services</h1>
    <div id="available-services-flex"></div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      subscribeServicesArr: [],
      allServicesArr: [],
      availableServicesArr: []
    };
  },
    created() {
    this.getServices();
  },
  methods: {
    getServices: function() {
      this.$http
        .get(this.$site_url + "/services")
        .then(response => {
          return response.json();
        })
        .then(data => {
          for (let i = 0; i < data.length; i++) {
            let a = data[i].name;
            this.allServicesArr.push(a);
          }
        });
      this.$http
        .get(this.$site_url + "/users")
        .then(response => response.json())
        .then(data => {
          for (let i = 0; i < data[this.$store.state.userId].services.length; i++) {
            let a = data[this.$store.state.userId].services[i].name;
            this.subscribeServicesArr.push(a);
          }
          this.availableServicesArr = this.allServicesArr;
          for (let i = 0; i < this.allServicesArr.length; i++) {
            for (let j = 0; j < this.subscribeServicesArr.length; j++) {
              if (this.allServicesArr[i] == this.subscribeServicesArr[j]) {
                this.availableServicesArr.splice(i, 1);
              }
            }
          }
          for (var i = 0; i < this.allServicesArr.length; i++) {
            var availableServicesFlex = document.getElementById(
              "available-services-flex"
            );
            var div = document.createElement("div");
            div.className = "available-services";
            var img = document.createElement("img");
            var a = "/src/assets/images/" + this.allServicesArr[i] + ".svg";
            img.src = a;
            div.appendChild(img);
            var p = document.createElement("p");
            p.innerHTML = "" + this.allServicesArr[i];
            availableServicesFlex.appendChild(div);
            div.appendChild(p);
          }
        });
    }
  }
};
</script>

<style scoped>
@import "./style/availableServices.css";
</style>
