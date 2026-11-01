<script lang="ts">
	import { signUp } from '#lib/auth.ts';

	let email = $state('');
	let password = $state('');
	let username = $state('');
</script>

<div class="mx-24 my-4 flex flex-col items-center gap-2">
	<div class="text-2xl">Sign Up</div>
	<input type="text" bind:value={email} placeholder="E-mail" class="w-64 rounded border px-2" />
	<input
		type="password"
		bind:value={password}
		placeholder="Password"
		class="w-64 rounded border px-2"
	/>
	<input
		type="text"
		placeholder="Username"
		bind:value={username}
		class="w-64 rounded border px-2"
	/>
	<button
		onclick={() => signUp(email, password, username)}
		class="w-64 cursor-pointer bg-[#970000] py-1 text-white">Sign Up</button
	>
	<div class="flex flex-row gap-1">
		<div>Already have an account?</div>
		<a href="/login" class="text-blue-500 underline">Log In</a>
	</div>
</div>
