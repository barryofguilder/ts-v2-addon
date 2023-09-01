import Component from '@glimmer/component';
import type { WithBoundArgs } from '@glint/template';
import Button from './button';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { hash } from '@ember/helper';

export interface FormArgs {
  onSubmit: (event: SubmitEvent) => void;
}

export interface FormSignature {
  Args: FormArgs;
  Blocks: {
    default: [
      {
        Submit: WithBoundArgs<typeof Button, 'type'>;
      },
    ];
  };
  Element: HTMLButtonElement;
}

export default class Form extends Component<FormSignature> {
  @action
  public handleSubmit(event: SubmitEvent): void {
    event.preventDefault();

    this.args.onSubmit(event);
  }

  <template>
    <form {{on 'submit' this.handleSubmit}}>
      {{yield (hash Submit=(component Button type='submit'))}}
    </form>
  </template>
}
