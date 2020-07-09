var duck = {
  duckSinging: function () {
    console.log("嘎嘎嘎");
  },
};

var chicken = {
  duckSinging: function () {
    console.log("嘎嘎嘎");
  },
};

var choir = [];

let joinChoir = (animal) => {
  if (animal && typeof animal.duckSinging === "function") {
    choir.push(animal);
    console.log("恭喜加入合唱团");
    console.log(`合唱团成员数量${choir.length}`);
  }
};

joinChoir(duck);
joinChoir(chicken);
