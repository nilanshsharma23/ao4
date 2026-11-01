<script lang="ts">
	import firebaseConfig from '#lib/firebaseConfig.ts';
	import { initializeApp } from 'firebase/app';
	import { getAuth, onAuthStateChanged } from 'firebase/auth';
	import { doc, getDoc, getFirestore } from 'firebase/firestore';

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
		<a href="/" class="text-2xl text-[#970000]">Archive of Not Caring About Acronyms</a>
		{#if username}
			{username}
		{:else}
			<a href="/login">Log In</a>
		{/if}
	</div>
	<div class="flex w-full flex-row items-center justify-between bg-[#970000] px-4 py-1 text-white">
		<div class="flex flex-row gap-4">
			<a href="/browse">Browse</a>
			<a href="/about">About</a>
		</div>
		<div class="flex flex-row gap-2">
			<input
				type="text"
				placeholder="Search... (doesn't work)"
				class="rounded-2xl bg-white px-2 text-black placeholder:text-gray-500"
			/>
			<button class="cursor-pointer rounded bg-white px-2 text-black">Submit</button>
		</div>
	</div>
</nav>
