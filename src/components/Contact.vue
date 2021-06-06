<template>
    <div>
        <div id="form-submit" class="modal fade" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <i class="fal fa-times"></i>
                        </button>
                    </div>
                    <div class="modal-body text-center">
                        <h2 class="mb-4">Thank you!</h2>
                        <p>Your message has been submitted successfully and I'll get back to you shortly.</p>
                    </div>
                    <div class="modal-footer">
                    </div>
                </div>
            </div>
        </div>
        <div id="contact" class="container-fluid section contact">
            <div class="container">
                <div class="row">
                    <div class="col-12 title">
                        <div class="inner white">
                            <i class="fal fa-envelope"></i>
                            Contact Me
                        </div>
                    </div>
                    <div class="col-8 offset-2">
                        <div class="row form">
                            <div class="col-12 inner">
                                <form @submit="checkForm" method="post" action="contact_form.php">
                                    <div class="form-group">
                                        <input class="form-control" name="name" placeholder="name" type="text" required>
                                    </div>
                                    <div class="form-group">
                                        <input class="form-control" name="email" placeholder="email" type="email" required>
                                    </div>
                                    <div class="form-group">
                                        <textarea class="form-control" name="message" rows="20" cols="20" placeholder="message" required></textarea>
                                    </div>
                                    <div class="form-group">
                                        <input v-model="userAgent" class="form-control" name="useragent" hidden>
                                    </div>
                                    <div class="form-group">
                                        <button class="btn-main" name="submit" type="submit"><i class="fas fa-share"></i> {{ msgBtn }}</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery';
    export default {
        name: 'Contact',
        data: function () {
			return {
                msgBtn: "Send Message",
                userAgent: "",
            }
        },
        mounted() {
            if (localStorage.formSubmit) {
                $('#form-submit').modal();
                localStorage.removeItem("formSubmit"); 
            }
            this.userAgent = navigator.userAgent;
        },
		methods: {
            checkForm:function() {
                this.msgBtn = "Sending...",
                localStorage.setItem("formSubmit", true);
                if (this.name && this.email && this.message) return true;
            }
		}
    }
</script>