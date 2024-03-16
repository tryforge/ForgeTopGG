import { Interpreter } from "@tryforge/forgescript";
import { ForgeTopGG } from "..";
import { TopGGEventHandler } from "../structures/TopGGEventHandlers";

export default new TopGGEventHandler({
    name: "error",
    version: "1.0.0",
    description: "This event is called when an error occurs",
    listener(err) {
        const commands = this.getExtension(ForgeTopGG, true).commands.get("error")

        for (const command of commands) {
            Interpreter.run({
                obj: {},
                client: this,
                command,
                data: command.compiled.code,
                extras: err
            })
        }
    },
})