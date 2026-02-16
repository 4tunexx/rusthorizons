/// <reference types="astro/client" />

import type config from '@rusthorizons/common/config';

declare global {
    let globalConfig: typeof config;
}

export {};
