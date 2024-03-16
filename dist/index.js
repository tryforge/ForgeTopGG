"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForgeTopGG = void 0;
const forgescript_1 = require("@tryforge/forgescript");
const constants_1 = require("./constants");
const sdk_1 = require("@top-gg/sdk");
const topgg_autoposter_1 = require("topgg-autoposter");
const express_1 = __importDefault(require("express"));
const TopGGCommandManager_1 = require("./structures/TopGGCommandManager");
const tiny_typed_emitter_1 = require("tiny-typed-emitter");
class ForgeTopGG extends forgescript_1.ForgeExtension {
    options;
    name = "ForgeTopGG";
    description = "A extension that populates your bot stats to top.gg and lets you receive votes from it";
    version = "1.0.0";
    webhook;
    app = (0, express_1.default)();
    client;
    emitter = new tiny_typed_emitter_1.TypedEmitter();
    commands;
    constructor(options) {
        super();
        this.options = options;
        this.webhook = new sdk_1.Webhook(options.auth);
        this.app.use(express_1.default.json());
        this.app.post("/dblwebhook", this.webhook.listener(vote => void this.emitter.emit("voted", vote)));
    }
    init(client) {
        this.client = client;
        this.commands = new TopGGCommandManager_1.TopGGCommandManager(client);
        this.client.once("ready", (client) => {
            const poster = (0, topgg_autoposter_1.AutoPoster)(this.options.token, client, this.options.post);
            poster.on("error", (err) => this.emitter.emit("error", err));
            poster.on("posted", (stats) => this.emitter.emit("posted", stats));
        });
        forgescript_1.EventManager.load(constants_1.TopGGEventManagerName, __dirname + `/events`);
        this.load(__dirname + `/functions`);
        if (this.options.events?.length)
            this.client.events.load(constants_1.TopGGEventManagerName, this.options.events);
        this.app.listen(this.options.port ?? 3000);
    }
}
exports.ForgeTopGG = ForgeTopGG;
//# sourceMappingURL=index.js.map