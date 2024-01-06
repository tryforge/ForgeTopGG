"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopGGEventHandler = void 0;
const forgescript_1 = require("forgescript");
const __1 = require("..");
class TopGGEventHandler extends forgescript_1.BaseEventHandler {
    register(client) {
        // @ts-ignore
        client.getExtension(__1.ForgeTopGG, true)["emitter"].on(this.name, this.listener.bind(client));
    }
}
exports.TopGGEventHandler = TopGGEventHandler;
//# sourceMappingURL=TopGGEventHandlers.js.map