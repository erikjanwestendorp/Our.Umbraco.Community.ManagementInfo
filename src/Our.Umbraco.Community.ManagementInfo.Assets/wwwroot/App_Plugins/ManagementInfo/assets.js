import { LitElement as u, html as m, css as l, customElement as p } from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin as a } from "@umbraco-cms/backoffice/element-api";
import { UMB_WORKSPACE_CONTEXT as y } from "@umbraco-cms/backoffice/workspace";
import { UmbDocumentTypeDetailRepository as f } from "@umbraco-cms/backoffice/document-type";
var d = Object.defineProperty, h = Object.getOwnPropertyDescriptor, b = (r, n, t, o) => {
  for (var e = o > 1 ? void 0 : o ? h(n, t) : n, s = r.length - 1, i; s >= 0; s--)
    (i = r[s]) && (e = (o ? i(n, t, e) : i(e)) || e);
  return o && e && d(n, t, e), e;
};
let c = class extends a(u) {
  // Initialize with an empty JSON object
  constructor() {
    super(), this.documentTypeJson = "{}", console.log("data", this.dataset), this.consumeContext(y, async (r) => {
      const t = r.getUnique();
      if (console.log(t), t) {
        const o = new f(this);
        try {
          const e = await o.requestByUnique(t);
          e && (this.documentTypeJson = JSON.stringify(e, null, 2), this.requestUpdate());
        } catch (e) {
          console.error("Error fetching document type details:", e);
        }
      }
    });
  }
  render() {
    return m`     
        <uui-box headline="Document Type Definition">
            <umb-code-block language="JSON" copy>${this.documentTypeJson}</umb-code-block>
        </uui-box>`;
  }
};
c.styles = l`
    uui-box {
        margin: 20px;
    }
  `;
c = b([
  p("my-workspaceview")
], c);
export {
  c as default
};
//# sourceMappingURL=assets.js.map
