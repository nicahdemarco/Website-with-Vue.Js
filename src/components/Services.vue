<template>
	<section id="services">
		<div class="container">
			<div class="row">
				<div class="col-lg-12 text-center">
					<h2 class="section-heading text-uppercase">Services</h2>
					<h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
				</div>
			</div>
			<div class="row text-center">
				<div class="col-md-4" v-for="(obj,key) in servicesJson":key="key">
					<span class="fa-stack fa-4x">
						<i class="fas fa-circle fa-stack-2x text-primary"></i>
						<i class="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
					</span>
					<h4 class="service-heading">{{obj.titleServ}}</h4>
					<p class="text-muted">{{obj.serv}}</p>
				</div>

			</div>
		</div>
	</section>
</template>

<script>
export default {
	data: () => ({
		servicesJson: [
			{
				img: './assets/img/logoV.png',
				titleServ: 'Primer servicio',
				serv:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam.',
				// icon:,
			},
			{
				img: './assets/img/logoV.png',
				titleServ: 'Segundo servicio',
				serv:
					'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.',
			},
			{
				img: './assets/img/logoV.png',
				titleServ: 'Tercer servicio',
				serv:
					'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.',
			},
		],
	}),
};
</script>

<style scoped>
</style>
