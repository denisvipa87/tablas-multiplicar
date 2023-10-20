import { yarg } from "./config/plugins/yars.plugin";
import { ServerApp } from "./presentation/server-app";

(() => {

    console.clear();
    const { b:base, l:limit, s:showTable, d:destination, n: name } = yarg;

    ServerApp.run({ base, limit, showTable, destination, name });

})();



