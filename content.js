function _0x1155() {
  const e = [
    "等緊夠鐘!!!",
    "730XNydIk",
    "396544KHczso",
    "#DERIVED_REGFRM1_DETAILS_LINK",
    "6XPWCrF",
    "1628018xLcWbn",
    "1186995iyQpRE",
    "120283ssDzdQ",
    "click",
    "log",
    "等10秒左右～好快開始",
    "2374768eAgVFp",
    "2023-08-10 10:00:00",
    "#DERIVED_SSR_FL_SSR_ENROLL_FL",
    "prompt",
    "querySelectorAll",
    "9292qkeQDn",
    "11045835cEksCh",
    "請輸入reg科時間 (eg. 2023-08-10 10:00:00)",
    "forEach",
  ];
  return (_0x1155 = function () {
    return e;
  })();
}

const regtime = new Date(
  Date.parse(
    window.prompt(
      "請輸入reg科時間 (eg. 2023-08-10 10:00:00)",
      "2023-08-10 10:00:00"
    )
  )
);

console.log("等10秒左右～好快開始");

setTimeout(() => {
  document.querySelectorAll(".ps-checkbox").forEach((e) => {
    if (!e.checked) e.click();
  });

  const t = setInterval(() => {
    if (regtime > new Date()) {
      console.log("等緊夠鐘!!!");
    } else {
      setTimeout(() => {
        document.querySelector("#DERIVED_SSR_FL_SSR_ENROLL_FL").click();
      }, 100);
      console.log("Reg緊！");
      clearInterval(t);
    }
  }, 60);
}, 10000);
