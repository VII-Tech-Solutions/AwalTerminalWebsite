<template>
	<div class="services story-services">
		<figure class="service-img mb-0" data-aos="zoom-out" data-aos-duration="2500">
			<img :src="backgroundImage2" class="img-fluid" />
		</figure>
		<div class="service-bg">
			<div class="container">
				<div class="bg-white service-fixed">
					<div class="main-page-title">
						<div class="page-title" data-aos="fade-up" data-aos-duration="2500">
							<h2 class=" mx-auto text-center">{{heading5}}</h2>
							<p class="mx-auto w-100">{{paragraph_4}}</p>
						</div>
					</div>
					<div class="service-card">
						<div class="row">
							<div class="col-lg-6 mb-lg-0 mb-2" data-aos="fade-up" data-aos-duration="2500">
								<div class="service-card-style">
									<div class="d-flex flex-column justify-content-between h-100">
										<div class="service-card-body">
											<div class="title-content d-flex align-items-center">
												<span class="icon">
                                        			<img src="../../../assets/images/icons/star-purple.svg" alt="couch" class=" img-fluid"/>
												</span>
												<strong class="service-title text-capitalize theme">{{column1heading1}}</strong>
											</div>
											<p>
												{{column1paragraph1}}
											</p>
										</div>
										<div class="d-flex justify-content-center">
											<router-link to="/elite-services" class="card-blue-btn text-uppercase d-inline">learn more</router-link>
										</div>
									</div>
								</div>
							</div>
							<div class="col-lg-6 mb-lg-0 mb-2" data-aos="fade-up" data-aos-duration="2500">
								<div class="service-card-style">
									<div class="d-flex flex-column justify-content-between h-100">
										<div class="service-card-body">
											<div class="title-content d-flex align-items-center">
												<span class="icon">
                                        			<img src="../../../assets/images/icons/flight.svg" alt="couch" class=" img-fluid"/>
												</span>
												<strong class="service-title text-capitalize theme">{{column2heading1}}</strong>
											</div>
											<p>
												{{column2paragraph1}}
											</p>
										</div>
										<div class="d-flex justify-content-center">
											<router-link to="/general-aviation" class="card-blue-btn text-uppercase d-inline">learn more</router-link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>                           
<script >
export default {
     props: {
    backgroundImage2: String,
    heading5: String,
    paragraph_4: String,
    column1heading1: String,
    column1paragraph1: String,
	column2heading1:String,
    column2paragraph1: String
  },
    name: "Service",
    // data() {
    //     return {
    //         HeadingTopText: "Welcome to Awal Private Terminal",
    //         MainHeading: "We'll take it from here",
    //         SubHeading: "Awal Private Terminal is setting new standards of luxury for private aircraft users and Elite guests on commercial flights.",
    //     };
    // },
}

</script>

<style>
.story-services .service-img{margin-top: 0;}
.story-services .service-bg{margin-top: -440px;}
@media (max-width: 467px){
	.story-services .service-bg{margin-top: 0;}
}
</style>
