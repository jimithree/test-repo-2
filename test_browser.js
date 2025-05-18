const { openBrowser } = require('browsertools');

// 测试打开浏览器
async function testBrowser() {
  try {
    await openBrowser('https://www.baidu.com');
    console.log('浏览器工具安装成功！');
  } catch (error) {
    console.error('浏览器工具安装失败：', error);
  }
}

testBrowser();