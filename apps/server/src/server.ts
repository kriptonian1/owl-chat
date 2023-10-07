import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cluster from "cluster";
import * as http from "http";
import { AddressInfo } from "net";

const totalCPUs = require("os").cpus().length;

dotenv.config();

/**
 * The function spawns a worker process and restarts it if it exits.
 * @param {number} i - The parameter `i` is the index of the worker in the `workers` array. It is used
 * to keep track of the worker that is being spawned or exited.
 * @param {any} workers - The `workers` parameter is an array that holds references to the worker
 * processes created by the `cluster.fork()` method.
 */
const spawnWorker = (i: number, workers: any) => {
    workers[i] = cluster.fork();

    // Restart worker on exit
    workers[i].on("exit", () => {
        console.log(`Worker ${i} exited`);
        spawnWorker(i, workers);
    });
};

(async () => {
    if (cluster.isPrimary) {
        // Check if the process is the master process
        const workers: any = [];

        // Spawn workers
        for (let index = 0; index < totalCPUs; index++) {
            spawnWorker(index, workers);
        }
    } else {
        const app: Express = express();

        app.get("/", (req: Request, res: Response) => {
            res.send("Hello World!");
        });

        var server: http.Server = app.listen(process.env.PORT, () => {
            let host = server.address() as AddressInfo;
            console.log(
                `\x1b[32m Server is listening on port  ${
                    host.address === "::"
                        ? "http://localhost"
                        : `https://${host}`
                }:${host.port} \x1b[0m`
            );
        });
    }
})();
