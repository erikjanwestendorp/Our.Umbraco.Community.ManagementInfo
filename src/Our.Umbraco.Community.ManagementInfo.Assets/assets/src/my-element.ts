import { LitElement, html, customElement, css } from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin } from "@umbraco-cms/backoffice/element-api";
import { UMB_WORKSPACE_CONTEXT, UmbEntityWorkspaceContext } from "@umbraco-cms/backoffice/workspace";
import { UmbDocumentTypeDetailRepository } from '@umbraco-cms/backoffice/document-type';

@customElement('my-workspaceview')
export default class MyWorspaceViewElement extends UmbElementMixin(LitElement) {

    private documentTypeJson: string = '{}'; // Initialize with an empty JSON object

    constructor() {
        super();
        console.log('data', this.dataset);

        this.consumeContext(UMB_WORKSPACE_CONTEXT, async (ctx) => {
            const context = ctx as UmbEntityWorkspaceContext;
            const unique = context.getUnique();

            if (unique) {
                // Create an instance of the UmbDocumentTypeDetailRepository
                const repository = new UmbDocumentTypeDetailRepository(this);

                try {
                    // Fetch the document type details using the repository
                    const documentTypeDetails = await repository.requestByUnique(unique);

                    if (documentTypeDetails) {
                        // Convert the details to a JSON string with indentation
                        this.documentTypeJson = JSON.stringify(documentTypeDetails, null, 2);
                        this.requestUpdate(); // Request a re-render to display the JSON
                    }
                } catch (error) {
                    console.error('Error fetching document type details:', error);
                }
            }
        });
    }

    render() {
        return html`     
        <uui-box headline="Document Type Definition">
            <umb-code-block language="JSON" copy>${this.documentTypeJson}</umb-code-block>
        </uui-box>`;
    }

    static styles = css`
    uui-box {
        margin: 20px;
    }
  `;
}

declare global {
    interface HTMLElementTagNameMap {
        'my-workspaceview': MyWorspaceViewElement;
    }
}
