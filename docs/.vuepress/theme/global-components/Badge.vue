<script>
export default {
	functional: true,
	props: {
		type: {
			type: String,
			default: 'tip'
		},
		text: String,
		vertical: {
			type: String,
			default: 'top'
		}
	},
	render(h, { props, slots }) {
		return h(
			'span',
			{
				class: ['badge', props.type],
				style: {
					verticalAlign: props.vertical
				}
			},
			props.text || slots().default
		);
	}
};
</script>

<style lang="scss" scoped>
.badge {
	display: inline-block;
	height: 18px;
	border-radius: 3px;
	background-color: #42b983;
	color: white;
	font-size: 14px;
	line-height: 18px;
	padding: 0 6px;
	&.tip,
	&.green {
		background-color: #42b983;
	}
	&.error {
		background-color: #da5961; //#f66
	}
	&.warning,
	&.warn,
	&.yellow {
		background-color: darken(#ffe564, 35%);
	}
	& + & {
		margin-left: 5px;
	}
}
</style>
