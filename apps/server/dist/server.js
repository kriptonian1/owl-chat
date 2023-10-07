"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cluster_1 = __importDefault(require("cluster"));
const totalCPUs = require("os").cpus().length;
dotenv_1.default.config();
/**
 * The function spawns a worker process and restarts it if it exits.
 * @param {number} i - The parameter `i` is the index of the worker in the `workers` array. It is used
 * to keep track of the worker that is being spawned or exited.
 * @param {any} workers - The `workers` parameter is an array that holds references to the worker
 * processes created by the `cluster.fork()` method.
 */
const spawnWorker = (i, workers) => {
    workers[i] = cluster_1.default.fork();
    // Restart worker on exit
    workers[i].on("exit", () => {
        console.log(`Worker ${i} exited`);
        spawnWorker(i, workers);
    });
};
(() => __awaiter(void 0, void 0, void 0, function* () {
    if (cluster_1.default.isPrimary) {
        // Check if the process is the master process
        const workers = [];
        // Spawn workers
        for (let index = 0; index < totalCPUs; index++) {
            spawnWorker(index, workers);
        }
    }
    else {
        const app = (0, express_1.default)();
        app.get("/", (req, res) => {
            res.send("Hello World!");
        });
        var server = app.listen(process.env.PORT, () => {
            let host = server.address();
            console.log(`\x1b[32m Server is listening on port  ${host.address === "::"
                ? "http://localhost"
                : `https://${host}`}:${host.port} \x1b[0m`);
        });
    }
}))();
