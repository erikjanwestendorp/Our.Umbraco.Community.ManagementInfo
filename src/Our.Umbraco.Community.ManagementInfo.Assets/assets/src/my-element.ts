import { LitElement, html, customElement, css } from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin } from "@umbraco-cms/backoffice/element-api";

@customElement('my-workspaceview')
export default class MyWorspaceViewElement extends UmbElementMixin(LitElement) {

    render() {
        return html`     
     <uui-box headline="Document Type Definition">
       <umb-code-block language="JSON" copy>{}</umb-code-block>
      </uui-box>    `
    }

    static styles = css`
    uui-box {
      margin: 20px;
    }
  `
}

declare global {
    interface HTMLElementTagNameMap {
        'my-workspaceview': MyWorspaceViewElement
    }
}
