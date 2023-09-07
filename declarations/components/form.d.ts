import Component from '@glimmer/component';
import type { WithBoundArgs } from '@glint/template';
import Button from './button';
export interface FormArgs {
    onSubmit: (event: SubmitEvent) => void;
}
export interface FormSignature {
    Args: FormArgs;
    Blocks: {
        default: [
            {
                Submit: WithBoundArgs<typeof Button, 'type'>;
            }
        ];
    };
    Element: HTMLButtonElement;
}
export default class Form extends Component<FormSignature> {
    handleSubmit(event: SubmitEvent): void;
}
//# sourceMappingURL=form.d.ts.map