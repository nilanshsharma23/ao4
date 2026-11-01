<script lang="ts">
	import firebaseConfig from '#lib/firebaseConfig.ts';
	import { initializeApp } from 'firebase/app';
	import { getAuth, onAuthStateChanged } from 'firebase/auth';
	import { collection, getDocs, getFirestore } from 'firebase/firestore';

	const auth = getAuth(initializeApp(firebaseConfig));
	const db = getFirestore(initializeApp(firebaseConfig));

	let works: Array<{}> = $state([]);

	onAuthStateChanged(auth, async (user) => {
		const querySnapshot = await getDocs(collection(db, 'works'));

		querySnapshot.forEach((doc) => {
			works.push({ id: doc.id, data: doc.data() });
		});
	});
</script>

<div class="mx-8 my-4 flex flex-col gap-2">
	<div class="font-sans text-2xl font-bold">Browse Works</div>
	{#each works as work}
		<a href={'/posts/' + work.id} class="flex flex-col border px-4">
			<div class="text-2xl">{work.data.title}</div>
			<div class="text-lg">{work.data.content.substring(0, 100)}.....</div>
			<div class="text-sm">author: {work.data.author}</div>
		</a>
	{/each}
</div>
