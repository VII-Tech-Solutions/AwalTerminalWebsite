<template>
    <div class="walk-through-terminal bg-white">
       <div class="container">
        <div class="main-page-title">
            <div class="page-title" data-aos="fade-up" data-aos-duration="2500">
                <h2 class=" mx-auto text-center">Walk through the terminal</h2>
                <p class="mx-auto">Following careful renovations, our interiors are the reflection of comfort and luxury. Feel at ease while relaxing at our common lounge with friends and family until your departure.</p>
            </div>
        </div>
        <div class="video-module">
            <div class="ratio ratio-16x9">
               <iframe width="683" height="384" src="https://www.youtube.com/embed/A83Ktx09Beg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div class="video-player-button">
                <p class="mb-0 player-icon"><i class="fa fa-play"></i></p>
            </div>
        </div>
       </div>
    </div>
</template>                         

<script >



</script>
<style>
.video-module {position: relative;width: 740px;margin: auto;}
.video-module .ratio{transition: all ease-in-out .3s;}
.video-module .ratio:hover {opacity: 0.8}
/* .video-player-button:hover{background-color: #011e41; cursor: pointer;}
.video-player-button:hover .player-icon {color: #fff} */
.video-player-button {display: flex;justify-content: center;align-items: center; border: 1px solid transparent; background-color:#fff;border-radius: 50%; width:80px; height:80px; position: absolute;margin: auto;left: 0;right: 0;top: 50%;-ms-transform: translateY(-50%);transform: translateY(-50%);}
.player-icon {font-size:22px;}
/* MEDIA QUERY */
@media (max-width: 1199px) {
.video-player-button{width:70px; height:70px;}
.player-icon {font-size:18px;}
}
@media (max-width: 767px) {
.video-module {width:500px;}
.video-player-button{width:50px; height:50px;}
.player-icon {font-size:16px;}
}
@media (max-width: 567px) {
.video-module {width:400px;}
}
@media (max-width: 467px) {
.video-module {width:auto;}
}
</style>