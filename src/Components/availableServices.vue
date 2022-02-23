<template>
  <div class="available-services-card">
    <h1>Available Services</h1>
    <div id="available-services-flex"></div>
  </div>
</template>
<script>
export default {
  data: () => {
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
          for (
            let i = 0;
            i < data[this.$store.state.userId].services.length;
            i++
          ) {
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
.available-services-card {
  height: 311px;
  margin: 24px 12px 24px 12px;
  background: #ffffff;
  box-shadow: 0px 1px 5px rgb(0 0 0 / 12%);
  border-radius: 12px;
}
.available-services-card h1 {
  padding: 24px 0px 0px 24px;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  display: flex;
  align-items: flex-end;
  color: #1a1a1a;
  margin-block-start: 0em;
  margin-block-end: 0em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
#available-services-flex {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
}
.available-services {
  margin-left: 14px;
  padding-top: 24px;
  height: 95px;
  width: 144px;
}
.available-services img {
  padding: 15px 86.5px 0px 2.5px;
}
.available-services p {
  padding-top: 15px;
  font-size: 18px;
  line-height: 25px;
  color: #1a1a1a;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
@media screen and (min-width: 900) {
  .available-services-card {
    height: 190px;
  }
}
@media screen and (min-width: 635px) {
  .available-services-card {
    height: 200px;
  }
}
@media screen and (min-width: 1016px) {
  .available-services-card {
    margin: 24px 24px 24px 24px;
  }
  .available-services {
    width: 218px;
    height: 95px;
    margin-left: 24px;
  }
  .available-services img {
    padding: 5px 81.5px 0px 81.5px;
  }
  .available-services p {
    text-align: center;
  }
}
</style>
