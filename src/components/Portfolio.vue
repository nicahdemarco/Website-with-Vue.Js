<template>
	<section class="bg-light" id="portfolio">
		<div class="container">
			<div class="row">
				<div class="col-lg-12 text-center">
					<h2 class="section-heading text-uppercase">Portfolio</h2>
					<h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
				</div>
			</div>
			<div class="row">
				<div class="col-md-4 col-sm-6 portfolio-item" v-for="(obj, key) in portfolioJSON" :key="key">
					<a class="portfolio-link" data-toggle="modal" href="#portfolioModal2">
						<div class="portfolio-hover">
							<div class="portfolio-hover-content">
								<i class="fas fa-plus fa-3x"></i>
							</div>
						</div>


						<img  :src="obj.img" />
						<span>{{obj.img}}</span>
					</a>
					<div class="portfolio-caption">
						<h4>{{ obj.caption }}</h4>
						<p class="text-muted">{{ obj.title }}</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	data: () => ({
		portfolioJSON: [
			{
				img: '../assets/img/graphicDesign.jpg',
				caption: 'Explore',
				title: 'Graphic Design',
			},
			{
				img: '../assets/img/branding.jpg',
				caption: 'Finish',
				title: 'Identify',
			},
			{
				img:'../assets/img/graphicDesign.jpg',
				caption: 'Lines',
				title: 'Branding',
			},
			{
				img: '../assets/img/graphicDesign.jpg',
				caption: 'Southwest',
				title: 'Website Design',
			},
			{
				img: '../assets/img/graphicDesign.jpg',
				caption: 'Window',
				title: 'Photography',
			},
			{
				img: '../assets/img/graphicDesign.jpg',
				caption: 'Coffee',
				title: 'Drink a Lot!',
			},
			{
				img: '../assets/img/graphicDesign.jpg',
				caption: 'Pizza',
				title: 'I Ate some Pizza!',
			},
			{
				img: '../assets/img/graphicDesign.jpg',
				caption: 'Pizza',
				title: 'I Ate some Pizza!',
			},
			{
				img: '../assets/img/graphicDesign.jpg',
				caption: 'Pizza',
				title: 'I Ate some Pizza!',
			},
		],
	}),
};
</script>

<style lang="css">
.portfolio-caption {
	-webkit-box-shadow: 1px 4px 10px 0px rgba(0, 0, 0, 0.3);
	-moz-box-shadow: 1px 4px 10px 0px rgba(0, 0, 0, 0.3);
	box-shadow: 1px 4px 20px 1px rgba(0, 0, 0, 0.2);
}
</style>

