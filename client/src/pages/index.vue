<template>
	<div class="container">
		<!-- SECTION 1 -->
		<section v-if="!loading" class="row">
			<!-- #hack, #hacked, #malware -->
			<div class="col-12 mt-3">
				<div class="card card-body bg-dark">
					<WrappedLineChart
						:title="'#hack, #hacked, #malware'"
						:labels="allHashtagsLabels"
						:data="allHashtagsValues"
						:height="350"
					/>
				</div>
			</div>
		</section>

		<!-- SECTION 2 -->
		<section v-if="!loading" class="row mt-3">
			<div class="col-12">
				<div class="card card-body bg-dark">
					<!-- [COMPONENT] ButtonTabs -->
					<ButtonTabs
						:tabs="['Charts', 'Recent Tweets', 'Heat Map']"
						@tabClicked="switchTab"
						class="mb-3"
					/>
				
					<!-- Charts -->
					<div v-show="currentTab == 'Charts'" class="w-100">
						<div class="row">
							<!-- #hack -->
							<div class="col-md-4">
								<WrappedLineChart
									:title="'#hack'"
									:labels="hackLabels"
									:data="hackValues"
								/>
							</div>

							<!-- #hacked -->
							<div class="col-md-4">
								<WrappedLineChart
									:title="'#hacked'"
									:labels="hackedLabels"
									:data="hackedValues"
								/>
							</div>
							
							<!-- #malware -->
							<div class="col-md-4">
								<WrappedLineChart
									:title="'#malware'"
									:labels="malwareLabels"
									:data="malwareValues"
								/>
							</div>
						</div>
					</div>

					<!-- Recent Tweets -->
					<div  v-show="currentTab == 'Recent Tweets'" class="w-100">
						<!-- [COMPONENT] Tweet List -->
						<TweetList v-if="!loading" :tweets="recentVerifiedTweets" />
					</div>

					<!-- Heat Map -->
					<div v-show="currentTab == 'Heat Map'" class="w-100">
						<div class="row">
							<Map
								map="US"
								:countryData="{
									US_CA: 50,
									US_NJ: 51,
									US_TX: 30
								}"
								class="col-6"
							/>

							<Map
								:countryData="{
									US: 400,
									CA: 300,
									UK: 400,
									PK: 100,
									IN: 300,
									CN: 300
								}"
								class="col-6"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- [LOADING] -->
		<div v-if="loading" class="mt-3 row">
			<div class="w-100 alert alert-primary text-center">Loading..</div>
		</div>
	</div>
</template>

<script>
	// [IMPORT] //
	import Map from 'vue-geo-heat-maps'

	// [IMPORT] Personal //
	import ButtonTabs from '../components/controls/ButtonTabs'
	import WrappedLineChart from '../components/chartjs/WrappedLineChart'
	import TweetList from '../components/tweets/list'
	import PageService from '../services/pageService'

	// [EXPORT] //
	export default {
		components: {
			ButtonTabs,
			Map,
			TweetList,
			WrappedLineChart,
		},

		data() {
			return {
				currentTab: 'Charts',
				loading: true,
				returned: [],

				// All Hashtags
				allHashtagsLabels: [],
				allHashtagsValues: [],

				// #hack
				hackLabels: [],
				hackValues: [],

				// #hacked
				hackedLabels: [],
				hackedValues: [],

				// #malware
				malwareLabels: [],
				malwareValues: [],

				// Recent Verified Tweets
				recentVerifiedTweets: []
			}
		},

		created: async function() {
			// [RETURN DATA]
			this.returned = await PageService.s_home()
			
			// Map Data allHashtagsChartData //
			this.allHashtagsLabels = this.returned.allHashtagsChartData.map(d => d.time)
			this.allHashtagsValues = this.returned.allHashtagsChartData.map(d => d.count)

			// Map Data hack //
			this.hackLabels = this.returned.hackChartData.map(d => d.time)
			this.hackValues = this.returned.hackChartData.map(d => d.count)

			// Map Data hacked //
			this.hackedLabels = this.returned.hackedChartData.map(d => d.time)
			this.hackedValues = this.returned.hackedChartData.map(d => d.count)

			// Map Data malware //
			this.malwareLabels = this.returned.malwareChartData.map(d => d.time)
			this.malwareValues = this.returned.malwareChartData.map(d => d.count)

			this.recentVerifiedTweets = this.returned.recentVerifiedTweets

			// Disable Loading //
			this.loading = false

			// [LOG] //
			console.log(this.returned)
		},

		methods: {
			switchTab(tab) { this.currentTab = tab }
		}
	}
</script>