<template lang="pug">
	section.bg-light#team
		div.container
			div.row
				div.col-lg-12.text-center
					h2.section-heading.text-uppercase Our Amazing Team
						h3.section-subheading.text-muted Lorem ipsum dolor sit amet consectetur.
			div.row
				div.col-sm-4(v-for="(obj, key) in teamJSON", :key="key")
					div.team-member
						img.mx-auto.rounded-circle(:src="obj.avatar")
						h4 {{ obj.name }}
						p.text-muted {{ obj.title }}
							ul.list-inline.social-buttons
								li.list-inline-item
									a(href="#")
										i.fab.fa-twitter
								li.list-inline-item
									a(href="#")
										i.fab.fa-facebook-f
								li.list-inline-item
									a(href="#")
										i.fab.fa-linkedin-in
			div.row
				div.col-lg-8.mx-auto.text-center
					p.large.text-muted Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
</template>

<script>
export default {
	data: () => ({
			teamJSON:[
					{
						name:"Kay Garland",
						title:"Lead Designer",
						avatar: require('../assets/img/nejo.jpg'),

					},
					{
						name:"Larry Parker",
						title:"Lead Marketer",
						avatar: require('../assets/img/nejo.jpg'),

					},

					{
						name:"Diana Petersen",
						title:"Lead Developer",
						avatar: require('../assets/img/nejo.jpg'),

					},


			],
	}),

};
</script>


