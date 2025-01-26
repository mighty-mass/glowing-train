import { HandlerContext } from "$fresh/server.ts";
import { getXataClient } from '../../islands/xata.ts'
import { createHmac } from "node:crypto";



function hashPassword(password) {
  let hashedPassword = createHmac('sha512', password).digest('hex');

  return hashedPassword.toString();

}


export const handler = async (req: Request, _ctx: HandlerContext) => {
  const xata = getXataClient();
  const formData = await req.formData();
  const username = formData.get("username");
  const password = formData.get("password") || "";

  // Here you should validate the username and password
  // For simplicity, we assume any username/password is valid
  const hashedPassword = hashPassword(password.toString());

  console.log(username, hashedPassword);

  const records = await xata.db.account.filter({ username: username, password: hashedPassword }).getMany();

  if (records.length === 1) {
    const headers = new Headers();
    headers.set("Set-Cookie", `session=${username}; HttpOnly; Path=/`);
    headers.set("Location", "/"); // Redirect to the index page

    return new Response(null, {
      status: 302, // HTTP status code for redirection
      headers,
    });
  }

  return new Response("Invalid credentials", { status: 401 });
};