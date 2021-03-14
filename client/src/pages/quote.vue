<template>
	<div class="mt-3 container">
		<h2 class="text-center text-primary">
			Tweets containing #<span class="text-uppercase">{{ hashtag }}</span>
		</h2>
		<div v-if="error" class="w-100 alert alert-danger">{{ error }}</div>

		<div
			v-for="tweet in tweets"
			:key="tweet.id_str"
			class="m-auto text-light"
			style="max-width: 680px;"
		>
			<div class="mt-3 card card-body border-primary bg-dark">
				<TweetObj :tweet="tweet" />
			</div>
		</div>
	</div>
</template>

<script>
	import TweetObj from '../components/tweets/tweetObj'
	import pageService from '../services/pageService'

	export default {
		components: {
			TweetObj,
		},

		data: function() {
			return {
				hashtag: this.$route.params.hashtag,
				returned: {},
				tweets: [],
				error: '',
			}
		},

		created: async function() {
			try {
				this.returned = await pageService.s_quote(this.hashtag)
				this.tweets = this.returned.tweets.statuses
			}
			catch (err) { this.error = err }			
		}
	}
</script>