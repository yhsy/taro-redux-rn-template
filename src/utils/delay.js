// 延迟执行
export default function (time) {
  return new Promise(function(r){
    setTimeout(r, time)
  });
}
  