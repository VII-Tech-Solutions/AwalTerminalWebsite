<template>
	<div class="elite-forrm-footer">
		<div class="container">
			<div class="row align-items-center">
				<div class="col-6">
					<span class="cancel-link d-inline-block text-decoration-none">Cancel</span>
				</div>
				<div class="col-6 text-end">
					<router-link to="/elite-form2" class="btn-next d-inline-block align-top transition">Next</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<style>
.elite-forrm-footer{width:100%;position:fixed;left:0;bottom:0;background:#dee6f0;padding:20px 0;font-size:14px;line-height:17px;font-family: "Lora";}
.elite-forrm-footer .cancel-link{color:#011e41;font-family: 'lora';font-weight: 600;}
.elite-forrm-footer .btn-next,.elite-forrm-footer .btn-next:focus{background-color:#011e41;border:1px solid #011e41;color:#fff;padding:10px 20px;text-decoration: none;}
.elite-forrm-footer .btn-next:hover{background-color:transparent;border-color:#011e41;color:#011e41;}
@media (max-width:768px) { 
.elite-forrm-footer, .form-footer {padding:15px 0px;}
}
</style>