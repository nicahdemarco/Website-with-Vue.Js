<template lang="pug">
	div#app
			//- Navigation
			nav.navbar.navbar-expand-lg.navbar-dark.fixed-top#mainNav
				div.container
					a.navbar-brand.js-scroll-trigger(href="#page-top") Start Bootstrap
					button.navbar-toggler.navbar-toggler-right(type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation") Menu
					i.fas.fa-bars
				div.collapse.navbar-collapse#navbarResponsive
					ul.navbar-nav.text-uppercase.ml-auto
						li.nav-item
							a.nav-link.js-scroll-trigger(href="#services") Services
						li.nav-item
							a.nav-link.js-scroll-trigger(href="#portfolio") Portfolio
						li.nav-item
							a.nav-link.js-scroll-trigger(href="#about") About
						li.nav-item
							a.nav-link.js-scroll-trigger(href="#team") Team
						li.nav-item
							a.nav-link.js-scroll-trigger(href="#contact") Contact
			//- Header
			header.masthead
				div.container
					div.intro-text
						div.intro-lead-in Welcome To Our Studio!
						div.intro-heading.text-uppercase It's Nice To Meet You
							a.btn.btn-primary.btn-xl.text-uppercase.js-scroll-trigger(href="#services") Tell Me More
			//- Services component
			services

			//- Portfolio grid component
			Portfolio

			//- About
			section#about
				div.container
					div.row
						div.col-lg-12.text-center
							h2.section-heading.text-uppercase About
							h3.section-subheading.text-muted Lorem ipsum dolor sit amet consectetur.
					div.row
						div.col-lg-12
							ul.timeline
								li
									div.timeline-image
										img.rounded-circle.img-fluid(src="img/about/1.jpg" alt="")
									div.timeline-panel
										div.timeline-heading
											h4 2009-2011
											h4.subheading Our Humble Beginnings
										div.timeline-body
											p.text-muted Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!
								li.timeline-inverted
									div.timeline-image
										img.rounded-circle.img-fluid(src="img/about/2.jpg" alt="")
									div.timeline-panel
										div.timeline-heading
											h4 March 2011
											h4.subheading An Agency is Born
										div.timeline-body
											p.text-muted Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!
								li
									div.timeline-image
										img.rounded-circle.img-fluid(src="img/about/3.jpg" alt="")
									div.timeline-panel
										div.timeline-heading
											h4 December 2012
											h4.subheading Transition to Full Service
										div.timeline-body
											p.text-muted Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!
								li.timeline-inverted
									div.timeline-image
										img.rounded-circle.img-fluid(src="img/about/4.jpg" alt="")
									div.timeline-panel
										div.timeline-heading
											h4 July 2014
											h4.subheading Phase Two Expansion
										div.timeline-body
											p.text-muted Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!
								li.timeline-inverted
									div.timeline-image
										h4 Be Part
										|Of Our
										br
										|Story!

			//- Team component
			Team

			//- Clients
			section.py-5
				div.container
					div.row
						div.col-md-3.col-sm-
							a(href="#")
								img.img-fluid.d-block.mx-auto(src="./assets/img/logos/logoV.png" alt="")
						div.col-md-3.col-sm-6
							a(href="#")
								img.img-fluid.d-block.mx-auto(src="./assets/img/logos/logoV.png" alt="")
						div.col-md-3.col-sm-6
							a(href="#")
								img.img-fluid.d-block.mx-auto(src="./assets/img/logos/logoV.png" alt="")
						div.col-md-3.col-sm-6
							a(href="#")
								img.img-fluid.d-block.mx-auto(src="./assets/img/logos/logoV.png" alt="")

			//- Contact
			section#contact
				div.container
					div.row
						div.col-lg-12.text-center
							h2.section-heading.text-uppercase Contact Us
							h3.section-subheading.text-muted Lorem ipsum dolor sit amet consectetur.
					div.row
						div.col-lg-12
							form#contactForm(name="sentMessage" novalidate="novalidate")
								div.row
									div.col-md-6
										div.form-group
											input.form-control#name(type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name.")
											p.help-block.text-danger
										div.form-group
											input.form-control#email(type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address")
											p.help-block.text-danger
										div.form-group
											input.form-control#phone(type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number.")
										p.help-block.text-danger
									div.col-md-6
										div.form-group
											textarea.form-control#message(placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message.")
										p.help-block text-danger
										div.clearfix
									div.col-lg-12.text-center
										div#success
										button#sendMessageButton.btn.btn-primary.btn-xl.text-uppercase(type="submit") Send Message
			//- Footer
			footer
				div.container
					div.row
						div.col-md-4
							span.copyright Copyright &copy; Your Website 2018
						div.col-md-4
							ul.list-inline.social-buttons
								li.list-inline-item
									a( href="#")
										i.fab.fa-twitter
								li.list-inline-item
									a(href="#")
										i.fab.fa-facebook-f
								li.list-inline-item
									a(href="#")
										i.fab.fa-linkedin-in
						div.col-md-4
							ul.list-inline.quicklinks
								li.list-inline-item
									a(href="#") Privacy Policy
								li.list-inline-item
									a(href="#") Terms of Use
					//- Portfolio Modals
					//- Modal 1
				div.portfolio-modal.modal.fade#portfolioModal1(tabindex="-1" role="dialog" aria-hidden="true")
					div.modal-dialog
						div.modal-content
							div.close-modal(data-dismiss="modal")
								div.lr
									div.rl
							div.container
								div.row
									div.col-lg-8.mx-auto
										div.modal-body
											//- Project Details Go Here
											h2.text-uppercase Project Name
											p.item-intro.text-muted Lorem ipsum dolor sit amet consectetur.
											img.img-fluid.d-block.mx-auto(src="img/portfolio/01-full.jpg" alt="")
											p Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!
											ul.list-inline
												li Date: January 2017
												li Client: Threads
												li Category: Illustration
											button.btn.btn-primary(data-dismiss="modal" type="button")
												i.fas.fa-times Close Project
					//- Modal 2
				div.portfolio-modal.modal.fade#portfolioModal2(tabindex="-1" role="dialog" aria-hidden="true")
					div.modal-dialog
						div.modal-content
							div.close-modal(data-dismiss="modal")
								div.lr
									div.rl
							div.container
								div.row
									div.col-lg-8.mx-auto
										div.modal-body
											//- Project Details Go Here
											h2.text-uppercase Project Name
												p.item-intro.text-muted Lorem ipsum dolor sit amet consectetur.
												img.img-fluid.d-block.mx-auto(src="img/portfolio/02-full.jpg" alt="")
											p Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!
											ul.list-inline
												li Date: January 2017
												li Client: Explore
												li Category: Graphic Design
											button.btn.btn-primary(data-dismiss="modal" type="button")
												i.fas.fa-times Close Project

							//- Modal 3
				div.portfolio-modal.modal.fade#portfolioModal3( tabindex="-1" role="dialog" aria-hidden="true")
					div.modal-dialog
						div.modal-content
							div.close-modal(data-dismiss="modal")
								div.lr
									div.rl
							div.container
								div.row
									div.col-lg-8.mx-auto
										div.modal-body
											//- <!-- Project Details Go Here -->
										h2.text-uppercase Project Name
										p.item-intro.text-muted Lorem ipsum dolor sit amet consectetur.
										img.img-fluid.d-block.mx-auto(src="img/portfolio/03-full.jpg" alt="")
										p Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
										ul.list-inline
											li Date: January 2017
											li Client: Finish
											li Category: Identity
										button.btn.btn-primary(data-dismiss="modal" type="button")
											i.fas.fa-times Close Project
								//- Modal 4
				div.portfolio-modal.modal.fade#portfolioModal4(tabindex="-1" role="dialog" aria-hidden="true")
					div.modal-dialog
						div.modal-content
							div.close-modal(data-dismiss="modal")
								div.lr
									div.rl
						div.container
							div.row
								div.col-lg-8.mx-auto
									div.modal-body
										//- Project Details Go Here -->
									h2.text-uppercase Project Name
									p.item-intro.text-muted Lorem ipsum dolor sit amet consectetur.
									img.img-fluid.d-block.mx-auto(src="img/portfolio/04-full.jpg" alt="")
									p Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!
									ul.list-inline
										li Date: January 2017
										li Client: Lines
										li Category: Branding
									button.btn.btn-primary(data-dismiss="modal" type="button")
										i.fas.fa-times Close Project
						//- <!-- Modal 5 -->
				div.portfolio-modal.modal.fade#portfolioModal5(tabindex="-1" role="dialog" aria-hidden="true")
					div.modal-dialog
						div.modal-content
							div.close-modal(data-dismiss="modal")
								div.lr
									div.rl
						div.container
							div.row
								div.col-lg-8.mx-auto
									div.modal-body
										//- Project Details Go Here -->
									h2.text-uppercase Project Name
									p.item-intro.text-muted Lorem ipsum dolor sit amet consectetur.
									img.img-fluid.d-block.mx-auto(src="img/portfolio/05-full.jpg" alt="")
									p Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
									ul.list-inline
										<li>Date: January 2017</li>
										<li>Client: Southwest</li>
										<li>Category: Website Design</li>
									button.btn.btn-primary(data-dismiss="modal" type="button")
										i.fas.fa-times Close Project


									//- <!-- Modal 6 -->
				div.portfolio-modal.modal.fade#portfolioModal6(tabindex="-1" role="dialog" aria-hidden="true")
					div.modal-dialog
						div.modal-content
							div.close-modal(data-dismiss="modal")
								div.lr
								div.rl
						div.container
							div.row
								div.col-lg-8.mx-auto
									div.modal-body
									//- Project Details Go Here
									h2.text-uppercase Project Name
									p.item-intro.text-muted Lorem ipsum dolor sit amet consectetur.
									img.img-fluid.d-block.mx-auto(src="img/portfolio/06-full.jpg" alt="")
									p Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!
									ul.list-inline
										li Date: January 2017
										li Client: Window
										li Category: Photography
									button.btn.btn-primary(data-dismiss="modal" type="button")
										i.fas.fa-times Close Project

</template>

<script>
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Team from './components/Team'


export default {
  name: 'app',
  components: {
	Services,
	Portfolio,
	Team,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  background: black;
}

</style>