import resumeMarkdown from "./data/resume";
import $ from "./vQuery";
import marked from "marked";

let $resumeWrap = $("#app .resume-wrap"),
  resumeWrap = $resumeWrap.get[0],
  $resumetag = $(".resume-tag", resumeWrap),
  $resumeMarkdown = $(".resume-markdown", resumeWrap),
  currentMarkdown = "",
  length = resumeMarkdown.length,
  timer = null,
  delay = 80,
  start = 0,
  iClass = "htmlMode",
  MAX_HEIGHT;

const goBottom = top => {
  $resumeWrap.scrollTop(top);
};

export const markdownToHtml = callback => {
  $resumeMarkdown.css({
    display: "none"
  });
  $resumeWrap.addClass(iClass);
  $resumetag.html(marked(resumeMarkdown));
  callback && callback();
};

export const showResume = callback => {
  clearInterval(timer);

  timer = setInterval(() => {
    currentMarkdown += resumeMarkdown.substring(start, start + 1);
    if (currentMarkdown.length === length) {
      clearInterval(timer);
      callback && callback();
    } else {
      MAX_HEIGHT = $resumeWrap.height();
      let top = $resumeMarkdown.height() - MAX_HEIGHT;

      if (top > 0) {
        goBottom(top + 80);
      }
      $resumeMarkdown.html(currentMarkdown);
      start++;
    }
  }, delay);
};

export default {};
