import { BotStats, WebhookPayload } from "@top-gg/sdk";
import { BaseEventHandler, ForgeClient } from "@tryforge/forgescript";
import { ForgeTopGG } from "..";

export interface ITopGGEvents {
    posted: [ BotStats ]
    error: [ Error ]
    voted: [ WebhookPayload ]
}

export class TopGGEventHandler<T extends keyof ITopGGEvents> extends BaseEventHandler<ITopGGEvents, T> {
    register(client: ForgeClient): void {
        // @ts-ignore
        client.getExtension(ForgeTopGG, true)["emitter"].on(this.name, this.listener.bind(client))
    }
}