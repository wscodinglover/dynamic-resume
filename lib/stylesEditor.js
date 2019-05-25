import styles from './data/styles';
import $ from './vQuery';
import Prism from 'prismjs';

let $stylesWrap = $('#app .styles-wrap'),
    stylesWrap = $stylesWrap.get(0),
    $style = $('style', stylesWrap),
    $stylePre = $('pre', stylesWrap),

    currentStyle = '',
    delay = 60,
    timer = null,
    MAX_HEIGHT;

const goBottom = (top) => {
    $stylesWrap.scrollTop(top)
}
/**
 *
 *
 * @param {*} num  data styles[num]
 * @param {*} callback run code
 * @returns
 */
export const showStyles = (num, callback) => {
    let style = styles[num],
        length,
        preLength;

    if (!style) return;

    length = styles.filter((item, i) => {
        return i <= num;
    }).reduce((result, item) => {
        result += item.length;
        return result
    }, 0)

    preLength = length - style.length;

    clearInterval(timer);

    timer = setInterval(() => {
        let start = currentStyle.length - preLength,
            char = style.substring(start, start + 1) || '';

        currentStyle += char;
        if (currentStyle.length === length) {
            clearInterval(timer);
            callback && callback();
        } else {
            MAX_HEIGHT = $stylesWrap.height();
            let top = $stylePre.height() - MAX_HEIGHT;

            if (top > 0) {
                goBottom(top)
            }
            $style.html(currentStyle);
            $stylePre.html(Prism.highlight(currentStyle, Prism.languages.css))
        }
    }, delay)

}

export default {}