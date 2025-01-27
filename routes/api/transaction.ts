import { HandlerContext } from "$fresh/server.ts";
import { getXataClient } from '../../xata.ts'

export const handler = async (req: Request, _ctx: HandlerContext) => {
    const xata = getXataClient();

    return new Response("Transaction added!", { status: 200 });
};