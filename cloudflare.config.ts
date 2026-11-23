import { defineConfig } from 'cf/config';

export default defineConfig({
    worker: {
        assets: { notFoundHandling: 'single-page-application' },
        compatibilityDate: '2026-10-01',
        domains: ['snes.al-iyaal.club'],
        name: 'hurmuzi',
        observability: { enabled: true },
    },
});
