export interface AgifyResponse {
	name: string;
	age: number;
	count: number;
}

export const mockAgifySuccess: AgifyResponse = {
	name: 'Felipe',
	age: 32,
	count: 184532
};

export async function fetchMockAgify(name: string): Promise<AgifyResponse> {
	console.log(`Simulando chamada à API para o nome: ${name}...`);

	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({ ...mockAgifySuccess, name: name });
		}, 1500);
	});
}
