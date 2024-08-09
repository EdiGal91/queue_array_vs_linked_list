export interface Queue<T> {
    enqueue(value: T): void;
    dequeue(): void;
    isEmpty(): boolean;
    summaryLog(): void;
}