import {FormItem, utils, Button, Overlay, PopOver, RendererProps} from 'amis';
import React from 'react';
import type {Schema} from 'amis';
import {findDOMNode} from 'react-dom';

interface ClassNameControlProps extends RendererProps {
  schema: Schema;
}

interface ClassNameControlState {
  isFocused: boolean;
  isOpened: boolean;
}

const classOptions = [
  {
    label: '外边距',
    children: [
      {
        label: '整体',
        children: [
          {
            label: '极小',
            value: 'm-xs'
          },
          {
            label: '小',
            value: 'm-sm'
          },
          {
            label: '正常',
            value: 'm'
          },
          {
            label: '中',
            value: 'm-md'
          },
          {
            label: '大',
            value: 'm-lg'
          }
        ]
      },

      {
        label: '上边距',
        children: [
          {
            label: '极小',
            value: 'm-t-xs'
          },
          {
            label: '小',
            value: 'm-t-sm'
          },
          {
            label: '正常',
            value: 'm-t'
          },
          {
            label: '中',
            value: 'm-t-md'
          },
          {
            label: '大',
            value: 'm-t-lg'
          }
        ]
      },

      {
        label: '右边距',
        children: [
          {
            label: '极小',
            value: 'm-r-xs'
          },
          {
            label: '小',
            value: 'm-r-sm'
          },
          {
            label: '正常',
            value: 'm-r'
          },
          {
            label: '中',
            value: 'm-r-md'
          },
          {
            label: '大',
            value: 'm-r-lg'
          }
        ]
      },

      {
        label: '下边距',
        children: [
          {
            label: '极小',
            value: 'm-b-xs'
          },
          {
            label: '小',
            value: 'm-b-sm'
          },
          {
            label: '正常',
            value: 'm-b'
          },
          {
            label: '中',
            value: 'm-b-md'
          },
          {
            label: '大',
            value: 'm-b-lg'
          }
        ]
      },

      {
        label: '左边距',
        children: [
          {
            label: '极小',
            value: 'm-l-xs'
          },
          {
            label: '小',
            value: 'm-l-sm'
          },
          {
            label: '正常',
            value: 'm-l'
          },
          {
            label: '中',
            value: 'm-l-md'
          },
          {
            label: '大',
            value: 'm-l-lg'
          }
        ]
      },

      {
        label: '置无',
        children: [
          {
            label: '全部',
            value: 'm-none'
          },
          '|',
          {
            label: '上',
            value: 'm-t-none'
          },
          {
            label: '右',
            value: 'm-r-none'
          },
          {
            label: '下',
            value: 'm-b-none'
          },
          {
            label: '左',
            value: 'm-l-none'
          }
        ]
      }
    ]
  },

  {
    label: '内边距',
    children: [
      {
        label: '整体',
        children: [
          {
            label: '极小',
            value: 'p-xs'
          },
          {
            label: '小',
            value: 'p-sm'
          },
          {
            label: '正常',
            value: 'p'
          },
          {
            label: '中',
            value: 'p-md'
          },
          {
            label: '大',
            value: 'p-lg'
          }
        ]
      },

      {
        label: '上边距',
        children: [
          {
            label: '极小',
            value: 'p-t-xs'
          },
          {
            label: '小',
            value: 'p-t-sm'
          },
          {
            label: '正常',
            value: 'p-t'
          },
          {
            label: '中',
            value: 'p-t-md'
          },
          {
            label: '大',
            value: 'p-t-lg'
          }
        ]
      },

      {
        label: '右边距',
        children: [
          {
            label: '极小',
            value: 'p-r-xs'
          },
          {
            label: '小',
            value: 'p-r-sm'
          },
          {
            label: '正常',
            value: 'p-r'
          },
          {
            label: '中',
            value: 'p-r-md'
          },
          {
            label: '大',
            value: 'p-r-lg'
          }
        ]
      },

      {
        label: '下边距',
        children: [
          {
            label: '极小',
            value: 'p-b-xs'
          },
          {
            label: '小',
            value: 'p-b-sm'
          },
          {
            label: '正常',
            value: 'p-b'
          },
          {
            label: '中',
            value: 'p-b-md'
          },
          {
            label: '大',
            value: 'p-b-lg'
          }
        ]
      },

      {
        label: '左边距',
        children: [
          {
            label: '极小',
            value: 'p-l-xs'
          },
          {
            label: '小',
            value: 'p-l-sm'
          },
          {
            label: '正常',
            value: 'p-l'
          },
          {
            label: '中',
            value: 'p-l-md'
          },
          {
            label: '大',
            value: 'p-l-lg'
          }
        ]
      },

      {
        label: '置无',
        children: [
          {
            label: '全部',
            value: 'p-none'
          },
          '|',
          {
            label: '上',
            value: 'p-t-none'
          },
          {
            label: '右',
            value: 'p-r-none'
          },
          {
            label: '下',
            value: 'p-b-none'
          },
          {
            label: '左',
            value: 'p-l-none'
          }
        ]
      }
    ]
  },

  {
    label: '边框',
    className: 'w2x',
    children: [
      {
        label: '位置',
        children: [
          {
            label: '全部',
            value: 'b-a'
          },

          '|',

          {
            label: '上',
            value: 'b-t'
          },

          {
            label: '右',
            value: 'b-r'
          },

          {
            label: '下',
            value: 'b-b'
          },

          {
            label: '左',
            value: 'b-l'
          },

          '|',

          {
            label: '置无',
            value: 'no-border'
          }
        ]
      },

      {
        label: '大小',
        children: [
          {
            label: '2x',
            value: 'b-2x'
          },

          {
            label: '3x',
            value: 'b-3x'
          },

          {
            label: '4x',
            value: 'b-4x'
          },

          {
            label: '5x',
            value: 'b-5x'
          }
        ]
      },

      {
        label: '颜色',
        children: [
          {
            label: '主色',
            value: 'b-primary',
            className: 'bg-primary'
          },

          {
            label: '信息',
            value: 'b-info',
            className: 'bg-info'
          },

          {
            label: '警告',
            value: 'b-warning',
            className: 'bg-warning'
          },

          {
            label: '危险',
            value: 'b-danger',
            className: 'bg-danger'
          },

          {
            label: '成功',
            value: 'b-success',
            className: 'bg-success'
          },

          {
            label: '白色',
            value: 'b-white',
            className: 'bg-white'
          },

          {
            label: '暗色',
            value: 'b-dark',
            className: 'bg-dark'
          },

          {
            label: '浅色',
            value: 'b-light',
            className: 'bg-light'
          }
        ]
      }
    ]
  },

  {
    label: '其他',
    className: 'w2x',
    children: [
      // !ypf自用👇
      {
        label: '对齐',
        children: [
          {
            label: '左',
            value: 'text-left'
          },

          '|',
          {
            label: '中',
            value: 'text-center'
          },

          '|',
          {
            label: '右',
            value: 'text-right'
          },

          '|',
          {
            label: 'justify',
            value: 'text-justify'
          }
        ]
      },
      // !ypf自用👆
      {
        label: '圆角',
        children: [
          {
            label: '全部',
            value: 'r'
          },

          '|',

          {
            label: '上',
            value: 'r-t'
          },

          {
            label: '右',
            value: 'r-r'
          },

          {
            label: '下',
            value: 'r-b'
          },

          {
            label: '左',
            value: 'r-l'
          },

          '|',

          {
            label: '2x',
            value: 'r-2x'
          },

          {
            label: '3x',
            value: 'r-3x'
          }
        ]
      },
      {
        label: '字体',
        children: [
          {
            label: '正常',
            value: 'font-normal'
          },
          {
            label: '细',
            value: 'font-thin'
          },
          {
            label: '粗',
            value: 'font-bold'
          },

          '|',

          {
            label: '极小',
            value: 'text-xs'
          },
          {
            label: '小',
            value: 'text-sm'
          },
          {
            label: '正常',
            value: 'text-base'
          },
          {
            label: '中',
            value: 'text-md'
          },
          {
            label: '大',
            value: 'text-lg'
          }
        ]
      },

      {
        label: '颜色',
        children: [
          {
            label: '主色',
            value: 'text-primary',
            className: 'text-primary'
          },

          {
            label: '信息',
            value: 'text-info',
            className: 'text-info'
          },

          {
            label: '警告',
            value: 'text-warning',
            className: 'text-warning'
          },

          {
            label: '危险',
            value: 'text-danger',
            className: 'text-danger'
          },

          {
            label: '成功',
            value: 'text-success',
            className: 'text-success'
          },

          {
            label: '白色',
            value: 'text-white',
            className: 'text-white bg-dark'
          },

          {
            label: '暗色',
            value: 'text-dark',
            className: 'text-dark'
          },

          {
            label: '淡色',
            value: 'text-muted',
            className: 'text-muted'
          }
        ]
      },

      {
        label: '背景',
        children: [
          {
            label: '主色',
            value: 'bg-primary',
            className: 'bg-primary'
          },

          {
            label: '信息',
            value: 'bg-info',
            className: 'bg-info'
          },

          {
            label: '警告',
            value: 'bg-warning',
            className: 'bg-warning'
          },

          {
            label: '危险',
            value: 'bg-danger',
            className: 'bg-danger'
          },

          {
            label: '成功',
            value: 'bg-success',
            className: 'bg-success'
          },

          {
            label: '白色',
            value: 'bg-white',
            className: 'bg-white'
          },

          {
            label: '暗色',
            value: 'bg-dark',
            className: 'bg-dark'
          },

          {
            label: '浅色',
            value: 'bg-light',
            className: 'bg-light'
          },

          '|',

          {
            label: '置无',
            value: 'no-bg'
          }
        ]
      },

      {
        label: '宽度',
        children: [
          {
            label: '特小',
            value: 'w-xxs'
          },

          {
            label: '极小',
            value: 'w-xs'
          },

          {
            label: '小',
            value: 'w-sm'
          },

          {
            label: '正常',
            value: 'w'
          },

          {
            label: '中',
            value: 'w-md'
          },

          {
            label: '大',
            value: 'w-lg'
          },

          {
            label: '加大',
            value: 'w-xl'
          },

          {
            label: '特大',
            value: 'w-xxl'
          },

          {
            label: '占满',
            value: 'w-full'
          }
        ]
      }
    ]
  }
];

function splitOptions(options: Array<any>) {
  const group: Array<Array<any>> = [];
  let host: Array<any> = (group[0] = []);

  for (let i = 0, len = options.length; i < len; i++) {
    const item = options[i];

    if (item === '|') {
      host = [];
      group.push(host);
    } else {
      host.push(item);
    }
  }

  return group;
}

// @ts-ignore
@FormItem({
  type: 'ae-classname'
})
export class ClassNameControl extends React.Component<
  ClassNameControlProps,
  ClassNameControlState
> {
  state = {
    isFocused: false,
    isOpened: false
  };

  values: Array<string> = [];

  @utils.autobind
  open() {
    this.setState({
      isOpened: true
    });
  }

  @utils.autobind
  close() {
    this.setState({
      isOpened: false
    });
  }

  @utils.autobind
  toggle() {
    this.setState({
      isOpened: !this.state.isOpened
    });
  }

  @utils.autobind
  handleFocus(e: any) {
    this.setState({
      isFocused: true
    });
    this.props.onFocus && this.props.onFocus(e);
  }

  @utils.autobind
  handleBlur(e: any) {
    this.setState({
      isFocused: false
    });
    this.props.onBlur && this.props.onBlur(e);
  }

  @utils.autobind
  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const {onChange} = this.props;

    onChange(e.currentTarget.value);
  }

  @utils.autobind
  getParent() {
    return findDOMNode(this);
  }

  @utils.autobind
  getTarget() {
    return findDOMNode(this) as HTMLElement;
  }

  handlePopOverChange(option: any) {
    let value = this.props.value || '';

    const values = value.replace(/\s+/g, ' ').split(/\s+/);
    const idx = values.indexOf(option.value);
    const onChange = this.props.onChange;

    if (~idx) {
      values.splice(idx, 1);
      value = values.join(' ');
    } else {
      // 单独设置某个方向尺寸时把别的尺寸干掉比如： 设置 m-l-xs 时，把 m-l-md 去掉
      if (
        /(?:^|\s)(m|p)\-(t|r|b|l)(?:\-(?:xs|sm|md|lg))?(?:$|\s)/.test(
          option.value
        )
      ) {
        const reg = new RegExp(
          `(?:^|\\s)${RegExp.$1}\\-${RegExp.$2}(?:\\-(?:xs|sm|md|lg))?(?=(\\s|$))`,
          'ig'
        );
        value = value.replace(reg, '');
      } else if (
        /(?:^|\s)(m|p)(?:\-(xs|sm|md|lg))?(?:$|\s)/.test(option.value)
      ) {
        // 整体设置尺寸的时候，把别的尺寸干掉如： m-xs 去掉 m-md

        const reg = new RegExp(
          `(?:^|\\s)${RegExp.$1}(?:\\-(?:xs|sm|md|lg))?(?=(\\s|$))`,
          'ig'
        );
        value = value.replace(reg, '');
      } else if (
        /(?:^|\s)(m|p)(?:\-(t|r|b|l))?\-none(?:$|\s)/.test(option.value)
      ) {
        // 置无的时候把原来设置的干掉，比如： m-none  把 m-l-xs m-xs 之类的干掉。
        // m-t-none  的时候把 m-t-xs m-t 去掉
        // m-none 的时候把 m-xs m-l-xs 之类的都删了
        const reg = new RegExp(
          RegExp.$2
            ? `(?:^|\\s)${RegExp.$1}(?:(?:\\-${RegExp.$2}(?:\\-(?:xs|sm|md|lg)))|\\-none)?(?=(\\s|$))`
            : `(?:^|\\s)${RegExp.$1}(?:[^\\s$]+)?(?=(\\s|$))`,
          'ig'
        );
        value = value.replace(reg, '$1');
      } else if (/(?:^|\s)w(?:\-\w+)?(?:$|\s)/.test(option.value)) {
        // 宽度互斥： w-xs w-md 之类的，只选一个

        value = value.replace(/(?:^|\s)w(?:\-\w+)?(?=(\s|$))/g, '');
      } else if (option.value === 'b-a') {
        // b-a 的时候把 b-l b-t 之类的干掉
        value = value.replace(/(?:^|\s)b\-(?:t|r|b|l)(?=(\s|$))/g, '');
        value = value.replace(/(?:^|\s)no\-border(?=(\s|$))/g, '');
      } else if (/(?:^|\s)b\-(?:t|r|b|l)?(?:$|\s)/.test(option.value)) {
        // b-a 的时候把 b-l b-t 之类的干掉
        value = value.replace(/(?:^|\s)b\-a(?=(\s|$))/g, '');
        value = value.replace(/(?:^|\s)no\-border(?=(\s|$))/g, '');
      } else if (/(?:^|\s)b\-\dx(?:$|\s)/.test(option.value)) {
        value = value.replace(/(?:^|\s)b\-\dx(?=(\s|$))/g, '');
      } else if (option.value === 'no-border') {
        value = value.replace(/(?:^|\s)b\-(?:\dx|\w+)(?=(\s|$))/g, '');
      } else if (
        /(?:^|\s)b\-(?:primary|info|warning|danger|success|white|dark|light)(?:$|\s)/.test(
          option.value
        )
      ) {
        value = value.replace(
          /(?:^|\s)b\-(?:primary|info|warning|danger|success|white|dark|light)(?=(\s|$))/g,
          ''
        );
      } else if (option.value === 'r') {
        value = value.replace(/(?:^|\s)r\-(?:t|r|b|l)(?=(\s|$))/g, '');
      } else if (/(?:^|\s)r\-(?:t|r|b|l)?(?:$|\s)/.test(option.value)) {
        value = value.replace(/(?:^|\s)r(?=(\s|$))/g, '');
      } else if (/(?:^|\s)r\-\dx(?:$|\s)/.test(option.value)) {
        value = value.replace(/(?:^|\s)r\-\dx(?=(\s|$))/g, '');
      } else if (
        /(?:^|\s)text\-(?:xs|sm|base|md|lg)(?:$|\s)/.test(option.value)
      ) {
        value = value.replace(
          /(?:^|\s)text\-(?:xs|sm|base|md|lg)(?=(\s|$))/g,
          ''
        );
      } else if (
        /(?:^|\s)font\-(?:normal|thin|bold)(?:$|\s)/.test(option.value)
      ) {
        value = value.replace(
          /(?:^|\s)font\-(?:normal|thin|bold)(?=(\s|$))/g,
          ''
        );
      } else if (
        /(?:^|\s)text\-(?:primary|info|warning|danger|success|white|dark|light)(?:$|\s)/.test(
          option.value
        )
      ) {
        value = value.replace(
          /(?:^|\s)text\-(?:primary|info|warning|danger|success|white|dark|light)(?=(\s|$))/g,
          ''
        );
      } else if (
        /(?:^|\s)bg\-(?:primary|info|warning|danger|success|white|dark|light)(?:$|\s)/.test(
          option.value
        )
      ) {
        value = value.replace(
          /(?:^|\s)bg\-(?:primary|info|warning|danger|success|white|dark|light)(?=(\s|$))/g,
          ''
        );
        value = value.replace(/(?:^|\s)no\-bg(?=(\s|$))/g, '');
      } else if (option.value === 'no-bg') {
        value = value.replace(
          /(?:^|\s)bg\-(?:primary|info|warning|danger|success|white|dark|light)(?=(\s|$))/g,
          ''
        );
      }

      value = value.replace(/\s+/g, ' ').trim();
      value += (value ? ' ' : '') + option.value;
    }

    onChange(value);
  }

  renderGroup(option: any, index: number) {
    const {classnames: cx} = this.props;

    return (
      <div
        key={index}
        className={cx('ae-ClassNameControl-group', option.className)}
      >
        <label
          className={cx(
            'ae-ClassNameControl-groupLabel',
            option.labelClassName
          )}
        >
          {option.label}
        </label>

        {option.children && option.children.length
          ? option.children[0].value
            ? this.renderOptions(option.children, index)
            : option.children.map((option: any, index: number) =>
                this.renderGroup(option, index)
              )
          : null}
      </div>
    );
  }

  renderOptions(options: Array<any>, index: number) {
    const {classnames: cx} = this.props;

    return splitOptions(options).map((group, index) => (
      <div className={cx(`ButtonGroup`)} key={index}>
        {group.map((item: any, index) => (
          <div
            key={index}
            onClick={() => this.handlePopOverChange(item)}
            className={cx(
              'Button Button--size-xs',
              item.className,
              ~this.values.indexOf(item.value)
                ? 'Button--primary'
                : 'Button--default'
            )}
          >
            {item.label}
          </div>
        ))}
      </div>
    ));
  }

  renderPopover() {
    const value = this.props.value;
    this.values = typeof value === 'string' ? value.split(' ') : [];

    return (
      <div>
        {classOptions.map((item: any, index) => this.renderGroup(item, index))}
      </div>
    );
  }

  render() {
    const {
      classnames: cx,
      readOnly,
      disabled,
      value,
      className,
      name,
      popOverContainer
    } = this.props;

    return (
      <div className={className}>
        <div
          className={cx(`TextControl`, {
            [`TextControl--withAddOn`]: true,
            'is-focused': this.state.isFocused,
            'is-disabled': disabled
          })}
        >
          <div className={cx('TextControl-input')}>
            <input
              name={name}
              placeholder="请输入 css 类名"
              disabled={disabled}
              readOnly={readOnly}
              type="text"
              autoComplete="off"
              onChange={this.handleChange}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              value={
                typeof value === 'undefined' || value === null
                  ? ''
                  : typeof value === 'string'
                  ? value
                  : JSON.stringify(value)
              }
            />
          </div>
          <div className={cx(`TextControl-button`)}>
            <Button onClick={this.toggle}>
              <i className="fa fa-cog"></i>
            </Button>
          </div>
        </div>
        <Overlay
          placement="right-bottom-right-top  right-top-right-bottom right-bottom-right-top"
          target={this.getTarget}
          container={popOverContainer || this.getParent}
          rootClose={false}
          show={this.state.isOpened}
          watchTargetSizeChange={false}
        >
          <PopOver
            className={'ae-ClassNamePicker-popover'}
            onHide={this.close}
            overlay
          >
            {this.renderPopover()}
          </PopOver>
        </Overlay>
      </div>
    );
  }
}
