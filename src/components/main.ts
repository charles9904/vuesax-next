import type {App, Plugin} from "vue";
import * as Components from "@/components";

const install: Exclude<Plugin["install"], undefined> = (app: App, options) => {
	for (const key in Components) {
		app.use(Components[key]);
	}
};

export default install;
export * from "@/components";