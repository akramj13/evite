import { app, BrowserWindow } from "electron";
import * as path from "path";

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  const isDev = !app.isPackaged;
  const url = isDev
    ? "http://localhost:5173"
    : `file://${path.join(__dirname, "../frontend/dist/index.html")}`;

  win.loadURL(url);
};

app.whenReady().then(() => {
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
