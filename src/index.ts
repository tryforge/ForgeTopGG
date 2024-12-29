import { EventManager, ForgeClient, ForgeExtension } from "@tryforge/forgescript";
import { TopGGEventManagerName } from "./constants";
import { Webhook } from "@top-gg/sdk";
import { AutoPoster as autoPoster } from "topgg-autoposter"
import { PosterOptions } from "topgg-autoposter/dist/typings";
import express from "express"
import { TopGGCommandManager } from "./structures/TopGGCommandManager";
import { ITopGGEvents } from "./structures/TopGGEventHandlers";
import { TypedEmitter } from "tiny-typed-emitter";
import { app } from "@tryforge/webserver"

export interface IForgeTopGGOptions {
    post?: PosterOptions
    token: string
    auth: string
    events?: Array<keyof ITopGGEvents>
    port?: number
}

export type TransformEvents<T> = {
    [P in keyof T]: T[P] extends any[] ? (...args: T[P]) => any : never
}

export class ForgeTopGG extends ForgeExtension {
    name = "ForgeTopGG"
    description = "A extension that populates your bot stats to top.gg and lets you receive votes from it"
    version = "1.0.0"

    private readonly webhook: Webhook

    private client!: ForgeClient
    private emitter = new TypedEmitter<TransformEvents<ITopGGEvents>>()

    public commands!: TopGGCommandManager
    
    public constructor(
        private readonly options: IForgeTopGGOptions
    ) {
        super()
        this.webhook = new Webhook(options.auth)
        const server = app(options.port ?? 3000)
        server.use(express.json())
        server.post("/dblwebhook", this.webhook.listener(vote => void this.emitter.emit("voted", vote)))
    }

    init(client: ForgeClient): void {
        this.client = client
        this.commands = new TopGGCommandManager(client)
        
        this.client.once("ready", (client) => {
            const poster = autoPoster(this.options.token, client, this.options.post)
            poster.on("error", (err) => this.emitter.emit("error", err))
            poster.on("posted", (stats) => this.emitter.emit("posted", stats))
        })

        EventManager.load(TopGGEventManagerName, __dirname + `/events`)
        this.load(__dirname + `/functions`)

        if (this.options.events?.length)
            this.client.events.load(TopGGEventManagerName, this.options.events)
    }
}