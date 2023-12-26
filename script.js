let first = function (callback) {
    setTimeout(() => {
        console.log(10);
        callback();
    }, 1000);
}
let second = function (callback) {
    setTimeout(() => {
        console.log(9);
        callback();
    }, 1000);
}
let third = function (callback) {
    setTimeout(() => {
        console.log(8);
        callback();
    }, 1000);
}
let fourth = function (callback) {
    setTimeout(() => {
        console.log(7);
        callback();
    }, 1000);
}
let fifth = function (callback) {
    setTimeout(() => {
        console.log(6);
        callback();
    }, 1000);
}
let sixth = function (callback) {
    setTimeout(() => {
        console.log(5);
        callback();
    }, 1000);
}
let seventh = function (callback) {
    setTimeout(() => {
        console.log(4);
        callback();
    }, 1000);
}
let eighth = function (callback) {
    setTimeout(() => {
        console.log(3);
        callback();
    }, 1000);
}
let ninth = function (callback) {
    setTimeout(() => {
        console.log(2);
        callback();
    }, 1000);
}
let tenth = function (callback) {
    setTimeout(() => {
        console.log(1);
        callback();
    }, 1000);
}
first(function () {
    second(function () {
        third(function () {
            fourth(function () {
                fifth(function () {
                    sixth(function () {
                        seventh(function () {
                            eighth(function () {
                                ninth(function () {
                                    tenth(function () {
                                        console.log("Happy Independence Day")
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })

})
