import { LitElement as i, html as p, css as u, customElement as f } from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin as a } from "@umbraco-cms/backoffice/element-api";
var c = Object.defineProperty, v = Object.getOwnPropertyDescriptor, x = (l, r, o, t) => {
  for (var e = t > 1 ? void 0 : t ? v(r, o) : r, s = l.length - 1, m; s >= 0; s--)
    (m = l[s]) && (e = (t ? m(r, o, e) : m(e)) || e);
  return t && e && c(r, o, e), e;
};
let n = class extends a(i) {
  render() {
    return p`     
     <uui-box headline="Document Type Info">
       ToDO
      </uui-box>            
    `;
  }
};
n.styles = u`
    uui-box {
      margin: 20px;
    }
  `;
n = x([
  f("my-workspaceview")
], n);
export {
  n as default
};
//# sourceMappingURL=assets.js.map
