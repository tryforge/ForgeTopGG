"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const __1 = require("..");
const TopGGEventHandlers_1 = require("../structures/TopGGEventHandlers");
exports.default = new TopGGEventHandlers_1.TopGGEventHandler({
    name: "posted",
    version: "1.0.0",
    description: "This event is called when your bot's stats are posted to Top.gg",
    listener(posted) {
        const commands = this.getExtension(__1.ForgeTopGG, true).commands.get("posted");
        for (const command of commands) {
            forgescript_1.Interpreter.run({
                obj: {},
                client: this,
                command,
                data: command.compiled.code,
                extras: posted
            });
        }
    },
});
//# sourceMappingURL=posted.js.map