<template lang="pug">
	section.bg-light#portfolio
		div.container
			div.row
				div.col-lg-12.text-center
					h2.section-heading.text-uppercase Portfolio
					h3.section-subheading.text-muted Lorem ipsum dolor sit amet consectetur.
			div.row
				div.col-md-4.col-sm-6.portfolio-item(v-for="(obj, key) in portfolioJSON" :key="key")
					a.portfolio-link(data-toggle="modal" href="#portfolioModal2")
						div.portfolio-hover
							div.portfolio-hover-content
								i.fas.fa-plus
						img.img-fluid(:src="obj.img")
					div.portfolio-caption {{obj.caption}}
						p.text-muted {{obj.title}}
</template>

<script>

export default {
	data: () => ({

		portfolioJSON: [
			{
				img: require('../assets/img/graphicDesign.jpg'),
				caption: 'Explore',
				title: 'Graphic Design',
			},
			{
				img: require ('../assets/img/finish.jpg'),
				caption: 'Finish',
				title: 'Identify',
			},
			{
				img: require('../assets/img/branding.jpeg'),
				caption: 'Lines',
				title: 'Branding',
			},
			{
				img: require('../assets/img/window.jpg'),
				caption: 'Southwest',
				title: 'Website Design',
			},
			{
				img: require('../assets/img/window.jpg'),
				caption: 'Window',
				title: 'Photography',
			},
			{
				img: require('../assets/img/window.jpg'),
				caption: 'Coffee',
				title: 'Drink a Lot!',
			},
			{
				img: require('../assets/img/window.jpg'),
				caption: 'Pizza',
				title: 'I Ate some Pizza!',
			},
			{
				img: require('../assets/img/window.jpg'),
				caption: 'Pizza',
				title: 'I Ate some Pizza!',
			},
			{
				img: require('../assets/img/window.jpg'),
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

