<script lang="ts">
	import { logIn } from '#lib/auth.ts';

	let email = $state('');
	let password = $state('');
</script>

<div class="mx-24 my-4 flex flex-col items-center gap-2">
	<div class="text-2xl">Log In</div>
	<input bind:value={email} type="text" placeholder="E-mail" class="w-64 rounded border px-2" />
	<input
		bind:value={password}
		type="password"
		placeholder="Password"
		class="w-64 rounded border px-2"
	/>
	<button
		onclick={() => logIn(email, password)}
		class="w-64 cursor-pointer bg-[#970000] py-1 text-white">Log In</button
	>
	<div class="flex flex-row gap-1">
		<div>Don't have an account?</div>
		<a href="/signup" class="text-blue-500 underline">Sign Up</a>
	</div>
</div>
