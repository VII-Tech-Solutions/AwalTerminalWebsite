<template >
  <header id="header" :class="classHeader">
    <nav class="navbar fixed-top navbar-expand-lg">
      <div class="container">
        <router-link class="navbar-brand" to="/">
          <img class="img-fluid logo" src="../../assets/images/logo.svg" alt="logo a" />
          <img
            class="img-fluid log-dark"
            src="../../assets/images/footer-logo.svg"
            alt="logo a"
          />
        </router-link>
        <button
          class="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          id="toggle"
        >
          <span class="navbar-toggler-icon"></span>
          <span class="icon fa fa-times"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div class="desktop">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link to="/" class="nav-link active">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/tour" class="nav-link"
                  >Tour the terminal</router-link
                >
              </li>
              <li class="nav-item">
                <router-link to="/story" class="nav-link"
                  >Our Story</router-link
                >
              </li>
              <li class="nav-item dropdown">
                <router-link to="/services" class="nav-link dropdown-toggle"
                  >All Services</router-link
                >
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <router-link class="dropdown-item" to="/elite-services"
                      >Elite Services</router-link
                    >
                  </li>
                  <li>
                    <router-link class="dropdown-item" to="/general-aviation"
                      >General Aviation</router-link
                    >
                  </li>
                  <!-- <li>
                  <router-link class="dropdown-item" to="/general-aviation-form1"
                    >General Aviation Form</router-link
                  >
                </li> -->
                </ul>
              </li>
              <li class="nav-item">
                <router-link to="/contact" class="nav-link"
                  >Contact Us</router-link
                >
              </li>
            </ul>
            <form class="d-flex" role="search">
              <router-link to="/services" class="btn book-now-btn" type="submit">Book Now</router-link>
            </form>
          </div>
          <div class="mobile-menu">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link to="/"   @click="item()" class="nav-link active">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/tour" @click="item()"  class="nav-link"
                  >Tour the terminal</router-link
                >
              </li>
              <li class="nav-item">
                <router-link to="/story" @click="item()"  class="nav-link"
                  >Our Story</router-link
                >
              </li>
              <li class="nav-item ">
                <router-link to="/services" @click="item()"  class="nav-link "
                  >All Services</router-link
                >
                <ul class="dropdown-menu">
                  <li>
                    <router-link class="dropdown-item" @click="item()"  to="/elite-services"
                      ><span class="icon"><img src="../../assets/images/icons/star.svg" alt="luggage" class=" img-fluid"/></span>Elite Services</router-link
                    >
                  </li>
                  <li>
                    <router-link class="dropdown-item" @click="item()"  to="/general-aviation"
                      ><span class="icon"><img src="../../assets/images/icons/flight-blue.svg" alt="luggage" class=" img-fluid"/></span>General Aviation</router-link
                    >
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <router-link @click="item()"  to="/contact" class="nav-link"
                  >Contact Us</router-link
                >
              </li>
            </ul>
            <div class="footer-menu">
              <div class="footer-copyrigt-links">
                <ul>
                  <li>
                    <router-link class="text-capitalize" @click="item()" to="/"
                      >Terms & Conditions</router-link
                    >
                  </li>
                  <li>
                    <router-link class="text-capitalize" @click="item()" to="/"
                      >Privacy Policy</router-link
                    >
                  </li>
                  <li>
                    <router-link class="text-capitalize" @click="item()" to="/"
                      >Cookies Policy</router-link
                    >
                  </li>
                  <li>
                    <span class="text-capitalize"
                      >Awal Terminal Building. © 2022 All rights reserved.</span>
                  </li>

                </ul>
              </div>
              <div class="operated-by">
                <span>Operated by</span>
                <div class="image">
                  <img src="/images/operated-by-mobile.png" alt="" class="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
export default {
  // state
  data() {
    return {
      classHeader: "header",
    };
  },

  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {

    handleScroll(event) {
      // console.log('event')
      // console.log(window.scrollY)
      if (window.scrollY > 500) {
        this.classHeader = "header dark";
      } else if (window.scrollY < 500) {
        this.classHeader = "header";
      }
    },
    item() {
      let element = document.getElementById("navbarSupportedContent");
      let element2 = document.getElementById("toggle");

      element.classList.remove("show");
      element2.classList.add("collapsed");

    },


  },
};
</script>
<style>
.header {
  /* position: absolute;
  top: 0;
  width: 100%;
  color: #fff; */
  z-index: 2;
  /* padding: 13px 0; */
}
.header .nav-link {
  color: #fff;
  font-weight: 600;
}
.header .book-now-btn {
  color: #fff;
  border-color: #fff;
  font-weight: 600;
  font-family: "Lora";
  letter-spacing: 2px;
  padding: 11px 22px;
  border-radius: 0;
  font-size: 14px;
  text-transform: uppercase;
}
.header .book-now-btn:hover {
  background: #fff;
}
.header .book-now-btn:focus {
  outline: none;
  box-shadow: none;
}
.header .navbar {
  padding: 13px 0;
}
.header .navbar .navbar-brand {
  margin-right: 35px;
  width: 65px;
}
.header .navbar-expand-lg .navbar-nav .nav-item {
  padding: 0 25px;
  font-size: 14px;
  /* height: 31px; */
  transition: all ease-in-out 0.3s;
}
.header .navbar-expand-lg .navbar-nav .nav-link {
  padding: 0;
  transition: all ease-in-out 0.3s;
  position: relative;
  font-size: 14px;
  line-height: 17px;
  font-weight: 600;
  font-family: "Lora";
}
.header .navbar-expand-lg .navbar-nav .nav-link:hover {
  color: #fff;
}
.header .navbar-expand-lg .navbar-nav .nav-link::before {
  /* border-bottom: 2px solid #fff ; */
  color: #fff;
  content: "";
  position: absolute;
  left: 0;
  display: inline-block;
  height: 2px;
  width: 100%;
  border-bottom: 2px solid #fff;
  opacity: 0;
  margin-top: 20px;
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
  -webkit-transform: scale(0, 1);
  transform: scale(0, 1);
}
.header .navbar-expand-lg .navbar-nav .nav-link:hover::before,
.header
  .navbar-expand-lg
  .navbar-nav
  .nav-link.router-link-exact-active::before {
  opacity: 1;
  -webkit-transform: scale(1);
  transform: scale(1);
}
.header .nav-link:hover,
.header .nav-link:focus {
  color: #fff;
}
.header .navbar-nav .nav-item .dropdown-menu {
  left: 25px;
  border-radius: 0;
}
.nav-item .dropdown-menu .dropdown-item {
  font-weight: 600;
  font-family: "Lora";
  font-size: 14px;
}
.nav-item .dropdown-menu .dropdown-item:hover,
.nav-item .dropdown-menu .dropdown-item:focus,
.nav-item .dropdown-menu .dropdown-item.active,
.nav-item .dropdown-menu .dropdown-item:active,
.nav-item .dropdown-menu .dropdown-item.router-link-exact-active {
  color: #011e41;
  background-color: #dee6f0;
}
.log-dark {
  display: none;
}
.dark .log-dark {
  display: block;
}
.dark .logo {
  display: none;
}
.dark .navbar {
  background: #fff;
  /* border-bottom: 1px solid #011e41; */
}
.header.dark .nav-link {
  color: #ffffff;
}
.header.dark .navbar-expand-lg .navbar-nav .nav-link:hover,
.header.dark .navbar-expand-lg .navbar-nav .nav-link.router-link-exact-active {
  color: #011e41;
}
.header.dark .navbar-expand-lg .navbar-nav .nav-link::before {
  color: #011e41;
  border-bottom: 2px solid #011e41;
}
.header.dark .book-now-btn {
  background: #011e41;
  border-color: #011e41;
}
.header.dark .book-now-btn:hover {
  color: #011e41;
  background: transparent;
}
li.nav-item.dropdown:hover ul.dropdown-menu {
  display: block;
}
.header.dark .navbar-toggler-icon {
  filter: invert(1);
}
.mobile-menu {
  display: none;
}
.desktop{
  display: flex;
  align-items: center;
  width: 100%;
}
@media (max-width: 991px) {
  .header .navbar-toggler-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
  }
  .header .container-fluid {
    justify-content: end !important;
  }
  .header .navbar-toggler:focus {
    box-shadow: 0 0 0 0.12rem #fff;
  }
  .header .navbar-toggler {
    padding: 0.2rem 0.55rem;
  }
  .header .navbar-collapse {
    /* position: absolute;
    width: 100%;
    top: 70px;
    background: #011e41;
    padding: 8px 20px;
    padding-bottom: 16px;
    left: 0; */
  }
  .header .navbar-collapse {
    background: #011e41;
    height: calc(100vh - 70px);
    padding-bottom: 60px;
    padding-top: 50px;
}
  /* .header .navbar{position: static;} */
  /* .header .container{position: relative;} */
  .header .navbar-expand-lg .navbar-nav .nav-item {
    padding: 6px 0;
  }
  .header .navbar-expand-lg .navbar-nav .nav-link:hover::before {
    opacity: 0;
  }
  .header .navbar-expand-lg .navbar-nav .nav-link:hover {
    /* color: #000; */
  }
  .header.dark .nav-link,
  .header.dark .navbar-expand-lg .navbar-nav .nav-link:hover,
  .header.dark
    .navbar-expand-lg
    .navbar-nav
    .nav-link.router-link-exact-active {
    color: #ffffff;
  }
  .header.dark .navbar-expand-lg .navbar-nav .nav-link:before {
    color: #fff;
    border-bottom: 2px solid #ffffff;
  }
   .desktop {
    display: none;
  }
  .navbar {
    /* background: #011e41; */
    /* height: 100vh; */
    /* align-items: flex-start; */
  }
  .dark .navbar {
    background: #011e41;
  }
  .dark .logo {
    display: block;
}
.dark .log-dark {
    display: none;
}
 .mobile-menu {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    overflow: auto;
}
.mobile-menu .navbar-nav {
    width: 100%;
}
.header .navbar-expand-lg .navbar-nav .nav-item {
    padding: 0 0;
    margin-bottom: 30px;
}
.header .navbar-expand-lg .navbar-nav .nav-link {
    font-size: 18px;
    line-height: normal;
    font-weight: normal;
}
.header.dark .navbar-expand-lg .navbar-nav .nav-link:before{
  display: none;
}
.header.dark .navbar-toggler-icon {
    filter: none;
}
.header .navbar-toggler-icon {
    filter: none;
    display: none;
}
.header .navbar-toggler.collapsed .navbar-toggler-icon{
  display: block;
}
.header .navbar-toggler.collapsed .icon{display: none; }
.mobile-menu  .footer-copyrigt-links ul {
    list-style: none;
    padding: 0;
}
.mobile-menu  .footer-copyrigt-links ul li {
    margin-bottom: 15px;
}
.mobile-menu  .footer-copyrigt-links ul li a ,.mobile-menu .footer-copyrigt-links ul li span{
    color: #fff;
    text-decoration: none;
    font-size: 11px;
    font-family: 'Lora';
    font-weight: 600;
}
.mobile-menu  .operated-by {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 14px;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 25px;
}
.mobile-menu .operated-by span {
    line-height: 40px;
}
.mobile-menu .operated-by .image {
    width: 165px;
    margin-left: 0;
    margin-top: 10px;
}
li.nav-item ul.dropdown-menu {
    display: block;
    background: none;
    color: #fff;
    border: none;
    padding: 0;
}
.nav-item .dropdown-menu .dropdown-item {
    font-weight: normal;
    font-family: "Lora";
    font-size: 18px;
    color: #7eade5 !important;
    padding: 0;
    margin-top: 20px;
    display: flex;
    align-items: center;
    background: none !important;
}
.nav-item .dropdown-menu .dropdown-item .icon {
    width: 20px;
    margin-right: 10px;
    display: flex;
    align-items: center;
}
.header .navbar-toggler {
    color: #fff;
    font-size: 24px;
    box-shadow: none !important;
}
.navbar {
    background: #011e41;
}
.header .navbar-expand-lg .navbar-nav .nav-link::before{
  display: none;
}
}
</style>
