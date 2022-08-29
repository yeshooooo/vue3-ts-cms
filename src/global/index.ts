import { App } from "vue";
import registerElement from "./register-element";
export function globalRegister(app: App): void {
  // registerElement(app);
  // 上面也可以这么写,内部传入app并会执行，只是理解上绕了一下
  app.use(registerElement);
}
