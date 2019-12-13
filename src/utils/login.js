export const formatTime = date => {
    date = new Date(date);
    var strDate = date.getFullYear()+"-";
    strDate += date.getMonth()+1+"-";
    strDate += date.getDate()+" ";
    strDate += date.getHours()+":";
    strDate += date.getMinutes()+":";
    strDate += date.getSeconds();
    return strDate ;
};