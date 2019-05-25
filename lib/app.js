import "./styles/base.scss";
import { showStyles } from "./stylesEditor";
import { showResume, markdownToHtml } from "./resumeEditor";

/**
 * 页面渲染的顺序
 *
 * 0:  左边的样式区
 * 1:  右边的内容
 * 2:  右边的内容加样式
 * 3:  右边的内容  markdownToHtml
 * 4:  右边的内容再加样式
 */

showStyles(0, () => {
  showResume(() => {
    showStyles(1, () => {
      markdownToHtml(() => {
        showStyles(2);
      });
    });
  });
});
