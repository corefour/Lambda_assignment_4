'use strict';

module.exports.image = async (event) => {

  var data = [
    ["https://cdn.vox-cdn.com/thumbor/APbKLTKxfDR_Z5aJkzIpZQKvI3M=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22850511/iphone13mini.jpg", "2021 Iphone 13"],
    ["https://media.wired.com/photos/6149204955f7b3aea723343d/master/pass/Gear-Review-Apple_iPhone-13-Pro_Colors_09142021.jpg", "2021 Iphone pros"],
    ["https://www.cnet.com/a/img/resize/4a37e07554fb0e6e2799f63070297508c24b590d/hub/2021/09/21/84a56e75-1978-4de1-894f-551ed9c78881/iphone-13-and-iphone-13-mini-cnet-2021-10.jpg?auto=webp&width=1092", "2021 Iphones"]
  ];
  var key = Math.floor(Math.random() * (3 - 1)) + 1;
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/html"
    },
    body: "<image src='" + data[key][0] + "' /><p>" + data[key][1] + "</p>",

  };
};