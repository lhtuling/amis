import * as React from 'react';
import {AlertComponent, ToastComponent, ContextMenu} from 'amis';
// @ts-ignore
import AMisSchemaEditor from './Editor';

// !ypf自用👇
// 获取当前时间
(window as any).getCurrentDateTime = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const day = ('0' + date.getDate()).slice(-2);
  const hours = ('0' + date.getHours()).slice(-2);
  const minutes = ('0' + date.getMinutes()).slice(-2);
  const seconds = ('0' + date.getSeconds()).slice(-2);
  const milliseconds = ('00' + date.getMilliseconds()).slice(-3);
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}.${milliseconds}`;
};
// !ypf自用👆

export default class App extends React.PureComponent {
  render() {
    // 备注: 如果需要改用antd主题，还需要将index.html换成index-antd.html
    const curTheme = 'cxd'; // 默认使用cxd主题
    return (
      <div className="Editor-Demo">
        <div id="headerBar" className="Editor-header">
          <div className="Editor-title">amis 可视化编辑器</div>
        </div>
        <AMisSchemaEditor theme={curTheme} />
        <ToastComponent theme={curTheme} />
        <AlertComponent theme={curTheme} />
        <ContextMenu theme={curTheme} />
      </div>
    );
  }
}
