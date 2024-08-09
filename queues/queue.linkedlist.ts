import { Queue } from './queue.interface';

class Node<T> {
    value: T;
    next: Node<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}

export default class LinkedListQueue<T> implements Queue<T> {
    private head: Node<T> | null;
    private tail: Node<T> | null;
    #count: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.#count = 0;
    }

    enqueue(value: T): void {
        const newNode = new Node(value);
        if (this.tail) {
            this.tail.next = newNode;
        }
        this.tail = newNode;
        if (!this.head) {
            this.head = newNode;
        }
    }

    dequeue(): T | null {
        if (this.isEmpty()) {
            return null;
        }
        const value = this.head!.value;
        this.head = this.head!.next;
        if (!this.head) {
            this.tail = null;
        }
        this.#count++;
        return value;
    }

    isEmpty(): boolean {
        return this.head === null;
    }

    summaryLog(): void {
        console.log(`Queue Summary: ${this.#count.toLocaleString()} items processed`);
    }
}