<script lang="ts">
	import firebaseConfig from '#lib/firebaseConfig.ts';
	import { goto } from '$app/navigation';
	import { initializeApp } from 'firebase/app';
	import { getAuth, onAuthStateChanged } from 'firebase/auth';
	import { doc, getDoc, getFirestore } from 'firebase/firestore';
	import { execute } from 'firebase/firestore/pipelines';

	const auth = getAuth(initializeApp(firebaseConfig));
	let username = $state();

	onAuthStateChanged(auth, async (user) => {
		if (user) {
			username = (await getDoc(doc(getFirestore(), 'users', user.uid))).data()!.username;
		}
	});
</script>

<nav class="flex w-full flex-col gap-2 py-2">
	<div class="flex w-full flex-row items-center justify-between px-4">
		<a href="/" class="text-md text-[#970000] sm:text-xl md:text-2xl"
			>Archive of Not Caring About Acronyms</a
		>
		<div class="hidden sm:block">
			{#if username}
				{username}
			{:else}
				<a href="/login">Log In</a>
			{/if}
		</div>
	</div>
	<div class="flex w-full flex-row items-center justify-between bg-[#970000] px-4 py-1 text-white">
		<div class="flex flex-row gap-4">
			<a href="/">Home</a>
			<a href="/browse">Browse</a>
			<a href="/about">About</a>
			<a href="/submit">Submit</a>
		</div>
	</div>
</nav>
