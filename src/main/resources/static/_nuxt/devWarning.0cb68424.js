let t = {};
function e(n, a) {}
function c(n, a, i) {
  !a && !t[i] && (n(!1, i), (t[i] = !0));
}
function r(n, a) {
  c(e, n, a);
}
const d = (n, a, i) => {
  r(n, `[ant-design-vue: ${a}] ${i}`);
};
export { r as a, d, e as w };
