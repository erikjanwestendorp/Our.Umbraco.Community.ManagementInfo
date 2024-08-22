import { LitElement as s, html as u, css as c, customElement as p } from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin as a } from "@umbraco-cms/backoffice/element-api";
var b = Object.defineProperty, f = Object.getOwnPropertyDescriptor, v = (i, r, t, o) => {
  for (var e = o > 1 ? void 0 : o ? f(r, t) : r, l = i.length - 1, m; l >= 0; l--)
    (m = i[l]) && (e = (o ? m(r, t, e) : m(e)) || e);
  return o && e && b(r, t, e), e;
};
let n = class extends a(s) {
  render() {
    return u`     
     <uui-box headline="Document Type Definition">
       <umb-code-block language="JSON" copy>{}</umb-code-block>
      </uui-box>            
    `;
  }
};
n.styles = c`
    uui-box {
      margin: 20px;
    }
  `;
n = v([
  p("my-workspaceview")
], n);
export {
  n as default
};
//# sourceMappingURL=assets.js.map
