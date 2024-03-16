import { generateMetadata } from "@tryforge/forgescript"
import { TopGGEventManagerName } from "./constants"

generateMetadata(
    __dirname + "/functions",
    "functions",
    TopGGEventManagerName,
    undefined,
    undefined,
    __dirname + "/events"
)