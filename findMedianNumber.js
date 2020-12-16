class MedianOfAStream {
    constructor() {
        this.values = [];
    }

    insert_num(num) {
        this.values.push(num);
        this.sort();
    }

    sort() {
        this.values.sort((a,b) => a - b);
    }

    find_median() {
        let length = this.values.length;
        let index = this.values.length - 1;
        let midIndex = Math.floor(index/2);
        if (length % 2 === 0) {
            return (this.values[midIndex] + this.values[midIndex+1]) / 2;
        } else {
            return this.values[midIndex];
        }
    }
}

var medianOfAStream = new MedianOfAStream()
medianOfAStream.insert_num(3)
medianOfAStream.insert_num(1)
console.log(`The median is: ${medianOfAStream.find_median()}`)
medianOfAStream.insert_num(5)
console.log(`The median is: ${medianOfAStream.find_median()}`)
medianOfAStream.insert_num(4)
console.log(`The median is: ${medianOfAStream.find_median()}`)
console.log(medianOfAStream);
