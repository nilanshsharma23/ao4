import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
	FIREBASE_API_KEY: { public: true },
	FIREBASE_AUTH_DOMAIN: { public: true },
	FIREBASE_PROJECT_ID: { public: true },
	FIREBASE_STORAGE_BUCKET: { public: true },
	FIREBASE_MESSAGING_SENDER_ID: { public: true },
	FIREBASE_APP_ID: { public: true }
});
