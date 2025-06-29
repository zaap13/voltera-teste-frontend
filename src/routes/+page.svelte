<script lang="ts">
  import { fade } from 'svelte/transition';
  import type { AgifyResponse } from '$lib/mocks/agify.mock';
  import { fetchMockAgify } from '$lib/mocks/agify.mock';
  import { debounce } from '$lib/utils/debounce';

  let inputValue = '';
  let isLoading = false;
  let result: AgifyResponse | null = null;

  const handleSearch = async () => {
    if (!inputValue.trim()) {
      result = null;
      return;
    }

    isLoading = true;
    result = null;

    const data = await fetchMockAgify(inputValue);
    
    result = data;
    isLoading = false;
  };

  const debouncedSearch = debounce(handleSearch, 700);
</script>

<main class="glass-card">
  <h1>Qual a Idade?</h1>
  <p class="subtitle">Insira um nome e deixe a nossa IA estimar a idade.</p>

  <div class="input-wrapper">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="input-icon"><path d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"></path></svg>
    
    <input
      type="text"
      placeholder="Digite um nome..."
      bind:value={inputValue}
      on:input={debouncedSearch}
    />
  </div>

  <div class="result-area">
    {#if isLoading}
      <div class="spinner" transition:fade></div>
    {:else if result}
      <div class="result-content" transition:fade={{ duration: 400 }}>
        <p class="result-text">
          Com base em {result.count.toLocaleString('pt-BR')} registos, a idade estimada para
          <strong class="result-name">{result.name}</strong> é:
        </p>
        <p class="result-age">{result.age}</p>
        <p class="result-text">anos</p>
      </div>
    {/if}
  </div>
</main>

<style>
  .glass-card { width: 100%; max-width: 450px; padding: 3rem; box-sizing: border-box; text-align: center; background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border-radius: 16px; border: 1px solid rgba(255, 255, 255, 0.2); }
  h1 { font-size: 2.5rem; font-weight: 700; color: var(--text-primary); margin: 0 0 0.5rem 0; }
  .subtitle { color: var(--text-secondary); margin: 0 0 3rem 0; }
  .input-wrapper { position: relative; margin-bottom: 2rem; }
  .input-icon { position: absolute; left: 1.25rem; top: 50%; transform: translateY(-50%); width: 1.25rem; height: 1.25rem; color: var(--text-secondary); pointer-events: none; }
  input { width: 100%; font-size: 1rem; padding: 1.15rem 1rem 1.15rem 3.5rem; border-radius: 9999px; background-color: rgba(0, 0, 0, 0.2); color: var(--text-primary); border: 1px solid transparent; appearance: none; outline: none; box-sizing: border-box; transition: all 0.2s ease-in-out; }
  input::placeholder { color: var(--text-secondary); }
  input:focus { border-color: var(--primary); box-shadow: 0 0 15px -3px var(--primary); background-color: rgba(0, 0, 0, 0.3); }
  
  .result-area {
    margin-top: 2rem;
    min-height: 170px;
    display: grid;
    place-items: center;
  }

  .result-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .result-text { margin: 0; color: var(--text-secondary); line-height: 1.6; }
  .result-name { color: var(--primary); font-weight: 700; text-transform: capitalize; }
  .result-age { font-size: 4.5rem; font-weight: 700; color: var(--text-primary); margin: 0.5rem 0; line-height: 1; }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  .spinner {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 4px solid rgba(255, 255, 255, 0.2);
    border-top-color: var(--primary);
    animation: spin 1s linear infinite;
  }
</style>