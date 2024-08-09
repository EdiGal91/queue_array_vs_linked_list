import { strict as assert } from 'node:assert';

import ArrayQeueue from './queues/queue.array';
import LinkedListQueue from './queues/queue.linkedlist';
import { Queue } from './queues/queue.interface';

const arg = process.argv[2];
assert.ok(arg === 'list' || arg === 'array', "Argument must be 'list' or 'array'");

const DATA_TYPE = arg === 'array'
    ? ArrayQeueue
    : LinkedListQueue

const INITIAL_SIZE = 1_000_000;
const TO_ADD = INITIAL_SIZE / 100;
const TO_REMOVE = INITIAL_SIZE / 10;

console.time('Qeueue')

const queueArr = new DATA_TYPE<number>()
console.timeLog('Qeueue', 'Start')
addItems(queueArr, INITIAL_SIZE)
console.timeLog('Qeueue', 'Initialized')

let iteration = 0;
while (!queueArr.isEmpty()) {
    addItems<number>(queueArr, TO_ADD)
    removeItems(queueArr, TO_REMOVE)
    console.timeLog('Qeueue', `Iteration ${++iteration}`)
}

queueArr.summaryLog()

function addItems<T>(queue: Queue<T>, count: number) {
    for (let i = 0; i < count; i++) {
        queue.enqueue(i as T)
    }
}

function removeItems<T>(queue: Queue<T>, count: number) {
    for (let i = 0; i < count; i++) {
        queue.dequeue()
    }
}

console.timeEnd('Qeueue')
