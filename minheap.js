

class MinHeap {
    //assumes integers
    constructor(input, size) {
        this.arr = [...input].sort();
        this.size = size;
    }

    parent(i) {
        if (i < 1) {
            return -1;
        }
        return Math.floor((i - 1) / 2);
    }
    leftChild(i) {
        const descendant = 2 * i + 1;
        if (descendant >= this.arr.length) {
            return -1;
        }
        return this.arr[descendant];
    }
    rightChild(i) {
        const descendant = 2 * i + 2;
        if (descendant >= this.arr.length) {
            return -1;
        }
        return this.arr[descendant];
    }
    removeMin() {
        if (this.arr.length < 1) {
            return -1;
        }
        const root = this.arr.shift();
        return root;
    }
    getMin() {
        return this.arr[0];
    }
    removeMax() {
        return this.arr.pop();
    }
    getMax() {
        return this.arr[this.arr.length - 1];
    }
    currentSize() {
        return this.arr.length;
    }
    deleteKey(i) {
        this.arr.splice(i, 1);
    }
    insertKey(x) {
        this.arr.push(x).sort();
    }
    getKey(v) {
        return this.arr.findIndex(x => x === v); //not found returns -1
    }
}

