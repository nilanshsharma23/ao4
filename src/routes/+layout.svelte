<script lang="ts">
	import './layout.css';
	import favicon from '#lib/assets/favicon.svg';
	import type { LayoutProps } from './$types';
	import Navbar from '#lib/components/Navbar.svelte';
	import { initializeApp } from 'firebase/app';
	import firebaseConfig from '#lib/firebaseConfig.ts';

	const app = initializeApp(firebaseConfig);

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Navbar />
{@render children()}
