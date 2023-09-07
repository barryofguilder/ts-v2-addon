import { setComponentTemplate } from '@ember/component';
import { precompileTemplate } from '@ember/template-compilation';
import Component from '@glimmer/component';
import Button from './button.js';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { hash } from '@ember/helper';

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object.keys(descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;
  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }
  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);
  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }
  if (desc.initializer === void 0) {
    Object.defineProperty(target, property, desc);
    desc = null;
  }
  return desc;
}

var _class;
let Form = setComponentTemplate(precompileTemplate("\n    <form {{on \"submit\" this.handleSubmit}}>\n      {{yield (hash Submit=(component Button type=\"submit\"))}}\n    </form>\n  ", {
  strictMode: true,
  scope: () => ({
    on,
    hash,
    Button
  })
}), (_class = class Form extends Component {
  handleSubmit(event) {
    event.preventDefault();
    this.args.onSubmit(event);
  }
}, (_applyDecoratedDescriptor(_class.prototype, "handleSubmit", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleSubmit"), _class.prototype)), _class));

export { Form as default };
//# sourceMappingURL=form.js.map
