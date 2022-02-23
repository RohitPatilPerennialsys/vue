<template>
  <div class="current-services-card">
    <h1>Current Services</h1>
    <div id="current-services-flex"></div>
  </div>
</template>
<script>
export default {
  data: () => {
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
.current-services-card {
  height: 375px;
  margin: 12px 12px 24px 12px;
  background: #ffffff;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.12);
  border-radius: 12px;
}

.current-services-card h1 {
  margin: 0px;
  padding: 24px 0px 0px 24px;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  display: flex;
  align-items: flex-end;
  color: #1a1a1a;
}
#current-services-flex {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
}
.current-services {
  padding-top: 26.5px;
  margin-left: 24px;
  width: 130px;
  height: 171.5px;
}
.current-services p {
  padding-top: 15px;
  font-size: 18px;
  line-height: 25px;
  color: #1a1a1a;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
.current-services img {
  padding: 2.5px 77.5px 0px 0px;
}
.current-services .star1 {
  margin-top: 4px;
  padding: 2px 0px 3px 2px;
}
.current-services .unstar {
  width: 20px;
  height: 19px;
  padding: 2px 0px 3px 2px;
}
.star0:hover,
.star1:hover,
.star2:hover,
.star3:hover,
.star4:hover,
.star5:hover,
.star6:hover,
.star7:hover {
  cursor: pointer;
}
.star0,
.star1,
.star2,
.star3,
.star4,
.star5,
.star6,
.star7 {
  font-size: 27px;
  border: rgba(0, 0, 0, 0.54);
  background-color: unset;
  color: #0a8b1f;
  height: 21px;
  padding-right: 0px;
  padding-left: 0px;
}
@media screen and (min-width: 485px) {
  .current-services-card {
    height: 250px;
  }
}
@media screen and (min-width: 1016px) {
  .current-services-card {
    margin-left: 24px;
    margin-right: 24px;
    height: 220px;
  }
  .current-services {
    width: 218px;
    height: 123px;
    padding-top: 24px;
  }
  .current-services img {
    padding: 2.5px 86.5px 0px 84px;
  }
  .current-services p {
    text-align: center;
  }
  .starContainer {
    margin-left: 60px;
  }
  .starrating {
    width: 170px;
    height: 24px;
    margin-left: 40px;
    margin-right: 0px;
  }
  /* .starrating {
    user-select: none;
  } */
  .star0,
  .star1,
  .star2,
  .star3,
  .star4,
  .star5,
  .star6,
  .star7 {
    margin-left: 4px;
  }
}
</style>
