export const ON_LOADER = '[loader] - on loader';
export const OFF_LOADER = '[loader] - off loader';

export const onLoader = () => ({
	type: ON_LOADER,
});

export const offLoader = () => ({
	type: OFF_LOADER,
});