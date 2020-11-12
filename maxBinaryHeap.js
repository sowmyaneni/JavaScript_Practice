class maxBinaryHeap {
    constructor() {
        this.values = [];
    }
    insert(element) {
        this.values.push(element);
        this.bubbleUp();
    }
    bubbleUp() {
        let index = this.values.length - 1;
        let parentIndex = Math.floor((index-1)/2);
        while(index > 0) {
            let parentIndex = Math.floor((index-1)/2);
            if(this.values[parentIndex] < this.values[index]) {
                [this.values[parentIndex], this.values[index]] = [this.values[index], this.values[parentIndex]];
                index = parentIndex;
            } else {
              break;
            }        
        }
    }
    extractMax() {
        //swap first element with last element
        let index = 0;
        let end = this.values.length - 1;
        if (this.values.length === 0) {
            return undefined;
        }
        [this.values[index], this.values[end]] = [this.values[end], this.values[index]];
        let maxValuePopped = this.values.pop();
        let length = this.values.length;
        let element = this.values[index];
        while(true) {
            let leftChildIndex = 2*index + 1;
            let rightChildIndex = 2*index + 2;
            let leftChild, rightChild;
            let swap = null;
            if (leftChildIndex < length) {
                leftChild = this.values[leftChildIndex];
                if (leftChild > element) {
                    swap = leftChildIndex;
                }
            }
            if (rightChildIndex < length) {
                rightChild = this.values[rightChildIndex];
                if ((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)) {
                    swap = rightChildIndex;
                }
            }
            if (swap === null) {
                break;
            }
            [this.values[index], this.values[swap]] = [this.values[swap], this.values[index]];
            index = swap;
        }

        return maxValuePopped;
    }

}

let heap = new maxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
// heap.insert(45);
// heap.insert(199);
console.log(heap.extractMax());
console.log(heap);

