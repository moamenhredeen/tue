<script lang="ts">
	import { Button } from "$lib/components/ui/button/index.js";
	import * as Card from "$lib/components/ui/card/index.js";
	import { Input } from "$lib/components/ui/input/index.js";
	import { Label } from "$lib/components/ui/label/index.js";
    import { goto } from "$app/navigation";
    
    function register() {
        goto("/login");
    }
</script>


<div class="flex h-screen w-full items-center justify-center">
	<Card.Root class="mx-auto max-w-sm">
		<Card.Header>
			<Card.Title class="text-2xl">Register</Card.Title>
		<Card.Description>Enter your email below to register to your account</Card.Description>
	</Card.Header>
	<Card.Content>
		<div class="grid gap-4">
			<div class="grid gap-2">
				<Label for="email">Email</Label>
				<Input id="email" type="email" placeholder="m@example.com" required />
			</div>
			<div class="grid gap-2">
				<div class="flex items-center">
					<Label for="password">Password</Label>
					<a href="##" class="ml-auto inline-block text-sm underline">
						Forgot your password?
					</a>
				</div>
				<Input id="password" type="password" required />
			</div>
			<Button type="submit" class="w-full" onclick={register}>Register</Button>
			<Button variant="outline" class="w-full">Register with Google</Button>
		</div>
	</Card.Content>
</Card.Root>
</div>
