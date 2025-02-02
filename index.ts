import figlet from "figlet";
import { Hono } from "hono";
// import { PrismaClient } from "./prisma/generated/client";
import { PrismaClient } from "@prisma/client";

const app = new Hono();

const prisma = new PrismaClient();

// const server = Bun.serve({
// 	port: 3000,
// 	async fetch(req) {
// 		let body = figlet.textSync("Hello World!");

// 		// create a new user
// 		const user = await prisma.user.create({
// 			data: {
// 				name: "John Dough",
// 				email: `john-${Math.random()}@example.com`,
// 			},
// 		});

// 		body = `${body}\nCreated user: ${user.name} (${user.email})\n`;

// 		// count the number of users
// 		const count = await prisma.user.count();
// 		body = `${body}\nThere are ${count} users in the database.\n`;

// 		return new Response(body);
// 	},
// });

// console.log(`Listening on http://localhost:${server.port} ...`);

app.get("/", async (c) => {
	let body = figlet.textSync("Hello World!");

	// create a new user
	const user = await prisma.user.create({
		data: {
			name: "John Dough",
			email: `john-${Math.random()}@example.com`,
		},
	});

	body = `${body}\nCreated user: ${user.name} (${user.email})\n`;

	// count the number of users
	const count = await prisma.user.count();
	body = `${body}\nThere are ${count} users in the postgres database.\n`;

	return c.text(body);
});

export default {
	port: 3000,
	fetch: app.fetch,
};
