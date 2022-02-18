<template>
  <div class="current-services-card">
    <h1>Current Services</h1>
    <div id="current-services-flex"></div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      subscribeServicesArr: [],
      allServicesArr: [],
      availableServicesArr: [],
      rating: []
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
            let serviceName = data[this.$store.state.userId].services[i].name;
            this.subscribeServicesArr.push(serviceName);
            let jsonRating = data[this.$store.state.userId].services[i].rating;
            this.rating.push(jsonRating);
          }
          this.availableServicesArr = this.allServicesArr;
          for (let i = 0; i < this.allServicesArr.length; i++) {
            for (let j = 0; j < this.subscribeServicesArr.length; j++) {
              if (this.allServicesArr[i] == this.subscribeServicesArr[j]) {
                this.availableServicesArr.splice(i, 1);
              }
            }
          }

          for (var i = 0; i < this.subscribeServicesArr.length; i++) {
            var currentServicesFlex = document.getElementById(
              "current-services-flex"
            );
            var div = document.createElement("div");
            div.className = "current-services";
            var img = document.createElement("img");
            var a =
              "/src/assets/images/" + this.subscribeServicesArr[i] + ".svg";
            img.src = a;
            div.appendChild(img);
            var p = document.createElement("p");
            p.innerHTML = " " + this.subscribeServicesArr[i];
            div.appendChild(p);
            var starRatingDiv = document.createElement("div");
            starRatingDiv.className = "starrating";
            for (let x = 0; x < 5; x++) {
              var button = document.createElement("button");
              button.className = "star" + i;
              button.innerHTML = "&#9733";
              starRatingDiv.append(button);
              div.append(starRatingDiv);
              if (x >= this.rating[i]) {
                button.innerHTML = "&#9734";
              }
            }
            currentServicesFlex.appendChild(div);
            for (let k = 0; k < this.subscribeServicesArr.length; k++) {
              const allStars = document.querySelectorAll(".star" + k);
              allStars.forEach((star, z) => {
                star.onclick = function() {
                  let a = "current_star_level" + k;
                  a = z + 1;
                  allStars.forEach((button, j) => {
                    if (a >= j + 1) {
                      button.innerHTML = "&#9733";
                    } else {
                      button.innerHTML = "&#9734";
                    }
                    console.info("rating of " + k + " is " + a);
                  });
                };
              });
            }
          }
        });
    }
  }
};
</script>

<style scoped>
@import "./style/currentServices.css";
</style>
