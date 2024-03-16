import { BaseCommandManager } from "@tryforge/forgescript";
import { ITopGGEvents } from "./TopGGEventHandlers";
import { TopGGEventManagerName } from "../constants";

export class TopGGCommandManager extends BaseCommandManager<keyof ITopGGEvents> {
    handlerName = TopGGEventManagerName
}