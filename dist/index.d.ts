import { ForgeClient, ForgeExtension } from "@tryforge/forgescript";
import { PosterOptions } from "topgg-autoposter/dist/typings";
import { TopGGCommandManager } from "./structures/TopGGCommandManager";
import { ITopGGEvents } from "./structures/TopGGEventHandlers";
export interface IForgeTopGGOptions {
    post?: PosterOptions;
    token: string;
    auth: string;
    events?: Array<keyof ITopGGEvents>;
    port?: number;
}
export type TransformEvents<T> = {
    [P in keyof T]: T[P] extends any[] ? (...args: T[P]) => any : never;
};
export declare class ForgeTopGG extends ForgeExtension {
    private readonly options;
    name: string;
    description: string;
    version: any;
    private readonly webhook;
    private client;
    private emitter;
    commands: TopGGCommandManager;
    constructor(options: IForgeTopGGOptions);
    init(client: ForgeClient): void;
}
//# sourceMappingURL=index.d.ts.map