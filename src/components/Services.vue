<template lang="pug">
	section#services
		div.container
			div.row
				div.col-lg-12.text-center
					h2.section-heading.text-uppercase Services
					h3.section-subheading.text-muted Lorem ipsum dolor sit amet consectetur.
			div.row.text-center
				div.col-md-4(v-for="(obj,key) in servicesJson", :key="key")
					span.fa-stack.fa-4x
						i.fas.fa-circle.fa-stack-2x.text-primary
						i.fas.fa-shopping-cart.fa-stack-1x.fa-inverse
					h4.service-heading {{obj.titleServ}}
					p.text-muted {{obj.serv}}

</template>

<script>
export default {
	data: () => ({
		servicesJson: [
			{
				img: './assets/img/logoV.png',
				titleServ: 'Primer servicio',
				serv:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam.',
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
