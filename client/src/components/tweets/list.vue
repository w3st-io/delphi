<template>
	<div class="row">
		<div
			v-for="tweet in tweets"
			:key="tweet.id_str"
			class="col-md-6"
		>
			<Tweet
				:id="tweet.id_str"
				:options="{ theme: 'dark' }"
			/>
		</div>
	</div>
</template>

<script>
	// [IMPORT] //
	import { Tweet } from 'vue-tweet-embed'

	// [EXPORT] //
	export default {
		components: {
			Tweet,
		},

		props: {
			tweets: {
				type: Array,
				required: true
			}
		},
	}
</script>