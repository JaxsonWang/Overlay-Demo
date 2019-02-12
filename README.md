# Overlay

请用原生 JS（ES5 或 ES6 随意。但不要用任何库）写一个通用弹出框(overlay)组件。

- 请考虑到组件(overlay)重用性。比如，不同页面的弹出框的内容有可能不同。
- 组件(overlay)需包含 2 个基本方法 open，显示弹出框。close，关闭弹出框
- 组件(overlay)需要可以在手机，平板以及电脑上均可使用

---

使用方法：

打开 `demo/index.html` 即可查看。

引入`dist/index.js`和`demo/index.css`文件

```javascript
Overlay.full({
  title: '你好', // 弹窗标题
  content: '世界', // 弹窗内容
  confirm: function () { 
    console.log('确定')
  }, // 点击确定回调事件
  cancel: function () {
    console.log('取消')
  } // 点击取消回调事件
})
```
