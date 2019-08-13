<template>
	<div class="search-box" :class="{ focused: focused }">
		<span class="search-box__icon"></span>
		<input
			class="search-box__input"
			@input="query = $event.target.value"
			aria-label="Search"
			:value="query"
			:class="{ focused: focused }"
			autocomplete="off"
			placeholder="Search"
			spellcheck="false"
			@focus="focused = true"
			@blur="focused = false"
			@keyup.enter="go(focusIndex)"
			@keyup.up="onUp"
			@keyup.down="onDown"
		/>
		<ul
			class="search-box__suggestions"
			:class="{
				'align-right': alignRight,
				'suggestions--active': showSuggestions
			}"
			@mouseleave="unfocus"
		>
			<li
				class="search-box__suggestion"
				v-for="(s, i) in suggestions"
				:class="{ focused: i === focusIndex }"
				@mousedown="go(i)"
				@mouseenter="focus(i)"
			>
				<a class="search-box__link" :href="s.path" @click.prevent>
					<span class="search-box__title page-title">{{
						s.title || s.path
					}}</span>
					<span class="search-box__header header" v-if="s.header"
						>&gt; {{ s.header.title }}</span
					>
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
/* global SEARCH_MAX_SUGGESTIONS, SEARCH_PATHS */
export default {
	data() {
		return {
			query: '',
			focused: false,
			focusIndex: 0
		};
	},

	computed: {
		showSuggestions() {
			return this.focused && this.suggestions && this.suggestions.length;
		},

		suggestions() {
			const query = this.query.trim().toLowerCase();
			if (!query) {
				return;
			}

			const { pages } = this.$site;
			const max = SEARCH_MAX_SUGGESTIONS;
			const localePath = this.$localePath;
			const matches = (item) =>
				item.title && item.title.toLowerCase().indexOf(query) > -1;
			const res = [];
			for (let i = 0; i < pages.length; i++) {
				if (res.length >= max) break;
				const p = pages[i];
				// filter out results that do not match current locale
				if (this.getPageLocalePath(p) !== localePath) {
					continue;
				}

				// filter out results that do not match searchable paths
				if (!this.isSearchable(p)) {
					continue;
				}

				if (matches(p)) {
					res.push(p);
				} else if (p.headers) {
					for (let j = 0; j < p.headers.length; j++) {
						if (res.length >= max) break;
						const h = p.headers[j];
						if (matches(h)) {
							res.push(
								Object.assign({}, p, {
									path: p.path + '#' + h.slug,
									header: h
								})
							);
						}
					}
				}
			}
			return res;
		},

		// make suggestions align right when there are not enough items
		alignRight() {
			const navCount = (this.$site.themeConfig.nav || []).length;
			const repo = this.$site.repo ? 1 : 0;
			return navCount + repo <= 2;
		}
	},

	methods: {
		getPageLocalePath(page) {
			for (const localePath in this.$site.locales || {}) {
				if (localePath !== '/' && page.path.indexOf(localePath) === 0) {
					return localePath;
				}
			}
			return '/';
		},

		isSearchable(page) {
			let searchPaths = SEARCH_PATHS;

			// all paths searchables
			if (searchPaths === null) {
				return true;
			}

			searchPaths = Array.isArray(searchPaths)
				? searchPaths
				: new Array(searchPaths);

			return (
				searchPaths.filter((path) => {
					return page.path.match(path);
				}).length > 0
			);
		},

		onUp() {
			if (this.showSuggestions) {
				if (this.focusIndex > 0) {
					this.focusIndex--;
				} else {
					this.focusIndex = this.suggestions.length - 1;
				}
			}
		},

		onDown() {
			if (this.showSuggestions) {
				if (this.focusIndex < this.suggestions.length - 1) {
					this.focusIndex++;
				} else {
					this.focusIndex = 0;
				}
			}
		},

		go(i) {
			if (!this.showSuggestions) {
				return;
			}
			this.$router.push(this.suggestions[i].path);
			this.query = '';
			this.focusIndex = 0;
		},

		focus(i) {
			this.focusIndex = i;
		},

		unfocus() {
			this.focusIndex = -1;
		}
	}
};
</script>
