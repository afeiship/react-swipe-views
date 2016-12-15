export default class ReactSwipeViewsUtils {
  static toIndex(inArray,inIndex){
    let _length = inArray.length - 1;
    if (inIndex == 0) {
      ReactSwipeViewsUtils.toFirst(inArray);
    }
    if (inIndex == _length) {
      ReactSwipeViewsUtils.toLast(inArray);
    }
  }

  static toLast(){
    inArray[inArray.length-1]=inArray.shift();
  }

  static toFirst(inArray){
    inArray.splice(0,0,inArray.pop());
  }
}
