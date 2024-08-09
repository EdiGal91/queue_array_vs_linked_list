import { Queue } from './queue.interface';

export default class ArrayQeueue<T> implements Queue<T> {
    #queue: T[];
    #count: number = 0;
    constructor() {
        this.#queue = [];
    }

    enqueue(value: T) {
        this.#queue.push(value);
    }

    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        this.#count++;
        return this.#queue.shift();
    }
    isEmpty(): boolean {
        return this.#queue.length === 0;
    }
    summaryLog() {
        console.log(`Queue Summary: ${this.#count.toLocaleString()} items processed`);
    }
}
