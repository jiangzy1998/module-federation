const HomeList = (num) => {
    let str = "<ul>";
    for(let i=0;i<num;i++){
        str += '<ul>item' + i + '</ul>'
    }
    str += "</ul>";
    return str;
}

export default HomeList;