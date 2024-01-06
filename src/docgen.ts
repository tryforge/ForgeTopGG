import { generateMetadata } from "forgescript"
import { TopGGEventManagerName } from "./constants"

generateMetadata(
    __dirname + "/functions",
    "functions",
    TopGGEventManagerName,
    undefined,
    undefined,
    __dirname + "/events"
)