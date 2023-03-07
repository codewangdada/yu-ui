import { getStyle } from "../utils/tools";
export default {
  mounted(el) {
    const oImgWrap = el,
      oMagWrap = oImgWrap.querySelector(".mag-wrap"),
      oMagImg = oMagWrap.querySelector(".mag-img"),
      imgWidth = getStyle(oImgWrap, "width"),
      imgHeight = getStyle(oImgWrap, "height"),
      magWidth = getStyle(oMagWrap, "width"),
      magHeight = getStyle(oMagWrap, "height"),
      imgX = oImgWrap.offsetLeft,
      imgY = oImgWrap.offsetTop;

    const init = () => {
      bindEvent();
    };

    function bindEvent() {
      oImgWrap.addEventListener("mouseover", function (e) {
        oMagWrap.className += " show";
        showMag(getXY(e).x, getXY(e).y);
        document.addEventListener("mousemove", handleMouseMove);
      });

      oImgWrap.addEventListener("mouseout", handleMouseOut, false);
    }

    function handleMouseMove(e) {
      const { x, y, mouseX, mouseY } = getXY(e);
      showMag(x, y, mouseX, mouseY);

      if (mouseX < 0 || mouseY < 0 || mouseX > imgWidth || mouseY > imgHeight) {
        oMagWrap.className = "mag-wrap";
        document.removeEventListener("mousemove", handleMouseMove, false);
      }
    }

    function handleMouseOut() {
      oMagWrap.className = "mag-wrap";
      document.removeEventListener("mousemove", handleMouseMove, false);
    }

    function showMag(x, y, mouseX, mouseY) {
      oMagWrap.style.left = x + "px";
      oMagWrap.style.top = y + "px";
      oMagImg.style.left = -x + "px";
      oMagImg.style.top = -y + "px";
    }

    function getXY(e) {
      return {
        x: e.pageX - imgX - magWidth / 2,
        y: e.pageY - imgY - magHeight / 2,
        mouseX: e.pageX - imgX,
        mouseY: e.pageY - imgY,
      };
    }

    init();
  },
};
