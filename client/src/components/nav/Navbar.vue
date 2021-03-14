<template>
	<div class="container">
		<div class="row">
			<nav class="w-100 navbar navbar-expand-lg navbar-dark bg-dark">
				<!-- Title -->
				<button @click="homeRedirect()" class="btn p-0 mr-2">
					<h4 class="m-0 navbar-brand">
						The Has<i style="color: #58c6c2">#</i>tag Project
					</h4>
				</button>

				<!-- Hidden Nav button -->
				<button class="navbar-toggler">
					<span class="navbar-toggler-icon"></span>
				</button>

				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav mr-auto">
						<li class="nav-item active">
							<a @click="homeRedirect()" class="nav-link text-primary">
								Home
							</a>
						</li>
					</ul>

					<!-- Search Form -->
					<form class="form-inline my-2 my-lg-0">
						<input
							v-model="hashtag"
							type="text"
							placeholder="Search Hashtag"
							class="
								form-control
								mr-sm-2
								border
								border-secondary
								text-light
								bg-dark
							"
						>
						<button
							@click="quoteRedirect"
							class="btn btn-outline-primary my-2 my-sm-0"
						>Search</button>
					</form>
				</div>
			</nav>
		</div>
	</div>
</template>

<script>
	// [IMPORT] //
	import router from '../../router'

	export default {
		data() {
			return {
				hashtag: '',
			}
		},

		methods: {
			homeRedirect() {
				router.push({ name: '/' })
			},

			quoteRedirect() {
				if (this.hashtag) {
					router.push({ name: 'quote', params: { hashtag: this.hashtag } })
				}
			}
		},
	}
</script>