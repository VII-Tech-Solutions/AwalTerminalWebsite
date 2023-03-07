
<template>

      <footer>
           <div class="footer-bottom">
                <div class="footer-nav">
                    <div class="container">
                        <div class="footer-logo">
                            <figure class="mb-0 logo-img">
                                <img src="../../assets/images/footer-logo.svg" class="img-fluid" alt="Site Logo" />
                            </figure>
                        </div>
                        <div class="footer-nav-links">
                            <ul>
                                <li><router-link to="/" class="text-capitalize">Home</router-link></li>
                                <li><router-link to="/tour" class="text-capitalize">Tour the terminal</router-link></li>
                                <li><router-link to="/story" class="text-capitalize">Our Story</router-link></li>
                                <li><router-link to="/services" class="text-capitalize">All Services</router-link></li>
                                <li><router-link to="/contact" class="text-capitalize">Contact Us</router-link></li>
                            </ul>
                        </div>
                        <div class="operated-by">
                            <span>Operated by</span>
                            <div class="image">
                                <img src="/images/operated-by.png" alt="" class="img-fluid"/>
                            </div>
                        </div>
                   </div>
              </div>
               <div class="footer-copyright">
                    <div class="container">
                        <div class="d-flex align-items-center justify-content-md-between justify-content-center footer-copyright-content">
                            <div class="footer-copyrigt-links">
                                <ul>
                                    <li><router-link class="text-capitalize" to="/terms-conditions">Terms & Conditions</router-link></li>
<!--                                    <li><router-link class="text-capitalize" to="/privacy-policy">Privacy Policy</router-link></li>-->
<!--                                    <li><router-link class="text-capitalize" to="/">Cookies Policy</router-link></li>-->
                                </ul>
                            </div>
                            <div class="d-flex align-items-center justify-content-md-between justify-content-center footer-copyright-content">
                                <svg width="66" height="30" viewBox="0 0 66 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.6864 19.0496C14.8088 19.7981 13.6705 20.25 12.4266 20.25C9.65096 20.25 7.40088 18.0002 7.40088 15.225C7.40088 12.4497 9.65096 10.2 12.4266 10.2C13.6705 10.2 14.8088 10.6518 15.6864 11.4003C16.564 10.6518 17.7023 10.2 18.9462 10.2C21.7219 10.2 23.9719 12.4497 23.9719 15.2249C23.9719 18.0002 21.7219 20.2499 18.9462 20.2499C17.7023 20.2499 16.564 19.7981 15.6864 19.0496Z" fill="#ED0006"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.6865 19.0495C16.7669 18.1278 17.452 16.7565 17.452 15.2251C17.452 13.6938 16.767 12.3225 15.6866 11.4008C16.5642 10.6522 17.7027 10.2002 18.9468 10.2002C21.7224 10.2002 23.9725 12.45 23.9725 15.2252C23.9725 18.0004 21.7224 20.2502 18.9468 20.2502C17.7027 20.2502 16.5642 19.7982 15.6865 19.0495Z" fill="#F9A000"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.6863 19.0497C16.7669 18.128 17.4521 16.7565 17.4521 15.225C17.4521 13.6935 16.7669 12.3221 15.6863 11.4004C14.6056 12.3221 13.9204 13.6935 13.9204 15.225C13.9204 16.7565 14.6056 18.128 15.6863 19.0497Z" fill="#FF5E00"/>
                                    <rect x="1.10078" y="0.3" width="29.4" height="29.4" rx="2.7" stroke="#D8D8D8" stroke-width="0.6"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M57.609 11.7514C57.5742 11.867 57.5355 11.9809 57.4941 12.0929C56.393 10.9299 55.2691 9.65347 54.1655 8.40001L54.1654 8.39995L54.1654 8.39989L54.1653 8.39984C53.4602 7.59901 52.7633 6.80754 52.0859 6.06102C51.7543 5.6945 51.4275 5.33963 51.1063 5H51.1459C51.2834 5 51.4181 5.00269 51.5481 5.00538C51.712 5.18102 51.8777 5.36024 52.0435 5.54216C52.8191 6.38796 53.621 7.29891 54.4322 8.22044L54.4323 8.2205C55.4879 9.41962 56.5593 10.6367 57.609 11.7514ZM52.1124 12.2092C52.8392 13.6862 53.5592 15.1491 54.3957 16.4222C55.3743 17.9116 56.5064 19.1357 57.9795 19.8374C58.4279 20.0506 58.9082 20.2173 59.4281 20.3284C59.3961 20.4512 59.3603 20.5731 59.3198 20.6932C58.4533 20.505 57.6847 20.1716 56.9981 19.7262C55.9215 19.0273 55.0437 18.0585 54.2751 16.9447C53.323 15.5644 52.5336 13.9589 51.7441 12.353C51.2598 11.368 50.7754 10.3829 50.2534 9.44941C49.3388 7.81129 48.3103 6.33715 46.9832 5.29675C46.8523 5.19369 46.7176 5.09512 46.5801 5.00013H47.2309C47.4814 5.19638 47.7216 5.40607 47.9514 5.62831C48.9074 6.55581 49.6948 7.69121 50.4031 8.91891C51.0121 9.97339 51.5642 11.0953 52.1124 12.2092ZM51.6565 16.58C52.2056 18.0622 52.863 19.4091 53.8397 20.4414C54.3992 21.0311 55.0623 21.5203 55.877 21.8815C56.5749 22.1889 57.3849 22.403 58.34 22.4998C58.2373 22.6298 58.129 22.757 58.015 22.878C57.157 22.7687 56.4035 22.5634 55.7404 22.2758C54.7552 21.8492 53.9697 21.2416 53.3311 20.5131C52.053 19.0542 51.3494 17.123 50.6995 15.1211C50.614 14.857 50.5295 14.5916 50.4449 14.3258L50.4448 14.3256L50.4447 14.3253L50.4446 14.325L50.4445 14.3248L50.4444 14.3245L50.4444 14.3242L50.4443 14.324L50.4442 14.3237L50.4441 14.3235L50.444 14.3232L50.4439 14.3229L50.4439 14.3227L50.4438 14.3224L50.4437 14.3221L50.4436 14.3219C50.1008 13.2455 49.7562 12.1634 49.3366 11.136C48.6368 9.42438 47.7298 7.87049 46.2887 6.7324C45.6445 6.22429 44.8929 5.79505 44 5.47154V5.03154C45.1849 5.43839 46.1493 6.02177 46.9415 6.72971C47.8786 7.5658 48.5756 8.57216 49.1351 9.66095C49.8689 11.0909 50.3703 12.6658 50.8609 14.2071L50.8609 14.2072C51.1183 15.0159 51.3728 15.8155 51.6565 16.58ZM53.4184 17.4097C52.68 16.1442 52.0926 14.6889 51.4959 13.2109C51.0271 12.0496 50.5526 10.8742 49.9947 9.76575C49.3599 8.50579 48.6158 7.33096 47.6401 6.36314C47.1136 5.8407 46.5183 5.38009 45.8392 5.00013H44.9388C45.5708 5.27434 46.1312 5.61666 46.637 6.01455C48.0206 7.10424 48.9879 8.6187 49.7951 10.2936C50.268 11.2729 50.6846 12.3052 51.1 13.3347C51.7494 14.944 52.3961 16.5465 53.2508 17.9286C53.9525 19.0613 54.7983 20.0488 55.9087 20.7586C56.7235 21.2783 57.6776 21.6466 58.8088 21.8151C58.8803 21.6941 58.9472 21.5696 59.0103 21.4432C58.2276 21.3402 57.541 21.1394 56.9288 20.8589C55.3785 20.1483 54.2963 18.917 53.4184 17.4097ZM57.8124 10.497C57.8124 10.4858 57.8126 10.4744 57.8128 10.4629C57.8131 10.4515 57.8133 10.4401 57.8133 10.4289C57.8133 10.3061 57.8086 10.186 57.8001 10.0651C56.8539 9.13538 55.8871 8.15651 54.9373 7.19491L54.9372 7.19477C54.2354 6.48428 53.543 5.78323 52.8751 5.11841C52.7197 5.09422 52.5577 5.0745 52.3891 5.05748L52.3944 5.06276L52.3946 5.06297L52.3948 5.0631C52.4438 5.11148 52.4937 5.16068 52.5435 5.21071C53.2415 5.90436 53.9684 6.64035 54.7065 7.38762L54.7068 7.38799L54.707 7.38813L54.7074 7.38856L54.7075 7.3887L54.7076 7.38879L54.7076 7.38881C55.7369 8.43101 56.7879 9.49514 57.8124 10.497ZM55.3744 15.4363C56.4519 16.9078 57.6339 18.1229 59.0298 18.8165C59.22 18.9097 59.4131 18.9949 59.6109 19.0692C59.6071 19.1956 59.5996 19.322 59.5864 19.4474C59.0552 19.2583 58.556 19.0038 58.086 18.6938C57.0424 18.0064 56.1345 17.0539 55.299 15.9597C54.2475 14.5804 53.3089 12.9717 52.3744 11.3699L52.3744 11.3699C51.8256 10.4294 51.2782 9.4912 50.7102 8.60334C49.8249 7.21792 48.8896 5.95617 47.8309 5H48.3716C49.2645 5.86656 50.0613 6.92578 50.8129 8.07194C51.4686 9.07227 52.0914 10.1396 52.7127 11.2044L52.7128 11.2044L52.7128 11.2044C53.5748 12.6817 54.434 14.1542 55.3744 15.4363ZM52.7594 21.4486C51.81 20.41 51.2449 19.0506 50.8088 17.5469C50.5886 16.7908 50.4018 15.9997 50.2125 15.1975C49.8374 13.6081 49.4519 11.9751 48.7753 10.4845C48.2648 9.3634 47.5876 8.3212 46.6203 7.44926C45.9139 6.81122 45.053 6.26637 44 5.84608V6.31386C44.7516 6.63109 45.3911 7.01464 45.9412 7.45016C47.4407 8.63843 48.2855 10.23 48.8779 11.9774C49.2411 13.0491 49.5077 14.1767 49.7722 15.2957C49.8308 15.5437 49.8894 15.7913 49.9489 16.0378C50.1947 17.0558 50.4565 18.055 50.8116 18.986C51.3428 20.3813 52.0869 21.6305 53.3076 22.5356C54.2023 23.1996 55.3458 23.6701 56.8226 23.887C57.0016 23.7714 57.1711 23.6477 57.3322 23.5169C56.3498 23.4129 55.5247 23.2014 54.8249 22.9021C53.9716 22.5365 53.3029 22.0445 52.7594 21.4486ZM56.9986 13.0894C56.9355 13.1906 56.8695 13.2856 56.8017 13.3761C55.7209 12.1388 54.6454 10.7551 53.5846 9.39023C52.926 8.54292 52.2731 7.70289 51.628 6.90965C51.0761 6.23039 50.5289 5.58517 49.9911 5H50.445C50.8387 5.43642 51.2343 5.90061 51.6337 6.38363C52.3702 7.27706 53.1157 8.23624 53.8665 9.2023L53.8665 9.20233L53.8666 9.20239C54.9036 10.5366 55.9508 11.884 56.9986 13.0894ZM56.8717 7.49142C56.3489 7.01769 55.8261 6.54201 55.3103 6.07268L55.0407 5.82731C54.7845 5.68213 54.5047 5.55309 54.1977 5.44287C54.5504 5.76297 54.9086 6.08865 55.2697 6.41709L55.2703 6.41761C55.9534 7.03879 56.6473 7.66983 57.336 8.29167C57.2051 8.01028 57.0497 7.74323 56.8717 7.49142ZM45.9063 24.6953C45.2791 24.1308 44.6395 23.5456 44 22.9577V22.5751C44.8985 23.4004 45.7999 24.2248 46.6674 25H46.2454C46.1333 24.8996 46.0203 24.7984 45.9063 24.6953ZM44 19.4001V19.8867L44.4026 20.3518C45.7448 21.9033 47.1167 23.4891 48.4428 24.8396C48.4955 24.8933 48.5483 24.9471 48.601 25H49.0513C48.8346 24.7858 48.6152 24.5636 48.3957 24.3351C47.1648 23.0578 45.8943 21.5891 44.6459 20.1459L44.6459 20.1459L44.6458 20.1458L44.6457 20.1457C44.4297 19.896 44.2144 19.6471 44 19.4001ZM44.753 24.9001C44.5034 24.6943 44.2514 24.4866 44.0001 24.2776V23.9353C44.4189 24.2826 44.8368 24.6273 45.2488 24.9671L45.2885 24.9999H44.8741L44.753 24.9001ZM47.1265 18.0302L47.1265 18.0302C46.523 16.9755 45.9179 15.918 45.2781 14.9265C44.8693 14.2939 44.4464 13.689 44 13.128V13.7382C44.4041 14.2759 44.7912 14.8521 45.1689 15.4525C45.7228 16.3329 46.2548 17.2627 46.788 18.1948C47.6925 19.776 48.6006 21.3634 49.6258 22.7255C50.2813 23.5957 50.9868 24.3744 51.7733 24.9999H52.198C52.2611 24.9999 52.3243 24.999 52.3864 24.9981C51.3937 24.2991 50.5187 23.3286 49.7087 22.2076C48.793 20.9426 47.9613 19.4892 47.1265 18.0302ZM47.4774 24.9999C46.3471 23.912 45.1642 22.704 44 21.5077V21.0767C45.3111 22.4244 46.6485 23.7955 47.9106 24.9999H47.4774ZM56.3249 14.9732C57.2273 16.0503 58.1672 16.9868 59.176 17.6607C59.2928 17.7386 59.4096 17.813 59.5273 17.8829C59.499 17.7216 59.4633 17.5612 59.4209 17.4035C58.349 16.6946 57.3327 15.6596 56.3541 14.4525C55.3079 13.1638 54.3035 11.6836 53.3026 10.2085L53.3026 10.2085L53.3026 10.2084C52.6122 9.19103 51.9235 8.17602 51.2238 7.22791C50.6313 6.42408 50.0304 5.66954 49.4126 5.00013H48.9265C49.6904 5.79499 50.4345 6.74041 51.1701 7.75752C51.7796 8.59871 52.3835 9.48867 52.9907 10.3836L52.9907 10.3836L52.9907 10.3836L52.9907 10.3836L52.9908 10.3836L52.9908 10.3836C54.0745 11.9808 55.169 13.5936 56.3249 14.9732ZM48.7018 16.6283C49.2846 18.0953 49.8582 19.5391 50.5837 20.7953C51.4493 22.2936 52.5192 23.5168 54.0629 24.223C54.4133 24.3843 54.7891 24.5178 55.1932 24.6227C54.9549 24.6934 54.7034 24.7544 54.4378 24.8064C53.932 24.6253 53.4705 24.3959 53.0476 24.1253C51.9419 23.42 51.1055 22.4379 50.4132 21.3114C49.5709 19.9376 48.9383 18.3446 48.3028 16.7444C47.8958 15.7196 47.4876 14.6918 47.0225 13.7167C46.2492 12.0939 45.3214 10.6206 44 9.54167V9.02909C44.3193 9.26925 44.6169 9.52913 44.8957 9.80603C45.8658 10.7703 46.6014 11.9397 47.2259 13.1934C47.7763 14.2989 48.2419 15.4708 48.7018 16.6283L48.7018 16.6283ZM50.1457 21.5006C49.3281 20.2411 48.6288 18.7931 47.9224 17.3303L47.9224 17.3303C47.3879 16.2234 46.8492 15.1079 46.252 14.0591C45.5984 12.913 44.8741 11.8457 44 10.9549V11.5231C44.7959 12.4066 45.474 13.4569 46.0957 14.5851C46.6069 15.5128 47.0794 16.4918 47.5518 17.4704C48.3196 19.0611 49.0871 20.6509 50.0195 22.0185C50.7739 23.1235 51.6376 24.0841 52.7048 24.7768C52.8121 24.8458 52.9205 24.9121 53.0316 24.9767C53.2793 24.9623 53.5157 24.9408 53.7437 24.9139C53.7328 24.909 53.7225 24.9041 53.7121 24.8992L53.7121 24.8991C53.7077 24.8971 53.7034 24.895 53.699 24.893C53.693 24.8901 53.6868 24.8872 53.6805 24.8844C52.2178 24.189 51.1036 22.9774 50.1457 21.5006ZM46.3198 18.7392L46.3198 18.7392C47.286 20.1916 48.2548 21.6479 49.2698 22.9155C49.8961 23.6978 50.5385 24.4076 51.2063 24.9999H50.6845C50.1843 24.5295 49.703 23.9998 49.2321 23.4308C48.1101 22.0737 47.0547 20.4878 46.0089 18.9161C45.42 18.0311 44.8342 17.1507 44.2411 16.3182C44.1736 16.223 44.1055 16.1285 44.0378 16.0346L44 15.9822V15.3827C44.1008 15.5189 44.2025 15.6569 44.3042 15.7949C44.9844 16.7318 45.6514 17.7345 46.3198 18.7392ZM52.4147 22.1279C51.4417 21.0991 50.7909 19.7567 50.2484 18.279C49.9672 17.5152 49.7156 16.7163 49.4611 15.9082C48.9773 14.3719 48.483 12.8023 47.7552 11.377C47.1986 10.29 46.5054 9.28545 45.571 8.45115C45.1095 8.03893 44.5887 7.66883 44 7.3516V7.83014C44.3287 8.02101 44.6348 8.23071 44.9193 8.45474C46.3566 9.59103 47.2579 11.1413 47.9502 12.8476C48.3681 13.8781 48.7103 14.9632 49.0505 16.0421L49.0506 16.0422C49.1328 16.3031 49.215 16.5636 49.298 16.8228C49.9385 18.8185 50.6336 20.7443 51.9051 22.1996C52.5409 22.9263 53.3236 23.5321 54.3078 23.9578C54.7543 24.1514 55.2422 24.3073 55.7753 24.4229C56.006 24.3315 56.2217 24.2302 56.4261 24.1209C55.6764 24.008 55.0208 23.818 54.4444 23.5626C53.6306 23.2041 52.9704 22.7158 52.4147 22.1279ZM50.1288 25C49.6974 24.577 49.2641 24.1155 48.8327 23.6244C47.7108 22.3507 46.5938 20.8866 45.488 19.4371C44.9895 18.7838 44.4934 18.1334 44 17.5048V18.0532C44.4001 18.568 44.8026 19.0955 45.2073 19.6259C46.4011 21.1905 47.6135 22.7795 48.8374 24.1361C49.1087 24.4363 49.3809 24.7249 49.6531 25H50.1288Z" fill="#E90030"/>
                                    <rect x="35.9006" y="0.3" width="29.4" height="29.4" rx="2.7" stroke="#D8D8D8" stroke-width="0.6"/>
                                </svg>

                            </div>
                            <p>Awal Terminal Building. © 2022 All rights reserved.</p>
                        </div>
                   </div>
              </div>
           </div>
      </footer>

</template>


<script>
export default {

}
</script>



<style>
.footer-service {
    background-image: url('../../assets/images/footer-img.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 100vh;
    position: relative;
    display: flex;
    align-content: flex-end;
    padding: 100px 0;
    background-attachment: fixed;
}
.footer-service.services-bg {
    background-image: url('../../assets/images/service-footer-bg.jpg');
}
.footer-service.tour-bg {
    background-image: url('../../assets/images/tour-footer-bg.jpg');
}
.footer-service.story-bg {
    background-image: url('../../assets/images/story-footer-bg.jpg');
}
.footer-service.elite-story-bg {
    background-image: url('../../assets/images/elite-footer-bg.jpg');
}
.footer-service.GeneralAviation-bg {
    background-image: url('../../assets/images/general-service-footer-bg.jpg');
}
.footer-service.privacy-bg {
    background-image: url('../../assets/images/privacy-bg.jpg') !important;
}
.footer-content {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
}
.footer-booking {
    margin-bottom: 20px;
}
.footer-content > a {
    margin-bottom: 40px;
}
.footer-service .footer-content .service-list ul{
    display: flex;
    align-items: baseline;
    padding-left: 0px;
    margin-bottom: 0px;
    list-style: none;
}
.footer-service .footer-content .service-list ul li:not(:last-child) {
    margin-right: 20px;
}
.footer-service .footer-content .service-list ul li figure {
    margin-bottom: 20px;
    width: 170px;
    height: 170px;
}
.footer-service .footer-content .service-list ul li figure img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.footer-service .footer-content .service-list ul li > .footer-list-element > p {
  /* font-family: SourceSansPro; */
  font-size: 18px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 27px;
  letter-spacing: normal;
  color: #fff;
}
.footer-nav .logo-img {
    margin-right: 60px;
    width: 65px;
}
.footer-nav {
    padding: 30px 0px;
    border-bottom: 2px solid #f0f0f1
}
.footer-nav > div{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.footer-nav .footer-nav-links ul {
    display: flex;
    align-items: center;
    padding-left: 0px;
    margin-bottom: 0px;
    list-style: none;
}
.footer-nav .footer-nav-links ul li a{
  font-family: Lora;
  font-size: 14px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #011e41;
  text-decoration: none;
  position: relative;
}
.footer-nav .footer-nav-links ul li:not(:last-child) {
    margin-right: 50px;
}
.footer-nav .footer-nav-links ul li a:after {
	content: '';
    position: absolute;
    left: 0;
    display: inline-block;
    height: 1em;
    width: 100%;
    border-bottom: 2px solid;
    margin-top: 10px;
    opacity: 0;
	-webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
	transition: opacity 0.35s, transform 0.35s;
	-webkit-transform: scale(0,1);
	transform: scale(0,1);
}
.footer-nav .footer-nav-links ul li a:hover:after {
  opacity: 1;
 -webkit-transform: scale(1);
 transform: scale(1);
}
.footer-copyright {
    padding: 20px 0px;
}
.footer-copyright p{
  font-family: Lora;
  font-size: 11px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 15px;
  letter-spacing: normal;
  color: #011e41;
  text-decoration: none;
}
.footer-copyright .footer-copyrigt-links ul {
    display: flex;
    align-items: center;
    padding-left: 0px;
    margin-bottom: 0px;
    list-style: none;
}
.footer-copyright .footer-copyrigt-links ul li a{
  font-family: Lora;
  font-stretch: normal;
  font-size: 11px;
  line-height: 15px;
  letter-spacing: normal;
  color: #011e41;
  text-decoration: none;
  font-size: 11px;
    font-weight: 600;
}
.footer-copyright .footer-copyrigt-links ul li:not(:last-child) {
    margin-right: 40px;
}
@media (max-width: 991px) {
    .footer-service .footer-content .service-list ul li figure{width: 150px; height: auto;}
    .footer-service{min-height: 80vh;padding: 50px 0;background-attachment: scroll;}
    .footer-copyright .footer-copyrigt-links ul li:not(:last-child) {margin-right: 25px;}
.footer-nav > div{flex-direction: column;}
.footer-nav .logo-img{
    margin-right: 0;
}
.footer-nav-links{margin: 30px 0;}
}
@media (max-width: 767px) {
    .footer-service .footer-content .service-list ul li figure{width: 130px;}
    .white-btn{padding: 12px 15px !important;}
    .footer-content > a {margin-bottom: 30px;}
    .footer-list-element{display: flex;flex-direction: column;align-items: center;}
    .footer-nav .logo-img{margin-right: 40px}
    .footer-nav .footer-nav-links ul li:not(:last-child) {margin-right: 25px;}
    .footer-nav{padding: 25px 0;}
    .footer-copyright-content{flex-wrap: wrap;justify-content: center;}
    .footer-copyright .footer-copyrigt-links ul{margin-bottom: 15px;}
}
@media (max-width: 575px) {
    .footer-service{padding: 20px 0;}
    .footer-nav{padding:15px 0;}
    .footer-service .footer-content {text-align:center; align-items:center;}
    .footer-service .footer-content .service-list ul li figure {width: 110px;}
    .footer-service .footer-content .service-list ul li > .footer-list-element > p{font-size: 16px;line-height: 20px;}
    .white-btn {padding: 10px 15px !important;font-size: 16px;line-height: 20px;}
    .footer-service .footer-content .service-list ul {flex-wrap: wrap;justify-content: center;}
    .footer-list-element{margin-bottom: 20px;}
    .footer-nav > div{display: block;text-align: center;}
    .footer-nav .logo-img{margin-right: 0;margin-bottom: 20px !important;}
    .footer-nav .footer-nav-links ul{justify-content: center;flex-wrap: wrap;}
    .footer-nav .footer-nav-links ul li{margin-right: 20px;margin-bottom: 10px}
    .footer-copyright .footer-copyrigt-links ul{flex-wrap: wrap;justify-content: center;}
    .footer-service .footer-content .service-list ul li:not(:last-child) {margin-right:10px;}
}
</style>
