<template >
  <header id="header" :class="classHeader">
    <nav class="navbar fixed-top navbar-expand-lg">
      <div class="container">
        <router-link class="navbar-brand" to="/">
          <img class="logo" src="../../assets/images/logo.png" alt="logo a" />
          <img
            class="log-dark"
            src="../../assets/images/footer-logo.png"
            alt="logo a"
          />
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
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
              <router-link to="/story" class="nav-link">Our Story</router-link>
            </li>
            <li class="nav-item dropdown">
              <router-link
                to="/services"
                class="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                data-bs-auto-close="true"
                aria-expanded="false"
                >All Services</router-link
              >
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <router-link class="dropdown-item" to="/services"
                    >All Services</router-link
                  >
                </li>
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
                <li>
                  <router-link class="dropdown-item" to="/general-aviation-form1"
                    >General Aviation Form</router-link
                  >
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <router-link to="/contact" class="nav-link">Contact Us</router-link>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <button class="btn book-now-btn" type="submit">Book Now</button>
          </form>
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
      classHeader: 'header'
    }
  },

  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll (event) {
		// console.log('event')
		// console.log(window.scrollY)
		if(window.scrollY > 500) {
			this.classHeader = 'header dark'
		} else if (window.scrollY < 500) {
			this.classHeader = 'header'
		}
    }
  }
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
    font-family: 'Lora';
    letter-spacing: 2px;
    padding: 11px 22px;
    border-radius: 0;
    font-size: 14px;
    text-transform: uppercase;
}
.header .book-now-btn:hover {
  background: #fff;
}
.header .book-now-btn:focus{
  outline: none;
  box-shadow: none;
}
.header .navbar {
  padding: 13px 0;
}
.header .navbar .navbar-brand {
    margin-right: 35px;
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
.header .navbar-expand-lg .navbar-nav .nav-link:hover{
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
.header .navbar-expand-lg .navbar-nav .nav-link:hover::before,.header .navbar-expand-lg .navbar-nav .nav-link.router-link-exact-active::before {
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
}
.nav-item .dropdown-menu .dropdown-item {
  font-weight: 600;
  font-family: "Lora";
  font-size: 14px;
}
.nav-item .dropdown-menu .dropdown-item:hover,
.nav-item .dropdown-menu .dropdown-item:focus,
.nav-item .dropdown-menu .dropdown-item.active,
.nav-item .dropdown-menu .dropdown-item:active,.nav-item .dropdown-menu .dropdown-item.router-link-exact-active {
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
  color: #011e41;
}
.header.dark .navbar-expand-lg .navbar-nav .nav-link:hover,.header.dark .navbar-expand-lg .navbar-nav .nav-link.router-link-exact-active {
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
    position: absolute;
    width: 100%;
    top: 70px;
    background: #2c5c88;
    padding: 8px 20px;
    padding-bottom: 16px;
    left: 0;
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
    color: #000;
  }
}
</style>
