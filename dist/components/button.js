import { setComponentTemplate } from '@ember/component';
import { precompileTemplate } from '@ember/template-compilation';
import Component from '@glimmer/component';

class Button extends Component {
  get type() {
    if (this.args.type) {
      return this.args.type;
    }
    return 'button';
  }
}
setComponentTemplate(precompileTemplate("\n    <button data-test-id=\"button\" type={{this.type}} class=\"px-4 py-1 border rounded hover:bg-red-500\" ...attributes>\n      {{yield}}\n    </button>\n  ", {
  strictMode: true
}), Button);

export { Button as default };
//# sourceMappingURL=button.js.map
