import resumeMarkdown from './data/resume';
import $ from './vQuery';
import marked from 'marked';

let $resumeWrap = $('#app .resume-wrap'),
    resumeWrap = $resumeWrap.get[0],
    $resumetag = $('.resume-tag', resumeWrap),
    $resumeMarkdown = $('.resume-markdown', resumeWrap),

    currentMarkdown = '',
    length = resumeMarkdown.length,
    timer = null,
    delay = 80,
    start = 0,
    iClass = 'htmlMode';

export const markdownToHtml = (callback) => {
    $resumeMarkdown.css({
        display: 'none'
    });
    $resumeWrap.addClass(iClass);
    $resumetag.html(marked(resumeMarkdown));
    callback && callback();
}

export const showResume = (callback) => {
    clearInterval(timer);

    timer = setInterval(() => {
        currentMarkdown += resumeMarkdown.substring(start, start + 1);
        if (currentMarkdown.length === length) {
            clearInterval(timer);
            callback && callback();
        } else {
            $resumeMarkdown.html(currentMarkdown);
            start++;
        }
    }, delay)

}

export default {}