1. 原生js获取html样式   获取元素实际样式信息时，应使用 getComputedStyle 或 currentStyle.

2. "DELETE"不能在数组中使用  delete函数可以用来删除任何的对象。数组是对象，因此可以被delete操作.
   但是如果这样使用了，就会在数组中产生一个undefined元素，无法从下标中反应出delete操作.
   
3. 调用parseInt()函数要带两个参数.

4. function不应该有太多行.

5. js对于浮点数的计算存在诡异的问题，不同浏览器的表现可能不一样，列如: 0.03-0.01 = 0.019999999999999997  不等于0.02;

6. setTimeout(fn, time)中，fn(不是箭头函数)中的this,永远指向window.
