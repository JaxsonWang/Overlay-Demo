/**
 * 将字符串转换DOM对象
 * @param str 传入值
 * @returns {NodeListOf<ChildNode>} node list对象
 */
const parseDom = (str) => {
  const obj = document.createElement('div')
  obj.className = 'overlay-wrapper'
  obj.innerHTML = str
  return obj
}

export const full = ( options = {} ) => {
  const div = `
<div class="overlay-box">
  <div class="overlay-box-header">${options.title}</div>
  <div class="overlay-box-content">${options.content}</div>
  <div class="overlay-box-footer">
    <button type="button" class="overlay-box-button overlay-box-button-primary overlay-box-button-cancel">
      <span>取消</span>
    </button>
    <button type="button" class="overlay-box-button overlay-box-button-primary overlay-box-button-confirm">
      <span>确定</span>
    </button>
  </div>
</div>`

  // 写入dom
  document.querySelector('body').appendChild(parseDom(div));

  // 点击确定按钮
  document.querySelector('.overlay-box-button-confirm').addEventListener('click', function () {
    document.querySelector('.overlay-wrapper').remove(); // 删除dom
    options.confirm();
  });

  // 点击取消按钮
  document.querySelector('.overlay-box-button-cancel').addEventListener('click', function () {
    document.querySelector('.overlay-wrapper').remove(); // 删除dom
    options.cancel();
  });
}
