<script lang="ts">
	import firebaseConfig from '#lib/firebaseConfig.ts';
	import { getAuth, onAuthStateChanged } from 'firebase/auth';
	import type { PageProps } from '../../$types';
	import { initializeApp } from 'firebase/app';
	import { doc, getDoc, getFirestore } from 'firebase/firestore';

	let { params }: PageProps = $props();

	const app = initializeApp(firebaseConfig);
	const auth = getAuth(app);
	const db = getFirestore(app);

	let title = $state('');
	let content = $state('');
	let author = $state('');

	onAuthStateChanged(auth, async () => {
		let data = (await getDoc(doc(db, 'works', params.slug))).data();
		title = data.title;
		content = data.content;
		author = data.author;

		console.log(content);
	});
</script>

<div class="mx-8 my-4 flex flex-col gap-2">
	<div class="font-sans text-2xl font-bold">{title}</div>
	<div class="text-sm">by {author}</div>
	<p class="text-lg" style="white-space: pre-line;">{content}</p>
</div>
