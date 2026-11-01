<script lang="ts">
	import firebaseConfig from '#lib/firebaseConfig.ts';
	import { goto } from '$app/navigation';
	import { initializeApp } from 'firebase/app';
	import { getAuth, onAuthStateChanged } from 'firebase/auth';
	import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore';

	const auth = getAuth(initializeApp(firebaseConfig));
	const db = getFirestore();

	let loggedIn = $state(false);
	let username = $state();

	let title = $state('');
	let content = $state('');

	onAuthStateChanged(auth, async (user) => {
		if (user) {
			loggedIn = true;
			username = (await getDoc(doc(db, 'users', user.uid))).data()!.username;
		}
	});

	const submit = async () => {
		await setDoc(doc(db, 'works', crypto.randomUUID()), {
			author: username,
			title: title,
			content: content
		}).then(async () => {
			await goto('/');
		});
	};
</script>

<div class="mx-8 my-4 flex flex-col gap-2">
	{#if loggedIn}
		<div class="text-xl">Submit Hack Club Fanfic :)</div>
		<input bind:value={title} type="text" placeholder="Title" class="w-full border px-2" />
		<textarea bind:value={content} name="BIG ASS TEXTAREA" class="w-full border px-2" id=""
		></textarea>
		<button
			onclick={submit}
			class="w-full cursor-pointer bg-[#970000] py-2 font-sans font-bold text-white">Submit</button
		>
	{:else}
		<div class="text-xl">sorry, you need to be logged in :(</div>
	{/if}
</div>
