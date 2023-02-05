export enum Mode {
    DEVELOPMENT = 'development',
    PRODUCTION = 'production'
}

export interface Paths {
    entry: string;
    build: string;
    html: string;
    src: string;
}

export interface Env {
    mode: Mode,
    port: number
}

export interface FileName {
    css: string;
    js: string;
}

export interface BuildOptions {
    mode: Mode;
    isDev: boolean;
    name: FileName;
    paths: Paths,
    port: number;
}
