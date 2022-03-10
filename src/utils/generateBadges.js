export const MAINTAINER = {
	HSUN: 'HSUN.TSAI',
};

export default ({ badges = [], mainteiners: oriMainteiners }) => {
	const mainteiners = (Array.isArray(oriMainteiners) ? oriMainteiners : [oriMainteiners]).filter(name => {
		const systemMaintainers = Object.keys(MAINTAINER).map(key => MAINTAINER[key]);
		return systemMaintainers.includes(name);
	});

	return {
		badges: [...badges].concat(mainteiners && mainteiners.length > 0 ? ['maintainer'] : []),
		badgesConfig: {
			maintainer: {
				tooltip: {
					links: mainteiners.map(title => ({ title })),
				},
			},
		},
	};
};
