import type { AgifyResponse } from '$lib/types/agify';

export const load = async ({ url }) => {
  const name = url.searchParams.get('name');

  if (!name || name.trim() === '') {
    return { agifyData: null };
  }

  try {
    const response = await fetch(`https://api.agify.io?name=${encodeURIComponent(name)}`);
    if (response.ok) {
      const data: AgifyResponse = await response.json();
      return { agifyData: data };
    }
  } catch (error) {
    console.error(`Falha ao buscar dados para "${name}":`, error);
    return { agifyData: null };
  }

  return { agifyData: null };
};