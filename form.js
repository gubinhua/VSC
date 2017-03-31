//选取所有的标签
'use strict'
var form = $('#test-form');
var langs = form.find('[name=lang]');
var selectAll = form.find('label.selectAll :checkbox');
var selectAllLabel = form.find('label.selectAll span.selectAll');
var deselectAllLabel = form.find('label.selectAll span.deselectAll');
var invertSelect = form.find('a.invertSelect');
/**
 * 绑定合适的事件处理函数，实现以下逻辑：
 * 当用户勾上“全选”时，自动选中所有语言，并把“全选”变成“全不选”；

 * 当用户去掉“全不选”时，自动不选中所有语言；
 * 当用户点击“反选”时，自动把所有语言状态反转（选中的变为未选，未选的变为选中）；

 * 当用户把所有语言都手动勾上时，“全选”被自动勾上，并变为“全不选”；
 * 当用户手动去掉选中至少一种语言时，“全不选”自动被去掉选中，并变为“全选”。
 */

//辅助函数，用于改变标签的状态
function updateLabel() {
  var checkAll = langs.filter(':checked').length === langs.length;//判断是否全选
  selectAll.prop('checked',checkAll);
  if(checkAll) {
    langs.prop('checked',true);
    selectAllLabel.hide();
    deselectAllLabel.show();
  }else {
    langs.prop('checked',false);
    selectAllLabel.show();
    deselectAllLabel.hide();
  }
}

//全选和全不选
//当用户勾上“全选”时，自动选中所有语言，并把“全选”变成“全不选”；
//当用户去掉“全不选”时，自动不选中所有语言；
selectAll.change(function(){
  langs.prop('checked', $(this).is(':checked')); //根据全选是否选定来设置所有语言是否选中
  updateLabel();
});

//反选
//当用户点击“反选”时，自动把所有语言状态反转（选中的变为未选，未选的变为选中）；
invertSelect.click(function(e) {
  langs.click(); //模拟对所有语言复选框进行一次点击事件
});

//当用户把所有语言都手动勾上时，“全选”被自动勾上，并变为“全不选”；
//当用户手动去掉选中至少一种语言时，“全不选”自动被去掉选中，并变为“全选”。
langs.change(function() {
  updateLabel();
})