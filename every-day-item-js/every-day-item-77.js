// esnext转换为es5的坑



// https://www.cnblogs.com/syy1757528181/p/14327060.html
// 在控制台打印出九九乘法口诀
/**
 * 从上到下，正三角
 * 第一行：1 * 1
 * 第二行：1 * 2 - 2 * 2
 * 第三行：1 * 3 - 3 * 3
 * ...
 * 第九行：1 * 9 - 9 * 9
 */
//  1 * 1 = 1 	
//  1 * 2 = 2 	2 * 2 = 4 	
//  1 * 3 = 3 	2 * 3 = 6 	3 * 3 = 9 	
//  1 * 4 = 4 	2 * 4 = 8 	3 * 4 = 12 	4 * 4 = 16 	
for (let i = 1; i <= 9; i++) {
  let s = '';
  for (let j = 1; j <= i; j++) {
    s += `${j} * ${i} = ${j * i} \t`;
  }
  console.log(s);
}

/**
 * 从上到下，倒三角
 * 第一行：1 * 1 - 9 * 1
 * 第二行：2 * 2 - 9 * 2
 * 第三行：3 * 3 - 9 * 3
 * ...
 * 第九行：9 * 9
 */
// 1 * 1 = 1 	2 * 1 = 2 	3 * 1 = 3 	4 * 1 = 4 
//            2 * 2 = 4 	3 * 2 = 6 	4 * 2 = 8
//                        3 * 3 = 9 	4 * 3 = 12
//                                    4 * 4 = 16
for (let i = 1; i <= 9; i++) {
  let s = '';
  for (let k = 1; k < i; k++) {
    s += '\t\t\t';
  }
  for (let j = i; j <= 9; j++) {
    s += `${j} * ${i} = ${j * i} \t`;
  }
  console.log(s);
}
