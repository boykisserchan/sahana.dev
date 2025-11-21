import { execSync } from "node:child_process";
import { writeFileSync, existsSync, readFileSync } from "node:fs";

function get(cmd: string) {
	try {
		return execSync(cmd).toString().trim();
	} catch {
		return "unknown";
	}
}

const hash = get("git rev-parse --short HEAD");
const message = get("git log -1 --pretty=%s");

const envPath = ".env.local";
let existing = "";

if (existsSync(envPath)) {
	existing = readFileSync(envPath, "utf8");
}

// remove old values if they exist
existing = existing
	.split("\n")
	.filter(
		(line) =>
			!line.startsWith("NEXT_PUBLIC_GIT_HASH=") &&
			!line.startsWith("NEXT_PUBLIC_GIT_MESSAGE=")
	)
	.join("\n");

const final = `${existing}
NEXT_PUBLIC_GIT_HASH=${hash}
NEXT_PUBLIC_GIT_MESSAGE="${message}"
`.trim() + "\n";

writeFileSync(envPath, final);

console.log("wrote git info to .env.local:", { hash, message });
