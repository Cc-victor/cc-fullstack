function Book(isbn,title,author){
    this.setIsbn(isbn)
//  this.isbn=isbn; //public 属性
//  this.title=title;
//  this.author=author;   
}

Book.prototype = {
    setIsbn(isbn){
     //isbn 不能this  要可读
    //  private 私有属性，对象的方法内this.调用    但在外界不能调用
    // js内不存在 private,约定，以_开头的，就是私有属性
    if(!this.checkIsbn(isbn)) return;
    throw new Error('ISON 格式有误')

    this._isbn=isbn
    },
    getIsbn(){
        return this._isbn;
    },
    checkIsbn(isbn){
        if(!isbn)return false;
        return /\d{3}\d-\d{3}-\d{3}-\d/.test(isbn);  //正则表达式
    }

}
// class 只是语法糖
//private
const jsDontKnow=new Book('978-7-121-29899-8','React全栈','陈玉钰')
//  console.log(jsDontKnow._proto_=book.prototype);
console.log(jsDontKnow instanceof Book);
console.log(Book.prototype.isPrototypeOf(jsDontKnow));
console.log(jsDontKnow.getIsbn());
// jsDontKnow.isbn='ddddd';