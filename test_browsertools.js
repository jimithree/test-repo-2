const { runAccessibilityAudit, runPerformanceAudit, runSEOAudit } = require('browsertools');

// 测试浏览器工具
async function testBrowserTools() {
  try {
    // 运行可访问性测试
    const accessibilityResult = await runAccessibilityAudit();
    console.log('可访问性测试结果：', accessibilityResult);

    // 运行性能测试
    const performanceResult = await runPerformanceAudit();
    console.log('性能测试结果：', performanceResult);

    // 运行SEO测试
    const seoResult = await runSEOAudit();
    console.log('SEO测试结果：', seoResult);

    console.log('所有浏览器工具测试成功！');
  } catch (error) {
    console.error('浏览器工具测试失败：', error);
  }
}

testBrowserTools();