const { of } = require('rxjs')

of(1, 2, 3)
.subscribe(console.log)

of([1, 2, 3])
.subscribe(console.log)

const arr = [7,8,9]

of(...arr)
.subscribe(console.log)

// outputs
// 1
// 2
// 3
// [ 1, 2, 3 ]
// 7
// 8
// 9