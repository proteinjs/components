import express from 'express';
import expressSession from 'express-session';

export interface ServerConfig {
    onStartup?: () => Promise<void>;
    session?: expressSession.SessionOptions;
    authenticate?: (username: string, password: string) => Promise<true|string>;
    staticContent?: {
        staticContentDir?: string;
        /** Relative from `staticContentDir` */
        bundlePaths?: string[];
        /** Relative from `staticContentDir` */
        faviconPath?: string;
        /** Used for hot reloading of bundle assets */
        appEntryPath?: string;
    };
    /** disables webpack builds on server-side, will instead serve bundle from staticContent.bundlePaths (prod behavior) */
    disableHotClientBuilds?: boolean;
    port?: number;
    request?: {
        disableRequestLogging?: boolean;
        beforeRequest?: (request: express.Request, response: express.Response, next: express.NextFunction) => Promise<void>;
        afterRequest?: (request: express.Request, response: express.Response, next: express.NextFunction) => Promise<void>;
        timeoutMs?: number;
    };
}