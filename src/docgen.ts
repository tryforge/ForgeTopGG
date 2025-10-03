import { generateMetadata } from "@tryforge/forgescript"
import { TopGGEventManagerName } from "./constants"

generateMetadata(
    __dirname + "/native",
    "native",
    TopGGEventManagerName,
    undefined,
    undefined,
    __dirname + "/events"
)