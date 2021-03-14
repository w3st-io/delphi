<template>
	<div class="row">
		<!-- Image -->
		<div class="col-2">
			<img
				:src="tweet.user.profile_image_url_https"
				class="w-100 rounded-circle"
			>
		</div>

		<!-- User and Timestamp -->
		<div class="col-7">
			<h5 class="text-primary">{{ tweet.user.screen_name }}</h5>
			<h5 class="small text-secondary">{{ tweet.created_at }}</h5>
		</div>

		<!-- Url Link -->
		<div class="col-3">
			<a
				:href="`https://twitter.com/i/web/status/${tweet.id_str}`"
				target="_blank"
			>
				<button class="w-100 btn btn-outline-primary">
					View Tweet
				</button>
			</a>
		</div>

		<!-- Tweet Text -->
		<div class="col-12 my-3">
			<p>{{ tweet.text }}</p>
		</div>

		<!-- Entities (Hashtags) -->
		<div class="col-4 text-primary">
			Hashtags:
			<span v-for="(hashtag, index) in tweet.entities.hashtags" :key="index">
				#{{ hashtag.text }}
			</span>
		</div>

		<!-- Entities (symbols) -->
		<div class="col-4 text-primary">
			symbols:
			<span v-for="(symbol, index) in tweet.entities.symbols" :key="index">
				{{ symbol.text }}
			</span>
		</div>

		<!-- Entities (user_mentions) -->
		<div class="col-4 text-primary">
			User Mentions:
			<span v-for="(user, index) in tweet.entities.user_mentions" :key="index">
				{{ user.screen_name }}
			</span>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		tweet: {
			type: Object,
			required: true,
		}
	}
}
</script>