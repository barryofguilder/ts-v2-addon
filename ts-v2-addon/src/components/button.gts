import Component from '@glimmer/component';

export interface ButtonArgs {
  type?: 'button' | 'submit';
}

export interface ButtonSignature {
  Args: ButtonArgs;
  Blocks: {
    default: [];
  };
  Element: HTMLButtonElement;
}

export default class Button extends Component<ButtonSignature> {
  get type(): string {
    if (this.args.type) {
      return this.args.type;
    }
    return 'button';
  }

  <template>
    <button
      data-test-id='button'
      type={{this.type}}
      class='px-4 py-1 border rounded hover:bg-red-500'
      ...attributes
    >
      {{yield}}
    </button>
  </template>
}
