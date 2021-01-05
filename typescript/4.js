var getUserInfoWidthType = function (user) {
    return "name:" + user.name + ",age:" + user.age;
};
getUserInfoWidthType({ name: "koala", age: 18 });
