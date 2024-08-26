import { LitElement, html, customElement, css } from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin } from "@umbraco-cms/backoffice/element-api";
import { UMB_WORKSPACE_CONTEXT, UmbEntityWorkspaceContext } from "@umbraco-cms/backoffice/workspace";
import { UmbDocumentTypeDetailRepository } from '@umbraco-cms/backoffice/document-type';
import { UmbMediaTypeDetailRepository } from '@umbraco-cms/backoffice/media-type';
import { UmbDataTypeDetailRepository } from '@umbraco-cms/backoffice/data-type';
import { UmbMemberTypeDetailRepository } from '@umbraco-cms/backoffice/member-type';

@customElement('my-workspaceview')
export default class MyWorspaceViewElement extends UmbElementMixin(LitElement) {

    private documentTypeJson: string = '{}';
    private entityType: string = '';
    constructor() {
        super();

        this.consumeContext(UMB_WORKSPACE_CONTEXT, async (ctx) => {
            const context = ctx as UmbEntityWorkspaceContext;
            const unique = context.getUnique();
            this.entityType = context.getEntityType();
            if (unique) {
                let repository;
                switch (this.entityType) {
                    case 'document-type':
                        repository = new UmbDocumentTypeDetailRepository(this);                       
                        break;
                    case 'media-type':
                        repository = new UmbMediaTypeDetailRepository(this);
                        break;
                    case 'data-type':
                        repository = new UmbDataTypeDetailRepository(this);
                        break;
                    case 'member-type':
                        repository = new UmbMemberTypeDetailRepository(this);
                        break;
                    default:
                        console.error('Unsupported entity type:', context.getEntityType());
                        return;
                }

                try {
                    const entityDetails = await repository.requestByUnique(unique);

                    if (entityDetails) {
                        // Convert the details to a JSON string with indentation
                        this.documentTypeJson = JSON.stringify(entityDetails.data, null, 2);
                        this.requestUpdate(); // Request a re-render to display the JSON
                    }
                } catch (error) {
                    console.error('Error fetching entity details:', error);
                }
            }
        });
    }

    render() {
        return html`     
        <uui-box headline="${this.entityType}">
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
