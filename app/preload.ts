import { contextBridge } from "electron";

contextBridge.exposeInMainWorld("electronAPI", {
  // define exposed APIs here
});
