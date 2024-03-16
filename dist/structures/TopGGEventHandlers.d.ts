import { BotStats, WebhookPayload } from "@top-gg/sdk";
import { BaseEventHandler, ForgeClient } from "@tryforge/forgescript";
export interface ITopGGEvents {
    posted: [BotStats];
    error: [Error];
    voted: [WebhookPayload];
}
export declare class TopGGEventHandler<T extends keyof ITopGGEvents> extends BaseEventHandler<ITopGGEvents, T> {
    register(client: ForgeClient): void;
}
//# sourceMappingURL=TopGGEventHandlers.d.ts.map