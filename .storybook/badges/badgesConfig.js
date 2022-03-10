export default {
	maintainer: {
		title: 'Maintainer',
		tooltip: {
			title: '元件為護人員如下',
			desc: '若有需要修改請詢問維護者，請勿擅自變動造成元件損壞，進而導致使用者不穩定。',
		},
	},
	beta: {
		styles: {
			backgroundColor: '#D6E0FF',
			borderColor: '#2952CC',
			color: '#2952CC',
		},
		tooltip: {
			title: '元件仍再開發階段',
			desc: '元件會頻繁更新，若有問題請通知開發者',
		},
	},
	deprecated: {
		styles: {
			backgroundColor: '#F9DADA',
			borderColor: '#7D2828',
			color: '#7D2828',
		},
		tooltip: '元件已不再進行更新維護',
	},
};
