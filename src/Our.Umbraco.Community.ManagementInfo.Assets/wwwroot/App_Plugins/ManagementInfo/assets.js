import { LitElement as a, html as m, css as y, customElement as c } from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin as u } from "@umbraco-cms/backoffice/element-api";
import { UMB_WORKSPACE_CONTEXT as l } from "@umbraco-cms/backoffice/workspace";
import { UmbDocumentTypeDetailRepository as b } from "@umbraco-cms/backoffice/document-type";
import { UmbMediaTypeDetailRepository as f } from "@umbraco-cms/backoffice/media-type";
import { UmbDataTypeDetailRepository as h } from "@umbraco-cms/backoffice/data-type";
import { UmbMemberTypeDetailRepository as d } from "@umbraco-cms/backoffice/member-type";
var T = Object.defineProperty, w = Object.getOwnPropertyDescriptor, U = (i, r, o, t) => {
  for (var e = t > 1 ? void 0 : t ? w(r, o) : r, s = i.length - 1, n; s >= 0; s--)
    (n = i[s]) && (e = (t ? n(r, o, e) : n(e)) || e);
  return t && e && T(r, o, e), e;
};
let p = class extends u(a) {
  constructor() {
    super(), this.documentTypeJson = "{}", this.entityType = "", this.consumeContext(l, async (i) => {
      const r = i, o = r.getUnique();
      if (this.entityType = r.getEntityType(), o) {
        let t;
        switch (this.entityType) {
          case "document-type":
            t = new b(this);
            break;
          case "media-type":
            t = new f(this);
            break;
          case "data-type":
            t = new h(this);
            break;
          case "member-type":
            t = new d(this);
            break;
          default:
            console.error("Unsupported entity type:", r.getEntityType());
            return;
        }
        try {
          const e = await t.requestByUnique(o);
          e && (this.documentTypeJson = JSON.stringify(e.data, null, 2), this.requestUpdate());
        } catch (e) {
          console.error("Error fetching entity details:", e);
        }
      }
    });
  }
  render() {
    return m`     
        <uui-box headline="${this.entityType}">
            <umb-code-block language="JSON" copy>${this.documentTypeJson}</umb-code-block>
        </uui-box>`;
  }
};
p.styles = y`
    uui-box {
        margin: 20px;
    }
  `;
p = U([
  c("management-info-workspaceview")
], p);
export {
  p as default
};
//# sourceMappingURL=assets.js.map
